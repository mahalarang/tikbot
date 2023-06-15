import pkg from "../package.json";

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  background: {
    service_worker: "src/background/index.js",
    type: "module",
  },
  action: {
    default_popup: "src/popup/index.html",
    default_icon: "assets/images/logo.png",
  },
  icons: {
    "16": "assets/images/logo.png",
    "48": "assets/images/logo.png",
    "128": "assets/images/logo.png",
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/content/index.js"],
    },
  ],
  web_accessible_resources: [
    {
      resources: ["assets/images/*.png"],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
