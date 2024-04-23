/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./resources/**/*.edge",
        "./resources/**/*.{js,ts,jsx,tsx,vue}"
    ],
    theme: {
        extend: {}
    },
    plugins: [require("tailwindcss-animate"), require("daisyui")],
    daisyui: {
        themes: [
            "synthwave",
            // synthwave light version
            {
                synthwave_light: {
                    primary: "#f368e0",
                    "primary-focus": "#ff5ac3",
                    "primary-content": "#ffffff",
                    secondary: "#f368e0",
                    "secondary-focus": "#ff5ac3",
                    "secondary-content": "#ffffff",
                    accent: "#1982c4",
                    "accent-focus": "#055c9d",
                    "accent-content": "#ffffff",
                    neutral: "#2d2b55",
                    "neutral-focus": "#232145",
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#f9fafb",
                    "base-300": "#d1d5db",
                    "base-content": "#1f2937",
                    info: "#2094f3",
                    success: "#009485",
                    warning: "#ff9900",
                    error: "#ff5724"
                }
            }
        ]
    }
};
