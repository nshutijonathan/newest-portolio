import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        crumple: "url('/crumple.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        jura: ["Jura"],
        jetbrains: ["Jetbrains Mono"],
        orbitron: ["Orbitron"],
        nunito: ["Nunito"],
      },
    },
    colors: {
      cream: "#F3EFE4",
      white: "#FFFFFF",
      lemon: "#FFD600",
      black: "#000000",
      night: "#0C1F28",
      black1: "#333333",
      black2: "#565656",
      black3: "#080808",
      black4: "#2A2A2A",
      orange1: "#FF6A00",
      orange2: "#CC4E00",
      purple1: "#9707FD",
      yellow1: "#FFAA00",
      yellow2: "#EDC216",
      green1: "#09C92F",
      blue1: "#67e8f9",
      blue2: "#004CFF",
      red1: "#F01E1E",
      pink1: "#FF02C4",
      gray1: "#D9D9D9",
      gray2: "#F5F5F5",
    },
    screens: {
      xxxl: { min: "1600px" },
      xxl: { max: "1200px" },
      lg: { max: "1050px" },
      xl: { max: "900px" },
      ml: { max: "800px" },
      m: { max: "700px" },
      s: { max: "550px" },
      xs: { max: "450px" },
      xs2: { max: "400px" },
      xxs: { max: "320px" },
    },
  },
  plugins: [],
  important: true,
};
export default config;
