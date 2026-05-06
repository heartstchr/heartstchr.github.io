---
title: Startup Tech Stack Audit Checklist | Stack Seekers
description: Free checklist to audit your startup’s SaaS infrastructure, technical debt, and cloud architecture. Created by a senior Enterprise Architecture Partner.
order: 5
editLink: false
copyright: false
pageInfo: false
contributors: false
---

  <div class="p-4">
    <div class="grid gap-6">
      <div v-for="(section, index) in checklist" :key="index" class="border p-4 rounded-lg shadow-sm">
        <h3 class="text-lg font-semibold mb-3">{{ section.title }}</h3>
        <div class="grid gap-3">
          <div v-for="(item, i) in section.items" :key="i" class="p-3 border rounded-lg">
            <div class="text-sm mb-2">{{ item.label }}</div>
            <div class="flex justify-end gap-2">
              <Button icon="pi pi-check" class="p-button-sm p-button-success" @mousedown.prevent="() => setScore(section.title, i, 'yes')"/>
              <Button icon="pi pi-exclamation-circle" class="p-button-sm p-button-warning" @mousedown.prevent="() => setScore(section.title, i, 'progress')"/>
              <Button icon="pi pi-times" class="p-button-sm p-button-danger" @mousedown.prevent="() => setScore(section.title, i, 'no')"/>
            </div>
          </div>
        </div>
        <div class="text-sm mt-3 text-right">
          <strong>Section Score:</strong>
          ✅ {{ scoreCount(section.items, 'yes') }} |
          ⚠️ {{ scoreCount(section.items, 'progress') }} |
          ❌ {{ scoreCount(section.items, 'no') }}
        </div>
      </div>
    </div>
    <div class="mt-6 border-t pt-4">
      <h3 class="text-xl font-semibold mb-2">📊 Total Score Summary</h3>
      <div v-if="scoreRevealed" class="text-sm bg-green-50 p-4 border-round-md">
        <div class="text-2xl font-bold mb-3">Audit Complete!</div>
        <strong>Total:</strong>
        ✅ {{ totalScore('yes') }} |
        ⚠️ {{ totalScore('progress') }} |
        ❌ {{ totalScore('no') }}
        <div class="mt-3">A detailed roadmap is being structured for you.</div>
      </div>     
      <div v-else-if="isComplete">
        <Button label="Reveal Results & Get PDF Roadmap" icon="pi pi-lock-open" class="w-full md:w-auto" size="large" @click="showEmailModal = true" />
      </div>
      <div v-else class="text-sm text-500">
        Please complete all checklist items to view your evaluation. ({{ getAnsweredCount() }} / {{ getTotalCount() }})
      </div>
    </div>
    <Dialog v-model:visible="showEmailModal" modal header="Get Your Full Audit Report" :style="{ width: '90vw', maxWidth: '400px' }">
      <div class="flex flex-column gap-3 pt-3">
        <p class="m-0 text-color-secondary">Where should we send your results and personalized architecture roadmap?</p>
        <div class="flex flex-column gap-1">
          <InputText id="email" v-model="userEmail" type="email" placeholder="you@email.com" class="w-full" :class="{'p-invalid': !!emailError}" />
          <small v-if="emailError" class="p-error">{{ emailError }}</small>
        </div>
        <div class="flex justify-content-end gap-2 mt-2">
          <Button type="button" label="Cancel" severity="secondary" @click="showEmailModal = false" :disabled="isSubmitting"></Button>
          <Button type="button" label="Reveal Score" @click="submitEmail" :loading="isSubmitting"></Button>
        </div>
      </div>
    </Dialog>
    <!-- Post-Audit CTA -->
    <div class="mt-8 border-round-3xl p-6 text-center shadow-4 surface-900 text-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-20rem h-20rem bg-primary-900 border-circle opacity-10" style="filter: blur(80px); transform: translate(30%, -30%)"></div>
      <div class="relative z-1">
        <h2 class="text-3xl font-bold mb-3">Found some red flags?</h2>
        <p class="text-lg opacity-80 mb-5 max-w-30rem mx-auto">Don't let technical debt or fragile architecture slow your growth. Let's turn your audit results into a high-performance execution roadmap.</p>
        <div class="flex flex-column md:flex-row gap-3 justify-content-center">
          <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
            <Button label="Book Technical Roadmap Call" icon="pi pi-calendar" severity="primary" size="large" rounded raised />
          </a>
          <a href="/web-development-services/" class="no-underline">
            <Button label="Explore Engineering Services" icon="pi pi-arrow-right" severity="secondary" size="large" rounded text class="text-white" />
          </a>
        </div>
      </div>
    </div>
  </div>

