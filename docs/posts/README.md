---
layout: Layout
title: The Architect's Playbook | Engineering Insights
summary: Technical deep-dives, strategic architectural breakdowns, and scaling playbooks for founders.
pageInfo: false
contributors: false
---

<section class="py-4 surface-900 text-black border-round-3xl mb-4 overflow-hidden relative">
  <div class="absolute top-0 right-0 w-20rem h-20rem bg-primary-900 border-circle opacity-10" style="filter: blur(80px); transform: translate(30%, -30%)"></div>
  <div class="relative z-1">
    <div class="flex align-items-center gap-2 text-primary font-bold mb-3 uppercase tracking-wider text-xs">
      <i class="pi pi-pencil"></i>
      Strategic Engineering Insights
    </div>
    <h1 class="text-4xl md:text-6xl font-bold mb-4 mt-0 line-height-2">The <span class="text-primary-400">Architect's</span> Playbook.</h1>
    <p class="text-xl opacity-70 max-w-30rem mb-5">How to solve technical debt, architect for scale, and build engineering culture.</p>
    <div class="">
      <div class="p-inputgroup flex-1 shadow-4 border-round-xl overflow-hidden glass-search">
        <InputText 
          v-model="searchQuery" 
          placeholder="Search topics (e.g. Next.js, AI, ROI)..." 
          class="w-full border-1 p-4 text-lg bg-transparent text-white focus:outline-none" 
        />
        <Button 
          v-if="searchQuery" 
          icon="pi pi-times" 
          severity="secondary" 
          text 
          rounded 
          class="absolute right-0 mr-2 z-1 text-white opacity-50" 
          @click="searchQuery = ''" 
        />
      </div>
      <div v-if="searchQuery" class="text-sm text-400 mt-2 px-1">
        Found {{ filteredPosts.length }} matching insights for "{{ searchQuery }}"
      </div>
    </div>
  </div>
</section>

<div class="grid">
  <div class="col-12 lg:col-12">
    <div class="surface-card border-round-2xl">
       <div v-if="!searchQuery" class="mb-4">
         <a :href="filteredPosts[0].link" class="border-2 border-black px-5 py-3 text-md text-black uppercase shadow-md inline-block no-underline font-bold hover:bg-black hover:text-white transition-all">
           What's New →
         </a>
       </div>
       <BlogList :items="filteredPosts" />
    </div>
  </div>
  <div class="col-12 lg:col-3">
    <div class="sticky top-6rem">
      <div class="surface-card text-900 p-4 border-round-2xl shadow-4 mb-4">
        <h3 class="text-xl font-bold mb-3 text-primary">Solving Spaghetti Code?</h3>
        <p class="text-sm line-height-3 mb-4 text-black">I help startups audit their infrastructure and remove the bottlenecks stalling growth.</p>
        <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
          <Button label="Book Audit" icon="pi pi-bolt" severity="primary" class="w-full font-bold" raised rounded />
        </a>
      </div>
      <YouTubeAside />
    </div>
  </div>
</div>

<!-- Sticky Mobile CTA -->
<div class="fixed bottom-0 left-0 w-full p-3 z-5 lg:hidden glass-sticky-cta shadow-6">
  <a href="https://cal.com/stackseekers" target="_blank" class="no-underline text-white">
    <Button label="Book Strategy Call" icon="pi pi-calendar" severity="primary" class="w-full text-lg font-bold py-3" raised />
  </a>
</div>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { posts } from "@data/posts.js";

  const searchQuery = ref('');

  const filteredPosts = computed(() => {
    if (!searchQuery.value) return posts;
    const query = searchQuery.value.toLowerCase();
    return posts.filter(post => {
      return post.title.toLowerCase().includes(query) || 
             post.summary.toLowerCase().includes(query);
    });
  });
</script>

<style scoped>
.glass-sticky-cta { 
  background: rgba(15, 23, 42, 0.95); 
  backdrop-filter: blur(12px); 
  -webkit-backdrop-filter: blur(12px);
}
</style>
