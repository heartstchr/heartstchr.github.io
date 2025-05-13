---
home: true
title: Web Developer
description: Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).
heroImage: /img/home/jiwanghosal.webp
heroText: Hi, Stack Seekers
tagline: Full-stack consultant specializing in scalable web, mobile, and software solutions using MERN and MEVN stacks. Let’s bring your ideas to life, connect with me today!
containerClass: fancy-container
actions:
  - text: Book free consultation
    link: https://cal.com/stackseekers
    type: primary

editLink: false
copyright: false
---

<div class="mb-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold"><h2>Scalable Solutions for <div class="text-4xl font-bold bg-primary">Startups, Enterprises & Agencies</div></h2></div>
    <div class="text-xl md:text-center line-height-3"> I am Jiwan Ghosal. A full-stack developer with extensive experience in the JavaScript, VueJS, ReactJS and NodeJS ecosystems, as well as expertise in the Azure cloud platform.</div>
  </div>  
  <div class="grid justify-content-center my-4">
    <div class="flex gap-2 p-2" v-for="stackLogo in stackLogos" :key="stackLogo.title">
      <img width="38px" height="38px" :src="`https://cdn.simpleicons.org/${stackLogo.link}`" :alt="stackLogo.title" loading="eager" fetchpriority="high"/>
      <h3 class="sr-only">{{stackLogo.title}}</h3>
    </div>
  </div>
  <div class="gallery gap-4">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="gallery-item mb-4"
    >
      <a :href="project.link" class="text-l gap-2 font-medium text-center no-underline" :aria-label="project.name">
        <img :src="project.images[0].itemImageSrc" :alt="project.images[0].alt" loading="eager" fetchpriority="high" />
        <h3 class="p-0 m-2">{{ project.name }}</h3>
      </a>
    </div>
  </div>
  <div class="text-center pb-4 grid justify-content-center gap-4">
    <a href="/about/#stack" size="large" class="flex justify-content-center text-center no-underline mt-4"> 
      <div class="p-flex p-ai-center">
        <div
          class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"
        >
          <span class="mr-6">See all stacks</span>
          <!-- Add circular element -->
          <div class="absolute right-0 mr-5">
            <div class="circle pb-2 my-2 mx-2"></div>
            <div class="circle pt-2 my-2 mx-2"></div>
          </div>
          <i class="pi pi-angle-double-right" alt="arrow" style="font-size: 1rem;"></i>
        </div>
      </div>
    </a>
    <a href="/web-development-projects/" size="large" class="flex justify-content-center text-center no-underline mt-4"> 
      <div class="p-flex p-ai-center">
        <div
          class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"
        >
          <span class="mr-6">See all projects</span>
          <!-- Add circular element -->
          <div class="absolute right-0 mr-5">
            <div class="circle pb-2 my-2 mx-2"></div>
            <div class="circle pt-2 my-2 mx-2"></div>
          </div>
          <i class="pi pi-angle-double-right" style="font-size: 1rem;"></i>
        </div>
      </div>
    </a>
  </div>
</div>

