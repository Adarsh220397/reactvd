import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { AuthProvider } from "./providers/authProvider.tsx";
import { AppRouter } from "./router.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>,
);
