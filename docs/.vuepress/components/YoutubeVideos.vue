<template>
    <div v-if="videos.length === 0">
        <a href="https://www.youtube.com/@stackseekers" target="_blank" aria-label="Watch the Stack Seekers channel on YouTube">
            <Button label="Watch on youtube" icon="pi pi-youtube" iconPos="left" class="w-full" raised rounded />
        </a>
    </div>
    <div v-else class="flex flex-row flex-wrap md:gap-4 gap-1">
        <div v-for="video in videos" :key="video.id" class="grid my-6 md:col-6 p-0">
            <Card class="shadow-1 vp-feature-item m-1">
                <template #header>
                    <a :href="video.url || 'https://www.youtube.com/watch?v=' + video.id" target="_blank" :aria-label="`Watch ${video.title} on YouTube`">
                        <img :src="video.thumbnail" :alt="video.title" class="w-full border-round-md" loading="eager"
                            fetchpriority="high" />
                    </a>
                </template>
                <template #title>
                    <a :href="video.url || 'https://www.youtube.com/watch?v=' + video.id" target="_blank"
                        class="text-decoration-none hover:underline" :aria-label="`Watch ${video.title} on YouTube`">
                        <div class="text-xl line-height-3">{{ video.title }}</div>
                    </a>
                </template>
                <template #subtitle>{{ video.publishedAt }}</template>
                <template #content>
                </template>
                <template #footer>
                    <div class="flex gap-3 m-1 align-content-end">
                        <a :href="video.url || 'https://www.youtube.com/watch?v=' + video.id" target="_blank" :aria-label="`Watch ${video.title} on YouTube`">
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
import { youtubeVideos } from '@data/youtubeVideos.ts';
import { fetchAndSplitVideos } from '../services/youtubeService';

// SSR-friendly: render the build-time fetched videos so the content is
// crawlable even before any client-side API call completes.
const videos = ref((youtubeVideos.channelVideos || []).map((v) => ({ ...v })));

onMounted(async () => {
    try {
        const { channelVideos } = await fetchAndSplitVideos();
        if (channelVideos.length) videos.value = channelVideos;
    } catch (error) {
        console.error('Error loading videos:', error);
    }
});
</script>