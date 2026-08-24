---
title: "Home Services Marketplace | Programmatic SEO"
description: "A Next.js 15 home services marketplace generating hyper-local pages for 20+ categories across thousands of US cities, with SEO and lead capture built in."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Local Home Services Pros"
  description: "A modern, SEO-optimized web platform that connects homeowners and property managers with verified local service providers. Built with Next.js 15 and React 19, it serves as a lead generation and matching service with dynamic routing for thousands of location-service combinations."
  software: "Web Platform"
  schema: "https://schema.org/WebApplication"
  domain: "Home Services & Lead Generation"
  year: "2025"
  category: "Startup MVPs"
  price: "0"
  currency: "USD"
  link: "https://localxr.com"
  codeLink: 
  contact: "mailto:support@stackseekers.com?subject=LocalXR Inquiry"
  stack: ["nextdotjs/black/white","react","tailwindcss","sass","nodedotjs","axios","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/projects/localxr/localxr-cover.webp","alt":"LocalXR - Home Services Marketplace Cover"},{"itemImageSrc":"/img/projects/localxr/plumber-home.webp","alt":"LocalXR - Plumber Home Page"},{"itemImageSrc":"/img/projects/localxr/listing.webp","alt":"LocalXR - Service Listings"},{"itemImageSrc":"/img/projects/localxr/plumbing-services.webp","alt":"LocalXR - Plumbing Services Page"},{"itemImageSrc":"/img/projects/localxr/blog.webp","alt":"LocalXR - Blog Section"}]
  video: ""
  features: [{"text":"Location-Aware Search: Google Places Integration, ZIP Code Search, and hierarchical State/City navigation with smart normalization."},{"text":"Dynamic Listings & Routing: Automatically generated listings for thousands of location-service combinations with SEO-optimized URLs."},{"text":"Lead Generation System: Secure callback and contact forms with input sanitization, validation, and rate limiting."},{"text":"Performance First: Optimized for Core Web Vitals with dynamic imports, image optimization, and server-side rendering."},{"text":"Comprehensive SEO: Dynamic meta tags, canonical URLs, and automated sitemap generation for maximum search visibility."},{"text":"Scalable Architecture: Built on Next.js 15 and React 19 with a modular component system and context-driven state management."}]
  perspective: {"executive":"Engineered for high-volume lead generation. It solves the complexity of managing thousands of local service routes while maintaining lightning-fast performance and SEO dominance. Built to scale from a single city to a national platform with minimal operational overhead.","technical":"Built with Next.js 15 and React 19, utilizing Server-Side Rendering (SSR) for maximum SEO efficiency. Implements a hierarchical routing system for thousands of dynamic paths, optimized with incremental static regeneration (ISR) and advanced image processing for Core Web Vitals excellence."}
  details: "## Engineering Architecture: Geo-Distributed Lead Acquisition Engine\n\nLocalXR is an enterprise-grade **Programmatic SEO (pSEO) platform** designed for high-scale geographic lead generation. It leverages a sophisticated dynamic routing system and location-aware orchestration to deliver hyper-relevant landing pages for over 20+ service categories across thousands of US cities.\n\n### 1. The Growth Engine (Layman's Perspective)\nThink of LocalXR as a **GPS-Guided Digital Directory**. \n\nInstead of a single \"Plumbing\" page that tries to serve everyone, LocalXR creates a custom \"Front Door\" for every specific neighborhood in America. If you are in Austin searching for a plumber, the system detects your location and instantly \"builds\" a page that features local Austin plumbers, specific Austin service numbers, and content tailored to your city. It's like having a local expert standing on every street corner, ready to help the moment someone asks.\n\n### 2. Technical Architecture & Geographic Orchestration\nThe platform utilizes Next.js 15 and React 19 to manage a massive hierarchical URL structure while maintaining sub-second page loads.\n\n```mermaid\ngraph TD\n    subgraph \"Ingestion Layer\"\n        Search[User Search / ZIP] --> GeoDB[Google Places / GeoJSON]\n        GeoDB --> Normalizer[State & City Normalizer]\n    end\n\n    subgraph \"Path Synthesis Engine\"\n        Normalizer --> Router[Recursive Dynamic Router]\n        ServiceDB[20+ Service Categories] --> Router\n        SEOModel[Dynamic Meta & Schema] --> Router\n    end\n\n    subgraph \"Location-Aware UI\"\n        Router --> Page[Hyper-Local Landing Page]\n        Page --> PhoneCtx[Dynamic Phone Number Injection]\n        Page --> FormCtx[Context-Aware Lead Form]\n    end\n\n    subgraph \"Conversion & Analytics\"\n        PhoneCtx --> CallTrack[Call Attribution]\n        FormCtx --> LeadStore[Lead Centralization]\n        LeadStore --> GTM[Google Tag Manager Tracking]\n    end\n```\n\n### 3. Key Engineering Pillars\n\n#### A. Recursive Path Synthesis & Normalization\nManaging thousands of location combinations (`/locations/[service]/[state]/[city]`) requires a robust path-handling layer.\n- **Semantic Normalization:** We implemented an automated layer that converts state codes (OH) to full names (Ohio) and handles complex URL slugs with whitelist-based validation, ensuring 100% crawlable, SEO-friendly paths.\n- **Reserved Word Protection:** A sophisticated validation layer prevents URL injection and ensures that system paths (like `/about` or `/contact`) are never overwritten by generated location slugs.\n\n#### B. Context-Driven Lead Routing\nThe platform's profitability depends on connecting the right user to the right service provider.\n- **Dynamic Phone Injection:** Using a `PhoneNumberContext`, the system injects unique tracking numbers based on the specific service category and geographic region, allowing for precise marketing attribution.\n- **Location Context:** A centralized React Context manages the user's geographic state across the entire session, ensuring that once a user selects a city, the entire platform (from header to footer) stays synchronized with that location.\n\n#### C. Performance-Optimized pSEO\nLarge-scale programmatic sites often suffer from \"Crawl Budget\" and performance issues. We solved this via:\n- **SSG with Dynamic Hydration:** Core content is pre-rendered for SEO, while interactive elements (like the local phone numbers and provider listings) are hydrated dynamically to ensure content is always fresh.\n- **Sharp-Powered Image Pipeline:** Every service category image is automatically optimized and converted to WebP format at build time, reducing page weight by up to 60%.\n\n### 4. Strategic Business Value (ROI)\n- **Zero-Cost Acquisition:** By ranking for long-tail \"Service + City\" keywords, the platform generates high-intent leads without the high cost of Google Ads.\n- **Rapid Market Expansion:** New service categories or states can be \"launched\" simply by updating the JSON configuration, allowing the business to test new markets in hours.\n- **High-Trust Conversion:** Hyper-local content (mentioning specific cities and states) significantly increases user trust and lead-form completion rates compared to generic national sites.\n\nLocalXR demonstrates how **Advanced Geographic Orchestration** can turn a simple directory into a powerful, automated revenue machine.\n"
  previousProject: {"name":"AI Dynamic CRUD App","link":"/web-development-projects/ai-dynamic-crud-app/"}
  nextProject: {"name":"Contact Form Plugin","link":"/web-development-projects/contact-form-plugin/"}
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

