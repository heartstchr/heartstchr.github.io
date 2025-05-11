---
title: Finding The Spots
description: Say goodbye to the chaos of location scouting host, book, and create in our spaces effortlessly.
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "Finding The Spots"
  description: "Say goodbye to the chaos of location scouting host, book, and create in our spaces effortlessly."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Leisure, travel, and tourism"
  year: "2024"
  link: "https://findingthespots.com/"
  codeLink: 
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20"
  stack: ["Javascript","Vuedotjs","vite","Axios","Express/black/white","jsonwebtokens/black/white","stripe","nodedotjs","MongoDB","Git","github/black/white","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/home/projects/fts.webp","alt":"Cover screen for application page"}]
  features: [{"text":"Secure user registration, login, and logout functionality."},{"text":"Role-based access for general users, property owners, and admins."},{"text":"Search for properties/spots by type, country, city, and time."},{"text":"Advanced filters to refine search results based on user preferences."},{"text":"Detailed property pages with full image galleries and spot information."},{"text":"Booking request system with date, time, and duration selection."},{"text":"Free cancellation within 24 hours with redirection to spot listings."},{"text":"Seamless and secure payment processing via Stripe for confirmed bookings."},{"text":"Email notifications for booking and payment confirmations (users & owners)."},{"text":"Property owners can list new spots with images and details."},{"text":"Admin verification process for new spot submissions."},{"text":"Responsive, mobile-friendly interface for seamless access across devices."},{"text":"Integrated APIs for authentication, spot listing, booking, search, and payments."},{"text":"Scalable backend architecture to support future growth and features."}]
---
<div>
    <div class="col-12 ">
      <div class="my-2 text-l line-height-3">{{$frontmatter.project.description}}</div>
    </div>
    <div class="flex flex-column" itemscope itemtype="https://schema.org/SoftwareApplication">
      <div v-if="$frontmatter.project.images">
        <div class="card" v-if="$frontmatter.project.images.length != 1">
          <Galleria :value="$frontmatter.project.images" :responsiveOptions="responsiveOptions" :numVisible="5"
              :circular="true" :showItemNavigators="true" :showThumbnails="true" :pt="{
                  prevButton: { 'aria-label': 'Previous screen of project' },
                  nextButton: { 'aria-label': 'Next screen of project' }
              }">
              <template #item="slotProps">
                  <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                      style="width: 100%; display: block" loading="eager" fetchpriority="high" />
              </template>
              <template #thumbnail="slotProps">
                  <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
              </template>
          </Galleria>
        </div>
        <div class="card" v-else>
            <img :src="$frontmatter.project.images[0].itemImageSrc" :alt="$frontmatter.project.images[0].alt"
                style="width: 100%; display: block" loading="eager" fetchpriority="high" />
        </div>
      </div>
      <div class="col-12 ">
        <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
      </div>
      <div class="col-12 pt-4">
        <link itemprop="applicationCategory" :href="$frontmatter.project.schema" />
        <div
          class="flex md:flex-row flex-column justify-content-center align-items-center gap-2 my-4 w-full max-w-96">
          <a v-if="$frontmatter.project.contact" :href="`$frontmatter.project.contact $frontmatter.project.name`" target="_blank"
              class="flex flex-row no-underline w-full">
              <Button label="Get Custom Code" icon="pi pi-inbox" severity="secondary" raised rounded
                  class="w-full" />
          </a>
          <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank"
              class="flex flex-row no-underline w-full">
              <Button label="Live Demo" icon="pi pi-angle-double-right" severity="primary" raised
                  rounded class="w-full" />
          </a>
          <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank"
              class="flex flex-row no-underline w-full">
              <Button label="Get Started" icon="pi pi-github" severity="secondary" raised rounded
                  class="w-full" />
          </a>
        </div>
      </div>
    </div>
</div>
<div class="flex flex-column px-4">
  <h3 class="my-2 text-l">Features</h3>
  <ul class="my-2 md:ml-3 text-sm">
    <li v-for="feature in $frontmatter.project.features" :key="feature.text"
      class="flex flex-row align-content-center line-height-3">
      <i class="pi pi-verified m-2 bg-primary" alt="arrow" style="font-size: 1rem;"></i>
      <h4 class="m-2 text-sm" v-html="feature.text"></h4>
    </li>
  </ul>
</div>

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>
