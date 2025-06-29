---
title: Podcast Mini
description: Mission here is to unpack the tools, trends, and strategies that power the software world, so you can stay ahead of the curve. Whether you’re a developer, an engineer, or just tech-curious, we’ve got you covered with actionable insights.
order: 5
editLink: false
copyright: false
---

Mission here is to unpack the tools, trends, and strategies that power the software world, so you can stay ahead of the curve. Whether you’re a developer, an engineer, or just tech-curious, we’ve got you covered with actionable insights.
<div class="surface-ground text-white">
    <!-- Hero Section -->
    <section class="">
      <h1 class="text-4xl font-bold mb-2">Stack Cast 🎙️</h1>
      <p class="text-xl mb-3">Conversations at the Code–Startup Crossroads.</p>
      <p class="mb-4">Tools, insights & frameworks for devs, indie hackers, and startup CTOs.</p>
    </section>
    <!-- Free Tools Section -->
    <!-- <section class="py-6">
      <h2 class="text-2xl font-semibold mb-4">🚀 New Here? Start With These Free Tools</h2>
      <ul class="list-none p-0 m-0 grid gap-3 md:grid-cols-2">
        <li class="flex items-center gap-2">
          <i class="pi pi-check-circle text-primary"></i>
          <span>Startup Stack Audit Checklist</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="pi pi-check-circle text-primary"></i>
          <span>Free Tech Hiring Playbook</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="pi pi-check-circle text-primary"></i>
          <span>Freelancer to Founder Blueprint</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="pi pi-check-circle text-primary"></i>
          <span>Weekly DevOps Toolkit Digest</span>
        </li>
      </ul>
      <div class="mt-4">
        <Button label="Get All Tools in One Email" icon="pi pi-envelope" class="p-button-lg p-button-help" />
      </div>
    </section> -->
    <!-- Featured Episodes -->
    <section>
      <h2 class="text-2xl font-semibold">Featured Episodes</h2>
      <ul class="list-disc ml-5">
        <li><strong>How 3 Devs Scaled a FinTech to Series A</strong></li>
        <li><strong>What Startup CTOs Wish They Knew Earlier</strong></li>
        <li><strong>The Tech Behind a Solo SaaS Hitting $10K MRR</strong></li>
      </ul>
      <Button label="Browse All Episodes" icon="pi pi-arrow-right" class="mt-3" />
    </section>
    <!-- Submit Project -->
    <section class="py-6">
      <h2 class="text-2xl font-semibold mb-4">🛠️ Built Something With Our Stuff?</h2>
      <p>Many listeners turn our insights into real apps, startups, or side-hustles. Want yours featured or reviewed?</p>
      <Button label="Submit Your Project" icon="pi pi-send" class="mt-3 p-button-secondary" />
    </section>
    <!-- Newsletter Signup -->
    <section class="py-6">
      <h2 class="text-2xl font-semibold mb-4">📬 Join 1,000+ Tech Builders</h2>
      <p>Get tools, podcast drops, and behind-the-scenes stories every week.</p>
      <div class="flex flex-column md:flex-row gap-2 mt-3">
        <InputText placeholder="Enter your email" class="p-inputtext-lg w-full md:w-3/4" />
        <Button label="Subscribe" icon="pi pi-send" class="p-button-lg w-full md:w-1/4" />
      </div>
    </section>
    <!-- Testimonials -->
    <section class="py-6">
      <h2 class="text-2xl font-semibold mb-4">💬 From Listeners Like You</h2>
      <p class="italic">“I got my first client using a pitch I heard here.” – Jaya R., Dev Freelancer</p>
      <p class="italic mt-2">“Subscribed for the podcast, stayed for the tools.” – Tanvir A., SaaS Builder</p>
    </section>
    <!-- Final CTA -->
    <section class="py-6 text-center">
      <h2 class="text-2xl font-bold mb-4">🧲 Not Hiring… But Open to Collaboration?</h2>
      <p>I help early-stage teams go from idea to MVP, and beyond. (Only when it's the right fit.)</p>
      <div class="flex justify-center gap-2 flex-wrap mt-3">
        <Button label="See What I Do" icon="pi pi-briefcase" class="p-button-rounded p-button-success" />
        <Button label="Say Hi on LinkedIn" icon="pi pi-linkedin" class="p-button-rounded p-button-secondary" />
      </div>
    </section>
  </div>

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
