---
title: "Free CRUD App: Notion to Web App"
description: "Transform your Notion database into a professional, responsive web app in minutes — free and no-code. Auto-generated forms, search, multi-language support."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Dynamic CRUD App Free"
  description: "Transform your Notion database into a professional web application in minutes. Automatically reads your Notion structure and creates beautiful, responsive interfaces with intelligent forms, search, and multi-language support - completely free and no-code required."
  software: "Web Application"
  schema: "https://schema.org/WebApplication"
  domain: "Database Management & No-Code"
  year: "2025"
  category: "Ready-made Apps"
  price: "20"
  currency: "USD"
  link: "https://notion-crud.netlify.app/"
  codeLink: 
  contact: "mailto:support@stackseekers.com?subject=Notion CRUD App Inquiry"
  stack: ["javascript","vuedotjs","notion/black/white","html5","css","json/black/white","netlify","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/notion-crud-app/Notion-crud-app-free.webp","alt":"Dynamic Form Generation from Notion Database"},{"itemImageSrc":"/img/projects/notion-crud-app/CRUD-app-free.webp","alt":"CRUD App Free Interface"},{"itemImageSrc":"/img/projects/notion-crud-app/edit-talent-pool.webp","alt":"Edit Talent Pool Interface"},{"itemImageSrc":"/img/projects/notion-crud-app/home-page.webp","alt":"Dynamic CRUD App Home Page"}]
  video: ""
  features: [{"text":"Intelligent Schema Detection: Automatically reads and adapts to your Notion database structure in real-time"},{"text":"Dynamic Form Generation: Creates perfect forms based on field types - text, email, phone, dates, dropdowns, checkboxes"},{"text":"Professional Interface: Clean, modern design with card and table views that work on any device"},{"text":"Smart Search & Filtering: Intelligent search across all field types with automatic filter toggles for yes/no fields"},{"text":"Enterprise Safety: Confirmation dialogs for deletions, pre-loaded edit forms, and validation to prevent data loss"},{"text":"Multi-language Support: Works in any language with automatic currency formatting (USD, EUR, JPY, etc.)"},{"text":"Privacy Controls: Mark fields as '(Private)' in Notion to automatically mask sensitive information"},{"text":"Real-time Updates: Interface automatically updates when you modify your Notion database structure"}]
  perspective: {"executive":"","technical":""}
  details: "## Engineering Architecture: Serverless Middle-Layer for No-Code Ecosystems\n\nThe Notion Web App is a sophisticated **Data-to-Interface Orchestrator**. It demonstrates how to build a high-performance, secure web portal that uses Notion as a \"Headless CMS\" while maintaining enterprise-grade security, custom UI branding, and advanced features like file uploads that Notion's native sharing doesn't support.\n\n### 1. The Sync Engine (Layman's Perspective)\nThink of this app as a **Universal Translator**. \n\nNotion is like a great filing cabinet (database), but it's built for internal office use. If you want to show that data to the public in a beautiful, branded way, you need a \"Translator.\" This app takes the raw data from your Notion cabinet, \"translates\" it into a professional website format, and puts it in a \"Digital Storefront\" (The Web App). When someone outside adds a letter to the storefront's mailbox, the translator neatly files it back into your Notion cabinet instantly.\n\n### 2. Technical Architecture & Data Proxying\nThe platform utilizes a serverless architecture to bridge the gap between the public internet and the private Notion API, ensuring that your secret keys are never exposed to the user's browser.\n\n```mermaid\ngraph TD\n    subgraph \"External Web Portal\"\n        UI[Dynamic Vue/Next.js UI] --> SchemaParser[Runtime Schema Parser]\n        SchemaParser --> Render[Form & Table Renderer]\n    end\n\n    subgraph \"Secure Proxy Layer (Netlify Functions)\"\n        Render --> Proxy[Serverless API Proxy]\n        Proxy --> Auth[Secret Key Injection]\n        Auth --> Sanitizer[Input Sanitizer & Validator]\n    end\n\n    subgraph \"Data Storage (Notion & Blobs)\"\n        Sanitizer --> NotionAPI[Notion Database API]\n        Sanitizer --> NetlifyBlobs[File Upload Storage]\n        NotionAPI --> Database[Master Notion Database]\n    end\n\n    subgraph \"Bidirectional Sync\"\n        Database --> Webhook[Update Listener]\n        Webhook --> UI\n    end\n```\n\n### 3. Key Engineering Pillars\n\n#### A. The \"Schema-on-Read\" Pattern\nUnlike traditional apps that require manual coding for every new form field, this system uses **Dynamic Introspection**.\n- **Live Metadata Analysis:** The app \"reads\" the Notion database structure at runtime. If you add a \"Status\" dropdown in Notion, the web app instantly detects the change and renders a corresponding `<select>` menu in the UI.\n- **Zero-Code Maintenance:** This decoupling allows non-technical users to modify the application's data structure entirely within Notion without ever touching the source code.\n\n#### B. Secure Middleware Proxying\nDirectly connecting a frontend to the Notion API is a major security risk (as it exposes API keys). We implemented a **Secure Proxy Layer**:\n- **Environment Isolation:** API keys are stored in secure Netlify environment variables, accessible only to the serverless backend.\n- **Payload Sanitization:** Every \"Write\" request from the web portal is intercepted, sanitized for XSS, and validated against the expected schema before being committed to Notion.\n\n#### C. Hybrid Storage (Notion + Netlify Blobs)\nNotion's API has strict limitations on direct file uploads. To overcome this, we architected a **Hybrid Storage System**:\n- **Blob Storage:** Files (images, PDFs) are uploaded to high-performance Netlify Blobs.\n- **Reference Mapping:** The system then stores a secure, public URL reference back in the Notion database, effectively turning Notion into a media-rich asset manager.\n\n### 4. Strategic Business Value (ROI)\n- **Eliminate \"App Bloat\":** Allows businesses to use their existing Notion workspace as a backend, reducing the number of tools they need to manage.\n- **Instant Deployment:** The \"Clone-and-Deploy\" workflow reduces the cost of launching new internal tools or client portals from thousands of dollars to nearly zero.\n- **Universal Accessibility:** Provides a high-performance, mobile-optimized interface for data that is otherwise difficult to navigate in the native Notion mobile app.\n\nThis project serves as a technical blueprint for **Headless No-Code Integration**, showing how to build professional software on top of flexible, user-friendly data sources.\n"
  previousProject: {"name":"AI-Powered Influencer Platform - Vibe3","link":"/web-development-projects/ai-powered-influencer-platform-vibe3/"}
  nextProject: {"name":"AI Voice Generator","link":"/web-development-projects/ai-voice-generator/"}
  relatedCaseStudy: null
