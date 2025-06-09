<template>
    <div class="flex flex-column flex-row align-items-center gap-3 px-3 py-2 mb-4">
        <div class="flex flex-row gap-2 align-items-center justify-content-start text-900" v-if="date">
            <i class="pi pi-calendar mr-2"></i>
            {{ new Date(date).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric'
            }) }}
        </div>
        <div class="flex flex-row gap-2 flex-wrap justify-content-center" style="color: #16a34a; font-weight: 500;">
            <div v-for="cat in category" :key="cat" class="px-2 py-1 border-round-lg border-2 border-green-500">
                #{{ cat.toLowerCase().replace(/\s+/g, '-') }}
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    date: {
        type: Date,
        required: false
    },
    category: {
        type: Array,
        required: true
    }
});
</script>