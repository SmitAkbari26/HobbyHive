import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SecondaryButton from "../components/SecondaryButton";
import Axios from "../api/axios";

const Explore = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("query");
    const [exploreData, setExploreData] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        Axios.get("/explore")
            .then((response) => {
                setExploreData(response.data.exploreData);
            })
            .catch((error) => {
                console.error("Error fetching Explore data:", error);
            });
    }, []); // Empty dependency array ensures this effect runs only once

    // Function to filter exploreData based on searchQuery
    const filteredExploreData = searchQuery
        ? exploreData.filter((item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : exploreData;

    return (
        <div className="min-h-screen bg-gray-100 font-roboto tracking-wider">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 py-2 leading-9 tracking-wider">
                    Discover a World of
                    <span className="text-primary"> Skills&nbsp;</span>
                    <span className="text-gray-900">and </span>
                    <span className="text-secondary">Hobbies</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredExploreData.map((item) => (
                        <div
                            key={item.id}
                            className="relative group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-36 object-fit rounded-md shadow-md transform group-hover:scale-105 transition-transform"
                            />

                            {isNew(item.created_at) && (
                                <div className="absolute top-2 right-2 bg-secondary text-white px-2 rounded-full text-[0.7rem] font-medium">
                                    New
                                </div>
                            )}
                            <hr className="mt-5 bg-accent" />
                            <h2 className="text-xl font-semibold mt-4 py-2">
                                {item.title}
                            </h2>
                            <p className="text-gray-600">{item.description}</p>
                            <div className="p-5">
                                <Link to={`/explore/${item.id}`}>
                                    <SecondaryButton text="Learn More" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;

function isNew(createdAt) {
    const ONE_DAY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const currentDate = new Date();
    const exploreDate = new Date(createdAt);

    return currentDate - exploreDate < ONE_DAY;
}
