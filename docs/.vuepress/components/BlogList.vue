<template>
  <div class="blog-container pt-4 max-w-2xl mx-auto">
    <!-- Row for the first two columns -->
    <div class="grid">
      <div class="whats-new mb-4 md:col-12">
        <a :href="items[0].link" class="border-2 border-black px-5 py-3 text-md text-black uppercase shadow-md">
          What's New →
        </a>
      </div>
      <!-- First element (col-6) -->
      <div class="md:col-6">
        <ul class="blog-list p-0">
          <li v-if="items.length > 0" :key="items[0].link" class="blog-list-item">
            <div class="vp-feature-item">
              <Svg />
              <div class=" p-3">
                <h3 class="blog-title m-0 mb-2 text-2xl font-semibold">
                  <a :href="items[0].link" class="text-decoration-none hover:underline">{{ items[0].title
                    }}</a>
                </h3>
                <p class="blog-summary m-0 text-base text-gray-700 line-height-3">{{ items[0].summary }}</p>
                <MetaContent :category="items[0].tags" />
                <div class="mb-1 p-2 flex flex-row items-center justify-content-between">
                  <div>
                    <i class="pi pi-calendar mr-2"></i>
                    {{ new Date(items[0].date).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric'
                    }) }}
                  </div>
                  <a :href="items[0].link" class="text-sm">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Second column (col-6) with the next 2 elements -->
      <div class="md:col-6">
        <ul class="blog-list p-0">
          <li v-for="item in items.slice(1, 3)" :key="item.link" class="blog-list-item mb-3">
            <div class="vp-feature-item">
              <div class=" p-3">
                <h3 class="blog-title m-0 mb-2 text-xl font-semibold">
                  <a :href="item.link" class="text-decoration-none hover:underline">{{ item.title }}</a>
                </h3>
                <p class="blog-summary m-0 text-sm text-gray-700 line-height-3">{{ item.summary }}</p>
                <div class="mb-1 p-2 flex flex-row items-center justify-content-between">
                  <div>
                    <i class="pi pi-calendar mr-2"></i>
                    {{ new Date(item.date).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric'
                    }) }}
                  </div>
                  <a :href="item.link" class="text-sm">
                    Read More &rarr;
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Remaining elements in col-12 -->
    <ul v-if="items.length > 3" class="blog-list p-0 md:col-12">
      <li v-for="item in items.slice(3)" :key="item.link" class="blog-list-item mb-5">
        <div class="vp-feature-item p-3">
          <h3 class="blog-title m-0 mb-2 text-xl font-semibold">
            <a :href="item.link" class="text-decoration-none hover:underline">{{ item.title }}</a>
          </h3>
          <p class="blog-summary m-0 text-sm text-gray-700 line-height-3">{{ item.summary }}</p>
          <div class="mb-1 p-2 flex flex-row items-center justify-content-between">
            <div>
              <i class="pi pi-calendar mr-2"></i>
              {{ new Date(item.date).toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
              }) }}
            </div>
            <a :href="item.link" class="text-sm">
              Read More &rarr;
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
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
</style>