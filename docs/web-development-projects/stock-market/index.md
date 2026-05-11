---
title: "Stock Market"
description: "A high-performance real-time data visualization platform that consumes socket-driven financial data and renders live, interactive D3.js charts with sub-second latency."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Stock Market"
  description: "A high-performance real-time data visualization platform that consumes socket-driven financial data and renders live, interactive D3.js charts with sub-second latency."
  software: "Web"
  schema: "https://schema.org/BusinessApplication"
  domain: "FinTech"
  year: "2016"
  price: 0
  currency: "USD"
  link: ""
  codeLink: "https://github.com/heartstchr/StockMarket"
  contact: ""
  stack: ["Socket.io/black/white","d3","angular/black/white","NodedotJS","gulp","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/stocks.webp","alt":"Consuming socket data and plotting a real-time D3 graph"}]
  features: [{"text":"Show realtime charts of a unit"},{"text":"Show history of a unit in charts"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Command Line Dictionary","link":"/web-development-projects/command-line-dictionary/"}
  nextProject: null
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