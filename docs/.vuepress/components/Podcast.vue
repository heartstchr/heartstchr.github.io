<template>
    <div v-if="videos.length === 0">
        <a href="https://www.youtube.com/@stackseekers" target="_blank" aria-label="Watch the Stack Seekers podcast on YouTube">
            <Button label="Watch on youtube" icon="pi pi-youtube" iconPos="left" class="w-full" raised rounded />
        </a>
    </div>
    <div v-else class="flex-column w-full">
        <div class="flex-row flex-wrap md:gap-4 w-full">
            <div v-for="video in paginatedVideos" :key="video.id" class="flex p-0 flex-column md:flex-row gap-1">
                <a :href="'https://www.youtube.com/watch?v=' + video.id" target="_blank" class="no-underline">
                    <Card
                        class="shadow-1 vp-feature-item my-2 flex-column md:flex-row cursor-pointer hover:shadow-2 transition-all duration-200">
                        <template #header>
                            <div class="flex-shrink m-auto" style="width: 300px;">
                                <img :src="video.thumbnail" :alt="video.title" class="w-full border-round-md"
                                    loading="eager" fetchpriority="high" />
                            </div>
                        </template>
                        <template #title>
                            <div class="text-sm line-height-4">{{ video.title }}</div>
                        </template>
                        <template #subtitle>
                            <!-- <div class="text-xs line-height-3">{{ video.publishedAt }}</div> -->
                        </template>
                        <template #content>
                        </template>
                        <template #footer>
                            <div class="flex gap-3 m-1 align-content-end">
                                <Button label="Watch on youtube" icon="pi pi-youtube" iconPos="left" class="w-full"
                                    raised rounded :aria-label="`Watch ${video.title} on YouTube`" />
                            </div>
                        </template>
                    </Card>
                </a>
            </div>
        </div>

        <Pagination v-if="showPagination" :totalRecords="videos.length" :rowsPerPage="3" @page-change="onPageChange" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { youtubeVideos } from '@data/youtubeVideos.ts';
import { fetchAndSplitVideos } from '../services/youtubeService';

const props = defineProps({
    showPagination: {
        type: Boolean,
        default: true
    }
});

const videos = ref((youtubeVideos.podcastVideos || []).map((v) => ({ ...v })));
const currentPage = ref(0);
const rowsPerPage = ref(3);

const paginatedVideos = computed(() => {
    if (!props.showPagination) {
        return videos.value; // Return all videos when pagination is disabled
    }
    const start = currentPage.value * rowsPerPage.value;
    const end = start + rowsPerPage.value;
    return videos.value.slice(start, end);
});

const onPageChange = (event) => {
    currentPage.value = Math.floor(event.first / event.rows);
    rowsPerPage.value = event.rows;
};

onMounted(async () => {
    try {
        const { podcastVideos } = await fetchAndSplitVideos();
        if (podcastVideos.length) videos.value = podcastVideos;
    } catch (error) {
        console.error('Error loading videos:', error);
    }
});
</script>

<style scoped>
.image-container {
    flex-shrink: 0;
}
</style>