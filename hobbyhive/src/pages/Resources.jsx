import React from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "../components/SecondaryButton";

const resources = [
    {
        title: "Art & Creativity Resources",
        description:
            "Explore a wide range of articles, videos, and tutorials related to art, painting, and creativity. Enhance your artistic skills and discover new techniques.",
        link: "/resources/art",
    },
    {
        title: "Music & Instruments Resources",
        description:
            "Find resources to help you learn and master musical instruments like the guitar, piano, and more. Access sheet music, video lessons, and more.",
        link: "/resources/music",
    },
    {
        title: "Technology & Coding Resources",
        description:
            "Stay up-to-date with the latest tech trends. Access coding tutorials, web development guides, and programming resources to boost your technical skills.",
        link: "/resources/technology",
    },
    {
        title: "Sports & Fitness Resources",
        description:
            "Discover fitness routines, workout plans, and sports-related articles and videos. Stay fit and healthy while pursuing your favorite sports and activities.",
        link: "/resources/sports",
    },
];

const Resources = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-roboto tracking-wider">
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 py-2 leading-9 tracking-wider">
                    <span className="text-primary">Expand&nbsp;</span>
                    <span className="text-gray-900">Your </span>
                    <span className="text-secondary">Knowledge</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {resources.map((item, index) => (
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
