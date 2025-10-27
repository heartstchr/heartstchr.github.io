<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchDatabaseSchemaOptions } from '../services/notionService';
import { submitProjectRequest } from '../services/notionService';

const route = useRoute();

type FormState = {
    name: string;
    email: string;
    details: string;
    service: string;
    budget: string;
};

const form = reactive<FormState>({
    name: '',
    email: '',
    details: '',
    service: '',
    budget: ''
});

const serviceOptions = ref<{ label: string; value: string }[]>([]);
const budgetOptions = ref<{ label: string; value: string }[]>([]);

onMounted(async () => {
    // Read query parameters and pre-populate form
    const query = route.query;
    if (query.subject) {
        form.details = decodeURIComponent(query.subject as string);
    }
    if (query.service) {
        form.service = decodeURIComponent(query.service as string);
    }

    try {
        const { serviceOptions: notionServices, budgetOptions: notionBudgets } = await fetchDatabaseSchemaOptions();

        // Use Notion options if available, otherwise fallback to defaults
        serviceOptions.value = notionServices.length ? notionServices : [
            { label: 'Website Development', value: 'Website Development' },
            { label: 'E-commerce', value: 'E-commerce' },
            { label: 'API Integration', value: 'API Integration' },
            { label: 'Consulting', value: 'Consulting' },
            { label: 'UI/UX Design', value: 'UI/UX Design' },
            { label: 'Other', value: 'Other' },
        ];

        budgetOptions.value = notionBudgets.length ? notionBudgets : [
            { label: 'Under $1,000', value: '<1000' },
            { label: '$1,000 - $5,000', value: '1000-5000' },
            { label: '$5,000 - $10,000', value: '5000-10000' },
            { label: 'Over $10,000', value: '>10000' }
        ];
    } catch (e) {
        console.error('Failed to fetch options from Notion:', e);
        // Fallback to defaults
        serviceOptions.value = [
            { label: 'Website Development', value: 'Website Development' },
            { label: 'E-commerce', value: 'E-commerce' },
            { label: 'API Integration', value: 'API Integration' },
            { label: 'Consulting', value: 'Consulting' },
            { label: 'UI/UX Design', value: 'UI/UX Design' },
            { label: 'Other', value: 'Other' },
        ];

        budgetOptions.value = [
            { label: 'Under $1,000', value: '<1000' },
            { label: '$1,000 - $5,000', value: '1000-5000' },
            { label: '$5,000 - $10,000', value: '5000-10000' },
            { label: 'Over $10,000', value: '>10000' }
        ];
    }
});



type ErrorState = {
    name: string;
    email: string;
    details: string;
    service: string;
    budget: string;
};

const errors = reactive<ErrorState>({
    name: '',
    email: '',
    details: '',
    service: '',
    budget: ''
});

const submitting = ref(false);
const success = ref(false);
const submitError = ref('');



function validate() {
    errors.name = form.name ? '' : 'Name is required.';
    errors.email = /.+@.+\..+/.test(form.email) ? '' : 'Valid email is required.';
    errors.details = form.details ? '' : 'Project details are required.';
    errors.service = form.service ? '' : 'Please select a service.';
    errors.budget = form.budget ? '' : 'Please select a budget.';
    return !errors.name && !errors.email && !errors.details && !errors.service && !errors.budget;
}

async function onSubmit() {
    if (!validate()) return;

    submitting.value = true;
    submitError.value = '';

    try {
        const result = await submitProjectRequest({
            name: form.name,
            email: form.email,
            details: form.details,
            service: form.service,
            budget: form.budget
        });

        if (result.ok) {
            success.value = true;
            // Reset form fields
            form.name = '';
            form.email = '';
            form.details = '';
            form.service = '';
            form.budget = '';
        } else {
            submitError.value = result.error || 'Failed to submit request. Please try again.';
        }
    } catch (error: any) {
        submitError.value = error.message || 'An unexpected error occurred. Please try again.';
        console.error('Form submission error:', error);
    } finally {
        submitting.value = false;
    }
}
</script>
<template>
    <div class="border-round-md vp-feature-item shadow-2 max-w-lg mx-auto">
        <Svg />
        <div class="p-4">
            <h2 class="text-2xl font-bold mb-4">Request a Project Quote</h2>
            <form @submit.prevent="onSubmit" autocomplete="off">
                <div class="mb-4">
                    <label for="name" class="block mb-1 font-semibold">Name</label>
                    <InputText id="name" v-model="form.name" :class="{ 'p-invalid': errors.name }" class="w-full"
                        placeholder="Your Name" />
                    <small v-if="errors.name" class="p-error">{{ errors.name }}</small>
                </div>
                <div class="mb-4">
                    <label for="email" class="block mb-1 font-semibold">Email</label>
                    <InputText id="email" v-model="form.email" :class="{ 'p-invalid': errors.email }" class="w-full"
                        placeholder="you@email.com" />
                    <small v-if="errors.email" class="p-error">{{ errors.email }}</small>
                </div>
                <div class="mb-4">
                    <label for="details" class="block mb-1 font-semibold">Project Details</label>
                    <Textarea id="details" v-model="form.details" :class="{ 'p-invalid': errors.details }"
                        class="w-full" rows="4" placeholder="Describe your project..." />
                    <small v-if="errors.details" class="p-error">{{ errors.details }}</small>
                </div>
                <div class="mb-4">
                    <label for="service" class="block mb-1 font-semibold">Service</label>
                    <Dropdown id="service" v-model="form.service" :options="serviceOptions" optionLabel="label"
                        optionValue="value" placeholder="Select service" class="w-full"
                        :class="{ 'p-invalid': errors.service }" />
                    <small v-if="errors.service" class="p-error">{{ errors.service }}</small>
                </div>
                <div class="mb-4">
                    <label for="budget" class="block mb-1 font-semibold">Budget $</label>
                    <Dropdown id="budget" v-model="form.budget" :options="budgetOptions" optionLabel="label"
                        optionValue="value" placeholder="Select budget" class="w-full"
                        :class="{ 'p-invalid': errors.budget }" />
                    <small v-if="errors.budget" class="p-error">{{ errors.budget }}</small>
                </div>

                <Button type="submit" label="Submit Request" icon="pi pi-send" class="w-full" :loading="submitting" />
                <div v-if="success" class="p-3 mt-4 bg-green-100 text-green-800 border-round-md text-center">
                    Thank you! Your request has been received.
                </div>
                <div v-if="submitError" class="p-3 mt-4 bg-red-100 text-red-800 border-round-md text-center">
                    {{ submitError }}
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.p-error {
    color: var(--p-error, #e24c4b);
}
</style>