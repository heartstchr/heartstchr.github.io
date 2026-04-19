---
home: true
title: High-Performance Digital Product Engineering
description: "Freelance Full-Stack Developer available for hire. I build high-performance web platforms — from programmatic SEO engines to custom SaaS dashboards. React, Next.js & Node.js expert."
editLink: false
copyright: false
---

<section class="hero-newage relative overflow-hidden p-4 md:p-6 surface-0">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="grid align-items-center">
    <div class="col-12 lg:col-8">
      <div class="mb-3 flex align-items-center gap-2">
        <span class="inline-flex align-items-center px-2 py-1 border-round-xl bg-primary text-xs font-bold uppercase letter-spacing-wide">
          <i class="pi pi-bolt mr-1"></i> 10 Years of Enterprise-Grade Architecture
        </span>
      </div>
      <h1 class="m-0 p-0 line-height-2 text-4xl md:text-7xl font-bold">
        I engineer products that <span class="text-gradient">shatter performance</span> bottlenecks and <span class="text-gradient-2">force growth</span>.
      </h1>
      <div class="text-xl md:text-2xl mt-4 line-height-3 text-700">
        From migrating global banking infra for **ABN AMRO** to reducing lead turnaround from **4 days to 2 hours** for **Upstox**. I build the high-integrity architecture that powers your next 6 months of growth.
      </div>
      <div class="flex flex-column md:flex-row gap-3 mt-5">
        <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
          <Button label="Book a Free Discovery Call" icon="pi pi-calendar-clock" severity="primary" size="large" rounded raised class="w-full md:w-auto" />
        </a>
        <a href="#solutions" class="no-underline">
          <Button label="Explore My Solutions" icon="pi pi-arrow-down" class="p-button-outlined p-button-secondary w-full md:w-auto" size="large" rounded />
        </a>
      </div>
      <div class="mt-5 grid gap-3 ml-1">
        <div class="flex align-items-center gap-3">
          <i class="pi pi-check-circle text-green-500"></i>
          <span class="text-sm md:text-base">Modern Tech Stack (Next.js, React, Node)</span>
        </div>
        <div class="flex align-items-center gap-3">
          <i class="pi pi-check-circle text-green-500"></i>
          <span class="text-sm md:text-base">Built for Scale and Speed</span>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-4 mt-6 lg:mt-0 hidden lg:block">
      <div class="relative hero-visual border-round-2xl overflow-hidden p-4 text-center glass-effect">
        <Carousel :value="heroSlides" :numVisible="1" :numScroll="1" :autoplayInterval="5000" circular>
            <template #item="slotProps">
                <div class="p-2">
                    <img :src="slotProps.data.image" :alt="slotProps.data.alt" class="w-full border-round-2xl shadow-4 mb-3" />
                    <div class="font-bold text-lg text-900">{{ slotProps.data.title }}</div>
                    <div class="text-sm text-600">{{ slotProps.data.subtitle }}</div>
                </div>
            </template>
        </Carousel>
      </div>
    </div>
  </div>
</section>

<!-- Trusted By Marquee -->
<div class="mb-8 mt-4">
  <div class="text-center font-bold text-500 mb-3 text-sm uppercase letter-spacing-wide opacity-60">Verified Technical Partnerships</div>
  <div class="marquee">
    <div class="marquee-track">
      <div class="marquee-item flex align-items-center gap-2" v-for="org in orgs" :key="`org-1-${org.title}`">
            <img :src="org.icon" :alt="org.title" width="32px" height="32px" class="border-round-md grayscale-filter" loading="lazy" fetchpriority="low"/>
            <span class="text-xl font-bold text-500">{{org.title}}</span>
      </div>
      <div class="marquee-item flex align-items-center gap-2" v-for="org in orgs" :key="`org-2-${org.title}`" aria-hidden="true">
            <img :src="org.icon" :alt="org.title" width="32px" height="32px" class="border-round-md grayscale-filter" loading="lazy" fetchpriority="low"/>
            <span class="text-xl font-bold text-500">{{org.title}}</span>
      </div>
    </div>
  </div>
