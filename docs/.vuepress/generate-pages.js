import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { toKebabCase } from "./utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and extract SUPPORT_EMAIL from config.ts
const configContent = fs.readFileSync(path.resolve(__dirname, "config.ts"), "utf-8");
const match = configContent.match(/const\s+SUPPORT_EMAIL\s*=\s*["']([^"']+)["']/);
const supportEmailFromConfig = match ? match[1] : "support@stackseekers.com";

// Set on global so projects.js can evaluate it safely during dynamic import in Node
global.VITE_SUPPORT_EMAIL = supportEmailFromConfig;

// Dynamically import the data modules to ensure global is populated first
const { freelance, SUPPORT_EMAIL } = await import("./data/projects.js");
const { services } = await import("./data/services.js");
const { posts } = await import("./data/posts.js");

const docsRoot = path.resolve(__dirname, "..");
const publicDir = path.resolve(__dirname, "./public");
const outProjectDir = path.resolve(docsRoot, "web-development-projects");
const outServiceDir = path.resolve(docsRoot, "web-development-services");
const outTagsDir = path.resolve(docsRoot, "tags");
const detailsDir = path.resolve(__dirname, "./data/details");
const DOMAIN = "https://stackseekers.com";

const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const readMarkdownContent = (detailsPath) => {
  if (!detailsPath) return "";
  const fullPath = path.resolve(detailsDir, path.basename(detailsPath));
  try {
    const content = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, "utf-8") : "";
    return content
      .replace(/^---$/gm, "***")
      .replace(/\n---$/gm, "\n***");
  } catch (error) {
    console.error(`Error reading markdown file ${fullPath}:`, error);
    return "";
  }
};

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const toIsoDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString().split("T")[0];
  }
  return date.toISOString().split("T")[0];
};

const buildContactLink = (subject, service) =>
  `/contact/?subject=${encodeURIComponent(subject)}&service=${encodeURIComponent(service)}`;

