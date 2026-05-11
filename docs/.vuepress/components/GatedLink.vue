<template>
  <div class="inline-block" :class="wrapperClass">
    <a 
      v-if="emailCollected" 
      :href="href" 
      :class="customClass"
      class="flex align-items-center gap-2 no-underline"
    >
      <slot>
        {{ label }}
        <i v-if="showIcon" :class="iconClass"></i>
      </slot>
    </a>
    <div 
      v-else 
      @click="showModal = true" 
      :class="[customClass, 'cursor-pointer']"
      class="inline-flex align-items-center gap-2"
    >
      <slot>
        {{ label }}
        <i v-if="showIcon" :class="iconClass"></i>
      </slot>
    </div>

    <Dialog v-model:visible="showModal" modal header="Unlock Professional Audit" :style="{ width: '90vw', maxWidth: '400px' }">
      <div class="flex flex-column gap-3 pt-3">
        <p class="m-0 text-color-secondary line-height-3">Enter your professional email to unlock the technical risk audit framework and scaling roadmap.</p>
        <div class="flex flex-column gap-1">
          <InputText 
            v-model="email" 
            type="email" 
            placeholder="Professional Email" 
            class="w-full" 
            :class="{'p-invalid': !!error}" 
            @keyup.enter="submitEmail"
          />
          <small v-if="error" class="p-error font-bold">{{ error }}</small>
        </div>
        <div class="flex justify-content-end gap-2 mt-2">
          <Button type="button" label="Cancel" severity="secondary" @click="showModal = false" :disabled="loading" text></Button>
          <Button type="button" label="Unlock Now" icon="pi pi-lock-open" @click="submitEmail" :loading="loading" raised rounded></Button>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { submitProjectRequest } from '../services/notionService';

const props = defineProps({
  href: { type: String, required: true },
  label: { type: String, default: 'Unlock' },
  customClass: { type: String, default: '' },
  wrapperClass: { type: String, default: '' },
  showIcon: { type: Boolean, default: true },
  iconClass: { type: String, default: 'pi pi-arrow-right' }
});

const showModal = ref(false);
const email = ref('');
const error = ref('');
const loading = ref(false);
const emailCollected = ref(false);

onMounted(() => {
  if (localStorage.getItem('collected_email')) {
    emailCollected.value = true;
  }
});

const submitEmail = async () => {
  error.value = '';
  if (!email.value || !/.+@.+\..+/.test(email.value)) {
    error.value = 'Valid professional email required.';
    return;
  }

  loading.value = true;
  try {
    await submitProjectRequest({
      name: 'Gated Lead',
      email: email.value,
      details: `Requested access to: ${props.href}`,
      service: 'General Lead',
      budget: 'Gated'
    });

    localStorage.setItem('collected_email', email.value);
    emailCollected.value = true;
    showModal.value = false;
    
    // Redirect after success
    window.location.href = props.href;
  } catch (err) {
    console.error('Lead submission failed:', err);
    error.value = 'Something went wrong. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.p-error {
  color: #e24c4b;
  font-size: 0.85rem;
}
</style>
