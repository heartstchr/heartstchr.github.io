---
title: Appliance Repair Service Platform
description: A modern, content-driven platform for connecting users with local appliance repair professionals and providing troubleshooting guides for major home appliances
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Appliance Repair Service Platform"
  description: "A modern, content-driven platform for connecting users with local appliance repair professionals and providing troubleshooting guides for major home appliances"
  software: "Web"
  schema: "https://schema.org/WebApplication"
  domain: "Digital Marketing"
  year: "2025"
  price: 0
  currency: USD
  link: "https://appliancerepairly.com"
  codeLink: 
  contact: "mailto:support@stackseekers.com?subject=Inquiry : "
  stack: ["nextdotjs/black/white","react","nodedotjs","json/black/white","tailwindcss","axios","npm","pm2","digitalocean","lighthouse","bitbucket","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/home/projects/appliance_repair_cover.webp","alt":"Appliance Repair Service Platform - Cover page"},{"itemImageSrc":"/img/projects/appliance-repair/home.webp","alt":"Appliance Repair Service Platform - Home page"},{"itemImageSrc":"/img/projects/appliance-repair/performance-desktop.webp","alt":"Appliance Repair Service Platform - Desktop performance metrics"},{"itemImageSrc":"/img/projects/appliance-repair/performance-mobile.webp","alt":"Appliance Repair Service Platform - Mobile performance metrics"},{"itemImageSrc":"/img/projects/appliance-repair/services.webp","alt":"Appliance Repair Service Platform - Services page"},{"itemImageSrc":"/img/projects/appliance-repair/find-repair.webp","alt":"Appliance Repair Service Platform - Find repair services"},{"itemImageSrc":"/img/projects/appliance-repair/contact.webp","alt":"Appliance Repair Service Platform - Contact page"},{"itemImageSrc":"/img/projects/appliance-repair/refrigerator-troubleshoot.webp","alt":"Appliance Repair Service Platform - Refrigerator troubleshooting guide"},{"itemImageSrc":"/img/projects/appliance-repair/refrigerator-problem.webp","alt":"Appliance Repair Service Platform - Refrigerator problem identification"},{"itemImageSrc":"/img/projects/appliance-repair/refrigerator.webp","alt":"Appliance Repair Service Platform - Refrigerator home page"},{"itemImageSrc":"/img/projects/appliance-repair/blog-post.webp","alt":"Appliance Repair Service Platform - Blog post"},{"itemImageSrc":"/img/projects/appliance-repair/blog.webp","alt":"Appliance Repair Service Platform - Blog section"}]
  video: ""
  features: [{"text":"Dynamic Appliance Support: Browse and get help for refrigerators, washers, dryers, dishwashers, ovens, microwaves, cooktops, and more."},{"text":"Find Local Providers: Enter your ZIP code or select your state to view local repair listings."},{"text":"Problem & Troubleshooting Guides: Step-by-step guides for common appliance issues, including DIY tips and when to call a pro."},{"text":"SEO Optimized: Each page includes dynamic SEO metadata for better search engine visibility."},{"text":"Reusable UI Components: Modular React components for listings, CTAs, features, and more."},{"text":"Content Management: All appliance, problem, and troubleshooting content is managed centrally in JSON for easy updates."}]
  perspective: {"executive":"","technical":""}
  details: "## Engineering Architecture: Programmatic SEO & Lead-Gen Systems\n\nAppliance Repairly is not just a website; it is a **Programmatic Growth Engine**. It is designed to capture high-intent local search demand at scale by automatically generating thousands of search-optimized landing pages across cities, appliance types, and specific technical problems.\n\n### 1. The Growth Engine (Layman's Perspective)\nThink of this platform as an **Automated Sales Team** that can be in 10,000 places at once. \n\nIn a traditional setup, you'd have to write a new page for every city (e.g., \"Fridge Repair in Austin,\" \"Dryer Repair in Miami\"). This system does that automatically. It takes a **Central Knowledge Base** of appliance problems and \"mixes\" it with a **Database of Locations**. In seconds, it creates thousands of tailored pages that look like they were handcrafted for every specific neighbor in every specific city, ensuring that whenever someone searches for help, we are there to meet them.\n\n### 2. Technical Architecture & Dynamic Routing\nThe system leverages Next.js 15 for high-performance static generation (SSG) with on-demand revalidation.\n\n```mermaid\ngraph TD\n    subgraph \"Core Data Layers\"\n        ApplianceDB[Appliance & Problem JSON]\n        LocationDB[City & State JSON]\n        SEOConfig[SEO & Meta Mapping]\n    end\n\n    subgraph \"Path Synthesis Engine\"\n        ApplianceDB --> PageRouter[Dynamic Route Generator]\n        LocationDB --> PageRouter\n        SEOConfig --> PageRouter\n    end\n\n    subgraph \"Programmatic Page Generation\"\n        PageRouter --> LocalService[City-Specific Service Pages]\n        PageRouter --> TroubleShoot[Nested Troubleshooting Guides]\n        PageRouter --> StateListing[State-Level Provider Directories]\n    end\n\n    subgraph \"Conversion Funnel\"\n        LocalService --> LeadGen[ZIP-Based Matching]\n        TroubleShoot --> LeadGen\n        LeadGen --> PhoneRouting[Call-to-Action / Lead Capture]\n    end\n```\n\n### 3. Key Engineering Pillars\n\n#### A. Content-as-Data (JSON Orchestration)\nThe architecture completely decouples the **Content Strategy** from the **Codebase**. All technical knowledge (symptoms, troubleshooting steps, tools required) is stored in highly structured JSON files. \n- **Scalability:** Adding a new appliance category requires zero code changes—only a JSON update.\n- **Consistency:** Ensures that technical terminology and troubleshooting advice remain uniform across 5,000+ generated routes.\n\n#### B. Recursive Dynamic Routing\nWe implemented a multi-level dynamic routing structure (`[repairSlug]/[problemSlug]/[...troubleshootingSlug]`) that allows for deep, hierarchical search coverage.\n- **Path Synthesis:** The system automatically calculates and generates valid URL paths based on the cross-product of appliances and problems.\n- **Contextual SEO:** Every page dynamically generates its own Metadata (Title, Description, Schema.org) by combining location data with technical appliance data.\n\n#### C. Performance-First Lead Capture\nIn local services, speed is the primary driver of conversion.\n- **Static Site Generation (SSG):** Pages are pre-rendered at build time, resulting in near-instant load speeds (Lighthouse scores of 95+).\n- **Client-Side Location Detection:** Custom hooks manage real-time ZIP code validation and service area matching to ensure the user is connected to a relevant local professional instantly.\n\n### 4. Strategic Business Value (ROI)\n- **Zero Cost per Page:** Once the engine is built, the cost of adding 1,000 new pages (new cities/appliances) is negligible.\n- **Durable Organic Moat:** By capturing \"Long-Tail\" search queries (e.g., \"leaking LG dishwasher repair in Seattle\"), the platform avoids expensive PPC competition and builds long-term organic authority.\n- **Conversion Efficiency:** The user journey is strictly engineered to move from *Problem Discovery* (Troubleshooting) to *Transaction* (Provider Matching) in under 3 clicks.\n\nAppliance Repairly demonstrates how **Programmatic SEO** can transform a service business into a high-leverage digital acquisition machine.\n"
  previousProject: {"name":"Service Request System","link":"/web-development-projects/service-request-system/"}
  nextProject: {"name":"SR-22 Insurance Now","link":"/web-development-projects/sr-22-insurance-now/"}
  relatedCaseStudy: null
