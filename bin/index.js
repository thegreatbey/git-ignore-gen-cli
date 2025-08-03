#!/usr/bin/env node
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const templatesDir = path.join(path.dirname(new URL(import.meta.url).pathname), "../templates");

if (args.length === 0 || args.includes("--help")) {
  console.log("Usage: git-ignore-gen <template1> <template2> ...\nUse --list to view available templates.");
  process.exit(0);
}

if (args.includes("--list")) {
  const files = fs.readdirSync(templatesDir).map(f => f.replace(".txt", ""));
  console.log("Available templates:", files.join(", "));
  process.exit(0);
}

const combined = args.map(template => {
  const filePath = path.join(templatesDir, `${template}.txt`);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf-8");
  } else {
    console.warn(`Template not found: ${template}`);
    return "";
  }
}).join("\n");

if (!combined.trim()) {
  console.error("No valid templates provided.");
  process.exit(1);
}

fs.writeFileSync(".gitignore", combined);
console.log("✅ .gitignore generated successfully!");
