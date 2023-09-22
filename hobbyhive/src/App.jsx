import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";

const App = () => {
    const location = useLocation();
    const isLoginPage =
        location.pathname === "/login" || location.pathname === "/register";

    return (
        <>
            {!isLoginPage ? <Navbar /> : ""}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
            </Routes>
            {!isLoginPage ? <Footer /> : ""}
        </>
    );
};

export default App;
