---
home: true
title: Fractional CTO, AI Automation, and Programmatic SEO Engineering
description: "Stack Seekers helps startups and enterprise teams with fractional CTO leadership, AI automation, scalable SaaS architecture, and programmatic SEO systems built for growth."
editLink: false
copyright: false
---

<section class="hero-newage relative overflow-hidden p-4 md:p-6 surface-0">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="grid align-items-center">
    <div class="col-12 lg:col-7">
      <div class="mb-3 flex align-items-center gap-2">
        <span class="inline-flex align-items-center px-2 py-1 border-round-xl bg-primary text-xs font-bold uppercase letter-spacing-wide">
          <i class="pi pi-bolt mr-1"></i> 10 Years of Enterprise-Grade Architecture
        </span>
      </div>
      <h1 class="m-0 p-0 line-height-2 text-4xl md:text-7xl font-bold">
        Fractional CTO,<br />
        <span class="text-gradient">AI automation</span>, and<br />
        <span class="text-gradient-2">programmatic SEO systems</span><br />
        for brands that need execution.
      </h1>
      <div class="text-xl md:text-2xl mt-4 line-height-3 text-700 hidden md:block">
        From migrating global banking infrastructure for <strong>ABN AMRO</strong> to reducing lead turnaround from <strong>4 days to 2 hours</strong> for <strong>Upstox</strong>. I help founders and product teams turn technical bottlenecks into scalable revenue systems.
      </div>
      <div class="text-xl mt-4 line-height-3 text-700 block md:hidden">
        Proven work for <strong>ABN AMRO</strong> and <strong>Upstox</strong>. Senior architecture, automation, and growth systems for teams that need momentum.
      </div>
      <div class="flex flex-column md:flex-row gap-3 mt-5">
        <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
          <Button label="Book Technical Roadmap Call" icon="pi pi-calendar-clock" severity="primary" size="large" rounded raised class="w-full md:w-auto white-space-nowrap" />
        </a>
        <Button 
          label="Explore Services" 
          icon="pi pi-arrow-down" 
          class="p-button-outlined p-button-secondary w-full md:w-auto" 
          size="large" 
          rounded 
          @click="scrollToSolutions"
        />
      </div>
      <div class="mt-5 grid gap-3 ml-1">
        <div class="flex align-items-center gap-3">
          <i class="pi pi-check-circle text-green-500"></i>
          <span class="text-sm md:text-base">Fractional CTO guidance with hands-on implementation</span>
        </div>
        <div class="flex align-items-center gap-3">
          <i class="pi pi-check-circle text-green-500"></i>
          <span class="text-sm md:text-base">Built for scale, crawlability, and measurable business outcomes</span>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-5 mt-6 lg:mt-0 hidden lg:block">
      <div class="bento-hero-grid h-30rem">
        <div class="bento-hero-item bento-hero-1 shadow-4 border-round-2xl overflow-hidden relative bento-hover">
          <img src="/img/projects/ai-dynamic-crud-app/ai-gemini-app.webp" alt="AI & ML with Gemini" width="600" height="800" class="w-full h-full" style="object-fit: cover;" fetchpriority="high" />
          <div class="absolute inset-0 bg-gradient-to-t from-black-alpha-90 via-black-alpha-40 to-transparent p-3 flex flex-column justify-content-end">
            <div class="bg-black-alpha-60 p-2 border-round-md" style="backdrop-filter: blur(4px);">
              <span class="text-xs font-bold text-primary-300 uppercase mb-1">Architecture 01</span>
              <h4 class="text-white m-0 text-sm font-bold">AI & Machine Learning</h4>
            </div>
          </div>
        </div>
        <div class="bento-hero-item bento-hero-2 shadow-4 border-round-2xl overflow-hidden relative bento-hover">
          <img src="/img/home/projects/ABN_Amro.webp" alt="Enterprise" width="600" height="400" class="w-full h-full" style="object-fit: cover;" fetchpriority="high" />
          <div class="absolute inset-0 bg-gradient-to-t from-black-alpha-90 via-black-alpha-40 to-transparent p-3 flex flex-column justify-content-end">
            <div class="bg-black-alpha-60 p-2 border-round-md" style="backdrop-filter: blur(4px);">
              <span class="text-xs font-bold text-primary-300 uppercase mb-1">Architecture 02</span>
              <h4 class="text-white m-0 text-sm font-bold">Enterprise SaaS</h4>
            </div>
          </div>
        </div>
        <div class="bento-hero-item bento-hero-3 shadow-4 border-round-2xl overflow-hidden relative bento-hover">
          <img src="/img/projects/localxr/localxr-cover.webp" alt="Growth" width="600" height="400" class="w-full h-full" style="object-fit: cover;" fetchpriority="high" />
          <div class="absolute inset-0 bg-gradient-to-t from-black-alpha-90 via-black-alpha-40 to-transparent p-3 flex flex-column justify-content-end">
            <div class="bg-black-alpha-60 p-2 border-round-md" style="backdrop-filter: blur(4px);">
              <span class="text-xs font-bold text-primary-300 uppercase mb-1">Architecture 03</span>
              <h4 class="text-white m-0 text-sm font-bold">Programmatic SEO</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Trusted By Marquee -->
