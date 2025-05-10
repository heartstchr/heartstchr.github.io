<!-- filepath: /Users/stchr/Documents/all/repo/heartstchr.github.io vuepress/docs/.vuepress/components/SideBar.vue -->
<template>
    <div class="sidebar-container">
        <!-- Existing Sidebar Content -->
        <slot />

        <!-- Add ProjectPage Component -->
        <div class="project-page-wrapper">
            <ProjectPage />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project-page-wrapper {
    margin-top: 1rem;
}
</style>