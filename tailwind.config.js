/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'chinahouse-bg': 'var(--chinahouse-bg)',
      },
    },
  },
  plugins: [],
}
