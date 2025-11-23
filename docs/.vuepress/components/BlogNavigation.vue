<template>
    <div class="flex justify-content-between align-items-center mt-6 pt-4 border-top-1 surface-border">
        <div class="flex-1">
            <a v-if="previousPost" :href="previousPost.link"
                class="flex align-items-center no-underline text-color-secondary hover:text-primary"
                :aria-label="'Previous Post: ' + previousPost.title">
                <i class="pi pi-chevron-left mr-2"></i>
                <div class="flex flex-column">
                    <span class="text-sm text-color-secondary">Previous Post</span>
                    <span class="font-semibold" style="color: var(--theme-color)">{{ previousPost.title }}</span>
                </div>
            </a>
        </div>
        <div class="flex-1 text-center">
            <a href="/posts/" class="no-underline text-color-secondary hover:text-primary" aria-label="View All Posts">
                <i class="pi pi-th-large mr-2"></i>
                All Posts
            </a>
        </div>
        <div class="flex-1 text-right">
            <a v-if="nextPost" :href="nextPost.link"
                class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary"
                :aria-label="'Next Post: ' + nextPost.title">
                <div class="flex flex-column text-right">
                    <span class="text-sm text-color-secondary">Next Post</span>
                    <span class="font-semibold" style="color: var(--theme-color)">{{ nextPost.title }}</span>
                </div>
                <i class="pi pi-chevron-right ml-2"></i>
            </a>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '@data/posts.js'

const route = useRoute()
const currentPostPath = route.path

// Find current post index
const currentIndex = posts.findIndex(post => post.link === currentPostPath)

// Get previous and next posts
const previousPost = computed(() => {
    if (currentIndex > 0) {
        return posts[currentIndex - 1]
    }
    return null
})

const nextPost = computed(() => {
    if (currentIndex < posts.length - 1) {
        return posts[currentIndex + 1]
    }
    return null
})
</script>
