---
title: Startup Stack Audit Checklist
description: Mission here is to unpack the tools, trends, and strategies that power the software world, so you can stay ahead of the curve. Whether you’re a developer, an engineer, or just tech-curious, we’ve got you covered with actionable insights.
order: 5
editLink: false
copyright: false
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
      <div class="text-sm">
        <strong>Total:</strong>
        ✅ {{ totalScore('yes') }} |
        ⚠️ {{ totalScore('progress') }} |
        ❌ {{ totalScore('no') }}
      </div>
    </div>
  </div>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';

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
</script>

<style scoped>
.p-button-sm {
  width: 2rem;
  height: 2rem;
  padding: 0;
}
</style>
