---
title: "Catch That Bus"
description: "Book Malaysia and Singapore bus tickets online."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Catch That Bus"
  description: "Book Malaysia and Singapore bus tickets online."
  software: "Web / IOS APP"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Leisure, travel, and tourism"
  year: "2019"
  price: 0
  currency: "USD"
  link: ""
  codeLink: ""
  contact: ""
  stack: ["Javascript","VuedotJs","Axios/black/white","Express/black/white","MongoDB","Git","amazonec2","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/catchthatbus.webp","alt":"Book Malaysia and Singapore bus tickets online. | CatchThatBus"},{"itemImageSrc":"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.webp/230x0w.webp","alt":"IOS app for booking Malaysia and Singapore bus tickets online | CatchThatBus"}]
  features: [{"text":"Search for a bus by choosing from the destination and to the destination in Malaysia for dates."},{"text":"Sort and filter on available buses"},{"text":"Seat visualization of a bus"},{"text":"Booking system to handle concurrent requests"},{"text":"Discount system based on coupon code"},{"text":"Insurance integration for travellers"},{"text":"Payment system using wallets and cards"},{"text":"Webview for Boost wallet"},{"text":"Multiple language support"},{"text":"Multiple Currency support"},{"text":"Bus Booked history"},{"text":"Bus onboarding system for admin and bus operator"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Trokka Attraction","link":"/web-development-projects/trokka-attraction/"}
  nextProject: {"name":"Partner Dashboard Upstox","link":"/web-development-projects/partner-dashboard-upstox/"}
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