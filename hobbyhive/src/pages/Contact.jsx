import React from "react";
import { useState } from "react";
import useAuthContext from "../context/AuthContext";
import Axios from "../api/axios";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState({});
    const { csrf } = useAuthContext();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await csrf();
        setErrors({});
        try {
            const response = await Axios.post("/contact", formData);
            // Handle success, e.g., show a success message
            setSuccessMessage("Submit Successfully");
        } catch (error) {
            // Handle errors, e.g., show an error message
            if (error.response && error.response.status === 422) {
                // Validation errors
                setErrors(error.response.data.errors);
                // setMessage(error.response.data.message);
            } else {
                // Other errors
                console.error(error);
            }
        } finally {
            setIsLoading(false); // Stop the loading indicator, whether the request succeeds or fails
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
            <div className="min-h-screen bg-gray-100 font-roboto p-10">
                <div className="max-w-5xl mx-auto p-6 md:p-10 bg-white rounded-md shadow-lg">
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
                        We're Here to Help
                    </h1>
                    <p className="text-gray-700 text-center text-lg mb-4">
                        Have questions, feedback, or need assistance? Our
                        dedicated support team is ready to assist you.
                    </p>
                    <p className="text-gray-700 text-center text-lg mb-4">
                        Feel free to reach out through our contact channels.
                    </p>
                    <p className="text-gray-700 text-center text-lg mb-6">
                        We're committed to making your experience as smooth as
                        possible.
                    </p>
                            {successMessage && (
                                <p className="text-green-500 p-4 text-center text-lg">
                                    {successMessage}
                                </p>
                            )}
                    <div className="flex justify-center">
                        <div className="w-1/2 pr-6">
                            <form
                                className="space-y-6 rounded-lg shadow-lg py-14 px-6"
                                action="#"
                                method="POST"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium leading-6 text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <div className="mt-0">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 pt-1 text-center text-sm">
                                                {errors.name[0]}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-0">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 pt-1 text-center text-sm">
                                                {errors.email[0]}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium leading-6 text-gray-700"
                                    >
                                        Message
                                    </label>
                                    <div className="mt-0">
                                        <textarea
                                            id="message"
                                            name="message"
                                            autoComplete="message"
                                            required
                                            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 focus:outline-none focus:ring-text-gray-900 caret-accent"
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 pt-1 text-center text-sm">
                                                {errors.message[0]}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full tracking-widest justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold leading-6 text-white hover:shadow-xl hover:bg-primary hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Sending..." : "Send"}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="w-1/2 pl-6">
                            {/* Replace the following with your map component */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0892432398996!2d72.45516137419936!3d23.529292397231053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c476c5013fd03%3A0xa1fe01d9ab30482!2sGanpat%20University%20(GUNI)%2C%20India!5e0!3m2!1sen!2sin!4v1698473150374!5m2!1sen!2sin"
                                width="100%"
                                height="440"
                                title="Google Map"
                                style={{ border: "0" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
