import { defineConfig } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.resolve(__dirname, "src");
const folders = fs
  .readdirSync(srcPath)
  .filter((folder) => fs.statSync(path.join(srcPath, folder)).isDirectory());

const aliases = folders.reduce((acc, folder) => {
  acc[`@${folder}`] = path.resolve(srcPath, folder);
  return acc;
}, {});

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": srcPath,
      ...aliases,
    },
  },
});
