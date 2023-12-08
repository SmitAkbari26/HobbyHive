import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../api/axios";

const UserList = ({ selectedSkill }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        Axios.get("/users")
            .then((response) => {
                setUsers(response.data.users);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    const filteredUsers = users.filter((user) =>
        user.subcategory.includes(selectedSkill.trim())
    );

    return (
        <div className="mt-8">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                User List
            </h2>
            <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-3 px-4 border-b">Name</th>
                        <th className="py-3 px-4 border-b">Email</th>
                        <th className="py-3 px-4 border-b">Skills</th>
                        <th className="py-3 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center"> 
                    {filteredUsers.map((user) => (
                        <tr
                            key={user.id}
                            className="hover:bg-gray-100 transition duration-300"
                        >
                            <td className="py-3 px-4 border-b">{user.name}</td>
                            <td className="py-3 px-4 border-b">{user.email}</td>
                            <td className="py-3 px-4 border-b">
                                {user.subcategory}
                            </td>
                            <td className="py-3 px-4 border-b">
                                <Link
                                    to={`/profile/${user.id}`}
                                    className="text-blue-500 hover:underline mr-2"
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/chat"
                                    className="text-green-500 hover:underline"
                                >
                                    Chat
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
