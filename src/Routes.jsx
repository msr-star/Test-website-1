import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import UserLogin from './pages/user-login';
import UserRegistration from './pages/user-registration';
import AssessmentDashboard from './pages/assessment-dashboard';
import PersonalityAssessment from './pages/personality-assessment';
import SkillsEvaluation from './pages/skills-evaluation';
import AssessmentResults from './pages/assessment-results';
import AdminDashboard from './pages/admin-dashboard';
import ProtectedRoute from './components/ProtectedRoute'; // ✅ Import ProtectedRoute

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Public Routes */}
          <Route path="/" element={<UserLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-registration" element={<UserRegistration />} />
          
          {/* Protected Student Routes */}
          <Route
            path="/assessment-dashboard"
            element={
              <ProtectedRoute>
                <AssessmentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/personality-assessment"
            element={
              <ProtectedRoute>
                <PersonalityAssessment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/skills-evaluation"
            element={
              <ProtectedRoute>
                <SkillsEvaluation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assessment-results"
            element={
              <ProtectedRoute>
                <AssessmentResults />
              </ProtectedRoute>
            }
          />

          {/* Protected Admin Route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}> {/* Only admins can access */}
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
