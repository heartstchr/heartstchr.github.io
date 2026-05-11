<template>
  <div class="mt-8 p-6 surface-50 border-round-2xl border-1 border-100">
    <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
      <i class="pi pi-cog text-primary"></i>
      Related Engineering Services
    </h3>
    <div class="flex flex-wrap gap-3">
      <a v-for="service in services" :key="service.link" :href="service.link" class="no-underline px-4 py-2 surface-0 shadow-1 border-round-xl text-700 font-bold hover:text-primary transition-all">
        {{ service.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
const services = [
  { name: "Custom Software", link: "/web-development-services/custom-software-engineering/" },
  { name: "MVP Development", link: "/web-development-services/mvp-development-for-startups/" },
  { name: "AI & Automation", link: "/web-development-services/ai-and-automation-strategy/" }
];
</script>
