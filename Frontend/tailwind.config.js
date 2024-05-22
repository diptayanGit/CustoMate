/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-start': '#fde1ff',
        'custom-end': '#e1ffea22',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)',
      },
    },
  },
  plugins: [],
}

