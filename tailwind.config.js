/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // other purge configurations if any
  },

  theme: {
    extend: {
      colors: {
        primary: "#00723E",
        secondary: "#F3EDD3",
      },
      fontFamily: {
        // Choosing modern fonts: 'Poppins' for display and 'Roboto' for body text.
        display: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      spacing: {
        // Custom spacing values if needed
      },
      borderWidth: {
        // Custom border widths if needed
      },
      borderRadius: {
        // Custom border radius values if needed
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.primary"),
            h1: {
              fontFamily: theme("fontFamily.display"),
              color: theme("colors.primary"),
            },
            h2: {
              fontFamily: theme("fontFamily.display"),
              color: theme("colors.primary"),
            },
            h3: {
              fontFamily: theme("fontFamily.display"),
              color: theme("colors.primary"),
            },
            // ... additional styles for other elements
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