<!-- Testimonials -->
<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold"><h2>Trusted by <div class="text-4xl font-bold bg-primary">World Wide</div></h2></div>
    <div class="my-4 text-xl line-height-2">I value every client as a strategic partner. Here’s what they’ve shared about their experience working with me.</div>
  </div>
  <div class="card relative md:mx-0 -mx-4" @mouseenter="pauseAutoPlay"
    @mouseleave="resumeAutoPlay">
    <Carousel :value="testimonials" :numVisible="1" :numScroll="1"  ref="carousel" :responsiveOptions="responsiveCustomerOptions" circular :page="currentPage"
      @page="onPageChange">
        <template #item="slotProps">
          <div class="card shadow-1 border-round-md p-4 md:mx-8 vp-feature-item">
            <div class="font-italic mb-8">
              <div class="text-md line-height-3" ><span class="font-bold text-4xl">"</span> {{ slotProps.data.message }}</div>
            </div>
            <div class="flex align-items-center">
              <img :src="slotProps.data.avatar" :alt="slotProps.data.name" loading="eager" fetchpriority="high" class="border-circle" width="50px" height="50px" />
              <a :href="slotProps.data.link" target="_blank" class="no-underline">
                <h3 class="flex flex-column align-items-start ml-2 p-0 m-0">
                  <div>
                    <i class="pi pi-linkedin mr-1 text-blue-700" style="font-size: 1rem;"></i>
                    {{ slotProps.data.name }}, 
                  </div>
                  <div class="text-sm">
                    <img :alt="slotProps.data.location" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" loading="eager" fetchpriority="high" :class="`flag flag-${slotProps.data.code.toLowerCase()} mr-1`" style="width: 18px" />
                    {{ slotProps.data.location }}
                  </div>
                </h3>
              </a>
            </div>
          </div>
        </template>
    </Carousel>
  </div>
  <div class="text-center pb-4">
    <a href="https://www.linkedin.com/in/jiwanghosal/details/recommendations/" size="large" class="flex justify-content-center text-center no-underline mt-4"> 
      <div class="p-flex p-ai-center">
        <div
          class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"
        >
          <span class="mr-6">
            <i class="pi pi-linkedin" aria-label="LinkedIn Testimonials" style="font-size: 1rem; color:#0a66c2;"></i>
            LinkedIn Testimonials
          </span>
          <!-- Add circular element -->
          <div class="absolute right-0 mr-5">
            <div class="circle pb-2 my-2 mx-2"></div>
            <div class="circle pt-2 my-2 mx-2"></div>
          </div>
          <i class="pi pi-angle-double-right" style="font-size: 1rem;"></i>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="my-6 flex flex-column">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold"><h2>Why choose<span class="bg-primary">me?</span></h2></div>
    <div class="my-4 text-xl line-height-2">Here’s why I’m the right choice for your project</div>
  </div>
  <div class="flex flex-wrap">
    <div class="md:col-6 col-12 md:p-4" v-for="why in whyme" :key="why.title">  
      <Fieldset class="vp-feature-item">
        <template #legend>
            <h3 class="flex align-items-center pl-2 m-0 p-0">
                <img
                  :src="`/img/home/${why.id}.svg`"
                  class="p-avatar p-avatar-circle"
                  loading="lazy"
                  :alt="`${why.title} icon`"
                  width="24px"
                  height=24px
                />
                <span class="font-bold p-2 line-height-2">{{why.title}}</span>
            </h3>
        </template>
        <p class="m-0 pt-4">
          {{why.description}}
        </p>
      </Fieldset>
    </div>
  </div>
</div>
<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold"><h2>Scaling startups <div class="text-4xl font-bold bg-primary">Elevating industry giants</div></h2></div>
    <div class="my-4 text-xl line-height-2">I bring a proven track record of success in the industry, with a comprehensive skill set spanning every phase of software development.</div>
  </div>
  <div class="my-4 grid md:flex-row justify-content-center gap-2">
    <div class="md:col-2 col-5 border-round-md md:p-2 md:m-2 vp-feature-item flex align-items-center justify-content-center" v-for="org in orgs" :key="org.title">
      <div class="no-underline flex flex-column justify-content-center flex-wrap">
        <div class="mb-2 flex align-items-center justify-content-center h-4rem">
          <img :src="org.icon" :alt="org.title" width="40px" height="40px" class="border-round-md" loading="eager" fetchpriority="high"/>
        </div>
        <div class="h-5rem">
          <h3 class="text-base md:text-xl font-bold flex align-items-center justify-content-center p-0 m-0 text-center line-height-3">{{org.title}}</h3>
          <div class="text-xs md:text-sm flex align-items-center justify-content-center line-height-2 text-center">{{org.details}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- FAQ -->
<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold line-height-2"><h2>Frequently asked <span class="bg-primary">questions</span></h2></div>
  </div>
  <div class="grid overflow-hidden border-round-md">
    <div class="col-12 ">
      <div class="border-round-md flex flex-column gap-2 md:p-2">
        <div class="p-4 border-round-md border-1 border-primary">
          <h3 class="m-0 p-0 font-bold">How can I start a project with you?</h3>
          <p class="mx-3">
              You can start by <a href="https://cal.com/stackseekers" class="no-underline text-xl" aria-label="schedule a meeting">scheduling a meeting</a> with me. I’ll connect with you promptly to discuss your requirements and plan the next steps.
          </p>
        </div>
        <div class="p-4 border-round-md border-1 border-primary">
          <h3 class="mt-0 p-0 font-bold">What services do you provide?</h3>
          <div class="mx-3">
            I offer a variety of services tailored to your needs, including 
            <a href="web-development-services/consulting-and-technical-advisory/" class="no-underline text-xl" aria-label="Custom Web Development">Custom Web Development</a>, 
            <a href="web-development-services/e-commerce-solutions/" class="no-underline text-xl" aria-label="E-commerce Solutions">E-commerce Solutions</a>, 
            <a href="web-development-services/API-development-and-integration/" class="no-underline text-xl" aria-label="API Development and Integration">API Development and Integration </a>, 
            <a href="web-development-services/figma-to-web/" class="no-underline text-xl" aria-label="Figma to Web Conversion">Figma to Web Conversion</a>, and 
            <a href="web-development-services/hosting/" class="no-underline text-xl" aria-label="Hosting & Deployment">Hosting & Deployment</a>. 
            <p class="mt-2">Let’s find the best solution for your project!</p>
          </div>
        </div>
        <div class="p-4 border-round-md border-1 border-primary">
          <h3 class="mt-0 p-0 font-bold">What does the project process look like?</h3>
          <div class="mx-3">
            <div class="my-4">It’s simple and straightforward: </div>
            <Timeline :value="events" align="left"
                :pt="{
                  eventOpposite: { style: { padding: 0, flex: 0 } },
                  marker: { style: { backgroundColor: '#FFA500' } },
                  connector: { style: { backgroundColor: '#FFA500' } },
                  content: { style: { padding: '4px, 2px' } }
                }">
              <template #opposite="slotProps">
                <small class="p-text-secondary"></small>
              </template>
              <template #content="slotProps">
                {{ slotProps.item.status }}
              </template>
            </Timeline>
          </div>
        </div>
        <div class="my-4">
          <a href="https://cal.com/stackseekers" size="large" class="flex justify-content-center text-center no-underline mt-4" aria-label="scheduling a meeting"> 
            <Button label="Discuss your project" icon="pi pi-calendar-clock" severity="primary" raised rounded/>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Contact Me -->
