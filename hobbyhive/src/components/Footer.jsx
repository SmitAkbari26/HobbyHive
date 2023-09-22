import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
        
    return (
        <footer
            className={`font-roboto -tracking-tighter font-medium flex flex-col border border-gray-100 shadow-lg bg-white rounded-tl-lg rounded-tr-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 p-4`}
        >
            <div className="container mx-auto bg-background p-3 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="flex justify-center text-lg font-semibold mb-2 text-primary">
                            About Us
                        </h3>
                        <p className="text-gray-500 flex justify-center text-center md:text-left">
                            {" "}
                            {/* Apply responsive class */}
                            At SkillSwap & HobbyConnect, we're passionate about
                            fostering a community where individuals can exchange
                            skills, pursue hobbies, and connect with like-minded
                            learners.
                            <br />
                            Our mission is to make learning and sharing talents
                            affordable, accessible, and enjoyable, bringing
                            people together through the joy of skill bartering
                            and hobby collaborations.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-primary flex justify-center">
                            Quick Links
                        </h3>
                        <div className="flex gap-10 justify-center">
                            <ul className="text-gray-500">
                                <li className="mb-2">
                                    <NavLink
                                        to="/"
                                        className="hover:text-secondary transition duration-500"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink
                                        to="/about"
                                        className="hover:text-secondary transition duration-500"
                                    >
                                        Explore
                                    </NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink
                                        to="/services"
                                        className="hover:text-secondary transition duration-500"
                                    >
                                        Resources
                                    </NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink
                                        to="/contact"
                                        className="hover:text-secondary transition duration-500"
                                    >
                                        Community
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="text-gray-500">
                                <li className="mb-2">
                                    <NavLink
                                        to="/"
                                        className="hover:text-secondary transition duration-500"
                                    >
                                        Workshops
                                    </NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink
                                        to="/about"
                                        className="hover:text-secondary transition duration-500"
                                    >
                                        Webinars
                                    </NavLink>
                                </li>
                                <li className="mb-2">
                                    <NavLink
                                        to="/services"
                                        className="hover:text-secondary transition duration-500"
                                    >
                                        FAQs
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="flex justify-center text-xl font-semibold mb-2 text-primary">
                            Contact Us
                        </h3>
                        <p className="flex justify-center text-gray-500 text-center md:text-left">
                            FF-45 HobbyHive <br />
                            Ahmedabad, Gujarat, 380008 <br />
                            Email: hobbyhive@gmail.com <br />
                            Phone: +1 (123) 456-7890
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-center text-primary">
                            Follow Us
                        </h3>
                        <ul className="flex gap-3 justify-center">
                            <li>
                                <NavLink
                                    to="/"
                                    className="w-8 h-8 flex justify-center items-center  text-gray-700 rounded-full hover:text-primary md:hover:bg-transparent hover:ring-2 hover:ring-primary"
                                >
                                    <FaFacebookF className="w-4 h-4 transition-transform transform scale-100 hover:scale-90" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="w-8 h-8 flex justify-center items-center  text-gray-700 rounded-full hover:text-secondary md:hover:bg-transparent hover:ring-2 hover:ring-secondary"
                                >
                                    <FaXTwitter className="w-4 h-4 transition-transform transform scale-100 hover:scale-90" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className="w-8 h-8 flex justify-center items-center  text-gray-700 rounded-full hover:text-accent md:hover:bg-transparent hover:ring-2 hover:ring-accent"
                                >
                                    <FaInstagram className="w-4 h-4 transition-transform transform scale-100 hover:scale-90" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 text-gray-700">
                    &copy; {new Date().getFullYear()} HobbyHive. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
