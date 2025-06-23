<template>
    <div v-if="videos.length === 0">
        <a href="https://www.youtube.com/@stackseekers" target="_blank">
            <Button label="Watch on youtube" icon="pi pi-youtube" iconPos="left" class="w-full" raised rounded />
        </a>
    </div>
    <div v-else class="flex-row flex-wrap md:gap-4 w-full">
        <div v-for="video in videos" :key="video.id" class="flex p-0 flex-row gap-1">
            <Card class="shadow-1 vp-feature-item my-2 flex-row">
                <template #header>
                    <div class="flex-shrink m-3" style="width: 300px;">
                        <img :src="video.thumbnail" :alt="video.title" class="w-full border-round-md" loading="eager"
                            fetchpriority="high" />
                    </div>
                </template>
                <template #title>
                    <div class="text-xs line-height-3">{{ video.title }}</div>
                </template>
                <template #subtitle>
                    <div class="text-xs line-height-3">{{ video.publishedAt }}</div>
                </template>
                <template #content>
                </template>
                <template #footer>
                    <div class="flex gap-3 m-1 align-content-end">
                        <a :href="'https://www.youtube.com/watch?v=' + video.id" target="_blank">
                            <Button label="Watch on youtube" icon="pi pi-youtube" iconPos="left" class="w-full" raised
                                rounded />
                        </a>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchAndSplitVideos } from '../services/youtubeService';

const videos = ref([]);
onMounted(async () => {
    try {
        const { podcastVideos } = await fetchAndSplitVideos();
        videos.value = podcastVideos;
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