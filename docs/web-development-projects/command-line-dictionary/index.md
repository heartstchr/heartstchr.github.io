---
title: "Command Line Dictionary"
description: "A fast, lightweight Command Line Interface (CLI) for looking up word definitions, synonyms, and examples. Built for developers who live in the terminal."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Command Line Dictionary"
  description: "A fast, lightweight Command Line Interface (CLI) for looking up word definitions, synonyms, and examples. Built for developers who live in the terminal."
  software: "Terminal"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Ed Tech"
  year: "2020"
  price: 0
  currency: "USD"
  link: ""
  codeLink: "https://github.com/heartstchr/dic"
  contact: ""
  stack: ["npm","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/projects/dictionary.webp","alt":"CLI for Dictionary"}]
  features: [{"text":"Create help command for available commands"},{"text":"Definition of a word"},{"text":"Synonyms and antonyms of a word"},{"text":"Get example sentence from a word"},{"text":"Get word of the day"},{"text":"Play word game"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Call Matrix","link":"/web-development-projects/call-matrix/"}
  nextProject: {"name":"Stock Market","link":"/web-development-projects/stock-market/"}
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