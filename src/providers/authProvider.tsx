import { onAuthStateChanged, type User } from "firebase/auth";
import { useEffect, useState, type ReactNode } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/authContext";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 3. Provide the value matching the interface
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
