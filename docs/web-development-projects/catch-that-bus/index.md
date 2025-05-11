---
title: Catch That Bus
description: Book Malaysia and Singapore bus tickets online.
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "Catch That Bus"
  description: "Book Malaysia and Singapore bus tickets online."
  software: "Web / IOS APP"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Leisure, travel, and tourism"
  year: "2019"
  link: 
  codeLink: 
  contact: 
  stack: ["Javascript","VuedotJs","Axios/black/white","Express/black/white","MongoDB","Git","amazonec2","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/catchthatbus.webp","alt":"Book Malaysia and Singapore bus tickets online. | CatchThatBus"},{"itemImageSrc":"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png","alt":"IOS app for booking Malaysia and Singapore bus tickets online | CatchThatBus"}]
  features: [{"text":"Search for a bus by choosing from the destination and to the destination in Malaysia for dates."},{"text":"Sort and filter on available buses"},{"text":"Seat visualization of a bus"},{"text":"Booking system to handle concurrent requests"},{"text":"Discount system based on coupon code"},{"text":"Insurance integration for travellers"},{"text":"Payment system using wallets and cards"},{"text":"Webview for Boost wallet"},{"text":"Multiple language support"},{"text":"Multiple Currency support"},{"text":"Bus Booked history"},{"text":"Bus onboarding system for admin and bus operator"}]
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