</div>

<!-- High Impact Metrics -->
<div class="mb-8 px-2 md:px-4" style="max-width: 1200px; margin: 0 auto;">
  <div class="grid">
    <div class="col-12 md:col-4 p-2 md:p-3" v-for="win in highImpactWins" :key="win.title">
      <div class="surface-0 p-4 border-round-xl shadow-2 h-full border-top-3" :class="[`border-${win.color}-500`]">
        <div class="flex align-items-center justify-content-between mb-3">
          <span class="text-sm font-bold uppercase text-500">{{win.title}}</span>
          <i class="pi" :class="[win.icon, `text-${win.color}-500`]"></i>
        </div>
        <div class="text-3xl font-bold mb-2">{{win.metric}}</div>
        <p class="text-700 line-height-3 m-0" v-html="win.description"></p>
      </div>
    </div>
  </div>
</div>

<div class="mb-8 px-2 md:px-4 py-6 md:py-8 surface-50 border-round-3xl" style="max-width: 1200px; margin: 0 auto;">
  <div class="text-center mb-6">
    <h2 class="text-3xl md:text-5xl font-bold line-height-2 m-0 p-0 mb-3">Which bottleneck is holding you back?</h2>
    <p class="text-lg md:text-xl text-600 max-w-30rem mx-auto">I engineer specialized solutions that break through your company's deepest technical challenges.</p>
  </div>
  
  <div class="grid">
    <div class="col-12 md:col-6 p-3">
      <div class="surface-0 p-4 border-round-xl shadow-2 h-full border-top-3 border-green-500">
        <div class="bg-green-100 text-green-600 border-circle w-3rem h-3rem flex align-items-center justify-content-center mb-4"><i class="pi pi-sparkles text-xl"></i></div>
        <h3 class="m-0 mb-3 font-bold text-xl">The Intelligence Problem</h3>
        <p class="text-700 line-height-3">You are spending hundreds of hours on manual content creation or matching processes. You need custom AI integration (like Gemini/OpenAI interfaces) to automate intelligence safely within your own app.</p>
      </div>
    </div>
    <div class="col-12 md:col-6 p-3">
      <div class="surface-0 p-4 border-round-xl shadow-2 h-full border-top-3 border-purple-500">
        <div class="bg-purple-100 text-purple-600 border-circle w-3rem h-3rem flex align-items-center justify-content-center mb-4"><i class="pi pi-code text-xl"></i></div>
        <h3 class="m-0 mb-3 font-bold text-xl">The Scale Problem</h3>
        <p class="text-700 line-height-3">You need to launch a complex SaaS MVP, or your legacy application is crumbling under traffic. You require flawless UI/UX, robust backend architecture, and high-concurrency capability.</p>
      </div>
    </div>
    <div class="col-12 md:col-6 p-3">
      <div class="surface-0 p-4 border-round-xl shadow-2 h-full border-top-3 border-orange-500">
        <div class="bg-orange-100 text-orange-600 border-circle w-3rem h-3rem flex align-items-center justify-content-center mb-4"><i class="pi pi-users text-xl"></i></div>
        <h3 class="m-0 mb-3 font-bold text-xl">The Traffic Problem</h3>
        <p class="text-700 line-height-3">Manual SEO doesn't scale. You need thousands of lightning-fast, dynamically generated pages to capture long-tail local search traffic natively, but standard CMS platforms buckle under the weight.</p>
      </div>
    </div>
    <div class="col-12 md:col-6 p-3">
      <div class="surface-0 p-4 border-round-xl shadow-2 h-full border-top-3 border-blue-500">
        <div class="bg-blue-100 text-blue-600 border-circle w-3rem h-3rem flex align-items-center justify-content-center mb-4"><i class="pi pi-database text-xl"></i></div>
        <h3 class="m-0 mb-3 font-bold text-xl">The Operational Problem</h3>
        <p class="text-700 line-height-3">Your team is drowning in manual data entry. Your data is stuck in Notion or Spreadsheets, and building a custom portal from scratch seems too expensive and time-consuming.</p>
      </div>
    </div>
  </div>
