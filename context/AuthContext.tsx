// 'use client';

// import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
// import { apiClient, ApiResponse, LoginResponse } from '../lib/api-client';

// // Types
// export interface User {
//   email: string;
//   isNewUser: boolean;
// }

// export interface AuthState {
//   user: User | null;
//   token: string | null;
//   refreshToken: string | null;
//   isLoading: boolean;
//   isAuthenticated: boolean;
//   error: string | null;
// }

// export interface AuthContextType extends AuthState {
//   requestOtp: (email: string) => Promise<ApiResponse<string>>;
//   login: (email: string, otp: string) => Promise<ApiResponse<LoginResponse>>;
//   logout: () => void;
//   clearError: () => void;
//   refreshTokens: () => Promise<boolean>;
// }

// // Action types
// type AuthAction =
//   | { type: 'SET_LOADING'; payload: boolean }
//   | { type: 'SET_ERROR'; payload: string | null }
//   | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string; refreshToken: string } }
//   | { type: 'LOGOUT' }
//   | { type: 'REFRESH_SUCCESS'; payload: { token: string; refreshToken: string } }
//   | { type: 'CLEAR_ERROR' };

// // Initial state
// const initialState: AuthState = {
//   user: null,
//   token: null,
//   refreshToken: null,
//   isLoading: false,
//   isAuthenticated: false,
//   error: null,
// };

// // Reducer
// function authReducer(state: AuthState, action: AuthAction): AuthState {
//   switch (action.type) {
//     case 'SET_LOADING':
//       return {
//         ...state,
//         isLoading: action.payload,
//       };
//     case 'SET_ERROR':
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     case 'LOGIN_SUCCESS':
//       return {
//         ...state,
//         user: action.payload.user,
//         token: action.payload.token,
//         refreshToken: action.payload.refreshToken,
//         isAuthenticated: true,
//         isLoading: false,
//         error: null,
//       };
//     case 'LOGOUT':
//       return {
//         ...initialState,
//       };
//     case 'REFRESH_SUCCESS':
//       return {
//         ...state,
//         token: action.payload.token,
//         refreshToken: action.payload.refreshToken,
//         error: null,
//       };
//     case 'CLEAR_ERROR':
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// }

// // Storage keys
// const STORAGE_KEYS = {
//   TOKEN: 'auth_token',
//   REFRESH_TOKEN: 'auth_refresh_token',
//   USER: 'auth_user',
// } as const;

// // Create context
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Provider component
// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   // Load auth state from localStorage on mount
//   useEffect(() => {
//     const loadAuthState = () => {
//       try {
//         const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
//         const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
//         const userStr = localStorage.getItem(STORAGE_KEYS.USER);

//         if (token && refreshToken && userStr) {
//           const user = JSON.parse(userStr);
//           dispatch({
//             type: 'LOGIN_SUCCESS',
//             payload: { user, token, refreshToken },
//           });
//         }
//       } catch (error) {
//         console.error('Error loading auth state:', error);
//         // Clear corrupted data
//         localStorage.removeItem(STORAGE_KEYS.TOKEN);
//         localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
//         localStorage.removeItem(STORAGE_KEYS.USER);
//       }
//     };

//     loadAuthState();
//   }, []);

//   // Save auth state to localStorage
//   const saveAuthState = (user: User, token: string, refreshToken: string) => {
//     try {
//       localStorage.setItem(STORAGE_KEYS.TOKEN, token);
//       localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
//       localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
//     } catch (error) {
//       console.error('Error saving auth state:', error);
//     }
//   };

//   // Clear auth state from localStorage
//   const clearAuthState = () => {
//     try {
//       localStorage.removeItem(STORAGE_KEYS.TOKEN);
//       localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
//       localStorage.removeItem(STORAGE_KEYS.USER);
//     } catch (error) {
//       console.error('Error clearing auth state:', error);
//     }
//   };

//   // Request OTP
//   const requestOtp = async (email: string): Promise<ApiResponse<string>> => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     dispatch({ type: 'CLEAR_ERROR' });

//     try {
//       const response = await apiClient.requestOtp({ email });
      
//       if (response.error) {
//         dispatch({ type: 'SET_ERROR', payload: response.error });
//       } else {
//         dispatch({ type: 'SET_LOADING', payload: false });
//       }

//       return response;
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : 'Failed to request OTP';
//       dispatch({ type: 'SET_ERROR', payload: errorMessage });
//       return { error: errorMessage, status: 0 };
//     }
//   };

//   // Login
//   const login = async (email: string, otp: string): Promise<ApiResponse<LoginResponse>> => {
//     dispatch({ type: 'SET_LOADING', payload: true });
//     dispatch({ type: 'CLEAR_ERROR' });

