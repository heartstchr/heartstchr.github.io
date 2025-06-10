---
title: Appliance Repair Service Platform
description: A modern, content-driven platform for connecting users with local appliance repair professionals and providing troubleshooting guides for major home appliances
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "Appliance Repair Service Platform"
  description: "A modern, content-driven platform for connecting users with local appliance repair professionals and providing troubleshooting guides for major home appliances"
  software: "Web"
  schema: "https://schema.org/WebApplication"
  domain: "Digital Marketing"
  year: "2025"
  link: "https://appliancerepairly.com"
  codeLink: 
  contact: "mailto:jiwan.cse@gmail.com?subject=Inquiry : "
  stack: ["nextdotjs/black/white","react","nodedotjs","json/black/white","tailwindcss","axios","npm","pm2","digitalocean","lighthouse","bitbucket","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/appliance-repair/home.webp","alt":"Home page image"},{"itemImageSrc":"/img/projects/appliance-repair/performance-desktop.webp","alt":"Desktop performance image"},{"itemImageSrc":"/img/projects/appliance-repair/performance-mobile.webp","alt":"Mobile performance image"},{"itemImageSrc":"/img/projects/appliance-repair/services.webp","alt":"Services image"},{"itemImageSrc":"/img/projects/appliance-repair/find-repair.webp","alt":"Find repair services image"},{"itemImageSrc":"/img/projects/appliance-repair/contact.webp","alt":"Contact page image"},{"itemImageSrc":"/img/projects/appliance-repair/refrigerator-troubleshoot.webp","alt":"Refrigerator troubleshooting image"},{"itemImageSrc":"/img/projects/appliance-repair/refrigerator-problem.webp","alt":"Refrigerator problem image"},{"itemImageSrc":"/img/projects/appliance-repair/refrigerator.webp","alt":"Refrigerator home page image"},{"itemImageSrc":"/img/projects/appliance-repair/blog-post.webp","alt":"Blog post image"},{"itemImageSrc":"/img/projects/appliance-repair/blog.webp","alt":"Blog section image"}]
  features: [{"text":"Dynamic Appliance Support: Browse and get help for refrigerators, washers, dryers, dishwashers, ovens, microwaves, cooktops, and more."},{"text":"Find Local Providers: Enter your ZIP code or select your state to view local repair listings."},{"text":"Problem & Troubleshooting Guides: Step-by-step guides for common appliance issues, including DIY tips and when to call a pro."},{"text":"SEO Optimized: Each page includes dynamic SEO metadata for better search engine visibility."},{"text":"Reusable UI Components: Modular React components for listings, CTAs, features, and more."},{"text":"Content Management: All appliance, problem, and troubleshooting content is managed centrally in JSON for easy updates."}]
---
<div>
  <div class="col-12">
    <div class="my-2 text-l line-height-3">{{$frontmatter.project.description}}</div>
  </div>
  <div class="flex flex-column" itemscope itemtype="https://schema.org/SoftwareApplication">
    <div v-if="$frontmatter.project.images">
      <div class="card" v-if="$frontmatter.project.images.length != 1">
        <Galleria :value="$frontmatter.project.images" :responsiveOptions="responsiveOptions" :numVisible="5"
          :circular="true" :showItemNavigators="true" :showThumbnails="true" :pt="{
            prevButton: { 'aria-label': 'Previous screen of project' },
            nextButton: { 'aria-label': 'Next screen of project' }
          }">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
              style="width: 100%; display: block" loading="eager" fetchpriority="high" />
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
          </template>
        </Galleria>
      </div>
      <div class="card" v-else>
        <img :src="$frontmatter.project.images[0].itemImageSrc" :alt="$frontmatter.project.images[0].alt"
          style="width: 100%; display: block" loading="eager" fetchpriority="high" />
      </div>
    </div>
    <div class="col-12">
      <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
    </div>
    <div class="col-12 pt-4">
      <link itemprop="applicationCategory" :href="$frontmatter.project.schema" />
      <div class="flex md:flex-row flex-column justify-content-center align-items-center gap-2 my-4 w-full max-w-96">
        <a v-if="$frontmatter.project.contact" :href="`$frontmatter.project.contact $frontmatter.project.name`" target="_blank"
          class="flex flex-row no-underline w-full">
          <Button label="Get Custom Request" icon="pi pi-inbox" severity="secondary" raised rounded class="w-full" />
        </a>
        <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank"
          class="flex flex-row no-underline w-full">
          <Button label="Live Demo" icon="pi pi-angle-double-right" severity="primary" raised rounded class="w-full" />
        </a>
        <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank"
          class="flex flex-row no-underline w-full">
          <Button label="Get Started" icon="pi pi-github" severity="secondary" raised rounded class="w-full" />
        </a>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-column px-4">
  <h3 class="my-2 text-l">Features</h3>
  <ul class="my-2 md:ml-3 text-sm">
    <li v-for="feature in $frontmatter.project.features" :key="feature.text"
      class="flex flex-row align-content-center line-height-3">
      <i class="pi pi-verified m-2 bg-primary" alt="arrow" style="font-size: 1rem;"></i>
      <h4 class="m-2 text-sm" v-html="feature.text"></h4>
    </li>
  </ul>
</div>

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>
