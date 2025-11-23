---
title: Consulting
lastUpdated: false
editLink: false
copyright: false
layout: Layout
service:
  name: "Consulting"
  descriptions: ["Whether you're just starting your project or facing technical challenges, I'm here to provide <a href='https://cal.com/stackseekers' target='_blank'> expert guidance and support</a>."," I offer consulting services to help you make informed decisions and overcome any obstacles along the way."]
  icon: "googlemeet"
  code: "consulting-and-technical-advisory"
  previousService: {"name":"E-commerce","link":"/web-development-services/e-commerce-solutions/"}
  nextService: {"name":"Web App","link":"/web-development-services/custom-web-development/"}
---
<div class="shadow-1 col-12 p-0 overflow-hidden" itemscope itemtype="https://schema.org/SoftwareApplication">
    <div class="px-4 m-2">
        <div class="text-4xl font-bold mb-4">
          <h2 itemprop="name" class="text-4xl">
            <img v-if="$frontmatter.service.icon" :src="'https://cdn.simpleicons.org/' + $frontmatter.service.icon" :alt="$frontmatter.service.name" style="width: 28px;" loading="lazy" fetchpriority="high" class="mr-2"/>
          </h2>
        </div>
        <Image v-if="$frontmatter.service.code" :src="'/img/service/' + $frontmatter.service.code + '.webp'" class="" :alt="$frontmatter.service.name" width="100%"/>
        <div class="my-4 flex flex-column gap-2 line-height-3">
          <div itemprop="name" v-for= "(description, index) in $frontmatter.service.descriptions" >
            <div v-html="description"></div>
          </div>
        <a :href="'/contact/?subject=' + encodeURIComponent($frontmatter.service.name + ' Services')" size="large" class="flex justify-content-center text-center no-underline mt-4" aria-label="Book Now"> 
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
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.service.previousService.name }}</span>
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
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.service.nextService.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2"></i>
    </a>
  </div>
</div>
