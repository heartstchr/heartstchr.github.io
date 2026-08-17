---
title: The Architect's Playbook | Enterprise Engineering Portfolio
description: "Strategic engineering insights and technical deep-dives for founders building high-stakes software — and how I solve complex bottlenecks."
order: 2
home: true
lastUpdated: false
editLink: false
copyright: false
---

<!-- Hero Section -->
<section class="hero-newage relative overflow-hidden p-8 mb-4">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="relative z-1">
    <div class="mb-3">
      <span class="inline-flex align-items-center px-3 py-1 border-round-xl bg-primary text-sm font-bold uppercase" style="letter-spacing: 0.1em;">
        <i class="pi pi-briefcase mr-2"></i> 10 Years of Enterprise Delivery
      </span>
    </div>
    <h1 class="text-4xl md:text-6xl font-bold m-0 mb-4 line-height-2">
      Engineering that moves <span class="text-gradient">business metrics</span>, not just pixels.
    </h1>
    <p class="text-xl text-300 line-height-3 m-0 mb-6" style="max-width: 700px;">
      These are not side projects. Every case study below represents a client's critical system — rebuilt, migrated, or accelerated from scratch using banking-grade engineering standards.
    </p>
    <!-- Impact Bar -->
    <div class="grid gap-3">
      <div class="col-12 md:col-3">
        <div class="impact-card border-round-2xl p-4 text-center glass-effect">
          <div class="text-4xl font-bold text-primary mb-1">98%</div>
          <div class="text-sm font-bold mb-1">Faster Lead Conversion</div>
          <div class="text-xs text-400">Upstox — 4 days → 2 hours</div>
        </div>
      </div>
      <div class="col-12 md:col-3">
        <div class="impact-card border-round-2xl p-4 text-center glass-effect">
          <div class="text-4xl font-bold text-primary mb-1">10M+</div>
          <div class="text-sm font-bold mb-1">Users Migrated</div>
          <div class="text-xs text-400">ABN AMRO — Emerald Design System</div>
        </div>
      </div>
      <div class="col-12 md:col-3">
        <div class="impact-card border-round-2xl p-4 text-center glass-effect">
          <div class="text-4xl font-bold text-primary mb-1">Global</div>
          <div class="text-sm font-bold mb-1">Airline Booking Platform</div>
          <div class="text-xs text-400">Qatar Airways — High-Performance Engines</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Category Anchor Pills -->
<div class="flex flex-wrap gap-2 mb-8 px-1">
  <a v-for="cat in categories" :key="cat.id" :href="'#' + cat.id" class="no-underline">
    <span class="category-pill" :style="{ borderColor: cat.color, color: cat.color }">
      <i :class="'pi ' + cat.icon + ' mr-1'"></i>{{ cat.label }}
      <span class="ml-1 opacity-60 text-xs">({{ (groupedProjects[cat.label] || []).length }})</span>
    </span>
  </a>
</div>

<!-- Grouped Project Sections -->
<div v-for="cat in categories" :key="cat.id" :id="cat.id" class="category-section mb-10">
  <!-- Section Header -->
  <div class="flex align-items-center gap-3 mb-5 pb-3" :style="{ borderBottom: '2px solid ' + cat.color + '33' }">
    <div class="flex align-items-center justify-content-center border-round-xl" :style="{ background: cat.color + '18', color: cat.color, width: '2.75rem', height: '2.75rem', minWidth: '2.75rem' }">
      <i :class="'pi ' + cat.icon + ' text-xl'"></i>
    </div>
    <div>
      <h2 class="m-0 p-0 text-2xl font-bold" :style="{ color: cat.color }">{{ cat.label }}</h2>
      <p class="m-0 text-sm text-500 mt-1">{{ cat.desc }}</p>
    </div>
    <div class="flex flex-column md:flex-row gap-3 mt-5 ml-auto hidden md:block">
      <a href="https://cal.com/stackseekers?utm_source=website&utm_medium=cta&utm_campaign=book-call" target="_blank" class="no-underline">
        <Button label="Book Free Discovery Call" icon="pi pi-calendar-clock" severity="primary" size="small" rounded raised class="w-full md:w-auto white-space-nowrap" />
      </a>
    </div>
  </div>

  <!-- Project Cards Grid -->
  <div class="grid">
    <div v-for="project in (groupedProjects[cat.label] || [])" :key="project.name" class="col-12 md:col-6 lg:col-4 p-3">
      <a :href="'/web-development-projects/' + toKebabCase(project.name) + '/'" class="no-underline block h-full">
        <div class="project-card surface-0 shadow-2 border-round-2xl overflow-hidden h-full border-1 border-100 flex flex-column" :style="{ '--cat-color': cat.color }">
          <!-- Cover Image -->
          <div class="project-card-img relative overflow-hidden" style="height: 11rem;">
            <img
              v-if="project.images && project.images.length"
              :src="project.images[0].itemImageSrc"
              :alt="project.images[0].alt"
              width="400"
              height="250"
              class="w-full h-full"
              style="object-fit: cover; display: block;"
              loading="lazy"
            />
            <div v-else class="w-full h-full flex align-items-center justify-content-center" :style="{ background: 'linear-gradient(135deg, ' + cat.color + '18, ' + cat.color + '40)' }">
              <i class="pi pi-image text-4xl opacity-30"></i>
            </div>
            <!-- Category badge overlay -->
            <!-- <div class="absolute top-0 left-0 m-3">
              <span class="px-2 py-1 border-round-lg text-xs font-bold" :style="{ background: cat.color, color: '#fff' }">{{ project.domain }}</span>
            </div> -->
          </div>
          <!-- Card Body -->
          <div class="app-card-body p-4 flex flex-column flex-grow-1">
            <h3 class="text-xl font-bold mt-0 mb-2 text-900">{{ project.name }}</h3>
            <p class="text-sm text-600 line-height-3 mb-0 flex-grow-1">{{ project.description }}</p>
            <div class="pt-3 mt-3 border-top-1 border-50 flex align-items-center justify-content-between">
              <RazorpayButton v-if="project.category === 'Ready-made Apps' && parseFloat(project.price) > 0" :project="project" />
              <Button
                v-else-if="project.category === 'Ready-made Apps'"
                label="Free"
                icon="pi pi-download"
                size="small"
                raised
                style="background: var(--theme-color); border-color: var(--theme-color); color: #fff;"
                @click.stop.prevent="openWorkspace(project.workspace || project.link)"
              />
              <i class="pi pi-arrow-right" :style="{ color: cat.color }"></i>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<!-- Bottom Strategy Section -->
