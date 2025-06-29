<template>
    <div v-if="totalPages > 1" class="flex justify-content-center align-items-center mt-4 mb-2">
        <Paginator v-model:first="first" :rows="rows" :totalRecords="totalRecords"
            :rowsPerPageOptions="rowsPerPageOptions" @page="onPageChange" class="border-round">
            <template #start>
                <span class="text-sm text-600">
                    Showing {{ first + 1 }} to {{ Math.min(first + rows, totalRecords) }} of {{ totalRecords }} items
                </span>
            </template>
        </Paginator>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
    totalRecords: {
        type: Number,
        required: true
    },
    rowsPerPage: {
        type: Number,
        default: 6
    },
    rowsPerPageOptions: {
        type: Array,
        default: () => [3, 5, 10, 15]
    }
});

const emit = defineEmits(['page-change']);

const first = ref(0);
const rows = ref(props.rowsPerPage);

const totalPages = computed(() => Math.ceil(props.totalRecords / rows.value));

const onPageChange = (event) => {
    first.value = event.first;
    rows.value = event.rows;
    emit('page-change', {
        first: event.first,
        rows: event.rows,
        page: Math.floor(event.first / event.rows) + 1
    });
};

// Reset to first page when total records change
watch(() => props.totalRecords, () => {
    first.value = 0;
});

// Update rows when rowsPerPage prop changes
watch(() => props.rowsPerPage, (newValue) => {
    rows.value = newValue;
});
</script>

<style scoped>
:deep(.p-paginator) {
    background: transparent;
    border: none;
    padding: 0;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page) {
    border-radius: 6px;
    margin: 0 2px;
    min-width: 2.5rem;
    height: 2.5rem;
    border: 1px solid var(--surface-border);
    background: var(--surface-card);
    color: var(--text-color);
    transition: all 0.2s;
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page:hover) {
    background: var(--surface-hover);
    border-color: var(--primary-color);
}

:deep(.p-paginator .p-paginator-pages .p-paginator-page.p-highlight) {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--primary-color-text);
}

:deep(.p-paginator .p-paginator-first),
:deep(.p-paginator .p-paginator-prev),
:deep(.p-paginator .p-paginator-next),
:deep(.p-paginator .p-paginator-last) {
    border-radius: 6px;
    margin: 0 2px;
    min-width: 2.5rem;
    height: 2.5rem;
    border: 1px solid var(--surface-border);
    background: var(--surface-card);
    color: var(--text-color);
    transition: all 0.2s;
}

:deep(.p-paginator .p-paginator-first:hover),
:deep(.p-paginator .p-paginator-prev:hover),
:deep(.p-paginator .p-paginator-next:hover),
:deep(.p-paginator .p-paginator-last:hover) {
    background: var(--surface-hover);
    border-color: var(--primary-color);
}

:deep(.p-paginator .p-paginator-first:disabled),
:deep(.p-paginator .p-paginator-prev:disabled),
:deep(.p-paginator .p-paginator-next:disabled),
:deep(.p-paginator .p-paginator-last:disabled) {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>