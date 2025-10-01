---
title: E-commerce
lastUpdated: false
editLink: false
copyright: false
layout: Layout
service:
  name: "E-commerce"
  descriptions: ["I specialize in building robust <a href='/web-development-projects/finding-the-spots/'> e-commerce platforms </a> that empower businesses to sell their products and services online effortlessly.","My solutions are scalable, secure, and packed with advanced features to drive sales and boost customer satisfaction."]
  icon: "shopify"
  code: "e-commerce-solutions"
  previousService: {"name":"Figma to Web","link":"/web-development-services/figma-to-web/"}
  nextService: {"name":"Consulting","link":"/web-development-services/consulting-and-technical-advisory/"}
---
<div class="shadow-1 col-12 p-0 overflow-hidden" itemscope itemtype="https://schema.org/SoftwareApplication">
    <div class="px-4 m-2">
        <div class="text-4xl font-bold mb-4">
          <h2 itemprop="name" class="text-4xl">
            <img v-if="$frontmatter.service.icon" :src="`https://cdn.simpleicons.org/${$frontmatter.service.icon}`" :alt="$frontmatter.service.name" style="width: 28px;" loading="lazy" fetchpriority="high" class="mr-2"/>
          </h2>
        </div>
        <Image v-if="$frontmatter.service.code" :src="`/img/service/${$frontmatter.service.code}.webp`" class="" :alt="$frontmatter.service.name" width="100%"/>
        <div class="my-4 flex flex-column gap-2 line-height-3">
          <div itemprop="name" v-for= "(description, index) in $frontmatter.service.descriptions" >
            <div v-html="description"></div>
          </div>
          <a :href="`mailto:jiwan.cse@gmail.com?subject=Inquiry : $frontmatter.service.name Services`" size="large" class="flex justify-content-center text-center no-underline mt-4" aria-label="Send an Email"> 
            <Button label="Book Now!" icon="pi pi-briefcase" severity="primary" raised rounded />
          </a>
        </div>
    </div>
</div>

<div class="flex justify-content-between align-items-center mt-6 pt-4 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.service.previousService" :href="$frontmatter.service.previousService.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-chevron-left mr-2"></i>
      <div class="flex flex-column">
        <span class="text-sm text-color-secondary">Previous Service</span>
        <span class="font-semibold">{{ $frontmatter.service.previousService.name }}</span>
      </div>
    </a>
  </div>
  <div class="flex-1 text-center">
    <a href="/web-development-services/" class="no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-th-large mr-2"></i>
      All Services
    </a>
  </div>
  <div class="flex-1 text-right">
    <a v-if="$frontmatter.service.nextService" :href="$frontmatter.service.nextService.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary">
      <div class="flex flex-column text-right">
        <span class="text-sm text-color-secondary">Next Service</span>
        <span class="font-semibold">{{ $frontmatter.service.nextService.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2"></i>
    </a>
  </div>
</div>
