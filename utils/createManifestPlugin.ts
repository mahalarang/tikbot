import { PluginOption } from "vite";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { outDir } from "./path";
import manifest from "../src/manifest";

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

export default createManifest;
