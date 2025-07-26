"use client";

import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
  redirectTo?: string;
  requireAuth?: boolean;
  allowedRoles?: string[];
}

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Unauthorized component
const UnauthorizedMessage = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
      <p className="text-gray-600 mb-4">
        You don't have permission to access this page.
      </p>
      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Back
      </button>
    </div>
  </div>
);

export function ProtectedRoute({
  children,
  fallback,
  redirectTo = "/login",
  requireAuth = true,
  allowedRoles = [],
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && requireAuth && !isAuthenticated) {
      // Get current path for return URL
      const currentPath = window.location.pathname;
      const returnUrl =
        currentPath !== "/"
          ? `?returnUrl=${encodeURIComponent(currentPath)}`
          : "";
      router.push(`${redirectTo}${returnUrl}`);
    }
  }, [isAuthenticated, isLoading, requireAuth, redirectTo, router]);

  // Show loading state
  if (isLoading) {
    return fallback || <LoadingSpinner />;
  }

  // Check authentication requirement
  if (requireAuth && !isAuthenticated) {
    return fallback || <LoadingSpinner />;
  }

  // Check role-based access (if roles are implemented in your user object)
  if (allowedRoles.length > 0 && user) {
    // Note: This assumes you have a roles field in your user object
    // You may need to modify this based on your actual user structure
    const userRoles = (user as any).roles || [];
    const hasRequiredRole = allowedRoles.some((role) =>
      userRoles.includes(role)
    );

    if (!hasRequiredRole) {
      return <UnauthorizedMessage />;
    }
  }

  return <>{children}</>;
}

// Higher-order component for protecting pages
export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  options: Omit<ProtectedRouteProps, "children"> = {}
) {
  const AuthenticatedComponent = (props: P) => {
    return (
      <ProtectedRoute {...options}>
        <Component {...props} />
      </ProtectedRoute>
    );
  };

  AuthenticatedComponent.displayName = `withAuth(${
    Component.displayName || Component.name
  })`;

  return AuthenticatedComponent;
}

// Component for guest-only routes (redirect if authenticated)
interface GuestOnlyRouteProps {
  children: ReactNode;
  redirectTo?: string;
  fallback?: ReactNode;
}

export function GuestOnlyRoute({
  children,
  redirectTo = "/dashboard",
  fallback,
}: GuestOnlyRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, redirectTo, router]);

  // Show loading state
  if (isLoading) {
    return fallback || <LoadingSpinner />;
  }

  // Redirect if authenticated
  if (isAuthenticated) {
    return fallback || <LoadingSpinner />;
  }

  return <>{children}</>;
}

// Higher-order component for guest-only pages
export function withGuest<P extends object>(
  Component: React.ComponentType<P>,
  options: Omit<GuestOnlyRouteProps, "children"> = {}
) {
  const GuestComponent = (props: P) => {
    return (
      <GuestOnlyRoute {...options}>
        <Component {...props} />
      </GuestOnlyRoute>
    );
  };

  GuestComponent.displayName = `withGuest(${
    Component.displayName || Component.name
  })`;

  return GuestComponent;
}

// Hook for conditional rendering based on auth status
export function useConditionalRender() {
  const { isAuthenticated, isLoading, user } = useAuth();

  const renderForAuth = (
    authenticatedContent: ReactNode,
    guestContent?: ReactNode
  ) => {
    if (isLoading) return null;
    return isAuthenticated ? authenticatedContent : guestContent || null;
  };

  const renderForGuest = (
    guestContent: ReactNode,
    authenticatedContent?: ReactNode
  ) => {
    if (isLoading) return null;
    return !isAuthenticated ? guestContent : authenticatedContent || null;
  };

  const renderForRole = (roles: string[], content: ReactNode) => {
    if (isLoading || !isAuthenticated || !user) return null;

    const userRoles = (user as any).roles || [];
    const hasRole = roles.some((role) => userRoles.includes(role));

    return hasRole ? content : null;
  };

  return {
    renderForAuth,
    renderForGuest,
    renderForRole,
    isAuthenticated,
    isLoading,
    user,
  };
}
