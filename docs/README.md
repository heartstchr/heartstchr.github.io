---
home: true
title: Web Developer
description: Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).
editLink: false
copyright: false
---

<section class="hero-newage relative overflow-hidden p-4 md:p-6 surface-0">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
  <div class="grid align-items-center">
    <div class="col-12 md:col-8">
      <div class="mb-3 flex align-items-center gap-2">
        <span class="inline-flex align-items-center px-2 py-1 border-round-xl bg-primary text-0 text-xs">
          <i class="pi pi-sparkles mr-1"></i> New‑age development partner
        </span>
        <span class="text-xs text-500">MEVN/MERN • AWS/Azure • AI</span>
      </div>
      <h1 class="m-0 p-0 line-height-2 text-5xl md:text-7xl font-bold">
        Build <span class="text-gradient">world‑class</span> products, faster
      </h1>
      <div class="text-xl md:text-2xl mt-3 line-height-3 min-h-10rem">
        From <Transition name="fade" mode="out-in"><span :key="currentPhrase" class="text-gradient-2">{{ currentPhrase }}</span></Transition> to scale.
        <span class="flex mt-8">I partner with founders to plan, build, and launch reliable software with clarity and speed.</span>
      </div>
      <div class="flex gap-3 mt-5 flex-wrap">
        <a href="https://cal.com/stackseekers" target="_blank" class="no-underline mt-4">
          <Button label="Book a 25‑min strategy call" icon="pi pi-calendar-clock" severity="primary" rounded raised />
        </a>
        <CustomButton href="/web-development-projects/" label="See Work">
          <template #icon>
            <Circles />
          </template>
        </CustomButton>
      </div>
      <div class="mt-5 grid gap-3 ml-1">
        <div class="flex align-items-center gap-3">
          <i class="pi pi-check-circle text-green-500"></i>
          <span class="text-sm md:text-base">Enterprise patterns, startup speed</span>
        </div>
        <div class="flex align-items-center gap-3">
          <i class="pi pi-check-circle text-green-500"></i>
          <span class="text-sm md:text-base">Transparent roadmap and weekly demos</span>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-4 mt-6 md:mt-0">
      <div class="relative hero-visual border-round-2xl overflow-hidden">
        <img src="/img/home/jiwanghosal.webp" alt="Jiwan Ghosal" class="w-1/2 border-round-2xl shadow-4 hero-image" loading="eager" fetchpriority="high" />
        <div class="glow-ring"></div>
      </div>
    </div>
  </div>
</section>

<div class="mt-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold"><h2>Scalable Solutions for <div class="text-4xl font-bold bg-primary">Startups, Enterprises & Agencies</div></h2></div>
    <div class="text-xl md:text-center line-height-3"> I’m Jiwan Ghosal, a senior JavaScript engineer specializing in React/Vue and Node on Azure. I help founders and teams ship fast, clean, and scalable software.</div>
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
  <div class="grid justify-content-center my-4">
    <div class="flex gap-2 p-2" v-for="stackLogo in stackLogos" :key="stackLogo.title">
      <img width="38px" height="38px" :src="`https://cdn.simpleicons.org/${stackLogo.link}`" :alt="stackLogo.title" loading="eager" fetchpriority="high"/>
      <h3 class="sr-only">{{stackLogo.title}}</h3>
    </div>
    ...
  </div>
  <div class="text-center pb-4 grid justify-content-center gap-4">
    <CustomButton href="/about/#stack" label="Explore Tech Stack">
      <template #icon>
        <Circles />
      </template>
    </CustomButton>
  </div>
</div>

