import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // ✅ Enables dark mode using "class"
  content: [
    './app/**/*.{ts,tsx}', // ✅ Make sure all files are included
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
