<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { freelance } from "@data/projects.js";

const route = useRoute();
const project = ref(null);

onMounted(async () => {
    const name = route.path.split("/").filter(Boolean).pop().replace(".html", "");
    project.value = freelance.find(p => p.name === name);
});
</script>

<template>
    <div v-if="project">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
    </div>
    <div v-else>
        <p>Loading project...</p>
    </div>
</template>