</div>

<!-- Solutions & Case Studies -->
<div id="solutions" class="mb-8">
  <div class="text-center pb-6">
    <h2 class="text-4xl font-bold mb-2">My Engineering Pillars</h2>
    <p class="text-xl text-600">Proven architectures deployed for real businesses.</p>
  </div>

  <!-- Pillar 1 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1">
    <div class="col-12 lg:col-5">
      <h3 class="text-sm font-bold uppercase text-green-500 letter-spacing-wide mb-2"><i class="pi pi-sparkles mr-1"></i> Pillar 1</h3>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-0">AI & Machine Learning Apps</h2>
      <p class="text-lg line-height-3 text-700 mb-4">Integrate Large Language Models (LLMs) deeply into your user experience. I build custom applications featuring AI-powered matching algorithms, text-to-speech generators, and native intelligence that saves thousands of manual hours.</p>
      <ul class="list-none p-0 m-0 mb-5 text-700">
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Advanced Matching Algorithms</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Gemini / OpenAI API Integrations</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Prompt Engineering & Context</li>
      </ul>
    </div>
    <div class="col-12 lg:col-7">
      <div class="grid">
        <div class="col-6 p-2">
          <a href="/web-development-projects/ai-dynamic-crud-app/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/ai-dynamic-crud-app/ai-webapp-english.png" alt="AI Dynamic CRUD App" class="w-full h-10rem md:h-12rem object-cover" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">AI Dynamic CRUD</div>
          </a>
        </div>
        <div class="col-6 p-2">
          <a href="/web-development-projects/ai-voice-generator/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/ai-narrator/Google-docs-text-to-speech-ai-voice-ai-audio.webp" alt="AI Voice Generator" class="w-full h-10rem md:h-12rem object-cover" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">AI Voice Generator</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pillar 2 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1 flex-column lg:flex-row-reverse">
    <div class="col-12 lg:col-5">
      <h3 class="text-sm font-bold uppercase text-purple-500 letter-spacing-wide mb-2"><i class="pi pi-code mr-1"></i> Pillar 2</h3>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-0">Custom SaaS & Enterprise Apps</h2>
      <p class="text-lg line-height-3 text-700 mb-4">Sophisticated web applications designed for scale. From highly complex banking portal migrations to high-concurrency dashboards, I architect React/Node systems that will never slow down.</p>
      <ul class="list-none p-0 m-0 mb-5 text-700">
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Complex State Management</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Legacy Cloud Migrations</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> High-Concurrency Microservices</li>
      </ul>
    </div>
    <div class="col-12 lg:col-7">
      <div class="grid">
        <div class="col-6 p-2">
          <a href="/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/ABN_Amro.webp" alt="ABN AMRO Migration" class="w-full h-10rem md:h-12rem object-cover" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">ABN AMRO Enterprise</div>
          </a>
        </div>
        <div class="col-6 p-2">
          <a href="/web-development-projects/momentum/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/momentum_incident_management.webp" alt="Momentum" class="w-full h-10rem md:h-12rem object-cover" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">Momentum Incident Mgmt</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pillar 3 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1">
    <div class="col-12 lg:col-5">
      <h3 class="text-sm font-bold uppercase text-orange-500 letter-spacing-wide mb-2"><i class="pi pi-chart-line mr-1"></i> Pillar 3</h3>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-0">Programmatic SEO & Lead Gen</h2>
      <p class="text-lg line-height-3 text-700 mb-4">I build massive, database-driven directory platforms. Automatically generate thousands of highly optimized location and service pages that dominate organic search and convert traffic via dynamic lead capture.</p>
      <ul class="list-none p-0 m-0 mb-5 text-700">
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Next.js Server-Side Rendering</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Google Places Data Integration</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Dynamic Routing (State > City > ZIP)</li>
      </ul>
    </div>
    <div class="col-12 lg:col-7">
      <div class="grid">
        <div class="col-6 p-2">
          <a href="/web-development-projects/local-home-services-pros/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/localxr/localxr-cover.png" alt="LocalXR" class="w-full h-10rem md:h-12rem object-cover" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">LocalXR Directory</div>
          </a>
        </div>
        <div class="col-6 p-2">
          <a href="/web-development-projects/appliance-repair-service-platform/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/appliance_repair_cover.webp" alt="Appliance Repair" class="w-full h-10rem md:h-12rem object-cover" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">Appliance Repair Platform</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pillar 4 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1 flex-column lg:flex-row-reverse">
    <div class="col-12 lg:col-5">
      <h3 class="text-sm font-bold uppercase text-blue-500 letter-spacing-wide mb-2"><i class="pi pi-sync mr-1"></i> Pillar 4</h3>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-0">Internal Tooling & Portals</h2>
      <p class="text-lg line-height-3 text-700 mb-4">I turn your existing systems (Notion databases, spreadsheets) into full-fledged, professional web applications instantly. Automate workflows, capture leads securely, without waiting months for a backend build.</p>
      <ul class="list-none p-0 m-0 mb-5 text-700">
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Notion-to-Web Architecture</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Dynamic Form Generators</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Automated Email & Sync Workflows</li>
      </ul>
    </div>
    <div class="col-12 lg:col-7">
      <div class="grid">
        <div class="col-6 p-2">
          <a href="/web-development-projects/notion-crud/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/notion-crud-app/Notion-crud-app-free.webp" alt="Notion CRUD" class="w-full h-10rem md:h-12rem object-cover" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">Dynamic CRUD App</div>
          </a>
        </div>
        <div class="col-6 p-2">
          <a href="/web-development-projects/service-request/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/notion_service_request.webp" alt="Service Request" class="w-full h-10rem md:h-12rem object-cover" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">Service Request Portal</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="text-center mt-6">
     <a href="/web-development-projects/" class="text-primary font-bold text-lg no-underline hover:underline">View the complete project portfolio ></a>
  </div>
