// // API Client for Stumble Backend Authentication
// // Handles OTP requests, login, token refresh with proper error handling and fallbacks

// export interface ApiResponse<T> {
//   data?: T;
//   error?: string;
//   status: number;
// }

// export interface LoginResponse {
//   token: string;
//   refreshToken: string;
//   isNewUser: boolean;
// }

// export interface RefreshResponse {
//   token: string;
//   refreshToken: string;
//   isNewUser: boolean;
// }

// export interface RequestOtpRequest {
//   email: string;
// }

// export interface LoginRequest {
//   email: string;
//   otp: string;
// }

// export interface RefreshRequest {
//   refreshToken: string;
// }

// class ApiClient {
//   private baseUrl: string;
//   private maxRetries: number;
//   private retryDelay: number;

//   constructor(
//     baseUrl: string = "https://stumblemarket-dev-production.up.railway.app",
//     maxRetries: number = 3,
//     retryDelay: number = 1000
//   ) {
//     this.baseUrl = baseUrl;
//     this.maxRetries = maxRetries;
//     this.retryDelay = retryDelay;
//   }

//   private async delay(ms: number): Promise<void> {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

//   private async makeRequest<T>(
//     endpoint: string,
//     options: RequestInit = {},
//     retryCount: number = 0
//   ): Promise<ApiResponse<T>> {
//     try {
//       const url = `${this.baseUrl}${endpoint}`;
//       const response = await fetch(url, {
//         headers: {
//           "Content-Type": "application/json",
//           ...options.headers,
//         },
//         ...options,
//       });

//       // Handle different response types
//       let data: T | undefined;
//       const contentType = response.headers.get("content-type");

//       if (contentType && contentType.includes("application/json")) {
//         data = await response.json();
//       } else if (response.status === 200 || response.status === 201) {
//         // Handle text responses (like OTP success message)
//         const text = await response.text();
//         data = text as unknown as T;
//       }

//       if (!response.ok) {
//         // Extract error message from response
//         const errorMessage =
//           typeof data === "string"
//             ? data
//             : (data as any)?.error ||
//               `HTTP ${response.status}: ${response.statusText}`;

//         return {
//           error: errorMessage,
//           status: response.status,
//         };
//       }

//       return {
//         data,
//         status: response.status,
//       };
//     } catch (error) {
//       // Network or other errors - implement retry logic
//       if (retryCount < this.maxRetries) {
//         await this.delay(this.retryDelay * Math.pow(2, retryCount)); // Exponential backoff
//         return this.makeRequest<T>(endpoint, options, retryCount + 1);
//       }

//       return {
//         error:
//           error instanceof Error ? error.message : "Network error occurred",
//         status: 0,
//       };
//     }
//   }

