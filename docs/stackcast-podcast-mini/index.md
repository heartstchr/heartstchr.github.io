---
title: Podcast Mini
description: Mission here is to unpack the tools, trends, and strategies that power the software world, so you can stay ahead of the curve. Whether you’re a developer, an engineer, or just tech-curious, we’ve got you covered with actionable insights.
order: 5
editLink: false
copyright: false
---

Mission here is to unpack the tools, trends, and strategies that power the software world, so you can stay ahead of the curve. Whether you’re a developer, an engineer, or just tech-curious, we’ve got you covered with actionable insights.

<div class="my-6">
  <Podcast />
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
