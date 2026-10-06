<template>
    <div v-if="relatedPosts.length > 0" class="mt-6 pt-6 border-top-1 surface-border">
        <h2 class="text-2xl font-bold mb-4" style="color: var(--theme-color)">Related Posts</h2>
        <div class="flex flex-wrap gap-4">
            <div v-for="post in relatedPosts" :key="post.link" class="md:flex-1">
                <Svg />
                <div class="p-3">
                    <h3 class="blog-title m-0 mb-2 text-xl font-semibold">
                        <a :href="post.link" class="text-decoration-none hover:underline" :aria-label="'Read related post: ' + post.title">{{ post.title }}</a>
                    </h3>
                    <p class="blog-summary m-0 text-sm text-gray-700 line-height-3">{{ post.summary }}</p>
                    <div class="my-1  flex flex-row items-center justify-content-between">
                        <a :href="post.link" class="text-sm" :aria-label="'Read more about ' + post.title">
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
import { audienceTags, clustersForTags, buildTagIdf, buildClusterIdf } from '@data/postClusters.js'
const route = useRoute()
const frontmatter = usePageFrontmatter()

const LIMIT = 3

// Audience tags signal who a post is for, not what it is about. They still
// count as a weak match, but at a fraction of the weight of a topical tag.
const AUDIENCE_WEIGHT = 0.25
// Cluster agreement is the stronger signal, so it outweighs raw tag overlap.
const CLUSTER_WEIGHT = 2

const audienceTagSet = new Set(audienceTags)

// Normalize a post's tags to lowercase once, up front.
const normalize = (tags) => (Array.isArray(tags) ? tags.map((tag) => String(tag).toLowerCase()) : [])

const corpusTags = posts.map((post) => normalize(post.tags))
const tagIdf = buildTagIdf(corpusTags)
const clusterIdf = buildClusterIdf(corpusTags)

const postsWithMeta = posts.map((post) => {
    const tags = normalize(post.tags)
    return {
        ...post,
        normalizedTags: tags,
        clusterIds: clustersForTags(tags)
    }
})

const idfFor = (map, key) => map.get(key) ?? 0

// Get current post tags from frontmatter
const currentPostTags = computed(() => normalize(frontmatter.value?.tags))

// Get current post path
const currentPostPath = computed(() => route.path)

const stripMeta = ({ normalizedTags, clusterIds, ...post }) => post

// Find related posts. Both signals are IDF-weighted so that a rare, specific
// match (github <-> git) outranks a broad one (freelancing <-> freelancing).
const relatedPosts = computed(() => {
    const currentTags = new Set(currentPostTags.value)
    const currentClusters = clustersForTags(currentPostTags.value)
    const currentCategory = frontmatter.value?.category

    const candidates = postsWithMeta.filter((post) => post.link !== currentPostPath.value)

    const scored = candidates
        .map((post) => {
            const tagScore = post.normalizedTags
                .filter((tag) => currentTags.has(tag))
                .reduce((sum, tag) => {
                    const weight = audienceTagSet.has(tag) ? AUDIENCE_WEIGHT : 1
                    return sum + idfFor(tagIdf, tag) * weight
                }, 0)

            const clusterScore = [...post.clusterIds]
                .filter((id) => currentClusters.has(id))
                .reduce((sum, id) => sum + idfFor(clusterIdf, id), 0)

            return {
                ...post,
                score: tagScore + clusterScore * CLUSTER_WEIGHT,
                isSameCategory: Boolean(currentCategory) && post.category === currentCategory
            }
        })
        .filter((post) => post.score > 0)
        .sort((a, b) => b.score - a.score || (a.date < b.date ? 1 : -1))

    // Topical matches, best first.
    const selected = scored.slice(0, LIMIT).map(stripMeta)

    // Backfill with same-category posts so a post never renders a one-item block
    // when its tags are unusually niche. Deliberately no recency backfill: an
    // unrelated "latest post" link carries no topical signal and reads as noise,
    // so it is better to render two genuinely related posts than three with a
    // filler.
    if (selected.length < LIMIT) {
        const taken = new Set([...selected.map((post) => post.link)])
        const backfill = candidates
            .filter((post) => !taken.has(post.link))
            .filter((post) => post.isSameCategory)
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .slice(0, LIMIT - selected.length)
            .map(stripMeta)

        selected.push(...backfill)
    }

    return selected.slice(0, LIMIT)
})
</script>
