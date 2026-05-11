---
title: "Partner Dashboard Upstox"
description: "Open a sub-broker account with Upstox."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Partner Dashboard Upstox"
  description: "Open a sub-broker account with Upstox."
  software: "Web"
  schema: "https://schema.org/BusinessApplication"
  domain: "FinTech"
  year: "2018"
  price: 0
  currency: "USD"
  link: "https://upstox.com/sub-broker/"
  codeLink: ""
  contact: ""
  stack: ["Angular/black/white","MongoDB","mysql","loopback","npm","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/partnerUpstox/partnerUpstox.webp","alt":"Partner Dashboard Upstox - Cover page"},{"itemImageSrc":"/img/projects/partnerUpstox/dashboard.webp","alt":"Partner Dashboard Upstox - Dashboard"},{"itemImageSrc":"/img/projects/partnerUpstox/leads.webp","alt":"Partner Dashboard Upstox - Leads management"},{"itemImageSrc":"/img/projects/partnerUpstox/customer.webp","alt":"Partner Dashboard Upstox - Customer management"},{"itemImageSrc":"/img/projects/partnerUpstox/earning.webp","alt":"Partner Dashboard Upstox - Earnings report"}]
  features: [{"text":"Refer and earn program"},{"text":"Track lead referred"},{"text":"Ambassador program"},{"text":"Royalty program"},{"text":"Track customer referred"},{"text":"Dashboard to show earnings based on the program"},{"text":"Search by name and UCC"},{"text":"Earning report based on the customer trade"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Catch That Bus","link":"/web-development-projects/catch-that-bus/"}
  nextProject: {"name":"Demat Account Open","link":"/web-development-projects/demat-account-open/"}
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