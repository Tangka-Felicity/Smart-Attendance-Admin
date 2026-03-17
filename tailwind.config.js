/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2563eb',
          accent: '#06b6d4',
          bg: '#f8fafc',
          surface: '#ffffff',
          text: '#0f172a',
          muted: '#475569',
          border: '#e2e8f0',
          success: '#16a34a',
          warning: '#f59e0b',
          danger: '#dc2626',
          info: '#0ea5e9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 1px 2px rgba(15, 23, 42, 0.05), 0 18px 40px -24px rgba(37, 99, 235, 0.25)',
        soft: '0 10px 30px -18px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
}
