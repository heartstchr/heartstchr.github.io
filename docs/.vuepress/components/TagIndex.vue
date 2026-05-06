<script setup>
import { computed } from 'vue';
import { posts } from "@data/posts.js";

const toKebabCase = (str) => {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

const tags = computed(() => {
    const allTags = new Set();
    posts.forEach((post) => {
        if (Array.isArray(post.tags)) {
            post.tags.forEach((tag) => allTags.add(String(tag).toLowerCase()));
        }
    });
    return Array.from(allTags).sort();
});
</script>

<template>
    <div class="grid m-0 p-0">
        <div v-for="tag in tags" :key="tag" class="col-12 md:col-4 lg:col-3 p-2">
            <a :href="`/tags/${toKebabCase(tag)}/`" class="no-underline block p-2 surface-card border-round-2xl border-1 border-100 shadow-1 hover:shadow-3 transition-all text-center h-full">
                <div class="text-primary font-bold text-md mb-1">#{{ tag }}</div>
            </a>
        </div>
    </div>
</template>
