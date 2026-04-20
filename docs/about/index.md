---
title: About | Stack Seekers | Independent Engineering Consultancy
description: Stack Seekers is an independent engineering consultancy founded by Jiwan Ghosal. I engineer high-performance platforms for enterprises and startups globally.
order: 4
editLink: false
copyright: false
---

<div class="my-6 ">
  <h2 class="text-4xl font-bold"> 10+ Years of Scaling Global Digital Products.</h2>
  <div class="flex md:flex-row flex-column flex-column-reverse md:align-items-start line-height-3">
    <div class="md:col-6 col-12">
      <h3 class="my-4 text-xl font-bold"> I provide strategic technical leadership for global partners.</h3>
      <div class="my-4 text-md">
      I am **Jiwan Ghosal**, a Senior Technical Architect with over a decade of experience engineering systems for massive global entities like **ABN AMRO (Netherlands)**, **Qatar Airways (Global)**, and **Upstox (India)**. Instead of the overhead of a large agency, I offer direct, high-trust engineering partnerships for clients who need banking-grade reliability and rapid growth.</div>
      <div class="my-4 text-md">
      My expertise lies in the "High-Stakes" layer of engineering: migrating legacy architectures, reducing lead latencies by 98%, and building the foundation for startups to scale from zero to millions of users without technical debt.</div>
      <div class="my-4 text-md">
      If you are a recruiter looking for my traditional employment history, <a href="/jiwan-ghosal/" class="no-underline text-primary font-bold">view my personal profile here >></a>.</div>
    </div>
    <div class="md:col-6 col-12 h-30rem overflow-hidden image-box">
      <Image :src="`/img/about/about_jiwanghosal.webp`" width="100%" />
    </div>
  </div>
</div>


<!-- Skills -->
<div class="my-6" id="stack">
  <div class="text-center pb-4">
    <h2 class="text-4xl font-bold">Stack</h2>
    <div class="my-4 text-xl line-height-3">Technologies and development tools I regularly use for building modern, high-performance web applications.</div>
  </div>
  <div class="flex flex-wrap gap-4">
    <div v-for="(category, key) in technologies" :key="key" class='grid md:col-6' 
    :class="[{ 'md:col-12' : key === 'otherTools' }]" :id="slugify(category.title)">
      <div class="shadow-1 border-round-md vp-feature-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <div class="px-2 gap-2">
          <h3 class="text-2xl font-bold p-0 m-0">{{ category.title }}</h3>
          <div v-for="(subheading, subKey) in category.subheadings" :key="subKey" class="p-2">
            <div class="text-xl m-2">{{ subheading.title }}</div>
            <div class="p-1">
              <Tag style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color)" v-for="tech in subheading.technologies" :key="tech.name"
                :value="tech.name" class="m-1">
                <div class="flex items-center gap-2 px-1">
                    <img v-if="tech.logoUrl" :src="`https://cdn.simpleicons.org/${tech.logoUrl}`" style="width: 20px;" loading="eager" fetchpriority="high"/>
                    <i v-else class="pi pi-cog" style="font-size: 1rem"></i>
                    <h4 class="text-base p-0 m-0">{{tech.name}}</h4>
                </div>
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Certificate -->
<div class="my-6" id="stack">

  <div class="text-center pb-4">
    <h2 class="text-4xl font-bold">Certificate of Achievement</h2>
  </div>
  <div class="flex flex-column md:flex-row gap-4 p-4 align-items-center justify-content-center">
    <template v-for="(cert, certIdx) in certificate" :key="certIdx">
      <img
        v-for="(img, idx) in cert.images"
        :key="img.itemImageSrc"
        :src="img.itemImageSrc"
        :alt="img.alt"
        width="50%"
        loading="eager"
        fetchpriority="high"
      />
    </template>
  </div>
</div>

<div class="my-6">
  
</div>

<!-- Contact Me -->
<div class="border-round-md" id="contact" style="width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw); max-width: 100vw;">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <div>
    <div class="text-center px-4">
      <h2 class="text-4xl font-bold p-0 m-0">Our Philosophy</h2>
      <div class="my-4 text-md line-height-3">Stack Seekers was founded on the principle that high-end engineering shouldn't be locked behind massive agency overhead. I provide enterprise-grade architecture with the speed and transparency of a dedicated partner. Every line of code is written with your business growth and technical debt reduction in mind.</div>
    </div>
    <div class="text-center py-4">
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <h3 class="mx-4 text-center text-xl line-height-3 p-0 m-0">
      Ready to turn your vision into reality? Let’s discuss how I can help you achieve your goals.
    </h3>
    <div class="my-4">
      <a href="/contact/?subject=Make%20it%20for%20me" size="large" class="flex justify-content-center text-center no-underline" aria-label="Make it happen"> 
        <Button label="Make It Happen!" icon="pi pi-briefcase" severity="primary" raised rounded />
      </a>
    </div>
    <div class="flex flex-row justify-content-end flex-wrap gap-4 mx-6">
      <a
        v-for="(socialElement, socialIndex) in social"
        :key="socialIndex"
        :href="socialElement.url"
        target="_blank"
        class="flex flex-row gap-2"
        >
        <i :class="socialElement.icon" style="font-size: 1rem"></i>
        </a>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="-mb-2"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
</div>

<script setup lang="ts">
  import { ref } from "vue";
  import {technologies} from "@data/technologies.js";
  import {certificate} from "@data/home.js";
  import {responsiveOptions} from "@data/responsive.js";
  
  const getIcon = (logoUrl) => {
    return logoUrl ? 'pi pi-cog' : null;
  };
  
  const slugify = (text) => {
    return text.replace(/\s+/g, '-');
  };
  
  const social= [
    { label: 'Linkedin', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/jiwanghosal/' },
    { label: 'Youtube', icon: 'pi pi-youtube', url: 'https://www.youtube.com/@stackseekers' },
    { label: 'Stack Overflow', icon: 'pi pi-chart-bar', url: 'https://stackoverflow.com/users/10376224/stchr?tab=profile' },
  ]
</script>
