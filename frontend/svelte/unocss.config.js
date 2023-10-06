import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig } from "@unocss/vite";

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        width: "1.2em",
        height: "1.2em",
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: "Poppins",
        mono: ["Fira Code", "Fira Mono:400,700"],
        poppins: ["Poppins:300,400,500,600,700,900"],
      },
    }),
  ],
  theme: {
    colors: {
      blue: "#075985",
    },
  },
});
