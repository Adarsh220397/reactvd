import type { User } from "firebase/auth";
import { createContext } from "react";

// 1. Define the shape of your context
interface AuthContextType {
  user: User | null;
  loading: boolean;
}

// 2. Initialize with the correct type or null
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
