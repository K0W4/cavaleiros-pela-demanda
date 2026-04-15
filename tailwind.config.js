/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['Cinzel', 'serif'],
        body: ['Crimson Text', 'serif'],
      },
      colors: {
        'templar-red': '#8a0303',
        'templar-gold': '#c5a059',
        'templar-stone': '#1a1a1a',
        'templar-parchment': '#eaddc5',
      },
    },
  },
  plugins: [],
}
