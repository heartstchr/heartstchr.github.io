---
title: About Stack Seekers | Independent Enterprise Engineering Consultancy
description: Stack Seekers is an independent engineering consultancy founded by Jiwan Ghosal. We deliver banking-grade reliability and AI-powered growth systems for founders and enterprise teams — without agency overhead.
order: 4
home: true
editLink: false
copyright: false
pageInfo: false
contributors: false
---

<!-- Hero -->
<section class="hero-newage relative overflow-hidden p-4 md:p-8 mb-8">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="relative z-1">
    <div class="mb-3">
      <span class="inline-flex align-items-center px-3 py-1 border-round-xl bg-primary text-sm font-bold uppercase" style="letter-spacing: 0.1em;">
        <i class="pi pi-building mr-2"></i> Independent Engineering Consultancy
      </span>
    </div>
    <h1 class="text-4xl md:text-6xl font-bold m-0 mb-5 line-height-2">
      Enterprise reliability.<br />
      <span class="text-gradient">Startup velocity.</span><br />
      Zero agency overhead.
    </h1>
    <p class="text-xl text-300 line-height-3 m-0 mb-6" style="max-width: 700px;">
      Stack Seekers is a boutique engineering consultancy built for founders and product teams who need senior technical leadership — not a 40-person agency with layers of project managers and junior developers.
    </p>
    <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
      <Button label="Book Free Discovery Call" icon="pi pi-calendar" severity="primary" size="large" raised rounded />
    </a>
  </div>
</section>

<!-- Impact Numbers -->
<div class="mb-10 px-2 md:px-4" style="max-width: 1200px; margin: 0 auto;">
  <div class="grid">
    <div v-for="stat in stats" :key="stat.label" class="col-12 sm:col-6 lg:col-3 p-3">
      <div class="surface-0 border-round-2xl shadow-2 p-5 text-center border-1 border-100 h-full flex flex-column align-items-center justify-content-center stat-card">
        <div class="text-5xl font-bold text-gradient mb-2">{{ stat.value }}</div>
        <div class="font-bold text-900 mb-1">{{ stat.label }}</div>
        <div class="text-500 text-sm line-height-3">{{ stat.sub }}</div>
      </div>
    </div>
  </div>
</div>

<!-- Mission -->
<div class="mb-10 px-2 md:px-4" style="max-width: 1200px; margin: 0 auto;">
  <div class="grid align-items-center">
    <div class="col-12 lg:col-6 p-4">
      <div class="text-sm font-bold text-primary uppercase tracking-widest mb-3"><i class="pi pi-bullseye mr-2"></i>The Mission</div>
      <h2 class="text-3xl md:text-5xl font-bold mb-4 mt-0 line-height-2">High-stakes engineering shouldn't require a 40-person agency.</h2>
      <p class="text-lg text-700 line-height-3 mb-4">
        Most agencies solve the wrong problem. They sell seats and hours. Stack Seekers sells outcomes. Every engagement is scoped around a specific business result — faster launch, reduced operational cost, or a scalable system that removes a growth ceiling.
      </p>
      <p class="text-lg text-700 line-height-3">
        We operate as a direct technical partner with a single accountable engineer — the same person who scoped it, architectured it, and ships it. No hand-offs, no translation layers, no surprises.
      </p>
    </div>
    <div class="col-12 lg:col-6 p-4">
      <img src="/img/about/connectedManager.webp" alt="Stack Seekers Mission" width="600" height="450" class="w-full border-round-3xl shadow-4 object-cover" style="max-height: 450px;" loading="lazy" />
    </div>
  </div>
</div>

