import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { freelance } from "./data/projects.js";
import { toKebabCase } from "./utils/index.js";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const outputDir = path.resolve(__dirname, "../web-development-projects");

const template = (project) => `---
title: ${project.name}
description: ${project.description}
layout: Layout
project:
  name: ${JSON.stringify(project.name)}
  description: ${JSON.stringify(project.description)}
  software: ${JSON.stringify(project.software)}
  domain: ${JSON.stringify(project.domain)}
  year: ${JSON.stringify(project.year)}
  stack: ${JSON.stringify(project.stack)}
  images: ${JSON.stringify(project.images)}
  features: ${JSON.stringify(project.features)}
---

<ProjectCard :project="$frontmatter.project" />
`;


function generatePages() {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });


  freelance.forEach((project) => {
    const content = template(project);
    const dirPath = path.join(outputDir, toKebabCase(project.name)); // Directory path
    const filePath = path.join(dirPath, "index.md"); // File path

    // Ensure the directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Created: ${filePath}`);
  });
}

generatePages();
