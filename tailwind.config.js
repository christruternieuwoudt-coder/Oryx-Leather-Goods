/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        leather: {
          dark: '#2B1A12',     // Dark Brown
          tan: '#A0522D',      // Saddle Tan
          cognac: '#8B4513',   // Cognac
          cream: '#FFFDD0',    // Warm Cream
          charcoal: '#1C1C1C', // Charcoal Accent
          bone: '#F9F6EE'      // Soft background bone color
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
