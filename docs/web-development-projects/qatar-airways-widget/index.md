---
title: Qatar Airways widget
description: Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more.
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Qatar Airways widget"
  description: "Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Leisure, travel, and tourism"
  year: "2021"
  price: 0
  currency: USD
  link: "https://holidays.qatarairways.com/en-in/avios"
  codeLink: 
  contact: "mailto:support@stackseekers.com?subject=Qatar Airways widget Inquiry"
  stack: ["Javascript","Vuedotjs","Vite/black/white","Axios/black/white","Express/black/white","MongoDB","Git","amazonec2","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/qatar/placeholder.webp","alt":"Qatar Airways"},{"itemImageSrc":"/img/projects/qatar/qatar-airways.webp","alt":"Qatar Airways"},{"itemImageSrc":"/img/projects/qatar/thumbnail.webp","alt":"Qatar Airways"},{"itemImageSrc":"/img/projects/qatar/qatar.webp","alt":"Qatar Airways"}]
  video: ""
  features: [{"text":"Widget for Flight Booking"},{"text":"Widget for Flight + Hotel Booking"},{"text":"Widget for Transfer Booking"},{"text":"Use widget with any CMS Platform like Landingi"}]
  perspective: {"executive":"","technical":""}
  details: "## Engineering Architecture: Modular Embeddable Widget Suite\n\nQA (TUI Travel Widgets) is an enterprise-grade **Modular Frontend System** built to deliver high-conversion travel booking experiences across a distributed network of partner websites. It demonstrates how to architect complex, multi-product search flows into lightweight, embeddable assets that maintain perfect brand consistency and operational reliability.\n\n### 1. The Booking Engine (Layman's Perspective)\nThink of these widgets as **Portable Travel Desks**. \n\nInstead of forcing a customer to go to a physical travel agency or one specific website, you can place a \"Travel Desk\" (Widget) on any digital street corner—a partner's blog, a news site, or an airline portal. Each desk is fully equipped to handle anything from booking a flight to reserving a car or a hotel. It's smart enough to know exactly which product the customer is looking for and processes the entire request instantly, connecting them to a global network of travel providers without them ever leaving the page.\n\n### 2. Technical Architecture & Integration Flow\nThe system utilizes a decoupled Vue.js architecture designed for cross-domain embedding, ensuring that the widget logic never conflicts with the host website's scripts or styles.\n\n```mermaid\ngraph TD\n    subgraph \"Host Environment (Partner Site)\"\n        Embed[Script Tag & Container] --> Lifecycle[Vue Instance Initialization]\n        Lifecycle --> ShadowDOM[Isolated Styling & HTML]\n    end\n\n    subgraph \"Product Orchestration Layer (Vue.js)\"\n        ShadowDOM --> TabManager[Universal Tab Orchestrator]\n        TabManager --> FlightForm[Flight Module]\n        TabManager --> HotelForm[Hotel Module]\n        TabManager --> PackageForm[Package Module]\n    end\n\n    subgraph \"The Abstraction Layer (Mixins)\"\n        FlightForm --> API[Unified API Mixin]\n        HotelForm --> API\n        PackageForm --> API\n        API --> Validator[Global Validation Engine]\n        API --> I18n[Internationalization Engine]\n    end\n\n    subgraph \"Enterprise Data (GoQuo Platform)\"\n        Validator --> GDS[Global Distribution System]\n        I18n --> TranslationDB[Regional Language Sets]\n    end\n```\n\n### 3. Key Engineering Pillars\n\n#### A. The \"Universal Product\" Abstraction\nTo manage 25+ different travel forms (Flights, Hotels, Transfers, etc.) without massive code duplication, we implemented a robust **Mixin-Based Architecture**.\n- **Shared Logic:** Core features like API communication, error handling, and form validation are abstracted into reusable mixins.\n- **Product Specialization:** Individual components (e.g., `SearchFlightForm.vue`) only contain the specific UI and data requirements for their product type, while inheriting all the heavy-lifting logic from the shared mixins.\n\n#### B. Zero-Conflict Embedding Strategy\nTravel widgets must run on a variety of partner websites with unpredictable CSS and JS environments. \n- **Scoped Styling:** We used a combination of PostCSS and SASS to ensure that the widget's styles never \"bleed\" out into the host page, and that the host page's styles don't break the widget's UI.\n- **Lifecycle Isolation:** Each widget operates as an independent Vue instance, allowing multiple widgets (e.g., a \"Flight Search\" and a \"Deal Banner\") to coexist on the same page without state collision.\n\n#### C. High-Efficiency Internationalization (i18n)\nServing the Malaysia market required support for multiple languages and currencies.\n- **Dynamic Translation Mapping:** The system uses a centralized translation engine that re-maps the entire UI based on the user's \"Culture Code\" at runtime.\n- **Regional Formatting:** Everything from date pickers to currency symbols is automatically localized, ensuring a seamless experience for diverse regional users.\n\n### 4. Strategic Business Value (ROI)\n- **Market Reach Expansion:** Allows TUI to place booking entry points on thousands of partner sites, drastically increasing the top of the sales funnel.\n- **Reduced Maintenance Overhead:** Fixes or feature updates in the core mixins are instantly propagated across all 25+ widget types, ensuring a single source of truth for the entire product suite.\n- **Conversion Optimization:** By providing a fast, responsive, and product-specific search experience directly in the user's current context, the widgets minimize \"Drop-off\" and maximize booking intent.\n\nQA proves that **Modular Frontend Architecture** is the key to scaling complex commercial offerings across a fragmented digital landscape.\n"
  previousProject: {"name":"Yit Plus","link":"/web-development-projects/yit-plus/"}
  nextProject: {"name":"Recipes","link":"/web-development-projects/recipes/"}
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