<!-- Testimonials -->
<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold"><h2>Trusted by <div class="text-4xl font-bold bg-primary">World Wide</div></h2></div>
    <h3 class="my-4 text-xl line-height-2">Client Testimonials: See how partners describe their experience collaborating with me on innovative digital solutions.</h3>
  </div>
  <div class="card relative md:mx-0 -mx-4 md:hidden block" @mouseenter="pauseAutoPlay"
    @mouseleave="resumeAutoPlay">
    <Carousel :value="testimonials" :numVisible="1" :numScroll="1"  ref="carousel" :responsiveOptions="responsiveCustomerOptions" circular :page="currentPage"
      @page="onPageChange">
        <template #item="slotProps">
          <div class="card shadow-1 border-round-md p-4 md:mx-8 vp-feature-item">
            <div class="flex align-items-center">
              <!-- <img :src="slotProps.data.avatar" :alt="slotProps.data.name" loading="eager" fetchpriority="high" class="border-circle" width="50px" height="50px" /> -->
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
            <div class="font-italic mb-8">
              <div class="text-md line-height-3" ><span class="font-bold text-4xl">"</span> {{ slotProps.data.message }}</div>
            </div>
          </div>
        </template>
    </Carousel>
  </div>
  <div class="grid justify-content-center my-4 md:flex hidden">
    <div class="card md:mx-0 -mx-4 col-12 md:col-3" v-for="testimony in testimonials" :key="testimony.name">
      <div class="card shadow-1 border-round-md m-2 p-2 vp-feature-item">
        <div class="flex align-items-center">
          <!-- <img :src="testimony.avatar" :alt="testimony.name" loading="eager" fetchpriority="high" class="border-circle" width="50px" height="50px" /> -->
          <a :href="testimony.link" target="_blank" class="no-underline">
            <h3 class="flex flex-column align-items-start ml-2 p-0 m-0">
              <div>
                <i class="pi pi-linkedin mr-1 text-blue-700" style="font-size: 1rem;"></i>
                {{ testimony.name }}, 
              </div>
              <div class="text-sm">
                <img :alt="testimony.location" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" loading="eager" fetchpriority="high" :class="`flag flag-${testimony.code.toLowerCase()} mr-1`" style="width: 18px" />
                {{ testimony.location }}
              </div>
            </h3>
          </a>
        </div>
        <div class="font-italic mb-8">
          <div class="text-md line-height-3" ><span class="font-bold text-4xl">"</span> {{ testimony.message }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center pb-4">
    <a href="https://www.linkedin.com/in/jiwanghosal/details/recommendations/" size="large" class="flex justify-content-center text-center no-underline mt-4"> 
      <div class="p-flex p-ai-center">
        <div
          class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"
        >
          <span class="mr-6">
            <i class="pi pi-linkedin mr-1" aria-label="View LinkedIn Reviews" style="font-size: 1rem; color:#0a66c2;"></i>
             View Recommendations
          </span>
          <Circles/>
          <i class="pi pi-angle-double-right" style="font-size: 1rem;"></i>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="my-6 flex flex-column">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold"><h2>Why choose <span class="bg-primary">me?</span></h2></div>
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
    <div class="md:col-3 col-5 border-round-md md:p-2 md:m-2 vp-feature-item flex align-items-center justify-content-center" v-for="org in orgs" :key="org.title">
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
  <div class="my-8">
      <a href="https://cal.com/stackseekers" size="large"
          class="flex justify-content-center text-center no-underline -mt-4" aria-label="Send an Email">
      <Button label="Book a 25‑min free strategy call" icon="pi pi-briefcase" severity="primary" raised rounded />
      </a>
      <div class="text-center text-xs mt-1">No commitment. Get a roadmap and estimate.</div>
  </div>
