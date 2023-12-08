import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SecondaryButton from "../components/SecondaryButton";
import Axios from "../api/axios";

const Resources = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("query");

    const [resources, setResources] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        Axios.get("/resource")
            .then((response) => {
                setResources(response.data.resources);
                console.log(response.data.resources);
            })
            .catch((error) => {
                console.error("Error fetching Explore data:", error);
            });
    }, []);

    const filteredResources = searchQuery
        ? resources.filter((item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : resources;

    return (
        <div className="min-h-screen bg-gray-100 font-roboto tracking-wider">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 py-2 leading-9 tracking-wider">
                    <span className="text-primary">Expand&nbsp;</span>
                    <span className="text-gray-900">Your </span>
                    <span className="text-secondary">Knowledge</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredResources.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
                        >
                            <h2 className="text-xl font-semibold">
                                {item.title}
                            </h2>
                            <hr className="my-2 bg-accent" />
                            <p className="text-gray-600">{item.description}</p>
                            <div className="p-4">
                                <Link to={item.link}>
                                    <SecondaryButton text="Explore Resources" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
