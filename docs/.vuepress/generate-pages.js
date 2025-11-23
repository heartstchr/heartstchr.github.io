import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { freelance } from "./data/projects.js";
import { services } from "./data/services.js";
import { toKebabCase } from "./utils/index.js";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Output directories
const outProjectDir = path.resolve(__dirname, "../web-development-projects");
const outServiceDir = path.resolve(__dirname, "../web-development-services");
const detailsDir = path.resolve(__dirname, "./data/details");

// Utility function to ensure a directory exists
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Utility function to read markdown content if it exists
const readMarkdownContent = (detailsPath) => {
  if (!detailsPath) return "";
  const fullPath = path.resolve(detailsDir, path.basename(detailsPath));
  try {
    return fs.existsSync(fullPath) ? fs.readFileSync(fullPath, "utf-8") : "";
  } catch (error) {
    console.error(`Error reading markdown file ${fullPath}:`, error);
    return "";
  }
};

// Template for project pages
const projectTemplate = (project, projectIndex, allProjects) => {
  const markdownContent = readMarkdownContent(project.details);

  // Get previous and next project info
  const previousProject = projectIndex > 0 ? {
    name: allProjects[projectIndex - 1].name,
    link: `/web-development-projects/${toKebabCase(allProjects[projectIndex - 1].name)}/`
  } : null;

  const nextProject = projectIndex < allProjects.length - 1 ? {
    name: allProjects[projectIndex + 1].name,
    link: `/web-development-projects/${toKebabCase(allProjects[projectIndex + 1].name)}/`
  } : null;

  return `---
title: ${project.name}
description: ${project.description}
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: ${JSON.stringify(project.name)}
  description: ${JSON.stringify(project.description)}
  software: ${JSON.stringify(project.software)}
  schema: ${JSON.stringify(project.schema)}
  domain: ${JSON.stringify(project.domain)}
  year: ${JSON.stringify(project.year)}
  link: ${JSON.stringify(project.link) || ""}
  codeLink: ${JSON.stringify(project.codeLink) || ""}
  contact: ${JSON.stringify(project.contact) || ""}
  stack: ${JSON.stringify(project.stack)}
  images: ${JSON.stringify(project.images)}
  features: ${JSON.stringify(project.features) || []}
  details: ${JSON.stringify(markdownContent)}
  previousProject: ${JSON.stringify(previousProject)}
  nextProject: ${JSON.stringify(nextProject)}
---
<div>
  <div class="col-12">
    <div class="my-2 text-l line-height-3">{{$frontmatter.project.description}}</div>
  </div>
  <div class="flex flex-column" itemscope itemtype="https://schema.org/SoftwareApplication">
    <div v-if="$frontmatter.project.images">
      <div class="card" v-if="$frontmatter.project.images.length != 1">
        <Galleria :value="$frontmatter.project.images" :responsiveOptions="responsiveOptions" :numVisible="5"
          :circular="true" :showItemNavigators="true" :showThumbnails="true" :pt="{
            prevButton: { 'aria-label': 'Previous screen of project' },
            nextButton: { 'aria-label': 'Next screen of project' }
          }">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
              style="width: 100%; display: block" loading="eager" fetchpriority="high" />
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
          </template>
        </Galleria>
      </div>
      <div class="card" v-else>
        <img :src="$frontmatter.project.images[0].itemImageSrc" :alt="$frontmatter.project.images[0].alt"
          style="width: 100%; display: block" loading="eager" fetchpriority="high" />
      </div>
    </div>
    <div class="col-12">
      <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
    </div>
    <div class="col-12 pt-4">
      <link itemprop="applicationCategory" :href="$frontmatter.project.schema" />
      <div class="flex md:flex-row flex-column justify-content-center align-items-center gap-2 my-4 w-full max-w-96">
        <a v-if="$frontmatter.project.contact" :href="'/contact/?subject=' + encodeURIComponent('Custom Request: ' + $frontmatter.project.name)"
          class="flex flex-row no-underline w-full">
          <Button label="Get Custom Request" icon="pi pi-inbox" severity="secondary" raised rounded class="w-full" />
        </a>
        <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank"
          class="flex flex-row no-underline w-full">
          <Button label="Live Demo" icon="pi pi-angle-double-right" severity="primary" raised rounded class="w-full" />
        </a>
        <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank"
          class="flex flex-row no-underline w-full">
          <Button label="Get Started" icon="pi pi-github" severity="secondary" raised rounded class="w-full" />
        </a>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-column px-4">
  <h3 class="my-2 text-l">Features</h3>
  <ul class="my-2 md:ml-3 text-sm">
    <li v-for="feature in $frontmatter.project.features" :key="feature.text"
      class="flex flex-row align-content-center line-height-3">
      <i class="pi pi-verified m-2 bg-primary" alt="arrow" style="font-size: 1rem;"></i>
      <h4 class="m-2 text-sm line-height-3" v-html="feature.text"></h4>
    </li>
  </ul>
</div>

${markdownContent}

<div class="flex justify-content-between align-items-center mt-6 pt-4 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.project.previousProject" :href="$frontmatter.project.previousProject.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-chevron-left mr-2"></i>
      <div class="flex flex-column">
        <span class="text-sm text-color-secondary">Previous Project</span>
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.project.previousProject.name }}</span>
      </div>
    </a>
  </div>
  <div class="flex-1 text-center">
    <a href="/web-development-projects/" class="no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-th-large mr-2"></i>
      All Projects
    </a>
  </div>
  <div class="flex-1 text-right">
    <a v-if="$frontmatter.project.nextProject" :href="$frontmatter.project.nextProject.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary">
      <div class="flex flex-column text-right">
        <span class="text-sm text-color-secondary">Next Project</span>
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.project.nextProject.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2"></i>
    </a>
  </div>
</div>

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>`;
};

