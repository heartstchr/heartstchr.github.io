<script setup>
defineProps({
    features: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div v-if="features" class="flex flex-column p-2">
        <Accordion>
            <AccordionTab header="Features">
                <h3 class="my-2 text-l sr-only">Features</h3>
                <ul class="my-2 md:ml-3 text-sm">
                    <li v-for="feature in features" :key="feature.text"
                        class="flex flex-row align-content-center line-height-3">
                        <i class="pi pi-verified m-2 bg-primary" alt="arrow" style="font-size: 1rem;"></i>
                        <h4 class="m-2 text-sm" v-html="feature.text"></h4>
                    </li>
                </ul>
            </AccordionTab>
        </Accordion>
    </div>
</template>