/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },

    extend: {
      backgroundImage: {
        'site': "url('./src/assets/site.jpg')"
      }
    },
  },
  plugins: [],
}