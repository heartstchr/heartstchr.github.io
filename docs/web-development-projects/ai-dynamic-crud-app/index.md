---
title: "AI Dynamic CRUD App: Notion to Web App"
description: "Transform any Notion database into a professional web application with AI. Automatic field detection, intelligent forms, search, and multi-language support."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "AI Dynamic CRUD App"
  description: "Transform your Notion database into a professional web application in minutes with the power of AI. Automatically reads your Notion structure, suggests field relationships, and creates beautiful, responsive interfaces with intelligent forms, search, and multi-language support."
  software: "Web Application"
  schema: "https://schema.org/WebApplication"
  domain: "Database Management & AI Automation"
  year: "2025"
  price: "20"
  currency: "USD"
  link: "https://ai-dynamic-crud-app.stackseekers.com/"
  codeLink: 
  contact: "mailto:support@stackseekers.com?subject=AI Dynamic CRUD App Inquiry"
  stack: ["javascript","vuedotjs","notion/black/white","html5","css","json/black/white"]
  images: [{"itemImageSrc":"/img/projects/ai-dynamic-crud-app/ai-webapp-english.webp","alt":"AI Dynamic CRUD App - Create with Gemini"},{"itemImageSrc":"/img/projects/ai-dynamic-crud-app/ai-webapp-hindi.webp","alt":"AI Dynamic CRUD App - Hindi Translation"},{"itemImageSrc":"/img/projects/ai-dynamic-crud-app/ai-webapp-japanese.webp","alt":"AI Dynamic CRUD App - Japanese Translation"},{"itemImageSrc":"/img/projects/ai-dynamic-crud-app/ai-webapp-schema-review.webp","alt":"AI Database Schema Review"},{"itemImageSrc":"/img/projects/ai-dynamic-crud-app/ai-webapp-crud-ui.webp","alt":"AI Generated Dashboard Interface"}]
  video: "https://www.youtube.com/watch?v=jrkwxLkICRY"
  features: [{"text":"AI Schema Detection: Automatically detects and adapts to your Notion database structure."},{"text":"Dynamic Form Generation: Creates perfect forms based on field types."},{"text":"Professional Interface: Clean, modern design with card and table views."}]
  perspective: {"executive":"A game-changer for businesses using Notion as a backend. It eliminates the need for expensive custom development by automatically generating a professional web interface directly from your data. Ideal for internal tools, client portals, and rapid prototyping with zero friction.","technical":"Features a dynamic schema-driven UI engine. It parses Notion database properties in real-time to generate Vue components with appropriate validation and input types. Includes multi-language support through a custom i18n bridge and optimized API caching for smooth performance."}
  details: "## Engineering Architecture: AI-Driven Software Synthesis\n\nThe AI Dynamic CRUD App is an advanced implementation of **Generative Software Engineering**. It moves beyond standard \"Chat-based AI\" to a system that synthesizes functional software architectures, database schemas, and user interfaces directly from natural language specifications.\n\n### 1. The Generative Pipeline (Layman's Perspective)\nThink of this system as a **Digital Architect**. Instead of hiring a team to spend weeks drawing blueprints (Database Schemas) and building the house (User Interface), you simply describe what you need. \n\nThe \"Architect\" (Gemini AI) draws the technical blueprint in seconds, connects it to a \"Foundational Utility\" (Notion), and hands you the keys to a fully furnished, functional house (The Web App). If you want to add a room later, you just tell the AI, and the house expands instantly.\n\n### 2. Technical Architecture & Data Flow\nThe system utilizes a decoupled architecture where the LLM acts as a compiler, turning human intent into machine-readable schema definitions.\n\n```mermaid\ngraph TD\n    subgraph \"Input Layer\"\n        Prompt[Natural Language Prompt] --> Gemini[Gemini LLM Engine]\n        Template[Pre-configured Templates] --> Gemini\n    end\n\n    subgraph \"Schema Orchestration\"\n        Gemini --> JSON[Structured JSON Schema]\n        JSON --> Validator[Schema Validator]\n        Validator --> NotionAPI[Notion Database API]\n    end\n\n    subgraph \"Dynamic UI Engine\"\n        NotionAPI --> Metadata[Database Metadata]\n        Metadata --> UIOrchestrator[Runtime UI Orchestrator]\n        UIOrchestrator --> App[Generated Vue/Next.js Portal]\n    end\n\n    subgraph \"Capabilities\"\n        App --> CRUD[Full CRUD Operations]\n        App --> Logic[Dynamic Form Generation]\n        App --> Search[Real-time Global Search]\n    end\n```\n\n### 3. Key Engineering Pillars\n\n#### A. LLM-as-a-Compiler (Prompt Engineering)\nThe core of the system is a sophisticated prompt-chaining engine. We use strict output constraints to ensure Gemini produces 100% valid, typed JSON. This JSON isn't just data; it's a **Functional Specification** that includes:\n- Field Types (Text, Number, Date, Multi-select, Files)\n- Relationship Mapping (Notion Relations/Rollups)\n- Iconography & Categorization logic\n\n#### B. Dynamic UI Orchestration (Runtime Synthesis)\nUnlike traditional apps with hard-coded forms, this frontend is **completely reactive to the backend schema**. \n- **Introspection:** The app \"inspects\" the Notion database structure at runtime.\n- **Component Mapping:** If it detects a \"Date\" field in Notion, it instantly renders a Date-Picker in the UI. If it sees a \"Status\" field, it builds a specialized Kanban or Select dropdown.\n- **Zero-Code Updates:** Adding a column in the Notion database immediately updates the web portal without a single line of code or a new deployment.\n\n#### C. Multi-Language Intent Parsing\nBy leveraging LLM semantic understanding, the system supports multi-lingual intent. A prompt in Hindi or Japanese is parsed into the same structured JSON schema, ensuring global accessibility for non-technical users while maintaining strict data integrity.\n\n### 4. Strategic Business Value (ROI)\n- **Time-to-Market:** Reduces the \"Idea-to-Product\" cycle from weeks to minutes.\n- **Operational Agility:** Allows ops teams to build and modify their own internal tools without consuming core engineering resources.\n- **Zero-Maintenance Infrastructure:** By using Notion as the database and Netlify for the frontend, the system is virtually \"serverless\" and requires zero backend maintenance.\n\nThis project serves as a technical proof-of-concept for **Automated Internal Tooling**, demonstrating how AI can effectively manage the entire lifecycle of a standard business application.\n"
  previousProject: {"name":"Premium Furniture Landing Page & Catalog","link":"/web-development-projects/premium-furniture-landing-page-catalog/"}
  nextProject: {"name":"Local Home Services Pros","link":"/web-development-projects/local-home-services-pros/"}
  relatedCaseStudy: null
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
              <a v-if="$frontmatter.project.contact" :href="'mailto:support@stackseekers.com?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline flex-1">
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
  <a :href="'mailto:support@stackseekers.com?subject=' + encodeURIComponent('Architectural Consultation: ' + $frontmatter.project.name)" class="no-underline">
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

