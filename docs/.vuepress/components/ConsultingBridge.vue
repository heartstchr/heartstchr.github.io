<template>
  <div v-if="isActivePage" class="consulting-bridge-wrapper py-8 px-4 surface-0">
    <!-- Architectural Roadmap Section -->
    <section class="max-w-1200 mx-auto mb-8 px-4 py-8 surface-900 text-white border-round-3xl shadow-4 overflow-hidden relative">
      <div class="absolute top-0 right-0 w-30rem h-30rem bg-primary-900 border-circle opacity-10" style="filter: blur(100px); transform: translate(30%, -30%)"></div>
      
      <div class="text-center mb-8 relative z-1">
        <h2 class="text-4xl md:text-5xl font-bold mb-3">Architecting Your Success</h2>
        <p class="text-xl opacity-70 max-w-30rem mx-auto">A proven, four-stage framework to handle enterprise-scale delivery.</p>
      </div>

      <div class="grid relative z-1 max-w-1000 mx-auto mb-6">
        <!-- Precision Architectural Path -->
        <div class="hidden lg:block absolute w-full" style="z-index: 0; top: 3.15rem; width: 75%; left: 12.5%; height: 2px; background-image: linear-gradient(to right, var(--primary-800) 50%, transparent 50%); background-size: 16px 100%; opacity: 0.4;"></div>
        
        <div class="col-12 lg:col-3 p-4" v-for="(step, idx) in roadmapSteps" :key="step.title">
          <div class="flex flex-column h-full relative" style="z-index: 2;">
            <div class="w-4rem h-4rem border-circle bg-primary-900 border-2 border-primary-500 flex align-items-center justify-content-center text-2xl font-bold text-primary-400 mb-4 shadow-pill mx-auto lg:mx-0 relative" style="z-index: 3;">
               0{{ idx + 1 }}
            </div>
            <h3 class="text-2xl font-bold mb-3 text-white text-center lg:text-left">{{ step.title }}</h3>
            <p class="text-400 line-height-3 text-sm mb-4 text-center lg:text-left">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-8 relative z-1">
        <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
          <Button label="Book Free Discovery Call" icon="pi pi-bolt" severity="primary" size="large" raised rounded class="px-6 text-xl white-space-nowrap" />
        </a>
      </div>
    </section>

    <!-- Contextual "Expertise" Re-assurance -->
    <div class="text-center mb-8">
      <h3 class="text-900 font-bold text-2xl mb-4 uppercase tracking-widest">Global Brand Integrity</h3>
      <div class="flex flex-wrap align-items-center justify-content-center gap-6 opacity-40">
        <img src="/img/home/abn-amro-logo.webp" alt="ABN AMRO" class="h-2rem grayscale-100" />
        <img src="/img/home/upstox.webp" alt="Upstox" class="h-2rem grayscale-100" />
        <img src="/img/home/capgemini.webp" alt="Capgemini" class="h-2rem grayscale-100" />
      </div>
    </div>
  </div>

  <!-- Sticky Mobile CTA -->
  <div v-if="isActivePage" class="fixed bottom-0 left-0 w-full p-3 z-5 lg:hidden glass-sticky-cta shadow-6 flex gap-3 border-top-1 border-white-alpha-10">
    <a href="https://cal.com/stackseekers" target="_blank" class="flex-grow-1 no-underline">
      <Button label="Consult Strategy" icon="pi pi-calendar" severity="primary" class="w-full text-lg font-bold py-3" raised />
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePageData } from 'vuepress/client';

const page = usePageData();

const roadmapSteps = [
  { title: "Discovery Call", desc: "Technical diagnosis and scaling strategy." },
  { title: "Architecture Audit", desc: "Deep dive into infra and technical debt." },
  { title: "Fixed-Scope Roadmap", desc: "Detailed milestone-based blueprint." },
  { title: "Senior Execution", desc: "High-integrity build & velocity." }
];

const isActivePage = computed(() => {
  const path = page.value.path;
  // Render on blog posts and project pages, but NOT on index/aggregation pages (we refactored those specifically)
  const isPost = path.startsWith('/posts/') && path !== '/posts/';
  const isProject = path.startsWith('/web-development-projects/') && path !== '/web-development-projects/';
  const isService = path.startsWith('/web-development-services/') || path.startsWith('/ai-automation-services/');
  
  return isPost || isProject || isService;
});
</script>

<style scoped>
.consulting-bridge-wrapper {
  border-top: 1px solid var(--surface-border);
}
.max-w-1200 { max-width: 1200px; }
.shadow-pill { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
.grayscale-100 { filter: grayscale(100%); transition: filter 0.3s ease; }
.grayscale-100:hover { filter: grayscale(0%); }
.glass-sticky-cta { 
  background: rgba(15, 23, 42, 0.9); 
  backdrop-filter: blur(12px); 
  -webkit-backdrop-filter: blur(12px);
}
</style>
