import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiCommunityLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { GrResources } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import CommunityAdmin from "./CommunityAdmin";
import ExploreAdmin from "./ExploreAdmin";
import ResourceAdmin from "./ResourceAdmin";
import DashboardAdmin from "./DashboardAdmin";

const Admin = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState("dashboard");

    function changeTab(index) {
        setPage(index);
    }

    function handleLogout(){
        
    }

    return (
        <div className="w-full h-screen grid grid-cols-5 divide-x-2 font-roboto tracking-wider">
            <div className="col-span-1 grid grid-rows-5 gap-2">
                {/* Left Section   */}
                <div
                    className="row-span-1 flex items-center justify-center flex-col cursor-pointer"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <div className="flex flex-col items-center justify-center py-5">
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
                    </div>
                    <hr className="w-[80%]" />
                </div>
                <div className="row-span-3 flex flex-col justify-start gap-5 items-start p-5">
                    <div
                        className={`w-full flex px-5 py-2 shadow-md items-center gap-5  cursor-pointer ${
                            page === "dashboard"
                                ? "bg-primary text-white shadow-md"
                                : "hover:outline hover:outline-2 outline-accent"
                        } rounded-lg`}
                        onClick={() => {
                            changeTab("dashboard");
                        }}
                    >
                        <RxDashboard />
                        <h1 className="text-center">Dashboard</h1>
                    </div>
                    <div
                        className={`w-full flex px-5 py-2 items-center shadow-md gap-5  cursor-pointer ${
                            page === "community"
                                ? "bg-primary text-white shadow-md"
                                : "hover:outline hover:outline-2 outline-accent"
                        } rounded-lg`}
                        onClick={() => {
                            changeTab("community");
                        }}
                    >
                        <RiCommunityLine />
                        <h1 className="text-center">Community</h1>
                    </div>
                    <div
                        className={`w-full flex px-5 py-2 items-center shadow-md gap-5  cursor-pointer ${
                            page === "explore"
                                ? "bg-primary text-white shadow-md"
                                : "hover:outline hover:outline-2 outline-accent"
                        } rounded-lg`}
                        onClick={() => {
                            changeTab("explore");
                        }}
                    >
                        <MdOutlineExplore />
                        <h1 className="text-center">Explore</h1>
                    </div>
                    <div
                        className={`w-full flex px-5 py-2 items-center shadow-md gap-5  cursor-pointer ${
                            page === "resources"
                                ? "bg-primary text-white shadow-md"
                                : "hover:outline hover:outline-2 outline-accent"
                        } rounded-lg`}
                        onClick={() => {
                            changeTab("resources");
                        }}
                    >
                        <GrResources/>
                        <h1 className="text-center">Resources</h1>
                    </div>
                </div>

                <div className="w-full px-5 flex justify-start items-center">
                    <div
                        className="w-full flex py-2 px-5 items-center shadow-md gap-5 bg-red-500 font-bold text-white cursor-pointer rounded-lg  hover:bg-white hover:text-red-700 hover:shadow-md hover:outline hover:outline-2 outline-red-500"
                        onClick={() => {
                            handleLogout();
                        }}
                    >
                        <IoIosLogOut />
                        <h1 className="text-center drop-shadow-lg">Logout</h1>
                    </div>
                </div>
            </div>
            <div className="col-span-4 px-5 overflow-y-scroll">
                {/* Right Section */}
                {page === "dashboard" ? (
                    <DashboardAdmin />
                ) : page === "community" ? (
                    <CommunityAdmin />
                ) : page === "explore" ? (
                    <ExploreAdmin />
                ) : page === "resources" ? (
                    <ResourceAdmin />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Admin;
