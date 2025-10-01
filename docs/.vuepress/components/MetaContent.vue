<template>
    <div class="flex flex-column flex-row align-items-center gap-3 py-2 my-4">
        <div class="flex flex-row gap-2 align-items-center justify-content-start text-900" v-if="date">
            <i class="pi pi-calendar mr-2"></i>
            {{ new Date(date).toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
            }) }}
        </div>
        <div class="flex flex-row gap-2 flex-wrap md:justify-content-start justify-content-center">
            <div v-for="cat in category" :key="cat" class="px-2 py-1 border-round-lg border-1 border-green-200 text-sm">
                {{ cat.toLowerCase().replace(/\s+/g, '-') }}
            </div>
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