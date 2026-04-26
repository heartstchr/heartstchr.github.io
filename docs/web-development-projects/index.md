---
title: Case Studies | Enterprise Engineering Portfolio | Stack Seekers
description: "Real-world case studies from 10 years of elite full-stack engineering. ABN AMRO, Qatar Airways, Upstox — see how I solve complex technical bottlenecks and drive measurable business outcomes."
order: 2
home: true
lastUpdated: false
editLink: false
copyright: false
---

<!-- Hero Section -->
<section class="hero-newage relative overflow-hidden p-4 md:p-8 mb-8">
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
      These are not side projects. Every case study below represents a client's critical system — rebuilt, migration-ed, or accelerated from scratch using banking-grade engineering standards.
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

<!-- Trust Bar -->
<div class="flex flex-wrap align-items-center justify-content-center gap-4 mb-8 px-4 py-4 surface-50 border-round-2xl">
  <span class="text-sm font-bold text-500 uppercase" style="letter-spacing: 0.1em;">Trusted by enterprises</span>
  <img src="/img/home/abn-amro-logo.webp" alt="ABN AMRO" class="h-2rem opacity-60" style="object-fit:contain;" />
  <img src="/img/home/upstox.webp" alt="Upstox" class="h-2rem opacity-60" style="object-fit:contain;" />
  <img src="/img/home/capgemini.webp" alt="Capgemini" class="h-2rem opacity-60" style="object-fit:contain;" />
</div>

<!-- Section Title -->
<div class="flex align-items-center justify-content-between mb-6 px-1">
  <div>
    <h2 class="text-3xl font-bold m-0">Full Case Studies</h2>
    <p class="text-600 m-0 mt-1">Click any project to see architecture decisions, challenges, and outcomes.</p>
  </div>
  <a href="https://cal.com/stackseekers" target="_blank" class="no-underline hidden md:block">
    <Button label="Book a Strategy Call" icon="pi pi-calendar" severity="primary" rounded raised />
  </a>
</div>

<!-- Project Cards + Sidebar -->
<div class="flex md:flex-row flex-column gap-4">
  <div class="p-d-flex p-flex-column" style="flex: 3;">
    <div class="grid my-2 gap-8">
      <ProjectCard
        v-for="(project, index) in paginatedProjects"
        :key="index"
        :project="project"
        :showHeader=true
      />
    </div>
    <Pagination 
      :totalRecords="freelance.length" 
      :rowsPerPage="10"
      @page-change="onPageChange"
    />
  </div>
  <div class="flex-1 align-self-start" style="max-width: 100%; position: sticky; top: 6rem;">
    <!-- Sidebar CTA Card -->
    <div class="surface-900 text-white border-round-2xl p-4 mb-4 shadow-4">
      <div class="text-lg font-bold mb-2">Need something custom?</div>
      <p class="text-300 text-sm line-height-3 mb-3">
        Don't see your exact use case? I scope and build bespoke enterprise systems from scratch.
      </p>
      <a href="https://cal.com/stackseekers" target="_blank" class="no-underline block">
        <Button label="Book Free Discovery Call" icon="pi pi-calendar" severity="primary" raised rounded class="w-full" />
      </a>
      <div class="text-xs text-400 mt-2 text-center">No commitment. 25-minute technical audit.</div>
    </div>
    <YouTubeAside />
  </div>
</div>

<!-- Bottom CTA -->
<div class="mt-8 mb-4 text-center py-8 px-4 surface-900 text-white border-round-3xl shadow-4">
  <h2 class="text-3xl md:text-4xl font-bold mb-3">Ready to be the next case study?</h2>
  <p class="text-lg text-300 line-height-3 mb-5 mx-auto" style="max-width: 600px;">
    I take on a limited number of high-impact projects per quarter. If you have a complex engineering challenge, let's talk.
  </p>
  <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
    <Button label="Request Technical Roadmap" icon="pi pi-map" severity="primary" size="large" raised rounded />
  </a>
  <div class="text-sm mt-3 text-400">Preferred for 6-month partnerships.</div>
</div>

<script setup lang="ts">
  import { freelance } from "@data/projects.js";
  import { toKebabCase } from "@utils";
  import { ref, computed } from 'vue';

  const currentPage = ref(0);
  const rowsPerPage = ref(10);

  const paginatedProjects = computed(() => {
    const start = currentPage.value * rowsPerPage.value;
    const end = start + rowsPerPage.value;
    return freelance.slice(start, end);
  });

  const onPageChange = (event) => {
    currentPage.value = Math.floor(event.first / event.rows);
    rowsPerPage.value = event.rows;
  };
</script>

<style scoped>
.impact-card {
  color: white;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
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
