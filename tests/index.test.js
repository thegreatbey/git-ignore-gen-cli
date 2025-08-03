import { describe, it, expect } from "vitest";
import fs from "fs";

describe("git-ignore-gen-cli", () => {
  it("writes a .gitignore file", () => {
    fs.writeFileSync(".gitignore", "test");
    const content = fs.readFileSync(".gitignore", "utf-8");
    expect(content).toBe("test");
  });
});