</div>

<!-- Pricing Tiers / Fixed Packages -->
<div class="mb-8 text-center" id="pricing">
  <h2 class="text-3xl md:text-4xl font-bold mb-2">Clear Plans. Rapid Deployment.</h2>
  <p class="text-lg md:text-xl text-600 mb-6">Choose a service package tailored to your exact business needs.</p>
  
  <div class="grid justify-content-center">
    <!-- Tier 1: Machine Learning (POPULAR) -->
    <div class="col-12 lg:col-3 md:col-6 p-2">
      <div class="surface-0 border-round-2xl shadow-6 p-5 h-full flex flex-column text-left relative overflow-hidden border-2 border-primary">
        <div class="absolute top-0 right-0 bg-primary text-900 text-xs font-bold px-2 py-1 border-round-bottom-left-md">POPULAR</div>
        <div class="text-xl font-bold text-primary mb-2">Machine Learning</div>
        <div class="text-2xl font-bold mb-4">AI Feature Integration</div>
        <p class="text-sm line-height-3 mb-5 flex-grow-1">Embed LLMs and matching algorithms natively into your application to save manual hours.</p>
        <a href="https://cal.com/stackseekers" class="w-full line-height-1">
          <Button label="Discuss AI Strategy" class="w-full" size="small"/>
        </a>
      </div>
    </div>
    <!-- Tier 2: Enterprise Software -->
    <div class="col-12 lg:col-3 md:col-6 p-2">
      <div class="surface-0 border-round-2xl shadow-2 p-5 h-full flex flex-column text-left hover:shadow-4 transition-all border-1 border-200">
        <div class="text-xl font-bold text-600 mb-2">Enterprise Software</div>
        <div class="text-2xl font-bold mb-4">SaaS MVP & Platform Build</div>
        <p class="text-sm line-height-3 mb-5 flex-grow-1">End-to-end development of robust business platforms starting from ideation to launch.</p>
        <a href="https://cal.com/stackseekers" class="w-full line-height-1">
          <Button label="Start MVP Scope" class="w-full p-button-outlined" size="small"/>
        </a>
      </div>
    </div>
    <!-- Tier 3: Scalable SEO -->
    <div class="col-12 lg:col-3 md:col-6 p-2">
      <div class="surface-0 border-round-2xl shadow-2 p-5 h-full flex flex-column text-left hover:shadow-4 transition-all border-1 border-200">
        <div class="text-xl font-bold text-600 mb-2">Scalable SEO</div>
        <div class="text-2xl font-bold mb-4">Programmatic Growth Engine</div>
        <p class="text-sm line-height-3 mb-5 flex-grow-1">A highly optimized directory framework to dominate local SEO and capture massive traffic.</p>
        <a href="https://cal.com/stackseekers" class="w-full line-height-1">
          <Button label="Get a Custom Quote" class="w-full p-button-outlined" size="small" />
        </a>
      </div>
    </div>
    <!-- Tier 4: Internal Tools -->
    <div class="col-12 lg:col-3 md:col-6 p-2">
      <div class="surface-0 border-round-2xl shadow-2 p-5 h-full flex flex-column text-left hover:shadow-4 transition-all border-1 border-200">
        <div class="text-xl font-bold text-600 mb-2">Internal Tools</div>
        <div class="text-2xl font-bold mb-4">No-Code / Low-Code Custom Portal</div>
        <p class="text-sm line-height-3 mb-5 flex-grow-1">Perfect for transforming existing Notion or Airtable systems into user-facing web apps.</p>
        <a href="https://cal.com/stackseekers" class="w-full line-height-1">
          <Button label="Book a Scope Call" class="w-full p-button-outlined" size="small"/>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Testimonials -->
