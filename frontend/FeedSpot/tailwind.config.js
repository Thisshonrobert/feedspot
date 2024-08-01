/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        150: '1.5',
        175:'1.7',
        200: '2',
      }
    },
  },
  plugins: [],
}