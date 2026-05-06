/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ff7900" ,
        "accent-cyan": "#00ced1",
        "background-light": "#f8f7f5",
        "background-dark": "#231a0f",
      },
      fontFamily: {
        "display": ["Be Vietnam Pro", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
    },
  }
}