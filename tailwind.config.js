/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground:  "#242021",
        accent: {
          primary: "#e94f33",
          secondary: "#54bdaf",
        },
        dark_orange: "#C04D32",
        blue:"#84BAB0",
        light_blue:"#B5D6D0",
        green: "#B2CC36",
        orange: "#D69939",
        pink: "#aa346c"
      },
      fontFamily: {
        samarkan: ['var(--font-samarkan)']
      },
      backgroundImage: {
        'image1': "url('/images/image1.jpg')",
        'image2': "url('/images/image2.jpg')",
        'image3': "url('/images/image3.jpg')",
        'image4': "url('/images/image4.jpg')",

      }
    },
  },
  plugins: [],
}
