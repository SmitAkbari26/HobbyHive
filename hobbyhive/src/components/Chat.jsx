import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Axios from "../api/axios";
import { IoIosSend } from "react-icons/io";
import useAuthContext from "../context/AuthContext";

const Chat = () => {
    const [chats, setChats] = useState([]);
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const { user, getUser } = useAuthContext();

    useEffect(() => {
        if (!user) {
            getUser();
        }

        Axios.get("/api/chats").then((response) => {
            setChats(response.data);
        });

        const pusher = new Pusher("30f6ff8059ff1a5e8161", {
            cluster: "ap2",
            encrypted: true,
        });

        const channel = pusher.subscribe("chat");
        channel.bind("App\\Events\\NewMessage", (data) => {
            setChats([...chats, data.message]);
        });

        return () => {
            channel.unbind();
            channel.unsubscribe();
        };
    }, [chats]);

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("/api/chats", {
            username: user.name,
            message: message,
        });
        setMessage("");
    };

    return (
        <div className="w-full h-[100vh] bg-gray-200">
            <div className="w-full shadow-md">
                <div className="flex flex-col h-[100vh]">
                    {/* Your chat messages or conversation area */}
                    <div className="flex-grow overflow-y-auto m-5 p-5 shadow-lg bg-white rounded-lg">
                        <div className="font-roboto">
                            {chats.map((chat) => (
                                <div key={chat.id}>
                                    <strong className="tracking-wider">
                                        {chat.username}:
                                    </strong>{" "}
                                    {chat.message}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Your message input form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center p-4"
                    >
                        <div className="flex-grow pr-2">
                            <label htmlFor="message" className="sr-only">
                                Message:
                            </label>
                            <input
                                type="text"
                                id="message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                className="w-full border rounded-md py-3 px-3 focus:outline-none ring-2 ring-white border-none focus:ring-accent"
                                placeholder="Type your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-white py-4 px-5 rounded-md hover:bg-secondary"
                        >
                            <IoIosSend />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;
