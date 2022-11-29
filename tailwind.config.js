/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     colors: {
//       'body': "#17171F",
//       'selected-text': "#A2A3FF",
//       'theme': "#3F3FFF",
//       'nav': "#404053",
//       'secondary': "#3131A4",
//       'badge': "#3F3F51",
//       'input-border': "#565666",
//       'input': "#2A2A35",
//     },
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
//     extend: {
//       spacing: {
//         "8xl": "96rem",
//         "9xl": "128rem",
//       },
//       borderRadius: {
//         "4xl": "2rem",
//       },
//     },
//   },
//   plugins: [],
// };
