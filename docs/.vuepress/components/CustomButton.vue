<!-- .vuepress/components/CustomButton.vue -->
<template>
    <a :href="href" :class="['flex justify-content-center text-center no-underline mt-4', customClass]">
        <div class="p-flex p-ai-center">
            <div
                class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button">
                <span class="mr-6">{{ label }}</span>
                <slot name="icon" />
                <i class="pi pi-angle-double-right" style="font-size: 1rem;" />
            </div>
        </div>
    </a>
</template>

<script setup>
defineProps({
    href: {
        type: String,
        default: '/'
    },
    label: {
        type: String,
        default: 'Click me'
    },
    customClass: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
</style>
  
