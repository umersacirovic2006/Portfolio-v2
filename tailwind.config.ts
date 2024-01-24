import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#f97316",
                    secondary: "#192",
                    accent: "#f97350",
                    neutral: "#1F2C47",
                    "base-100": "#111827",
                    info: "#3b82f6",
                    success: "#a3e635",
                    warning: "#ffcc00",
                    error: "#ff0000",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
export default config;