const projectTemplate = (project, projectIndex, allProjects) => {
  const markdownContent = readMarkdownContent(project.details);
  const previousProject =
    projectIndex > 0
      ? {
          name: allProjects[projectIndex - 1].name,
          link: `/web-development-projects/${toKebabCase(allProjects[projectIndex - 1].name)}/`,
        }
      : null;
  const nextProject =
    projectIndex < allProjects.length - 1
      ? {
          name: allProjects[projectIndex + 1].name,
          link: `/web-development-projects/${toKebabCase(allProjects[projectIndex + 1].name)}/`,
        }
      : null;

  return `---
title: ${JSON.stringify(project.seoTitle || project.name)}
description: ${JSON.stringify(project.seoDescription || project.description)}
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: ${JSON.stringify(project.name)}
  description: ${JSON.stringify(project.description)}
  software: ${JSON.stringify(project.software)}
  schema: ${JSON.stringify(project.schema)}
  domain: ${JSON.stringify(project.domain)}
  year: ${JSON.stringify(project.year)}
  price: ${JSON.stringify(project.price) || "0"}
  currency: ${JSON.stringify(project.currency) || "USD"}
  link: ${JSON.stringify(project.link) || ""}
  codeLink: ${JSON.stringify(project.codeLink) || ""}
  contact: ${JSON.stringify(project.contact || `mailto:${SUPPORT_EMAIL}?subject=${project.name} Inquiry`)}
  stack: ${JSON.stringify(project.stack)}
  images: ${JSON.stringify(project.images)}
  video: ${JSON.stringify(project.video || "")}
  features: ${JSON.stringify(project.features) || []}
  perspective: ${JSON.stringify(project.perspective || { executive: "", technical: "" })}
  details: ${JSON.stringify(markdownContent)}
  previousProject: ${JSON.stringify(previousProject)}
  nextProject: ${JSON.stringify(nextProject)}
  relatedCaseStudy: ${JSON.stringify(project.relatedCaseStudy || null)}
---

<section v-if="$frontmatter.project.images && $frontmatter.project.images.length" class="mb-8" itemscope itemtype="https://schema.org/SoftwareApplication">
  <div class="grid m-0 p-0">
    <div :class="['col-12 p-2', $frontmatter.project.images.length > 1 ? 'md:col-8 lg:col-9' : 'col-12']">
       <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
         <Image :src="$frontmatter.project.images[0].itemImageSrc" :alt="$frontmatter.project.images[0].alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-20rem md:min-h-30rem" />
       </div>
    </div>
    <div v-if="$frontmatter.project.images.length > 1" class="col-12 md:col-4 lg:col-3 p-0">
       <div class="grid m-0 p-0">
          <div v-for="(img, idx) in $frontmatter.project.images.slice(1, 3)" :key="idx" class="col-12 p-2">
             <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
                <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-12rem md:min-h-14-5rem" :imageProps="{ loading: 'lazy' }" />
             </div>
          </div>
       </div>
    </div>
    <div v-for="(img, idx) in $frontmatter.project.images.slice(3, 5)" :key="idx" class="col-12 md:col-6 lg:col-4 p-2">
       <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
          <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" :imageProps="{ loading: 'lazy' }" />
       </div>
    </div>
    <div v-if="$frontmatter.project.images.length >= 6" class="col-12 md:col-6 lg:col-4 p-2">
       <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card relative" :class="{'cursor-pointer': $frontmatter.project.images.length > 6}" @click="$frontmatter.project.images.length > 6 ? displayModal = true : null">
          <Image :src="$frontmatter.project.images[5].itemImageSrc" :alt="$frontmatter.project.images[5].alt" :preview="$frontmatter.project.images.length === 6" class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" :imageProps="{ loading: 'lazy' }" />
          <div v-if="$frontmatter.project.images.length > 6" class="absolute top-0 left-0 w-full h-full flex align-items-center justify-content-center bg-black-alpha-60 text-white hover:bg-black-alpha-40 transition-all transition-duration-300">
             <div class="text-center">
                <i class="pi pi-images text-4xl mb-2"></i>
                <div class="text-xl font-bold uppercase tracking-widest">+{{ $frontmatter.project.images.length - 5 }} More</div>
                <div class="text-xs opacity-70 mt-1">View All Media</div>
             </div>
          </div>
       </div>
    </div>
  </div>
</section>

<section class="mt-4 mb-6">
  <div class="grid">
    <div class="col-12">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
      <p class="text-xl opacity-70 line-height-4 max-w-50rem mb-4">{{$frontmatter.project.description}}</p>
      <div class="surface-card p-4 md:p-5 border-round-3xl shadow-2 border-1 border-100 mb-4">
        <div class="grid align-items-center">
          <div class="col-12 md:col-6 border-bottom-1 md:border-bottom-none md:border-right-1 border-100 mb-3 md:mb-0 pb-3 md:pb-0">
             <div class="flex align-items-center gap-3">
                <i class="pi pi-briefcase text-primary text-2xl"></i>
                <div>
                  <div class="text-xs opacity-50 uppercase font-bold">Industry</div>
                  <div class="font-bold text-lg text-900">{{$frontmatter.project.domain}}</div>
                </div>
             </div>
          </div>
          <div class="col-12 md:col-6 border-bottom-1 md:border-bottom-none border-100 mb-3 md:mb-0 pb-3 md:pb-0">
             <div class="flex align-items-center gap-3">
                <i class="pi pi-bolt text-primary text-2xl"></i>
                <div>
                  <div class="text-xs opacity-50 uppercase font-bold">Project Status</div>
                  <div class="font-bold text-lg text-900">Scale & Growth</div>
                </div>
             </div>
          </div>
          <div class="col-12 md:col-12 pt-3 md:pt-0">
             <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
          </div>
        </div>
        <div class="mt-4 pt-4">
           <div class="flex flex-column md:flex-row align-items-stretch gap-3">
              <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank" class="no-underline flex-1">
                <Button label="View Live Demo" icon="pi pi-external-link" severity="primary" class="w-full font-bold py-3" raised rounded />
              </a>
              <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank" class="no-underline flex-1">
                <Button label="View Source Code" icon="pi pi-github" severity="secondary" class="w-full font-bold py-3" raised rounded />
              </a>
              <a v-if="$frontmatter.project.contact" :href="'mailto:${SUPPORT_EMAIL}?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline flex-1">
                <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold py-3" raised rounded />
              </a>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section v-if="$frontmatter.project.video" class="mb-8 overflow-hidden border-round-3xl shadow-4 surface-card border-1 border-100">
  <div class="relative w-full overflow-hidden" style="padding-top: 56.25%;">
     <iframe 
       class="absolute top-0 left-0 w-full h-full border-none" 
       :src="'https://www.youtube.com/embed/' + ($frontmatter.project.video.includes('v=') ? $frontmatter.project.video.split('v=')[1]?.split('&')[0] : $frontmatter.project.video.split('/').pop())" 
       title="Project Video Showcase" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" 
       allowfullscreen>
     </iframe>
  </div>
</section>

<div v-if="$frontmatter.project.video" class="flex flex-wrap justify-content-center gap-3 mb-8">
  <a :href="'mailto:${SUPPORT_EMAIL}?subject=' + encodeURIComponent('Architectural Consultation: ' + $frontmatter.project.name)" class="no-underline">
    <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="primary" raised rounded class="font-bold px-6 py-3" />
  </a>
  <a :href="'https://wa.me/917026217029?text=' + encodeURIComponent('Hi Jiwan! I saw your ' + $frontmatter.project.name + ' project and would like to discuss a similar strategic architecture.')" target="_blank" rel="noopener noreferrer" class="no-underline">
    <Button label="WhatsApp Connect" icon="pi pi-whatsapp" severity="success" raised rounded class="font-bold px-6 py-3" />
  </a>
</div>


<Dialog v-model:visible="displayModal" modal header="Project Media Showcase" :style="{ width: '90vw', maxWidth: '1200px' }" class="p-0 overflow-hidden border-round-3xl" :breakpoints="{'960px': '95vw'}">
  <div class="grid p-3 surface-ground">
    <div v-for="(img, idx) in $frontmatter.project.images" :key="idx" class="col-12 md:col-6 lg:col-4 p-2">
       <div class="border-round-2xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 surface-card h-full">
          <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" :imageProps="{ loading: 'lazy' }" />
       </div>
    </div>
  </div>
</Dialog>

<div class="grid mb-8">
  <div class="col-12">
    <TabView class="project-perspective-tabs" v-if="$frontmatter.project.perspective?.executive">
      <TabPanel>
        <template #header>
          <div class="flex align-items-center gap-2">
            <i class="pi pi-briefcase"></i>
            <span>Strategic Executive</span>
          </div>
        </template>
        <div class="p-2 md:p-4 surface-card border-round-3xl shadow-1 mt-4">
          <div class="flex align-items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
            <i class="pi pi-verified"></i>
            Business Impact & ROI
          </div>
          <div class="text-xl line-height-4 text-700 mb-6">
            {{ $frontmatter.project.perspective.executive }}
          </div>
          <div class="grid">
            <div class="col-12">
               <h4 class="text-lg font-bold mb-4 flex align-items-center gap-2">
                  <i class="pi pi-list text-primary"></i> Strategic Playbook Features
               </h4>
               <div class="grid">
                  <div v-for="feature in $frontmatter.project.features" :key="feature.text" class="col-12 md:col-6 mb-3">
                     <div class="flex align-items-start gap-3">
                        <i class="pi pi-check text-primary mt-1"></i>
                        <div class="text-sm font-medium line-height-3" v-html="feature.text"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <template #header>
          <div class="flex align-items-center gap-2">
            <i class="pi pi-cog"></i>
            <span>Engineering Architecture</span>
          </div>
        </template>
        <div class="p-2 md:p-4 surface-card border-round-3xl shadow-1 mt-4">
          <div class="flex align-items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
            <i class="pi pi-code"></i>
            Technical Deep-Dive
          </div>
          <div class="text-xl line-height-4 text-700 mb-6">
            {{ $frontmatter.project.perspective.technical }}
          </div>
          <div class="project-markdown-content text-lg line-height-4">

${markdownContent}

</div>
</div>
</TabPanel>
</TabView>

<div v-else class="surface-card p-4 md:p-6 border-round-3xl shadow-2 h-full">
  <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
     <i class="pi pi-list text-primary"></i> Playbook Features
  </h3>
  <div class="grid">
     <div v-for="feature in $frontmatter.project.features" :key="feature.text" class="col-12 md:col-6 mb-3">
        <div class="flex align-items-start gap-3">
           <i class="pi pi-verified text-primary mt-1"></i>
           <div class="text-sm font-medium line-height-3" v-html="feature.text"></div>
        </div>
     </div>
  </div>
</div>
</div>

</div>

<div v-if="$frontmatter.project.relatedCaseStudy" class="mt-8 p-6 surface-50 border-round-2xl border-1 border-100 mb-6">
  <div class="flex flex-column md:flex-row align-items-center justify-content-between gap-4">
    <div>
      <h3 class="text-2xl font-bold m-0 flex align-items-center gap-2">
        <i class="pi pi-building text-primary"></i>
        {{ $frontmatter.project.relatedCaseStudy.title }}
      </h3>
      <p class="text-700 m-0 mt-2 line-height-3">{{ $frontmatter.project.relatedCaseStudy.description }}</p>
    </div>
    <div>
      <a :href="$frontmatter.project.relatedCaseStudy.link" class="no-underline">
        <Button :label="$frontmatter.project.relatedCaseStudy.buttonText" icon="pi pi-arrow-right" iconPos="right" severity="primary" raised rounded class="font-bold white-space-nowrap" />
      </a>
    </div>
  </div>
</div>

<ConsultingBridge />
<div class="mt-8 p-6 surface-50 border-round-2xl border-1 border-100">
      <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
        <i class="pi pi-cog text-primary"></i>
        Related Engineering Services
      </h3>
      <div class="flex flex-wrap gap-3">
        <a href="/web-development-services/product-architecture-and-scaling/" class="no-underline px-4 py-2 surface-0 shadow-1 border-round-xl text-700 font-bold hover:text-primary transition-all">Custom Software</a>
        <a href="/web-development-services/saas-mvp-development/" class="no-underline px-4 py-2 surface-0 shadow-1 border-round-xl text-700 font-bold hover:text-primary transition-all">MVP Development</a>
        <a href="/web-development-services/ai-and-automation-strategy/" class="no-underline px-4 py-2 surface-0 shadow-1 border-round-xl text-700 font-bold hover:text-primary transition-all">AI & Automation</a>
      </div>
    </div>

<section class="mt-8">
  <div class="glass-effect p-6 md:p-8 border-round-3xl text-center relative overflow-hidden shadow-4">
    <div class="absolute top-0 right-0 w-20rem h-20rem bg-primary opacity-10 border-circle" style="filter: blur(80px); transform: translate(30%, -30%)"></div>
    <h2 class="text-3xl md:text-5xl font-bold mb-4 relative z-1">Need a similar <span class="text-gradient">strategic architecture</span>?</h2>
    <p class="text-xl text-600 mb-6 max-w-30rem mx-auto relative z-1">If this project aligns with your current bottlenecks, let's discuss how to apply these same principles to your business.</p>
    <div class="flex flex-wrap justify-content-center gap-3 relative z-1">
      <a :href="'/contact/?subject=' + encodeURIComponent('Inquiry regarding ' + $frontmatter.project.name)" class="no-underline">
        <Button label="Start Your Project Brief" icon="pi pi-file-edit" severity="primary" raised rounded />
      </a>
      <a :href="'https://cal.com/stackseekers?utm_source=website&utm_medium=portfolio&utm_campaign=' + $frontmatter.project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')" target="_blank" class="no-underline">
        <Button label="Book Technical Roadmap Audit" icon="pi pi-calendar-clock" severity="secondary" raised rounded />
      </a>
    </div>
  </div>
</section>

<div class="flex justify-content-between align-items-center mt-8 pt-6 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.project.previousProject" :href="$frontmatter.project.previousProject.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary group">
      <i class="pi pi-chevron-left mr-2 transition-transform group-hover:-translate-x-1"></i>
      <div class="flex flex-column">
        <span class="text-xs uppercase text-500 font-bold">Previous</span>
        <span class="font-bold text-900">{{ $frontmatter.project.previousProject.name }}</span>
      </div>
    </a>
  </div>
  <div class="flex-1 text-center">
    <a href="/web-development-projects/" class="no-underline text-color-secondary hover:text-primary font-bold">
      <i class="pi pi-th-large mr-2"></i>
      Portfolio
    </a>
  </div>
  <div class="flex-1 text-right">
    <a v-if="$frontmatter.project.nextProject" :href="$frontmatter.project.nextProject.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary group">
      <div class="flex flex-column text-right">
        <span class="text-xs uppercase text-500 font-bold">Next</span>
        <span class="font-bold text-900">{{ $frontmatter.project.nextProject.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2 transition-transform group-hover:translate-x-1"></i>
    </a>
  </div>
</div>

<script setup>
import { ref } from "vue"
import { responsiveOptions } from "@data/responsive.js"
const displayModal = ref(false)
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
title: ${JSON.stringify(service.seoTitle || service.name)}
description: ${JSON.stringify(service.seoDescription || service.descriptions.join(" "))}
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
service:
  name: ${JSON.stringify(service.name)}
  descriptions: ${JSON.stringify(service.descriptions)}
  icon: ${JSON.stringify(service.icon)}
  code: ${JSON.stringify(service.code)}
  imageCode: ${JSON.stringify(service.imageCode || service.code)}
  metric: ${JSON.stringify(service.metric)}
  outcome: ${JSON.stringify(service.outcome)}
  keywords: ${JSON.stringify(service.keywords || [])}
  idealFor: ${JSON.stringify(service.idealFor || [])}
  problems: ${JSON.stringify(service.problems || [])}
  deliverables: ${JSON.stringify(service.deliverables || [])}
  proof: ${JSON.stringify(service.proof || "")}
  faq: ${JSON.stringify(service.faq || [])}
  previousService: ${JSON.stringify(previousService)}
  nextService: ${JSON.stringify(nextService)}
---
<article class="service-sales-page">
  <section class="mb-6">
    <div class="grid align-items-center">
      <div class="col-12 lg:col-7">
        <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Core Service</div>
        <h1 class="text-4xl md:text-6xl font-bold mt-0 mb-3 line-height-2">{{$frontmatter.service.name}}</h1>
        <p class="text-xl text-700 line-height-3 mb-4" v-for="description in $frontmatter.service.descriptions" :key="description">
          {{ description }}
        </p>
        <div class="flex flex-column md:flex-row gap-3">
          <a :href="'https://cal.com/stackseekers?utm_source=website&utm_medium=service-page&utm_campaign=' + $frontmatter.service.code" target="_blank" class="no-underline">
            <Button label="Book Technical Roadmap Call" icon="pi pi-calendar-clock" severity="primary" raised rounded />
          </a>
          <a :href="'/contact/?subject=' + encodeURIComponent($frontmatter.service.name + ' inquiry') + '&service=' + encodeURIComponent($frontmatter.service.name)" class="no-underline">
            <Button label="Request a Quote" icon="pi pi-send" severity="secondary" raised rounded />
          </a>
        </div>
      </div>
      <div class="col-12 lg:col-5">
        <div class="surface-card p-4 md:p-5 border-round-3xl shadow-2 border-1 border-100">
          <img v-if="$frontmatter.service.imageCode" :src="'/img/service/' + $frontmatter.service.imageCode + '.webp'" :alt="$frontmatter.service.name" class="w-full border-round-2xl mb-4" />
          <div class="grid">
            <div class="col-6">
              <div class="text-xs uppercase text-500 font-bold mb-1">Primary Outcome</div>
              <div class="font-bold line-height-3">{{$frontmatter.service.outcome}}</div>
            </div>
            <div class="col-6">
              <div class="text-xs uppercase text-500 font-bold mb-1">Signal</div>
              <div class="font-bold line-height-3">{{$frontmatter.service.metric}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-6 surface-50 border-round-3xl p-4 md:p-5">
    <div class="grid">
      <div class="col-12 md:col-4" v-if="$frontmatter.service.idealFor?.length">
        <h2 class="text-2xl font-bold mt-0 mb-3">Ideal For</h2>
        <ul class="list-none p-0 m-0">
          <li v-for="item in $frontmatter.service.idealFor" :key="item" class="flex align-items-start gap-2 mb-3">
            <i class="pi pi-check-circle text-primary mt-1"></i>
            <span class="line-height-3">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="col-12 md:col-4" v-if="$frontmatter.service.problems?.length">
        <h2 class="text-2xl font-bold mt-0 mb-3">Problems Solved</h2>
        <ul class="list-none p-0 m-0">
          <li v-for="item in $frontmatter.service.problems" :key="item" class="flex align-items-start gap-2 mb-3">
            <i class="pi pi-exclamation-circle text-orange-500 mt-1"></i>
            <span class="line-height-3">{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="col-12 md:col-4" v-if="$frontmatter.service.deliverables?.length">
        <h2 class="text-2xl font-bold mt-0 mb-3">What You Get</h2>
        <ul class="list-none p-0 m-0">
          <li v-for="item in $frontmatter.service.deliverables" :key="item" class="flex align-items-start gap-2 mb-3">
            <i class="pi pi-star text-green-500 mt-1"></i>
            <span class="line-height-3">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="mb-6">
    <div class="surface-card text-900 border-round-3xl p-4 md:p-5 shadow-3">
      <div class="text-sm uppercase font-bold opacity-70 mb-2">Proof of Fit</div>
      <p class="text-lg line-height-3 m-0">{{$frontmatter.service.proof}}</p>
    </div>
  </section>

  <section class="mb-6">
    <div class="grid">
      <div class="col-12 lg:col-8">
        <h2 class="text-3xl font-bold mt-0 mb-3">How We Work</h2>
        <div class="grid">
          <div class="col-12 md:col-4">
            <div class="surface-card border-round-2xl p-4 shadow-1 h-full">
              <div class="text-primary font-bold mb-2">1. Audit</div>
              <p class="line-height-3 m-0">We map the business bottleneck, technical constraints, and the highest-value delivery path.</p>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="surface-card border-round-2xl p-4 shadow-1 h-full">
              <div class="text-primary font-bold mb-2">2. Roadmap</div>
              <p class="line-height-3 m-0">You get a practical plan with architecture decisions, delivery priorities, and risk management.</p>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="surface-card border-round-2xl p-4 shadow-1 h-full">
              <div class="text-primary font-bold mb-2">3. Execution</div>
              <p class="line-height-3 m-0">I stay close to implementation so the strategy becomes shipped product, not a slide deck.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 lg:col-4">
        <div class="surface-50 border-round-3xl p-4 md:p-5 h-full">
          <h2 class="text-2xl font-bold mt-0 mb-3">Best Next Step</h2>
          <p class="line-height-3 text-700">If this service matches your bottleneck, the fastest path is a short roadmap call with enough context to scope the technical direction and commercial fit.</p>
          <a :href="'https://cal.com/stackseekers?utm_source=website&utm_medium=service-page&utm_campaign=' + $frontmatter.service.code" target="_blank" class="no-underline">
            <Button label="Book the Call" icon="pi pi-arrow-right" severity="primary" raised rounded class="w-full" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-6" v-if="$frontmatter.service.faq?.length">
    <h2 class="text-3xl font-bold mt-0 mb-4">FAQ</h2>
    <div class="grid">
      <div class="col-12 md:col-6" v-for="item in $frontmatter.service.faq" :key="item.question">
        <div class="surface-card border-round-2xl p-4 shadow-1 h-full">
          <h3 class="text-xl font-bold mt-0 mb-2">{{ item.question }}</h3>
          <p class="line-height-3 m-0">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</article>

<!-- Related Case Studies -->
<section class="mb-6">
  <div class="surface-card text-900 p-4 border-round-3xl relative overflow-hidden">
    <div class="absolute top-0 right-0 w-20rem h-20rem bg-primary border-circle opacity-10" style="filter: blur(80px); transform: translate(30%, -30%)"></div>
    <div class="relative z-1">
      <h3 class="text-3xl font-bold mb-4">Relevant Case Studies</h3>
      <p class="text-xl text-600 mb-6 max-w-30rem">See how I've applied these principles to real-world business challenges.</p>
      <div class="grid">
        <div class="col-12 md:col-4">
          <a href="/web-development-projects/ai-dynamic-crud-app/" class="no-underline block p-4 surface-50 border-round-2xl hover:surface-100 transition-all border-1 border-100 h-full">
            <div class="text-primary font-bold text-xs mb-2 uppercase">AI Automation</div>
            <div class="font-bold text-900 mb-2">AI Dynamic CRUD</div>
            <div class="text-600 text-sm">Enterprise Notion-to-App engine.</div>
          </a>
        </div>
        <div class="col-12 md:col-4">
          <a href="/web-development-projects/local-home-services-pros/" class="no-underline block p-4 surface-50 border-round-2xl hover:surface-100 transition-all border-1 border-100 h-full">
            <div class="text-primary font-bold text-xs mb-2 uppercase">Scalable Web</div>
            <div class="font-bold text-900 mb-2">LocalXR Platform</div>
            <div class="text-600 text-sm">10k+ dynamic service routes.</div>
          </a>
        </div>
        <div class="col-12 md:col-4">
          <a href="/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/" class="no-underline block p-4 surface-50 border-round-2xl hover:surface-100 transition-all border-1 border-100 h-full">
            <div class="text-primary font-bold text-xs mb-2 uppercase">Enterprise Migration</div>
            <div class="font-bold text-900 mb-2">ABN AMRO Rebuild</div>
            <div class="text-600 text-sm">Global banking infrastructure.</div>
          </a>
        </div>
      </div>
      <div class="mt-6 text-center">
        <a href="/web-development-projects/" class="no-underline text-primary font-bold hover:text-primary-600">
          View All Projects <i class="pi pi-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="mt-6">
  <div class="surface-card text-900 p-6 md:p-8 border-round-3xl text-center relative overflow-hidden shadow-6">
    <div class="absolute top-0 right-0 w-30rem h-30rem bg-primary opacity-20 border-circle" style="filter: blur(100px); transform: translate(30%, -30%)"></div>
    <h2 class="text-3xl md:text-5xl font-bold mb-4 relative z-1">Stop the <span class="text-primary">Technical Bottlenecks</span>.</h2>
    <p class="text-xl text-600 mb-6 max-w-40rem mx-auto relative z-1">Don't let legacy debt or manual workflows stall your growth. Get the strategic engineering leadership your brand deserves.</p>
    <div class="flex flex-wrap justify-content-center gap-4 relative z-1">
      <a :href="'/contact/?subject=' + encodeURIComponent($frontmatter.service.name + ' Strategic Inquiry')" class="no-underline">
        <Button label="Request Strategic Partnership" icon="pi pi-shield" severity="primary" raised rounded />
      </a>
      <a :href="'https://cal.com/stackseekers?utm_source=website&utm_medium=service-page&utm_campaign=' + $frontmatter.service.code" target="_blank" class="no-underline">
        <Button label="Book Roadmap Call" icon="pi pi-calendar-clock" severity="secondary" raised rounded />
      </a>
    </div>
    <div class="mt-8 flex flex-wrap justify-content-center gap-6 opacity-60">
      <div class="flex align-items-center gap-2">
        <i class="pi pi-check text-xs"></i>
        <span class="text-xs font-bold uppercase tracking-widest">Fractional CTO Support</span>
      </div>
      <div class="flex align-items-center gap-2">
        <i class="pi pi-check text-xs"></i>
        <span class="text-xs font-bold uppercase tracking-widest">Scalable Revenue Systems</span>
      </div>
      <div class="flex align-items-center gap-2">
        <i class="pi pi-check text-xs"></i>
        <span class="text-xs font-bold uppercase tracking-widest">AI Intelligence Integration</span>
      </div>
    </div>
  </div>
</section>

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

const tagTemplate = (tag) => {
  const description = `Explore articles, tutorials, and insights about ${tag} — with best practices and latest trends.`;
  return `---
title: Posts tagged with ${tag}
description: ${description}
layout: Layout
tag: ${tag}
head:
  - - meta
    - name: robots
      content: noindex, follow
  - - meta
    - name: keywords
      content: ${tag}, web development, programming, tech, tutorial
  - - meta
    - property: og:title
      content: Posts tagged with ${tag}
  - - meta
    - property: og:description
      content: ${description}
  - - meta
    - property: og:type
      content: website
---
<TagPage />
`;
};

const generatePages = (data, outputDir, slugKey, templateFn) => {
  ensureDirectoryExists(outputDir);

  data.forEach((item, index) => {
    const content = templateFn(item, index, data);
    const dirPath = path.join(outputDir, toKebabCase(item[slugKey]));
    const filePath = path.join(dirPath, "index.md");

    ensureDirectoryExists(dirPath);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Created: ${filePath}`);
  });
};

