import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(divider|dropdown|dropdown-menu|dropdown-trigger|select|select-item|select-section).js"
  ],
  theme: {
    extend: {
      screens: {
        md: "769px",
        lg: "1024px",
        xl: "1281px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: { 500: "#EAEBE2", 600: "#D1D3C3" },
        primaryGreen: {
          500: "#445A37",
          600: "#445A47",
        },
        riego: {
          500: "#C1C69C",
          600: "#646853",
        },
        diseño: {
          500: "#445A47",
          600: "#B9CCAD",
        },
        mantenimiento: {
          500: "#B9CCAD",
          600: "#445A47",
        },
        movimiento: {
          500:"#646853",
          600:"#E5EAC3"
        }

      },
    },
  },
  plugins: [nextui({
    themes:{
      light: {
        colors: {
          //Gris claro
          primary:"#B8B8B8",
          foreground: "#B8B8B8",
          background: "#B8B8B8",
        }
      },
      dark: {
        colors: {
          primary:"#84BC3C",
          foreground: "#EAEBE2",
          background: "#39392A",

        }
      }
    }
  })],
  
};
export default config;
