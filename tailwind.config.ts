import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config:Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|card|image|navbar|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        prim : "#006fee",
        sec : "#cce2fc"
      }
    },
  },
  plugins: [nextui()],
};

export default config;
