---
title: Recipes
description: A community-driven platform where food lovers share, discover, and discuss recipes from around the world. Connect, cook, and create with fellow culinary enthusiasts.
layout: Layout
project:
  name: "Recipes"
  description: "A community-driven platform where food lovers share, discover, and discuss recipes from around the world. Connect, cook, and create with fellow culinary enthusiasts."
  software: "Web"
  domain: "Food Blogging"
  year: "2020"
  stack: ["Javascript","Vuedotjs","quasar/black/white","Vite","Axios","Express/black/white","MongoDB","Git","amazonec2","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/home/projects/Recipe.webp","alt":"Recipes - Login page | Recipes"},{"itemImageSrc":"/img/projects/recipe/login.webp","alt":"Recipes - Login page | Recipes"},{"itemImageSrc":"/img/projects/recipe/register.webp","alt":"Recipes - Register page | Recipes"},{"itemImageSrc":"/img/projects/recipe/home.webp","alt":"Recipes - Home page | Recipes"},{"itemImageSrc":"/img/projects/recipe/direction.webp","alt":"Recipes - Directions page | Recipes"},{"itemImageSrc":"/img/projects/recipe/ingredients.webp","alt":"Recipes - Ingredients page | Recipes"},{"itemImageSrc":"/img/projects/recipe/addrecipe.webp","alt":"Recipes - Add Recipe page | Recipes"},{"itemImageSrc":"/img/projects/recipe/search.webp","alt":"Recipes - Search page | Recipes"},{"itemImageSrc":"/img/projects/recipe/share.webp","alt":"Recipes - Share screen | Recipes"}]
  features: [{"text":"Authentication with Incognigo pool"},{"text":"Create and Share recipes with friends"},{"text":"Search recipes"},{"text":"List and share your recipes direction or ingradients"},{"text":"Rate and review for recipe"}]
---

<ProjectCard :project="$frontmatter.project" />
