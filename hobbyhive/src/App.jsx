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

const App = () => {
    const location = useLocation();
    const isLoginPage =
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/forgot-password" ||
        location.pathname === "/profile" ||
        location.pathname === "/email/verify/success" ||
        location.pathname === "/admin" ||
        location.pathname.startsWith("/password-reset");

    return (
        <>
            {!isLoginPage ? <Navbar /> : ""}
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route exact path="/profile" element={<Profile />} />
                </Route>
                <Route>
                    <Route exact path="/" element={<Home />} />
                </Route>
                <Route>
                    <Route exact path="/admin" element={<Admin />} />
                </Route>
                <Route>
                    <Route exact path="/faqs" element={<Faqs />} />
                </Route>
                <Route>
                    <Route exact path="/contact" element={<Contact />} />
                </Route>
                <Route>
                    <Route exact path="/explore" element={<Explore />} />
                    <Route
                        exact
                        path="/explore/:id"
                        element={<ExploreDetails />}
                    />
                </Route>
                <Route>
                    <Route exact path="/resources" element={<Resources />} />
                </Route>
                <Route>
                    <Route exact path="/community" element={<Community />} />
                </Route>
                <Route>
                    <Route
                        exact
                        path="/email/verify/success"
                        element={<Verify />}
                    />
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
