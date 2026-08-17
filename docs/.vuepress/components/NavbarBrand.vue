<template>
    <ClientOnly>
        <RouterLink :to="logoLink" class="navbar-logo" aria-label="Home">
            <div class="flex items-center space-x-3">
                <img v-if="logo" class="vp-nav-logo" :src="logo" :alt="logoAlt" />
                <div class="text-lg font-semibold text-black transform translate-y-[2px]">{{ siteTitle }}</div>
            </div>
        </RouterLink>
    </ClientOnly>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSiteData } from "vuepress/client"; // Site data access (e.g., site title)

const site = useSiteData();  // Access site data (including site title)
const themeConfig = site.value.locales["/"];  // Access themeConfig directly

const logo = computed(() => themeConfig.logo);  // Access logo from themeConfig
const logoAlt = computed(() => themeConfig.logoAlt || `${site.value.title} Logo`);  // Access logoAlt or fall back to site title
const logoLink = computed(() => "/");  // Homepage link
const siteTitle = computed(() => site.value.title);  // Site title
</script>