---

<section class="mt-4 mb-6">
  <div class="grid">
    <div class="col-12">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
      <h1 class="text-4xl md:text-6xl font-bold mb-3 mt-0 line-height-2">{{$frontmatter.project.name}}</h1>
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
              <a v-if="$frontmatter.project.contact" :href="'/contact/?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline flex-1">
                <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold py-3" raised rounded />
              </a>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>

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
                <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-12rem md:min-h-14-5rem" />
             </div>
          </div>
       </div>
    </div>
    <div v-for="(img, idx) in $frontmatter.project.images.slice(3, 5)" :key="idx" class="col-12 md:col-6 lg:col-4 p-2">
       <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
          <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" />
       </div>
    </div>
    <div v-if="$frontmatter.project.images.length >= 6" class="col-12 md:col-6 lg:col-4 p-2">
       <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card relative" :class="{'cursor-pointer': $frontmatter.project.images.length > 6}" @click="$frontmatter.project.images.length > 6 ? displayModal = true : null">
          <Image :src="$frontmatter.project.images[5].itemImageSrc" :alt="$frontmatter.project.images[5].alt" :preview="$frontmatter.project.images.length === 6" class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" />
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
  <a :href="'/contact/?subject=' + encodeURIComponent('Architectural Consultation: ' + $frontmatter.project.name)" class="no-underline">
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
          <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" />
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
          <div v-pre class="project-markdown-content text-lg line-height-4">