<ConsultingBridge :showAudit="true" />

<!-- Sticky Mobile CTA -->
<div class="fixed bottom-0 left-0 w-full p-3 z-5 lg:hidden glass-sticky-cta shadow-6 flex gap-3 border-top-1 border-white-alpha-10">
  <a href="https://cal.com/stackseekers?utm_source=website&utm_medium=cta&utm_campaign=book-call" target="_blank" class="flex-grow-1 no-underline">
    <Button label="Consult Strategy" icon="pi pi-calendar" severity="primary" class="w-full text-lg font-bold py-3" raised />
  </a>
</div>

<script setup lang="ts">
  import { freelance } from "@data/projects.js";
  import { toKebabCase } from "@utils/index.js";
  import { computed } from 'vue';

  const categories = [
    { id: 'ready-made-apps', label: 'Ready-made Apps', icon: 'pi-shopping-bag', color: '#3b82f6', desc: 'Ready-to-deploy digital products, templates, and embeddable widgets.' },
    { id: 'enterprise',    label: 'Enterprise',    icon: 'pi-building',      color: '#6366f1', desc: 'Large-scale platforms, banking systems, and mission-critical applications.' },
    { id: 'ai',            label: 'AI',            icon: 'pi-microchip-ai',  color: '#a855f7', desc: 'AI-powered tools, intelligent automation, and machine learning integrations.' },
    { id: 'saas',          label: 'SaaS',          icon: 'pi-server',        color: '#0ea5e9', desc: 'Multi-tenant platforms, marketplaces, and subscription-based software.' },
    { id: 'automation',    label: 'Automation',    icon: 'pi-cog',           color: '#f59e0b', desc: 'Workflow automation, no-code tooling, and process efficiency systems.' },
    { id: 'startup-mvps',  label: 'Startup MVPs',  icon: 'pi-bolt',          color: '#10b981', desc: 'Fast-to-market products, niche platforms, and proof-of-concept launches.' },
  ];

  const groupedProjects = computed(() => {
    const groups: Record<string, typeof freelance> = {};
    for (const cat of categories) {
      let items = freelance.filter((p: any) => p.category === cat.label);
      if (cat.label === 'Ready-made Apps') {
        items = [
          ...items.filter((p: any) => p.name === 'AI Voice Generator'),
          ...items.filter((p: any) => p.name !== 'AI Voice Generator'),
        ];
      }
      groups[cat.label] = items;
    }
    return groups;
  });

  const openWorkspace = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
</script>

<style scoped>
.impact-card {
  color: white;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}
.impact-card:hover { transform: translateY(-5px); }

.category-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.85rem;
  border-radius: 2rem;
  border: 1.5px solid;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;
  text-decoration: none;
}
.category-pill:hover {
  filter: brightness(1.15);
  transform: translateY(-1px);
}

.project-card {
  transition: all 0.25s ease;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.12);
}

.app-card-body,
.app-card-body p,
.app-card-body h3 {
  color: #000;
}

.category-section {
  scroll-margin-top: 6rem;
}

.glass-sticky-cta { 
  background: rgba(15, 23, 42, 0.9); 
  backdrop-filter: blur(12px); 
  -webkit-backdrop-filter: blur(12px);
}
@media (max-width: 767px) {
  .impact-card {
    padding: 1rem !important;
  }
  .impact-card .text-4xl {
    font-size: 2rem !important;
  }
}
</style>
