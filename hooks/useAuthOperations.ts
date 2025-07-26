// // "use client";

// // import { useState } from "react";
// // import { useAuth } from "../context/AuthContext";
// // import { ApiResponse, LoginResponse } from "../lib/api-client";

// // // Hook for OTP request operations
// // export function useOtpRequest() {
// //   const { requestOtp } = useAuth();
// //   const [isRequesting, setIsRequesting] = useState(false);
// //   const [otpSent, setOtpSent] = useState(false);
// //   const [error, setError] = useState<string | null>(null);

// //   const sendOtp = async (email: string): Promise<boolean> => {
// //     setIsRequesting(true);
// //     setError(null);
// //     setOtpSent(false);

// //     try {
// //       const response = await requestOtp(email);

// //       if (response.error) {
// //         setError(response.error);
// //         return false;
// //       } else {
// //         setOtpSent(true);
// //         return true;
// //       }
// //     } catch (error) {
// //       const errorMessage =
// //         error instanceof Error ? error.message : "Failed to send OTP";
// //       setError(errorMessage);
// //       return false;
// //     } finally {
// //       setIsRequesting(false);
// //     }
// //   };

// //   const reset = () => {
// //     setIsRequesting(false);
// //     setOtpSent(false);
// //     setError(null);
// //   };

// //   return {
// //     sendOtp,
// //     isRequesting,
// //     otpSent,
// //     error,
// //     reset,
// //   };
// // }

// // // Hook for login operations
// // export function useLogin() {
// //   const { login } = useAuth();
// //   const [isLoggingIn, setIsLoggingIn] = useState(false);
// //   const [error, setError] = useState<string | null>(null);

// //   const performLogin = async (
// //     email: string,
// //     otp: string
// //   ): Promise<LoginResponse | null> => {
// //     setIsLoggingIn(true);
// //     setError(null);

// //     try {
// //       const response = await login(email, otp);

// //       if (response.error) {
// //         setError(response.error);
// //         return null;
// //       } else if (response.data) {
// //         return response.data;
// //       }
// //     } catch (error) {
// //       const errorMessage =
// //         error instanceof Error ? error.message : "Login failed";
// //       setError(errorMessage);
// //     } finally {
// //       setIsLoggingIn(false);
// //     }

// //     return null;
// //   };

// //   const reset = () => {
// //     setIsLoggingIn(false);
// //     setError(null);
// //   };

// //   return {
// //     performLogin,
// //     isLoggingIn,
// //     error,
// //     reset,
// //   };
// // }

// // // Hook for logout operations
// // export function useLogout() {
// //   const { logout } = useAuth();
// //   const [isLoggingOut, setIsLoggingOut] = useState(false);

// //   const performLogout = async () => {
// //     setIsLoggingOut(true);
// //     try {
// //       // Add any cleanup logic here if needed
// //       logout();
// //     } finally {
// //       setIsLoggingOut(false);
// //     }
// //   };

// //   return {
// //     performLogout,
// //     isLoggingOut,
// //   };
// // }

// // // Hook for authentication status checks
// // export function useAuthStatus() {
// //   const { isAuthenticated, isLoading, user, error } = useAuth();

// //   return {
// //     isAuthenticated,
// //     isLoading,
// //     user,
// //     error,
// //     isGuest: !isAuthenticated && !isLoading,
// //   };
// // }

// // // Hook for protected route access
// // export function useProtectedRoute() {
// //   const { isAuthenticated, isLoading } = useAuth();

// //   const canAccess = isAuthenticated;
// //   const shouldRedirect = !isLoading && !isAuthenticated;

// //   return {
// //     canAccess,
// //     shouldRedirect,
// //     isLoading,
// //   };
// // }

// // // Hook for form validation
// // export function useAuthValidation() {
// //   const validateEmail = (email: string): string | null => {
// //     if (!email || !email.trim()) {
// //       return "Email is required";
// //     }

// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       return "Please enter a valid email address";
// //     }

