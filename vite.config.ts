// vite.config.js
import * as path from "path";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    // any other plugins
    cssInjectedByJsPlugin({
      styleId: () => `crowd-app-io-${Math.random() * 100}`,
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "crowd-app",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["src/style.css"],
    },
  },
});