## Engineering Architecture: Modular Embeddable Widget Suite

QA (TUI Travel Widgets) is an enterprise-grade **Modular Frontend System** built to deliver high-conversion travel booking experiences across a distributed network of partner websites. It demonstrates how to architect complex, multi-product search flows into lightweight, embeddable assets that maintain perfect brand consistency and operational reliability.

### 1. The Booking Engine (Layman's Perspective)
Think of these widgets as **Portable Travel Desks**. 

Instead of forcing a customer to go to a physical travel agency or one specific website, you can place a "Travel Desk" (Widget) on any digital street corner—a partner's blog, a news site, or an airline portal. Each desk is fully equipped to handle anything from booking a flight to reserving a car or a hotel. It's smart enough to know exactly which product the customer is looking for and processes the entire request instantly, connecting them to a global network of travel providers without them ever leaving the page.

### 2. Technical Architecture & Integration Flow
The system utilizes a decoupled Vue.js architecture designed for cross-domain embedding, ensuring that the widget logic never conflicts with the host website's scripts or styles.

```mermaid
graph TD
    subgraph "Host Environment (Partner Site)"
        Embed[Script Tag & Container] --> Lifecycle[Vue Instance Initialization]
        Lifecycle --> ShadowDOM[Isolated Styling & HTML]
    end

    subgraph "Product Orchestration Layer (Vue.js)"
        ShadowDOM --> TabManager[Universal Tab Orchestrator]
        TabManager --> FlightForm[Flight Module]
        TabManager --> HotelForm[Hotel Module]
        TabManager --> PackageForm[Package Module]
    end

    subgraph "The Abstraction Layer (Mixins)"
        FlightForm --> API[Unified API Mixin]
        HotelForm --> API
        PackageForm --> API
        API --> Validator[Global Validation Engine]
        API --> I18n[Internationalization Engine]
    end

    subgraph "Enterprise Data (GoQuo Platform)"
        Validator --> GDS[Global Distribution System]
        I18n --> TranslationDB[Regional Language Sets]
    end
```

### 3. Key Engineering Pillars

#### A. The "Universal Product" Abstraction
To manage 25+ different travel forms (Flights, Hotels, Transfers, etc.) without massive code duplication, we implemented a robust **Mixin-Based Architecture**.
- **Shared Logic:** Core features like API communication, error handling, and form validation are abstracted into reusable mixins.
- **Product Specialization:** Individual components (e.g., `SearchFlightForm.vue`) only contain the specific UI and data requirements for their product type, while inheriting all the heavy-lifting logic from the shared mixins.

#### B. Zero-Conflict Embedding Strategy
Travel widgets must run on a variety of partner websites with unpredictable CSS and JS environments. 
- **Scoped Styling:** We used a combination of PostCSS and SASS to ensure that the widget's styles never "bleed" out into the host page, and that the host page's styles don't break the widget's UI.
- **Lifecycle Isolation:** Each widget operates as an independent Vue instance, allowing multiple widgets (e.g., a "Flight Search" and a "Deal Banner") to coexist on the same page without state collision.

#### C. High-Efficiency Internationalization (i18n)
Serving the Malaysia market required support for multiple languages and currencies.
- **Dynamic Translation Mapping:** The system uses a centralized translation engine that re-maps the entire UI based on the user's "Culture Code" at runtime.
- **Regional Formatting:** Everything from date pickers to currency symbols is automatically localized, ensuring a seamless experience for diverse regional users.

### 4. Strategic Business Value (ROI)
- **Market Reach Expansion:** Allows TUI to place booking entry points on thousands of partner sites, drastically increasing the top of the sales funnel.
- **Reduced Maintenance Overhead:** Fixes or feature updates in the core mixins are instantly propagated across all 25+ widget types, ensuring a single source of truth for the entire product suite.
- **Conversion Optimization:** By providing a fast, responsive, and product-specific search experience directly in the user's current context, the widgets minimize "Drop-off" and maximize booking intent.

QA proves that **Modular Frontend Architecture** is the key to scaling complex commercial offerings across a fragmented digital landscape.


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