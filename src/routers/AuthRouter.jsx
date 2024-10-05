// React library Import
import { Route, Routes } from "react-router-dom";

// Component Import
import AuthLayout from "../layouts/auth";
import SignupPage from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/LoginPage";
import SignupOptPage from "../pages/auth/SignupOptPage";
import CodeInvitationPage from "../pages/auth/CodeInvitationPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import ForgotPasswordSentPage from "../pages/auth/ForgotPasswordSentPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";

const AuthRouter = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/join-invitation" element={<CodeInvitationPage />} />
                <Route path="/get-started" element={<SignupOptPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/forgot-password-sent" element={<ForgotPasswordSentPage />} />
                <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
                <Route />
            </Route>
        </Routes>
    );
};

export default AuthRouter;
