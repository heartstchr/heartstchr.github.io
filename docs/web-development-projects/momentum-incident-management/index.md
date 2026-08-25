---
title: "Incident Management Software"
description: "A structured process for identifying, analyzing, and resolving incidents that disrupt your operations — with clear workflows and post-incident review."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Momentum Incident Management"
  description: "A structured process for identifying, analyzing, and resolving incidents that disrupt an organization's operations"
  software: "Web"
  schema: "https://schema.org/BusinessApplication"
  domain: "IT Service"
  year: "2025"
  category: "Enterprise"
  price: 0
  currency: USD
  link: "https://momentum-chi-brown.vercel.app/"
  codeLink: 
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20"
  stack: ["vuedotjs","PrimeVue","vite/black/white","tailwindcss","nodedotjs","express/black/white","pnpm","swagger","mongodb","vercel/black/white","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/home/projects/momentum_incident_management.webp","alt":"Incident Management"},{"itemImageSrc":"/img/projects/momentum/swagger.webp","alt":"Momentum Incident Management - Swagger API documentation"},{"itemImageSrc":"/img/projects/momentum/expanded_incident.webp","alt":"Momentum Incident Management - Expanded incident view"},{"itemImageSrc":"/img/projects/momentum/sorting_searching.webp","alt":"Momentum Incident Management - Sorting and searching functionality"},{"itemImageSrc":"/img/projects/momentum/download_incidents.webp","alt":"Momentum Incident Management - Download incidents feature"},{"itemImageSrc":"/img/projects/momentum/incident_notes_task.webp","alt":"Momentum Incident Management - Incident notes and task management"},{"itemImageSrc":"/img/projects/momentum/edit_notes.webp","alt":"Momentum Incident Management - Edit notes functionality"},{"itemImageSrc":"/img/projects/momentum/view_notes.webp","alt":"Momentum Incident Management - View notes interface"},{"itemImageSrc":"/img/projects/momentum/edit_task.webp","alt":"Momentum Incident Management - Edit task functionality"},{"itemImageSrc":"/img/projects/momentum/edit_incident.webp","alt":"Momentum Incident Management - Edit incident interface"},{"itemImageSrc":"/img/projects/momentum/login.webp","alt":"Momentum Incident Management - Login page"},{"itemImageSrc":"/img/projects/momentum/register.webp","alt":"Momentum Incident Management - Registration page"}]
  video: ""
  features: [{"text":"No More Clunky UI – Nested tables & column-based filtering (text, date, select) make incident tracking effortless."},{"text":"Nested CRUD for Incidents & Tasks – Create, update, and manage tasks seamlessly, with an option to add notes."},{"text":"Choose & Create CIs – Define and manage configuration items with ease."},{"text":"Automate with Swagger APIs – Ready for CI/CD pipelines, making integrations a breeze."},{"text":"Seamless Deployment – Frontend & backend deployed on Vercel for high performance."},{"text":"MongoDB Seeding – Easily set up initial data for a smooth start."},{"text":"Swagger Documentation – <a href='https://momentum-chi-brown.vercel.app/api-docs' target='_blank'>Well-documented APIs</a> for easy collaboration and scaling."},{"text":"No Costly Subscriptions – A powerful alternative to expensive service management platforms"}]
  perspective: {"executive":"","technical":""}
  details: "## Engineering Architecture: Enterprise Incident Management Engine\n\nMomentum is a high-performance **Full-Stack ITSM (IT Service Management) platform** designed to replicate the core functionality of enterprise tools like ServiceNow without the associated bloat. It demonstrates a sophisticated **Incident-to-Resolution Lifecycle** powered by a robust role-based workflow engine.\n\n### 1. The Operations Engine (Layman's Perspective)\nThink of Momentum as an **Automated Digital Dispatcher**. \n\nIn a busy office, when something breaks (an \"Incident\"), you normally have to call around, send emails, and hope someone fixes it. This platform acts as the \"Dispatcher\" who takes the call, instantly categorizes the problem, assigns it to the right \"Repair Team\" (based on their role), and tracks every step until the job is done. It ensures that nothing falls through the cracks and provides a \"Master Dashboard\" for management to see exactly how the office is performing in real-time.\n\n### 2. Technical Architecture & Incident Lifecycle\nThe system utilizes a modern Monorepo architecture, bridging a Vue 3/PrimeVue frontend with a secure Node.js/MongoDB backend.\n\n```mermaid\ngraph TD\n    subgraph \"Intake & Identification\"\n        User[End User] --> TicketForm[Incident Submission]\n        TicketForm --> Auth[JWT Role Validation]\n    end\n\n    subgraph \"Workflow Orchestration (Server)\"\n        Auth --> StateEngine[Incident State Machine]\n        StateEngine --> CI[Configuration Item Linkage]\n        CI --> Assign[Automatic Team Assignment]\n    end\n\n    subgraph \"Resolution & Management\"\n        Assign --> Task[Task Breakdown]\n        Task --> Collaboration[Rich Text & File Attachments]\n        Collaboration --> Resolve[Resolution & Closure]\n    end\n\n    subgraph \"Governance & Reporting\"\n        Resolve --> Audit[Full Audit Trail]\n        Audit --> Export[Excel/XLSX Reporting]\n        Admin[Admin Dashboard] --> Audit\n    end\n```\n\n### 3. Key Engineering Pillars\n\n#### A. State-Driven Workflow Automation\nThe core of Momentum is a strictly defined **Incident State Machine**. \n- **Deterministic Transitions:** Every ticket follows a validated path (e.g., New -> Assigned -> In Progress -> Resolved). The system prevents \"illegal\" state jumps, ensuring data integrity for operational audits.\n- **Role-Based Visibility:** Using Vue 3 and Pinia, the UI dynamically reconfigures itself based on the user's role. An \"End User\" sees a simplified submission form, while an \"Operations Engineer\" sees a complex management console.\n\n#### B. The \"Lighter ServiceNow\" Pattern\nWe architected the system to prioritize **Developer Velocity** and **Runtime Performance**.\n- **PrimeVue Component Architecture:** By leveraging enterprise-grade components, we delivered a \"ServiceNow-like\" UX in a fraction of the time, focusing our engineering effort on the business logic rather than the UI primitives.\n- **Decoupled API Design:** The backend is built as a RESTful API with full Swagger documentation, allowing for future integrations with third-party automation tools or custom Slack/Teams bots.\n\n#### C. Integrated Configuration Management (CMDB)\nUnlike simple task lists, Momentum includes a lightweight **Configuration Item (CI) Model**.\n- **Asset Linkage:** Incidents are linked to specific IT assets (Servers, Software, Hardware). This allows for \"Impact Analysis\"—identifying how a single server failure might affect multiple business services.\n\n### 4. Strategic Business Value (ROI)\n- **Enterprise Capabilities, Startup Speed:** Provides the structure of an enterprise ITSM tool with the agility of a custom-built solution.\n- **Operational Transparency:** Replaces fragmented emails and spreadsheets with a single, searchable \"Source of Truth\" for all business operations.\n- **Cost Efficiency:** Eliminates the high licensing fees of enterprise platforms while providing a system that is 100% tailored to the company's specific workflows.\n\nMomentum proves that **Targeted Product Architecture** can outperform generic enterprise software by focusing on the specific operational needs of the business.\n"
  previousProject: {"name":"SR-22 Insurance Now","link":"/web-development-projects/sr-22-insurance-now/"}
  nextProject: {"name":"Marketplace Booking Platform","link":"/web-development-projects/marketplace-booking-platform/"}
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