// Template for service pages
const serviceTemplate = (service, serviceIndex, allServices) => {
  // Get previous and next service info
  const previousService = serviceIndex > 0 ? {
    name: allServices[serviceIndex - 1].name,
    link: `/web-development-services/${allServices[serviceIndex - 1].code}/`
  } : null;

  const nextService = serviceIndex < allServices.length - 1 ? {
    name: allServices[serviceIndex + 1].name,
    link: `/web-development-services/${allServices[serviceIndex + 1].code}/`
  } : null;

  return `---
title: ${service.name}
lastUpdated: false
editLink: false
copyright: false
layout: Layout
service:
  name: ${JSON.stringify(service.name)}
  descriptions: ${JSON.stringify(service.descriptions)}
  icon: ${JSON.stringify(service.icon)}
  code: ${JSON.stringify(service.code)}
  previousService: ${JSON.stringify(previousService)}
  nextService: ${JSON.stringify(nextService)}
---
<div class="shadow-1 col-12 p-0 overflow-hidden" itemscope itemtype="https://schema.org/SoftwareApplication">
    <div class="px-4 m-2">
        <div class="text-4xl font-bold mb-4">
          <h2 itemprop="name" class="text-4xl">
            <img v-if="$frontmatter.service.icon" :src="'https://cdn.simpleicons.org/' + $frontmatter.service.icon" :alt="$frontmatter.service.name" style="width: 28px;" loading="lazy" fetchpriority="high" class="mr-2"/>
          </h2>
        </div>
        <Image v-if="$frontmatter.service.code" :src="'/img/service/' + $frontmatter.service.code + '.webp'" class="" :alt="$frontmatter.service.name" width="100%"/>
        <div class="my-4 flex flex-column gap-2 line-height-3">
          <div itemprop="name" v-for= "(description, index) in $frontmatter.service.descriptions" >
            <div v-html="description"></div>
          </div>
        <a :href="'/contact/?subject=' + encodeURIComponent($frontmatter.service.name + ' Services')" size="large" class="flex justify-content-center text-center no-underline mt-4" aria-label="Book Now"> 
          <Button label="Book Now!" icon="pi pi-briefcase" severity="primary" raised rounded />
        </a>
        </div>
    </div>
</div>

<div class="flex justify-content-between align-items-center mt-6 pt-4 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.service.previousService" :href="$frontmatter.service.previousService.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-chevron-left mr-2"></i>
      <div class="flex flex-column">
        <span class="text-sm text-color-secondary">Previous Service</span>
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.service.previousService.name }}</span>
      </div>
    </a>
  </div>
  <div class="flex-1 text-center">
    <a href="/web-development-services/" class="no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-th-large mr-2"></i>
      All Services
    </a>
  </div>
  <div class="flex-1 text-right">
    <a v-if="$frontmatter.service.nextService" :href="$frontmatter.service.nextService.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary">
      <div class="flex flex-column text-right">
        <span class="text-sm text-color-secondary">Next Service</span>
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.service.nextService.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2"></i>
    </a>
  </div>
</div>
`;
};

// Function to generate pages
const generatePages = (data, outputDir, slug, templateFn) => {
  ensureDirectoryExists(outputDir);

  data.forEach((item, index) => {
    const content = templateFn(item, index, data);
    const dirPath = path.join(outputDir, toKebabCase(item[slug])); // Directory path
    const filePath = path.join(dirPath, "index.md"); // File path

    ensureDirectoryExists(dirPath);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Created: ${filePath}`);
  });
};

// Generate project and service pages
generatePages(freelance, outProjectDir, "name", projectTemplate);
generatePages(services, outServiceDir, "code", serviceTemplate);

// --- Tag Pages Generation ---
import { posts } from "./data/posts.js";
const outTagsDir = path.resolve(__dirname, "../tags");

const tagTemplate = (tag) => {
  return `---
title: Posts tagged with ${tag}
layout: Layout
tag: ${tag}
---
<TagPage />
`;
};

// Extract unique tags
const allTags = new Set();
posts.forEach(post => {
  if (post.tags && Array.isArray(post.tags)) {
    post.tags.forEach(tag => allTags.add(String(tag).toLowerCase()));
  }
});

ensureDirectoryExists(outTagsDir);

allTags.forEach(tag => {
  const content = tagTemplate(tag);
  // Create a slug for the tag (e.g., "web-development")
  const tagSlug = toKebabCase(tag);
  const dirPath = path.join(outTagsDir, tagSlug);
  const filePath = path.join(dirPath, "index.md");

  ensureDirectoryExists(dirPath);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`✅ Created Tag Page: ${filePath}`);
});
