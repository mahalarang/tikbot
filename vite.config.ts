import { resolve } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { PluginOption, defineConfig } from "vite";
import manifest from "./src/manifest";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "build_extension");

const createManifest = (): PluginOption => {
  return {
    name: "create-manifest",
    buildEnd() {
      if (!existsSync(outDir)) {
        mkdirSync(outDir);
      }

      const manifestPath = resolve(outDir, "manifest.json");
      writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    },
  };
};

export default defineConfig({
  plugins: [createManifest()],
  build: {
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
      },
    },
  },
});