<div class="border-round-md vp-feature-item" id="contact">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 260"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <div>
    <div class="text-center pb-4">
      <h3>
        <div class="text-4xl font-bold">Need a full-stack web developer?</div>
      </h3>
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <div class="mx-4 text-center text-xl line-height-3">
      I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to collaborate!
    </div>
    <div class="my-4">
      <a href="mailto:jiwan.cse@gmail.com?subject=Inquiry:%20collaborate%20now" size="large" class="flex justify-content-center text-center no-underline" aria-label="Send an Email"> 
        <Button label="Let's collaborate now!" icon="pi pi-briefcase" severity="primary" raised rounded />
      </a>
    </div>
    <div class="flex flex-row justify-content-end flex-wrap gap-4 mx-6 ">
      <a
        v-for="(socialElement, socialIndex) in social"
        :key="socialIndex"
        :href="socialElement.url"
        target="_blank"
        class="flex flex-row gap-2"
        :aria-label="socialElement.name"
        >
        <i :class="socialElement.icon" :aria-label="socialElement.label" style="font-size: 1rem"></i>
      </a>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 220" class="-mb-1"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
</div>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, computed } from "vue";
  import { projects } from "@data/projects.js";
  import { social } from "@data/social.js";
  import { stackLogos, events, orgs, testimonials , whyme} from "@data/home.js";
  // Current page and autoplay interval
  const currentPage = ref(0);
  const autoplayInterval = 5000;
  let autoplayTimer = null;
  const visible = ref(false);
  const onVisible = () => {
    visible.value = true;
  };


  const responsiveCustomerOptions = ref([
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ]);

  const getImage = () =>
    `background-image: url('/img/home/faq.webp');  background-repeat: no-repeat; background-size: cover;`;

  // Function to start autoplay
  const startAutoPlay = () => {
    autoplayTimer = setInterval(() => {
      currentPage.value = (currentPage.value + 1) % testimonials.length;
    }, autoplayInterval);
  };

  // Function to pause autoplay
  const pauseAutoPlay = () => {
    clearInterval(autoplayTimer);
  };

  // Function to resume autoplay
  const resumeAutoPlay = () => {
    startAutoPlay(autoplayTimer);
  };

  // Handle page change when user interacts with the carousel
  const onPageChange = (newPage) => {
    currentPage.value = newPage;
  };

  // Start autoplay when the component mounts
  onMounted(() => {
    startAutoPlay();
  });

  // Clear the autoplay timer when the component unmounts
  onBeforeUnmount(() => {
    pauseAutoPlay();
  });
</script>
