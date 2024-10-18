import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crispypix: {
          '100': '#110f0e',
          '200': '#2b1e17',
          '300': '#55332d',
          '400': '#9c5749',
          '500': '#c1304e',
          '600': '#fe6854',
          '700': '#f2a853',
          '800': '#f3d6af',
          '900': '#2f9f6c',
          '1000': '#91e87a',
          '1100': '#f2e57c',
          '1200': '#e5efee',
          '1300': '#2f38a8',
          '1400': '#5273dd',
          '1500': '#77c3f6',
          '1600': '#a1e8d5',
        },
      },
      fontFamily: {
        'pixel': ['Press Start 2P', 'cursive'],
      },
      fontSize: {
        'pixel-xs': ['8px', { lineHeight: '12px' }],
        'pixel-sm': ['16px', { lineHeight: '20px' }],
        'pixel-base': ['24px', { lineHeight: '28px' }],
        'pixel-lg': ['32px', { lineHeight: '36px' }],
      },
      borderWidth: {
        'pixel': '4px',
      },
      spacing: {
        'pixel': '4px',
        'pixel-2': '8px',
        'pixel-4': '16px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
