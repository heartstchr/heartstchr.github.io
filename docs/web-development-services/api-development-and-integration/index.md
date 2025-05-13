---
title: API
lastUpdated: false
editLink: false
copyright: false
layout: Layout
service:
  name: "API"
  descriptions: ["Need to integrate third-party services or <a href='https://momentum-chi-brown.vercel.app/api-docs/' target='_blank'>develop custom APIs </a> for your application? ","I specialize in creating RESTful APIs, enabling seamless communication between systems and enhancing your software's functionality."]
  icon: "swagger"
  code: "API-development-and-integration"
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
