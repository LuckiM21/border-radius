import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./",
  base: "/border-radius/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fullcontrol: resolve(__dirname, "full-control.html"),
      },
    },
  },
});
