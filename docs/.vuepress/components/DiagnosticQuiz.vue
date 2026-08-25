<template>
  <div class="diagnostic-wrapper mb-8 mt-6">
    <div class="surface-0 border-round-3xl p-4 md:p-7 shadow-4" style="max-width: 1000px; margin: 0 auto; position: relative; overflow: hidden; min-height: 600px;">
      
      <!-- Progress Bar -->
      <div class="flex justify-content-between mb-4">
        <div class="text-sm font-bold text-500 uppercase letter-spacing-wide">Technical Diagnostic</div>
        <div class="text-sm font-bold text-primary">Step {{ step }} of 3</div>
      </div>
      <div class="w-full surface-200 border-round-xl h-1rem mb-6">
        <div class="bg-primary h-1rem border-round-xl transition-all transition-duration-500" :style="{ width: (step / 3) * 100 + '%' }"></div>
      </div>

      <!-- Step 1 -->
      <div v-if="step === 1" class="fade-in">
        <h2 class="text-4xl font-bold mb-3 m-0 line-height-2">Where is your application bottlenecking?</h2>
        <p class="text-xl text-600 mb-5">Select the biggest challenge preventing your scale right now.</p>
        
        <div class="grid">
          <div class="col-12 md:col-6 p-2" v-for="option in bottlenecks" :key="option.id">
            <div @click.prevent.stop="nextStep('bottleneck', option.title)" class="p-4 border-round-xl border-2 border-200 surface-0 hover:border-primary cursor-pointer transition-colors h-full flex flex-column justify-content-center text-center">
              <i :class="['pi', option.icon, 'text-3xl mb-3 text-primary']"></i>
              <div class="font-bold text-xl mb-2">{{ option.title }}</div>
              <p class="text-sm text-600 m-0">{{ option.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div v-else-if="step === 2" class="fade-in">
        <h2 class="text-4xl font-bold mb-3 m-0 line-height-2">What does your current architecture look like?</h2>
        <p class="text-xl text-600 mb-5">This helps me understand the immediate constraints.</p>

        <div class="grid">
          <div class="col-12 md:col-4 p-2" v-for="option in stacks" :key="option.id">
            <div @click.prevent.stop="nextStep('stack', option.title)" class="p-4 border-round-xl border-2 border-200 surface-0 hover:border-primary cursor-pointer transition-colors h-full flex flex-column justify-content-center text-center">
               <div class="font-bold text-lg mb-2">{{ option.title }}</div>
               <p class="text-xs text-600 m-0">{{ option.desc }}</p>
            </div>
          </div>
        </div>
        <div class="mt-4 text-center">
           <Button label="Back" icon="pi pi-arrow-left" class="p-button-text p-button-secondary" @click.prevent.stop="prevStep" />
        </div>
      </div>

      <!-- Step 3 (Completion & Call to Action) -->
      <div v-else-if="step === 3" class="fade-in text-center py-4">
        <div class="inline-flex align-items-center justify-content-center w-5rem h-5rem border-circle bg-green-100 mb-4">
           <i class="pi pi-check text-4xl text-green-500"></i>
        </div>
        <h2 class="text-4xl font-bold mb-3 m-0 line-height-2">Diagnosis Ready.</h2>
        <p class="text-xl text-600 mb-5 mx-auto" style="max-width: 600px;">
          Based on your stack and your <strong class="text-900">"{{ answers.bottleneck }}"</strong> bottleneck, I have a clear architectural roadmap for you.
        </p>
        
        <div class="surface-50 p-4 border-round-2xl mb-5 mx-auto text-left border-1 border-200" style="max-width: 500px;">
           <div class="text-sm text-600 uppercase font-bold mb-2">Your Profile</div>
           <div class="flex align-items-center gap-2 mb-2"><i class="pi pi-exclamation-triangle text-orange-500"></i> <strong>Challenge:</strong> {{ answers.bottleneck }}</div>
           <div class="flex align-items-center gap-2"><i class="pi pi-server text-blue-500"></i> <strong>Current Stack:</strong> {{ answers.stack }}</div>
        </div>

        <a href="https://cal.com/stackseekers/25min" target="_blank" class="no-underline">
          <Button label="Book Free Roadmap Session" icon="pi pi-calendar" severity="primary" size="large" raised rounded class="px-5 py-3 text-lg" />
        </a>
        <div class="text-sm mt-4 text-500">
           <Button label="Restart Quiz" class="p-button-text p-button-sm text-600 p-0" @click.prevent.stop="restart" />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';

const step = ref(1);
const answers = ref({ bottleneck: '', stack: '' });

const bottlenecks = [
  { id: 1, title: 'Speed & Concurrency', desc: 'App crashes under load or is too slow.', icon: 'pi-bolt' },
  { id: 2, title: 'AI Integration', desc: 'Need to safely build LLMs directly into our flow.', icon: 'pi-sparkles' },
  { id: 3, title: 'SEO Visibility', desc: 'Can\'t scale programmatic or dynamic content.', icon: 'pi-globe' },
  { id: 4, title: 'Operational Bloat', desc: 'Too many manual processes draining the team.', icon: 'pi-users' }
];

const stacks = [
  { id: 1, title: 'Modern JS', desc: 'React, Next.js, Vue, Node' },
  { id: 2, title: 'Legacy Monolith', desc: 'PHP, Old .NET, WordPress' },
  { id: 3, title: 'No-Code / Low-Code', desc: 'Bubble, Webflow, Notion' }
];

const handleStepChange = (action) => {
  const currentScrollY = window.scrollY;
  action();
  nextTick(() => {
    window.scrollTo(0, currentScrollY);
  });
};

const nextStep = (field, value) => {
  handleStepChange(() => {
    answers.value[field] = value;
    step.value++;
  });
};

const prevStep = () => {
  handleStepChange(() => {
    step.value--;
  });
};

const restart = () => {
  handleStepChange(() => {
    step.value = 1;
    answers.value = { bottleneck: '', stack: '' };
  });
};
</script>

<style scoped>
.diagnostic-wrapper {
  color: var(--text-color);
}
.letter-spacing-wide { letter-spacing: 0.1em; }
.fade-in {
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
