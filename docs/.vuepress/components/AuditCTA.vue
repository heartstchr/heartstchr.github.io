<template>
  <section class="mb-8 mt-6">
    <div class="surface-900 text-white p-6 md:p-8 border-round-3xl shadow-4 relative overflow-hidden">
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 right-0 w-30rem h-30rem bg-primary border-circle opacity-10" style="filter: blur(100px); transform: translate(30%, -30%)"></div>
      <div class="absolute bottom-0 left-0 w-20rem h-20rem bg-purple-500 border-circle opacity-10" style="filter: blur(80px); transform: translate(-30%, 30%)"></div>

      <div class="grid align-items-center relative z-1">
        <div class="col-12 lg:col-7">
          <h2 class="text-3xl md:text-5xl font-bold mb-3 line-height-2">Claim Your Technical Risk Audit</h2>
          <p class="text-xl text-white-alpha-70 line-height-3 max-w-40rem mb-0">
            Before you go, let's identify the hidden bottlenecks stalling your growth. Get a proprietary architecture teardown and a 25-minute roadmap session.
          </p>
        </div>
        <div class="col-12 lg:col-5 mt-4 lg:mt-0">
          <div v-if="!emailCollected" class="flex flex-column gap-3">
             <div class="flex flex-column md:flex-row gap-2">
                <InputText 
                  v-model="email" 
                  type="email" 
                  placeholder="Enter your professional email" 
                  class="flex-1 p-3 text-lg border-round-xl bg-white-alpha-10 text-white border-white-alpha-20 focus:border-primary transition-all shadow-none" 
                  :class="{'p-invalid': !!error}"
                />
                <Button 
                  label="Claim My Audit" 
                  icon="pi pi-shield" 
                  @click="handleAuditClaim" 
                  :loading="loading" 
                  severity="primary" 
                  class="px-6 py-3 text-xl font-bold border-round-xl" 
                />
             </div>
             <small v-if="error" class="text-red-400 font-bold ml-2">{{ error }}</small>
             <p class="text-xs text-white-alpha-40 ml-2">I respect your privacy. No spam, just technical value.</p>
          </div>
          <div v-else class="text-center lg:text-right">
             <a href="/startup-stack-audit-checklist/" class="no-underline">
                <Button 
                  label="Access My Audit Checklist" 
                  icon="pi pi-arrow-right" 
                  severity="success" 
                  size="large" 
                  raised 
                  rounded 
                  class="px-6 py-3 text-xl font-bold w-full lg:w-auto animate-pulse" 
                />
             </a>
             <p class="mt-3 text-primary font-bold">Email verified! You now have full access.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    error.value = 'Please enter a valid professional email address.';
    return;
  }

  loading.value = true;
  try {
    await submitProjectRequest({
      name: 'Audit Lead',
      email: email.value,
      details: 'Requested Technical Risk Audit via Project Page CTA',
      service: 'Technical Audit',
      budget: 'Audit'
    });

    localStorage.setItem('collected_email', email.value);
    emailCollected.value = true;
    
    // Smooth scroll to top or show success state
  } catch (err) {
    console.error('Audit claim failed:', err);
    error.value = 'Something went wrong. Please try again or contact me directly.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.p-inputtext:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2) !important;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}
.animate-pulse {
  animation: pulse 2s infinite ease-in-out;
}
</style>
