import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#FF3D00"
      },
      fontFamily: {
        Abnes: 'Abnes',
        singolare: "Singolare"
      },
      gridTemplateColumns: {
        "1/1.5": "1fr 1.5fr",
        "1.2/1": "1.2fr 1fr",
        "2/1": "2fr 1fr",
        "1/2": "1fr 2fr",
        "1/5": "1fr 5fr",
        "5/1": "5fr 1fr",
        "1.5/1": "1.5fr 1fr",
        "2/1/2": "2fr 1fr 2fr",
        "1.5/31": "1.5fr 1fr 1fr 1fr"
      },
      margin: {
        "30": "120px",
        "15": "60px",
      },
      padding: {
        "30": "120px",
        "15": "60px",
      },
    },
  },
  plugins: [],
} satisfies Config;
