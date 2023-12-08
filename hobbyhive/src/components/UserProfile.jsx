// UserProfile.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "../api/axios";

const UserProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data based on the ID from the API endpoint
        Axios.get(`/users/${id}`)
            .then((response) => {
                setUser(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, [id]);

    if (!user) {
        return (
            <div className="mt-8 text-center text-gray-600">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="mt-8 font-roboto">
            <h2 className="text-4xl p-5 font-bold mb-4 text-gray-800 tracking-wider">
                Welcome, {user.name}
            </h2>
            <div className="bg-white shadow-lg rounded-md p-8">
                <p className="text-lg text-gray-700">
                    <strong className="tracking-wider">Name:</strong> {user.name || "N/A"}
                </p>
                <p className="text-lg text-gray-700">
                    <strong className="tracking-wider">Email:</strong> {user.email || "N/A"}
                </p>
                <p className="text-lg text-gray-700">
                    <strong className="tracking-wider">Category:</strong> {user.category || "N/A"}
                </p>
                <p className="text-lg text-gray-700">
                    <strong className="tracking-wider">Subcategory:</strong> {user.subcategory || "N/A"}
                </p>
                {/* Add more profile information as needed */}
                <div className="mt-8">
                    <Link
                        to="/chat"
                        className="tracking-widest rounded-md bg-secondary px-5 py-3 text-sm leading-6 text-white hover:shadow-xl hover:bg-primary hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent"
                    >
                        Start Chat
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
