---
title: Stack Cast 🎙️
description: Mission here is to unpack the tools, trends, and strategies that power the software world, so you can stay ahead of the curve. Whether you're a developer, an engineer, or just tech-curious, we've got you covered with actionable insights.
order: 5
editLink: false
copyright: false
---

<h2 class="text-2xl font-semibold">Your go-to mini podcast</h2>
Mission here is to unpack the tools, trends, and strategies that power the software world, so you can stay ahead of the curve. Whether you're a developer, an engineer, or just tech-curious, we've got you covered with actionable insights.Tools, insights & frameworks for devs, and startup CTOs.
<div class="surface-ground">
    <section>
      <h2 class="text-2xl font-semibold">Featured Episodes</h2>
      <Podcast :showPagination="true"/>
      <a href="https://www.youtube.com/playlist?list=PLGK9Y5ibwm0-diGJKA69TmIGUQBIStzNw" target="_blank" size="large" class="flex justify-content-center text-center no-underline mt-4"> 
        <div class="p-flex p-ai-center">
          <div
            class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"
          >
            <span class="mr-6">
              <i class="pi pi-youtube mr-1" aria-label="View on Youtube" style="font-size: 1rem; color:#f03;"></i>
              Browse All Episodes
            </span>
            <Circles/>
            <i class="pi pi-angle-double-right" style="font-size: 1rem;"></i>
          </div>
        </div>
      </a>
    </section>
    <!-- Final CTA -->
    <section class="py-6 text-center">
      <h2 class="text-2xl font-bold mb-4">Not Hiring… But Open to Collaboration?</h2>
      <p>I help early-stage teams go from idea to MVP, and beyond. (Only when it's the right fit.)</p>
      <div class="text-center pb-4">
      <a href="https://www.linkedin.com/in/jiwanghosal/" size="large" class="flex justify-content-center text-center no-underline mt-4"> 
        <div class="p-flex p-ai-center">
          <div
            class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"
          >
            <span class="mr-6">
              <i class="pi pi-linkedin mr-1" aria-label="View LinkedIn Reviews" style="font-size: 1rem; color:#0a66c2;"></i>
              Say Hi on LinkedIn
            </span>
            <Circles/>
            <i class="pi pi-angle-double-right" style="font-size: 1rem;"></i>
          </div>
        </div>
      </a>
  </div>
    </section>
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
