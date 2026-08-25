---
title: "Free Contact Form Plugin with Notion"
description: "Embed a secure contact form on any website with one script tag. Submissions auto-save to Notion, with CAPTCHA, rate limiting, and sanitization built in."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Contact Form Plugin"
  description: "A lightweight, embeddable contact form widget that can be integrated into any website and automatically forwards submissions to a Notion database. Generator-based architecture allowing multiple form configurations with various field combinations - completely free and easy to customize."
  software: "Widget"
  schema: "https://schema.org/WebApplication"
  domain: "Contact Forms & Lead Capture"
  year: "2025"
  category: "Ready-made Apps"
  price: "20"
  currency: "USD"
  link: "https://contact-form-app.stackseekers.com/"
  codeLink: 
  contact: "mailto:support@stackseekers.com?subject=Contact Form Plugin Inquiry"
  stack: ["javascript","notion/black/white","html5","css","netlify","json/black/white","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/contact-form-plugin/contact-form-widget-cover.webp","alt":"Contact Form Plugin - Embeddable Contact Form"},{"itemImageSrc":"/img/projects/contact-form-plugin/business-contact-form-widget-cover.webp","alt":"Contact Form Plugin - Business Contact Form"},{"itemImageSrc":"/img/projects/contact-form-plugin/simple-contact-form-widget.webp","alt":"Contact Form Plugin - Simple Contact Form"},{"itemImageSrc":"/img/projects/contact-form-plugin/live-demo-contact-form-widget.webp","alt":"Contact Form Plugin - Live Demo"}]
  video: ""
  features: [{"text":"Generator-Based Architecture: Create unlimited form configurations with dynamic field combinations without code changes"},{"text":"Automatic Notion Integration: Form submissions instantly saved to your Notion database with structured properties"},{"text":"Security-First Design: Built-in rate limiting (5 req/min), CAPTCHA verification, input sanitization, and XSS protection"},{"text":"Easy Integration: Copy-paste one script tag to embed into any website - works across all platforms and frameworks"},{"text":"Flexible Field Types: Support for text, email, phone, website, select dropdowns, textarea, and checkbox fields"},{"text":"Customizable Styling: Full theme control with custom colors, fonts, border radius, and responsive max-width"},{"text":"Client & Server Validation: Comprehensive validation on both frontend and backend for data integrity"},{"text":"Privacy Protected: Rate limiting prevents spam while CAPTCHA blocks automated bot submissions"}]
  perspective: {"executive":"","technical":""}
  details: "## Engineering Architecture: Serverless Lead-Capture Infrastructure\n\nThe Contact Form Plugin is a high-reliability, **Widget-as-a-Service (WaaS)** architecture. It demonstrates how to package complex backend logic (validation, security, and storage) into a lightweight, embeddable JavaScript asset that can be deployed across any web environment with zero infrastructure overhead.\n\n### 1. The Intake Engine (Layman's Perspective)\nThink of this plugin as a **Self-Serve Postbox** that you can place on any street corner (website). \n\nNormally, a postbox needs a complex system to verify the sender, check for \"junk mail\" (spam), and ensure the letter gets to the right filing cabinet (database). This plugin does all that automatically. You just \"drop\" the postbox onto your site, and it handles the heavy lifting of checking IDs, filtering out trash, and neatly organizing every message in your digital office (Notion) so you never miss a lead.\n\n### 2. Technical Architecture & Security Flow\nThe system utilizes a decoupled, serverless architecture to ensure maximum uptime and security without the need for a dedicated backend server.\n\n```mermaid\ngraph TD\n    subgraph \"Client Environment (Any Website)\"\n        Widget[ContactWidget.js] --> Config[User Configuration]\n        Config --> UI[Dynamic Form Generator]\n        UI --> Validation[Client-side Validation]\n    end\n\n    subgraph \"Security & Processing Layer (Netlify Functions)\"\n        Validation --> RateLimit[IP-based Rate Limiter]\n        RateLimit --> CAPTCHA[reCAPTCHA Verification]\n        CAPTCHA --> Sanitizer[XSS/HTML Sanitization]\n        Sanitizer --> Payload[Secure JSON Payload]\n    end\n\n    subgraph \"Persistence Layer (Notion)\"\n        Payload --> NotionAPI[Notion Integration]\n        NotionAPI --> CRM[Structured Notion Database]\n    end\n\n    subgraph \"System Feedback\"\n        CRM --> GASuccess[Success Response]\n        GASuccess --> UINotification[Toast/Success Message]\n    end\n```\n\n### 3. Key Engineering Pillars\n\n#### A. The \"Generator\" Pattern (Configuration-Driven UI)\nThe core of the plugin is a class-based generator that synthesizes the UI at runtime.\n- **Dynamic Synthesis:** The widget \"builds\" itself based on a JSON configuration object. It injects specific field types (select, tel, email) and applies custom themes (colors, radii) without requiring hard-coded HTML.\n- **Deep-Merge Configuration:** Supports a robust \"Defaults vs. User-Overrides\" pattern, making it highly customizable for developers while remaining simple for basic use.\n\n#### B. Multi-Layered Security Architecture\nTo prevent spam and injection attacks in a public-facing widget, we implemented a strict security stack:\n- **Rate Limiting:** A sliding-window IP monitor prevents automated bot submissions from overwhelming the system.\n- **Input Sanitization:** Every field is processed through a server-side sanitizer that strips dangerous tags (`<script>`, `<iframe>`) and event handlers, protecting the backend storage from XSS.\n- **Double-Validation:** Validation logic is mirrored on both the client (for UX speed) and the server (for data integrity).\n\n#### C. Build-Time Environment Injection\nTo keep the widget lightweight and avoid hard-coding secrets, the build pipeline (`build-inject-env.js`) dynamically injects environment-specific variables like API endpoints and CAPTCHA keys. This allows the same source code to be deployed across different staging and production environments seamlessly.\n\n### 4. Strategic Business Value (ROI)\n- **Reduced Implementation Time:** Deploying a custom, secure lead-capture form takes minutes instead of hours of backend development.\n- **Zero Maintenance:** By using serverless functions and Notion, there are no databases to manage or servers to patch.\n- **Scalable Data Intake:** All leads are centralized in a structured Notion database, allowing teams to use it as a lightweight CRM without paying for expensive enterprise software.\n\nThis project is a technical blueprint for **Productizing Reusable Components**, turning a common development task into a scalable architectural asset.\n"
  previousProject: {"name":"Local Home Services Pros","link":"/web-development-projects/local-home-services-pros/"}
  nextProject: {"name":"AI-Powered Influencer Platform - Vibe3","link":"/web-development-projects/ai-powered-influencer-platform-vibe3/"}
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

