---
title: "Demat Account Open"
description: "Open a Demat Account Online at Upstox"
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Demat Account Open"
  description: "Open a Demat Account Online at Upstox"
  software: "Web"
  schema: "https://schema.org/BusinessApplication"
  domain: "FinTech"
  year: "2017"
  price: 0
  currency: "USD"
  link: "https://upstox.com/open-demat-account/"
  codeLink: ""
  contact: ""
  stack: ["Angular/black/white","MongoDB","mysql","loopback","npm","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/openDemat.webp","alt":"Open a Demat Account Online: Demat Account Opening at Upstox"}]
  features: [{"text":"Open a Demat account with document upload."},{"text":"PAN, Aadhar, IPV, and cancelled check verification"},{"text":"Lead to CRM system"},{"text":"Scrutiny of lead"},{"text":"Upload details to NSE, BSE, and MCX"},{"text":"Report based on the flow of lead"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Partner Dashboard Upstox","link":"/web-development-projects/partner-dashboard-upstox/"}
  nextProject: {"name":"Call Matrix","link":"/web-development-projects/call-matrix/"}
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