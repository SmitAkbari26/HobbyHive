import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";
import Axios from "../api/axios";

const ForgotPassword = () => {
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);
    const { csrf } = useAuthContext();

    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await csrf();
        setErrors({});
        setStatus(null);
        try {
            const response = Axios.post("/forgot-password", formData);
            setStatus((await response).data.status);
        } catch (e) {
            if (error.response && error.response.status === 422) {
                // Validation errors
                setErrors(error.response.data.errors);
            } else {
                // Other errors
                console.error(error);
            }
        }
    };
    return (
        <>
            <>
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
                            <span className="text-primary">Forgot&nbsp;</span>
                            <span className="text-secondary">Password</span>
                        </div>
                        {status && (
                            <div className="text-green-500 p-2 text-center text-lg">
                                {status}
                            </div>
                        )}
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
                                <button
                                    type="submit"
                                    className="flex w-full tracking-widest justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold leading-6 text-white hover:shadow-xl hover:bg-secondary hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent"
                                >
                                    Send Mail
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </>
    );
};

export default ForgotPassword;
