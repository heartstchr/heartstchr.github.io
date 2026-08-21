<template>
  <div>
    <!-- Exit Intent Dialog -->
    <Dialog v-model:visible="showExitIntent" modal class="lead-capture-dialog" :style="{ width: '92vw', maxWidth: '520px' }">
      <template #header>
        <div class="flex align-items-center gap-3 w-full">
          <div class="w-3rem h-3rem border-circle bg-primary-50 flex align-items-center justify-content-center flex-shrink-0 shadow-1">
            <i class="pi pi-bolt text-primary text-xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-bold m-0 text-900">Wait — Your Free Architecture Teardown</h3>
            <p class="text-xs text-500 m-0 mt-1 font-medium">Most founders discover 3+ hidden bottlenecks</p>
          </div>
        </div>
      </template>
      <div class="flex flex-column gap-3">
        <p class="m-0 text-sm text-600 line-height-3">You're about to leave without the free teardown. Founders who skip this usually miss 3–5 critical bottlenecks draining engineering velocity.</p>
        <div class="flex align-items-center gap-2 p-3 border-round-xl bg-primary-50 border-1 border-primary-100">
          <i class="pi pi-check-circle text-primary font-bold"></i>
          <span class="text-xs font-semibold text-700">Includes: Architecture audit + growth roadmap — delivered in 48 hours</span>
        </div>
        <div class="flex flex-column gap-1 mt-1">
          <InputText id="exit-email" v-model="exitEmail" type="email" placeholder="you@company.com" class="w-full" :class="{ 'p-invalid': !!emailError }" @keyup.enter="submitExitIntent" />
          <small v-if="emailError" class="p-error font-medium">{{ emailError }}</small>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-content-between align-items-center w-full">
          <button class="text-sm text-400 hover:text-600 transition-colors cursor-pointer bg-transparent border-none p-0" @click="closeExitIntent" :disabled="isSubmitting">
            I'll figure it out myself
          </button>
          <Button label="Send Me the Teardown" icon="pi pi-arrow-right" iconPos="right" @click="submitExitIntent" :loading="isSubmitting" severity="primary" raised rounded class="px-5 font-bold" />
        </div>
      </template>
    </Dialog>

    <!-- Cal.com Intercept Dialog -->
    <Dialog v-model:visible="showCalModal" modal class="lead-capture-dialog" :style="{ width: '92vw', maxWidth: '520px' }">
      <template #header>
        <div class="flex align-items-center gap-3 w-full">
          <div class="w-3rem h-3rem border-circle bg-primary-50 flex align-items-center justify-content-center flex-shrink-0 shadow-1">
            <i class="pi pi-shield text-primary text-xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-bold m-0 text-900">Before You Book — One Critical Thing</h3>
            <p class="text-xs text-500 m-0 mt-1 font-medium">Founders who skip prep waste 60% of the call</p>
          </div>
        </div>
      </template>
      <div class="flex flex-column gap-3">
        <p class="m-0 text-sm text-600 line-height-3">We'll send your risk assessment + strategic brief ahead of time so we can skip the basics and go straight to solving your real problem.</p>
        <div class="flex align-items-center gap-2 p-3 border-round-xl bg-primary-50 border-1 border-primary-100">
          <i class="pi pi-bolt text-primary font-bold"></i>
          <span class="text-xs font-semibold text-700">Pre-call prep means we cover 2x more ground in 25 minutes</span>
        </div>
        <div class="flex flex-column gap-1 mt-1">
          <InputText id="cal-email" v-model="calEmail" type="email" placeholder="you@company.com" class="w-full" :class="{ 'p-invalid': !!calEmailError }" @keyup.enter="submitCalIntent" />
          <small v-if="calEmailError" class="p-error font-medium">{{ calEmailError }}</small>
        </div>
      </div>
      <template #footer>
        <div class="flex justify-content-between align-items-center w-full">
          <button class="text-sm text-400 hover:text-600 transition-colors cursor-pointer bg-transparent border-none p-0" @click="showCalModal = false" :disabled="isCalSubmitting">
            Skip — book without prep
          </button>
          <Button label="Continue to Booking" icon="pi pi-arrow-right" iconPos="right" @click="submitCalIntent" :loading="isCalSubmitting" severity="primary" raised rounded class="px-5 font-bold" />
        </div>
      </template>
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