<script setup>
import { ref, computed } from 'vue';
import { submitProjectRequest } from '@services/notionService';

const checklist = ref([
  {
    title: 'Foundational Understanding',
    items: [
      { label: 'Clearly define core value proposition', score: null },
      { label: 'Tech stack aligned with product goals', score: null },
      { label: 'Stakeholders understand technical trade-offs', score: null },
    ]
  },
  {
    title: 'Tech Stack Components',
    items: [
      { label: 'Modern and scalable backend framework', score: null },
      { label: 'Appropriate API usage (REST/GraphQL)', score: null },
      { label: 'Consistent frontend design system', score: null },
      { label: 'Database is right fit and backed up', score: null },
      { label: 'CI/CD pipeline configured', score: null },
      { label: 'Cloud costs monitored and optimized', score: null }
    ]
  },
  {
    title: 'Security & Compliance',
    items: [
      { label: 'Secure secrets management', score: null },
      { label: 'Basic security in place (SSL, OAuth2)', score: null },
      { label: 'Compliance needs considered', score: null }
    ]
  },
  {
    title: 'Performance & Monitoring',
    items: [
      { label: 'Monitoring/logs in place', score: null },
      { label: 'Uptime and alerts configured', score: null },
      { label: 'Performance benchmarks available', score: null }
    ]
  },
  {
    title: 'Team & Collaboration',
    items: [
      { label: 'Version control workflow followed', score: null },
      { label: 'Code reviews enforced', score: null },
      { label: 'Tech debt acknowledged', score: null }
    ]
  },
]);

const setScore = (sectionTitle, itemIndex, score) => {
  const section = checklist.value.find(sec => sec.title === sectionTitle);
  if (section) {
    section.items[itemIndex].score = score;
  }
};

const scoreCount = (items, scoreType) => {
  return items.filter(item => item.score === scoreType).length;
};

const totalScore = (scoreType) => {
  return checklist.value.reduce((total, section) => {
    return total + section.items.filter(item => item.score === scoreType).length;
  }, 0);
};

const getTotalCount = () => {
  return checklist.value.reduce((total, section) => total + section.items.length, 0);
};

const getAnsweredCount = () => {
    return totalScore('yes') + totalScore('progress') + totalScore('no');
};

const isComplete = computed(() => getTotalCount() === getAnsweredCount());

const showEmailModal = ref(false);
const scoreRevealed = ref(false);
const userEmail = ref('');
const emailError = ref('');
const isSubmitting = ref(false);

const submitEmail = async () => {
    emailError.value = '';
    if (!userEmail.value || !/.+@.+\..+/.test(userEmail.value)) {
        emailError.value = 'Please enter a valid email address.';
        return;
    }
    
    isSubmitting.value = true;
    try {
        await submitProjectRequest({
            name: 'Checklist Lead',
            email: userEmail.value,
            details: `Completed Tech Stack Audit. Positive marks: ${totalScore('yes')}, Progress: ${totalScore('progress')}, Red flags: ${totalScore('no')}`,
            service: 'Consulting',
            budget: '<1000'
        });
        
        localStorage.setItem('collected_email', userEmail.value);
        showEmailModal.value = false;
        scoreRevealed.value = true;
    } catch (e) {
        console.error('Failed to submit email:', e);
        emailError.value = 'An error occurred. Please try again.';
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.p-button-sm {
  width: 2rem;
  height: 2rem;
  padding: 0;
}
.p-error {
  color: var(--p-error, #e24c4b);
}
</style>
