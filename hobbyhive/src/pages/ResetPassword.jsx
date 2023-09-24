import React, { useEffect, useState } from "react";
import useAuthContext from "../context/AuthContext";
import { useSearchParams, useParams, NavLink } from "react-router-dom";
import Axios from "../api/axios";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(null);
    const { csrf } = useAuthContext();

    const [searchParams] = useSearchParams();

    const { token } = useParams();

    useEffect(() => {
        setEmail(searchParams.get("email"));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await csrf();
        setErrors({});
        setStatus(null);
        try {
            const response = await Axios.post("/reset-password", {
                email,
                token,
                password,
                password_confirmation,
            });
            setStatus(await response.data.status);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Validation errors
                setErrors(error.response.data.errors);
                // setMessage(error.response.data.message);
            } else {
                // Other errors
                console.error(error);
            }
        }
    };

    return (
        <>
            <div className="h-screen w-full font-roboto tracking-wider flex flex-col py-12 px-10 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto w-20"
                        src="../public/logo.png"
                        alt="HobbyHive"
                    />
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="text-center text-2xl font-bold leading-9 tracking-wider">
                        <span className="text-primary">Reset&nbsp;</span>
                        <span className="text-gray-900">your&nbsp;</span>
                        <span className="text-secondary">Password</span>
                    </div>
                    {status && (
                        <div className="text-green-500 p-2 text-center text-lg">
                            {status}
                        </div>
                    )}
                    {errors.password && (
                        <div>
                            <p className="text-red-500 pt-1 text-center text-sm">
                                {errors.password[0]}
                            </p>
                        </div>
                    )}
                    <form
                        className="mt-4 space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-700"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-0">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus-ring caret-accent"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <div>
                                        <p className="text-red-500 pt-1 text-center text-sm">
                                            {errors.password[0]}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-sm font-medium leading-6 text-gray-700"
                                >
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-0">
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus-ring caret-accent"
                                    onChange={(e) =>
                                        setPasswordConfirmation(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full tracking-widest justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold leading-6 text-white hover:shadow-xl hover:bg-primary hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent"
                            >
                                Reset
                            </button>
                        </div>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Password Reset?{" "}
                            <NavLink
                                to="/login"
                                className="font-semibold leading-6 text-secondary hover:text-primary hover:transition hover:duration-500 "
                            >
                                Login here
                            </NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