const whatsappNumber = __WHATSAPP_NUMBER__;
const whatsappLink = computed(() => {
    const text = encodeURIComponent("Hi Jiwan! I would like to consult about a project.");
    return `https://wa.me/${whatsappNumber}?text=${text}`;
});

const showExitIntent = ref(false);
const exitEmail = ref('');
const emailError = ref('');
const isSubmitting = ref(false);

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
        emailError.value = 'Enter your work email to receive the teardown.';
        return;
    }
    isSubmitting.value = true;
    try {
        const result = await submitProjectRequest({
            name: 'Exit Intent Lead',
            email: exitEmail.value,
            details: 'Requested Free Architecture Teardown via Exit Intent',
            service: 'Consulting',
            budget: '<1000'
        });
        if (!result.ok) {
            throw new Error(result.error || 'Submission failed');
        }
        localStorage.setItem('exit_intent_shown', 'true');
        localStorage.setItem('collected_email', exitEmail.value);
        showExitIntent.value = false;
    } catch (e) {
        console.error('Failed to submit exit intent email:', e);
        emailError.value = 'Something went wrong. Please try again.';
        localStorage.removeItem('exit_intent_shown');
    } finally {
        isSubmitting.value = false;
    }
};

const submitCalIntent = async () => {
    calEmailError.value = '';
    if (!calEmail.value || !/.+@.+\..+/.test(calEmail.value)) {
        calEmailError.value = 'Enter your work email to receive pre-call prep.';
        return;
    }
    isCalSubmitting.value = true;
    try {
        const result = await submitProjectRequest({
            name: 'Booking Intent Lead',
            email: calEmail.value,
            details: 'Pre-call prep requested before booking page redirect.',
            service: 'Consulting',
            budget: '<1000'
        });
        if (!result.ok) {
            throw new Error(result.error || 'Submission failed');
        }
        localStorage.setItem('collected_email', calEmail.value);
        showCalModal.value = false;
        if (pendingCalHref.value) {
            window.location.href = pendingCalHref.value;
        }
    } catch (e) {
        console.error('Failed to submit cal intent email:', e);
        calEmailError.value = 'Something went wrong. Please try again.';
    } finally {
        isCalSubmitting.value = false;
    }
};

const handleMouseLeave = (e) => {
    if (e.clientY <= 0) {
        if (!localStorage.getItem('exit_intent_shown') && !localStorage.getItem('collected_email')) {
            showExitIntent.value = true;
            localStorage.setItem('exit_intent_shown', 'true');
        }
    }
};

const handleGlobalClick = (e) => {
    const link = e.target.closest('a');
    if (link && link.href && link.href.includes('cal.com/stackseekers')) {
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
</style>

<style>
/* Theme-matched Dialog overrides — scoped to global lead capture dialogs */
.p-dialog {
    border-radius: 1.5rem !important;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
    border: 1px solid var(--surface-200, rgba(0, 0, 0, 0.08)) !important;
}
.p-dialog .p-dialog-header {
    padding: 1.25rem 1.5rem 0.5rem !important;
    background: var(--surface-0, #fff);
}
.p-dialog .p-dialog-content {
    padding: 0.5rem 1.5rem !important;
    background: var(--surface-0, #fff);
}
.p-dialog .p-dialog-footer {
    padding: 0.75rem 1.5rem 1.25rem !important;
    background: var(--surface-0, #fff);
}
.p-error {
    color: var(--p-error, #e24c4b);
}
/* Lead capture dialogs: always light — black text, white input boxes */
.lead-capture-dialog,
.lead-capture-dialog .p-dialog-header,
.lead-capture-dialog .p-dialog-content,
.lead-capture-dialog .p-dialog-footer {
    background: #ffffff !important;
    color: #000000 !important;
}
.lead-capture-dialog h3,
.lead-capture-dialog p,
.lead-capture-dialog span:not(.p-error),
.lead-capture-dialog button:not(.p-button),
.lead-capture-dialog .p-dialog-header-close-icon {
    color: #000000 !important;
}
.lead-capture-dialog .p-inputtext {
    background: #ffffff !important;
    color: #000000 !important;
    border: 1px solid #cbd5e1 !important;
}
.lead-capture-dialog .p-inputtext::placeholder {
    color: #94a3b8 !important;
}
.lead-capture-dialog .p-inputtext:enabled:hover,
.lead-capture-dialog .p-inputtext:enabled:focus {
    border-color: #94a3b8 !important;
}
</style>
