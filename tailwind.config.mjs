//  @type {import('tailwindcss').Config} 

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: "#003347",
        principal2: "#1b6be0",
        principal3: "#024059",
        textoPrincipal: "#ffffff",
        textos2: "#e4e4e4",
        textos3: "#014023",
        fundo: "#86bf3040",
        fundo2:" #97BF5A",
        fundo3: "#A6786D",
        fundo4: "#003ecb",
        fundoProdduto2: "rgba(0,0,0,.1)",
      },
      backdropBlur: {
        xs: '2px',
        xl: '40px',
      },
      fontFamily: {
        pacifico: ["pacifico"],
        ysabeau: ["Ysabeau Office", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
