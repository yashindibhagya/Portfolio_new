/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      boxShadow: {
        'neu': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neu-sm': '4px 4px 8px #d1d9e6, -4px -4px 8px #ffffff',
        'neu-hover': '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
        neumorphic: "4px 4px 10px #d1d9e6, -4px -4px 10px #ffffff",
        'neumorphic-inset': "inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #ffffff",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}