import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isWin = process.platform === "win32";

console.log("Running Vite build inside client...");
execSync(isWin ? "npm.cmd run build" : "npm run build", { cwd: __dirname, stdio: "inherit" });
console.log("Vite build completed successfully.");
