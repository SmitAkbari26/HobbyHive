import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { PiNotification } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import useAuthContext from "../context/AuthContext";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const { user, getUser, logout } = useAuthContext();

    return (
        <>
            <nav
                className={` bg-white border-gray-200 shadow-md lg:h-[10vh] sm:h-auto`}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center">
                        <div className="w-10 h-10 mr-2">
                            <img
                                src="../public/logo.png"
                                alt="HobbyHive Logo"
                            />
                        </div>
                        <span className="font-irish text-secondary text-2xl font-semibold whitespace-nowrap tracking-widest">
                            H
                        </span>
                        <span className="font-irish text-gray-800 text-2xl font-semibold whitespace-nowrap tracking-widest">
                            obby
                        </span>
                        <span className="font-irish text-primary text-2xl font-semibold whitespace-nowrap tracking-widest">
                            H
                        </span>
                        <span className="font-irish text-gray-800 text-2xl font-semibold whitespace-nowrap tracking-widest">
                            iv
                        </span>
                        <span className="font-irish text-accent text-2xl font-semibold whitespace-nowrap tracking-widest">
                            e
                        </span>
                    </NavLink>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-secondary dark:hover:bg-primary dark:focus:ring-accent"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${
                            isMenuOpen ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-roboto -tracking-tighter font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-background md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <NavLink
                                    to="/"
                                    className="relative group block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-primary"
                                >
                                    Home
                                    <span className="absolute inset-x-0 bottom-0 h-[10%] bg-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="relative group block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-primary"
                                >
                                    Explore
                                    <span className="absolute inset-x-0 bottom-0 h-[10%] bg-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="relative group block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-primary"
                                >
                                    Resources
                                    <span className="absolute inset-x-0 bottom-0 h-[10%] bg-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="relative group block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-primary"
                                >
                                    Community
                                    <span className="absolute inset-x-0 bottom-0 h-[10%] bg-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="relative group block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-primary"
                                >
                                    Workshops & Webinars
                                    <span className="absolute inset-x-0 bottom-0 h-[10%] bg-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="relative group block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-primary"
                                >
                                    Contact
                                    <span className="absolute inset-x-0 bottom-0 h-[10%] bg-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="relative group block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-primary"
                                >
                                    FAQs
                                    <span className="absolute inset-x-0 bottom-0 h-[10%] bg-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`${
                            isMenuOpen ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium my-2 -tracking-tighter flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-background md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <div className="flex gap-4">
                                <li>
                                    <NavLink
                                        to="/"
                                        className="w-8 h-8 flex justify-center items-center  text-gray-700 rounded-full hover:text-primary md:hover:bg-transparent hover:ring-2 hover:ring-primary"
                                    >
                                        <FiSearch className="w-6 h-6 transition-transform transform scale-100 hover:scale-90 sm" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/"
                                        className="w-8 h-8 flex justify-center items-center  text-gray-700 rounded-full hover:text-secondary md:hover:bg-transparent hover:ring-2 hover:ring-secondary"
                                    >
                                        <PiNotification className="w-6 h-6 transition-transform transform scale-100 hover:scale-90" />
                                    </NavLink>
                                </li>
                                <li className="relative">
                                    {user ? ( // If there is a user, display the dropdown
                                        <>
                                            <div
                                                className="w-8 h-8 flex justify-center items-center text-gray-700 rounded-full hover:text-accent md:hover:bg-transparent hover:ring-2 hover:ring-accent cursor-pointer"
                                                onClick={toggleDropdown}
                                            >
                                                <FiUser className="w-6 h-6 transition-transform transform scale-100 hover:scale-90" />
                                            </div>

                                            {showDropdown && (
                                                <div className="absolute top-full right-0 mt-2 bg-white rounded shadow-2xl ring-2 ring-primary hover:ring-accent hover:transform hover:duration-500 font-roboto tracking-wider z-10">
                                                    <div className="p-5 text-center">
                                                        <>
                                                            <div className="mb-2 text-gray-500 flex items-center">
                                                                Welcome,{" "}
                                                                <span className="text-md font-semibold ml-1 text-gray-500">
                                                                    {user.name}
                                                                </span>
                                                            </div>
                                                            <div className="mb-2 text-gray-600 hover:">
                                                                <NavLink
                                                                    to="/profile"
                                                                    className="relative group block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0 hover:text-primary"
                                                                >
                                                                    Profile
                                                                </NavLink>
                                                            </div>
                                                            {/* You can display other user information here */}
                                                            <button
                                                                className="text-secondary font-semibold hover:text-red-500 -tracking-tighter hover:transition hover:duration-300"
                                                                onClick={logout}
                                                            >
                                                                Logout
                                                            </button>
                                                        </>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        // If there is no user, display the login NavLink
                                        <NavLink
                                            to="/login"
                                            className="w-8 h-8 flex justify-center items-center text-gray-700 rounded-full hover:text-gray-500 md:hover:bg-transparent hover:ring-2 hover:ring-gray-500"
                                        >
                                            <FiUser className="w-6 h-6 transition-transform transform scale-100 hover:scale-90" />
                                        </NavLink>
                                    )}
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
