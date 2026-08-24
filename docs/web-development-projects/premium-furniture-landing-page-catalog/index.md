---
title: "Premium Furniture Landing Page & Catalog"
description: "A luxury furniture landing page, lookbook, and product catalog built with Vue.js and a Notion headless CMS — perfect for premium retail showrooms."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Premium Furniture Landing Page & Catalog"
  description: "A luxury, full-featured furniture landing page, lookbook, and product catalog platform built with Vue.js, powered by a Notion Headless CMS, and deployed on Netlify. Perfect for custom furniture showrooms, interior design catalogs, or any premium retail catalog."
  software: "Web Application"
  schema: "https://schema.org/WebApplication"
  domain: "Headless Commerce & CMS Integration"
  year: "2025"
  category: "Ready-made Apps"
  price: "20"
  currency: "USD"
  link: ""
  codeLink: 
  contact: "mailto:support@stackseekers.com?subject=Notion Furniture Catalog Inquiry"
  stack: ["javascript","vuedotjs","notion/black/white","html5","css","tailwindcss","PrimeVue","netlify","vite/black/white","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/furniture-landing-page/furniture-cover.webp","alt":"Notion-Powered Furniture Landing Page Showcase"},{"itemImageSrc":"/img/projects/furniture-landing-page/product-catalog.webp","alt":"Premium Furniture Catalog and Filtering Interface"},{"itemImageSrc":"/img/projects/furniture-landing-page/interactive-lookbook.webp","alt":"Interactive Lookbook Scene with Hoverable Hotspots"},{"itemImageSrc":"/img/projects/furniture-landing-page/product-detail.webp","alt":"Product Detail Page with Rich Image Gallery"},{"itemImageSrc":"/img/projects/furniture-landing-page/product-detail-complete-look.webp","alt":"Related Products Recommendation Section"},{"itemImageSrc":"/img/projects/furniture-landing-page/product-specifications.webp","alt":"Dynamic Product Specifications and Support Actions"},{"itemImageSrc":"/img/projects/furniture-landing-page/admin-dashboard.webp","alt":"Notion CMS Admin Panel Dashboard Overview"},{"itemImageSrc":"/img/projects/furniture-landing-page/admin-products-list.webp","alt":"Showroom Product Inventory Management Interface"},{"itemImageSrc":"/img/projects/furniture-landing-page/admin-hotspot-mapper.webp","alt":"Admin Coordinate Hotspot Mapper Panel"},{"itemImageSrc":"/img/projects/furniture-landing-page/admin-image-upload.webp","alt":"Drag & Drop Netlify Blobs Media Uploader"},{"itemImageSrc":"/img/projects/furniture-landing-page/admin-content-editor.webp","alt":"Notion Page Content and Banners Editor"},{"itemImageSrc":"/img/projects/furniture-landing-page/admin-vip-leads.webp","alt":"Real-time VIP Leads and Inquiries Pipeline"}]
  video: "https://youtu.be/55QSJ9nAheI"
  features: [{"text":"Dynamic DB Auto-Discovery: Automatically maps database schema by scanning titles in your Notion page."},{"text":"Interactive Visual Lookbook: Map coordinates visually to direct catalog items with hoverable pricing tags."},{"text":"Admin Hotspot Mapper: An intuitive admin panel overlay that lets users click images to place product hotspots."},{"text":"Full Content Customization: Edit hero headlines, team members, contact coordinates, and styles from Notion."},{"text":"VIP Leads Pipeline: Form submissions and WhatsApp click logs are stored directly back into Notion."}]
  perspective: {"executive":"Transforms Notion from a simple productivity workspace into a high-performance, headless catalog CMS. It empowers showroom owners and marketers to publish new collections, update pricing, map lookbooks, and capture leads with zero code and zero maintenance overhead.","technical":"Features a dynamic Vue 3 component architecture driven by Notion database schemas. Integrates Netlify Serverless Functions as a secure API bridge, Netlify Blobs for persistent image asset uploads, and Pinia for reactive global state management. Includes local caching of database schemas to prevent rate limits."}
  details: "## Engineering Architecture: Notion-Powered Headless Commerce\n\nThe Premium Furniture Landing Page & Catalog (Livwood) represents a highly optimized implementation of a **Headless CMS eCommerce Architecture**. By leveraging Notion as a database backend and Netlify serverless functions as a secure middleware layer, it provides a cost-effective, zero-maintenance admin interface for client showrooms.\n\n### 1. Architectural Overview (Layman's Perspective)\nThink of this system as a **Self-Updating Storefront**. Normally, updating a catalog or mapping interactive price tags requires database administration or code deployments. \n\nWith this architecture, showroom managers simply use Notion—a tool they already use for daily tasks—to add products, edit copy, or look at customer inquiries. The website automatically detects these changes, maps product pins onto showroom images, and streams lead data back to Notion. The store virtually runs itself without any custom database hosting costs.\n\n### 2. Technical Data Flow & Infrastructure\nThe system uses a decoupled three-tier structure that connects the client frontend, serverless API gateway, and Notion headless CMS.\n\n```mermaid\ngraph TD\n    subgraph \"1. Storefront (What Users See)\"\n        Router[Page Navigator]\n        Pages[Store Pages: Home, Lookbook, Catalog, Admin]\n        Stores[Data Sync Engine]\n        UI[Design & UI Components]\n        AdminPanel[Admin Dashboard & Photo Pinning Tool]\n    end\n\n    subgraph \"2. Smart Bridge (Behind the Scenes)\"\n        NotionCRUD[Notion Database Connector]\n        UploadFile[Image Upload Handler]\n        SubmitContact[Customer Contact Gateway]\n        VerifyAdmin[Security Checker]\n    end\n\n    subgraph \"3. Admin Cabinet (Where Data Lives)\"\n        ProductsDB[(Products Database - Notion)]\n        PagesDB[(Copy & Content Database - Notion)]\n        LookbookDB[(Lookbooks Database - Notion)]\n        LeadsDB[(Inquiries Database - Notion)]\n        NetlifyBlobs[(Asset Files Storage - Netlify)]\n    end\n\n    %% Relationships\n    Router --> Pages\n    Pages --> Stores\n    Pages --> UI\n    Pages --> AdminPanel\n    \n    Stores --> NotionCRUD\n    Stores --> SubmitContact\n    Stores --> VerifyAdmin\n    AdminPanel --> UploadFile\n    \n    NotionCRUD --> ProductsDB\n    NotionCRUD --> PagesDB\n    NotionCRUD --> LookbookDB\n    SubmitContact --> LeadsDB\n    UploadFile --> NetlifyBlobs\n    \n    %% Spacer links to force vertical alignment\n    UI ~~~ NotionCRUD\n    VerifyAdmin ~~~ LeadsDB\n```\n\n### 3. Key Engineering Pillars\n\n#### A. Dynamic DB Auto-Discovery\nUnlike standard implementations requiring hardcoded database IDs in environment variables, the backend features a **dynamic schema resolver**. By passing a single parent page ID, the Netlify Functions query the parent page blocks to auto-discover child inline databases based on semantic keyword matching (`product`, `lookbook`, `page`, `lead`). This makes workspace setup trivial and permits seamless schema versioning.\n\n#### B. Interactive Hotspot Mapper (HTML5 Canvas)\nTo solve the friction of mapping coordinates on high-resolution photos, the admin panel embeds an interactive canvas.\n- **Coordinate Normalization**: Translates raw client-side click events into percentage-based `(x, y)` coordinates relative to the image aspect ratio.\n- **Relational Mapping**: Associated products are linked using Notion's relation property types, allowing the frontend lookbook to dynamically fetch live pricing, descriptions, and slugs.\n- **Dynamic CSS Tooltips**: Mapped percentages are rendered on the frontend using responsive tooltips that scale cleanly across mobile and desktop.\n\n#### C. Serverless Security & Gateway Proxy\nNetlify Serverless Functions serve as a proxy layer to ensure security and performance:\n- **Token Obfuscation**: Hides Notion API integration tokens and reCAPTCHA private keys from client-side network inspectors.\n- **API Rate Limiting & Verification**: Protects lead ingestion endpoints with server-side Google reCAPTCHA v2 verification and request rate limiters to prevent bot spam.\n- **Data Sanitization**: Normalizes Notion rich-text outputs and sanitizes customer inputs before writing back to the databases to prevent XSS.\n\n#### D. Image Pipeline & Netlify Blobs Ingestion\nBecause Notion's file hosting limits external API write operations, we engineered a custom file-upload pipeline:\n- **Blobs Ingestion**: The admin panel uses serverless handlers to ingest image assets directly into Netlify Blobs storage.\n- **URL Synchronization**: The returned public asset URLs are stored in the Notion database properties, bypassing upload restrictions and ensuring high availability.\n\n### 4. Strategic Business Value (ROI)\n- **Zero Database Infrastructure Cost**: Replaces expensive database clusters (PostgreSQL/MongoDB) with Notion, running completely on free tier serverless nodes.\n- **Empowered Non-Technical Teams**: Showroom owners edit catalogs, homepage headlines, and lookbooks without needing a developer or a CMS dashboard license (e.g. Contentful/Sanity).\n- **Consolidated CRM Operations**: Bypasses the need for third-party CRM tools by logging leads directly into Notion, keeping business ops centralized.\n"
  previousProject: null
  nextProject: {"name":"AI Dynamic CRUD App","link":"/web-development-projects/ai-dynamic-crud-app/"}
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

