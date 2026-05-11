<template>
  <section v-if="images && images.length" class="mb-8" itemscope itemtype="https://schema.org/SoftwareApplication">
    <div class="grid m-0 p-0">
      <div :class="['col-12 p-2', images.length > 1 ? 'md:col-8 lg:col-9' : 'col-12']">
         <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
           <Image :src="images[0].itemImageSrc" :alt="images[0].alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-20rem md:min-h-30rem" />
         </div>
      </div>
      <div v-if="images.length > 1" class="col-12 md:col-4 lg:col-3 p-0">
         <div class="grid m-0 p-0">
            <div v-for="(img, idx) in images.slice(1, 3)" :key="idx" class="col-12 p-2">
               <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
                  <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-12rem md:min-h-14-5rem" />
               </div>
            </div>
         </div>
      </div>
      <div v-for="(img, idx) in images.slice(3)" :key="idx" class="col-12 md:col-6 lg:col-4 p-2">
         <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
            <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" />
         </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true
  }
});
</script>
