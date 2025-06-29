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
import { ref, watch, computed, nextTick } from 'vue';

const props = defineProps({
    totalRecords: {
        type: Number,
        required: true
    },
    rowsPerPage: {
        type: Number,
        default: 1
    },
    rowsPerPageOptions: {
        type: Array,
        default: () => [1, 3, 5, 10, 15]
    }
});

const emit = defineEmits(['page-change']);

const first = ref(0);
const rows = ref(props.rowsPerPage);

const totalPages = computed(() => Math.ceil(props.totalRecords / rows.value));

const onPageChange = (event) => {
    first.value = event.first;
    rows.value = event.rows;

    // Prevent scrolling by maintaining scroll position
    const currentScrollY = window.scrollY;

    emit('page-change', {
        first: event.first,
        rows: event.rows,
        page: Math.floor(event.first / event.rows) + 1
    });

    // Restore scroll position after the next tick to prevent jumping
    nextTick(() => {
        window.scrollTo(0, currentScrollY);
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
    border: 1px solid var(--p-green-800);
    background: var(--surface-card);
    color: var(--primary-color-text);
    transition: all 0.2s;
}
:deep(.p-paginator-page-selected){
    background: var(--p-green-800) !important;
    color: white !important;
}
:deep(.p-paginator .p-paginator-pages .p-paginator-page:hover) {
    background: var(--surface-hover);
    border-color: var(--theme-color);
}
</style>