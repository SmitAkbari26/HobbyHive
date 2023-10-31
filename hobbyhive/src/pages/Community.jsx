import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const Community = () => {
    const [communities, setCommunities] = useState([
        {
            id: 1,
            name: "Art Lovers",
            description:
                "A community for artists to share and discuss their work.",
            members: 532,
            popularity: 4.7,
        },
        {
            id: 2,
            name: "Tech Enthusiasts",
            description:
                "Connect with tech-savvy individuals and learn from experts.",
            members: 718,
            popularity: 4,
        },
        {
            id: 3,
            name: "Foodies United",
            description: "A culinary journey through the world of cooking.",
            members: 621,
            popularity: 1,
        },
        {
            id: 4,
            name: "Fitness Fanatics",
            description: "Stay active, get fit, and share workout tips.",
            members: 424,
            popularity: 2,
        },
    ]);

    const [newCommunity, setNewCommunity] = useState({
        name: "",
        description: "",
    });

    const handleCreateCommunity = () => {
        const newCommunityInfo = {
            id: communities.length + 1,
            members: 0,
            popularity: 0,
            ...newCommunity,
        };

        setCommunities([...communities, newCommunityInfo]);
        setNewCommunity({ name: "", description: "" });
    };

    const handleJoinCommunity = (communityId) => {
        // Implement the logic to join a community here.
        // You can add the user to the community's members.
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {communities.map((community) => (
                        <div
                            key={community.id}
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <h2 className="text-xl font-semibold text-primary">
                                {community.name}
                            </h2>
                            <hr className="my-3" />
                            <p className="text-gray-600">
                                {community.description}
                            </p>
                            <div className="flex items-center mt-2">
                                <p className="text-gray-700">
                                    Members : {community.members} | Popularity : {" "}
                                </p>
                                <div className="text-primary">
                                    {[...Array(5)].map((_, index) => (
                                        <AiFillStar
                                            key={index}
                                            className={`h-4 w-4 fill-current inline ${
                                                index < community.popularity
                                                    ? "text-yellow-500"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="p-5">
                                <PrimaryButton
                                    text="Join Community"
                                    onClick={() =>
                                        handleJoinCommunity(community.id)
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
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
