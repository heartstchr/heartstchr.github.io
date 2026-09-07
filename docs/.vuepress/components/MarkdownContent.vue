<template>
  <div
    vp-content
    :class="{ custom: custom, 'vp-project-content': isProjectContent }"
  >
    <slot name="contentBefore" />
    <Content id="markdown-content" />
    <slot name="contentAfter" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Content, useRoute } from "vuepress/client";

defineProps<{ custom?: boolean }>();

const route = useRoute();

const isProjectContent = computed(() =>
  /^\/web-development-projects\//.test(route.path),
);
</script>