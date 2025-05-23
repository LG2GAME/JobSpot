import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@routes": path.resolve(__dirname, "./src/routes/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
    },
  },
});
