# git-ignore-gen-cli

A simple CLI tool to generate `.gitignore` files for multiple tech stacks quickly.  
No need to search online — create your `.gitignore` instantly from common templates like **Node.js**, **React**, **Python**, and more.

---

## Features
- Generate `.gitignore` files for multiple technologies in one command.
- Works offline — no API calls needed.
- Includes templates for Node.js, React, Python, VSCode, and more.
- Lightweight and fast.


---

## Supported Templates
Currently includes templates for:

- node
- react
- vscode
- python
- docker
- java
- go
- php
- ruby
- dotnet
- angular
- flutter
- rust
- cpp
- swift


---

## Installation
npm install -g git-ignore-generator-creator-cli

---

## Usage

Generate a `.gitignore` for Node.js:
git-ignore-gen node

Combine multiple templates:
git-ignore-gen node react vscode

List all available templates:
git-ignore-gen --list

---

## Example
Running:
git-ignore-gen node react
creates:
# Node
node_modules/
npm-debug.log
.env

# React
build/
.cache/

---

## Testing
Run all tests with:
npm test

---

## Versioning
Release a new version:
npm version patch
git push origin main --tags

---

## License
MIT License © 2025 cavani21
