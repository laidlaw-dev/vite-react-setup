#!/usr/bin/env node

// install-all.js
import { execSync } from "child_process";
import { setupTemplates } from "./fileSetup.js";
import { cleanupProject } from "./cleanup.js";

// Define your dependencies
const dependencies = [
  "@types/node",
  "i18next",
  "i18next-browser-languagedetector",
  "i18next-http-backend",
  "react-i18next",
  "luxon",
  "tailwindcss",
  "@tailwindcss/vite",
  "clsx",
];

// Define your dev dependencies
const devDependencies = [
  "eslint-config-prettier",
  "prettier",
  "prettier-plugin-tailwindcss",
  "@testing-library/jest-dom",
  "@testing-library/react",
  "@testing-library/user-event",
  "vitest",
  "@types/luxon",
  "jsdom",
];

// Helper function to install packages
function installPackages(packages, isDev = false) {
  if (packages.length === 0) return;

  const flag = isDev ? "-D" : "";
  const label = isDev ? "devDependencies" : "dependencies";

  console.log(`\n📦 Installing ${label}...`);
  try {
    execSync(`npm install ${flag} ${packages.join(" ")}`, { stdio: "inherit" });
    console.log(`✅ Installed ${label} successfully!`);
  } catch (error) {
    console.error(`❌ Failed to install ${label}:`, error.message);
    process.exit(1);
  }
}

// Run both installations
installPackages(dependencies, false);
installPackages(devDependencies, true);

console.log("\n✅ All packages installed successfully!");

const projectPath = process.cwd();
setupTemplates(projectPath);
cleanupProject(projectPath);

console.log("\n😀 Vite + React project setup complete!");
