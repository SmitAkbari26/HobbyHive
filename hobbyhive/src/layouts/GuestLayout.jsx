import React from "react";
import userAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const GuestLayout = () => {
    const { user } = userAuthContext();

    return !user ? <Outlet /> : <Navigate to="/" />;
};

export default GuestLayout;
