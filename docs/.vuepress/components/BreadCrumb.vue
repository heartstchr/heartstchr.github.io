<template>
  <nav ref="rootEl" class="vp-breadcrumb" :class="{ disable: !enable }">
    <ol v-if="enable" vocab="https://schema.org/" typeof="BreadcrumbList">
      <li
        v-for="(item, index) in config"
        :key="item.path"
        :class="{ 'is-active': config.length - 1 === index }"
        property="itemListElement"
        typeof="ListItem"
      >
        <RouteLink :to="item.path" property="item" typeof="WebPage">
          <VPIcon v-if="enableIcon" :icon="item.icon" />
          <span property="name">{{ item.title || "Unknown" }}</span>
        </RouteLink>
        <meta property="position" :content="index + 1" />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { RouteLink, resolveRoute } from "vuepress/client";
import { useData } from "@theme-hope/composables/useData";
import { getAncestorLinks } from "@theme-hope/utils/getAncestorLinks";

const { frontmatter, page, routeLocale, routePath, themeLocale } = useData();

const config = ref<{ title: string; icon?: string; path: string }[]>([]);
const rootEl = ref<HTMLElement | null>(null);

const enableIcon = computed(() =>
  frontmatter.value.breadcrumbIcon ?? themeLocale.value.breadcrumbIcon ?? true,
);
const enable = computed(() =>
  (frontmatter.value.breadcrumb ?? themeLocale.value.breadcrumb ?? true) &&
  config.value.length > 1,
);

const getBreadCrumbConfig = () => {
  const breadcrumbConfig = getAncestorLinks(page.value.path, routeLocale.value)
    .map(({ link, name }) => {
      const { path, meta, notFound } = resolveRoute(link);
      if (notFound || meta.breadcrumbExclude) return null;
      return {
        title: meta.shortTitle || meta.title || name,
        icon: meta.icon,
        path,
      };
    })
    .filter((item) => item != null);
  if (breadcrumbConfig.length > 1) config.value = breadcrumbConfig;
};

const positionBreadcrumb = () => {
  nextTick(() => {
    const el = rootEl.value;
    if (!el) return;
    const hero = document.querySelector("#markdown-content > section.hero-newage");
    if (hero) {
      if (hero.nextElementSibling !== el) hero.after(el);
      return;
    }
    const contentWrapper =
      document.querySelector("main.vp-page > div[vp-content], main.vp-page #markdown-content");
    if (!contentWrapper) return;
    if (contentWrapper.previousElementSibling !== el) {
      contentWrapper.before(el);
    }
  });
};

watch(routePath, () => {
  getBreadCrumbConfig();
  positionBreadcrumb();
});

watch(enable, positionBreadcrumb);

onMounted(() => {
  getBreadCrumbConfig();
  positionBreadcrumb();
});
</script>