<div class="mb-12 mt-6">
  <div class="marquee overflow-hidden">
    <div class="marquee-track">
      <div class="marquee-item flex align-items-center gap-2" v-for="org in orgs" :key="`org-1-${org.title}`">
            <img :src="org.icon" :alt="org.title" width="32" height="32" class="border-round-md grayscale-filter" loading="lazy" />
            <span class="text-lg md:text-xl font-bold text-500">{{org.title}}</span>
      </div>
      <div class="marquee-item flex align-items-center gap-2" v-for="org in orgs" :key="`org-2-${org.title}`" aria-hidden="true">
            <img :src="org.icon" :alt="org.title" width="32" height="32" class="border-round-md grayscale-filter" loading="lazy" />
            <span class="text-lg md:text-xl font-bold text-500">{{org.title}}</span>
      </div>
    </div>
  </div>
</div>

<div class="mb-8 px-2 md:px-4 mt-4" style="max-width: 1240px;">
  <div class="text-center mt-8">
    <h2 class="text-3xl md:text-5xl font-bold mt-2">Engineering High-Stakes Transformations</h2>
  </div>
  <div class="grid">
    <div class="col-12 md:col-4 p-3" v-for="win in highImpactWins" :key="win.title">
      <a :href="win.link" class="no-underline block h-full color-inherit">
        <div class="surface-0 border-round-3xl shadow-4 p-5 h-full flex flex-column border-1 border-100 bento-hover relative overflow-hidden text-left text-color">
          <!-- Accent Glow -->
          <div class="absolute top-0 right-0 w-8rem h-8rem opacity-10 border-circle" :style="{ background: `var(--${win.color}-500)`, filter: 'blur(40px)', transform: 'translate(30%, -30%)' }"></div>   
          <div class="text-4xl md:text-5xl font-bold text-900 mb-2 tracking-tight">
            {{ win.metric }}
          </div>
          <div class="text-sm font-bold text-500 uppercase tracking-widest mb-5">
             {{ win.title }}
          </div>
          <div class="flex-grow-1 flex flex-column gap-4">
             <div class="flex align-items-start gap-3">
                <div class="w-2rem h-2rem border-circle bg-gray-100 flex align-items-center justify-content-center flex-shrink-0">
                   <i class="pi pi-arrow-down text-xs text-500"></i>
                </div>
                <div class="text-sm text-600 line-height-3">
                   <span class="font-bold text-900 block mb-1">Challenge</span>
                   <span class="text-700">{{ win.before }}</span>
                </div>
             </div>
             <div class="flex align-items-start gap-3">
                <div class="w-2rem h-2rem border-circle bg-green-100 flex align-items-center justify-content-center flex-shrink-0">
                   <i class="pi pi-bolt text-xs text-green-600"></i>
                </div>
                <div class="text-sm line-height-3">
                   <span class="font-bold text-green-600 block mb-1">Impact</span>
                   <span class="text-700" v-html="win.description"></span>
                </div>
             </div>
          </div>
          <div class="mt-4 flex justify-content-end opacity-40">
             <i class="pi pi-arrow-up-right text-sm text-900"></i>
          </div>
        </div>
      </a>
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
        <div class="bg-green-100 text-green-600 border-circle w-3rem h-3rem flex align-items-center justify-content-center mb-2"><i class="pi pi-sparkles text-xl"></i></div>
        <h3 class="m-0 mb-3 font-bold text-xl">The Intelligence Problem</h3>
        <p class="text-700 line-height-3">You are spending hundreds of hours on manual content creation or matching processes. You need custom AI integration (like Gemini/OpenAI interfaces) to automate intelligence safely within your own app.</p>
      </div>
    </div>
    <div class="col-12 md:col-6 p-3">
      <div class="surface-0 p-4 border-round-xl shadow-2 h-full border-top-3 border-purple-500 flex flex-column">
        <div class="bg-purple-100 text-purple-600 border-circle w-3rem h-3rem flex align-items-center justify-content-center mb-4"><i class="pi pi-code text-xl"></i></div>
        <h3 class="m-0 mb-3 font-bold text-xl">The Scale Problem</h3>
        <p class="text-700 line-height-3 mb-4">You need to launch a complex SaaS MVP, or your legacy application is crumbling under traffic. You require flawless UI/UX, robust backend architecture, and high-concurrency capability.</p>
         <div class="mt-auto pt-3 border-top-1 border-50">
            <GatedLink 
               href="/startup-stack-audit-checklist/" 
               label="Run a Tech Stack Self-Audit" 
               customClass="no-underline text-sm font-bold text-purple-600 hover:translate-x-2 transition-all"
            />
         </div>
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
    <div class="col-12 lg:col-5 relative">
      <div class="absolute top-0 right-0 p-3 opacity-10 md:opacity-20">
          <i class="pi pi-sparkles text-green-500" style="font-size: 2rem;"></i>
      </div>
      <h3 class="text-sm font-bold uppercase text-green-500 letter-spacing-wide mb-2">Intelligence Automation</h3>
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
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/ai-dynamic-crud-app/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/ai-dynamic-crud-app/ai-webapp-english.webp" alt="AI Dynamic CRUD App" width="400" height="300" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">AI Dynamic CRUD</div>
          </a>
        </div>
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/ai-voice-generator/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/ai-narrator/Google-docs-text-to-speech-ai-voice-ai-audio.webp" alt="AI Voice Generator" width="400" height="300" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">AI Voice Generator</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pillar 2 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1 flex-column lg:flex-row-reverse">
    <div class="col-12 lg:col-5 relative">
      <div class="absolute top-0 right-0 p-3 opacity-10 md:opacity-20">
          <i class="pi pi-code text-purple-500" style="font-size: 2rem;"></i>
      </div>
      <h3 class="text-sm font-bold uppercase text-purple-500 letter-spacing-wide mb-2">Scalable Infrastructure</h3>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-0">Custom SaaS & Enterprise Apps</h2>
      <p class="text-lg line-height-3 text-700 mb-4">Sophisticated web applications designed for scale. From highly complex banking portal migrations to high-concurrency dashboards, I architect fast, resilient systems that grow with your business and never slow down.</p>
      <ul class="list-none p-0 m-0 mb-5 text-700">
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Predictable, crash-resistant interfaces</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Zero-downtime legacy modernisation</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Systems built for 10× traffic spikes</li>
      </ul>
    </div>
    <div class="col-12 lg:col-7">
      <div class="grid">
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/ABN_Amro.webp" alt="ABN AMRO Migration" width="400" height="300" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">ABN AMRO Enterprise</div>
          </a>
        </div>
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/momentum/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/momentum_incident_management.webp" alt="Momentum" width="400" height="300" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">Momentum Incident Mgmt</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pillar 3 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1">
    <div class="col-12 lg:col-5 relative">
      <div class="absolute top-0 right-0 p-3 opacity-10 md:opacity-20">
          <i class="pi pi-chart-line text-orange-500" style="font-size: 2rem;"></i>
      </div>
      <h3 class="text-sm font-bold uppercase text-orange-500 letter-spacing-wide mb-2">Database-Driven Growth</h3>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-0">Programmatic SEO & Lead Gen</h2>
      <p class="text-lg line-height-3 text-700 mb-4">I build massive, database-driven directory platforms. Automatically generate thousands of highly optimized location and service pages that dominate organic search and convert traffic via dynamic lead capture.</p>
      <ul class="list-none p-0 m-0 mb-5 text-700">
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Pages indexed & ranked from day one</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Location-aware lead capture at scale</li>
        <li class="flex align-items-center mb-2"><i class="pi pi-check text-green-500 mr-2"></i> Thousands of city pages, zero manual work</li>
      </ul>
    </div>
    <div class="col-12 lg:col-7">
      <div class="grid">
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/local-home-services-pros/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/localxr/localxr-cover.webp" alt="LocalXR" width="400" height="300" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">LocalXR Directory</div>
          </a>
        </div>
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/appliance-repair-service-platform/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/appliance_repair_cover.webp" alt="Appliance Repair" width="400" height="300" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">Appliance Repair Platform</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pillar 4 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1 flex-column lg:flex-row-reverse">
    <div class="col-12 lg:col-5 relative">
      <div class="absolute top-0 right-0 p-3 opacity-10 md:opacity-20">
          <i class="pi pi-sync text-blue-500" style="font-size: 2rem;"></i>
      </div>
      <h3 class="text-sm font-bold uppercase text-blue-500 letter-spacing-wide mb-2">Operational Efficiency</h3>
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
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/notion-crud/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/notion-crud-app/Notion-crud-app-free.webp" alt="Notion CRUD" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">Dynamic CRUD App</div>
          </a>
        </div>
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/service-request/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/notion_service_request.webp" alt="Service Request" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
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

