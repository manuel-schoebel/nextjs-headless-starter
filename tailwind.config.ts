import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
        },
        warning: {
          DEFAULT: "var(--warning-color)",
        },
        success: {
          DEFAULT: "var(--success-color)",
        },
        danger: {
          DEFAULT: "var(--danger-color)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
