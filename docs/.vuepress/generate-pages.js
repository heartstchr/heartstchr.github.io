import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { projects } from './data/projects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function toKebabCase(str) {
  return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');
}

const projectTemplate = (project, markdownContent, previousProject, nextProject) => {
  return `---
title: "${project.name}"
description: "${project.description}"
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "${project.name}"
  description: "${project.description}"
  software: "${project.software}"
  schema: "${project.schema}"
  domain: "${project.domain}"
  year: "${project.year}"
  price: ${project.price || 0}
  currency: ${project.currency || 'USD'}
  link: "${project.link || ''}"
  codeLink: ${project.codeLink || ''}
  contact: "${project.contact || ''}"
  stack: ${JSON.stringify(project.stack)}
  images: ${JSON.stringify(project.images)}
  features: ${JSON.stringify(project.features)}
  perspective: ${JSON.stringify(project.perspective)}
  details: ${JSON.stringify(markdownContent)}
  previousProject: ${JSON.stringify(previousProject)}
  nextProject: ${JSON.stringify(nextProject)}
---

<ProjectHero :project="$frontmatter.project" />

<ProjectGallery :images="$frontmatter.project.images" />

<ProjectTabs :project="$frontmatter.project">

${markdownContent}

</ProjectTabs>

<div v-if="!$frontmatter.project.perspective?.executive" v-pre class="project-markdown-content text-lg line-height-4 mb-8">

${markdownContent}

</div>

<ConsultingBridge />

<AuditCTA />

<RelatedServices />

<ProjectNavigation :previous="$frontmatter.project.previousProject" :next="$frontmatter.project.nextProject" />

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>`;
};

const serviceTemplate = (service, serviceIndex, allServices) => {
  const previousService =
    serviceIndex > 0
      ? {
          name: allServices[serviceIndex - 1].name,
          link: `/web-development-services/${toKebabCase(allServices[serviceIndex - 1].code)}/`,
        }
      : null;
  const nextService =
    serviceIndex < allServices.length - 1
      ? {
          name: allServices[serviceIndex + 1].name,
          link: `/web-development-services/${toKebabCase(allServices[serviceIndex + 1].code)}/`,
        }
      : null;

  return `---
title: "${service.name}"
description: "${service.description}"
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
service:
  name: "${service.name}"
  code: "${service.code}"
  description: "${service.description}"
  benefits: ${JSON.stringify(service.benefits)}
  outcomes: ${JSON.stringify(service.outcomes)}
  previousService: ${JSON.stringify(previousService)}
  nextService: ${JSON.stringify(nextService)}
---

<section class="mt-4 mb-6">
  <div class="grid align-items-center">
    <div class="col-12 lg:col-7">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Core Expertise</div>
      <h1 class="text-4xl md:text-6xl font-bold mb-3 mt-0 line-height-2">${service.name}</h1>
      <p class="text-xl opacity-70 line-height-4 max-w-40rem mb-4">${service.description}</p>
      <div class="flex gap-3">
         <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
           <Button label="Consult Strategy" icon="pi pi-calendar" severity="primary" size="large" raised rounded class="px-6 py-3 font-bold" />
         </a>
      </div>
    </div>
    <div class="col-12 lg:col-5 hidden lg:block">
       <div class="surface-card p-4 border-round-3xl shadow-2 border-1 border-100 flex align-items-center justify-content-center min-h-20rem">
          <i class="pi pi-cog text-primary-100" style="font-size: 15rem; opacity: 0.2"></i>
       </div>
    </div>
  </div>
</section>

<div class="grid mb-8">
  <div class="col-12 lg:col-8">
    <div class="surface-card p-4 md:p-6 border-round-3xl shadow-1 mb-6">
      <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
        <i class="pi pi-verified text-primary"></i>
        Strategic Benefits
      </h3>
      <div class="grid">
        <div v-for="benefit in $frontmatter.service.benefits" :key="benefit" class="col-12 md:col-6 mb-3">
          <div class="flex align-items-start gap-3">
            <i class="pi pi-check-circle text-primary mt-1"></i>
            <span class="text-lg line-height-3">{{ benefit }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="surface-card p-4 md:p-6 border-round-3xl shadow-1">
       <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
        <i class="pi pi-chart-line text-primary"></i>
        Primary Outcomes
      </h3>
      <div class="flex flex-column gap-4">
        <div v-for="outcome in $frontmatter.service.outcomes" :key="outcome.title" class="p-3 border-round-2xl surface-50 border-1 border-100">
           <div class="font-bold text-lg mb-1">{{ outcome.title }}</div>
           <div class="text-600 line-height-3">{{ outcome.desc }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 lg:col-4">
    <AuditSidebar />
  </div>
</div>

<ConsultingBridge />

<div class="flex justify-content-between align-items-center mt-8 pt-6 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.service.previousService" :href="$frontmatter.service.previousService.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary group">
      <i class="pi pi-chevron-left mr-2 transition-transform group-hover:-translate-x-1"></i>
      <div class="flex flex-column">
        <span class="text-xs uppercase text-500 font-bold">Previous</span>
        <span class="font-bold text-900">{{ $frontmatter.service.previousService.name }}</span>
      </div>
    </a>
  </div>
  <div class="flex-1 text-center">
    <a href="/web-development-services/" class="no-underline text-color-secondary hover:text-primary font-bold">
      <i class="pi pi-th-large mr-2"></i>
      Services
    </a>
  </div>
  <div class="flex-1 text-right">
    <a v-if="$frontmatter.service.nextService" :href="$frontmatter.service.nextService.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary group">
      <div class="flex flex-column text-right">
        <span class="text-xs uppercase text-500 font-bold">Next</span>
        <span class="font-bold text-900">{{ $frontmatter.service.nextService.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2 transition-transform group-hover:translate-x-1"></i>
    </a>
  </div>
</div>
`;
};

