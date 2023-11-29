import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "../api/axios";

const CommunityAdmin = () => {
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        Axios.get("/communities").then((response) => {
            setCommunities(response.data.communities);
        });
    }, []); // Empty dependency array ensures this effect runs only once

    function handleApprove(communityId) {
        Axios.put(`/communities/${communityId}/approve`)
            .then(() => {
                // Update the status of the community in the state
                const updatedCommunities = communities.map((community) =>
                    community.id === communityId
                        ? { ...community, status: "approved" }
                        : community
                );
                setCommunities(updatedCommunities);
                toast.success("Community Approved!");
            })
            .catch((error) => {
                console.error("Error approving community:", error);
                toast.error("Error approving community");
            });
    }

    function handleReject(communityId) {
        Axios.put(`/communities/${communityId}/reject`)
            .then(() => {
                // Update the status of the community in the state
                const updatedCommunities = communities.map((community) =>
                    community.id === communityId
                        ? { ...community, status: "rejected" }
                        : community
                );
                setCommunities(updatedCommunities);
                toast.success("Community Rejected!");
            })
            .catch((error) => {
                console.error("Error rejecting community:", error);
                toast.error("Error rejecting community");
            });
    }

    return (
        <div className="h-screen">
            <div className="w-full flex items-start justify-start flex-col gap-5 font-roboto">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 py-2 leading-9 tracking-wider">
                    <span className="text-primary"> Communities&nbsp;</span>
                    <span className="text-gray-900">to </span>
                    <span className="text-secondary">Review</span>
                </h1>
                <div className="w-full grid grid-cols-2 gap-5  items-center justify-center">
                    {/* Card */}
                    {communities.map((community, index) => {
                        if (community.status === "pending") {
                            return (
                                <div
                                    key={index}
                                    className="hover:ring hover:outline-0 outline outline-1 ring-primary ring-offset-2 flex items-start flex-col p-5 rounded-lg shadow-md gap-5"
                                >
                                    <div className="flex flex-col items-start gap-5">
                                        <div className="flex flex-col items-start">
                                            <h1 className="font-bold text-xl">
                                                {community.name}
                                            </h1>
                                            <div className="flex items-center gap-2 justify-center text-sm text-slate-500">
                                                <FaUserAlt />
                                                <h1>{community.username}</h1>
                                            </div>
                                        </div>
                                        <div className="text-gray-500">
                                            {community.description}
                                        </div>
                                    </div>
                                    <div className="w-full flex items-end justify-end pl-10 gap-2">
                                        <div
                                            className="rounded bg-red-500 text-white p-3 flex items-center justify-center cursor-pointer"
                                            onClick={() => {
                                                handleReject(community.id);
                                            }}
                                        >
                                            <AiOutlineClose />
                                        </div>
                                        <div
                                            className="rounded bg-green-500 text-white p-3 flex items-center justify-center cursor-pointer"
                                            onClick={() => {
                                                handleApprove(community.id);
                                            }}
                                        >
                                            <MdDone />
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return null; // Do not render if not pending
                        }
                    })}
                    {/* Card end */}
                </div>
            </div>

            {/* Toast Container for Notifications */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
            />
        </div>
    );
};

export default CommunityAdmin;
