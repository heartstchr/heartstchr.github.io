<template>
  <div class="flex justify-content-between align-items-center mt-8 pt-6 border-top-1 surface-border">
    <div class="flex-1">
      <a v-if="previous" :href="previous.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary group">
        <i class="pi pi-chevron-left mr-2 transition-transform group-hover:-translate-x-1"></i>
        <div class="flex flex-column">
          <span class="text-xs uppercase text-500 font-bold">Previous</span>
          <span class="font-bold text-900">{{ previous.name }}</span>
        </div>
      </a>
    </div>
    <div class="flex-1 text-center">
      <a href="/web-development-projects/" class="no-underline text-color-secondary hover:text-primary font-bold">
        <i class="pi pi-th-large mr-2"></i>
        Portfolio
      </a>
    </div>
    <div class="flex-1 text-right">
      <a v-if="next" :href="next.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary group">
        <div class="flex flex-column text-right">
          <span class="text-xs uppercase text-500 font-bold">Next</span>
          <span class="font-bold text-900">{{ next.name }}</span>
        </div>
        <i class="pi pi-chevron-right ml-2 transition-transform group-hover:translate-x-1"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  previous: {
    type: Object,
    default: null
  },
  next: {
    type: Object,
    default: null
  }
});
</script>
