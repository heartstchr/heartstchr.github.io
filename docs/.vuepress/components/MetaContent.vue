<template>
    <div class="flex flex-column flex-row align-items-center gap-3 py-2 my-4">
        <div class="flex flex-row gap-2 align-items-center justify-content-start text-900" v-if="date">
            <i class="pi pi-calendar mr-2"></i>
            <time :datetime="new Date(date).toISOString()">
                {{ new Date(date).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: 'numeric'
                }) }}
            </time>
        </div>
        <div class="flex flex-row gap-2 flex-wrap md:justify-content-start justify-content-center">
            <a v-for="cat in category" :key="cat" :href="'/tags/' + cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') + '/'" class="no-underline text-900">
                <div class="px-2 py-1 border-round-lg border-1 border-green-200 text-sm hover:bg-green-50 transition-colors cursor-pointer">
                    {{ cat.toLowerCase() }}
                </div>
            </a>
        </div>
    </div>
</template>
<script setup>
defineProps({
    date: {
        type: [Date, String],
        required: false
    },
    category: {
        type: Array,
        required: true
    }
});
</script>