---
title: Frontend of Tv Maze API
description: TVmaze- Add TV information to your website or app.
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "Frontend of Tv Maze API"
  description: "TVmaze- Add TV information to your website or app."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Entertainment"
  year: "2020"
  link: "https://heartstchr.github.io/tvmaze/"
  codeLink: "https://github.com/heartstchr/tvshows"
  contact: 
  stack: ["Javascript","Vuedotjs","Quasar/black/white","Axios","Git","amazonec2","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/home/projects/tvmaze.webp","alt":"TVmaze - Home page"},{"itemImageSrc":"/img/projects/tvmaze/home.webp","alt":"TVmaze - Home page"},{"itemImageSrc":"/img/projects/tvmaze/search.webp","alt":"TVmaze - Search page"},{"itemImageSrc":"/img/projects/tvmaze/episodes.webp","alt":"TVmaze - Episodes tab"},{"itemImageSrc":"/img/projects/tvmaze/cast.webp","alt":"TVmaze - Cast tab"},{"itemImageSrc":"/img/projects/tvmaze/genres.webp","alt":"TVmaze - Genres"}]
  features: [{"text":"Popular Tv shows sorted based on rating"},{"text":"Tv shows based on genre"},{"text":"Search Tv shows"},{"text":"Details Tv shows"},{"text":"Episodes, cast and crew of a Tv shows"}]
  details: ""
  previousProject: {"name":"Recipes","link":"/web-development-projects/recipes/"}
  nextProject: {"name":"Trokka Attraction","link":"/web-development-projects/trokka-attraction/"}
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
        <a v-if="$frontmatter.project.contact" :href="`${$frontmatter.project.contact}${$frontmatter.project.name}`" target="_blank"
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



<div class="flex justify-content-between align-items-center mt-6 pt-4 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.project.previousProject" :href="$frontmatter.project.previousProject.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-chevron-left mr-2"></i>
      <div class="flex flex-column">
        <span class="text-sm text-color-secondary">Previous Project</span>
        <span class="font-semibold">{{ $frontmatter.project.previousProject.name }}</span>
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
        <span class="font-semibold">{{ $frontmatter.project.nextProject.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2"></i>
    </a>
  </div>
</div>

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>