## Engineering Architecture: Programmatic SEO & Lead-Gen Systems

Appliance Repairly is not just a website; it is a **Programmatic Growth Engine**. It is designed to capture high-intent local search demand at scale by automatically generating thousands of search-optimized landing pages across cities, appliance types, and specific technical problems.

### 1. The Growth Engine (Layman's Perspective)
Think of this platform as an **Automated Sales Team** that can be in 10,000 places at once. 

In a traditional setup, you'd have to write a new page for every city (e.g., "Fridge Repair in Austin," "Dryer Repair in Miami"). This system does that automatically. It takes a **Central Knowledge Base** of appliance problems and "mixes" it with a **Database of Locations**. In seconds, it creates thousands of tailored pages that look like they were handcrafted for every specific neighbor in every specific city, ensuring that whenever someone searches for help, we are there to meet them.

### 2. Technical Architecture & Dynamic Routing
The system leverages Next.js 15 for high-performance static generation (SSG) with on-demand revalidation.

```mermaid
graph TD
    subgraph "Core Data Layers"
        ApplianceDB[Appliance & Problem JSON]
        LocationDB[City & State JSON]
        SEOConfig[SEO & Meta Mapping]
    end

    subgraph "Path Synthesis Engine"
        ApplianceDB --> PageRouter[Dynamic Route Generator]
        LocationDB --> PageRouter
        SEOConfig --> PageRouter
    end

    subgraph "Programmatic Page Generation"
        PageRouter --> LocalService[City-Specific Service Pages]
        PageRouter --> TroubleShoot[Nested Troubleshooting Guides]
        PageRouter --> StateListing[State-Level Provider Directories]
    end

    subgraph "Conversion Funnel"
        LocalService --> LeadGen[ZIP-Based Matching]
        TroubleShoot --> LeadGen
        LeadGen --> PhoneRouting[Call-to-Action / Lead Capture]
    end
```

### 3. Key Engineering Pillars

#### A. Content-as-Data (JSON Orchestration)
The architecture completely decouples the **Content Strategy** from the **Codebase**. All technical knowledge (symptoms, troubleshooting steps, tools required) is stored in highly structured JSON files. 
- **Scalability:** Adding a new appliance category requires zero code changes—only a JSON update.
- **Consistency:** Ensures that technical terminology and troubleshooting advice remain uniform across 5,000+ generated routes.

#### B. Recursive Dynamic Routing
We implemented a multi-level dynamic routing structure (`[repairSlug]/[problemSlug]/[...troubleshootingSlug]`) that allows for deep, hierarchical search coverage.
- **Path Synthesis:** The system automatically calculates and generates valid URL paths based on the cross-product of appliances and problems.
- **Contextual SEO:** Every page dynamically generates its own Metadata (Title, Description, Schema.org) by combining location data with technical appliance data.

#### C. Performance-First Lead Capture
In local services, speed is the primary driver of conversion.
- **Static Site Generation (SSG):** Pages are pre-rendered at build time, resulting in near-instant load speeds (Lighthouse scores of 95+).
- **Client-Side Location Detection:** Custom hooks manage real-time ZIP code validation and service area matching to ensure the user is connected to a relevant local professional instantly.

### 4. Strategic Business Value (ROI)
- **Zero Cost per Page:** Once the engine is built, the cost of adding 1,000 new pages (new cities/appliances) is negligible.
- **Durable Organic Moat:** By capturing "Long-Tail" search queries (e.g., "leaking LG dishwasher repair in Seattle"), the platform avoids expensive PPC competition and builds long-term organic authority.
- **Conversion Efficiency:** The user journey is strictly engineered to move from *Problem Discovery* (Troubleshooting) to *Transaction* (Provider Matching) in under 3 clicks.

Appliance Repairly demonstrates how **Programmatic SEO** can transform a service business into a high-leverage digital acquisition machine.


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
        <a href="/web-development-services/custom-software-engineering/" class="no-underline px-4 py-2 surface-0 shadow-1 border-round-xl text-700 font-bold hover:text-primary transition-all">Custom Software</a>
        <a href="/web-development-services/mvp-development-for-startups/" class="no-underline px-4 py-2 surface-0 shadow-1 border-round-xl text-700 font-bold hover:text-primary transition-all">MVP Development</a>
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
      <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
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