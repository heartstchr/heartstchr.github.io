---
title: Web Development Portfolio
description: Explore real-world web development projects crafted by Stack Seekers. From scalable SaaS apps to stunning websites, see how we build digital experiences that drive results. Freelance projects in custom web and app development, including booking platforms, dashboards, and analytics tools. Built with React, Node.js, and modern tech stacks.
order: 2
lastUpdated: false
editLink: false
copyright: false
---

<div class="flex flex-column gap-4 my-6 line-height-4">
  <div>
    Explore a curated selection of my freelance and organizational web development projects. These works highlight my expertise in building modern, scalable, and user-focused digital solutions.
  </div>
  <div>
    Each project is thoughtfully crafted to transform client ideas into functional, high-impact experiences tailored to specific business goals.
  </div>
  <div>
    <a
      href="https://cal.com/stackseekers"
      size="large"
      class="flex justify-content-center text-center no-underline mt-4"
    >
      <Button
        label="Build Your Vision with Us!"
        icon="pi pi-calendar-clock"
        severity="primary"
        raised
        rounded
      />
    </a>
  </div>
</div>
<div class="p-d-flex p-flex-column p-mr-3">
  <div class="grid my-6 gap-8">
    <ProjectCard
      v-for="(project, index) in freelance"
      :key="index"
      :project="project"
      :showHeader=true
    />
  </div>
</div>

<script setup lang="ts">
  import { freelance } from "@data/projects.js";
  import { toKebabCase } from "@utils";
</script>
