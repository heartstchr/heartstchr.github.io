<script setup>
import { ref } from 'vue';
import Svg from "./Svg.vue"; // Ensure this component exists
import { toKebabCase } from "../utils/index.js"; // Import your utility function
import { responsiveOptions } from "../data/responsive.js"
import { submitProjectRequest } from '../services/notionService';

// Props
const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
    showHeader: {
        type: Boolean,
        default: false
    }
});

const showEmailModal = ref(false);
const userEmail = ref('');
const emailError = ref('');
const isSubmitting = ref(false);

const handleMoreDetails = () => {
    // Check if the user has already provided their email in this session / device
    const hasProvidedEmail = localStorage.getItem('collected_email');
    if (hasProvidedEmail) {
        window.location.href = `/web-development-projects/${toKebabCase(props.project.name)}/`;
    } else {
        showEmailModal.value = true;
    }
};

const submitEmail = async () => {
    emailError.value = '';
    if (!userEmail.value || !/.+@.+\..+/.test(userEmail.value)) {
        emailError.value = 'Please enter a valid email address.';
        return;
    }
    
    isSubmitting.value = true;
    try {
        await submitProjectRequest({
            name: 'Anonymous Viewer',
            email: userEmail.value,
            details: `Requested details for project: ${props.project.name}`,
            service: 'Project Details Request',
            budget: '<1000'
        });
        
        // Store email locally so they aren't prompted again
        localStorage.setItem('collected_email', userEmail.value);
        showEmailModal.value = false;
        
        // Navigate
        window.location.href = `/web-development-projects/${toKebabCase(props.project.name)}/`;
    } catch (e) {
        console.error('Failed to submit email:', e);
        emailError.value = 'An error occurred. Please try again.';
    } finally {
        isSubmitting.value = false;
    }
};
</script>
<template>
    <div class="vp-feature-item col-12 shadow-1 m-0 p-0" :id="toKebabCase(project.name)">
        <Svg />
        <div>
            <CardHeader v-if="showHeader" :project="project" @openModal="handleMoreDetails" />
            <div class="flex md:flex-row flex-column" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="md:col-6 col-12  px-4">
                    <div class="my-2 text-l line-height-3">{{ project.description }}</div>
                    <Stacks :stack="project.stack" :other-skills="project.otherSkills" />
                </div>
                <div class="md:col-6 col-12 px-4 pt-4">
                    <link itemprop="applicationCategory" :href="project.schema" />
                    <div v-if="project.images">
                        <div class="card" v-if="project.images.length != 1">
                            <Galleria :value="project.images" :responsiveOptions="responsiveOptions" :numVisible="5"
                                :circular="true" :showItemNavigators="true" :showThumbnails="true" :pt="{
                                    prevButton: { 'aria-label': 'Previous screen of project' },
                                    nextButton: { 'aria-label': 'Next screen of project' }
                                }">
                                <template #item="slotProps">
                                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                                        style="width: 100%; display: block" loading="lazy" />
                                </template>
                                <template #thumbnail="slotProps">
                                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
                                </template>
                            </Galleria>
                        </div>
                        <div class="card" v-else>
                            <img :src="project.images[0].itemImageSrc" :alt="project.images[0].alt"
                                style="width: 100%; display: block" loading="lazy" />
                        </div>
                        <div
                            class="flex flex-column justify-content-center align-items-center gap-2 my-4 w-full max-w-96">
                             <Button @click="handleMoreDetails" label="More details" icon="pi pi-info-circle" severity="secondary" raised
                                 rounded class="w-full mb-2" :aria-label="`Read more technical details about ${project.name}`" />
                             <a v-if="project.contact"
                                 :href="`/contact/?subject=${encodeURIComponent('Custom Request: ' + project.name)}`"
                                 class="flex flex-row no-underline w-full" :aria-label="`Request a custom quote for ${project.name}`">
                                 <Button label="Get Custom Request" icon="pi pi-inbox" severity="secondary" raised
                                     rounded class="w-full" />
                             </a>
                             <a v-if="project.link" :href="project.link" target="_blank"
                                 class="flex flex-row no-underline w-full" :aria-label="`View live demo of ${project.name}`">
                                 <Button label="Live Demo" icon="pi pi-angle-double-right" severity="primary" raised
                                     rounded class="w-full" />
                             </a>
                            <a v-if="project.codeLink" :href="project.codeLink" target="_blank"
                                class="flex flex-row no-underline w-full">
                                <Button label="Get Started" icon="pi pi-github" severity="secondary" raised rounded
                                    class="w-full" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Email Capture Dialog -->
        <Dialog v-model:visible="showEmailModal" modal header="Enter your email to view details" :style="{ width: '90vw', maxWidth: '400px' }">
            <div class="flex flex-column gap-3 pt-3">
                <p class="m-0 text-color-secondary">Please provide your email to seamlessly access technical details and architecture breakdowns for all projects.</p>
                <div class="flex flex-column gap-1">
                    <InputText id="email" v-model="userEmail" type="email" placeholder="you@email.com" class="w-full" :class="{'p-invalid': !!emailError}" />
                    <small v-if="emailError" class="p-error">{{ emailError }}</small>
                </div>
                <div class="flex justify-content-end gap-2 mt-2">
                    <Button type="button" label="Cancel" severity="secondary" @click="showEmailModal = false" :disabled="isSubmitting"></Button>
                    <Button type="button" label="Continue" @click="submitEmail" :loading="isSubmitting"></Button>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<style scoped>
.p-error {
    color: var(--p-error, #e24c4b);
}
</style>