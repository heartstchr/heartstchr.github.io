---
title: Marketplace Booking Platform
description: A multi-sided booking marketplace with search, listing management, reservations, and payments that can be adapted to other inventory-led domains.
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Marketplace Booking Platform"
  description: "A multi-sided booking marketplace with search, listing management, reservations, and payments that can be adapted to other inventory-led domains."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Marketplace SaaS"
  year: "2024"
  price: 0
  currency: USD
  link: ""
  codeLink: 
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20"
  stack: ["Javascript","Vuedotjs","vite","Axios","Express/black/white","jsonwebtokens/black/white","stripe","nodedotjs","MongoDB","Git","github/black/white","Eslint","Prettier"]
  images: []
  video: ""
  features: [{"text":"Secure user registration, login, and logout functionality."},{"text":"Role-based access for general users, property owners, and admins."},{"text":"Search inventory by type, geography, availability, and time."},{"text":"Advanced filters to refine search results based on user preferences."},{"text":"Detailed listing pages with full image galleries and inventory information."},{"text":"Booking request system with date, time, and duration selection."},{"text":"Free cancellation within 24 hours with redirection to the inventory catalog."},{"text":"Seamless and secure payment processing via Stripe for confirmed bookings."},{"text":"Email notifications for booking and payment confirmations (users & owners)."},{"text":"Providers can publish new listings with images and details."},{"text":"Admin verification process for new listing submissions."},{"text":"Responsive, mobile-friendly interface for seamless access across devices."},{"text":"Integrated APIs for authentication, listing management, booking, search, and payments."},{"text":"Scalable backend architecture to support future growth and features."},{"text":"Reusable marketplace architecture that can be replicated in another domain with different inventory, filters, and booking logic."}]
  perspective: {"executive":"","technical":""}
  details: "## Engineering Architecture: Multi-Tenant Marketplace Foundation\n\nFTS (Full-Text Search Marketplace) is a robust, **Full-Stack Booking Engine** designed as a highly reusable foundation for any inventory-led business. It demonstrates a sophisticated **Multi-Sided Transactional Architecture** that handles complex role-based workflows, real-time availability, and secure payment settlements.\n\n### 1. The Marketplace Engine (Layman's Perspective)\nThink of this platform as a **Virtual Shopping Mall**. \n\nIn a physical mall, you have the **Mall Manager** (Admin) who ensures everything is running smoothly, the **Shop Owners** (Providers) who list their products and manage their own inventory, and the **Shoppers** (Customers) who browse, compare, and buy. \n\nThis platform handles all those interactions digitally. It ensures that when a Shopper buys something, the Shop Owner is notified instantly, the payment is handled securely at the \"Front Desk\" (Stripe), and the Mall Manager can oversee everything to ensure a high-quality experience for everyone.\n\n### 2. Technical Architecture & Transactional Flow\nThe system is built on a modern Monorepo architecture, separating concerns between a highly reactive Vue 3 frontend and a resilient Node.js micro-service backend.\n\n```mermaid\ngraph TD\n    subgraph \"The Demand Side (Customers)\"\n        Search[Search & Discovery] --> Filter[Availability Filters]\n        Filter --> Booking[Booking Request]\n    end\n\n    subgraph \"The Transactional Core (Server)\"\n        Booking --> Auth[JWT Role Verification]\n        Auth --> Inventory[Inventory Lock & Calendar Check]\n        Inventory --> Payment[Stripe Checkout Session]\n        Payment --> Webhook[Payment Settlement Webhook]\n    end\n\n    subgraph \"The Supply Side (Providers)\"\n        Webhook --> Notify[Provider Notification]\n        Notify --> Dashboard[Listing & Order Management]\n        Dashboard --> Avail[Availability Sync]\n    end\n\n    subgraph \"Platform Governance (Admins)\"\n        Admin[Admin Portal] --> Moderate[User & Listing Moderation]\n        Moderate --> Audit[Transaction Logs]\n    end\n```\n\n### 3. Key Engineering Pillars\n\n#### A. Role-Based Access Control (RBAC) Orchestration\nThe architecture implements a strict **RBAC Model** that ensures data isolation and security across three distinct user personas.\n- **State-Driven Permissions:** Using Pinia (Frontend) and JWT (Backend), the system dynamically toggles features and API access based on the user's role, preventing unauthorized inventory or financial data access.\n- **Multi-Tenant Listing Logic:** Providers can only manage their own \"stores\" (listings), while Admins maintain global oversight of the entire ecosystem.\n\n#### B. Distributed Booking & Calendar Logic\nTo prevent \"double-booking\" in a high-concurrency environment, we implemented a sophisticated reservation engine:\n- **Atomic Locks:** During the Stripe checkout phase, the system \"soft-locks\" the inventory to prevent overlapping requests.\n- **Real-Time Sync:** Availability is calculated dynamically based on existing booking records, ensuring that the customer only sees truly bookable dates.\n\n#### C. Universal Inventory Schema\nThe platform uses a **Polymorphic Inventory Model**. This means the \"Item\" being booked is not hard-coded as a specific product.\n- **Domain Agnostic:** By defining inventory through attributes rather than fixed fields, the same engine can power a rental marketplace, a professional service booking site, or an equipment reservation portal with minimal schema changes.\n\n### 4. Strategic Business Value (ROI)\n- **Time-to-Market:** Provides a 70% \"Head Start\" for any new marketplace venture by offering pre-built auth, payment, and booking flows.\n- **Operational Scalability:** Automates the most complex parts of marketplace management—payments and notifications—allowing founders to focus on growth rather than operations.\n- **Architectural Flexibility:** The clean separation between the inventory model and the booking logic allows the business to pivot to new verticals without rebuilding the core infrastructure.\n\nThis marketplace foundation is a technical blueprint for **Scalable Transactional Systems**, designed to grow from a niche portal to a global enterprise platform.\n"
  previousProject: {"name":"Momentum Incident Management","link":"/web-development-projects/momentum-incident-management/"}
  nextProject: {"name":"IBRebuild for ABN AMRO BANK N.V.","link":"/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/"}
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

