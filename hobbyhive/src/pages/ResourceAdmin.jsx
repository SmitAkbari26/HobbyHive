import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuthContext from "../context/AuthContext";


const ResourceAdmin = () => {
    const { login, errors } = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading animation
        login(formData)
            .then(() => {
                // Handle success
                setIsLoading(false); // Stop loading animation
            })
            .catch((error) => {
                // Handle error
                setIsLoading(false); // Stop loading animation
            });
    };

    return (
        <>
            {isLoading && (
                <div className="loader-container">
                    <div className="honeycomb">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
            <div className="h-screen w-full font-roboto tracking-wider flex flex-col py-12 px-10 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto w-20"
                        src="../public/logo.png"
                        alt="HobbyHive"
                    />
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="text-center text-2xl font-bold leading-9 tracking-wider">
                        <span className="text-primary">LogIn&nbsp;</span>
                        <span className="text-gray-900">to your&nbsp;</span>
                        <span className="text-secondary">Account</span>
                    </div>
                    <form
                        className="mt-10 space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <p className="text-red-500 pt-1 text-center text-sm">
                                        {errors.email[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <NavLink
                                        to="/forgot-password"
                                        className="font-semibold text-primary hover:transition hover:duration-500 hover:text-secondary"
                                    >
                                        Forgot password?
                                    </NavLink>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus-ring caret-accent"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && (
                                    <p className="text-red-500 pt-1 text-center text-sm">
                                        {errors.password[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full tracking-widest justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold leading-6 text-white hover:shadow-xl hover:bg-secondary hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent"
                                disabled={isLoading}
                            >
                                {isLoading ? "Logging in..." : "LogIn"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not have account yet?{" "}
                        <NavLink
                            to="/register"
                            className="font-semibold leading-6 text-secondary hover:text-primary hover:transition hover:duration-500 "
                        >
                            Register here
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ResourceAdmin