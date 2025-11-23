<template>
  <div class="tag-page-container pt-4 max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center capitalize">
      Posts tagged with "{{ currentTag }}"
    </h1>
    
    <BlogList v-if="filteredPosts.length > 0" :items="filteredPosts" />
    
    <div v-if="filteredPosts.length === 0" class="text-center mt-8">
      <p class="text-xl">No posts found with this tag.</p>
      <a href="/posts/" class="text-primary hover:underline mt-4 inline-block">View all posts</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { usePageFrontmatter } from 'vuepress/client'
import { posts } from '@data/posts.js'
import BlogList from './BlogList.vue'

const frontmatter = usePageFrontmatter()

const currentTag = computed(() => {
  return frontmatter.value.tag || ''
})

const filteredPosts = computed(() => {
  if (!currentTag.value) return []
  
  const normalizedTag = currentTag.value.toLowerCase()
  
  return posts.filter(post => {
    const postTags = (post.tags || []).map(t => String(t).toLowerCase())
    return postTags.includes(normalizedTag)
  })
})
</script>
