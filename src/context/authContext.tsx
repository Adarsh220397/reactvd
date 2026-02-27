import { createContext } from "react";
import type { AuthContextType } from "../interfaces/auth.interface";

export const AuthContext = createContext<AuthContextType>({
  firebaseUser: null,
  loading: true,
});
