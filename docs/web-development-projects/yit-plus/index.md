---
title: "Yit Plus"
description: "YIT Plus is a modern digital service helping you to monitor data related to your home and apartment association."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Yit Plus"
  description: "YIT Plus is a modern digital service helping you to monitor data related to your home and apartment association."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Housing company"
  year: "2025"
  price: 0
  currency: "USD"
  link: "https://plus.yitgroup.com/"
  codeLink: ""
  contact: ""
  stack: ["Javascript","Vuedotjs","Axios","Express/black/white","nodedotjs","MongoDB","mysql","Git","mailgun","kentico","amazonec2","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/home/projects/YIT_plus.webp","alt":"YIT Plus - Login page"},{"itemImageSrc":"/img/projects/yitplus/login.webp","alt":"YIT Plus - Login page"},{"itemImageSrc":"/img/projects/yitplus/home.webp","alt":"YIT Plus - Home page"},{"itemImageSrc":"/img/projects/yitplus/discussion_board.webp","alt":"YIT Plus - Discussion board"},{"itemImageSrc":"/img/projects/yitplus/document.webp","alt":"YIT Plus - Document management page"},{"itemImageSrc":"/img/projects/yitplus/one_year_warranty.webp","alt":"YIT Plus - One year warranty page"},{"itemImageSrc":"/img/projects/yitplus/service_lounge.webp","alt":"YIT Plus - Service lounge page"},{"itemImageSrc":"/img/projects/yitplus/service_request.webp","alt":"YIT Plus - Service request category"},{"itemImageSrc":"/img/projects/yitplus/service_request_category.webp","alt":"YIT Plus - Service request category management"},{"itemImageSrc":"/img/projects/yitplus/admin.webp","alt":"YIT Plus - Admin dashboard"}]
  features: []
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Tech Create","link":"/web-development-projects/tech-create/"}
  nextProject: {"name":"Qatar Airways widget","link":"/web-development-projects/qatar-airways-widget/"}
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