</div>
<!-- FAQ -->
<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold line-height-2"><h2>Frequently asked <span class="bg-primary">questions</span></h2></div>
  </div>
  <div class="grid overflow-hidden border-round-md">
    <div class="col-12 ">
      <div class="border-round-md flex flex-column gap-4 md:p-2">
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
            <div class="my-8">
                <a href="https://cal.com/stackseekers" size="large"
                    class="flex justify-content-center text-center no-underline -mt-4" aria-label="Send an Email">
                <Button label="Book a 25‑min free strategy call" icon="pi pi-briefcase" severity="primary" raised rounded />
                </a>
                <div class="text-center text-xs mt-1">No commitment. Get a roadmap and estimate.</div>
            </div>
          </div>
        </div>       
        <!-- Guarantees and Safety Nets -->
        <div class="p-4 border-round-md border-1 border-primary">
          <h3 class="mt-0 p-0 font-bold">Guarantees & Safety Nets</h3>
          <div class="mx-3">
            <div class="my-4">
              <div class="flex align-items-center mb-3">
                <i class="pi pi-shield text-primary mr-3" style="font-size: 1.5rem;"></i>
                <span class="text-lg">"If I'm not a fit after the first week, you pay nothing."</span>
              </div>
              <div class="flex align-items-center">
                <i class="pi pi-unlock text-primary mr-3" style="font-size: 1.5rem;"></i>
                <span class="text-lg">"No lock‑in: cancel monthly engagement anytime."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Contact Me -->
<Contact/>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, computed } from "vue";
  import { projects } from "@data/projects.js";
  import { stackLogos, events, orgs, testimonials , whyme} from "@data/home.js";
  // Current page and autoplay interval
  import {certificate} from "@data/home.js";
  const currentPage = ref(0);
  const autoplayInterval = 10000;
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

  // Hero rotating phrase
  const phrases = ['idea to launch', 'MVPs', 'enterprise‑grade apps', 'AI‑powered products'];
  const currentPhraseIndex = ref(0);
  const currentPhrase = computed(() => phrases[currentPhraseIndex.value]);
  let phraseTimer: ReturnType<typeof setInterval> | null = null;

  onMounted(() => {
    phraseTimer = setInterval(() => {
      currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length;
    }, 3000);
  });

  onBeforeUnmount(() => {
    if (phraseTimer) clearInterval(phraseTimer);
  });

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

<style>
/* New‑age Hero styles */
.hero-newage {
  position: relative;
  /* Full-bleed width inside constrained content container */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.text-gradient {
  background: linear-gradient(90deg, #14b8a6, #22d3ee, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.text-gradient-2 {
  background: linear-gradient(90deg, #f97316, #f43f5e, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.hero-visual {
  background: radial-gradient(600px 400px at 70% 20%, rgba(34, 211, 238, 0.15), transparent),
              radial-gradient(500px 300px at 30% 80%, rgba(168, 85, 247, 0.18), transparent);
}

.hero-image {
  transform: translateZ(0);
  transition: transform 800ms ease, filter 800ms ease;
}

.hero-image:hover {
  transform: scale(1.02);
  filter: saturate(1.05);
}

.glow-ring {
  position: absolute;
  inset: -20% -10% -20% -10%;
  border-radius: 32px;
  background: conic-gradient(from 0deg, rgba(34, 211, 238, 0.15), rgba(168, 85, 247, 0.15), rgba(34, 211, 238, 0.15));
  filter: blur(40px);
  mix-blend-mode: color-dodge;
  animation: spin 18s linear infinite;
  pointer-events: none;
}

.orb {
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.5;
  pointer-events: none;
  animation: floatY 12s ease-in-out infinite;
}
.orb-1 { top: -80px; left: -80px; background: radial-gradient(circle at 30% 30%, #22d3ee, transparent 60%); }
.orb-2 { bottom: -100px; right: -60px; background: radial-gradient(circle at 70% 70%, #a855f7, transparent 60%); animation-delay: 2.5s; }
.orb-3 { top: 40%; right: 10%; background: radial-gradient(circle at 50% 50%, #34d399, transparent 60%); animation-delay: 5s; width: 280px; height: 280px; }

@keyframes floatY {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Fade transition for rotating phrase */
.fade-enter-active, .fade-leave-active { transition: opacity 400ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Responsive tweaks */
@media (max-width: 767px) {
  .hero-newage { padding: 1rem; }
  .orb { filter: blur(40px); opacity: 0.45; }
}
</style>
