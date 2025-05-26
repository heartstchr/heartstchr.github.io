<!-- filepath: /Users/stchr/Documents/all/repo/heartstchr.github.io vuepress/docs/.vuepress/components/BlogList.vue -->
<template>
    <ul class="blog-list flex flex-row">
      <li v-for="item in items" :key="item.link" class="mb-6 col-6">
        <div class="text-xs text-gray-500 mb-1">
          <h3>
            <a :href="item.link">{{ item.title }}</a>
          </h3>
          <div>
            <i class="pi pi-calendar mr-2"></i>
            {{ new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
          </div>
          <p class="text-sm text-gray-700">{{ item.summary }}</p>
        </div>
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