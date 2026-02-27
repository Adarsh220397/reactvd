import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LandingPage } from "../../pages/landingPage";

export const LandingRoute = () => {
  const { firebaseUser, loading } = useAuth();
  console.log(loading, "--loading");
  if (loading) return <div>Loading...</div>;

  // If logged in, redirect to dashboard (root)
  if (firebaseUser) return <Navigate to="/dashboard" replace />;

  // If not logged in, show landing page
  return <LandingPage />;
};
