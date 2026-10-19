<template>
  <div
    vp-content
    :class="{ custom: custom, 'vp-project-content': isProjectContent }"
  >
    <slot name="contentBefore" />
    <Content id="markdown-content" />
    <AdSlot v-if="isPost" :key="route.path" :ad-slot="AD_UNITS.postEnd" />
    <slot name="contentAfter" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { Content, useRoute } from "vuepress/client";
import AdSlot from "./AdSlot.vue";
import { AD_UNITS } from "../data/ads";
import { insertInlineAd } from "../utils/ads";

defineProps<{ custom?: boolean }>();

const route = useRoute();

const isProjectContent = computed(() =>
  /^\/web-development-projects\//.test(route.path),
);

const isPost = computed(() => /^\/posts\/[^/]+\/?$/.test(route.path));

onMounted(() => {
  if (isPost.value) {
    insertInlineAd("markdown-content", AD_UNITS.postInContent);
  }
});
</script>
