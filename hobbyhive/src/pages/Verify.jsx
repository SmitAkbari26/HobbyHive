import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { NavLink } from "react-router-dom";

const Verify = () => {
    return (
        <>
            <div
                className="min-h-screen flex items-center justify-center bg-gray-100
            font-roboto tracking-wider"
            >
                <div className="bg-white rounded-lg p-8 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <div className="text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-16 w-16 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
                            Email Verified Successfully
                        </h2>
                    </div>
                    <p className="mt-4 text-gray-700 text-center">
                        Congratulations! Your email has been verified
                        successfully. You are now ready to access your account.
                    </p>
                    <div className="mt-6">
                        <NavLink to="/login">
                            <PrimaryButton text="Login to Your Account" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Verify;
