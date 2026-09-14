import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(__dirname, "client");

console.log("Building client frontend with Vite...");
execSync("npm run build", { cwd: clientDir, stdio: "inherit" });

const clientDist = path.join(clientDir, "dist");
const rootDist = path.join(__dirname, "dist");

if (fs.existsSync(clientDist)) {
  fs.cpSync(clientDist, rootDist, { recursive: true, force: true });
  console.log("Build successful! Artifacts ready in client/dist and dist.");
}
