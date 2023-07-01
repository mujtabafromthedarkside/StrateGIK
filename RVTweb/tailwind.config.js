/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Add the paths to all of your template files in your tailwind.config.cjs file. Template files include HTML templates, JavaScript components, and other source files that contain Tailwind class names. This is to make sure that vanilla CSS is generated for the corresponding elements.
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