## Engineering Architecture: Serverless Lead-Capture Infrastructure

The Contact Form Plugin is a high-reliability, **Widget-as-a-Service (WaaS)** architecture. It demonstrates how to package complex backend logic (validation, security, and storage) into a lightweight, embeddable JavaScript asset that can be deployed across any web environment with zero infrastructure overhead.

### 1. The Intake Engine (Layman's Perspective)
Think of this plugin as a **Self-Serve Postbox** that you can place on any street corner (website). 

Normally, a postbox needs a complex system to verify the sender, check for "junk mail" (spam), and ensure the letter gets to the right filing cabinet (database). This plugin does all that automatically. You just "drop" the postbox onto your site, and it handles the heavy lifting of checking IDs, filtering out trash, and neatly organizing every message in your digital office (Notion) so you never miss a lead.

### 2. Technical Architecture & Security Flow
The system utilizes a decoupled, serverless architecture to ensure maximum uptime and security without the need for a dedicated backend server.

```mermaid
graph TD
    subgraph "Client Environment (Any Website)"
        Widget[ContactWidget.js] --> Config[User Configuration]
        Config --> UI[Dynamic Form Generator]
        UI --> Validation[Client-side Validation]
    end

    subgraph "Security & Processing Layer (Netlify Functions)"
        Validation --> RateLimit[IP-based Rate Limiter]
        RateLimit --> CAPTCHA[reCAPTCHA Verification]
        CAPTCHA --> Sanitizer[XSS/HTML Sanitization]
        Sanitizer --> Payload[Secure JSON Payload]
    end

    subgraph "Persistence Layer (Notion)"
        Payload --> NotionAPI[Notion Integration]
        NotionAPI --> CRM[Structured Notion Database]
    end

    subgraph "System Feedback"
        CRM --> GASuccess[Success Response]
        GASuccess --> UINotification[Toast/Success Message]
    end
```

### 3. Key Engineering Pillars

#### A. The "Generator" Pattern (Configuration-Driven UI)
The core of the plugin is a class-based generator that synthesizes the UI at runtime.
- **Dynamic Synthesis:** The widget "builds" itself based on a JSON configuration object. It injects specific field types (select, tel, email) and applies custom themes (colors, radii) without requiring hard-coded HTML.
- **Deep-Merge Configuration:** Supports a robust "Defaults vs. User-Overrides" pattern, making it highly customizable for developers while remaining simple for basic use.

#### B. Multi-Layered Security Architecture
To prevent spam and injection attacks in a public-facing widget, we implemented a strict security stack:
- **Rate Limiting:** A sliding-window IP monitor prevents automated bot submissions from overwhelming the system.
- **Input Sanitization:** Every field is processed through a server-side sanitizer that strips dangerous tags (`<script>`, `<iframe>`) and event handlers, protecting the backend storage from XSS.
- **Double-Validation:** Validation logic is mirrored on both the client (for UX speed) and the server (for data integrity).

#### C. Build-Time Environment Injection
To keep the widget lightweight and avoid hard-coding secrets, the build pipeline (`build-inject-env.js`) dynamically injects environment-specific variables like API endpoints and CAPTCHA keys. This allows the same source code to be deployed across different staging and production environments seamlessly.

### 4. Strategic Business Value (ROI)
- **Reduced Implementation Time:** Deploying a custom, secure lead-capture form takes minutes instead of hours of backend development.
- **Zero Maintenance:** By using serverless functions and Notion, there are no databases to manage or servers to patch.
- **Scalable Data Intake:** All leads are centralized in a structured Notion database, allowing teams to use it as a lightweight CRM without paying for expensive enterprise software.

This project is a technical blueprint for **Productizing Reusable Components**, turning a common development task into a scalable architectural asset.


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