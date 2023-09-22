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
        },
    },
    plugins: [],
};
