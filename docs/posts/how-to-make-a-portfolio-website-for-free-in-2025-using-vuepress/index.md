---
title: How to Create a Stunning Freelancer Portfolio Website with VuePress
date: 2025-05-22
category: [Tech]
tags: [VuePress, Blog]
---

<MetaContent :date="$frontmatter.date" :category="$frontmatter.tags"/>

Building a professional portfolio website is essential for freelancers to showcase their work and attract clients. VuePress, a static site generator powered by Vue.js, offers a simple yet powerful way to create a sleek, customizable, and SEO-friendly portfolio. This guide walks you through setting up a VuePress portfolio website, complete with a responsive design, multilingual support, and modern features like dark mode. Optimized for freelancers and stack seekers, this tutorial will help you create a portfolio that stands out.

<YouTubePlayers videoId="MoIbz_DdmLs"/>


## Why Choose VuePress for Your Portfolio?

VuePress is an excellent choice for freelancers due to its simplicity, flexibility, and performance. It uses Markdown for content creation, making it easy to update, and supports Vue3 for dynamic components. With built-in features like internationalization, dark mode, and GitHub Pages deployment, VuePress is ideal for creating a professional portfolio website.

### Key Benefits of Using VuePress:
- **Easy Setup**: Quick installation with package managers like pnpm.
- **Customizable Themes**: Choose from pre-built themes like "Hope" or create your own.
- **Responsive Design**: Mobile-friendly layouts for a seamless user experience.
- **Multilingual Support**: Default support for languages like English and Chinese.
- **SEO Optimization**: Static site generation ensures fast loading and better search engine rankings.
- **GitHub Pages Integration**: Deploy your portfolio effortlessly to a github.io domain.

## Step-by-Step Guide to Creating Your Portfolio

Follow these steps to set up your VuePress portfolio website, tailored for freelancers and stack seekers.

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **pnpm**: Use pnpm as the package manager for faster dependency management.
- **Code Editor**: Visual Studio Code (VS Code) is recommended for editing Markdown files.

### Step 1: Initialize Your VuePress Project
1. Open your terminal and navigate to your desired project directory.
2. Run the following command to create a new VuePress project:
   ```bash
   pnpm create vuepress-theme-hope stack-seekers
   ```
3. Follow the setup prompts:
   - **Language**: Choose English (or your preferred language).
   - **Package Manager**: Select pnpm.
   - **Bundler**: Choose Vite for faster builds.
   - **Project Name**: Enter `stack-seekers` (or your preferred name).
   - **Welcome Message**: Add a custom message like "Welcome to Stack Seekers."
   - **Version**: Use the latest version (e.g., 2.0.0).
   - **License**: Select MIT for open-source compatibility.
   - **Project Type**: Choose "docs" for a portfolio site (or "blog" for a blog-style site).
   - **Multilingual Support**: Enable internationalization for multiple languages.
   - **Git Repository**: Initialize a Git repository to track changes.
   - **GitHub Pages**: Enable GitHub Pages deployment for hosting on `your-organization.github.io`.

### Step 2: Install Dependencies
After configuring the project, pnpm will install the necessary dependencies. Wait for the installation to complete, and you'll be ready to preview your site.

### Step 3: Preview Your Website
1. Run the development server:
   ```bash
   pnpm run docs:dev
   ```
2. Open your browser and navigate to `http://localhost:8080` to see the default VuePress site.
3. The site includes a horizontal navigation menu, a responsive homepage, and sample content like a portfolio section.

### Step 4: Customize Your Portfolio
1. Open the project in VS Code by running:
   ```bash
   cd stack-seekers && code .
   ```
2. Navigate to the `source` directory and edit `portfolio.md`:
   - Change the title from "Portfolio Home" to "Stack Seekers Portfolio."
   - Add a brief introduction about yourself or your organization.
3. Update `readme.md` to reflect your project name (e.g., "Stack Seekers") and add a project description.
4. Customize the navigation menu:
   - Edit the default menu items to include sections like "My Projects" instead of "How to Use."
   - Add dropdown menus for portfolio categories or additional pages.
5. Modify the homepage features (e.g., replace "Easy to Install" with project-specific details).

### Step 5: Add a Reusable Portfolio Component
To showcase your projects dynamically, integrate a Vue component using PrimeVue and PrimeFlex. Below is a sample JSON data structure and a reusable `ProjectCard` component.

#### Sample JSON Data
```json
[
  {
    "id": 1,
    "title": "Freelance Web App",
    "description": "A responsive web application built with Vue.js and Node.js for a client in the e-commerce sector.",
    "link": "https://example.com/project1"
  },
  {
    "id": 2,
    "title": "Portfolio Website",
    "description": "A personal portfolio website showcasing my freelance projects, built with VuePress and PrimeVue.",
    "link": "https://example.com/project2"
  }
]
```

#### Reusable Vue Component
The `ProjectCard` component displays project details in a card layout, styled with PrimeVue and PrimeFlex for a modern look.

<ProjectCard
  v-for="(project, index) in freelance.slice(0,2)"
  :key="index"
  :project="project"
  :showHeader=true
/>

<script setup lang="ts">
  import { freelance } from "@data/projects.js";
  import { toKebabCase } from "@utils";
</script>

<BlogNavigation />

