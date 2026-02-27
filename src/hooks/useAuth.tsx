import { useContext } from "react";
import type { AuthContextType } from "../interfaces/auth.interface";
import { AuthContext } from "../context/authContext";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
