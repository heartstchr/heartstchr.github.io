<!-- filepath: /Users/stchr/Documents/all/repo/heartstchr.github.io vuepress/docs/.vuepress/components/BlogList.vue -->
<template>
    <ul class="blog-list">
      <li v-for="item in items" :key="item.link" class="mb-6">
        <h3>
          <a :href="item.link">{{ item.title }}</a>
        </h3>
        <p class="text-sm text-gray-700">{{ item.summary }}</p>
      </li>
    </ul>
  </template>
  
  <script setup>
  defineProps({
    items: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .blog-list {
    list-style: none;
    padding: 0;
  }
  </style>