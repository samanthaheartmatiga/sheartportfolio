/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: '#710014',       // Crimson
          dark: '#161616',       // Charcoal Black
          light: '#F2F1ED',      // Warm Cream
          accent: 'rgb(179, 143, 111)' // Bronze/Tan
        }
      },
      fontFamily: {
        // Overrides the base monospaced engine across your brand styles
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        calligraphy: ['"Monsieur La Doulaise"', 'cursive'],
      },
    },
  },
  plugins: [],
}