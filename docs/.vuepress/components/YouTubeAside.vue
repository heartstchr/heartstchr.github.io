<template>
    <aside class="p-3 bg-surface-50 rounded-lg border border-surface-200 max-w-full">
        <h2 class="text-lg font-bold mb-2">Latest Videos</h2>
        <div v-if="videos.length === 0" class="flex flex-column gap-2">
            <p class="text-sm text-color-secondary">Loading videos...</p>
            <a href="https://www.youtube.com/@stackseekers" target="_blank" class="no-underline" aria-label="Visit Stack Seekers YouTube Channel">
                <Button label="Visit Channel" icon="pi pi-youtube" iconPos="left" class="w-full" severity="secondary"
                    size="small" raised rounded />
            </a>
        </div>
        <div v-else class="flex flex-column gap-2">
            <a v-for="video in videos.slice(0, 4)" :key="video.id" :href="'https://www.youtube.com/watch?v=' + video.id"
                target="_blank" class="block no-underline transition-transform duration-200 hover:-translate-y-0.5" :aria-label="'Watch ' + video.title">
                <div
                    class="flex flex-column gap-1.5 p-1.5 bg-surface-0 rounded-md border border-surface-200 transition-all duration-200 hover:border-p-green-800 hover:shadow-md">
                    <img :src="video.thumbnail" :alt="video.title" class="w-full aspect-video object-cover rounded"
                        loading="lazy" />
                    <span class="text-sm font-medium text-900 line-clamp-2">{{ video.title }}</span>
                </div>
            </a>
            <a href="https://www.youtube.com/@stackseekers" target="_blank" class="no-underline mt-2" aria-label="View All Videos on YouTube">
                <Button label="View All Videos" icon="pi pi-youtube" iconPos="left" class="w-full" severity="secondary"
                    size="small" outlined rounded />
            </a>
        </div>
    </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchChannelVideos } from '../services/youtubeService';

const videos = ref([]);

onMounted(async () => {
    try {
        videos.value = await fetchChannelVideos(4);
    } catch (error) {
        console.error('Error loading videos:', error);
    }
});
</script>
