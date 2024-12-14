// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   //content: ["./src/**/*.{html,js}"],
//   // theme: {
//   //   extend: {},
//   // },
//   daisyui: {
//     themes: [{
//       mytheme: {
//                   "primary": "#fde047",
//                   "secondary": "#4c1d95",
//                           "accent": "#a21caf",
//                           "neutral": "#fef9c3",
//                           "base-100": "#f3e8ff",
//                           "info": "#c7d2fe",
//                           "success": "#86efac",
//                           "warning": "#fde047",
//                           "error": "#ef4444",
//                   },
//     }],
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake","luxury"],
  },
  plugins: [
    require('daisyui'),
  ],
}

