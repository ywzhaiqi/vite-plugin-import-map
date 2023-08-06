import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { Plugin as importToMap, autoComplete } from "vite-plugin-import-map";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    importToMap({
      modules: [
        autoComplete("vue"),
        autoComplete("@vueuse/core"),
      ],
    }),
  ],
});
