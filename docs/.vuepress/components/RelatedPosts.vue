<template>
    <div v-if="relatedPosts.length > 0" class="mt-6 pt-6 border-top-1 surface-border">
        <h2 class="text-2xl font-bold mb-4" style="color: var(--theme-color)">Related Posts</h2>
        <div class="flex flex-wrap gap-4">
            <div v-for="post in relatedPosts" :key="post.link" class="md:flex-1">
                <Svg />
                <div class="p-3">
                    <h3 class="blog-title m-0 mb-2 text-xl font-semibold">
                        <a :href="post.link" class="text-decoration-none hover:underline">{{ post.title }}</a>
                    </h3>
                    <p class="blog-summary m-0 text-sm text-gray-700 line-height-3">{{ post.summary }}</p>
                    <div class="my-1  flex flex-row items-center justify-content-between">
                        <a :href="post.link" class="text-sm">
                            Read More &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePageFrontmatter } from 'vuepress/client'
import { posts } from '@data/posts.js'
const route = useRoute()
const frontmatter = usePageFrontmatter()

// Get current post tags from frontmatter
const currentPostTags = computed(() => {
    const tags = frontmatter.value?.tags || []
    // Normalize tags to lowercase for comparison
    return Array.isArray(tags) ? tags.map(tag => String(tag).toLowerCase()) : []
})

// Get current post path
const currentPostPath = computed(() => route.path)

// Find related posts based on tag similarity
const relatedPosts = computed(() => {
    if (!currentPostTags.value || currentPostTags.value.length === 0) {
        return []
    }

    // Calculate similarity score for each post
    const postsWithScores = posts
        .filter(post => post.link !== currentPostPath.value) // Exclude current post
        .map(post => {
            // Normalize post tags to lowercase
            const postTags = (post.tags || []).map(tag => String(tag).toLowerCase())

            // Calculate intersection of tags
            const commonTags = currentPostTags.value.filter(tag =>
                postTags.includes(tag)
            )

            // Calculate similarity score (number of common tags)
            const score = commonTags.length

            return {
                ...post,
                score,
                commonTags
            }
        })
        .filter(post => post.score > 0) // Only include posts with at least one matching tag
        .sort((a, b) => b.score - a.score) // Sort by score descending
        .slice(0, 3) // Limit to 3 related posts for 3-column layout
        .map(({ score, commonTags, ...post }) => post) // Remove score and commonTags from output

    return postsWithScores
})
</script>
