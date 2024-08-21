/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',  // Custom breakpoint for extra small devices
        'xs': '480px',   // Extra small devices (phones)
        'sm': '640px',   // Small devices (tablets)
        'md': '700px',   // Medium devices (small laptops)
        // 'md': '768px',   // Medium devices (small laptops)
        'lg': '1024px',  // Large devices (desktops)
        'xl': '1280px',  // Extra large devices (large desktops)
        '2xl': '1536px', // 2x large devices (very large screens)
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
/* xs: sm:  lg: md: xl: 2xl: */