## Engineering Architecture: Geo-Distributed Lead Acquisition Engine

LocalXR is an enterprise-grade **Programmatic SEO (pSEO) platform** designed for high-scale geographic lead generation. It leverages a sophisticated dynamic routing system and location-aware orchestration to deliver hyper-relevant landing pages for over 20+ service categories across thousands of US cities.

### 1. The Growth Engine (Layman's Perspective)
Think of LocalXR as a **GPS-Guided Digital Directory**. 

Instead of a single "Plumbing" page that tries to serve everyone, LocalXR creates a custom "Front Door" for every specific neighborhood in America. If you are in Austin searching for a plumber, the system detects your location and instantly "builds" a page that features local Austin plumbers, specific Austin service numbers, and content tailored to your city. It's like having a local expert standing on every street corner, ready to help the moment someone asks.

### 2. Technical Architecture & Geographic Orchestration
The platform utilizes Next.js 15 and React 19 to manage a massive hierarchical URL structure while maintaining sub-second page loads.

```mermaid
graph TD
    subgraph "Ingestion Layer"
        Search[User Search / ZIP] --> GeoDB[Google Places / GeoJSON]
        GeoDB --> Normalizer[State & City Normalizer]
    end

    subgraph "Path Synthesis Engine"
        Normalizer --> Router[Recursive Dynamic Router]
        ServiceDB[20+ Service Categories] --> Router
        SEOModel[Dynamic Meta & Schema] --> Router
    end

    subgraph "Location-Aware UI"
        Router --> Page[Hyper-Local Landing Page]
        Page --> PhoneCtx[Dynamic Phone Number Injection]
        Page --> FormCtx[Context-Aware Lead Form]
    end

    subgraph "Conversion & Analytics"
        PhoneCtx --> CallTrack[Call Attribution]
        FormCtx --> LeadStore[Lead Centralization]
        LeadStore --> GTM[Google Tag Manager Tracking]
    end
```

### 3. Key Engineering Pillars

#### A. Recursive Path Synthesis & Normalization
Managing thousands of location combinations (`/locations/[service]/[state]/[city]`) requires a robust path-handling layer.
- **Semantic Normalization:** We implemented an automated layer that converts state codes (OH) to full names (Ohio) and handles complex URL slugs with whitelist-based validation, ensuring 100% crawlable, SEO-friendly paths.
- **Reserved Word Protection:** A sophisticated validation layer prevents URL injection and ensures that system paths (like `/about` or `/contact`) are never overwritten by generated location slugs.

#### B. Context-Driven Lead Routing
The platform's profitability depends on connecting the right user to the right service provider.
- **Dynamic Phone Injection:** Using a `PhoneNumberContext`, the system injects unique tracking numbers based on the specific service category and geographic region, allowing for precise marketing attribution.
- **Location Context:** A centralized React Context manages the user's geographic state across the entire session, ensuring that once a user selects a city, the entire platform (from header to footer) stays synchronized with that location.

#### C. Performance-Optimized pSEO
Large-scale programmatic sites often suffer from "Crawl Budget" and performance issues. We solved this via:
- **SSG with Dynamic Hydration:** Core content is pre-rendered for SEO, while interactive elements (like the local phone numbers and provider listings) are hydrated dynamically to ensure content is always fresh.
- **Sharp-Powered Image Pipeline:** Every service category image is automatically optimized and converted to WebP format at build time, reducing page weight by up to 60%.

### 4. Strategic Business Value (ROI)
- **Zero-Cost Acquisition:** By ranking for long-tail "Service + City" keywords, the platform generates high-intent leads without the high cost of Google Ads.
- **Rapid Market Expansion:** New service categories or states can be "launched" simply by updating the JSON configuration, allowing the business to test new markets in hours.
- **High-Trust Conversion:** Hyper-local content (mentioning specific cities and states) significantly increases user trust and lead-form completion rates compared to generic national sites.

LocalXR demonstrates how **Advanced Geographic Orchestration** can turn a simple directory into a powerful, automated revenue machine.


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