//   // Request OTP for email verification
//   async requestOtp(request: RequestOtpRequest): Promise<ApiResponse<string>> {
//     if (!request.email || !request.email.trim()) {
//       return {
//         error: "Email is required",
//         status: 400,
//       };
//     }

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(request.email)) {
//       return {
//         error: "Please enter a valid email address",
//         status: 400,
//       };
//     }

//     return this.makeRequest<string>("/auth/request-otp", {
//       method: "POST",
//       body: JSON.stringify(request),
//     });
//   }

//   // Login with email and OTP
//   async login(request: LoginRequest): Promise<ApiResponse<LoginResponse>> {
//     if (!request.email || !request.email.trim()) {
//       return {
//         error: "Email is required",
//         status: 400,
//       };
//     }

//     if (!request.otp || !request.otp.trim()) {
//       return {
//         error: "OTP is required",
//         status: 400,
//       };
//     }

//     // Validate OTP format (6 digits)
//     if (!/^\d{6}$/.test(request.otp)) {
//       return {
//         error: "OTP must be 6 digits",
//         status: 400,
//       };
//     }

//     return this.makeRequest<LoginResponse>("/auth/login", {
//       method: "POST",
//       body: JSON.stringify(request),
//     });
//   }

//   // Refresh access token
//   async refreshToken(
//     request: RefreshRequest
//   ): Promise<ApiResponse<RefreshResponse>> {
//     if (!request.refreshToken || !request.refreshToken.trim()) {
//       return {
//         error: "Refresh token is required",
//         status: 400,
//       };
//     }

//     return this.makeRequest<RefreshResponse>("/auth/refresh", {
//       method: "POST",
//       body: JSON.stringify(request),
//     });
//   }

//   // Make authenticated requests with automatic token refresh
//   async authenticatedRequest<T>(
//     endpoint: string,
//     options: RequestInit = {},
//     accessToken?: string,
//     refreshToken?: string,
//     onTokenRefresh?: (newTokens: {
//       token: string;
//       refreshToken: string;
//     }) => void
//   ): Promise<ApiResponse<T>> {
//     if (!accessToken) {
//       return {
//         error: "Access token is required for authenticated requests",
//         status: 401,
//       };
//     }

//     // First attempt with current token
//     const response = await this.makeRequest<T>(endpoint, {
//       ...options,
//       headers: {
//         ...options.headers,
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     // If token is expired and we have a refresh token, try to refresh
//     if (response.status === 401 && refreshToken && onTokenRefresh) {
//       const refreshResponse = await this.refreshToken({ refreshToken });

//       if (refreshResponse.data) {
//         // Update tokens
//         onTokenRefresh({
//           token: refreshResponse.data.token,
//           refreshToken: refreshResponse.data.refreshToken,
//         });

//         // Retry the original request with new token
//         return this.makeRequest<T>(endpoint, {
//           ...options,
//           headers: {
//             ...options.headers,
//             Authorization: `Bearer ${refreshResponse.data.token}`,
//           },
//         });
//       }
//     }

//     return response;
//   }

//   // Health check
//   async healthCheck(): Promise<ApiResponse<string>> {
//     return this.makeRequest<string>("/");
//   }

//   // Update base URL (useful for environment switching)
//   setBaseUrl(url: string): void {
//     this.baseUrl = url;
//   }

//   // Get current base URL
//   getBaseUrl(): string {
//     return this.baseUrl;
//   }
// }

// // Create singleton instance
// export const apiClient = new ApiClient();

// // Export types and client
// export default ApiClient;




// API Client for Stumble Backend Authentication
// Handles OTP requests, login, token refresh with proper error handling and fallbacks

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  isNewUser: boolean;
}

export interface RefreshResponse {
  token: string;
  refreshToken: string;
  isNewUser: boolean;
}

export interface RequestOtpRequest {
  email: string;
}

export interface LoginRequest {
  email: string;
  otp: string;
}

export interface RefreshRequest {
  refreshToken: string;
}




// products 


export interface ProductImage {
  id: number;
  imageUrl: string;
  altText: string;
  isPrimary: boolean;
}

export interface ProductCategory {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  product: string;
  description: string;
  price: string;
  brand: string;
  isActive: boolean;
  category: ProductCategory;
  images: ProductImage[];
  // Add any other fields you need from the API response
}

export interface GetProductsParams {
  limit?: number;
  offset?: number;
  q?: string;
  category_id?: number;
  brand?: string;
}


class ApiClient {
  private baseUrl: string;
  private maxRetries: number;
  private retryDelay: number;

  constructor(
    baseUrl?: string,
    maxRetries: number = 3,
    retryDelay: number = 1000
  ) {
    // Use environment variable or fallback to default
    this.baseUrl =
      baseUrl ||
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://stumblemarket-dev-production.up.railway.app";
    this.maxRetries = maxRetries;
    this.retryDelay = retryDelay;
  }

