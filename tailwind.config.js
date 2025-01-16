/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      animation: {
        'pulse-danger': 'pulse-danger 1s infinite',
      },
      keyframes: {
        'pulse-danger': {
          '0%, 100%': { transform: 'scale(1)', color: '#ff0000' }, // Red at normal scale
          '50%': { transform: 'scale(1.2)', color: '#ff8800' }, // Orange at slightly larger scale
        },
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./src/assets/site-bg.jpg')",
        about: "url('./src/assets/about1-removebg-preview-transformed.png')",
        services: "url('./src/assets/from_pinterest-transformed.jpeg')",
      },
    },
  },
  plugins: [],
}