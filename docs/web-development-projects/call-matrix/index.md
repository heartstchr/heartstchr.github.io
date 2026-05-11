---
title: "Call Matrix"
description: "Call Intelligence, Marketing, and Analytics Platform"
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Call Matrix"
  description: "Call Intelligence, Marketing, and Analytics Platform"
  software: "Web"
  schema: "https://schema.org/BusinessApplication"
  domain: "Digital Marketing"
  year: "2015"
  price: 0
  currency: "USD"
  link: "https://callmatrix.io/"
  codeLink: ""
  contact: ""
  stack: ["Angular/black/white","Nodedotjs","d3","MongoDB","MySQL","Express/black/white","googleads","googlesheets","twilio","DigitalOcean"]
  images: [{"itemImageSrc":"/img/projects/callmatrix/callmatrix.webp","alt":"CallMatrix - Call Intelligence, Marketing, and Analytics Platform"},{"itemImageSrc":"/img/projects/callmatrix/mobistreak.webp","alt":"CallMatrix - Call Intelligence, Marketing, and Analytics Platform"}]
  features: [{"text":"Create a campaign for the call"},{"text":"Create a bundle of campaigns for the call"},{"text":"Buy local & toll-free numbers"},{"text":"Call Recording and Off-Hour Call Handling"},{"text":"Funnel to redirect the call based on the multi-level IVR"},{"text":"Report of bundle, CDR, and offer based on hour, week, and geo location"},{"text":"Dashboard to get a birds-eye view"},{"text":"Google AdWords API integration"},{"text":"User authorization based on role"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Demat Account Open","link":"/web-development-projects/demat-account-open/"}
  nextProject: {"name":"Command Line Dictionary","link":"/web-development-projects/command-line-dictionary/"}
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