---

<div class="grid">
  <div class="col-12 lg:col-4 project-side-col mb-4">
    <div class="surface-card p-2 border-round-3xl shadow-2 border-1 border-100 project-action-card" style="position: sticky; top: 5rem;">
      <div class="grid align-items-center">
        <div class="col-12 border-bottom-1 border-100 mb-3 pb-3">
          <div class="flex align-items-center gap-3">
            <i class="pi pi-briefcase text-primary text-2xl"></i>
            <div>
              <div class="text-xs opacity-50 uppercase font-bold">Industry</div>
              <div class="font-bold text-lg text-900">{{$frontmatter.project.domain}}</div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="flex align-items-center gap-3">
            <i class="pi pi-bolt text-primary text-2xl"></i>
            <div>
              <div class="text-xs opacity-50 uppercase font-bold">Project Status</div>
              <div class="font-bold text-lg text-900">Scale & Growth</div>
            </div>
          </div>
        </div>
        <div class="col-12 pt-3">
          <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
        </div>
      </div>
      <div class="mt-4 pt-4">
        <div class="flex flex-column gap-3">
          <div v-if="$frontmatter.project.category === 'Ready-made Apps' && parseFloat($frontmatter.project.price) > 0" class="flex flex-column gap-3">
            <RazorpayButton :project="$frontmatter.project" page-theme />
          </div>
          <div class="flex flex-column gap-3">
            <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank" class="no-underline">
              <Button label="View Live Demo" icon="pi pi-external-link" severity="primary" class="w-full font-bold py-3" raised rounded />
            </a>
            <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank" class="no-underline">
              <Button label="View Source Code" icon="pi pi-github" severity="secondary" class="w-full font-bold py-3" raised rounded />
            </a>
            <a v-if="$frontmatter.project.contact" :href="'mailto:support@stackseekers.com?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline">
              <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold py-3" raised rounded />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 lg:col-8 project-main-col">

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
  <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
  <p class="text-xl opacity-70 line-height-4 max-w-50rem mb-4">{{$frontmatter.project.description}}</p>
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