<div class="mb-8 py-4">
  <div class="text-center pb-4">
    <h2 class="text-4xl font-bold mb-2">Don't just take my word for it.</h2>
    <p class="text-xl text-600 line-height-2">See how partners describe the experience of building scalable digital solutions with me.</p>
  </div>
  <div class="card relative md:mx-0 -mx-4 block" @mouseenter="pauseAutoPlay" @mouseleave="resumeAutoPlay">
    <Carousel :value="testimonials" :numVisible="1" :numScroll="1" ref="carousel" :responsiveOptions="responsiveCustomerOptions" circular :page="currentPage" @page="onPageChange">
      <template #item="slotProps">
        <div class="surface-0 shadow-2 border-round-2xl p-6 md:mx-8 m-3">
          <div class="flex align-items-center mb-4 pb-4 border-bottom-1 border-200">
            <a :href="slotProps.data.link" target="_blank" class="no-underline flex align-items-center">
              <i class="pi pi-linkedin text-blue-600 text-3xl mr-3"></i>
              <div>
                <h3 class="m-0 text-xl font-bold text-900">{{ slotProps.data.name }}</h3>
                <div class="text-sm text-600 flex align-items-center mt-1">
                  <img :alt="slotProps.data.location" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.data.code.toLowerCase()} mr-2`" style="width: 20px" />
                  {{ slotProps.data.location }}
                </div>
              </div>
            </a>
          </div>
          <div class="font-italic text-lg text-700 line-height-3 relative">
            <i class="pi pi-quote-left absolute opacity-20 text-5xl" style="top: -10px; left: -20px; color: var(--primary-color)"></i>
            <span class="relative z-1">{{ slotProps.data.message }}</span>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
  <div class="text-center mt-4">
    <a href="https://www.linkedin.com/in/jiwanghosal/details/recommendations/" target="_blank" class="no-underline inline-flex align-items-center gap-2 text-primary font-bold hover:underline">
      <i class="pi pi-linkedin"></i> View all verified LinkedIn recommendations
    </a>
  </div>
</div>

<!-- FAQ -->
<div class="mb-8 surface-50 border-round-3xl p-4 md:p-6" style="max-width: 1000px; margin: 0 auto;">
  <div class="text-center pb-6">
    <h2 class="text-4xl font-bold m-0 p-0">Frequently asked <span class="text-primary">questions</span></h2>
  </div>
  <div class="flex flex-column gap-5">
    <div class="surface-0 p-4 border-round-xl shadow-1">
      <h3 class="m-0 p-0 font-bold text-xl mb-3">Q. Why do I need Programmatic SEO over regular SEO?</h3>
      <p class="m-0 text-700 line-height-3">
        Regular SEO works for a blog post. Programmatic SEO works for building massive directories or local service marketplaces. If you need to target long-tail keywords natively across 1,000 cities, you need database-driven site architecture, not standard blogging tools.
      </p>
    </div>
    <div class="surface-0 p-4 border-round-xl shadow-1">
      <h3 class="m-0 p-0 font-bold text-xl mb-3">Q. Do you handle both Frontend and Backend on custom SaaS builds?</h3>
      <p class="m-0 text-700 line-height-3">
        Yes. As a Full-Stack engineering partner, I design architecture spanning the entire stack—from React/Vue UI interfaces to Node.js Microservices, and secure database management in AWS/Azure/MongoDB.
      </p>
    </div>
    <div class="surface-0 p-4 border-round-xl shadow-1 border-left-3 border-primary">
      <h3 class="m-0 p-0 font-bold text-xl flex align-items-center"><i class="pi pi-shield mr-2 text-primary"></i> The Zero-Risk Guarantee</h3>
      <p class="m-0 text-700 line-height-3 mt-3">
        <strong>If I'm not a perfect fit after the first week of engagement, you pay absolutely nothing.</strong> I partner strictly on milestone-based or month-to-month contracts depending on the scope, so you are never locked into a bad situation.
      </p>
    </div>
  </div>
</div>

<!-- Contact CTA -->
<div class="mb-8 border-round-3xl p-6 text-center shadow-4" style="max-width: 1000px; margin: 0 auto;">
  <h2 class="text-4xl md:text-5xl font-bold m-0 mb-3 text-900">Let's solve your hardest technical bottleneck</h2>
  <p class="text-xl line-height-3 mb-5 opacity-90 mx-auto" style="max-width: 650px;">
    Stop letting manual processes or weak infrastructure hold back your company's growth. Book a call to discuss architecture and solutions.
  </p>
  <a href="https://cal.com/stackseekers" size="large" class="no-underline"> 
    <Button label="Book a Free Discovery Call" icon="pi pi-video" class="p-button-secondary bg-white text-primary text-lg font-bold px-5 py-3 border-none hover:bg-gray-100 transition-colors" raised rounded />
  </a>
  <div class="text-sm mt-4 opacity-80">No commitment. Get a technical roadmap on the call.</div>
</div>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import { orgs, testimonials, highImpactWins, heroSlides } from "@data/home.js";

  const currentPage = ref(0);
  const autoplayInterval = 6000;
  let autoplayTimer = null;

  const responsiveCustomerOptions = ref([
    { breakpoint: "1400px", numVisible: 1, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 1, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ]);

  const startAutoPlay = () => {
    autoplayTimer = setInterval(() => {
      currentPage.value = (currentPage.value + 1) % testimonials.length;
    }, autoplayInterval);
  };

  const pauseAutoPlay = () => clearInterval(autoplayTimer);
  const resumeAutoPlay = () => startAutoPlay();

  const onPageChange = (newPage) => { currentPage.value = newPage; };

  onMounted(() => { startAutoPlay(); });
  onBeforeUnmount(() => { pauseAutoPlay(); });
</script>

<style scoped>
.grayscale-filter { filter: grayscale(100%); opacity: 0.7; transition: all 0.3s ease; }
@media (hover: hover) {
  .hover-zoom img { transition: transform 0.3s ease; }
  .hover-zoom:hover img { transform: scale(1.05); }
  .grayscale-filter:hover { filter: grayscale(0%); opacity: 1; }
}
</style>
