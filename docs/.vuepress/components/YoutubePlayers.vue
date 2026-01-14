<template>
    <div class="youtube-container">
        <iframe :src="embedUrl" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
    videoId: string,
    autoplay?: boolean,
    muted?: boolean,
    loop?: boolean,
    controls?: boolean
}>(), {
    autoplay: false,
    muted: false,
    loop: false,
    controls: true
})

const embedUrl = computed(() => {
    let url = `https://www.youtube.com/embed/${props.videoId}?`
    const params = new URLSearchParams()

    if (props.autoplay) params.append('autoplay', '1')
    if (props.muted || props.autoplay) params.append('mute', '1')
    if (props.loop) {
        params.append('loop', '1')
        params.append('playlist', props.videoId)
    }
    if (!props.controls) params.append('controls', '0')

    return url + params.toString()
})
</script>

<style scoped>
.youtube-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.youtube-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
