<template>
  <div v-if="!frontmatter.hidePageTitle" class="vp-page-title">
    <h1>
      <VPIcon v-if="themeLocale.titleIcon !== false" :icon="frontmatter.icon" />
      {{ page.title }}
    </h1>
    <PageInfo :info="info" :items="items" />
    <hr />
  </div>
</template>

<script setup lang="ts">
import PageInfo from "@theme-hope/components/info/PageInfo";
import { useData } from "@theme-hope/composables/useData";
import { usePageInfo } from "@theme-hope/composables/usePageInfo";

const { frontmatter, page, themeLocale } = useData();
const { info, items } = usePageInfo();
</script>