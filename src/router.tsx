import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { LandingRoute } from "./components/common/landingRoute";
import { RegisterPage } from "./pages/registerPage";
import { ProtectedRoute } from "./components/common/protectedRoutes";
import { DashboardPage } from "./pages/dashboardPage";
import { RoleRoute } from "./components/common/roleRoutes";
import { DiagramEditorPage } from "./pages/dashboardEditorPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route decides landing or dashboard */}
        <Route path="/" element={<LandingRoute />} />

        {/* Auth pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard - protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Diagram editor - only editors */}
        <Route
          path="/editor/:diagramId"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRole="editor">
                <DiagramEditorPage />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
