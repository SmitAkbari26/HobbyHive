import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import Verify from "./pages/Verify";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Admin from "./pages/Admin";
import ExploreDetails from "./components/ExploreDetails";
import Chat from "./components/Chat";
import ErrorBoundary from "./components/ErrorBoundary";
import UserProfile from "./components/UserProfile";

const App = () => {
    const location = useLocation();
    const isLoginPage =
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/forgot-password" ||
        location.pathname === "/profile" ||
        location.pathname === "/email/verify/success" ||
        location.pathname === "/admin" ||
        location.pathname === "/chat" ||
        location.pathname.startsWith("/password-reset") ||
        location.pathname.startsWith("/profile");

    return (
        <ErrorBoundary>
            {!isLoginPage ? <Navbar /> : ""}
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/chat" element={<Chat />} />
                </Route>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/admin" element={<Admin />} />
                    <Route exact path="/faqs" element={<Faqs />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/explore" element={<Explore />} />
                    <Route
                        exact
                        path="/explore/:id"
                        element={<ExploreDetails />}
                    />
                    <Route
                        exact
                        path="/profile/:id"
                        element={<UserProfile />}
                    />
                    <Route exact path="/resources" element={<Resources />} />
                    <Route exact path="/community" element={<Community />} />
                    <Route
                        exact
                        path="/email/verify/success"
                        element={<Verify />}
                    />
                <Route element={<GuestLayout />}>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route
                        exact
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        exact
                        path="/password-reset/:token"
                        element={<ResetPassword />}
                    />
                </Route>
            </Routes>
            {!isLoginPage ? <Footer /> : ""}
        </ErrorBoundary>
    );
};

export default App;
