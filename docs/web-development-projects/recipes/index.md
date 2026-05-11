---
title: "Recipes"
description: "A community-driven platform where food lovers share, discover, and discuss recipes from around the world. Connect, cook, and create with fellow culinary enthusiasts."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Recipes"
  description: "A community-driven platform where food lovers share, discover, and discuss recipes from around the world. Connect, cook, and create with fellow culinary enthusiasts."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Food Blogging"
  year: "2020"
  price: 0
  currency: "USD"
  link: "http://recipes-client.s3-website.ap-south-1.amazonaws.com/"
  codeLink: "https://github.com/heartstchr/recipe"
  contact: ""
  stack: ["Javascript","Vuedotjs","quasar/black/white","Vite","Axios","Express/black/white","MongoDB","Git","amazonec2","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/home/projects/Recipe.webp","alt":"Recipes - Login page"},{"itemImageSrc":"/img/projects/recipe/login.webp","alt":"Recipes - Login page"},{"itemImageSrc":"/img/projects/recipe/register.webp","alt":"Recipes - Registration page"},{"itemImageSrc":"/img/projects/recipe/home.webp","alt":"Recipes - Home page"},{"itemImageSrc":"/img/projects/recipe/direction.webp","alt":"Recipes - Directions page"},{"itemImageSrc":"/img/projects/recipe/ingredients.webp","alt":"Recipes - Ingredients page"},{"itemImageSrc":"/img/projects/recipe/addrecipe.webp","alt":"Recipes - Add Recipe page"},{"itemImageSrc":"/img/projects/recipe/search.webp","alt":"Recipes - Search page"},{"itemImageSrc":"/img/projects/recipe/share.webp","alt":"Recipes - Share screen"}]
  features: [{"text":"Authentication with Incognigo pool"},{"text":"Create and Share recipes with friends"},{"text":"Search recipes"},{"text":"List and share your recipes direction or ingradients"},{"text":"Rate and review for recipe"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Qatar Airways widget","link":"/web-development-projects/qatar-airways-widget/"}
  nextProject: {"name":"Frontend of Tv Maze API","link":"/web-development-projects/frontend-of-tv-maze-api/"}
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