import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import type { UserRole } from "../../types/user.types";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  children: ReactNode;
  allowedRole: UserRole;
}

export const RoleRoute = ({ children, allowedRole }: Props) => {
  const { appUser, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!appUser || appUser.role !== allowedRole)
    return <Navigate to="/dashboard" replace />;

  return children;
};