## Engineering Architecture: Notion-Powered Headless Commerce

The Premium Furniture Landing Page & Catalog (Livwood) represents a highly optimized implementation of a **Headless CMS eCommerce Architecture**. By leveraging Notion as a database backend and Netlify serverless functions as a secure middleware layer, it provides a cost-effective, zero-maintenance admin interface for client showrooms.

### 1. Architectural Overview (Layman's Perspective)
Think of this system as a **Self-Updating Storefront**. Normally, updating a catalog or mapping interactive price tags requires database administration or code deployments. 

With this architecture, showroom managers simply use Notion—a tool they already use for daily tasks—to add products, edit copy, or look at customer inquiries. The website automatically detects these changes, maps product pins onto showroom images, and streams lead data back to Notion. The store virtually runs itself without any custom database hosting costs.

### 2. Technical Data Flow & Infrastructure
The system uses a decoupled three-tier structure that connects the client frontend, serverless API gateway, and Notion headless CMS.

```mermaid
graph TD
    subgraph "1. Storefront (What Users See)"
        Router[Page Navigator]
        Pages[Store Pages: Home, Lookbook, Catalog, Admin]
        Stores[Data Sync Engine]
        UI[Design & UI Components]
        AdminPanel[Admin Dashboard & Photo Pinning Tool]
    end

    subgraph "2. Smart Bridge (Behind the Scenes)"
        NotionCRUD[Notion Database Connector]
        UploadFile[Image Upload Handler]
        SubmitContact[Customer Contact Gateway]
        VerifyAdmin[Security Checker]
    end

    subgraph "3. Admin Cabinet (Where Data Lives)"
        ProductsDB[(Products Database - Notion)]
        PagesDB[(Copy & Content Database - Notion)]
        LookbookDB[(Lookbooks Database - Notion)]
        LeadsDB[(Inquiries Database - Notion)]
        NetlifyBlobs[(Asset Files Storage - Netlify)]
    end

    %% Relationships
    Router --> Pages
    Pages --> Stores
    Pages --> UI
    Pages --> AdminPanel
    
    Stores --> NotionCRUD
    Stores --> SubmitContact
    Stores --> VerifyAdmin
    AdminPanel --> UploadFile
    
    NotionCRUD --> ProductsDB
    NotionCRUD --> PagesDB
    NotionCRUD --> LookbookDB
    SubmitContact --> LeadsDB
    UploadFile --> NetlifyBlobs
    
    %% Spacer links to force vertical alignment
    UI ~~~ NotionCRUD
    VerifyAdmin ~~~ LeadsDB
```

