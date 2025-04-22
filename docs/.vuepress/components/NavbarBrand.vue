<template>
    <ClientOnly>
        <RouterLink :to="logoLink" class="navbar-logo" aria-label="Home">
            <img v-if="logo" class="vp-nav-logo" :src="logo" :alt="logoAlt" />
            <span v-else class="site-name">{{ siteTitle }}</span>
        </RouterLink>
    </ClientOnly>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSiteData } from "@vuepress/client"; // Site data access (e.g., site title)

const site = useSiteData();  // Access site data (including site title)
const themeConfig = site.value.locales["/"];  // Access themeConfig directly

const logo = computed(() => themeConfig.logo);  // Access logo from themeConfig
const logoAlt = computed(() => themeConfig.logoAlt || `${site.value.title} Logo`);  // Access logoAlt or fall back to site title
const logoLink = computed(() => "/");  // Homepage link
const siteTitle = computed(() => site.value.title);  // Site title
</script>
