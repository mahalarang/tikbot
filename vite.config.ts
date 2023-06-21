import { resolve } from "path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { outDir, root } from "./utils/path";
import createManifest from "./utils/createManifestPlugin";

export default defineConfig({
  resolve: {
    alias: {
      "@": root,
      "@components": resolve(root, "components"),
      "@styles": resolve(root, "styles"),
      "@utils": resolve(root, "utils"),
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    splitVendorChunkPlugin(),
    createManifest(),
  ],
  build: {
    minify: false,
    outDir,
    sourcemap: process.env.__DEV__ === "true",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        background: resolve(root, "background", "index.ts"),
        popup: resolve(root, "popup", "index.html"),
        content: resolve(root, "content", "index.ts"),
      },
      output: {
        entryFileNames: `src/[name]/index.js`,
        manualChunks: undefined,
      },
    },
  },
});
