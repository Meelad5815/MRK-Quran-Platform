import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './hooks/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#2f7d32',
        sand: '#f7f3e9'
      },
      fontFamily: {
        arabic: ['Amiri', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