## Engineering Architecture: Serverless Middle-Layer for No-Code Ecosystems

The Notion Web App is a sophisticated **Data-to-Interface Orchestrator**. It demonstrates how to build a high-performance, secure web portal that uses Notion as a "Headless CMS" while maintaining enterprise-grade security, custom UI branding, and advanced features like file uploads that Notion's native sharing doesn't support.

### 1. The Sync Engine (Layman's Perspective)
Think of this app as a **Universal Translator**. 

Notion is like a great filing cabinet (database), but it's built for internal office use. If you want to show that data to the public in a beautiful, branded way, you need a "Translator." This app takes the raw data from your Notion cabinet, "translates" it into a professional website format, and puts it in a "Digital Storefront" (The Web App). When someone outside adds a letter to the storefront's mailbox, the translator neatly files it back into your Notion cabinet instantly.

### 2. Technical Architecture & Data Proxying
The platform utilizes a serverless architecture to bridge the gap between the public internet and the private Notion API, ensuring that your secret keys are never exposed to the user's browser.

```mermaid
graph TD
    subgraph "External Web Portal"
        UI[Dynamic Vue/Next.js UI] --> SchemaParser[Runtime Schema Parser]
        SchemaParser --> Render[Form & Table Renderer]
    end

    subgraph "Secure Proxy Layer (Netlify Functions)"
        Render --> Proxy[Serverless API Proxy]
        Proxy --> Auth[Secret Key Injection]
        Auth --> Sanitizer[Input Sanitizer & Validator]
    end

    subgraph "Data Storage (Notion & Blobs)"
        Sanitizer --> NotionAPI[Notion Database API]
        Sanitizer --> NetlifyBlobs[File Upload Storage]
        NotionAPI --> Database[Master Notion Database]
    end

    subgraph "Bidirectional Sync"
        Database --> Webhook[Update Listener]
        Webhook --> UI
    end
```

### 3. Key Engineering Pillars

#### A. The "Schema-on-Read" Pattern
Unlike traditional apps that require manual coding for every new form field, this system uses **Dynamic Introspection**.
- **Live Metadata Analysis:** The app "reads" the Notion database structure at runtime. If you add a "Status" dropdown in Notion, the web app instantly detects the change and renders a corresponding `<select>` menu in the UI.
- **Zero-Code Maintenance:** This decoupling allows non-technical users to modify the application's data structure entirely within Notion without ever touching the source code.

#### B. Secure Middleware Proxying
Directly connecting a frontend to the Notion API is a major security risk (as it exposes API keys). We implemented a **Secure Proxy Layer**:
- **Environment Isolation:** API keys are stored in secure Netlify environment variables, accessible only to the serverless backend.
- **Payload Sanitization:** Every "Write" request from the web portal is intercepted, sanitized for XSS, and validated against the expected schema before being committed to Notion.

#### C. Hybrid Storage (Notion + Netlify Blobs)
Notion's API has strict limitations on direct file uploads. To overcome this, we architected a **Hybrid Storage System**:
- **Blob Storage:** Files (images, PDFs) are uploaded to high-performance Netlify Blobs.
- **Reference Mapping:** The system then stores a secure, public URL reference back in the Notion database, effectively turning Notion into a media-rich asset manager.

### 4. Strategic Business Value (ROI)
- **Eliminate "App Bloat":** Allows businesses to use their existing Notion workspace as a backend, reducing the number of tools they need to manage.
- **Instant Deployment:** The "Clone-and-Deploy" workflow reduces the cost of launching new internal tools or client portals from thousands of dollars to nearly zero.
- **Universal Accessibility:** Provides a high-performance, mobile-optimized interface for data that is otherwise difficult to navigate in the native Notion mobile app.

This project serves as a technical blueprint for **Headless No-Code Integration**, showing how to build professional software on top of flexible, user-friendly data sources.


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
      <a :href="'https://cal.com/stackseekers/25min?utm_source=website&utm_medium=portfolio&utm_campaign=' + $frontmatter.project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')" target="_blank" class="no-underline">
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