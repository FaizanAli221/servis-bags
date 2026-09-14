import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const parentClientDir = path.join(__dirname, "..");
const isWin = process.platform === "win32";

console.log("Executing Vite build in client directory...");
execSync(isWin ? "npm.cmd run build" : "npm run build", { cwd: parentClientDir, stdio: "inherit" });

const distParent = path.join(parentClientDir, "dist");
const distNested = path.join(__dirname, "dist");

if (fs.existsSync(distParent)) {
  fs.cpSync(distParent, distNested, { recursive: true, force: true });
  console.log("Vite build and artifact synchronization complete.");
}
