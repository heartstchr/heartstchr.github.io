---
title: Startup MVP Web Development Projects | Stack Seekers
description: "Fast-to-market products, niche platforms, and proof-of-concept launches built by Stack Seekers — including Local Home Services, Appliance Repair, SR-22 Insurance, and more."
lastUpdated: false
editLink: false
copyright: false
home: true
---

<section class="hero-newage relative overflow-hidden p-4 md:p-8 mb-8">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="relative z-1">
    <div class="mb-3">
      <a href="/web-development-projects/" class="no-underline">
        <span class="inline-flex align-items-center px-3 py-1 border-round-xl surface-card text-sm font-bold opacity-70 hover:opacity-100 transition-all">
          <i class="pi pi-arrow-left mr-2"></i> All Projects
        </span>
      </a>
    </div>
    <div class="flex align-items-center gap-3 mb-4">
      <div class="flex align-items-center justify-content-center border-round-xl" style="background: #10b98118; color: #10b981; width: 3.5rem; height: 3.5rem;">
        <i class="pi pi-bolt text-2xl"></i>
      </div>
      <div>
        <h1 class="m-0 text-4xl md:text-5xl font-bold" style="color: #10b981;">Startup MVPs</h1>
        <p class="m-0 text-lg opacity-60 mt-1">Fast-to-market products, niche platforms, and proof-of-concept launches.</p>
      </div>
    </div>
    <p class="text-xl text-300 line-height-3 m-0" style="max-width: 720px;">
      Lean, conversion-optimised products launched quickly with high performance — lead generation platforms, niche marketplaces, and programmatic SEO sites that generate revenue from day one.
    </p>
  </div>
</section>

<div class="grid mb-8">
  <div v-for="project in mvpProjects" :key="project.name" class="col-12 md:col-6 lg:col-4 p-3">
    <a :href="'/web-development-projects/' + toKebabCase(project.name) + '/'" class="no-underline block h-full">
      <div class="project-card surface-0 shadow-2 border-round-2xl overflow-hidden h-full border-1 border-100 flex flex-column">
        <div class="relative overflow-hidden" style="height: 11rem;">
          <img v-if="project.images && project.images.length" :src="project.images[0].itemImageSrc" :alt="project.images[0].alt" class="w-full h-full" style="object-fit: cover; display: block;" />
          <div v-else class="w-full h-full flex align-items-center justify-content-center" style="background: linear-gradient(135deg, #10b98118, #10b98140);">
            <i class="pi pi-image text-4xl opacity-30"></i>
          </div>
          <div class="absolute top-0 left-0 m-3">
            <span class="px-2 py-1 border-round-lg text-xs font-bold" style="background: #10b981; color: #fff;">{{ project.domain }}</span>
          </div>
        </div>
        <div class="p-4 flex flex-column flex-grow-1">
          <h2 class="text-xl font-bold mt-0 mb-2 text-900">{{ project.name }}</h2>
          <p class="text-sm text-600 line-height-3 mb-0 flex-grow-1">{{ project.description }}</p>
          <div class="pt-3 mt-3 border-top-1 border-50 flex align-items-center justify-content-end">
            <i class="pi pi-arrow-right" style="color: #10b981;"></i>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

<section class="mt-4 mb-8 p-5 surface-50 border-round-2xl border-1 border-100 flex flex-column md:flex-row align-items-center justify-content-between gap-4">
  <div>
    <div class="text-lg font-bold mb-1">Have a startup idea?</div>
    <p class="text-sm text-500 m-0">I scope, architect, and ship production MVPs in weeks — not months.</p>
  </div>
  <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
    <Button label="Book Free Discovery Call" icon="pi pi-calendar" severity="primary" raised rounded />
  </a>
</section>

<div class="flex justify-content-between align-items-center pt-4 border-top-1 surface-border">
  <a href="/web-development-projects/" class="no-underline text-color-secondary hover:text-primary font-bold flex align-items-center gap-2">
    <i class="pi pi-th-large"></i> All Projects
  </a>
  <div class="flex gap-3 flex-wrap">
    <a href="/web-development-projects/enterprise/" class="no-underline text-color-secondary hover:text-primary text-sm font-bold">Enterprise →</a>
    <a href="/web-development-projects/ai/" class="no-underline text-color-secondary hover:text-primary text-sm font-bold">AI →</a>
    <a href="/web-development-projects/saas/" class="no-underline text-color-secondary hover:text-primary text-sm font-bold">SaaS →</a>
    <a href="/web-development-projects/automation/" class="no-underline text-color-secondary hover:text-primary text-sm font-bold">Automation →</a>
  </div>
</div>

<script setup lang="ts">
  import { freelance } from "@data/projects.js";
  import { toKebabCase } from "@utils/index.js";

  const mvpProjects = freelance.filter((p: any) => p.category === 'Startup MVPs');
</script>

<style scoped>
.project-card {
  transition: all 0.25s ease;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.12);
  border-color: #10b981 !important;
}
</style>
