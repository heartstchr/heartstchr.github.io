<template>
  <div class="grid mb-8">
    <div class="col-12">
      <TabView class="project-perspective-tabs" v-if="project?.perspective?.executive">
        <TabPanel>
          <template #header>
            <div class="flex align-items-center gap-2">
              <i class="pi pi-briefcase"></i>
              <span>Strategic Executive</span>
            </div>
          </template>
          <div class="p-4 md:p-6 surface-card border-round-3xl shadow-1 mt-4">
            <div class="flex align-items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
              <i class="pi pi-verified"></i>
              Business Impact & ROI
            </div>
            <div class="text-xl line-height-4 text-700 mb-6">
              {{ project?.perspective?.executive }}
            </div>
            <div class="grid">
              <div class="col-12">
                 <h4 class="text-lg font-bold mb-4 flex align-items-center gap-2">
                    <i class="pi pi-list text-primary"></i> Strategic Playbook Features
                 </h4>
                 <div class="grid">
                    <div v-for="feature in project?.features" :key="feature.text" class="col-12 md:col-6 mb-3">
                       <div class="flex align-items-start gap-3">
                          <i class="pi pi-check text-primary mt-1"></i>
                          <div class="text-sm font-medium line-height-3" v-html="feature.text"></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <template #header>
            <div class="flex align-items-center gap-2">
              <i class="pi pi-cog"></i>
              <span>Engineering Architecture</span>
            </div>
          </template>
          <div class="p-4 md:p-6 surface-card border-round-3xl shadow-1 mt-4">
            <div class="flex align-items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
              <i class="pi pi-code"></i>
              Technical Deep-Dive
            </div>
            <div class="text-xl line-height-4 text-700 mb-6">
              {{ project?.perspective?.technical }}
            </div>
            <div v-pre class="project-markdown-content text-lg line-height-4">
              <slot></slot>
            </div>
          </div>
        </TabPanel>
      </TabView>

      <div v-else class="surface-card p-4 md:p-6 border-round-3xl shadow-2 h-full">
        <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
           <i class="pi pi-list text-primary"></i> Playbook Features
        </h3>
        <div class="grid">
           <div v-for="feature in project?.features" :key="feature.text" class="col-12 md:col-6 mb-3">
              <div class="flex align-items-start gap-3">
                 <i class="pi pi-verified text-primary mt-1"></i>
                 <div class="text-sm font-medium line-height-3" v-html="feature.text"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style>
.project-perspective-tabs .p-tabview-nav {
  background: transparent !important;
  border: none !important;
  justify-content: center;
  gap: 1rem;
}
.project-perspective-tabs .p-tabview-nav li .p-tabview-nav-link {
  border-radius: 1rem !important;
  border: 1px solid #e2e8f0 !important;
  background: #f8fafc !important;
  padding: 0.75rem 1.5rem !important;
  font-weight: 700 !important;
  transition: all 0.2s ease !important;
}
.project-perspective-tabs .p-tabview-nav li.p-highlight .p-tabview-nav-link {
  background: var(--primary-color) !important;
  color: white !important;
  border-color: var(--primary-color) !important;
}
</style>
