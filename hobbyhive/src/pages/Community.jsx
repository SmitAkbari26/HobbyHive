import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Axios from "../api/axios";
import CommunityList from "../components/CommunityList";

const Community = () => {
    const [newCommunity, setNewCommunity] = useState({
        name: "",
        description: "",
        members: 0,
        rating: 0,
        username: localStorage.getItem("userName"),
    });

    const handleCreateCommunity = async () => {
        try {
            const response = await Axios.post("/communities", newCommunity);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    const handleJoinCommunity = (communityId) => {
        console.log(`Joined Community ${communityId}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 font-roboto tracking-wider">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 py-2 leading-9 tracking-wider">
                    <span className="text-primary">Join&nbsp;</span>
                    <span className="text-gray-900">Our Vibrant </span>
                    <span className="text-secondary">Community</span>
                </h1>
                    <CommunityList />
                <div className="mt-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-8 py-2 leading-9 tracking-wider">
                        <span className="text-primary">Create&nbsp;</span>
                        <span className="text-gray-900">Your </span>
                        <span className="text-secondary">Community</span>
                    </h1>
                    <div className="max-w-md">
                        <input
                            type="text"
                            placeholder="Community Name"
                            className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus-ring caret-accent"
                            value={newCommunity.name}
                            onChange={(e) =>
                                setNewCommunity({
                                    ...newCommunity,
                                    name: e.target.value,
                                })
                            }
                        />
                        <textarea
                            placeholder="Description"
                            className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus-ring caret-accent mt-4"
                            value={newCommunity.description}
                            onChange={(e) =>
                                setNewCommunity({
                                    ...newCommunity,
                                    description: e.target.value,
                                })
                            }
                        />
                        <div className="p-5">
                            <SecondaryButton
                                text="Create Community"
                                onClick={handleCreateCommunity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
