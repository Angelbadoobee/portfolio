import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          royal: '#6B46C1',
          light: '#9D7DE8',
          dark: '#553C9A',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFED4E',
          dark: '#B8960A',
        },
      },
      fontFamily: {
        amatic: ['"Amatic SC"', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
