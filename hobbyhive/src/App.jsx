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

const App = () => {
    const location = useLocation();
    const isLoginPage =
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/forgot-password" ||
        location.pathname.startsWith("/password-reset");

    return (
        <>
            {!isLoginPage ? <Navbar /> : ""}
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route exact path="/" element={<Home />} />
                </Route>
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
        </>
    );
};

export default App;
