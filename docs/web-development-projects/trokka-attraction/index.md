---
title: "Trokka Attraction"
description: "Book Attractions and Tours for Your Next Holiday"
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
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
  currency: "USD"
  link: "https://m.trokka.com/attraction"
  codeLink: ""
  contact: ""
  stack: ["Javascript","VuedotJs","Axios/black/white","Express/black/white","MongoDB","Git","amazonEC2","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/trokka.webp","alt":"Trokka.com | Book Attractions and Tours for Your Next Holiday"}]
  features: [{"text":"Show Tours and Attraction of Malaysia"},{"text":"Popular activities based on rating and demand"},{"text":"Activities and details based on location"},{"text":"Book and share attractions with other people"},{"text":"Discount system based on promo code"},{"text":"Payment system using Boost wallet and other payment methods"},{"text":"Custom CMS backend system to add, update, and delete tours and attractions"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Frontend of Tv Maze API","link":"/web-development-projects/frontend-of-tv-maze-api/"}
  nextProject: {"name":"Catch That Bus","link":"/web-development-projects/catch-that-bus/"}
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