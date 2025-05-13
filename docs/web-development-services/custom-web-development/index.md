---
title: Web App
lastUpdated: false
editLink: false
copyright: false
layout: Layout
service:
  name: "Web App"
  descriptions: ["I design responsive and visually stunning custom web application optimized for performance and user experience.","Whether you need a simple landing page or a <a href='/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/'>complex web application</a>, I have the expertise to bring your vision to life."]
  icon: "googlechrome"
  code: "custom-web-development"
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