// //     return null;
// //   };

// //   const validateOtp = (otp: string): string | null => {
// //     if (!otp || !otp.trim()) {
// //       return "OTP is required";
// //     }

// //     if (!/^\d{6}$/.test(otp)) {
// //       return "OTP must be 6 digits";
// //     }

// //     return null;
// //   };

// //   const validateLoginForm = (
// //     email: string,
// //     otp: string
// //   ): { email?: string; otp?: string } => {
// //     const errors: { email?: string; otp?: string } = {};

// //     const emailError = validateEmail(email);
// //     if (emailError) errors.email = emailError;

// //     const otpError = validateOtp(otp);
// //     if (otpError) errors.otp = otpError;

// //     return errors;
// //   };

// //   return {
// //     validateEmail,
// //     validateOtp,
// //     validateLoginForm,
// //   };
// // }

// // // Hook for OTP countdown timer
// // export function useOtpTimer(initialTime: number = 300) {
// //   // 5 minutes default
// //   const [timeLeft, setTimeLeft] = useState(0);
// //   const [isActive, setIsActive] = useState(false);

// //   const startTimer = () => {
// //     setTimeLeft(initialTime);
// //     setIsActive(true);
// //   };

// //   const stopTimer = () => {
// //     setIsActive(false);
// //     setTimeLeft(0);
// //   };

// //   const resetTimer = () => {
// //     setTimeLeft(initialTime);
// //   };

// //   // Timer effect would be handled in the component using this hook
// //   const formatTime = (seconds: number): string => {
// //     const minutes = Math.floor(seconds / 60);
// //     const remainingSeconds = seconds % 60;
// //     return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
// //   };

// //   return {
// //     timeLeft,
// //     isActive,
// //     startTimer,
// //     stopTimer,
// //     resetTimer,
// //     formatTime,
// //     canResend: timeLeft === 0 && !isActive,
// //   };
// // }

// // // Hook for error handling with auto-clear
// // export function useAuthError() {
// //   const { error, clearError } = useAuth();
// //   const [localError, setLocalError] = useState<string | null>(null);

// //   const setError = (error: string | null) => {
// //     setLocalError(error);
// //   };

// //   const clearAllErrors = () => {
// //     clearError();
// //     setLocalError(null);
// //   };

// //   const currentError = error || localError;

// //   return {
// //     error: currentError,
// //     setError,
// //     clearError: clearAllErrors,
// //     hasError: !!currentError,
// //   };
// // }






// "use client";

// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { ApiResponse, LoginResponse } from "../lib/api-client";

// // Hook for OTP request operations
// export function useOtpRequest() {
//   const { requestOtp } = useAuth();
//   const [isRequesting, setIsRequesting] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const sendOtp = async (email: string): Promise<boolean> => {
//     setIsRequesting(true);
//     setError(null);
//     setOtpSent(false);

//     try {
//       const response = await requestOtp(email);

//       if (response.error) {
//         setError(response.error);
//         return false;
//       } else {
//         setOtpSent(true);
//         return true;
//       }
//     } catch (error) {
//       const errorMessage =
//         error instanceof Error ? error.message : "Failed to send OTP";
//       setError(errorMessage);
//       return false;
//     } finally {
//       setIsRequesting(false);
//     }
//   };

//   const reset = () => {
//     setIsRequesting(false);
//     setOtpSent(false);
//     setError(null);
//   };

//   return {
//     sendOtp,
//     isRequesting,
//     otpSent,
//     error,
//     reset,
//   };
// }

// // Hook for login operations
// export function useLogin() {
//   const { login } = useAuth();
//   const [isLoggingIn, setIsLoggingIn] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const performLogin = async (
//     email: string,
//     otp: string
//   ): Promise<LoginResponse | null> => {
//     setIsLoggingIn(true);
//     setError(null);

//     console.log(
//       "--- Step 3: performLogin hook called. Calling context's login function. ---"
//     );

//     try {
//       const response = await login(email, otp);