const tagTemplate = (tag, taggedItems) => {
  return `---
title: "Tag: ${tag}"
description: "Browse articles and projects tagged with ${tag}"
layout: Layout
---

<TagPage :tag="'${tag}'" :items='${JSON.stringify(taggedItems)}' />
`;
};

const tagsIndexTemplate = (tags) => {
  return `---
title: All Tags
description: Browse projects and articles by category
layout: Layout
---

<TagIndex :tags='${JSON.stringify(tags)}' />
`;
};

// --- Generation Logic ---

const docsDir = path.join(__dirname, '../');

// 1. Generate Project Pages
const projectOutputDir = path.join(docsDir, 'web-development-projects');
if (!fs.existsSync(projectOutputDir)) fs.mkdirSync(projectOutputDir);

const allTags = new Map();

projects.forEach((project, index) => {
  const projectSlug = toKebabCase(project.name);
  const projectDir = path.join(projectOutputDir, projectSlug);
  if (!fs.existsSync(projectDir)) fs.mkdirSync(projectDir);

  const previousProject =
    index > 0
      ? {
          name: projects[index - 1].name,
          link: `/web-development-projects/${toKebabCase(projects[index - 1].name)}/`,
        }
      : null;
  const nextProject =
    index < projects.length - 1
      ? {
          name: projects[index + 1].name,
          link: `/web-development-projects/${toKebabCase(projects[index + 1].name)}/`,
        }
      : null;

  // Read existing markdown content if it exists, otherwise use empty string
  let markdownContent = '';
  const existingPath = path.join(projectDir, 'index.md');
  if (fs.existsSync(existingPath)) {
    const existingContent = fs.readFileSync(existingPath, 'utf8');
    const contentParts = existingContent.split('---');
    if (contentParts.length >= 3) {
      markdownContent = contentParts.slice(2).join('---').trim();
    }
  }

  fs.writeFileSync(
    path.join(projectDir, 'index.md'),
    projectTemplate(project, markdownContent, previousProject, nextProject)
  );

  // Collect Tags
  if (project.stack) {
    project.stack.forEach((tag) => {
      if (!allTags.has(tag)) allTags.set(tag, []);
      allTags.get(tag).push({
        type: 'Project',
        title: project.name,
        description: project.description,
        link: `/web-development-projects/${projectSlug}/`,
      });
    });
  }
});

// 2. Generate Tags Pages
const tagsOutputDir = path.join(docsDir, 'tags');
if (!fs.existsSync(tagsOutputDir)) fs.mkdirSync(tagsOutputDir);

allTags.forEach((items, tag) => {
  const tagSlug = toKebabCase(tag);
  const tagDir = path.join(tagsOutputDir, tagSlug);
  if (!fs.existsSync(tagDir)) fs.mkdirSync(tagDir);

  fs.writeFileSync(path.join(tagDir, 'index.md'), tagTemplate(tag, items));
});

// Generate main tags index
const sortedTags = Array.from(allTags.keys()).sort();
fs.writeFileSync(path.join(tagsOutputDir, 'README.md'), tagsIndexTemplate(sortedTags));

console.log('Project and Tag pages generated successfully!');
