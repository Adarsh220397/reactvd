import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { LandingRoute } from "./components/common/landingRoute";
import { RegisterPage } from "./pages/registerPage";
import { ProtectedRoute } from "./components/common/protectedRoutes";
import { DashboardPage } from "./pages/dashboardPage";
import { RoleRoute } from "./components/common/roleRoutes";
import { DiagramEditorPage } from "./pages/dashboardEditorPage";
import { ReactFlowProvider } from "@xyflow/react";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root */}
        <Route path="/" element={<LandingRoute />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* 🔹 Create Diagram */}
        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRole="editor">
                <ReactFlowProvider>
                  <DiagramEditorPage />
                </ReactFlowProvider>
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        {/* 🔹 Edit Diagram */}
        <Route
          path="/editor/:id"
          element={
            <ProtectedRoute>
              <RoleRoute allowedRole="editor">
                <ReactFlowProvider>
                  <DiagramEditorPage />
                </ReactFlowProvider>
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
