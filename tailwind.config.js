import { themeKeys } from "./src/app/core/configs/theme.config.ts"; // Import your keys

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        [themeKeys.youtubeLight]: {
          primary: "#ff0000", // YouTube's red
          "primary-content": "#ffffff", // White text for contrast
          secondary: "#282828", // Dark gray for secondary elements
          "secondary-content": "#ffffff", // White text for secondary
          accent: "#000000", // Black for accent
          "accent-content": "#ffffff", // White text for accent
          neutral: "#f9f9f9", // Light gray background
          "neutral-content": "#161616", // Dark gray text for neutral
          "base-100": "#ffffff", // White background
          "base-200": "#f1f1f1", // Slightly darker white
          "base-300": "#e0e0e0", // Light gray
          "base-content": "#000000", // Black text
          info: "#065fd4", // YouTube's blue for info
          "info-content": "#ffffff", // White text for info
          success: "#34a853", // Google green for success
          "success-content": "#ffffff", // White text for success
          warning: "#fbbc05", // Google yellow for warnings
          "warning-content": "#ffffff", // White text for warnings
          error: "#ea4335", // Google red for errors
          "error-content": "#ffffff", // White text for errors
        },
        [themeKeys.youtubeDark]: {
          primary: "#ff0000", // YouTube's red
          "primary-content": "#ffffff", // White text for contrast
          secondary: "#606060", // Medium gray for secondary elements
          "secondary-content": "#ffffff", // White text for secondary
          accent: "#ffffff", // White for accent
          "accent-content": "#000000", // Black text for accent
          neutral: "#181818", // Dark gray background
          "neutral-content": "#ffffff", // White text for neutral
          "base-100": "#202020", // YouTube dark mode background
          "base-200": "#282828", // Slightly lighter dark gray
          "base-300": "#383838", // Medium gray
          "base-content": "#ffffff", // White text
          info: "#1a73e8", // YouTube's blue for info in dark mode
          "info-content": "#ffffff", // White text for info
          success: "#3cba54", // Google green for success
          "success-content": "#ffffff", // White text for success
          warning: "#fbbc05", // Google yellow for warnings
          "warning-content": "#000000", // Black text for warnings
          error: "#ea4335", // Google red for errors
          "error-content": "#ffffff", // White text for errors
        },
      },
    ],
  },
};
