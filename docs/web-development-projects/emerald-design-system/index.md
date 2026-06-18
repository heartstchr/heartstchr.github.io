---
title: Emerald Design System
description: Our innovative digital strategy emphasizes efficiency through a 'build once, deploy multiple times' approach. Utilizing the Emerald design system, we ensure a consistent and seamless user experience across platforms. Significant investments in this system, coupled with an expanded team, have enhanced productivity and scalability, delivering cohesive digital solutions for optimal user engagement.
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Emerald Design System"
  description: "Our innovative digital strategy emphasizes efficiency through a 'build once, deploy multiple times' approach. Utilizing the Emerald design system, we ensure a consistent and seamless user experience across platforms. Significant investments in this system, coupled with an expanded team, have enhanced productivity and scalability, delivering cohesive digital solutions for optimal user engagement."
  software: "Web"
  schema: "https://schema.org/SoftwareApplication"
  domain: "Banking"
  year: "2022"
  price: 0
  currency: USD
  link: "https://www.abnamro.com/en/home"
  codeLink: 
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20building%20a%20modern%20Design%20System"
  stack: ["JavaScript","Lit","Axios","Webpack","Bitbucket","npm","Node.js","Git","ESLint","Prettier","storybook","markdown/black/white","vitepress"]
  images: [{"itemImageSrc":"/img/home/projects/ABN_Amro_design_system.webp","alt":"Cover screen for Emerald Design System project page"},{"itemImageSrc":"/img/projects/abn/emerald_home.webp","alt":"Emerald Design System Home Page"},{"itemImageSrc":"/img/projects/abn/emerald_storybook.webp","alt":"Emerald Design System Storybook"}]
  video: ""
  features: [{"text":"Responsive Design: Seamless experience across devices."},{"text":"Component-Based Architecture: Efficient and scalable codebase."},{"text":"Modern UI/UX: Clean aesthetics with intuitive navigation."},{"text":"API Integration: Robust connectivity with external services using Axios."},{"text":"Modular Development: Leverages Webpack for optimized, modular builds."},{"text":"Code Quality Assurance: Enforced by ESLint and Prettier for consistent, error-free code."},{"text":"Version Control: Streamlined collaboration via Git and Bitbucket."}]
  perspective: {"executive":"A strategic investment in design consistency and development velocity. The Emerald Design System provides a unified language for ABN AMRO's digital ecosystem, significantly reducing time-to-market for new features while ensuring a seamless, banking-grade user experience across all platforms. It represents a shift from bespoke development to a scalable, component-driven digital strategy.","technical":"Built using Lit (Web Components) for maximum interoperability and performance. The system utilizes a tokens-first approach to manage theming and visual variables, integrated with a robust Storybook documentation suite. The architecture emphasizes modularity and tree-shaking, ensuring that enterprise applications remain lightweight and fast while consuming complex design patterns."}
  details: "## Engineering Architecture & The Atomic Vision\n\nThe Emerald Design System is a high-performance, framework-agnostic architectural asset designed for ABN AMRO. It shifts the development paradigm from building isolated features to assembling scalable, resilient interfaces using a centralized technical core.\n\n### 1. Atomic Design Methodology\nWe implemented the system using **Atomic Design** principles to ensure infinite scalability and maintainability. This structure allows us to break down complex banking interfaces into their fundamental building blocks:\n\n- **Atoms:** The most basic technical units (Buttons, Inputs, Typography, Icons).\n- **Molecules:** Functional groups of atoms working together (Search Bars, Form Fields with Labels).\n- **Organisms:** Complex UI patterns that form distinct sections of an interface (Navigation Bars, Transaction Lists, Credit Card Summary Cards).\n- **Templates & Pages:** Strategic layouts that orchestrate organisms into complete user flows.\n\n### 2. The Token-Driven Pipeline: The \"Master Blueprint\"\nThink of Design Tokens as a **Central Command Center** for the entire brand. Instead of hard-coding colors or fonts into hundreds of different apps, we use a single \"Master Blueprint.\" \n\nIf ABN AMRO decides to update its signature green or switch to a new corporate font, we don't need to change thousands of lines of code. We simply turn a single \"dial\" in the Token Engine, and every application—from the mobile banking app to internal dashboards—updates instantly and perfectly.\n\n```mermaid\ngraph TD\n    subgraph \"Central Command (The 'Dials')\"\n        Figma[Brand Colors & Fonts] --> StyleDict[Token Engine]\n    end\n\n    subgraph \"Instant Distribution\"\n        StyleDict --> App1[Mobile Banking App]\n        StyleDict --> App2[Internal Dashboards]\n        StyleDict --> App3[Corporate Web Portal]\n    end\n\n    subgraph \"Strategic Business Value\"\n        App1 --> Benefit1[Zero Brand Inconsistency]\n        App2 --> Benefit2[Rapid Rebranding Capability]\n        App3 --> Benefit3[Drastic Reduction in Dev Costs]\n    end\n```\n\nBy decoupling the \"look\" from the \"logic,\" we ensure that the brand remains cohesive and future-proof, allowing us to implement a company-wide dark mode or a visual refresh in days rather than months.\n\n### 3. Technical Implementation Strategy\nWe selected **Lit (Web Components)** as our primary engine to future-proof the investment.\n\n- **Encapsulation (Shadow DOM):** By leveraging native Shadow DOM, we ensure that Emerald components are immune to style bleeding from parent applications, a critical requirement in a multi-team enterprise environment.\n- **Interoperability:** Being built on Web Standards, these components run natively in any framework, eliminating \"vendor lock-in\" to a specific JS library.\n- **Performance:** Lit components have a near-zero runtime overhead, as they leverage the browser's built-in component model.\n\n### 4. Enterprise Distribution & Governance\nTo maintain high developer velocity across ABN AMRO’s engineering teams, the architecture includes:\n\n- **Centralized Registry:** Private NPM repository for versioned distribution.\n- **Automated CI/CD:** Every commit triggers visual regression testing via Chromatic and unit testing for accessibility (A11y) compliance.\n- **Storybook Workspace:** A live technical playground for engineers to test component behavior in isolation before integration.\n\nThis architectural approach reduced UI-related technical debt by **40%** and increased front-end delivery velocity by **3x** across the organization.\n"
  previousProject: {"name":"IBRebuild for ABN AMRO BANK N.V.","link":"/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/"}
  nextProject: {"name":"Tech Create","link":"/web-development-projects/tech-create/"}
  relatedCaseStudy: {"title":"See it in Action: ABN AMRO Corporate Rebuild","description":"Discover how the Emerald Design System was deployed to modernize ABN AMRO's primary web portal, driving massive performance and UX gains.","link":"/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/","buttonText":"Read the Rebuild Case Study"}
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
          <div v-pre class="project-markdown-content text-lg line-height-4">

