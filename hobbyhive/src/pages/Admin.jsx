import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsUpload } from "react-icons/bs";
import { GrHistory, GrStatusUnknown } from "react-icons/gr";
import { BiLogOutCircle, BiSolidDashboard } from "react-icons/bi";
import { FaFolder, FaMoneyCheck, FaUsers } from "react-icons/fa";

const Admin = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState("dashboard");

    function changeTab(index) {
        setPage(index);
    }

    function handleLogout(){
        
    }
    return (
        <div className="w-full h-screen grid grid-cols-5 divide-x-2 divide-indigo-500">
            <div className="col-span-1 grid grid-rows-5 gap-2">
                {/* Left Section   */}
                <div
                    className="row-span-1 flex items-center justify-center flex-col cursor-pointer"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <div className="flex flex-col items-center justify-center py-5">
                        <h1 className="font-bold text-3xl">HoobyHive</h1>
                        <p className="uppercase font-bold text-sm">
                            Discover, share, and connect
                        </p>
                    </div>
                    <hr className="w-[80%]" />
                </div>
                <div className="row-span-3 flex flex-col justify-start gap-5 items-start p-5">
                    <div
                        className={`w-full flex px-5 py-2 shadow-md items-center gap-5 font-semibold cursor-pointer ${
                            page === "dashboard"
                                ? "bg-blue-400 text-white shadow-md"
                                : "hover:outline hover:outline-2 outline-blue-400"
                        } rounded-lg`}
                        onClick={() => {
                            changeTab("dashboard");
                        }}
                    >
                        <BiSolidDashboard />
                        <h1 className="text-center">Dashboard</h1>
                    </div>
                    <div
                        className={`w-full flex px-5 py-2 items-center shadow-md gap-5 font-semibold cursor-pointer ${
                            page === "community"
                                ? "bg-blue-400 text-white shadow-md"
                                : "hover:outline hover:outline-2 outline-blue-400"
                        } rounded-lg`}
                        onClick={() => {
                            changeTab("community");
                        }}
                    >
                        <FaFolder />
                        <h1 className="text-center">Community</h1>
                    </div>
                    <div
                        className={`w-full flex px-5 py-2 items-center shadow-md gap-5 font-semibold cursor-pointer ${
                            page === "explore"
                                ? "bg-blue-400 text-white shadow-md"
                                : "hover:outline hover:outline-2 outline-blue-400"
                        } rounded-lg`}
                        onClick={() => {
                            changeTab("explore");
                        }}
                    >
                        <GrHistory />
                        <h1 className="text-center">Explore</h1>
                    </div>
                    <div
                        className={`w-full flex px-5 py-2 items-center shadow-md gap-5 font-semibold cursor-pointer ${
                            page === "resources"
                                ? "bg-blue-400 text-white shadow-md"
                                : "hover:outline hover:outline-2 outline-blue-400"
                        } rounded-lg`}
                        onClick={() => {
                            changeTab("resources");
                        }}
                    >
                        <FaUsers />
                        <h1 className="text-center">Resources</h1>
                    </div>
                </div>

                <div className="row-span-1 px-5 flex justify-start items-center">
                    <div
                        className="flex py-2 px-5 items-center gap-5 font-bold text-red-700 cursor-pointer rounded-lg  hover:bg-red-700 hover:shadow-md hover:text-white duration-300"
                        onClick={() => {
                            handleLogout();
                        }}
                    >
                        <BiLogOutCircle />
                        <h1 className="text-center drop-shadow-lg">Logout</h1>
                    </div>
                </div>
            </div>
            <div className="col-span-4 p-5 overflow-y-scroll">
                <h1>This is Right Section</h1>
                {/* Right Section */}
                {/* {page === "dashboard" ? (
                  <AdminDash />
              ) : page === "review" ? (
                  <Review />
              ) : page === "history" ? (
                  <History />
              ) : page === "payouts" ? (
                  <Payouts />
              ) : (
                  ""
              )} */}
            </div>
        </div>
    );
};

export default Admin;