//     try {
//       const response = await apiClient.login({ email, otp });
      
//       if (response.error) {
//         dispatch({ type: 'SET_ERROR', payload: response.error });
//       } else if (response.data) {
//         const user: User = {
//           email,
//           isNewUser: response.data.isNewUser,
//         };

//         // Save to state and localStorage
//         dispatch({
//           type: 'LOGIN_SUCCESS',
//           payload: {
//             user,
//             token: response.data.token,
//             refreshToken: response.data.refreshToken,
//           },
//         });

//         saveAuthState(user, response.data.token, response.data.refreshToken);
//       }

//       return response;
//     } catch (error) {
//       const errorMessage = error instanceof Error ? error.message : 'Login failed';
//       dispatch({ type: 'SET_ERROR', payload: errorMessage });
//       return { error: errorMessage, status: 0 };
//     }
//   };

//   // Logout
//   const logout = () => {
//     dispatch({ type: 'LOGOUT' });
//     clearAuthState();
//   };

//   // Refresh tokens
//   const refreshTokens = async (): Promise<boolean> => {
//     if (!state.refreshToken) {
//       logout();
//       return false;
//     }

//     try {
//       const response = await apiClient.refreshToken({ refreshToken: state.refreshToken });
      
//       if (response.error) {
//         // Refresh token is invalid, logout user
//         logout();
//         return false;
//       } else if (response.data) {
//         // Update tokens
//         dispatch({
//           type: 'REFRESH_SUCCESS',
//           payload: {
//             token: response.data.token,
//             refreshToken: response.data.refreshToken,
//           },
//         });

//         // Update localStorage
//         if (state.user) {
//           saveAuthState(state.user, response.data.token, response.data.refreshToken);
//         }

//         return true;
//       }
//     } catch (error) {
//       console.error('Token refresh failed:', error);
//       logout();
//     }

//     return false;
//   };

//   // Clear error
//   const clearError = () => {
//     dispatch({ type: 'CLEAR_ERROR' });
//   };

//   // Auto-refresh tokens before they expire
//   useEffect(() => {
//     if (!state.token || !state.refreshToken) return;

//     // Decode JWT to get expiration time
//     try {
//       const tokenPayload = JSON.parse(atob(state.token.split('.')[1]));
//       const expirationTime = tokenPayload.exp * 1000; // Convert to milliseconds
//       const currentTime = Date.now();
//       const timeUntilExpiry = expirationTime - currentTime;
      
//       // Refresh token 5 minutes before expiry
//       const refreshTime = Math.max(timeUntilExpiry - 5 * 60 * 1000, 0);

//       if (refreshTime > 0) {
//         const timeoutId = setTimeout(() => {
//           refreshTokens();
//         }, refreshTime);

//         return () => clearTimeout(timeoutId);
//       } else {
//         // Token is already expired or about to expire, refresh immediately
//         refreshTokens();
//       }
//     } catch (error) {
//       console.error('Error parsing token:', error);
//       // If we can't parse the token, it might be invalid
//       logout();
//     }
//   }, [state.token, state.refreshToken]);

//   const contextValue: AuthContextType = {
//     ...state,
//     requestOtp,
//     login,
//     logout,
//     clearError,
//     refreshTokens,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Custom hook to use auth context
// export function useAuth(): AuthContextType {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }

// // Custom hook for authenticated API requests
// export function useAuthenticatedRequest() {
//   const { token, refreshToken, refreshTokens } = useAuth();

//   const makeRequest = async <T>(
//     endpoint: string,
//     options: RequestInit = {}
//   ): Promise<ApiResponse<T>> => {
//     if (!token) {
//       return {
//         error: 'Not authenticated',
//         status: 401,
//       };
//     }

//     return apiClient.authenticatedRequest<T>(
//       endpoint,
//       options,
//       token,
//       refreshToken || undefined,
//       async (newTokens) => {
//         // This callback is called when tokens are refreshed
//         // The context will handle updating the state
//         await refreshTokens();
//       }
//     );
//   };

//   return { makeRequest };
// }




'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { apiClient, ApiResponse, LoginResponse } from '../lib/api-client';

// Types
export interface User {
  email: string;
  isNewUser: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  requestOtp: (email: string) => Promise<ApiResponse<string>>;
  login: (email: string, otp: string) => Promise<ApiResponse<LoginResponse>>;
  logout: () => void;
  clearError: () => void;
  refreshTokens: () => Promise<boolean>;
}

// Action types
type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string; refreshToken: string } }
  | { type: 'LOGOUT' }
  | { type: 'REFRESH_SUCCESS'; payload: { token: string; refreshToken: string } }
  | { type: 'CLEAR_ERROR' };

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

// Reducer
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    case 'REFRESH_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        error: null,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

