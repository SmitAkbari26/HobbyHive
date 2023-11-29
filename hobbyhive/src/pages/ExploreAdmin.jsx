import React, { useState, useEffect } from "react";
import Axios from "../api/axios";

const ExploreAdmin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: null,
        subcategories: [],
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        // Handle the case when the file input value is null or undefined
        const image = e.target.files ? e.target.files[0] : null;

        setFormData({
            ...formData,
            image,
        });
    };

    const handleSubcategoriesChange = (e) => {
        // Split the comma-separated values into an array
        const subcategoriesArray = e.target.value.split(",");

        setFormData({
            ...formData,
            subcategories: subcategoriesArray,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const exploreData = new FormData();
        exploreData.append("title", formData.title);
        exploreData.append("description", formData.description);
        exploreData.append("image", formData.image);
        // Convert subcategories array to a JSON string and append it to FormData
        exploreData.append(
            "subcategories",
            JSON.stringify(formData.subcategories)
        );

        Axios.post("/add-explore", exploreData)
            .then(() => {
                setIsLoading(false);
                setErrors({}); // Clear previous errors
                setFormData({
                    title: "",
                    description: "",
                    image: null,
                    subcategories: [],
                }); // Clear form data
            })
            .catch((error) => {
                setIsLoading(false);
                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
                console.error("Error adding explore:", error);
            });
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
                        <span className="text-secondary">Category</span>
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
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="image"
                                    className="block text-sm font-medium leading-6 text-gray-700"
                                >
                                    Image
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus-ring caret-accent"
                                    onChange={handleImageChange}
                                />
                                {errors.image && (
                                    <p className="text-red-500 pt-1 text-center text-sm">
                                        {errors.image[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subcategories"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Subcategories (Comma-separated)
                            </label>
                            <div className="mt-2">
                                <input
                                    id="subcategories"
                                    name="subcategories"
                                    type="text"
                                    autoComplete="subcategories"
                                    required
                                    className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                    value={formData.subcategories.join(",")} // Convert array to comma-separated values
                                    onChange={handleSubcategoriesChange}
                                />
                                {errors.subcategories && (
                                    <p className="text-red-500 pt-1 text-center text-sm">
                                        {errors.subcategories[0]}
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

export default ExploreAdmin;
