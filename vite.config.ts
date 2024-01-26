import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "react",
      devTarget: "esnext",
    }),
  ],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
