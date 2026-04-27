---
title: Stack Seekers TV | Code Tutorials by an Enterprise Architect
description: Watch in-depth web development tutorials, app walkthroughs, and architectural demos. Real projects from an Enterprise Architecture Partner building with React & Node.js.
order: 4
editLink: false
copyright: false
---

Watch web development tutorials, app walkthroughs, and project demos by Stack Seekers. Learn how I build full-stack solutions, explore technical insights, and follow my creative journey.

<div class="my-6">
  <YouTubeVideos />
</div>

<!-- Contact Me -->
<div class="border-round-md vp-feature-item" id="contact">
  <div>
    <div class="text-center py-4">
      <h2 class="my-4 text-md m-0 p-0">Connect with me on other social networks!</h2>
    </div>
    <div class="flex flex-row justify-content-end flex-wrap gap-4 mx-6 mb-6">
      <a
        v-for="(socialElement, socialIndex) in social"
        :key="socialIndex"
        :href="socialElement.url"
        target="_blank"
        class="flex flex-row gap-2"
        >
        <h3 class="sr-only m-0 p-0">{{socialElement.label}} </h3>
        <i :class="socialElement.icon" style="font-size: 1rem"></i>
        </a>
    </div>
  </div>
</div>

<script setup lang="ts">
  import { social } from "@data/social.js";
</script>