## Engineering Architecture: Enterprise Incident Management Engine

Momentum is a high-performance **Full-Stack ITSM (IT Service Management) platform** designed to replicate the core functionality of enterprise tools like ServiceNow without the associated bloat. It demonstrates a sophisticated **Incident-to-Resolution Lifecycle** powered by a robust role-based workflow engine.

### 1. The Operations Engine (Layman's Perspective)
Think of Momentum as an **Automated Digital Dispatcher**. 

In a busy office, when something breaks (an "Incident"), you normally have to call around, send emails, and hope someone fixes it. This platform acts as the "Dispatcher" who takes the call, instantly categorizes the problem, assigns it to the right "Repair Team" (based on their role), and tracks every step until the job is done. It ensures that nothing falls through the cracks and provides a "Master Dashboard" for management to see exactly how the office is performing in real-time.

### 2. Technical Architecture & Incident Lifecycle
The system utilizes a modern Monorepo architecture, bridging a Vue 3/PrimeVue frontend with a secure Node.js/MongoDB backend.

```mermaid
graph TD
    subgraph "Intake & Identification"
        User[End User] --> TicketForm[Incident Submission]
        TicketForm --> Auth[JWT Role Validation]
    end

    subgraph "Workflow Orchestration (Server)"
        Auth --> StateEngine[Incident State Machine]
        StateEngine --> CI[Configuration Item Linkage]
        CI --> Assign[Automatic Team Assignment]
    end

    subgraph "Resolution & Management"
        Assign --> Task[Task Breakdown]
        Task --> Collaboration[Rich Text & File Attachments]
        Collaboration --> Resolve[Resolution & Closure]
    end

    subgraph "Governance & Reporting"
        Resolve --> Audit[Full Audit Trail]
        Audit --> Export[Excel/XLSX Reporting]
        Admin[Admin Dashboard] --> Audit
    end
```

### 3. Key Engineering Pillars

#### A. State-Driven Workflow Automation
The core of Momentum is a strictly defined **Incident State Machine**. 
- **Deterministic Transitions:** Every ticket follows a validated path (e.g., New -> Assigned -> In Progress -> Resolved). The system prevents "illegal" state jumps, ensuring data integrity for operational audits.
- **Role-Based Visibility:** Using Vue 3 and Pinia, the UI dynamically reconfigures itself based on the user's role. An "End User" sees a simplified submission form, while an "Operations Engineer" sees a complex management console.

#### B. The "Lighter ServiceNow" Pattern
We architected the system to prioritize **Developer Velocity** and **Runtime Performance**.
- **PrimeVue Component Architecture:** By leveraging enterprise-grade components, we delivered a "ServiceNow-like" UX in a fraction of the time, focusing our engineering effort on the business logic rather than the UI primitives.
- **Decoupled API Design:** The backend is built as a RESTful API with full Swagger documentation, allowing for future integrations with third-party automation tools or custom Slack/Teams bots.

#### C. Integrated Configuration Management (CMDB)
Unlike simple task lists, Momentum includes a lightweight **Configuration Item (CI) Model**.
- **Asset Linkage:** Incidents are linked to specific IT assets (Servers, Software, Hardware). This allows for "Impact Analysis"—identifying how a single server failure might affect multiple business services.

### 4. Strategic Business Value (ROI)
- **Enterprise Capabilities, Startup Speed:** Provides the structure of an enterprise ITSM tool with the agility of a custom-built solution.
- **Operational Transparency:** Replaces fragmented emails and spreadsheets with a single, searchable "Source of Truth" for all business operations.
- **Cost Efficiency:** Eliminates the high licensing fees of enterprise platforms while providing a system that is 100% tailored to the company's specific workflows.

Momentum proves that **Targeted Product Architecture** can outperform generic enterprise software by focusing on the specific operational needs of the business.


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