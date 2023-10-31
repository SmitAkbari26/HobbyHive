import React, { useState } from "react";
import {
    FaGlobe,
    FaGithub,
    FaTwitter,
    FaInstagram,
    FaFacebookF,
} from "react-icons/fa";
import useAuthContext from "../context/AuthContext";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const Profile = () => {
    const { user } = useAuthContext();

    const calculateOverallRating = (ratings) => {
        if (ratings.length === 0) return 0;
        const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
        return totalRating;
    };

    const submitRating = () => {
        if (userRating !== null) {
            setRatings([...ratings, userRating]);
            setUserRating(null);
        }
    };

    const [userRating, setUserRating] = useState(null); // User's rating
    const [ratings, setRatings] = useState([4, 5, 3, 4, 5]);

    const [showModal, setShowModal] = useState(false);
    const [newOccupation, setNewOccupation] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [users, setUsers] = useState({
        occupation: "Full Stack Developer",
        location: "Bay Area, San Francisco, CA",
    });

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const saveChanges = () => {
        setUsers({
            ...users,
            occupation: newOccupation,
            location: newLocation,
        });
        setNewOccupation("");
        setNewLocation("");
        closeModal();
    };

    const [showModalSocialLinks, setShowModalSocialLinks] = useState(false);
    const [website, setWebsite] = useState("https://example.com");
    const [github, setGithub] = useState("example");
    const [twitter, setTwitter] = useState("@example");
    const [instagram, setInstagram] = useState("example");
    const [facebook, setFacebook] = useState("example");

    const openModalSocialLinks = () => {
        setShowModalSocialLinks(true);
        setWebsite(`https://${user.name}.com`);
        setFacebook(`${user.name}`);
        setTwitter(`@${user.name}`);
        setInstagram(`${user.name}`);
        setGithub(`${user.name}`);
    };

    const closeModalSocialLinks = () => {
        setShowModalSocialLinks(false);
    };

    const saveChangesSocialLinks = () => {
        // Update the state variables with new values here
        // For example: setWebsite(newWebsiteValue);
        closeModalSocialLinks();
    };

    const [showModalSkillSection, setShowModalSkillSection] = useState(false);
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState("");
    const [knowledgePercentage, setKnowledgePercentage] = useState(50); // Default knowledge percentage

    const openModalSkillSection = () => {
        setShowModalSkillSection(true);
    };

    const closeModalSkillSection = () => {
        setShowModalSkillSection(false);
    };

    const addSkill = () => {
        if (newSkill) {
            setSkills([
                ...skills,
                { skill: newSkill, percentage: knowledgePercentage },
            ]);
            setNewSkill("");
            closeModal();
        }
    };

    return (
        <>
            <section className="bg-gray-100 font-roboto tracking-wider">
                <div className="container py-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="col">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className="text-center">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-full mx-auto mb-3"
                                        style={{ width: "150px" }}
                                    />
                                    <h5 className="my-3 text-xl font-semibold">
                                        {user && user.name}
                                    </h5>
                                    {/* Rating Section */}
                                    <div className="m-3 text-2xl">
                                        {/* Replace this with your own rating component */}
                                        <button
                                            type="button"
                                            className={`text-primary hover:text-primary-dark ${
                                                userRating === 1
                                                    ? "text-yellow-500"
                                                    : ""
                                            }`}
                                            onClick={() => setUserRating(1)}
                                        >
                                            &#9733;
                                        </button>
                                        <button
                                            type="button"
                                            className={`text-primary hover:text-primary-dark ${
                                                userRating === 2
                                                    ? "text-yellow-500"
                                                    : ""
                                            }`}
                                            onClick={() => setUserRating(2)}
                                        >
                                            &#9733;
                                        </button>
                                        <button
                                            type="button"
                                            className={`text-primary hover:text-primary-dark ${
                                                userRating === 3
                                                    ? "text-yellow-500"
                                                    : ""
                                            }`}
                                            onClick={() => setUserRating(3)}
                                        >
                                            &#9733;
                                        </button>
                                        <button
                                            type="button"
                                            className={`text-primary hover:text-primary-dark ${
                                                userRating === 4
                                                    ? "text-yellow-500"
                                                    : ""
                                            }`}
                                            onClick={() => setUserRating(4)}
                                        >
                                            &#9733;
                                        </button>
                                        <button
                                            type="button"
                                            className={`text-primary hover:text-primary-dark ${
                                                userRating === 5
                                                    ? "text-yellow-500"
                                                    : ""
                                            }`}
                                            onClick={() => setUserRating(5)}
                                        >
                                            &#9733;
                                        </button>
                                        {/* <button
                                            type="button"
                                            className="bg-primary text-white px-2 py-1 rounded-md hover:bg-opacity-80"
                                            onClick={submitRating}
                                        >
                                            Submit
                                        </button> */}
                                    </div>

                                    <p className="text-gray-500">
                                        occupation : {users && users.occupation}
                                    </p>
                                    <p className="text-gray-500">
                                        location : {users && users.location}
                                    </p>
                                    <div className="flex justify-center my-4 gap-10 ">
                                        <PrimaryButton
                                            type="button"
                                            onClick={openModal}
                                            text="Edit Profile"
                                        />
                                        <SecondaryButton
                                            type="button"
                                            text="Message"
                                        />
                                    </div>
                                </div>

                                {showModal && (
                                    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
                                        <div className="bg-white rounded-lg w-1/3 p-10">
                                            <h2 className="text-xl font-semibold mb-4">
                                                Edit Profile
                                            </h2>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="newOccupation"
                                                    className="block text-sm font-medium leading-6 text-gray-700"
                                                >
                                                    Occupation
                                                </label>
                                                <input
                                                    type="text"
                                                    id="newOccupation"
                                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                                    value={newOccupation}
                                                    onChange={(e) =>
                                                        setNewOccupation(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="newLocation"
                                                    className="block text-sm font-medium leading-6 text-gray-700"
                                                >
                                                    Location
                                                </label>
                                                <input
                                                    type="text"
                                                    id="newLocation"
                                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                                    value={newLocation}
                                                    onChange={(e) =>
                                                        setNewLocation(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="flex justify-end gap-5">
                                                <PrimaryButton
                                                    type="button"
                                                    className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-opacity-80"
                                                    onClick={saveChanges}
                                                    text="Save"
                                                />
                                                <button
                                                    type="button"
                                                    className="flex w-full tracking-widest justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white hover:shadow-xl bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent"
                                                    onClick={closeModal}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Social links */}
                            <div className="bg-white rounded-lg shadow-lg mt-4 p-10">
                                <div className="p-4">
                                    <ul className="list-none">
                                        <li className="flex justify-between items-center py-2">
                                            <FaGlobe className="text-yellow-500" />
                                            <p className="text-gray-500">
                                                {website}
                                            </p>
                                        </li>
                                        <li className="flex justify-between items-center py-2">
                                            <FaGithub
                                                style={{ color: "#333333" }}
                                            />
                                            <p className="text-gray-500">
                                                {github}
                                            </p>
                                        </li>
                                        <li className="flex justify-between items-center py-2">
                                            <FaTwitter
                                                style={{ color: "#55acee" }}
                                            />
                                            <p className="text-gray-500">
                                                {twitter}
                                            </p>
                                        </li>
                                        <li className="flex justify-between items-center py-2">
                                            <FaInstagram
                                                style={{ color: "#ac2bac" }}
                                            />
                                            <p className="text-gray-500">
                                                {instagram}
                                            </p>
                                        </li>
                                        <li className="flex justify-between items-center py-2">
                                            <FaFacebookF
                                                style={{ color: "#3b5998" }}
                                            />
                                            <p className="text-gray-500">
                                                {facebook}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <PrimaryButton
                                    type="button"
                                    className="bg-primary px-3 py-2 text-sm font-semibold text-white rounded-md hover:shadow-xl hover:bg-primary"
                                    onClick={openModalSocialLinks}
                                    text="Edit Links"
                                />

                                {showModalSocialLinks && (
                                    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
                                        <div className="bg-white rounded-lg p-6 w-1/3">
                                            <h2 className="text-xl font-semibold mb-4">
                                                Edit Links
                                            </h2>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="website"
                                                    className="block text-sm font-medium leading-6 text-gray-700"
                                                >
                                                    Website
                                                </label>
                                                <input
                                                    type="text"
                                                    id="website"
                                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                                    value={website}
                                                    onChange={(e) =>
                                                        setWebsite(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="github"
                                                    className="block text-sm font-medium leading-6 text-gray-700"
                                                >
                                                    GitHub
                                                </label>
                                                <input
                                                    type="text"
                                                    id="github"
                                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                                    value={github}
                                                    onChange={(e) =>
                                                        setGithub(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="twitter"
                                                    className="block text-sm font-medium leading-6 text-gray-700"
                                                >
                                                    Twitter
                                                </label>
                                                <input
                                                    type="text"
                                                    id="twitter"
                                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                                    value={twitter}
                                                    onChange={(e) =>
                                                        setTwitter(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="instagram"
                                                    className="block text-sm font-medium leading-6 text-gray-700"
                                                >
                                                    Instagram
                                                </label>
                                                <input
                                                    type="text"
                                                    id="instagram"
                                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                                    value={instagram}
                                                    onChange={(e) =>
                                                        setInstagram(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="facebook"
                                                    className="block text-sm font-medium leading-6 text-gray-700"
                                                >
                                                    Facebook
                                                </label>
                                                <input
                                                    type="text"
                                                    id="facebook"
                                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                                    value={facebook}
                                                    onChange={(e) =>
                                                        setFacebook(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="flex justify-end gap-5">
                                                <PrimaryButton
                                                    type="button"
                                                    className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-opacity-80"
                                                    onClick={
                                                        saveChangesSocialLinks
                                                    }
                                                    text="Save"
                                                />
                                                <button
                                                    type="button"
                                                    className="flex w-full tracking-widest justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white hover:shadow-xl bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent"
                                                    onClick={
                                                        closeModalSocialLinks
                                                    }
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col">
                            {/* User info */}
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <div className="mb-4">
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500">
                                            Full Name
                                        </p>
                                        <p className="text-gray-800 font-semibold">
                                            {user && user.name}
                                        </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500">Email</p>
                                        <p className="text-gray-800 font-semibold">
                                            {user && user.email}
                                        </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500">Phone</p>
                                        <p className="text-gray-800 font-semibold">
                                            (097) 234-5678
                                        </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500">Mobile</p>
                                        <p className="text-gray-800 font-semibold">
                                            (098) 765-4321
                                        </p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-500">Address</p>
                                        <p className="text-gray-800 font-semibold">
                                            {users && users.location}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="gap-4 mt-4">
                                <div className="bg-white rounded-lg shadow-lg p-4">
                                    <h2 className="text-gray-800 mb-4">
                                        Skills
                                    </h2>
                                    {skills.map((skillItem, index) => (
                                        <div
                                            key={index}
                                            className="gap-4 mt-4"
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <p>{skillItem.skill}</p>
                                            </div>
                                            <div className="relative pt-1">
                                                <div className="flex mb-2 items-center justify-between">
                                                    <div>
                                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-500 bg-blue-200">
                                                            Progress
                                                        </span>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-xs font-semibold inline-block text-accent">
                                                            {
                                                                skillItem.percentage
                                                            }
                                                            %
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex h-2 mb-4 overflow-hidden text-xs bg-blue-200 rounded">
                                                    <div
                                                        style={{
                                                            width: `${skillItem.percentage}%`,
                                                        }}
                                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <SecondaryButton
                                        type="button"
                                        onClick={openModalSkillSection}
                                        text="Add Skill"
                                    />
                                </div>
                                {showModalSkillSection && (
                                    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
                                        <div className="bg-white rounded-lg p-10 w-1/3">
                                            <h2 className="text-xl font-semibold mb-4">
                                                Add Skill
                                            </h2>
                                            <input
                                                type="text"
                                                placeholder="Enter skill"
                                                className="border border-gray-300 rounded w-full py-2 px-3 mb-2"
                                                value={newSkill}
                                                onChange={(e) =>
                                                    setNewSkill(e.target.value)
                                                }
                                            />
                                            <div className="flex items-center mb-2">
                                                <p className="mr-2">
                                                    Knowledge Percentage:
                                                </p>
                                                <input
                                                    type="number"
                                                    max={100}
                                                    min={50}
                                                    className="border border-gray-300 rounded w-16 py-1 px-2"
                                                    value={knowledgePercentage}
                                                    onChange={(e) =>
                                                        setKnowledgePercentage(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <span className="ml-2">%</span>
                                            </div>
                                            <div className="flex justify-end">
                                                <button
                                                    type="button"
                                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                                                    onClick={addSkill}
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    type="button"
                                                    className="ml-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                    onClick={
                                                        closeModalSkillSection
                                                    }
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
