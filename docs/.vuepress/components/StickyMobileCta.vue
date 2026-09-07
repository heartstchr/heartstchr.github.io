<template>
  <div
    v-if="show"
    class="fixed bottom-0 left-0 w-full z-5 lg:hidden sticky-mobile-cta border-top-1"
    style="border-top-color: var(--vp-c-divider)"
  >
    <a :href="href" target="_blank" class="block no-underline">
      <Button
        :label="label"
        icon="pi pi-calendar"
        severity="primary"
        class="w-full text-lg font-bold py-3"
        raised
      />
    </a>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { usePageData, usePageFrontmatter } from "vuepress/client";

const page = usePageData();
const frontmatter = usePageFrontmatter();

const path = computed(() => page.value.path);
const isHome = computed(() => frontmatter.value.home === true || path.value === "/");
const isBlogListing = computed(() => path.value === "/posts/");
const isProjectsListing = computed(() => path.value === "/web-development-projects/");

const show = computed(() => isHome.value || isBlogListing.value || isProjectsListing.value);

const label = computed(() => {
  if (isHome.value) return "Book Call";
  if (isBlogListing.value) return "Book Strategy Call";
  if (isProjectsListing.value) return "Consult Strategy";
  return "Book a Call";
});

const href = computed(() => {
  const base = "https://cal.com/stackseekers/25min";
  if (isHome.value) return `${base}?utm_source=website&utm_medium=homepage&utm_campaign=homepage`;
  if (isProjectsListing.value) return `${base}?utm_source=website&utm_medium=cta&utm_campaign=book-call`;
  return base;
});
</script>

<style scoped>
.sticky-mobile-cta {
  background: color-mix(in srgb, var(--vp-c-bg) 92%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
