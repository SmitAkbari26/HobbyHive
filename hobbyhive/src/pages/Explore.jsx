import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const skillsAndHobbies = [
    {
        title: "Art & Creativity",
        description: "Unleash your creativity with various art forms.",
        image: "../public/art.svg",
    },
    {
        title: "Music & Instruments",
        description: "Find your rhythm with music and instruments.",
        image: "../public/music.svg",
    },
    {
        title: "Technology & Coding",
        description: "Dive into the world of technology and coding.",
        image: "../public/technology.svg",
    },
    {
        title: "Sports & Fitness",
        description:
            "Stay fit and have fun with sports and fitness activities.",
        image: "../public/sport.svg",
    },
];

const Explore = () => {
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
                    {skillsAndHobbies.map((item, index) => (
                        <div
                            key={index}
                            className="relative group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105"
                        >
                            <img
                                src={`images/${item.image}`}
                                alt={item.title}
                                className="w-full h-36 object-fit rounded-md shadow-md transform group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute top-2 right-2 bg-secondary text-white px-2 rounded-full text-[0.7rem] font-medium">
                                New
                            </div>
                            <hr className="mt-5 bg-accent" />
                            <h2 className="text-xl font-semibold mt-4 py-2">
                                {item.title}
                            </h2>
                            <p className="text-gray-600">{item.description}</p>
                            <div className="p-5">
                                <Link to="/">
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
