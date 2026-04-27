import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { freelance } from "./data/projects.js";
import { services } from "./data/services.js";
import { posts } from "./data/posts.js";
import { toKebabCase } from "./utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
    return fs.existsSync(fullPath) ? fs.readFileSync(fullPath, "utf-8") : "";
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
  price: ${JSON.stringify(project.price) || "0"}
  currency: ${JSON.stringify(project.currency) || "USD"}
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

<section class="mt-4 mb-6">
  <div class="grid align-items-center">
    <div class="col-12 lg:col-8">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
      <h1 class="text-4xl md:text-6xl font-bold mb-3 mt-0 line-height-2">{{$frontmatter.project.name}}</h1>
      <p class="text-xl opacity-70 line-height-3 max-w-30rem">{{$frontmatter.project.description}}</p>
    </div>
    <div class="col-12 lg:col-4">
      <div class="surface-card p-4 border-round-2xl shadow-2 border-1 border-100">
        <div class="flex align-items-center gap-3 mb-3">
          <i class="pi pi-clock text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Timeline</div>
            <div class="font-bold">{{$frontmatter.project.year}}</div>
          </div>
        </div>
        <div class="flex align-items-center gap-3 mb-3">
          <i class="pi pi-briefcase text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Industry</div>
            <div class="font-bold">{{$frontmatter.project.domain}}</div>
          </div>
        </div>
        <div class="flex align-items-center gap-3">
          <i class="pi pi-bolt text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Status</div>
            <div class="font-bold">Scale & Growth</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section v-if="$frontmatter.project.images && $frontmatter.project.images.length" class="mb-8 overflow-hidden border-round-3xl shadow-4" itemscope itemtype="https://schema.org/SoftwareApplication">
  <div>
    <div v-if="$frontmatter.project.images.length > 1">
      <Galleria :value="$frontmatter.project.images" :responsiveOptions="responsiveOptions" :numVisible="5"
        :circular="true" :showItemNavigators="true" :showThumbnails="true" class="custom-galleria">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
            style="width: 100%; display: block" loading="eager" fetchpriority="high" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 60px; height: 60px; object-fit: cover;" />
        </template>
      </Galleria>
    </div>
    <div v-else>
      <img :src="$frontmatter.project.images[0].itemImageSrc" :alt="$frontmatter.project.images[0].alt"
        style="width: 100%; display: block" loading="eager" fetchpriority="high" />
    </div>
  </div>
</section>
<div class="grid mb-8">
  <div class="col-12 lg:col-8">
     <div class="surface-card p-4 md:p-6 border-round-3xl shadow-2 h-full">
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
  <div class="col-12 lg:col-4">
     <div class="surface-900 text-white p-4 border-round-3xl shadow-4 h-full relative overflow-hidden">
        <div class="absolute top-0 right-0 w-10rem h-10rem border-circle bg-primary opacity-20" style="filter: blur(40px); transform: translate(30%, -30%);"></div>
        <div class="relative z-1">
          <h3 class="text-2xl font-bold mb-4">The Stack</h3>
          <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
          <div class="flex flex-column gap-2 mt-6">
            <div class="flex align-items-stretch gap-2 w-full">
              <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank" class="flex-1 no-underline flex align-items-stretch">
                <Button label="View Demo" icon="pi pi-external-link" severity="primary" class="w-full h-full font-bold" raised rounded />
              </a>
               <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank" class="flex-1 no-underline flex align-items-stretch">
                <Button label="Source" icon="pi pi-github" severity="secondary" class="w-full h-full font-bold" raised rounded />
              </a>
            </div>
            <a v-if="$frontmatter.project.contact" :href="'/contact/?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline w-full">
              <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold" raised rounded />
            </a>
          </div>
        </div>
     </div>
  </div>
</div>

<div class="project-markdown-content text-lg line-height-4 mb-8">

  ${markdownContent}
</div>

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
title: ${service.name} | Stack Seekers
description: ${service.descriptions.join(" ")}
lastUpdated: false
editLink: false
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
          <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
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
    <div class="surface-900 text-white border-round-3xl p-4 md:p-5 shadow-3">
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
          <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
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

const tagTemplate = (tag) => {
  const description = `Explore our collection of articles, tutorials, and insights about ${tag}. Stay updated with the latest trends and best practices in ${tag}.`;
  return `---
title: Posts tagged with ${tag}
description: ${description}
layout: Layout
tag: ${tag}
head:
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

  ensureDirectoryExists(outTagsDir);

  allTags.forEach((tag) => {
    const content = tagTemplate(tag);
    const dirPath = path.join(outTagsDir, toKebabCase(tag));
    const filePath = path.join(dirPath, "index.md");

    ensureDirectoryExists(dirPath);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Created Tag Page: ${filePath}`);
  });
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