  private async delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {},
    retryCount: number = 0
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      });

      // Handle different response types
      let data: T | undefined;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        try {
          data = await response.json();
        } catch (jsonError) {
          // If JSON parsing fails but response is ok, treat as text
          if (response.ok) {
            const text = await response.text();
            data = text as unknown as T;
          } else {
            throw jsonError;
          }
        }
      } else if (response.status === 200 || response.status === 201) {
        // Handle text responses (like OTP success message)
        const text = await response.text();
        data = text as unknown as T;
      }

      if (!response.ok) {
        // Extract error message from response
        let errorMessage: string;

        if (typeof data === "string") {
          errorMessage = data;
        } else if (data && typeof data === "object" && "error" in data) {
          errorMessage = (data as any).error;
        } else if (data && typeof data === "object" && "message" in data) {
          errorMessage = (data as any).message;
        } else {
          errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        }

        return {
          error: errorMessage,
          status: response.status,
        };
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      // Network or other errors - implement retry logic
      if (retryCount < this.maxRetries) {
        await this.delay(this.retryDelay * Math.pow(2, retryCount)); // Exponential backoff
        return this.makeRequest<T>(endpoint, options, retryCount + 1);
      }

      return {
        error:
          error instanceof Error ? error.message : "Network error occurred",
        status: 0,
      };
    }
  }

  // Request OTP for email verification
  async requestOtp(request: RequestOtpRequest): Promise<ApiResponse<string>> {
    if (!request.email || !request.email.trim()) {
      return {
        error: "Email is required",
        status: 400,
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(request.email)) {
      return {
        error: "Please enter a valid email address",
        status: 400,
      };
    }

    console.log("requesting otp");

    return this.makeRequest<string>("/auth/request-otp", {
      method: "POST",
      body: JSON.stringify(request),
    });
  }

  // Login with email and OTP
  async login(request: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    if (!request.email || !request.email.trim()) {
      return {
        error: "Email is required",
        status: 400,
      };
    }

    if (!request.otp || !request.otp.trim()) {
      return {
        error: "OTP is required",
        status: 400,
      };
    }

    // Validate OTP format (6 digits)
    // if (!/^\d{6}$/.test(request.otp)) {
    //   return {
    //     error: "OTP must be 6 digits",
    //     status: 400,
    //   };
    // }

    console.log(
      "ApiClient: Making POST request to /auth/login with body:",
      JSON.stringify(request)
    );

    return this.makeRequest<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(request),
    });

    // const response = await this.makeRequest<LoginResponse>("/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify(request),
    // });

    // console.log("ApiClient: Received raw response from /auth/login:", response);
    // return response;
  }

  // Refresh access token
  async refreshToken(
    request: RefreshRequest
  ): Promise<ApiResponse<RefreshResponse>> {
    if (!request.refreshToken || !request.refreshToken.trim()) {
      return {
        error: "Refresh token is required",
        status: 400,
      };
    }

    return this.makeRequest<RefreshResponse>("/auth/refresh", {
      method: "POST",
      body: JSON.stringify(request),
    });
  }

  // Make authenticated requests with automatic token refresh
  async authenticatedRequest<T>(
    endpoint: string,
    options: RequestInit = {},
    accessToken?: string,
    refreshToken?: string,
    onTokenRefresh?: (newTokens: {
      token: string;
      refreshToken: string;
    }) => Promise<void>
  ): Promise<ApiResponse<T>> {
    if (!accessToken) {
      return {
        error: "Access token is required for authenticated requests",
        status: 401,
      };
    }

    // First attempt with current token
    const response = await this.makeRequest<T>(endpoint, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // If token is expired and we have a refresh token, try to refresh
    if (response.status === 401 && refreshToken && onTokenRefresh) {
      const refreshResponse = await this.refreshToken({ refreshToken });

      if (refreshResponse.data && !refreshResponse.error) {
        // Update tokens via callback
        await onTokenRefresh({
          token: refreshResponse.data.token,
          refreshToken: refreshResponse.data.refreshToken,
        });

        // Retry the original request with new token
        return this.makeRequest<T>(endpoint, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${refreshResponse.data.token}`,
          },
        });
      }
    }

    return response;
  }

  // Health check
  async healthCheck(): Promise<ApiResponse<string>> {
    return this.makeRequest<string>("/");
  }

  // Update base URL (useful for environment switching)
  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  // Get current base URL
  getBaseUrl(): string {
    return this.baseUrl;
  }

  // products from here

  async getProducts(
    params: GetProductsParams = {}
  ): Promise<ApiResponse<Product[]>> {
    // Create a URLSearchParams object to safely build the query string
    const query = new URLSearchParams();

    // Append parameters only if they are defined
    if (params.limit !== undefined) query.append("limit", String(params.limit));
    if (params.offset !== undefined)
      query.append("offset", String(params.offset));
    if (params.q) query.append("q", params.q);
    if (params.category_id !== undefined)
      query.append("category_id", String(params.category_id));
    if (params.brand) query.append("brand", params.brand);

    const queryString = query.toString();
    const endpoint = queryString ? `/products?${queryString}` : "/products";

    // This is a public endpoint, so we use the basic makeRequest
    return this.makeRequest<Product[]>(endpoint, {
      method: "GET",
    });
  }
}






// Create singleton instance
export const apiClient = new ApiClient();

// Export types and client
export default ApiClient;