import React, { useState } from "react";
import Axios from "../api/axios";

const ResourceAdmin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        new_links: [],
        blogs: [],
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleArrayChange = (e) => {
        // Assuming that new_links and blogs are arrays of strings
        const arrayValue = e.target.value.split(",").map((item) => item.trim());

        setFormData({
            ...formData,
            [e.target.name]: arrayValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const resourceData = new FormData();
        resourceData.append("title", formData.title);
        resourceData.append("description", formData.description);
        resourceData.append("new_links", JSON.stringify(formData.new_links));
        resourceData.append("blogs", JSON.stringify(formData.blogs));

        try {
            const response = await Axios.post("/add-resource", resourceData);

            setIsLoading(false);
            setErrors({}); // Clear previous errors
            setFormData({
                title: "",
                description: "",
                new_links: [],
                blogs: [],
            }); // Clear form data

            console.log("Resource added:", response.data.resource);
        } catch (error) {
            setIsLoading(false);
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
            console.error("Error adding resource:", error);
        }
    };

    return (
        <>
            {isLoading && (
                <div className="loader-container">
                    <div className="honeycomb">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
            <div className="h-screen w-full font-roboto tracking-wider flex flex-col px-10 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="text-center text-2xl font-bold leading-9 tracking-wider">
                        <span className="text-primary">Add&nbsp;</span>
                        <span className="text-secondary">Resources</span>
                    </div>
                    <form
                        className="mt-10 space-y-6"
                        action="#"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    autoComplete="title"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                                {errors.title && (
                                    <p className="text-red-500 pt-1 text-center text-sm">
                                        {errors.title[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium leading-6 text-gray-700"
                                >
                                    Description
                                </label>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus-ring caret-accent"
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.description && (
                                    <p className="text-red-500 pt-1 text-center text-sm">
                                        {errors.description[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="new_links"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                New Links (Comma-separated)
                            </label>
                            <div className="mt-2">
                                <input
                                    id="new_links"
                                    name="new_links"
                                    type="text"
                                    autoComplete="new_links"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                    onChange={handleArrayChange}
                                />
                                {errors.new_links && (
                                    <p className="text-red-500 pt-1 text-center text-sm">
                                        {errors.new_links[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="blogs"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Blogs (Comma-separated)
                            </label>
                            <div className="mt-2">
                                <input
                                    id="blogs"
                                    name="blogs"
                                    type="text"
                                    autoComplete="blogs"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                    onChange={handleArrayChange}
                                />
                                {errors.blogs && (
                                    <p className="text-red-500 pt-1 text-center text-sm">
                                        {errors.blogs[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full tracking-widest justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold leading-6 text-white hover:shadow-xl hover:bg-secondary hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent"
                                disabled={isLoading}
                            >
                                {isLoading ? "Adding..." : "Add"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ResourceAdmin;
