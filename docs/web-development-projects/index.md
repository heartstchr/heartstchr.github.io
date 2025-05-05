---
title: Web Development Portfolio
description: Explore real-world web development projects crafted by Stack Seekers. From scalable SaaS apps to stunning websites, see how we build digital experiences that drive results. Freelance projects in custom web and app development, including booking platforms, dashboards, and analytics tools. Built with React, Node.js, and modern tech stacks.
order: 2
lastUpdated: false
editLink: false
copyright: false
---

<div class="flex flex-column gap-4 my-6 line-height-4">
  <div>
    Explore a curated selection of my freelance and organizational web development projects. These works highlight my expertise in building modern, scalable, and user-focused digital solutions.
  </div>
  <div>
    Each project is thoughtfully crafted to transform client ideas into functional, high-impact experiences tailored to specific business goals.
  </div>
  <div>
    <a
      href="https://cal.com/stackseekers"
      size="large"
      color="deeppink"
      class="flex justify-content-center text-center no-underline mt-4"
    >
      <Button
        label="Build Your Vision with Us!"
        icon="pi pi-calendar-clock"
        severity="primary"
        raised
        rounded
      />
    </a>
  </div>
</div>

<!-- Vertical Tabs Navigation -->
<div class="p-d-flex p-flex-column p-mr-3">
      <div class="grid my-6 gap-8">
        <div
          class="vp-feature-item col-12 shadow-1 m-0 p-0"
          v-for="(project, index) in freelance"
          :id="project.name"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 200">
            <path
              fill="#10b981"
              fill-opacity="0.1"
              d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,202.7C560,213,640,203,720,192C800,181,880,171,960,181.3C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
          <div>
            <div class="px-4">
              <h2 itemprop="name" class="text-4xl font-bold p-0 m-0" :id="project.name">
                {{project.name}}
              </h2>
              <div class="text-xs mt-2" itemprop="operatingSystem">
                {{project.software}}
                <span class="mt-2"> - {{project.domain}} </span>
                <a class="mt-2 font-italic no-underline"> ({{project.year}})</a>
              </div>
            </div>
            <div
              class="flex md:flex-row flex-column"
              itemscope
              itemtype="https://schema.org/SoftwareApplication"
            >
              <div class="md:col-6 col-12  px-4">
                <div class="my-2 text-l line-height-3">{{project.description}}</div>
                <h3 class="hidden">Stack used</h3>
                <div class="flex grid mt-4 px-2">
                  <Tag
                    style="
                      border: 2px solid var(--border-color);
                      background: transparent;
                      color: var(--text-color);
                    "
                    v-for="part in project.stack"
                    :key="part"
                    :value="part"
                    class="m-1"
                  >
                    <div class="flex items-center gap-2 px-1">
                        <img v-if="part" :src="`https://cdn.simpleicons.org/${part}`" :alt="part" :title="part"  style="width: 28px;" loading="lazy" fetchpriority="high"/>
                        <h4 class="text-base p-0 m-0 hidden">{{part}}</h4>
                    </div>
                  </Tag>
                  <Tag
                    style="
                      border: 2px solid var(--border-color);
                      background: transparent;
                      color: var(--text-color);
                    "
                    v-for="part in project.otherSkills"
                    :key="part"
                    :value="part"
                    class="m-1"
                  >
                    <div class="flex items-center gap-2 px-1">
                        <h4 class="text-base p-0 m-0">{{part}}</h4>
                    </div>
                  </Tag>
                </div>
                <div
                  class="flex flex-row justify-content-between align-items-center gap-2"
                >
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    class="w-full flex flex-row no-underline my-4"
                  >
                    <Button
                      label="Demo"
                      icon="pi pi-angle-double-right"
                      severity="primary"
                      raised
                      rounded
                    />
                  </a>
                  <a
                    v-if="project.codeLink"
                    :href="project.codeLink"
                    target="_blank"
                    class="w-full flex flex-row no-underline my-4"
                  >
                    <Button
                      label="Repo"
                      icon="pi pi-github"
                      severity="secondary"
                      raised
                      rounded
                    />
                  </a>
                </div>
              </div>
              <div class="md:col-6 col-12 px-4 pt-4">
                <link itemprop="applicationCategory" :href="project.schema" />
                <div v-if="project.images">
                  <div class="card" v-if="project.images.length != 1">
                    <Galleria
                      :value="project.images"
                      :responsiveOptions="responsiveOptions"
                      :numVisible="5"
                      :circular="true"
                      :showItemNavigators="true"
                      :showThumbnails="false"
                      :pt="{
                        prevButton: { 'aria-label': 'Previous screen of project' },
                        nextButton: { 'aria-label': 'Next screen of project' }
                      }"
                    >
                      <template #item="slotProps">
                        <img
                          :src="slotProps.item.itemImageSrc"
                          :alt="slotProps.item.alt"
                          style="width: 100%; display: block"
                          loading="eager" fetchpriority="high"
                        />
                      </template>
                    </Galleria>
                  </div>
                  <div class="card" v-else>
                    <img
                      :src="project.images[0].itemImageSrc"
                      :alt="project.images[0].alt"
                      style="width: 100%; display: block"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-column px-4">
            <div class="flex flex-column p-2" v-if="project.features">         
              <Accordion
              >
                  <AccordionTab header="Features">
                      <h3 class="my-2 text-l hidden">Features</h3>
                      <ul class="my-2 ml-3 text-sm">
                        <li v-for="feature in project.features" class="flex flex-row align-content-center line-height-3">
                          <i class="pi pi-verified m-2 bg-primary" alt="arrow" style="font-size: 1rem;"></i>
                          <h4 class="m-2 text-sm" v-html="feature.text"></h4>
                        </li>
                      </ul>
                  </AccordionTab>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
</div>

<script setup lang="ts">
  import { ref } from "vue";
  import { freelance } from "@data/projects.js";
  const images = ref();
  const responsiveOptions = ref([
    {
      breakpoint: "1300px",
      numVisible: 4,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ]);
  
</script>