<!-- Operating Model -->
<div class="mb-10 py-8 surface-50 border-round-3xl mx-2 md:mx-4 overflow-hidden">
  <div style="max-width: 1200px; margin: 0 auto;" class="px-4">
    <div class="text-center mb-8">
      <div class="text-sm font-bold text-primary uppercase tracking-widest mb-3"><i class="pi pi-cog mr-2"></i>How We Work</div>
      <h2 class="text-3xl md:text-5xl font-bold mt-0 mb-3">The Stack Seekers operating model</h2>
      <p class="text-lg text-600 m-0">Built for teams with delivery pressure and no patience for process theatre.</p>
    </div>
    <div class="grid">
      <div v-for="pillar in model" :key="pillar.title" class="col-12 md:col-6 lg:col-3 p-3">
        <div class="surface-0 border-round-2xl p-5 h-full shadow-1 border-1 border-100 flex flex-column model-card">
          <div class="flex align-items-center justify-content-center border-round-xl mb-4" :style="{ background: pillar.color + '18', color: pillar.color, width: '3rem', height: '3rem' }">
            <i :class="'pi ' + pillar.icon + ' text-xl'"></i>
          </div>
          <div class="font-bold text-lg mb-2 text-900">{{ pillar.title }}</div>
          <p class="text-600 text-sm line-height-3 m-0 flex-grow-1">{{ pillar.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- The Founder -->
<div class="mb-10 px-2 md:px-4" style="max-width: 1200px; margin: 0 auto;">
  <div class="grid align-items-center">
    <div class="col-12 lg:col-5 p-4 text-center">
      <div class="relative inline-block">
        <img src="/img/home/jiwanghosal.webp" alt="Jiwan Ghosal — Founder of Stack Seekers" width="400" height="400" class="border-round-3xl shadow-4 w-full" style="max-width: 380px; aspect-ratio: 1/1; object-fit: cover;" loading="lazy" />
        <div class="absolute -bottom-2 -right-2 bg-primary text-white p-3 border-round-lg shadow-4 hidden lg:block">
          <i class="pi pi-verified text-2xl"></i>
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-7 p-4">
      <div class="text-sm font-bold text-primary uppercase tracking-widest mb-3"><i class="pi pi-user mr-2"></i>The Founder</div>
      <h2 class="text-3xl md:text-5xl font-bold mt-0 mb-2">Jiwan Ghosal</h2>
      <div class="text-primary font-bold text-xl mb-4">Senior Architecture Partner & Fractional CTO</div>
      <p class="text-lg text-700 line-height-3 mb-4">
        Jiwan is the architect behind Stack Seekers. With over 10 years engineering systems for ABN AMRO, Qatar Airways, and Upstox, he brings banking-grade engineering standards to every engagement — regardless of company size.
      </p>
      <p class="text-lg text-700 line-height-3 mb-5">
        He specialises in the highest-stakes layer of product work: migrating legacy systems without downtime, architecting platforms that survive 10× traffic spikes, and building AI-powered workflows that eliminate hundreds of manual hours per month.
      </p>
      <div class="flex flex-wrap gap-3">
        <a href="/jiwan-ghosal/" class="no-underline">
          <Button label="Full Profile" icon="pi pi-user" severity="secondary" outlined rounded />
        </a>
        <a href="https://www.linkedin.com/in/jiwanghosal/" target="_blank" class="no-underline">
          <Button label="LinkedIn" icon="pi pi-linkedin" severity="secondary" outlined rounded />
        </a>
        <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
          <Button label="Book a Call" icon="pi pi-calendar" severity="primary" raised rounded />
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Not For Everyone -->
<div class="mb-10 mx-2 md:mx-4 surface-900 text-white border-round-3xl p-6 md:p-8 relative overflow-hidden">
  <div class="absolute top-0 right-0 w-30rem h-30rem bg-primary-900 border-circle opacity-10" style="filter: blur(100px); transform: translate(30%, -30%)"></div>
  <div class="relative z-1" style="max-width: 1200px; margin: 0 auto;">
    <div class="text-sm font-bold text-primary-400 uppercase tracking-widest mb-3"><i class="pi pi-shield mr-2"></i>Honest Positioning</div>
    <h2 class="text-3xl md:text-5xl font-bold mt-0 mb-8">Stack Seekers is not for everyone.</h2>
    <div class="grid">
      <div class="col-12 lg:col-6 mb-4">
        <div class="flex align-items-start gap-4 mb-5" v-for="no in notFor" :key="no">
          <i class="pi pi-times-circle text-red-400 mt-1 text-xl flex-shrink-0"></i>
          <span class="text-300 text-lg line-height-3">{{ no }}</span>
        </div>
      </div>
      <div class="col-12 lg:col-6 mb-4">
        <div class="flex align-items-start gap-4 mb-5" v-for="yes in yesFor" :key="yes">
          <i class="pi pi-check-circle text-green-400 mt-1 text-xl flex-shrink-0"></i>
          <span class="text-100 text-lg line-height-3 font-bold">{{ yes }}</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Philosophy -->
<div class="mb-10 text-center px-4" style="max-width: 800px; margin: 0 auto;">
  <div class="text-sm font-bold text-primary uppercase tracking-widest mb-3"><i class="pi pi-heart mr-2"></i>Our Philosophy</div>
  <h2 class="text-3xl md:text-5xl font-bold mt-0 mb-4 line-height-2">Write once. Deploy reliably. Scale without limits.</h2>
  <p class="text-lg text-700 line-height-3 mb-6">
    Stack Seekers was founded on a single principle: great engineering should be measured by business outcomes, not lines of code or hours billed. Every system we build is designed to reduce your operational burden, not create dependency on us.
  </p>
  <div class="flex flex-wrap justify-content-center gap-3">
    <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
      <Button label="Book Free Discovery Call" icon="pi pi-bolt" severity="primary" size="large" raised rounded class="px-6" />
    </a>
    <GatedLink href="/startup-stack-audit-checklist/">
      <Button label="Run Technical Health Check" icon="pi pi-check-square" severity="secondary" size="large" raised rounded outlined class="px-6" />
    </GatedLink>
  </div>
  <div class="text-sm text-500 mt-4">Both paths provide a prioritized technical roadmap for your business.</div>
</div>

<script setup lang="ts">
  const stats = [
    { value: '10+',  label: 'Years Delivered',       sub: 'Enterprise-grade systems since 2014' },
    { value: '25+',  label: 'Products Shipped',       sub: 'Across 5 verticals globally' },
    { value: '10M+', label: 'Users Impacted',         sub: 'ABN AMRO Emerald Design System' },
    { value: '98%',  label: 'Faster Lead Processing', sub: 'Upstox — 4 days → 2 hours' },
  ];

  const model = [
    { title: 'Direct Partnership',      icon: 'pi-handshake',  color: '#6366f1', desc: 'You work directly with the senior architect. No account managers, no hand-offs, no translation layers.' },
    { title: 'Milestone Contracts',     icon: 'pi-flag',       color: '#0ea5e9', desc: 'Scoped by outcome, not by hours. You know exactly what you\'re getting before a line of code is written.' },
    { title: 'Async-First Delivery',    icon: 'pi-video',      color: '#a855f7', desc: 'Loom updates, Linear boards, and weekly demos. Maximum transparency, minimum meetings.' },
    { title: 'Zero Lock-In',            icon: 'pi-unlock',     color: '#10b981', desc: 'Monthly or milestone engagements. Cancel anytime. The codebase is always yours.' },
  ];

  const notFor = [
    'Teams looking for the cheapest hourly rate',
    'Projects that need a dozen developers on a call',
    'Founders who want to micromanage implementation details',
    'Agencies looking to white-label the work',
  ];

  const yesFor = [
    'Founders who need a senior technical partner, not just a coder',
    'Enterprise teams modernising a legacy system without breaking it',
    'Product leaders who need AI, automation, or scalable growth systems',
    'Startups that need to launch fast and scale without technical debt',
  ];
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #3B82F6, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.stat-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
}
.model-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.model-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.1) !important;
}
.hero-newage {
  background: #0a0a0a;
  color: white;
}
.orb {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 0;
  opacity: 0.15;
}
.orb-1 { top: -200px; left: -100px; background: #3B82F6; }
.orb-2 { bottom: -200px; right: -100px; background: #8B5CF6; }
</style>
