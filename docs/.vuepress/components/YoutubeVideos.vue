<template>
    <div v-if="videos.length === 0">
        <a href="https://www.youtube.com/@stackseekers" target="_blank">
            <Button label="Watch on youtube" icon="pi pi-youtube" iconPos="left" class="w-full" raised rounded />
        </a>
    </div>
    <div v-else class="flex flex-row flex-wrap md:gap-4 gap-1">
        <div v-for="video in videos" :key="video.id.videoId" class="grid my-6 md:col-6 p-0">
            <Card class="shadow-1 vp-feature-item m-1">
                <template #header>
                    <img :src="video.thumbnail" :alt="video.title" class="w-full border-round-md" />
                </template>
                <template #title>{{ video.title }}</template>
                <template #subtitle>{{ video.publishedAt }}</template>
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
import { fetchChannelVideos } from '../services/youtubeService';

const videos = ref([]);

onMounted(async () => {
    try {
        videos.value = await fetchChannelVideos();
    } catch (error) {
        console.error('Error loading videos:', error);
    }
});
</script>