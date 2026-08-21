---
title: Code Tutorials by an Enterprise Architect
description: Watch in-depth web development tutorials, app walkthroughs, and architectural demos from an Enterprise Architecture Partner building with React & Node.js.
order: 4
editLink: false
copyright: false
pageInfo: false
contributors: false
---

Watch web development tutorials, app walkthroughs, and project demos by Stack Seekers. Learn how I build full-stack solutions, explore technical insights, and follow my creative journey.

<div class="my-6">
  <YouTubeVideos />
</div>

<!-- Ready to Build CTA -->
<div class="mt-8 border-round-3xl p-6 text-center surface-section relative overflow-hidden">
  <div class="absolute top-0 right-0 w-20rem h-20rem bg-primary border-circle opacity-10" style="filter: blur(80px); transform: translate(30%, -30%)"></div>
  <div class="relative z-1">
    <h2 class="text-3xl font-bold mb-3">Ready to build your own?</h2>
    <p class="text-lg text-700 mb-5 max-w-30rem mx-auto">I help founders and teams take these technical concepts and turn them into scalable, production-ready systems.</p>
    <a href="https://cal.com/stackseekers?utm_source=website&utm_medium=cta&utm_campaign=book-call" target="_blank" class="no-underline">
      <Button label="Book Free Strategy Call" icon="pi pi-video" severity="primary" size="large" rounded raised />
    </a>
  </div>
</div>

<div class="border-round-md vp-feature-item mt-6" id="contact">
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
