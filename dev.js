import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isWindows = process.platform === "win32";
const npmCmd = isWindows ? "npm.cmd" : "npm";

console.log("\x1b[36m%s\x1b[0m", "Starting Servis Bags full-stack application...");

// Start Backend
const server = spawn(process.execPath, ["index.js"], {
  cwd: path.join(__dirname, "server"),
  stdio: ["inherit", "pipe", "pipe"],
  env: { ...process.env, PORT: "4000" }
});

server.stdout.on("data", (data) => {
  process.stdout.write(`\x1b[34m[Server]\x1b[0m ${data}`);
});

server.stderr.on("data", (data) => {
  process.stderr.write(`\x1b[31m[Server Error]\x1b[0m ${data}`);
});

// Start Frontend
const client = spawn(npmCmd, ["run", "dev"], {
  cwd: path.join(__dirname, "client"),
  stdio: ["inherit", "pipe", "pipe"],
  env: process.env,
  shell: false
});

client.stdout.on("data", (data) => {
  process.stdout.write(`\x1b[32m[Client]\x1b[0m ${data}`);
});

client.stderr.on("data", (data) => {
  process.stderr.write(`\x1b[33m[Client Log]\x1b[0m ${data}`);
});

function cleanup() {
  console.log("\n\x1b[36m%s\x1b[0m", "Shutting down frontend and backend processes...");
  if (server && !server.killed) server.kill();
  if (client && !client.killed) client.kill();
  process.exit();
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
