---
title: Dev Tutorials, Web Projects & Tech Videos
description: Watch web development tutorials, app walkthroughs, and project demos by Stack Seekers. Learn how we build full-stack solutions, explore our tech insights, and follow our creative journey.
icon: pi pi-video
order: 4
editLink: false
copyright: false
---

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
        <h3 class="hidden m-0 p-0">{{socialElement.label}} </h3>
        <i :class="socialElement.icon" style="font-size: 1rem"></i>
        </a>
    </div>
  </div>
</div>

<script setup lanf="ts">
  import { ref, onMounted } from 'vue';

  const social= [
    { label: 'LinkedIn', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/jiwanghosal/' },
    { label: 'Youtube', icon: 'pi pi-youtube', url: 'https://www.youtube.com/@stackseekers' },
    { label: 'Stackoverflow', icon: 'pi pi-chart-bar', url: 'https://stackoverflow.com/users/10376224/stchr?tab=profile' },
    { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/jiwan_ghosal/' },
  ]
</script>
