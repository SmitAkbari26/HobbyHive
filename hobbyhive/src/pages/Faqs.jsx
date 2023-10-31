import React from "react";

const Faqs = () => {
    const faqs = [
        {
            question: "What is SwapSkills & HobbyConnect?",
            answer: "SwapSkills & HobbyConnect is an online platform that allows individuals to exchange skills and discover new hobbies. It's a vibrant community where you can connect with like-minded people to learn, teach, and explore your passions.",
        },
        {
            question: "How do I get started?",
            answer: "Getting started is easy! Sign up for an account, create your profile, and start browsing skills and hobbies that interest you. Connect with others, send requests to swap skills, and begin your learning journey.",
        },
        {
            question: "Is SwapSkills & HobbyConnect free to use?",
            answer: "Yes, our platform is free to use. You can create an account, connect with others, and start swapping skills and hobbies at no cost.",
        },
        {
            question: "Can I share my skills and hobbies too?",
            answer: "Absolutely! We encourage users to share their skills and hobbies. Whether you're an expert or a beginner, you can teach and inspire others while learning something new yourself.",
        },
        {
            question: "How can I find users who share my interests?",
            answer: "Use our search and filter options to find users with similar interests. Browse through profiles, read about their skills and hobbies, and send connection requests to start swapping.",
        },
        {
            question:
                "What type of resources do you offer on the Resources page?",
            answer: "Our Resources page offers a variety of articles, videos, tutorials, and recommended books related to skills and hobbies. It's a treasure trove of knowledge to help you grow.",
        },
        {
            question: "How can I attend workshops and webinars?",
            answer: "Check the Workshops & Webinars page for information on upcoming events. You can register for live workshops or view recordings of past webinars to catch up on valuable content.",
        },
        {
            question: "What if I can't find the answer to my question here?",
            answer: "If you can't find the answer you're looking for in our FAQs, don't worry. You can always reach out to our support team for assistance. We're here to help you with any inquiries or issues you may have.",
        },
        {
            question: "How can I provide feedback or report an issue?",
            answer: "We value your feedback. You can use the contact channels provided on the Contact page to reach out to us with your feedback, suggestions, or to report any issues you encounter on the platform.",
        },
    ];
    return (
        <>
            <div className="min-h-screen bg-white-100 font-roboto">
                <div className="max-w-2xl mx-auto py-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                        <div className="text-center text-2xl font-bold leading-9 tracking-wider">
                            <span className="text-primary">
                                Frequently&nbsp;
                            </span>
                            <span className="text-gray-900">Asked&nbsp;</span>
                            <span className="text-secondary">Questions</span>
                        </div>
                    </h1>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border p-4 rounded-md shadow-accent "
                            >
                                <h2 className="text-lg font-semibold text-secondary tracking-widest">
                                    {faq.question}
                                </h2>
                                <p className="text-gray-900 mt-2 tracking-wider">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faqs;