// Storage keys
const STORAGE_KEYS = {
  TOKEN: 'auth_token',
  REFRESH_TOKEN: 'auth_refresh_token',
  USER: 'auth_user',
} as const;

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const loadAuthState = () => {
      try {
        const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
        const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
        const userStr = localStorage.getItem(STORAGE_KEYS.USER);

        if (token && refreshToken && userStr) {
          const user = JSON.parse(userStr);
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: { user, token, refreshToken },
          });
        }
      } catch (error) {
        console.error('Error loading auth state:', error);
        // Clear corrupted data
        localStorage.removeItem(STORAGE_KEYS.TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER);
      }
    };

    loadAuthState();
  }, []);

  // Save auth state to localStorage and cookies
  const saveAuthState = (user: User, token: string, refreshToken: string) => {
    try {
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      
      // Also save to cookies for middleware access
      document.cookie = `auth_token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`;
      document.cookie = `auth_refresh_token=${refreshToken}; path=/; max-age=${30 * 24 * 60 * 60}; secure; samesite=strict`;
    } catch (error) {
      console.error('Error saving auth state:', error);
    }
  };

  // Clear auth state from localStorage and cookies
  const clearAuthState = () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
      
      // Clear cookies
      document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'auth_refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } catch (error) {
      console.error('Error clearing auth state:', error);
    }
  };

  // Request OTP
  // const requestOtp = async (email: string): Promise<ApiResponse<string>> => {
  //   dispatch({ type: 'SET_LOADING', payload: true });
  //   dispatch({ type: 'CLEAR_ERROR' });
    

  //   try {
  //     const response = await apiClient.requestOtp({ email });

  //     console.log(response, 'this is otp response')
      
  //     if (response.error) {
  //       dispatch({ type: 'SET_ERROR', payload: response.error });
  //     } else {
  //       dispatch({ type: 'SET_LOADING', payload: false });
  //     }

  //     console.log(response, 'this is otp response')

  //     return response;
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : 'Failed to request OTP';
  //     dispatch({ type: 'SET_ERROR', payload: errorMessage });
  //     return { error: errorMessage, status: 0 };
  //   }
  // };


  // const requestOtp = async (email: string): Promise<ApiResponse<string>> => {
  //   dispatch({ type: 'SET_LOADING', payload: true });
  //   dispatch({ type: 'CLEAR_ERROR' });
  
  //   try {
  //     const response = await apiClient.requestOtp({ email });
  
  //     if (response.error) {
  //       dispatch({ type: 'SET_ERROR', payload: response.error });
  //     }
  
  //     // Always set loading to false after the request is complete
  //     dispatch({ type: 'SET_LOADING', payload: false });
  
  //     return response;
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : 'Failed to request OTP';
  //     dispatch({ type: 'SET_ERROR', payload: errorMessage });
  //     // Ensure loading is false in case of an exception
  //     dispatch({ type: 'SET_LOADING', payload: false });
  //     return { error: errorMessage, status: 0 };
  //   }
  // };

  // // Login
  // // const login = async (email: string, otp: string): Promise<ApiResponse<LoginResponse>> => {
  // //   dispatch({ type: 'SET_LOADING', payload: true });
  // //   dispatch({ type: 'CLEAR_ERROR' });

  // //   try {
  // //     const response = await apiClient.login({ email, otp });
      
  // //     if (response.error) {
  // //       dispatch({ type: 'SET_ERROR', payload: response.error });
  // //     } else if (response.data) {
  // //       const user: User = {
  // //         email,
  // //         isNewUser: response.data.isNewUser,
  // //       };

  // //       // Save to state and localStorage
  // //       dispatch({
  // //         type: 'LOGIN_SUCCESS',
  // //         payload: {
  // //           user,
  // //           token: response.data.token,
  // //           refreshToken: response.data.refreshToken,
  // //         },
  // //       });

  // //       saveAuthState(user, response.data.token, response.data.refreshToken);
  // //     }

  // //     return response;
  // //   } catch (error) {
  // //     const errorMessage = error instanceof Error ? error.message : 'Login failed';
  // //     dispatch({ type: 'SET_ERROR', payload: errorMessage });
  // //     return { error: errorMessage, status: 0 };
  // //   }
  // // };


  // const login = async (email: string, otp: string): Promise<ApiResponse<LoginResponse>> => {
  //   dispatch({ type: 'SET_LOADING', payload: true });
  //   dispatch({ type: 'CLEAR_ERROR' });
  
  //   try {
  //     const response = await apiClient.login({ email, otp });
  
  //     // Case 1: The API returned a clear error message.
  //     if (response.error) {
  //       dispatch({ type: 'SET_ERROR', payload: response.error });
  //     }
  //     // Case 2: The API returned data, so the login was successful.
  //     else if (response.data?.token) { // Check for token to be sure
  //       const user: User = {
  //         email,
  //         isNewUser: response.data.isNewUser,
  //       };
  
  //       dispatch({
  //         type: 'LOGIN_SUCCESS',
  //         payload: {
  //           user,
  //           token: response.data.token,
  //           refreshToken: response.data.refreshToken,
  //         },
  //       });
  
  //       saveAuthState(user, response.data.token, response.data.refreshToken);
  //     }
  //     // Case 3: The API succeeded (status 200) but returned no data and no error.
  //     // This is an unexpected server behavior, so we should treat it as an error.
  //     else {
  //       dispatch({ type: 'SET_ERROR', payload: 'Login failed: Invalid response from server.' });
  //     }
  
  //     return response;
  
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred during login.';
  //     dispatch({ type: 'SET_ERROR', payload: errorMessage });
  //     return { error: errorMessage, status: 0 };
  //   } finally {
  //     // *** CRITICAL FIX ***
  //     // This ensures the loading state is ALWAYS reset, allowing the user
  //     // to try again or see an error message.
  //     dispatch({ type: 'SET_LOADING', payload: false });
  //   }
  // };
  


  const requestOtp = async (email: string): Promise<ApiResponse<string>> => {
    dispatch({ type: 'CLEAR_ERROR' });
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await apiClient.requestOtp({ email });
      if (response.error) {
        dispatch({ type: 'SET_ERROR', payload: response.error });
      }
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'A network error occurred.';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      return { error: errorMessage, status: 0 };
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };
  
  const login = async (email: string, otp: string): Promise<ApiResponse<LoginResponse>> => {
    dispatch({ type: 'CLEAR_ERROR' });
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await apiClient.login({ email, otp });
  
      if (response.error) {
        dispatch({ type: 'SET_ERROR', payload: response.error });
      } else if (response.data?.token) {
        const user: User = { email, isNewUser: response.data.isNewUser };
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user, token: response.data.token, refreshToken: response.data.refreshToken },
        });
        saveAuthState(user, response.data.token, response.data.refreshToken);
      } else {
        dispatch({ type: 'SET_ERROR', payload: 'Login failed: Invalid response from server.' });
      }
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      return { error: errorMessage, status: 0 };
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    clearAuthState();
  };

  // Refresh tokens
  const refreshTokens = async (): Promise<boolean> => {
    if (!state.refreshToken) {
      logout();
      return false;
    }

    try {
      const response = await apiClient.refreshToken({ refreshToken: state.refreshToken });
      
      if (response.error) {
        // Refresh token is invalid, logout user
        logout();
        return false;
      } else if (response.data) {
        // Update tokens
        dispatch({
          type: 'REFRESH_SUCCESS',
          payload: {
            token: response.data.token,
            refreshToken: response.data.refreshToken,
          },
        });

        // Update localStorage and cookies
        if (state.user) {
          saveAuthState(state.user, response.data.token, response.data.refreshToken);
        }

        return true;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
    }

    return false;
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Auto-refresh tokens before they expire
  useEffect(() => {
    if (!state.token || !state.refreshToken) return;

    // Decode JWT to get expiration time
    try {
      const tokenPayload = JSON.parse(atob(state.token.split('.')[1]));
      const expirationTime = tokenPayload.exp * 1000; // Convert to milliseconds
      const currentTime = Date.now();
      const timeUntilExpiry = expirationTime - currentTime;
      
      // Refresh token 5 minutes before expiry
      const refreshTime = Math.max(timeUntilExpiry - 5 * 60 * 1000, 0);

      if (refreshTime > 0) {
        const timeoutId = setTimeout(() => {
          refreshTokens();
        }, refreshTime);

        return () => clearTimeout(timeoutId);
      } else {
        // Token is already expired or about to expire, refresh immediately
        refreshTokens();
      }
    } catch (error) {
      console.error('Error parsing token:', error);
      // If we can't parse the token, it might be invalid
      logout();
    }
  }, [state.token, state.refreshToken]);

  const contextValue: AuthContextType = {
    ...state,
    requestOtp,
    login,
    logout,
    clearError,
    refreshTokens,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Custom hook for authenticated API requests
export function useAuthenticatedRequest() {
  const { token, refreshToken, refreshTokens } = useAuth();

  const makeRequest = async <T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> => {
    if (!token) {
      return {
        error: 'Not authenticated',
        status: 401,
      };
    }

    return apiClient.authenticatedRequest<T>(
      endpoint,
      options,
      token,
      refreshToken || undefined,
      async (newTokens) => {
        // This callback is called when tokens are refreshed
        // The context will handle updating the state
        await refreshTokens();
      }
    );
  };

  return { makeRequest };
}