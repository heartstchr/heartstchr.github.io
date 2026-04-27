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
        Fractional CTO, <span class="text-gradient">AI automation</span>, and <span class="text-gradient-2">programmatic SEO systems</span> for teams that need senior execution.
      </h1>
      <div class="text-xl md:text-2xl mt-4 line-height-3 text-700 hidden md:block">
        From migrating global banking infrastructure for <strong>ABN AMRO</strong> to reducing lead turnaround from <strong>4 days to 2 hours</strong> for <strong>Upstox</strong>. I help founders and product teams turn technical bottlenecks into scalable revenue systems.
      </div>
      <div class="text-xl mt-4 line-height-3 text-700 block md:hidden">
        Proven work for **ABN AMRO** and **Upstox**. Senior architecture, automation, and growth systems for teams that need momentum.
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
          <img src="/img/projects/ai-dynamic-crud-app/ai-gemini-app.webp" alt="AI & ML with Gemini" class="w-full" />
          <div class="absolute inset-0 bg-gradient-to-t from-black-alpha-90 via-black-alpha-40 to-transparent p-3 flex flex-column justify-content-end">
            <div class="bg-black-alpha-60 p-2 border-round-md" style="backdrop-filter: blur(4px);">
              <span class="text-xs font-bold text-primary-300 uppercase mb-1">Architecture 01</span>
              <h4 class="text-white m-0 text-sm font-bold">AI & Machine Learning</h4>
            </div>
          </div>
        </div>
        <div class="bento-hero-item bento-hero-2 shadow-4 border-round-2xl overflow-hidden relative bento-hover">
          <img src="/img/home/projects/ABN_Amro.webp" alt="Enterprise" class="w-full  object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black-alpha-90 via-black-alpha-40 to-transparent p-3 flex flex-column justify-content-end">
            <div class="bg-black-alpha-60 p-2 border-round-md" style="backdrop-filter: blur(4px);">
              <span class="text-xs font-bold text-primary-300 uppercase mb-1">Architecture 02</span>
              <h4 class="text-white m-0 text-sm font-bold">Enterprise SaaS</h4>
            </div>
          </div>
        </div>
        <div class="bento-hero-item bento-hero-3 shadow-4 border-round-2xl overflow-hidden relative bento-hover">
          <img src="/img/projects/localxr/localxr-cover.webp" alt="Growth" class="w-full object-fill" />
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

<div class="mb-8 px-2 md:px-4" style="max-width: 1200px; margin: 0 auto;">
  <div class="text-center mb-6">
    <span class="text-sm font-bold text-primary tracking-widest uppercase">The Transformation Effect</span>
    <h2 class="text-3xl font-bold mt-2">Turning Technical Debt into Competitive Advantage</h2>
  </div>
  <div class="grid">
    <div class="col-12 md:col-4 p-3" v-for="win in highImpactWins" :key="win.title">
      <div class="surface-0 border-round-2xl shadow-3 overflow-hidden border-1 border-100 h-full flex flex-column">
        <div class="p-4 bg-gray-50 border-bottom-1 border-100">
          <div class="flex align-items-center gap-2 text-500 mb-2">
            <i class="pi pi-history"></i>
            <span class="text-xs font-bold uppercase">Legacy Bottleneck</span>
          </div>
          <div class="text-sm text-600 font-italic">
            {{ win.title === 'Upstox' ? '4-day manual lead processing' : (win.title === 'ABN Amro' ? 'Fragmented legacy frontend' : 'Slow manual booking engine') }}
          </div>
        </div>
        <div class="p-4 flex-grow-1 flex flex-column gap-3 relative">
          <div class="absolute top-0 right-0 p-3">
             <i class="pi" :class="[win.icon, `text-${win.color}-500`]" style="font-size: 2rem; opacity: 0.1"></i>
          </div>
          <div>
            <div class="flex align-items-center gap-2 mb-2">
              <span class="bg-green-100 text-green-700 text-xs px-2 py-1 border-round-md font-bold uppercase tracking-wider">The Architecture</span>
            </div>
            <div class="text-3xl font-bold text-900 mb-1">{{ win.metric }}</div>
            <p class="text-sm text-700 line-height-3 m-0" v-html="win.description" />
          </div>
        </div>
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
    <div class="col-12 lg:col-5 relative">
      <div class="absolute top-0 right-0 p-3">
          <i class="pi pi-sparkles text-green-500" style="font-size: 2rem; opacity: 0.1"></i>
          <span class="text-md font-bold uppercase text-green-500 letter-spacing-wide mb-2" style="font-size: 2rem; opacity: 0.1">Pillar 1</span>
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
            <img src="/img/projects/ai-dynamic-crud-app/ai-webapp-english.webp" alt="AI Dynamic CRUD App" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">AI Dynamic CRUD</div>
          </a>
        </div>
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/ai-voice-generator/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/ai-narrator/Google-docs-text-to-speech-ai-voice-ai-audio.webp" alt="AI Voice Generator" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">AI Voice Generator</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pillar 2 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1 flex-column lg:flex-row-reverse">
    <div class="col-12 lg:col-5 relative">
      <div class="absolute top-0 right-0 p-3">
          <i class="pi pi-code text-purple-500" style="font-size: 2rem; opacity: 0.1"></i>
          <span class="text-md font-bold uppercase text-purple-500 letter-spacing-wide mb-2" style="font-size: 2rem; opacity: 0.1">Pillar 2</span>
      </div>
      <h3 class="text-sm font-bold uppercase text-purple-500 letter-spacing-wide mb-2">Scalable Infrastructure</h3>
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
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/ABN_Amro.webp" alt="ABN AMRO Migration" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">ABN AMRO Enterprise</div>
          </a>
        </div>
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/momentum/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/momentum_incident_management.webp" alt="Momentum" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">Momentum Incident Mgmt</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pillar 3 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1">
    <div class="col-12 lg:col-5 relative">
      <div class="absolute top-0 right-0 p-3">
          <i class="pi pi-chart-line text-orange-500" style="font-size: 2rem; opacity: 0.1"></i>
          <span class="text-md font-bold uppercase text-orange-500 letter-spacing-wide mb-2" style="font-size: 2rem; opacity: 0.1">Pillar 3</span>
      </div>
      <h3 class="text-sm font-bold uppercase text-orange-500 letter-spacing-wide mb-2">Database-Driven Growth</h3>
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
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/local-home-services-pros/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/projects/localxr/localxr-cover.webp" alt="LocalXR" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
            <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">LocalXR Directory</div>
          </a>
        </div>
        <div class="col-12 md:col-6 p-2">
          <a href="/web-development-projects/appliance-repair-service-platform/" class="block hover-zoom relative border-round-xl overflow-hidden shadow-2 no-underline">
            <img src="/img/home/projects/appliance_repair_cover.webp" alt="Appliance Repair" class="w-full h-10rem md:h-12rem object-cover" loading="lazy" />
             <div class="absolute bottom-0 left-0 w-full bg-black-alpha-60 text-white p-2 text-sm font-bold backdrop-blur-sm">Appliance Repair Platform</div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pillar 4 -->
  <div class="grid align-items-center mb-8 surface-0 p-4 md:p-6 border-round-3xl shadow-1 flex-column lg:flex-row-reverse">
    <div class="col-12 lg:col-5 relative">
      <div class="absolute top-0 right-0 p-3">
          <i class="pi pi-sync text-blue-500" style="font-size: 2rem; opacity: 0.1"></i>
          <span class="text-md font-bold uppercase text-blue-500 letter-spacing-wide mb-2" style="font-size: 2rem; opacity: 0.1">Pillar 4</span>
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

