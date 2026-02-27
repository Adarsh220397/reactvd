import { Navigate } from "react-router-dom";
import type { JSX, ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProps): JSX.Element => {
  const { firebaseUser, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!firebaseUser) return <Navigate to="/login" replace />;

  return <>{children}</>;
};
