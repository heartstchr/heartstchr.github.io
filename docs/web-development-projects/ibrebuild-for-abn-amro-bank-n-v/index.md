---
title: "IBRebuild for ABN AMRO BANK N.V."
description: "ABN AMRO Bank N.V. is a Dutch bank with headquarters in Amsterdam. The internet banking (IB) application for the bank customers which is migrating from old Angular JS to Vue.js integrated with Microsoft Azure cloud services as IBRebuild."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "IBRebuild for ABN AMRO BANK N.V."
  description: "ABN AMRO Bank N.V. is a Dutch bank with headquarters in Amsterdam. The internet banking (IB) application for the bank customers which is migrating from old Angular JS to Vue.js integrated with Microsoft Azure cloud services as IBRebuild."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Banking"
  year: "2022"
  price: 0
  currency: "USD"
  link: "https://www.abnamro.nl/en/personal/index.html"
  codeLink: ""
  contact: ""
  stack: ["Javascript","Angular/black/white","Vuedotjs","Axios","webpack","lit","bitbucket","npm","nodedotjs","Git","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/home/projects/ABN_Amro.webp","alt":"IBRebuild for ABN AMRO BANK N.V. - Cover page"}]
  features: []
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Marketplace Booking Platform","link":"/web-development-projects/marketplace-booking-platform/"}
  nextProject: {"name":"Emerald Design System","link":"/web-development-projects/emerald-design-system/"}
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