import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import "../index.css";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { register, errors, successMessage } = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading animation
        localStorage.setItem("userName", formData.name);
        register(formData)
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
            <div className="h-screen w-full font-roboto tracking-wider flex flex-col py-5 px-10 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto w-20"
                        src="../public/logo.png"
                        alt="HobbyHive"
                    />
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="text-center text-2xl font-bold leading-9 tracking-wider">
                        <span className="text-primary">SignUp&nbsp;</span>
                        <span className="text-gray-900">to your&nbsp;</span>
                        <span className="text-secondary">Account</span>
                    </div>
                    {successMessage && (
                        <p className="text-green-500 p-2 text-center text-md">
                            {successMessage}
                        </p>
                    )}

                    <form
                        className="mt-4 space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Name
                            </label>
                            <div className="mt-0">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <p className="text-red-500 pt-1 text-center text-sm">
                                        {errors.name[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Email
                            </label>
                            <div className="mt-0">
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
                            </div>
                            <div className="mt-0">
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
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full tracking-widest justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold leading-6 text-white hover:shadow-xl hover:bg-primary hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent"
                                disabled={isLoading}
                            >
                                {isLoading ? "Signing Up..." : "SignUp"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-5 text-center text-sm text-gray-500">
                        Already have account?{" "}
                        <NavLink
                            to="/login"
                            className="font-semibold leading-6 text-secondary hover:text-primary hover:transition hover:duration-500 "
                        >
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