<div class="mb-8 px-4 py-4 surface-900 text-white border-round-3xl shadow-4 overflow-hidden relative" style="max-width: 1200px; margin: 0 auto;">
  <div class="absolute top-0 right-0 w-30rem h-30rem bg-primary-900 border-circle opacity-10" style="filter: blur(100px); transform: translate(30%, -30%)"></div>
  
  <div class="text-center mb-8 relative z-1">
    <h2 class="text-4xl md:text-6xl font-bold mb-3">Architecting Your Success</h2>
    <p class="text-xl opacity-80 max-w-30rem mx-auto">A proven, four-stage framework to stabilize your technical debt.</p>
  </div>  <div class="grid relative z-1 max-w-1200 mx-auto">
    <!-- Precision Architectural Path -->
    <div class="hidden lg:block absolute w-full" style="z-index: 0; top: 3.15rem; width: 75%; left: 12.5%; height: 2px; background-image: linear-gradient(to right, var(--primary-800) 50%, transparent 50%); background-size: 16px 100%; opacity: 0.4;"></div>
    <div class="col-12 lg:col-3 p-4" v-for="(step, idx) in roadmapSteps" :key="step.title">
      <div class="flex flex-column h-full relative" style="z-index: 2;">
        <div class="w-4rem h-4rem border-circle bg-primary-900 border-2 border-primary-500 flex align-items-center justify-content-center text-2xl font-bold text-primary-400 mb-4 shadow-pill mx-auto lg:mx-0 relative" style="z-index: 3;">
           0{{ idx + 1 }}
        </div>
        <h3 class="text-2xl font-bold mb-3 text-white text-center lg:text-left">{{ step.title }}</h3>
        <p class="text-400 line-height-3 text-sm mb-4 text-center lg:text-left">{{ step.desc }}</p>
        <div class="mt-auto px-3 py-2 bg-white-alpha-10 border-round-lg inline-flex align-items-center gap-2 w-max mx-auto lg:mx-0">
           <i class="pi pi-verified text-primary-400"></i>
           <span class="text-xs font-bold tracking-widest uppercase opacity-80">{{ step.output }}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Sticky Mobile CTA -->
<div class="fixed bottom-0 left-0 w-full p-3 z-5 lg:hidden glass-sticky-cta shadow-6 flex gap-3 border-top-1 border-white-alpha-10">
  <a href="https://cal.com/stackseekers" target="_blank" class="flex-grow-1 no-underline">
    <Button label="Book Call" icon="pi pi-calendar" severity="primary" class="w-full text-lg font-bold py-3" raised />
  </a>
  <div @click="scrollToSolutions" class="flex align-items-center justify-content-center bg-white-alpha-10 border-round-lg px-4 border-1 border-white-alpha-20 cursor-pointer">
    <i class="pi pi-chevron-down text-white"></i>
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

<div class="mb-8 py-8 surface-0">
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
  import { onMounted } from "vue";
  import { orgs, testimonials, highImpactWins } from "@data/home.js";

  const roadmapSteps = [
    { title: "Discovery Call", desc: "Technical diagnosis and scaling strategy.", output: "Diagnosis" },
    { title: "Architecture Audit", desc: "Deep dive into infra and technical debt.", output: "Analysis" },
    { title: "Fixed-Scope Roadmap", desc: "Detailed milestone-based blueprint.", output: "Strategy" },
    { title: "Senior Execution", desc: "High-integrity build & velocity.", output: "Velocity" }
  ];

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
