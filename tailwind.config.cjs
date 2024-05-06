/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      'phone': '316px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accent2: 'rgb(var(--accent2) / <alpha-value>)',
        header: 'rgb(var(--header) / <alpha-value>)',
        haccent: 'rgb(var(--haccent) / <alpha-value>)',
      },

      backgroundColor: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accent2: 'rgb(var(--accent2) / <alpha-value>)',
        header: 'rgb(var(--header) / <alpha-value>)',
        haccent: 'rgb(var(--haccent) / <alpha-value>)',
      },

      fontFamily: {
        regular: "Inter-Regular",
        light: "Inter-Light",
        medium: "Inter-Medium",
        thicker: "Inter-Bold"
      },
    },
  },
  plugins: [],
}