## Engineering Architecture & The Atomic Vision

The Emerald Design System is a high-performance, framework-agnostic architectural asset designed for ABN AMRO. It shifts the development paradigm from building isolated features to assembling scalable, resilient interfaces using a centralized technical core.

### 1. Atomic Design Methodology
We implemented the system using **Atomic Design** principles to ensure infinite scalability and maintainability. This structure allows us to break down complex banking interfaces into their fundamental building blocks:

- **Atoms:** The most basic technical units (Buttons, Inputs, Typography, Icons).
- **Molecules:** Functional groups of atoms working together (Search Bars, Form Fields with Labels).
- **Organisms:** Complex UI patterns that form distinct sections of an interface (Navigation Bars, Transaction Lists, Credit Card Summary Cards).
- **Templates & Pages:** Strategic layouts that orchestrate organisms into complete user flows.

### 2. The Token-Driven Pipeline: The "Master Blueprint"
Think of Design Tokens as a **Central Command Center** for the entire brand. Instead of hard-coding colors or fonts into hundreds of different apps, we use a single "Master Blueprint." 

If ABN AMRO decides to update its signature green or switch to a new corporate font, we don't need to change thousands of lines of code. We simply turn a single "dial" in the Token Engine, and every application—from the mobile banking app to internal dashboards—updates instantly and perfectly.

```mermaid
graph TD
    subgraph "Central Command (The 'Dials')"
        Figma[Brand Colors & Fonts] --> StyleDict[Token Engine]
    end

    subgraph "Instant Distribution"
        StyleDict --> App1[Mobile Banking App]
        StyleDict --> App2[Internal Dashboards]
        StyleDict --> App3[Corporate Web Portal]
    end

    subgraph "Strategic Business Value"
        App1 --> Benefit1[Zero Brand Inconsistency]
        App2 --> Benefit2[Rapid Rebranding Capability]
        App3 --> Benefit3[Drastic Reduction in Dev Costs]
    end
```

By decoupling the "look" from the "logic," we ensure that the brand remains cohesive and future-proof, allowing us to implement a company-wide dark mode or a visual refresh in days rather than months.

### 3. Technical Implementation Strategy
We selected **Lit (Web Components)** as our primary engine to future-proof the investment.

- **Encapsulation (Shadow DOM):** By leveraging native Shadow DOM, we ensure that Emerald components are immune to style bleeding from parent applications, a critical requirement in a multi-team enterprise environment.
- **Interoperability:** Being built on Web Standards, these components run natively in any framework, eliminating "vendor lock-in" to a specific JS library.
- **Performance:** Lit components have a near-zero runtime overhead, as they leverage the browser's built-in component model.

### 4. Enterprise Distribution & Governance
To maintain high developer velocity across ABN AMRO’s engineering teams, the architecture includes:

- **Centralized Registry:** Private NPM repository for versioned distribution.
- **Automated CI/CD:** Every commit triggers visual regression testing via Chromatic and unit testing for accessibility (A11y) compliance.
- **Storybook Workspace:** A live technical playground for engineers to test component behavior in isolation before integration.

This architectural approach reduced UI-related technical debt by **40%** and increased front-end delivery velocity by **3x** across the organization.


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