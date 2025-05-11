<script setup>
import Svg from "./Svg.vue"; // Ensure this component exists
import { toKebabCase } from "../utils/index.js"; // Import your utility function
import { responsiveOptions } from "../data/responsive.js"
// Props
defineProps({
    project: {
        type: Object,
        required: true,
    },
    showHeader:{
        type: Boolean,
        default: false
    }
});
</script>
<template>
    <div class="vp-feature-item col-12 shadow-1 m-0 p-0" :id="toKebabCase(project.name)">
        <Svg />
        <div>
            <!-- Header Section -->
            <CardHeader v-if="showHeader" :project="project" />
            <div class="flex md:flex-row flex-column" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="md:col-6 col-12  px-4">
                    <div class="my-2 text-l line-height-3">{{ project.description }}</div>
                    <Stacks :stack="project.stack" :other-skills="project.otherSkills" />
                </div>
                <div class="md:col-6 col-12 px-4 pt-4">
                    <link itemprop="applicationCategory" :href="project.schema" />
                    <div v-if="project.images">
                        <div class="card" v-if="project.images.length != 1">
                            <Galleria :value="project.images" :responsiveOptions="responsiveOptions" :numVisible="5"
                                :circular="true" :showItemNavigators="true" :showThumbnails="true" :pt="{
                                    prevButton: { 'aria-label': 'Previous screen of project' },
                                    nextButton: { 'aria-label': 'Next screen of project' }
                                }">
                                <template #item="slotProps">
                                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                                        style="width: 100%; display: block" loading="eager" fetchpriority="high" />
                                </template>
                                <template #thumbnail="slotProps">
                                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
                                </template>
                            </Galleria>
                        </div>
                        <div class="card" v-else>
                            <img :src="project.images[0].itemImageSrc" :alt="project.images[0].alt"
                                style="width: 100%; display: block" loading="eager" fetchpriority="high" />
                        </div>
                        <div
                            class="flex flex-column justify-content-center align-items-center gap-2 my-4 w-full max-w-96">
                            <a :href="`/web-development-projects/${toKebabCase(project.name)}/`"
                                class="flex flex-row no-underline w-full">
                                <Button label="More details" icon="pi pi-info-circle" severity="secondary" raised
                                    rounded class="w-full mr-3" />
                            </a>
                            <a v-if="project.contact" :href="`${project.contact} ${project.name}`" target="_blank"
                                class="flex flex-row no-underline w-full">
                                <Button label="Get Custom Code" icon="pi pi-inbox" severity="secondary" raised rounded
                                    class="w-full" />
                            </a>
                            <a v-if="project.link" :href="project.link" target="_blank"
                                class="flex flex-row no-underline w-full">
                                <Button label="Live Demo" icon="pi pi-angle-double-right" severity="primary" raised
                                    rounded class="w-full" />
                            </a>
                            <a v-if="project.codeLink" :href="project.codeLink" target="_blank"
                                class="flex flex-row no-underline w-full">
                                <Button label="Get Started" icon="pi pi-github" severity="secondary" raised rounded
                                    class="w-full" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>