## Engineering Architecture: Multi-Tenant Marketplace Foundation

FTS (Full-Text Search Marketplace) is a robust, **Full-Stack Booking Engine** designed as a highly reusable foundation for any inventory-led business. It demonstrates a sophisticated **Multi-Sided Transactional Architecture** that handles complex role-based workflows, real-time availability, and secure payment settlements.

### 1. The Marketplace Engine (Layman's Perspective)
Think of this platform as a **Virtual Shopping Mall**. 

In a physical mall, you have the **Mall Manager** (Admin) who ensures everything is running smoothly, the **Shop Owners** (Providers) who list their products and manage their own inventory, and the **Shoppers** (Customers) who browse, compare, and buy. 

This platform handles all those interactions digitally. It ensures that when a Shopper buys something, the Shop Owner is notified instantly, the payment is handled securely at the "Front Desk" (Stripe), and the Mall Manager can oversee everything to ensure a high-quality experience for everyone.

### 2. Technical Architecture & Transactional Flow
The system is built on a modern Monorepo architecture, separating concerns between a highly reactive Vue 3 frontend and a resilient Node.js micro-service backend.

```mermaid
graph TD
    subgraph "The Demand Side (Customers)"
        Search[Search & Discovery] --> Filter[Availability Filters]
        Filter --> Booking[Booking Request]
    end

    subgraph "The Transactional Core (Server)"
        Booking --> Auth[JWT Role Verification]
        Auth --> Inventory[Inventory Lock & Calendar Check]
        Inventory --> Payment[Stripe Checkout Session]
        Payment --> Webhook[Payment Settlement Webhook]
    end

    subgraph "The Supply Side (Providers)"
        Webhook --> Notify[Provider Notification]
        Notify --> Dashboard[Listing & Order Management]
        Dashboard --> Avail[Availability Sync]
    end

    subgraph "Platform Governance (Admins)"
        Admin[Admin Portal] --> Moderate[User & Listing Moderation]
        Moderate --> Audit[Transaction Logs]
    end
```

### 3. Key Engineering Pillars

#### A. Role-Based Access Control (RBAC) Orchestration
The architecture implements a strict **RBAC Model** that ensures data isolation and security across three distinct user personas.
- **State-Driven Permissions:** Using Pinia (Frontend) and JWT (Backend), the system dynamically toggles features and API access based on the user's role, preventing unauthorized inventory or financial data access.
- **Multi-Tenant Listing Logic:** Providers can only manage their own "stores" (listings), while Admins maintain global oversight of the entire ecosystem.

#### B. Distributed Booking & Calendar Logic
To prevent "double-booking" in a high-concurrency environment, we implemented a sophisticated reservation engine:
- **Atomic Locks:** During the Stripe checkout phase, the system "soft-locks" the inventory to prevent overlapping requests.
- **Real-Time Sync:** Availability is calculated dynamically based on existing booking records, ensuring that the customer only sees truly bookable dates.

#### C. Universal Inventory Schema
The platform uses a **Polymorphic Inventory Model**. This means the "Item" being booked is not hard-coded as a specific product.
- **Domain Agnostic:** By defining inventory through attributes rather than fixed fields, the same engine can power a rental marketplace, a professional service booking site, or an equipment reservation portal with minimal schema changes.

### 4. Strategic Business Value (ROI)
- **Time-to-Market:** Provides a 70% "Head Start" for any new marketplace venture by offering pre-built auth, payment, and booking flows.
- **Operational Scalability:** Automates the most complex parts of marketplace management—payments and notifications—allowing founders to focus on growth rather than operations.
- **Architectural Flexibility:** The clean separation between the inventory model and the booking logic allows the business to pivot to new verticals without rebuilding the core infrastructure.

This marketplace foundation is a technical blueprint for **Scalable Transactional Systems**, designed to grow from a niche portal to a global enterprise platform.


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