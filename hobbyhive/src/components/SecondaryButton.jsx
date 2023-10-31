import React from "react";

function SecondaryButton(props) {
    const { type, className, text, onClick } = props;

    return (
        <button
            type={type || "button"}
            className={`flex w-full tracking-widest justify-center rounded-md bg-primary px-3 py-2 text-sm leading-6 text-white hover:shadow-xl hover:bg-secondary hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent hover:transition hover:duration-600 hover:ring-2 hover:ring-accent ${
                className || ""
            }`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default SecondaryButton;
