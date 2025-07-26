// import { NextRequest, NextResponse } from "next/server";

// // Define route patterns
// const PUBLIC_ROUTES = [
//   "/",
//   "/login",
//   "/register",
//   "/auth",
//   "/api/auth",
//   "/api/health",
// ];

// const PROTECTED_ROUTES = [
//   "/dashboard",
//   "/profile",
//   "/settings",
//   "/admin",
//   "/api/protected",
// ];

// const AUTH_ROUTES = ["/login", "/register", "/auth"];

// // Helper function to check if a route matches a pattern
// function matchesRoute(pathname: string, routes: string[]): boolean {
//   return routes.some((route) => {
//     if (route.endsWith("*")) {
//       return pathname.startsWith(route.slice(0, -1));
//     }
//     return pathname === route || pathname.startsWith(route + "/");
//   });
// }

// // Helper function to verify JWT token
// function verifyToken(token: string): boolean {
//   try {
//     // Basic JWT structure validation
//     const parts = token.split(".");
//     if (parts.length !== 3) {
//       return false;
//     }

//     // Decode payload to check expiration
//     const payload = JSON.parse(atob(parts[1]));
//     const currentTime = Math.floor(Date.now() / 1000);

//     // Check if token is expired
//     if (payload.exp && payload.exp < currentTime) {
//       return false;
//     }

//     return true;
//   } catch (error) {
//     return false;
//   }
// }

// // Helper function to get token from request
// function getTokenFromRequest(request: NextRequest): string | null {
//   // Check Authorization header
//   const authHeader = request.headers.get("authorization");
//   if (authHeader && authHeader.startsWith("Bearer ")) {
//     return authHeader.substring(7);
//   }

//   // Check cookies
//   const tokenCookie = request.cookies.get("auth_token");
//   if (tokenCookie) {
//     return tokenCookie.value;
//   }

//   return null;
// }

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Skip middleware for static files and Next.js internals
//   if (
//     pathname.startsWith("/_next/") ||
//     pathname.startsWith("/api/_next/") ||
//     pathname.includes(".") ||
//     pathname.startsWith("/favicon")
//   ) {
//     return NextResponse.next();
//   }

//   // Get authentication token
//   const token = getTokenFromRequest(request);
//   const isAuthenticated = token ? verifyToken(token) : false;

//   // Check if route is protected
//   const isProtectedRoute = matchesRoute(pathname, PROTECTED_ROUTES);
//   const isAuthRoute = matchesRoute(pathname, AUTH_ROUTES);
//   const isPublicRoute = matchesRoute(pathname, PUBLIC_ROUTES);

//   // Handle protected routes
//   if (isProtectedRoute && !isAuthenticated) {
//     // Redirect to login with return URL
//     const loginUrl = new URL("/login", request.url);
//     loginUrl.searchParams.set("returnUrl", pathname);

//     return NextResponse.redirect(loginUrl);
//   }

//   // Handle auth routes when already authenticated
//   if (isAuthRoute && isAuthenticated) {
//     // Check for return URL
//     const returnUrl = request.nextUrl.searchParams.get("returnUrl");
//     const redirectUrl =
//       returnUrl && returnUrl.startsWith("/") ? returnUrl : "/dashboard";

//     return NextResponse.redirect(new URL(redirectUrl, request.url));
//   }

//   // Handle API routes
//   if (pathname.startsWith("/api/")) {
//     // Protected API routes
//     if (pathname.startsWith("/api/protected/") && !isAuthenticated) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     // Add auth headers to API requests
//     if (isAuthenticated && token) {
//       const response = NextResponse.next();
//       response.headers.set("x-user-authenticated", "true");
//       response.headers.set("x-auth-token", token);
//       return response;
//     }
//   }

//   // Add security headers
//   const response = NextResponse.next();

//   // Security headers
//   response.headers.set("X-Frame-Options", "DENY");
//   response.headers.set("X-Content-Type-Options", "nosniff");
//   response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
//   response.headers.set("X-XSS-Protection", "1; mode=block");

//   // Add authentication status to headers for client-side use
//   if (isAuthenticated) {
//     response.headers.set("x-user-authenticated", "true");
//   }

//   return response;
// }

// // Configure which routes the middleware should run on
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!_next/static|_next/image|favicon.ico).*)",
//   ],
// };




import { NextRequest, NextResponse } from "next/server";

// Define route patterns
const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/auth",
  "/api/auth",
  "/api/health",
];

const PROTECTED_ROUTES = [
  "/dashboard",
  "/profile",
  "/settings",
  "/admin",
  "/api/protected",
];

const AUTH_ROUTES = ["/login", "/register", "/auth"];

// Helper function to check if a route matches a pattern
function matchesRoute(pathname: string, routes: string[]): boolean {
  return routes.some((route) => {
    if (route.endsWith("*")) {
      return pathname.startsWith(route.slice(0, -1));
    }
    return pathname === route || pathname.startsWith(route + "/");
  });
}

// Helper function to verify JWT token
function verifyToken(token: string): boolean {
  try {
    // Basic JWT structure validation
    const parts = token.split(".");
    if (parts.length !== 3) {
      return false;
    }

    // Decode payload to check expiration
    const payload = JSON.parse(atob(parts[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    // Check if token is expired (with 30 second buffer for clock skew)
    if (payload.exp && payload.exp < currentTime - 30) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
}

// Helper function to get token from request
function getTokenFromRequest(request: NextRequest): string | null {
  // Check Authorization header first
  const authHeader = request.headers.get("authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.substring(7);
  }

  // Check cookies (auth_token is the key used in AuthContext)
  const tokenCookie = request.cookies.get("auth_token");
  if (tokenCookie && tokenCookie.value) {
    return tokenCookie.value;
  }

  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and Next.js internals
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/_next/") ||
    pathname.includes(".") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // Get authentication token
  const token = getTokenFromRequest(request);
  const isAuthenticated = token ? verifyToken(token) : false;

  // Check if route is protected
  const isProtectedRoute = matchesRoute(pathname, PROTECTED_ROUTES);
  const isAuthRoute = matchesRoute(pathname, AUTH_ROUTES);
  const isPublicRoute = matchesRoute(pathname, PUBLIC_ROUTES);

  // Handle protected routes
  if (isProtectedRoute && !isAuthenticated) {
    // Redirect to login with return URL
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("returnUrl", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // Handle auth routes when already authenticated
  if (isAuthRoute && isAuthenticated) {
    // Check for return URL
    const returnUrl = request.nextUrl.searchParams.get("returnUrl");
    const redirectUrl =
      returnUrl && returnUrl.startsWith("/") ? returnUrl : "/dashboard";

    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  // Handle API routes
  if (pathname.startsWith("/api/")) {
    // Protected API routes
    if (pathname.startsWith("/api/protected/") && !isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Add auth headers to API requests
    if (isAuthenticated && token) {
      const response = NextResponse.next();
      response.headers.set("x-user-authenticated", "true");
      response.headers.set("x-auth-token", token);
      return response;
    }
  }

  // Add security headers
  const response = NextResponse.next();

  // Security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Add authentication status to headers for client-side use
  if (isAuthenticated) {
    response.headers.set("x-user-authenticated", "true");
  }

  return response;
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};