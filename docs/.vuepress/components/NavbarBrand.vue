<template>
    <ClientOnly>
        <RouterLink :to="logoLink" class="navbar-logo" aria-label="Home">
            <div class="flex align-items-center gap-2">
                <img v-if="logo" class="vp-nav-logo" :src="logo" :alt="logoAlt" />
                <div class="text-lg font-semibold" style="color: #000000;">{{ siteTitle }}</div>
            </div>
        </RouterLink>
    </ClientOnly>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSiteData } from "vuepress/client";
// Theme config (logo lives here, not in site locales)
// eslint-disable-next-line
import { themeData } from "@internal/themeData";

const site = useSiteData();
const theme: any = themeData;

const logo = computed(() => (theme?.value ?? theme)?.logo);
const logoAlt = computed(() => (theme?.value ?? theme)?.logoAlt || `${site.value.title} Logo`);
const logoLink = computed(() => "/");
const siteTitle = computed(() => site.value.title);
</script>
