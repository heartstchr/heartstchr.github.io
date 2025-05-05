---
title: Custom Web Development Services
description: Stack Seekers provides end-to-end web development services for businesses of all sizes. Our solutions include front-end and back-end development, CMS integration, API development, and performance optimization — all aligned to support your growth and digital transformation goals.
order: 3
lastUpdated: false
editLink: false
copyright: false
---

<div class="flex flex-column gap-4 my-4 line-height-3">
  <div>Hello! I’m your expert for development and hosting services, resolving the challenges of realizing your digital vision. Leveraging advanced technologies, I deliver tailored solutions to eliminate stress. Let’s create something remarkable.</div>

  <div>Each project receives dedicated attention, ensuring precise results to address misaligned objectives. My services combine functionality and appeal to enhance your online presence. Ready to proceed?</div>

  <div>Click below to email me and overcome digital world obstacles. Your vision deserves excellence. let’s achieve it.</div>
</div>

<div class="flex flex-wrap md:gap-4 gap-2 mt-0 md:mt-8">
    <TabView class="p-tabview-vertical md:flex hidden" :activeIndex="activeTabIndex" @tab-change="onTabChange">
      <!-- Tab Panels -->
      <TabPanel :header="`${service.name}`" leftIcon="pi pi-home" v-for= "(service, index) in services" :id="service.code">
        <div class="shadow-1 col-12 border-round-2xl vp-feature-item p-0 overflow-hidden" itemscope itemtype="https://schema.org/SoftwareApplication">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,202.7C560,213,640,203,720,192C800,181,880,171,960,181.3C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
              <div class="px-4 m-2">
                  <div class="text-4xl font-bold mb-4">
                    <h2 itemprop="name" class="text-4xl">
                      <img v-if="service.icon" :src="`https://cdn.simpleicons.org/${service.icon}`" :alt="service.name" style="width: 28px;" loading="lazy" fetchpriority="high" class="mr-2"/>
                      {{service.name}}
                    </h2>
                  </div>
                  <Image v-if="service.code" :src="`/img/service/${service.code}.webp`" class="" :alt="service.name" width="100%"/>
                  <div class="my-4 flex flex-column gap-2 line-height-3">
                      <link itemprop="applicationCategory" :href="service.schema" />
                      <div itemprop="name" v-for= "(description, index) in service.descriptions" >
                        <div v-html="description"></div>
                      </div>
                      <a :href="`mailto:jiwan.cse@gmail.com?subject=Inquiry : ${service.name} Services`" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4" aria-label="Send an Email"> 
                      <Button label="Book Now!" icon="pi pi-briefcase" severity="primary" raised rounded />
                      </a>
                  </div>
              </div>
          </div>
      </TabPanel>
    </TabView>
  <div class="grid my-6 md:col-6 p-0 md:hidden flex" :class="[{ 'md:col-12' : (index === services.length-1 || index === 0 || index === 3) }]" v-for= "(service, index) in services" :id="service.code">
      <div class="shadow-1 col-12 border-round-2xl vp-feature-item p-0 overflow-hidden" itemscope itemtype="https://schema.org/SoftwareApplication">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,202.7C560,213,640,203,720,192C800,181,880,171,960,181.3C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
          <div class="px-4 m-2">
              <div class="text-4xl font-bold mb-4">
                  <h2 itemprop="name" class="text-4xl">
                    <img v-if="service.icon" :src="`https://cdn.simpleicons.org/${service.icon}`" :alt="service.name" style="width: 28px;" loading="lazy" fetchpriority="high" class="mr-2"/>
                    {{service.name}}
                  </h2>
              </div>
              <Image v-if="service.code" :src="`/img/service/${service.code}.webp`" class="" :alt="service.name" width="100%"/>
              <div class="my-4 flex flex-column gap-2 line-height-3">
                  <link itemprop="applicationCategory" :href="service.schema" />
                  <div itemprop="name" v-for= "(description, index) in service.descriptions" >
                    <div v-html="description"></div>
                  </div>
                  <a :href="`mailto:jiwan.cse@gmail.com?subject=Inquiry : ${service.name} Services`" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4" aria-label="Send an Email"> 
                  <Button label="Book Now!" icon="pi pi-briefcase" severity="primary" raised rounded />
                  </a>
              </div>
          </div>
      </div>
  </div>
</div>

<script setup lang="ts">
import { ref, watch,computed, onMounted, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { services } from "@data/services.js";

const router = useRouter();
const route = useRoute();

// Map service codes to indices
const serviceMapping = services.reduce((acc, service, index) => {
  acc[`#${service.code}`] = index;
  return acc;
}, {});

const activeTabIndex = ref(serviceMapping[route.params.serviceCode] || 0);

// Watch for route changes to update the active tab
watch(
  () => route.hash,
  (newServiceCode) => {
    activeTabIndex.value = serviceMapping[newServiceCode] ?? 0;
  },
  { immediate: true }
);
// Handle tab change event to update the route
const onTabChange = (event) => {
  const service = services[event.index];
  if (service) {
    router.push(`/web-development-services/#${service.code}`);
  }
};
</script>
