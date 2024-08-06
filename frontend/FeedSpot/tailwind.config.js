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
      }, 
      fontFamily: {
        'playwrite': ['Playwrite België Vlaams Gewest'],
        'Inter':['Inter']
      },
     backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}