<ConsultingBridge />

<!-- Sticky Mobile CTA -->
<div class="fixed bottom-0 left-0 w-full p-3 z-5 lg:hidden glass-sticky-cta shadow-6 flex gap-3 border-top-1 border-white-alpha-10">
  <a href="https://cal.com/stackseekers" target="_blank" class="flex-grow-1 no-underline">
    <Button label="Book Call" icon="pi pi-calendar" severity="primary" class="w-full text-lg font-bold py-3" raised />
  </a>
  <div @click="scrollToSolutions" class="flex align-items-center justify-content-center bg-white-alpha-10 dark:bg-white-alpha-10 border-round-lg px-4 border-1 border-white-alpha-20 cursor-pointer">
    <i class="pi pi-chevron-down text-900 dark:text-white"></i>
  </div>
</div>

<!-- Pricing Tiers / Fixed Packages -->
<div class="mb-8 text-center" id="pricing">
  <h2 class="text-3xl md:text-4xl font-bold mb-2">Clear Plans. Rapid Deployment.</h2>
  <p class="text-lg md:text-xl text-600 mb-6">Choose a service package tailored to your exact business needs.</p>
  
  <div class="grid justify-content-center">
    <!-- Tier 1: Intelligence Integration -->
    <div class="col-12 lg:col-3 md:col-6 p-2">
      <div class="surface-0 border-round-2xl shadow-6 p-5 h-full flex flex-column text-left relative overflow-hidden border-2 border-primary">
        <div class="absolute top-0 right-0 bg-primary text-900 text-xs font-bold px-2 py-1 border-round-bottom-left-md">POPULAR</div>
        <div class="text-base font-bold text-primary mb-2">Intelligence Integration</div>
        <div class="text-2xl font-bold mb-4">AI Feature Engineering</div>
        <p class="text-sm line-height-3 mb-5 flex-grow-1">Embed custom LLMs and automated decision-making natively into your application to eliminate manual bottlenecks.</p>
        <a href="https://cal.com/stackseekers" class="w-full line-height-1">
          <Button label="Discuss AI Strategy" class="w-full" size="small"/>
        </a>
      </div>
    </div>
    <!-- Tier 2: Product Architecture -->
    <div class="col-12 lg:col-3 md:col-6 p-2">
      <div class="surface-0 border-round-2xl shadow-2 p-5 h-full flex flex-column text-left hover:shadow-4 transition-all border-1 border-200">
        <div class="text-base font-bold text-600 mb-2">Product Architecture</div>
        <div class="text-2xl font-bold mb-4">SaaS MVP & Platform Build</div>
        <p class="text-sm line-height-3 mb-5 flex-grow-1">End-to-end development of resilient business platforms, built to scale from launch to high-concurrency traffic.</p>
        <a href="https://cal.com/stackseekers" class="w-full line-height-1">
          <Button label="Start MVP Scope" class="w-full p-button-outlined" size="small"/>
        </a>
      </div>
    </div>
    <!-- Tier 3: Growth Engineering -->
    <div class="col-12 lg:col-3 md:col-6 p-2">
      <div class="surface-0 border-round-2xl shadow-2 p-5 h-full flex flex-column text-left hover:shadow-4 transition-all border-1 border-200">
        <div class="text-base font-bold text-600 mb-2">Growth Engineering</div>
        <div class="text-2xl font-bold mb-4">Programmatic SEO Engine</div>
        <p class="text-sm line-height-3 mb-5 flex-grow-1">A database-driven acquisition framework to dominate local SEO and capture massive inbound traffic automatically.</p>
        <a href="https://cal.com/stackseekers" class="w-full line-height-1">
          <Button label="Get a Custom Quote" class="w-full p-button-outlined" size="small" />
        </a>
      </div>
    </div>
    <!-- Tier 4: Operational Automation -->
    <div class="col-12 lg:col-3 md:col-6 p-2">
      <div class="surface-0 border-round-2xl shadow-2 p-5 h-full flex flex-column text-left hover:shadow-4 transition-all border-1 border-200">
        <div class="text-base font-bold text-600 mb-2">Operational Automation</div>
        <div class="text-2xl font-bold mb-4">Internal Portals & Workflows</div>
        <p class="text-sm line-height-3 mb-5 flex-grow-1">Transform fragmented internal data (Notion, Sheets) into professional, high-integrity business tools.</p>
        <a href="https://cal.com/stackseekers" class="w-full line-height-1">
          <Button label="Book a Scope Call" class="w-full p-button-outlined" size="small"/>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="mb-8 py-4 surface-0">
  <div class="text-center pb-6">
    <h2 class="text-4xl font-bold mb-2">Verified Professional Impact</h2>
    <p class="text-xl text-600 line-height-2">Don't just take my word for it. Trusted by leads at global organizations.</p>
  </div>
  
  <div class="grid px-2 md:px-4" style="max-width: 1240px; margin: 0 auto;">
    <div class="col-12 lg:col-4 p-3" v-for="slot in testimonials" :key="slot.name">
      <div class="surface-0 shadow-2 border-round-2xl p-5 h-full flex flex-column border-1 border-100 bento-hover">
        <div class="flex align-items-center mb-4 pb-3 border-bottom-1 border-50">
          <a :href="slot.link" target="_blank" class="no-underline flex align-items-center gap-3">
            <div class="relative">
              <i class="pi pi-linkedin absolute text-blue-600 bg-white border-circle" style="bottom: -2px; right: -2px; font-size: 0.8rem;"></i>
            </div>
            <div>
              <h3 class="m-0 text-base font-bold text-900 line-height-1">{{ slot.name }}</h3>
              <div class="text-xs text-500 mt-1 flex align-items-center gap-1">
                 <img :alt="slot.location" :src="`https://flagcdn.com/w20/${slot.code.toLowerCase()}.png`" width="16" height="12" class="border-round-sm" />
                 {{ slot.location }}
              </div>
            </div>
          </a>
        </div>
        <div class="font-italic text-700 line-height-3 relative flex-grow-1 text-sm">
          <i class="pi pi-quote-left absolute opacity-10 text-4xl" style="top: -10px; left: -15px; color: var(--primary-color)"></i>
          <span class="relative z-1">{{ slot.message }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center mt-6">
    <a href="https://www.linkedin.com/in/jiwanghosal/details/recommendations/" target="_blank" class="no-underline inline-flex align-items-center gap-2 text-primary font-bold hover:underline">
      <i class="pi pi-linkedin"></i> View all verified LinkedIn recommendations
    </a>
  </div>
</div>

<!-- FAQ -->
<div class="mb-8 surface-50 border-round-3xl p-4 md:p-6" style="max-width: 1000px; margin: 0 auto;">
  <div class="text-center pb-6">
    <h2 class="text-4xl font-bold m-0 p-0">Frequently asked <span class="text-primary">questions</span></h2>
  </div>  <div class="max-w-800 mx-auto">
    <Accordion :multiple="true" :activeIndex="[0]">
      <AccordionTab header="Q. Why do I need Programmatic SEO over regular SEO?">
        <p class="m-0 text-700 line-height-3">
          Regular SEO works for a blog post. Programmatic SEO works for building massive directories or local service marketplaces. If you need to target long-tail keywords natively across 1,000 cities, you need database-driven site architecture, not standard blogging tools.
        </p>
      </AccordionTab>
      <AccordionTab header="Q. Do you handle both Frontend and Backend on custom SaaS builds?">
        <p class="m-0 text-700 line-height-3">
          Yes. As a full-stack engineering partner, I design the complete system — from fast, interactive user interfaces to high-performance server logic and secure, scalable cloud infrastructure. One partner, full ownership.
        </p>
      </AccordionTab>
      <AccordionTab header="Q. How fast can we launch our MVP?">
        <p class="m-0 text-700 line-height-3">
          Most production-ready MVPs are scoped for a 4 to 8-week delivery cycle. We focus on 'High-Integrity Velocity' — shipping a product that is fast to market but built on a foundation that won't require a total rewrite at 10k users.
        </p>
      </AccordionTab>
      <AccordionTab header="Q. Can you work with our existing engineering team?">
        <p class="m-0 text-700 line-height-3">
          Absolutely. I often operate as a Fractional CTO or Architecture Lead, working directly with your developers to set standards, review code, and solve the hardest technical bottlenecks while upskilling the internal team.
        </p>
      </AccordionTab>
      <AccordionTab header="Q. What is your preferred technology stack?">
        <p class="m-0 text-700 line-height-3">
          I specialize in the 'Modern Enterprise Stack': **React/Next.js**, **Node.js/TypeScript**, and **Cloud-Native Infrastructure** (AWS/GCP/Azure). I choose tools based on your business constraints, not personal hype.
        </p>
      </AccordionTab>
      <AccordionTab header="Q. What if our current codebase is a 'legacy mess'?">
        <p class="m-0 text-700 line-height-3">
          That is where I do my best work. I specialize in phased migrations and architectural resets — fixing the structural debt while keeping the product running, ensuring zero downtime during the modernization.
        </p>
      </AccordionTab>
    </Accordion>
    <div class="surface-0 p-4 md:p-6 border-round-xl shadow-1 border-left-3 border-primary mt-6">
      <h3 class="m-0 p-0 font-bold text-xl flex align-items-center"><i class="pi pi-shield mr-2 text-primary"></i> The Zero-Risk Guarantee</h3>
      <p class="m-0 text-700 line-height-3 mt-3">
        <strong>If I'm not a perfect fit after the first week of engagement, you pay absolutely nothing.</strong> I partner strictly on milestone-based or month-to-month contracts depending on the scope, so you are never locked into a bad situation.
      </p>
    </div>
  </div>
</div>

<!-- Contact CTA -->
<div class="mb-8 border-round-3xl p-6 md:p-8 text-center shadow-4 surface-section relative overflow-hidden" style="max-width: 1000px; margin: 0 auto;">
  <div class="absolute top-0 right-0 w-20rem h-20rem bg-primary border-circle opacity-10" style="filter: blur(80px); transform: translate(30%, -30%)"></div>
  <h2 class="text-4xl md:text-5xl font-bold m-0 mb-3 text-900 relative z-1">Let's solve your hardest technical bottleneck</h2>
  <p class="text-xl line-height-3 mb-5 text-600 mx-auto relative z-1" style="max-width: 650px;">
    Stop letting manual processes or weak infrastructure hold back your company's growth. Book a call to discuss architecture and solutions.
  </p>
  <div class="flex justify-content-center relative z-1">
    <a href="https://cal.com/stackseekers" target="_blank" class="no-underline"> 
      <Button label="Book a Free Discovery Call" icon="pi pi-video" severity="primary" size="large" raised rounded class="px-5 py-3 font-bold" />
    </a>
  </div>
  <div class="text-sm mt-4 text-500 relative z-1">No commitment. Get a technical roadmap on the call.</div>
</div>

<script setup lang="ts">
  import { onMounted } from "vue";
  import { orgs, testimonials, highImpactWins } from "@data/home.js";

  const scrollToSolutions = (e) => {
    if (e && e.currentTarget) (e.currentTarget as HTMLElement).blur();
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  onMounted(() => { 
    console.log("Enterprise Sales Playbook Enabled");
  });
</script>

<style scoped>
.grayscale-filter { filter: grayscale(100%); opacity: 0.7; transition: all 0.3s ease; }
.bento-hero-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}
.bento-hero-1 { grid-area: 1 / 1 / 3 / 2; }
.bento-hero-2 { grid-area: 1 / 2 / 2 / 3; }
.bento-hero-3 { grid-area: 2 / 2 / 3 / 3; }
.inset-0 { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
.bento-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer; }
.bento-hover:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
.shadow-pill { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
.glass-sticky-cta { 
  background: rgba(15, 23, 42, 0.8); 
  backdrop-filter: blur(12px); 
  -webkit-backdrop-filter: blur(12px);
}

@media (hover: hover) {
  .hover-zoom img { transition: transform 0.3s ease; }
  .hover-zoom:hover img { transform: scale(1.05); }
  .grayscale-filter:hover { filter: grayscale(0%); opacity: 1; }
}
</style>
