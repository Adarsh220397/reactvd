import type { User } from "firebase/auth";
import type { AppUser } from "../types/user.types";

export interface AuthContextType {
  firebaseUser: User | null;
  appUser?: AppUser | null;
  loading: boolean;
  logout?: () => Promise<void>;
}
