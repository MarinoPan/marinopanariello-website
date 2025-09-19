/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
                "satoshi-variable": ["Satoshi-Variable", "sans-serif"],
            },
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                "gray-light": "var(--color-gray-light)",
                "gray-dark": "var(--color-gray-dark)",
                background: "var(--color-background)",
                highlight: "var(--color-highlight)",
            },
        },
    },
    plugins: [],
};
