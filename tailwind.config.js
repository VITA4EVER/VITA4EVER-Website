/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#050505",
          "secondary": "#1c1c1c",
          "accent": "#cc0802",
          "neutral": "#0f0f0f",
          "base-100": "#0f0f0f",
          "info": "#5aecfc",
          "success": "#30fc07",
          "warning": "#fc7f02",
          "error": "#fc0202",
          },
        },
      ],
    },
  content: ["./src/**/*.{html,js}"],
  purge: [
    './src/**/*.vue',
    './public/index.html',
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

