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

// Utility function to ensure a directory exists
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Template for project pages
const projectTemplate = (project) => `---
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
        <a v-if="$frontmatter.project.contact" :href="\`${"$frontmatter.project.contact"} ${"$frontmatter.project.name"}\`" target="_blank"
          class="flex flex-row no-underline w-full">
          <Button label="Get Custom Code" icon="pi pi-inbox" severity="secondary" raised rounded class="w-full" />
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
      <h4 class="m-2 text-sm" v-html="feature.text"></h4>
    </li>
  </ul>
</div>

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>
`;

// Template for service pages
const serviceTemplate = (service) => `---
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
---
<div class="shadow-1 col-12 p-0 overflow-hidden" itemscope itemtype="https://schema.org/SoftwareApplication">
    <div class="px-4 m-2">
        <div class="text-4xl font-bold mb-4">
          <h2 itemprop="name" class="text-4xl">
            <img v-if="$frontmatter.service.icon" :src="\`https://cdn.simpleicons.org/\${$frontmatter.service.icon}\`" :alt="$frontmatter.service.name" style="width: 28px;" loading="lazy" fetchpriority="high" class="mr-2"/>
          </h2>
        </div>
        <Image v-if="$frontmatter.service.code" :src="\`/img/service/\${$frontmatter.service.code}.webp\`" class="" :alt="$frontmatter.service.name" width="100%"/>
        <div class="my-4 flex flex-column gap-2 line-height-3">
          <div itemprop="name" v-for= "(description, index) in $frontmatter.service.descriptions" >
            <div v-html="description"></div>
          </div>
          <a :href="\`mailto:jiwan.cse@gmail.com?subject=Inquiry : $frontmatter.service.name Services\`" size="large" class="flex justify-content-center text-center no-underline mt-4" aria-label="Send an Email"> 
            <Button label="Book Now!" icon="pi pi-briefcase" severity="primary" raised rounded />
          </a>
        </div>
    </div>
</div>
`;

// Function to generate pages
const generatePages = (data, outputDir,slug, templateFn) => {
  ensureDirectoryExists(outputDir);

  data.forEach((item) => {
    const content = templateFn(item);
    const dirPath = path.join(outputDir, toKebabCase(item[slug])); // Directory path
    const filePath = path.join(dirPath, "index.md"); // File path

    ensureDirectoryExists(dirPath);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✅ Created: ${filePath}`);
  });
};

// Generate project and service pages
generatePages(freelance, outProjectDir,"name",projectTemplate);
generatePages(services, outServiceDir,"code", serviceTemplate);