const generateTagPages = () => {
  const allTags = new Set();

  posts.forEach((post) => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach((tag) => allTags.add(String(tag).toLowerCase()));
    }
  });

  const tagsArray = Array.from(allTags).sort();
  ensureDirectoryExists(outTagsDir);

  // Generate individual tag pages
  tagsArray.forEach((tag) => {
    const content = tagTemplate(tag);
    const dirPath = path.join(outTagsDir, toKebabCase(tag));
    const filePath = path.join(dirPath, "index.md");

    ensureDirectoryExists(dirPath);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Created Tag Page: ${filePath}`);
  });

  // Central Tags index page content
  const indexContent = `---
title: Explore Topics
description: Browse all technical topics, tutorials, and insights by category and tags.
layout: Layout
---

<section class="p-4 surface-900 text-white border-round-3xl mb-8 overflow-hidden relative">
  <div class="absolute top-0 right-0 w-20rem h-20rem bg-primary-900 border-circle opacity-10" style="filter: blur(80px); transform: translate(30%, -30%)"></div>
  <div class="relative z-1 text-center py-6">
    <div class="flex align-items-center justify-content-center gap-2 text-primary font-bold mb-3 uppercase tracking-wider text-xs">
      <i class="pi pi-tag"></i>
      Knowledge Map
    </div>
    <h1 class="text-4xl md:text-6xl font-bold mb-4 mt-0 line-height-2">Explore <span class="text-primary-400">Topics</span>.</h1>
    <p class="text-xl opacity-70 max-w-30rem mx-auto mb-5">Technical deep-dives and strategic breakdowns across the stack.</p>
  </div>
</section>

<TagIndex />

<div class="mt-8 text-center">
  <h3 class="text-2xl font-bold mb-4">Want more insights?</h3>
  <a href="/posts/" class="no-underline">
    <Button label="Back to Playbook" icon="pi pi-arrow-left" severity="secondary" rounded text />
  </a>
</div>
`;
  fs.writeFileSync(path.join(outTagsDir, "README.md"), indexContent, "utf-8");
  console.log(`Created central Tags index: ${path.join(outTagsDir, "README.md")}`);
};

const collectMarkdownPages = (dirPath, result = []) => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    if (entry.name === "node_modules") continue;

    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      collectMarkdownPages(fullPath, result);
      continue;
    }

    if (!entry.name.endsWith(".md")) continue;
    if (entry.name === "README.md" && dirPath === path.resolve(docsRoot, ".vuepress")) continue;

    result.push(fullPath);
  }

  return result;
};

const toPagePath = (filePath) => {
  const relativePath = path.relative(docsRoot, filePath).replace(/\\/g, "/");

  if (relativePath === "README.md") return "/";
  if (relativePath.endsWith("/README.md")) {
    return `/${relativePath.replace(/\/README\.md$/, "/")}`;
  }
  if (relativePath.endsWith("/index.md")) {
    return `/${relativePath.replace(/\/index\.md$/, "/")}`;
  }

  return `/${relativePath.replace(/\.md$/, "/")}`;
};

const getPriority = (pagePath) => {
  if (pagePath === "/") return "1.0";
  if (pagePath === "/contact/") return "0.95";
  if (pagePath === "/web-development-services/") return "0.95";
  if (pagePath.startsWith("/web-development-services/")) return "0.90";
  if (pagePath === "/web-development-projects/") return "0.85";
  if (pagePath.startsWith("/web-development-projects/")) return "0.80";
  if (pagePath.startsWith("/posts/")) return "0.76";
  if (pagePath.startsWith("/about/") || pagePath.startsWith("/jiwan-ghosal/")) return "0.72";
  if (pagePath.startsWith("/tags/")) return "0.58";
  if (pagePath.startsWith("/privacy-policy/") || pagePath.startsWith("/terms-of-service/")) return "0.20";
  return "0.64";
};

const getChangeFrequency = (pagePath) => {
  if (pagePath === "/" || pagePath === "/contact/" || pagePath === "/web-development-services/") return "weekly";
  if (pagePath.startsWith("/posts/")) return "monthly";
  if (pagePath.startsWith("/tags/")) return "weekly";
  return "monthly";
};

const getLastModified = (filePath, pagePath) => {
  const post = posts.find((item) => item.link === pagePath);
  if (post?.date) return toIsoDate(post.date);

  const stats = fs.statSync(filePath);
  return toIsoDate(stats.mtime);
};

const generateSitemap = () => {
  ensureDirectoryExists(publicDir);

  const markdownFiles = collectMarkdownPages(docsRoot).filter(
    (filePath) => !filePath.includes(`${path.sep}.vuepress${path.sep}`)
  );

  const urls = markdownFiles
    .map((filePath) => {
      const pagePath = toPagePath(filePath);
      return {
        loc: `${DOMAIN}${pagePath}`,
        lastmod: getLastModified(filePath, pagePath),
        changefreq: getChangeFrequency(pagePath),
        priority: getPriority(pagePath),
      };
    })
    .sort((a, b) => a.loc.localeCompare(b.loc));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml, "utf-8");
  console.log(`Created sitemap: ${path.join(publicDir, "sitemap.xml")}`);
};

generatePages(freelance, outProjectDir, "name", projectTemplate);
generatePages(services, outServiceDir, "code", serviceTemplate);
generateTagPages();
generateSitemap();
