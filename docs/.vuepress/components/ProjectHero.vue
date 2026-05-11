<template>
  <section class="mt-4 mb-6">
    <div class="grid">
      <div class="col-12">
        <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
        <h1 class="text-4xl md:text-6xl font-bold mb-3 mt-0 line-height-2">{{ project.name }}</h1>
        <p class="text-xl opacity-70 line-height-4 max-w-50rem mb-4">{{ project.description }}</p>
        
        <div class="surface-card p-4 md:p-5 border-round-3xl shadow-2 border-1 border-100 mb-4">
          <div class="grid align-items-center">
            <div class="col-12 md:col-4 border-bottom-1 md:border-bottom-none md:border-right-1 border-100 mb-3 md:mb-0 pb-3 md:pb-0">
               <div class="flex align-items-center gap-3">
                  <i class="pi pi-briefcase text-primary text-2xl"></i>
                  <div>
                    <div class="text-xs opacity-50 uppercase font-bold">Industry</div>
                    <div class="font-bold text-lg text-900">{{ project.domain }}</div>
                  </div>
               </div>
            </div>
            <div class="col-12 md:col-4 border-bottom-1 md:border-bottom-none md:border-right-1 border-100 mb-3 md:mb-0 pb-3 md:pb-0">
               <div class="flex align-items-center gap-3">
                  <i class="pi pi-bolt text-primary text-2xl"></i>
                  <div>
                    <div class="text-xs opacity-50 uppercase font-bold">Project Status</div>
                    <div class="font-bold text-lg text-900">Scale & Growth</div>
                  </div>
               </div>
            </div>
            <div class="col-12 md:col-4 pt-3 md:pt-0">
               <Stacks :stack="project.stack" :other-skills="project.otherSkills" />
            </div>
          </div>

          <div class="mt-4 pt-4 border-top-1 border-100">
             <div class="flex flex-column md:flex-row align-items-stretch gap-3">
                <a v-if="project.link" :href="project.link" target="_blank" class="no-underline flex-1">
                  <Button label="View Live Demo" icon="pi pi-external-link" severity="primary" class="w-full font-bold py-3" raised rounded />
                </a>
                <a v-if="project.codeLink" :href="project.codeLink" target="_blank" class="no-underline flex-1">
                  <Button label="View Source Code" icon="pi pi-github" severity="secondary" class="w-full font-bold py-3" raised rounded />
                </a>
                <a v-if="project.contact" :href="'/contact/?subject=' + encodeURIComponent('Scale Request: ' + project.name)" class="no-underline flex-1">
                  <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold py-3" raised rounded />
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>
