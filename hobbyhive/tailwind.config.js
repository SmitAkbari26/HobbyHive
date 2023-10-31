/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                mooli: ["Mooli", "sans-serif"],
                irish: ["Irish Grover", "cursive"],
                montserrat: ["Montserrat", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                primary: "#478BA2",
                secondary: "#E6AF2E",
                accent: "#9747FF",
                background: "#F5F5F5",
            },
            boxShadow: {
                accent: "0 1px 1px -1px #9747FF, 0 1px 3px -1px #9747FF",
            },
        },
    },
    plugins: [],
};
