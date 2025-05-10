<script setup>
import { freelance } from "@data/projects.js";
import { toKebabCase } from "@utils";

</script>

<template>
    <div>
        <h2>Projects</h2>
        <ul>
            <li v-for="project in freelance" :key="project.name">
                <RouterLink :to="`/web-development-projects/${toKebabCase(project.name)}/`">
                    {{ project.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