//       console.log("--- Step 4: Context login function returned. ---");
//       console.log("Response from context:", response);

//       if (response.error) {
//         console.error("Error received from context:", response.error);
//         setError(response.error);
//         return null;
//       } else if (response.data) {
//         console.log("Data received from context:", response.data);
//         return response.data;
//       } else {
//         console.warn(
//           "Context returned no error and no data. This is unexpected."
//         );
//         setError("An unknown login error occurred.");
//         return null;
//       }
//     } catch (error) {
//       const errorMessage =
//         error instanceof Error ? error.message : "Login failed";
//         console.error("Critical error in performLogin hook:", errorMessage);
//       setError(errorMessage);
//     } finally {
//       setIsLoggingIn(false);
//     }

//     return null;
//   };

//   const reset = () => {
//     setIsLoggingIn(false);
//     setError(null);
//   };

//   return {
//     performLogin,
//     isLoggingIn,
//     error,
//     reset,
//   };
// }

// // Hook for logout operations
// export function useLogout() {
//   const { logout } = useAuth();
//   const [isLoggingOut, setIsLoggingOut] = useState(false);

//   const performLogout = async () => {
//     setIsLoggingOut(true);
//     try {
//       // Add any cleanup logic here if needed
//       logout();
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   return {
//     performLogout,
//     isLoggingOut,
//   };
// }

// // Hook for authentication status checks
// export function useAuthStatus() {
//   const { isAuthenticated, isLoading, user, error } = useAuth();

//   return {
//     isAuthenticated,
//     isLoading,
//     user,
//     error,
//     isGuest: !isAuthenticated && !isLoading,
//   };
// }

// // Hook for protected route access
// export function useProtectedRoute() {
//   const { isAuthenticated, isLoading } = useAuth();

//   const canAccess = isAuthenticated;
//   const shouldRedirect = !isLoading && !isAuthenticated;

//   return {
//     canAccess,
//     shouldRedirect,
//     isLoading,
//   };
// }

// // Hook for form validation
// export function useAuthValidation() {
//   const validateEmail = (email: string): string | null => {
//     if (!email || !email.trim()) {
//       return "Email is required";
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return "Please enter a valid email address";
//     }

//     return null;
//   };

//   // const validateOtp = (otp: string): string | null => {
//   //   if (!otp || !otp.trim()) {
//   //     return "OTP is required";
//   //   }

//   //   if (!/^\d{6}$/.test(otp)) {
//   //     return "OTP must be 6 digits";
//   //   }

//   //   return null;
//   // };

//   const validateOtp = (otp: string): string | null => {
//     if (!otp || !otp.trim()) {
//       return "OTP is required";
//     }

//     // This regex checks for exactly 6 letters or numbers.
//     // It is also case-insensitive.
//     if (!/^[a-z0-9]{6}$/i.test(otp)) {
//       return "OTP must be 6 characters long.";
//     }

//     return null;
//   };

//   const validateLoginForm = (
//     email: string,
//     otp: string
//   ): { email?: string; otp?: string } => {
//     const errors: { email?: string; otp?: string } = {};

//     const emailError = validateEmail(email);
//     if (emailError) errors.email = emailError;

//     const otpError = validateOtp(otp);
//     if (otpError) errors.otp = otpError;

//     return errors;
//   };

//   return {
//     validateEmail,
//     validateOtp,
//     validateLoginForm,
//   };
// }

// // Hook for OTP countdown timer with proper implementation
// export function useOtpTimer(initialTime: number = 300) {
//   // 5 minutes default
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   const startTimer = () => {
//     setTimeLeft(initialTime);
//     setIsActive(true);
//   };

//   const stopTimer = () => {
//     setIsActive(false);
//     setTimeLeft(0);
//   };

//   const resetTimer = () => {
//     setTimeLeft(initialTime);
//   };

//   // Timer effect implementation
//   useEffect(() => {
//     let intervalId: NodeJS.Timeout | null = null;

//     if (isActive && timeLeft > 0) {
//       intervalId = setInterval(() => {
//         setTimeLeft((time) => {
//           if (time <= 1) {
//             setIsActive(false);
//             return 0;
//           }
//           return time - 1;
//         });
//       }, 1000);
//     } else if (!isActive || timeLeft === 0) {
//       if (intervalId) {
//         clearInterval(intervalId);
//       }
//     }

//     return () => {
//       if (intervalId) {
//         clearInterval(intervalId);
//       }
//     };
//   }, [isActive, timeLeft]);

//   const formatTime = (seconds: number): string => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
//   };

//   return {
//     timeLeft,
//     isActive,
//     startTimer,
//     stopTimer,
//     resetTimer,
//     formatTime,
//     canResend: timeLeft === 0 && !isActive,
//   };
// }

// // Hook for error handling with auto-clear
// export function useAuthError() {
//   const { error, clearError } = useAuth();
//   const [localError, setLocalError] = useState<string | null>(null);

//   const setError = (error: string | null) => {
//     setLocalError(error);
//   };

//   const clearAllErrors = () => {
//     clearError();
//     setLocalError(null);
//   };

//   const currentError = error || localError;

//   return {
//     error: currentError,
//     setError,
//     clearError: clearAllErrors,
//     hasError: !!currentError,
//   };
// }




"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { ApiResponse, LoginResponse } from "../lib/api-client";

// Hook for OTP request operations
export function useOtpRequest() {
  const { requestOtp, isLoading, error, clearError } = useAuth(); // Use global state
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async (email: string): Promise<boolean> => {
    // No need to manage local loading state here
    const response = await requestOtp(email);

    if (response.error) {
      setOtpSent(false);
      return false;
    } else {
      setOtpSent(true);
      return true;
    }
  };

  const reset = () => {
    setOtpSent(false);
    clearError(); // Clear global error state
  };

  return {
    sendOtp,
    isRequesting: isLoading, // Directly use the global loading state
    otpSent,
    error, // Directly use the global error state
    reset,
  };
}

// Hook for login operations
export function useLogin() {
  const { login, isLoading, error, clearError } = useAuth(); // Use global state

  const performLogin = async (
    email: string,
    otp: string
  ): Promise<LoginResponse | null> => {
    // No need to manage local loading state here
    const response = await login(email, otp);

    if (response.error || !response.data?.token) {
      return null;
    }
    return response.data;
  };

  const reset = () => {
    clearError(); // Clear global error state
  };

  return {
    performLogin,
    isLoggingIn: isLoading, // Directly use the global loading state
    error, // Directly use the global error state
    reset,
  };
}

// --- The rest of the hooks in this file are fine, but are included for completeness ---

// Hook for logout operations
export function useLogout() {
  const { logout, isLoading } = useAuth();
  return {
    performLogout: logout,
    isLoggingOut: isLoading,
  };
}

// Hook for authentication status checks
export function useAuthStatus() {
  const { isAuthenticated, isLoading, user, error } = useAuth();
  return {
    isAuthenticated,
    isLoading,
    user,
    error,
    isGuest: !isAuthenticated && !isLoading,
  };
}

// Hook for form validation
export function useAuthValidation() {
  const validateEmail = (email: string): string | null => {
    if (!email || !email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return null;
  };

  const validateOtp = (otp: string): string | null => {
    if (!otp || !otp.trim()) return "OTP is required";
    if (!/^[a-z0-9]{6}$/i.test(otp)) return "OTP must be 6 characters long.";
    return null;
  };

  return { validateEmail, validateOtp };
}

// Hook for OTP countdown timer
export function useOtpTimer(initialTime: number = 300) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setTimeLeft(initialTime);
    setIsActive(true);
  };

  useEffect(() => {
    if (!isActive || timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return {
    timeLeft,
    isActive,
    startTimer,
    formatTime,
    canResend: timeLeft === 0,
  };
}
