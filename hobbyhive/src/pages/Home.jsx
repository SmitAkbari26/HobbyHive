import React, { useEffect } from "react";
import useAuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const Home = () => {
    const { user, getUser } = useAuthContext();

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, []);
    return (
        <>
            <div className="h-[90vh] flex flex-col justify-center items-center bg-gray-100 font-roboto tracking-wider">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Welcome,
                        <div className="text-center text-5xl py-2 font-bold leading-9 tracking-wider">
                            <span className="text-primary">Hobb</span>
                            <span className="text-gray-900">yH</span>
                            <span className="text-secondary">ive</span>!
                        </div>
                    </h1>
                    <p className="text-gray-700 mb-6">
                        <span className="font-mooli">
                            Discover, share, and connect
                        </span>{" "}
                        with like-minded individuals. <br /> Learn new skills or
                        share your expertise. <br />
                        We're here to empower your{" "}
                        <span className="font-mooli">talents and passions</span>
                        .
                    </p>
                    <div className="flex justify-center gap-5">
                        <Link to="/login">
                            <PrimaryButton text="Get Started" />
                        </Link>
                        <Link to="/explore">
                            <SecondaryButton text="Explore More" />
                        </Link>
                    </div>
                    <div className="absolute overflow-x-hidden overflow-y-hidden top-0 left-0 w-full h-full pointer-events-none">
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className={`${
                                    index % 2 === 0
                                        ? "bg-primary"
                                        : "bg-secondary"
                                } absolute w-16 h-16 rounded-full opacity-30 animate-ping transform duration-1000 ease-in-out`}
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                            ></div>
                        ))}
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className={`${
                                    index % 2 === 0
                                        ? "bg-primary"
                                        : "bg-secondary"
                                } absolute w-16 h-16 opacity-20 animate-spin`}
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                            ></div>
                        ))}
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className={`${
                                    index % 2 === 0
                                        ? "bg-primary"
                                        : "bg-secondary"
                                } absolute w-8 h-8 rounded-full opacity-40 animate-bounce`}
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
