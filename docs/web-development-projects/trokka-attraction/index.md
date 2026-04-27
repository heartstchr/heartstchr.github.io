---
title: Trokka Attraction
description: Book Attractions and Tours for Your Next Holiday
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "Trokka Attraction"
  description: "Book Attractions and Tours for Your Next Holiday"
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Leisure, travel, and tourism"
  year: "2019"
  price: 0
  currency: USD
  link: "https://m.trokka.com/attraction"
  codeLink: 
  contact: 
  stack: ["Javascript","VuedotJs","Axios/black/white","Express/black/white","MongoDB","Git","amazonEC2","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/trokka.webp","alt":"Trokka.com | Book Attractions and Tours for Your Next Holiday"}]
  features: [{"text":"Show Tours and Attraction of Malaysia"},{"text":"Popular activities based on rating and demand"},{"text":"Activities and details based on location"},{"text":"Book and share attractions with other people"},{"text":"Discount system based on promo code"},{"text":"Payment system using Boost wallet and other payment methods"},{"text":"Custom CMS backend system to add, update, and delete tours and attractions"}]
  details: ""
  previousProject: {"name":"Frontend of Tv Maze API","link":"/web-development-projects/frontend-of-tv-maze-api/"}
  nextProject: {"name":"Catch That Bus","link":"/web-development-projects/catch-that-bus/"}
---

<!-- Architectural Brief Header -->
<section class="mt-4 mb-6">
  <div class="grid align-items-center">
    <div class="col-12 lg:col-8">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
      <h1 class="text-4xl md:text-6xl font-bold mb-3 mt-0 line-height-2">{{$frontmatter.project.name}}</h1>
      <p class="text-xl opacity-70 line-height-3 max-w-30rem">{{$frontmatter.project.description}}</p>
    </div>
    <div class="col-12 lg:col-4">
      <div class="surface-card p-4 border-round-2xl shadow-2 border-1 border-100">
        <div class="flex align-items-center gap-3 mb-3">
          <i class="pi pi-clock text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Timeline</div>
            <div class="font-bold">{{$frontmatter.project.year}}</div>
          </div>
        </div>
        <div class="flex align-items-center gap-3 mb-3">
          <i class="pi pi-briefcase text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Industry</div>
            <div class="font-bold">{{$frontmatter.project.domain}}</div>
          </div>
        </div>
        <div class="flex align-items-center gap-3">
          <i class="pi pi-bolt text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Status</div>
            <div class="font-bold">Scale & Growth</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Visual Evidence Section -->
<section class="mb-8 overflow-hidden border-round-3xl shadow-4" itemscope itemtype="https://schema.org/SoftwareApplication">
  <div v-if="$frontmatter.project.images">
    <div v-if="$frontmatter.project.images.length > 1">
      <Galleria :value="$frontmatter.project.images" :responsiveOptions="responsiveOptions" :numVisible="5"
        :circular="true" :showItemNavigators="true" :showThumbnails="true" class="custom-galleria">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
            style="width: 100%; display: block" loading="eager" fetchpriority="high" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 60px; height: 60px; object-fit: cover;" />
        </template>
      </Galleria>
    </div>
    <div v-else>
      <img :src="$frontmatter.project.images[0].itemImageSrc" :alt="$frontmatter.project.images[0].alt"
        style="width: 100%; display: block" loading="eager" fetchpriority="high" />
    </div>
  </div>
</section>

<!-- Performance Infrastructure -->
<div class="grid mb-8">
  <div class="col-12 lg:col-8">
     <div class="surface-card p-4 md:p-6 border-round-3xl shadow-2 h-full">
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
  <div class="col-12 lg:col-4">
     <div class="surface-900 text-white p-4 md:p-6 border-round-3xl shadow-4 h-full relative overflow-hidden">
        <div class="absolute top-0 right-0 w-10rem h-10rem border-circle bg-primary opacity-20" style="filter: blur(40px); transform: translate(30%, -30%);"></div>
        <div class="relative z-1">
          <h3 class="text-2xl font-bold mb-4">The Stack</h3>
          <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
          
          <div class="flex flex-column gap-2 mt-6">
            <div class="flex align-items-stretch gap-2 w-full">
              <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank" class="flex-1 no-underline flex align-items-stretch">
                <Button label="View Demo" icon="pi pi-external-link" severity="primary" class="w-full h-full font-bold" raised rounded />
              </a>
               <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank" class="flex-1 no-underline flex align-items-stretch">
                <Button label="Source" icon="pi pi-github" severity="secondary" class="w-full h-full font-bold" raised rounded />
              </a>
            </div>
            
            <a v-if="$frontmatter.project.contact" :href="'/contact/?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline w-full">
              <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold" raised rounded />
            </a>
          </div>
        </div>
     </div>
  </div>
</div>

<!-- Narrative Transformation -->
<div class="project-markdown-content text-lg line-height-4 mb-8">
  
</div>

<div class="flex justify-content-between align-items-center mt-6 pt-4 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.project.previousProject" :href="$frontmatter.project.previousProject.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-chevron-left mr-2"></i>
      <div class="flex flex-column">
        <span class="text-sm text-color-secondary">Previous Project</span>
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.project.previousProject.name }}</span>
      </div>
    </a>
  </div>
  <div class="flex-1 text-center">
    <a href="/web-development-projects/" class="no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-th-large mr-2"></i>
      All Projects
    </a>
  </div>
  <div class="flex-1 text-right">
    <a v-if="$frontmatter.project.nextProject" :href="$frontmatter.project.nextProject.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary">
      <div class="flex flex-column text-right">
        <span class="text-sm text-color-secondary">Next Project</span>
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.project.nextProject.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2"></i>
    </a>
  </div>
</div>

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>