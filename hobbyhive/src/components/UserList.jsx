import React, { useEffect, useState } from "react";
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
            <h2 className="text-2xl font-semibold mb-4">User List</h2>
            <table className="min-w-full bg-gray-100">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Skills</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">
                                {user.subcategory}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
