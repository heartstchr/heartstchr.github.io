<template>
  <div>
    <!-- Exit Intent Dialog -->
    <Dialog v-model:visible="showExitIntent" modal header="Claim Your Technical Risk Audit" :style="{ width: '90vw', maxWidth: '400px' }">
      <div class="flex flex-column gap-3 pt-3">
        <p class="m-0 text-color-secondary line-height-3">Before you go, let's identify the hidden bottlenecks stalling your growth. Enter your email for a proprietary architecture teardown and a 25-minute roadmap session.</p>
        <div class="flex flex-column gap-1">
          <InputText id="exit-email" v-model="exitEmail" type="email" placeholder="Professional Email Address" class="w-full" :class="{'p-invalid': !!emailError}" />
          <small v-if="emailError" class="p-error">{{ emailError }}</small>
        </div>
        <div class="flex justify-content-end gap-2 mt-2">
          <Button type="button" label="No thanks" severity="secondary" @click="closeExitIntent" :disabled="isSubmitting" text></Button>
          <Button type="button" label="Claim My Audit" @click="submitExitIntent" :loading="isSubmitting" raised rounded></Button>
        </div>
      </div>
    </Dialog>

    <!-- Cal.com Intercept Dialog -->
    <Dialog v-model:visible="showCalModal" modal header="Unlock Your Strategy Framework" :style="{ width: '90vw', maxWidth: '400px' }">
      <div class="flex flex-column gap-3 pt-3">
        <p class="m-0 text-color-secondary line-height-3">Where should we deliver your preliminary audit questions and strategic brief before our architectural consultation?</p>
        <div class="flex flex-column gap-1">
          <InputText id="cal-email" v-model="calEmail" type="email" placeholder="Professional Email Address" class="w-full" :class="{'p-invalid': !!calEmailError}" @keyup.enter="submitCalIntent" />
          <small v-if="calEmailError" class="p-error">{{ calEmailError }}</small>
        </div>
        <div class="flex justify-content-end gap-2 mt-2">
          <Button type="button" label="Cancel" severity="secondary" @click="showCalModal = false" :disabled="isCalSubmitting" text></Button>
          <Button type="button" label="Continue to Discovery" icon="pi pi-arrow-right" iconPos="right" @click="submitCalIntent" :loading="isCalSubmitting" raised rounded></Button>
        </div>
      </div>
    </Dialog>

    <!-- Floating WhatsApp Button -->
    <a v-if="whatsappNumber" :href="whatsappLink" target="_blank" rel="noopener noreferrer" class="whatsapp-float text-white border-circle shadow-4 flex align-items-center justify-content-center cursor-pointer" aria-label="Chat on WhatsApp">
      <i class="pi pi-whatsapp text-3xl"></i>
    </a>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { submitProjectRequest } from '../services/notionService';

// WhatsApp Config (from config.ts define)
const whatsappNumber = __WHATSAPP_NUMBER__;
const whatsappLink = computed(() => {
    const text = encodeURIComponent("Hi Jiwan! I would like to consult about a project.");
    return `https://wa.me/${whatsappNumber}?text=${text}`;
});

// Exit Intent State
const showExitIntent = ref(false);
const exitEmail = ref('');
const emailError = ref('');
const isSubmitting = ref(false);

// Cal Request State
const showCalModal = ref(false);
const calEmail = ref('');
const calEmailError = ref('');
const isCalSubmitting = ref(false);
const pendingCalHref = ref('');

const closeExitIntent = () => {
    showExitIntent.value = false;
    localStorage.setItem('exit_intent_shown', 'true');
};

const submitExitIntent = async () => {
    emailError.value = '';
    if (!exitEmail.value || !/.+@.+\..+/.test(exitEmail.value)) {
        emailError.value = 'Please enter a valid email address.';
        return;
    }
    
    isSubmitting.value = true;
    try {
        await submitProjectRequest({
            name: 'Exit Intent Lead',
            email: exitEmail.value,
            details: 'Requested Free 25-min Technical Audit via Exit Intent',
            service: 'Consulting',
            budget: '<1000'
        });
        
        localStorage.setItem('exit_intent_shown', 'true');
        localStorage.setItem('collected_email', exitEmail.value); 
        showExitIntent.value = false;
    } catch (e) {
        console.error('Failed to submit exit intent email:', e);
        emailError.value = 'An error occurred. Please try again.';
    } finally {
        isSubmitting.value = false;
    }
};

const submitCalIntent = async () => {
    calEmailError.value = '';
    if (!calEmail.value || !/.+@.+\..+/.test(calEmail.value)) {
        calEmailError.value = 'Please enter a valid email address.';
        return;
    }
    
    isCalSubmitting.value = true;
    try {
        await submitProjectRequest({
            name: 'Booking Intent Lead',
            email: calEmail.value,
            details: 'Intercepted before proceeding to booking page. (Form cal.com)',
            service: 'Consulting',
            budget: '<1000'
        });
        
        localStorage.setItem('collected_email', calEmail.value);
        showCalModal.value = false;
        if (pendingCalHref.value) {
            window.location.href = pendingCalHref.value;
        }
    } catch (e) {
        console.error('Failed to submit cal intent email:', e);
        calEmailError.value = 'An error occurred. Please try again.';
    } finally {
        isCalSubmitting.value = false;
    }
};

const handleMouseLeave = (e) => {
    if (e.clientY <= 0) {
        if (!localStorage.getItem('exit_intent_shown') && !localStorage.getItem('collected_email')) {
            showExitIntent.value = true;
            localStorage.setItem('exit_intent_shown', 'true'); // Only show once per session ideally
        }
    }
};

const handleGlobalClick = (e) => {
    // Look for link clicks
    const link = e.target.closest('a');
    if (link && link.href && link.href.includes('cal.com/stackseekers')) {
        // If they already provided email, let them through
        if (!localStorage.getItem('collected_email')) {
            e.preventDefault();
            pendingCalHref.value = link.href;
            showCalModal.value = true;
        }
    }
};

onMounted(() => {
    if (typeof window !== 'undefined') {
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('click', handleGlobalClick);
    }
});

onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('click', handleGlobalClick);
    }
});
</script>

<style scoped>
.whatsapp-float {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    z-index: 1000;
    background-color: #25D366;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.whatsapp-float:hover {
    background-color: #128C7E;
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
.p-error {
    color: var(--p-error, #e24c4b);
}
</style>
