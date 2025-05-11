<script setup>
import { toKebabCase } from "../utils/index.js"; // Import your utility function

defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="px-4">
        <h2 itemprop="name" class="text-4xl font-bold p-0 m-0">
            <a :href="`/web-development-projects/${toKebabCase(project.name)}/`">
                {{ project.name }}
            </a>
        </h2>
        <div class="text-xs mt-2" itemprop="operatingSystem">
            {{ project.software }}
            <span class="mt-2"> - {{ project.domain }} </span>
            <a class="mt-2 font-italic no-underline"> ({{ project.year }})</a>
        </div>
    </div>
</template>