<template>
  <ul class="blog-list flex flex-row flex-wrap">
    <li v-for="item in items" :key="item.link" class="mb-6 md:col-6">
      <div class="vp-feature-item col-12 shadow-1 m-0 p-0 blog-list-item">
        <Svg />
        <div class="text-xs text-gray-500 mb-1 p-2">
          <h3 class="mt-0">
            <a :href="item.link">{{ item.title }}</a>
          </h3>
          <p class="text-sm text-gray-700">{{ item.summary }}</p>
        </div>
        <div className="mb-1 px-2 flex flex-row items-center justify-content-between">
          <div>
            <i class="pi pi-calendar mr-2"></i>
            {{ new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
          </div>
          <a :href="item.link" className="text-sm">
            Read More &rarr;
          </a>
        </div>
      </div>
    </li>
  </ul>
</template>
  
<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.blog-list {
  list-style: none;
  padding: 0;
}
.blog-list-item {
  min-height: 352px;
}
</style>