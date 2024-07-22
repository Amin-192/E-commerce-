/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Extend with your custom colors
      colors: {
        primary: '#1d4ed8', // Example custom color
        secondary: '#9333ea', // Example custom color
        // Add your custom colors here
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // Use light theme by default
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
