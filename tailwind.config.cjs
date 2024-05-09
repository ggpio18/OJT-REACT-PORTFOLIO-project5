/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        primary2: 'rgb(var(--primary2) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accent2: 'rgb(var(--accent2) / <alpha-value>)',
        header: 'rgb(var(--header) / <alpha-value>)',
        haccent: 'rgb(var(--haccent) / <alpha-value>)',
      },

      backgroundColor: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        primary2: 'rgb(var(--primary2) / <alpha-value>)',
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

      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

