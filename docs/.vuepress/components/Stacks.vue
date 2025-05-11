<script setup>
// Props
defineProps({
    stack: {
        type: Array,
        required: true,
    },
    otherSkills: {
        type: Array,
        required: false,
    },
});
</script>

<template>
    <div class="flex grid mt-4 px-2">
        <Tag v-for="part in stack" :key="part" :value="part" class="m-1"
            style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color);">
            <div class="flex items-center gap-2 px-1">
                <img v-if="part" :src="`https://cdn.simpleicons.org/${part}`" :alt="part" :title="part"
                    style="width: 28px;" loading="lazy" fetchpriority="high" />
                <h4 class="text-base p-0 m-0 sr-only">{{ part }}</h4>
            </div>
        </Tag>
        <Tag v-for="skill in otherSkills" :key="skill" :value="skill" class="m-1"
            style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color);">
            <div class="flex items-center gap-2 px-1">
                <h4 class="text-base p-0 m-0">{{ skill }}</h4>
            </div>
        </Tag>
    </div>
</template>