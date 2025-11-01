---
title: Web Development Portfolio
description: Explore real-world web development projects crafted by Stack Seekers. From scalable SaaS apps to stunning websites, see how we build digital experiences that drive results. Freelance projects in custom web and app development, including booking platforms, dashboards, and analytics tools. Built with React, Node.js, and modern tech stacks.
order: 2
lastUpdated: false
editLink: false
copyright: false
---

<div class="flex flex-column gap-4 my-4 line-height-4">
  <div>
    Explore my freelance and organizational web development projects. These works highlight my expertise in building modern, scalable, and user-focused digital solutions. Each project is thoughtfully crafted to transform ideas into functional, high-impact experiences tailored to specific business goals.
  </div>
</div>
<div class="flex md:flex-row flex-column gap-4">
  <div class="p-d-flex p-flex-column" style="flex: 3;">
    <div class="grid my-6 gap-8">
      <ProjectCard
        v-for="(project, index) in paginatedProjects"
        :key="index"
        :project="project"
        :showHeader=true
      />
    </div>
    <Pagination 
      :totalRecords="freelance.length" 
      :rowsPerPage="10"
      @page-change="onPageChange"
    />
  </div>
  <div class="flex-1 align-self-start" style="max-width: 100%; position: sticky; top: 6rem;">
    <YouTubeAside />
  </div>
</div>


<script setup lang="ts">
  import { freelance } from "@data/projects.js";
  import { toKebabCase } from "@utils";
  import { ref, computed } from 'vue';

  const currentPage = ref(0);
  const rowsPerPage = ref(10);

  const paginatedProjects = computed(() => {
    const start = currentPage.value * rowsPerPage.value;
    const end = start + rowsPerPage.value;
    return freelance.slice(start, end);
  });

  const onPageChange = (event) => {
    currentPage.value = Math.floor(event.first / event.rows);
    rowsPerPage.value = event.rows;
  };
</script>
