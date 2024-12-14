/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      dxs: '360px',
      xs: '410px',
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
    extend: {},
    fontFamily: {
      st: ['Gupter', 'serif'],
      ars: ['Archivo Black', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
};
