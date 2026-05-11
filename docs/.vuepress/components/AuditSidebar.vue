<template>
  <div class="surface-900 text-white p-5 border-round-3xl shadow-4 sticky top-100">
    <h3 class="text-2xl font-bold mb-3">Architecture Audit</h3>
    <p class="text-white-alpha-70 line-height-3 mb-5">Identify the hidden bottlenecks stalling your growth with a proprietary 25-minute architecture teardown.</p>
    
    <div v-if="!emailCollected" class="flex flex-column gap-3">
      <InputText 
        v-model="email" 
        type="email" 
        placeholder="Your professional email" 
        class="w-full p-3 bg-white-alpha-10 text-white border-white-alpha-20 focus:border-primary transition-all shadow-none" 
        :class="{'p-invalid': !!error}"
      />
      <Button 
        label="Claim Free Audit" 
        icon="pi pi-shield" 
        @click="handleAuditClaim" 
        :loading="loading" 
        severity="primary" 
        class="w-full font-bold py-3" 
        raised 
        rounded 
      />
      <small v-if="error" class="text-red-400 font-bold">{{ error }}</small>
    </div>

    <div v-else class="text-center">
      <a href="/startup-stack-audit-checklist/" class="no-underline">
        <Button 
          label="Access Audit Now" 
          icon="pi pi-arrow-right" 
          severity="success" 
          class="w-full font-bold py-3 animate-pulse" 
          raised 
          rounded 
        />
      </a>
      <p class="mt-3 text-primary text-sm font-bold">Access Unlocked!</p>
    </div>

    <div class="mt-4 pt-4 border-top-1 border-white-alpha-10">
       <div class="flex align-items-center gap-2 text-sm text-white-alpha-50">
          <i class="pi pi-lock"></i>
          <span>Architecture First Approach</span>
       </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { submitProjectRequest } from '../services/notionService';

const email = ref('');
const loading = ref(false);
const error = ref('');
const emailCollected = ref(false);

onMounted(() => {
  const savedEmail = localStorage.getItem('collected_email');
  if (savedEmail) {
    emailCollected.value = true;
  }
});

const handleAuditClaim = async () => {
  error.value = '';
  
  if (!email.value || !/.+@.+\..+/.test(email.value)) {
    error.value = 'Valid email required.';
    return;
  }

  loading.value = true;
  try {
    await submitProjectRequest({
      name: 'Service Audit Lead',
      email: email.value,
      details: 'Requested Audit via Service Page Sidebar',
      service: 'Technical Audit',
      budget: 'Audit'
    });

    localStorage.setItem('collected_email', email.value);
    emailCollected.value = true;
  } catch (err) {
    console.error('Audit claim failed:', err);
    error.value = 'Failed. Try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}
.animate-pulse {
  animation: pulse 2s infinite ease-in-out;
}
</style>