## Engineering Architecture: AI-Driven Software Synthesis

The AI Dynamic CRUD App is an advanced implementation of **Generative Software Engineering**. It moves beyond standard "Chat-based AI" to a system that synthesizes functional software architectures, database schemas, and user interfaces directly from natural language specifications.

### 1. The Generative Pipeline (Layman's Perspective)
Think of this system as a **Digital Architect**. Instead of hiring a team to spend weeks drawing blueprints (Database Schemas) and building the house (User Interface), you simply describe what you need. 

The "Architect" (Gemini AI) draws the technical blueprint in seconds, connects it to a "Foundational Utility" (Notion), and hands you the keys to a fully furnished, functional house (The Web App). If you want to add a room later, you just tell the AI, and the house expands instantly.

### 2. Technical Architecture & Data Flow
The system utilizes a decoupled architecture where the LLM acts as a compiler, turning human intent into machine-readable schema definitions.

```mermaid
graph TD
    subgraph "Input Layer"
        Prompt[Natural Language Prompt] --> Gemini[Gemini LLM Engine]
        Template[Pre-configured Templates] --> Gemini
    end

    subgraph "Schema Orchestration"
        Gemini --> JSON[Structured JSON Schema]
        JSON --> Validator[Schema Validator]
        Validator --> NotionAPI[Notion Database API]
    end

    subgraph "Dynamic UI Engine"
        NotionAPI --> Metadata[Database Metadata]
        Metadata --> UIOrchestrator[Runtime UI Orchestrator]
        UIOrchestrator --> App[Generated Vue/Next.js Portal]
    end

    subgraph "Capabilities"
        App --> CRUD[Full CRUD Operations]
        App --> Logic[Dynamic Form Generation]
        App --> Search[Real-time Global Search]
    end
```

### 3. Key Engineering Pillars

#### A. LLM-as-a-Compiler (Prompt Engineering)
The core of the system is a sophisticated prompt-chaining engine. We use strict output constraints to ensure Gemini produces 100% valid, typed JSON. This JSON isn't just data; it's a **Functional Specification** that includes:
- Field Types (Text, Number, Date, Multi-select, Files)
- Relationship Mapping (Notion Relations/Rollups)
- Iconography & Categorization logic

#### B. Dynamic UI Orchestration (Runtime Synthesis)
Unlike traditional apps with hard-coded forms, this frontend is **completely reactive to the backend schema**. 
- **Introspection:** The app "inspects" the Notion database structure at runtime.
- **Component Mapping:** If it detects a "Date" field in Notion, it instantly renders a Date-Picker in the UI. If it sees a "Status" field, it builds a specialized Kanban or Select dropdown.
- **Zero-Code Updates:** Adding a column in the Notion database immediately updates the web portal without a single line of code or a new deployment.

#### C. Multi-Language Intent Parsing
By leveraging LLM semantic understanding, the system supports multi-lingual intent. A prompt in Hindi or Japanese is parsed into the same structured JSON schema, ensuring global accessibility for non-technical users while maintaining strict data integrity.

### 4. Strategic Business Value (ROI)
- **Time-to-Market:** Reduces the "Idea-to-Product" cycle from weeks to minutes.
- **Operational Agility:** Allows ops teams to build and modify their own internal tools without consuming core engineering resources.
- **Zero-Maintenance Infrastructure:** By using Notion as the database and Netlify for the frontend, the system is virtually "serverless" and requires zero backend maintenance.

This project serves as a technical proof-of-concept for **Automated Internal Tooling**, demonstrating how AI can effectively manage the entire lifecycle of a standard business application.


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
</script>