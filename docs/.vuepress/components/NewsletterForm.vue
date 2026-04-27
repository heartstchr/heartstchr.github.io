<template>
  <div class="surface-ground border-round-xl p-4 md:p-6 shadow-2 text-center my-6 max-w-xl mx-auto border-1 border-surface-200">
    <div class="flex justify-content-center mb-3">
        <div class="bg-primary-reverse border-circle p-3 text-primary inline-flex shadow-1">
            <i class="pi pi-envelope text-3xl"></i>
        </div>
    </div>
    <h2 class="text-2xl md:text-3xl font-bold mb-2 m-0 text-900">Join the Technical Architecture Newsletter</h2>
    <p class="text-color-secondary line-height-3 mb-5 mt-0 max-w-sm mx-auto">
      Get actionable insights on scaling Node.js/Vue architectures, handling technical debt, and building enterprise platforms. Sent twice a month.
    </p>

    <div v-if="success" class="bg-green-50 text-green-800 p-3 border-round-md font-medium">
      <i class="pi pi-check-circle mr-2"></i> Successfully subscribed! Welcome aboard.
    </div>

    <form v-else @submit.prevent="submitNewsletter" class="flex flex-column sm:flex-row gap-2">
      <div class="flex-grow-1 w-full text-left relative">
        <InputText 
          id="newsletter-email" 
          v-model="email" 
          type="email" 
          placeholder="your.email@example.com" 
          class="w-full" 
          :class="{ 'p-invalid': !!error }" 
          aria-label="Email address" 
        />
        <small v-if="error" class="p-error absolute flex" style="bottom: -20px">{{ error }}</small>
      </div>
      <Button 
        type="submit" 
        label="Subscribe" 
        :loading="isSubmitting"
        class="w-full sm:w-auto flex-shrink-0 mt-4 sm:mt-0"
      />
    </form>
    <div class="text-xs text-500 mt-4">Unsubscribe at any time. No spam, ever.</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { submitProjectRequest } from '../services/notionService';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const email = ref('');
const error = ref('');
const isSubmitting = ref(false);
const success = ref(false);

const submitNewsletter = async () => {
    error.value = '';
    if (!email.value || !/.+@.+\..+/.test(email.value)) {
        error.value = 'Please enter a valid email.';
        return;
    }

    isSubmitting.value = true;
    try {
        await submitProjectRequest({
            name: 'Newsletter Subscriber',
            email: email.value,
            details: 'Subscribed to the Technical Architecture Newsletter from the blog.',
            service: 'Other',
            budget: '<1000'
        });

        localStorage.setItem('collected_email', email.value);
        success.value = true;
        
    } catch (e) {
        console.error('Newsletter subscription failed:', e);
        error.value = 'Subscription failed. Please try again later.';
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.bg-primary-reverse {
    background-color: var(--primary-100, #dbeafe);
}
.text-primary {
    color: var(--primary-600, #2563eb) !important;
}
.p-error {
    color: var(--p-error, #e24c4b);
}
</style>
