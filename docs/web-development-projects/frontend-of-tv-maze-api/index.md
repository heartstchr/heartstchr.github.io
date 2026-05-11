---
title: "Frontend of Tv Maze API"
description: "TVmaze- Add TV information to your website or app."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Frontend of Tv Maze API"
  description: "TVmaze- Add TV information to your website or app."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Entertainment"
  year: "2020"
  price: 0
  currency: "USD"
  link: "https://heartstchr.github.io/tvmaze/"
  codeLink: "https://github.com/heartstchr/tvshows"
  contact: ""
  stack: ["Javascript","Vuedotjs","Quasar/black/white","Axios","Git","amazonec2","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/home/projects/tvmaze.webp","alt":"TVmaze - Home page"},{"itemImageSrc":"/img/projects/tvmaze/home.webp","alt":"TVmaze - Home page"},{"itemImageSrc":"/img/projects/tvmaze/search.webp","alt":"TVmaze - Search page"},{"itemImageSrc":"/img/projects/tvmaze/episodes.webp","alt":"TVmaze - Episodes tab"},{"itemImageSrc":"/img/projects/tvmaze/cast.webp","alt":"TVmaze - Cast tab"},{"itemImageSrc":"/img/projects/tvmaze/genres.webp","alt":"TVmaze - Genres"}]
  features: [{"text":"Popular Tv shows sorted based on rating"},{"text":"Tv shows based on genre"},{"text":"Search Tv shows"},{"text":"Details Tv shows"},{"text":"Episodes, cast and crew of a Tv shows"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Recipes","link":"/web-development-projects/recipes/"}
  nextProject: {"name":"Trokka Attraction","link":"/web-development-projects/trokka-attraction/"}
---

<ProjectHero :project="$frontmatter.project" />

<ProjectGallery :images="$frontmatter.project.images" />

<ProjectTabs v-if="$frontmatter.project?.perspective?.executive" :project="$frontmatter.project">



</ProjectTabs>

<template v-else>

<ProjectTabs :project="$frontmatter.project" />

<div v-pre class="project-markdown-content text-lg line-height-4 mb-8">



</div>

</template>

<ConsultingBridge />

<AuditCTA />

<RelatedServices />

<ProjectNavigation :previous="$frontmatter.project?.previousProject" :next="$frontmatter.project?.nextProject" />

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>