/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        'primary' : 'rgb(79, 70, 229)',
        'dark-primary': '#40E0D0',
        'secondary': '#746dea',
        'dark-secondary': '#6ce7db',
        'off-white': '#F5F5F5',
        'dark-bg': '#081b29'
      }
    }
  },
  plugins: [],
}