### 3. Key Engineering Pillars

#### A. Dynamic DB Auto-Discovery
Unlike standard implementations requiring hardcoded database IDs in environment variables, the backend features a **dynamic schema resolver**. By passing a single parent page ID, the Netlify Functions query the parent page blocks to auto-discover child inline databases based on semantic keyword matching (`product`, `lookbook`, `page`, `lead`). This makes workspace setup trivial and permits seamless schema versioning.

#### B. Interactive Hotspot Mapper (HTML5 Canvas)
To solve the friction of mapping coordinates on high-resolution photos, the admin panel embeds an interactive canvas.
- **Coordinate Normalization**: Translates raw client-side click events into percentage-based `(x, y)` coordinates relative to the image aspect ratio.
- **Relational Mapping**: Associated products are linked using Notion's relation property types, allowing the frontend lookbook to dynamically fetch live pricing, descriptions, and slugs.
- **Dynamic CSS Tooltips**: Mapped percentages are rendered on the frontend using responsive tooltips that scale cleanly across mobile and desktop.

#### C. Serverless Security & Gateway Proxy
Netlify Serverless Functions serve as a proxy layer to ensure security and performance:
- **Token Obfuscation**: Hides Notion API integration tokens and reCAPTCHA private keys from client-side network inspectors.
- **API Rate Limiting & Verification**: Protects lead ingestion endpoints with server-side Google reCAPTCHA v2 verification and request rate limiters to prevent bot spam.
- **Data Sanitization**: Normalizes Notion rich-text outputs and sanitizes customer inputs before writing back to the databases to prevent XSS.

#### D. Image Pipeline & Netlify Blobs Ingestion
Because Notion's file hosting limits external API write operations, we engineered a custom file-upload pipeline:
- **Blobs Ingestion**: The admin panel uses serverless handlers to ingest image assets directly into Netlify Blobs storage.
- **URL Synchronization**: The returned public asset URLs are stored in the Notion database properties, bypassing upload restrictions and ensuring high availability.

### 4. Strategic Business Value (ROI)
- **Zero Database Infrastructure Cost**: Replaces expensive database clusters (PostgreSQL/MongoDB) with Notion, running completely on free tier serverless nodes.
- **Empowered Non-Technical Teams**: Showroom owners edit catalogs, homepage headlines, and lookbooks without needing a developer or a CMS dashboard license (e.g. Contentful/Sanity).
- **Consolidated CRM Operations**: Bypasses the need for third-party CRM tools by logging leads directly into Notion, keeping business ops centralized.


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