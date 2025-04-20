---
home: true
icon: pi pi-home
title: Web Developer
description: Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).
heroImage: /img/home/jiwanghosal.webp
heroText: Hi, I am Jiwan Ghosal
tagline: Full-stack consultant specializing in scalable web, mobile, and software solutions using MERN and MEVN stacks. Let’s bring your ideas to life, connect with me today!
containerClass: fancy-container
actions:
  - text: Book free consultation
    icon: pi pi-calendar-clock
    link: https://cal.com/stackseekers
    type: primary

editLink: false
copyright: false
---

<div class="hidden">
  <h2 class="text-4xl font-bold">Empowering Digital Growth Through Custom Web Development | Jiwan Ghosal</h2>
  <h3 class="my-4 text-xl">I'm a full stack developer specializing in building web applications using JavaScript, Vue, React and Node.js</h3>
</div>

<div class="my-6">
  <div class="text-center pb-4">
    <h2>
      <div class="text-4xl font-bold">Scalable Solutions for</div>
      <a class="text-4xl font-bold no-underline">Startups, Enterprises & Agencies</a>
    </h2>
    <div class="text-xl text-center md:text-left line-height-3">
      I'm a full-stack developer with extensive experience in the JavaScript, VueJS, ReactJS and NodeJS ecosystems, as well as expertise in the Azure cloud platform.
    </div>
  </div>  
  <div class="grid mt-4">
    <div class="md:col col-6 text-center" v-for="stackLogo in stackLogos" :key="stackLogo.title">
      <i :class="stackLogo.icon" class="m-auto text-400 pl-3" style="font-size: 5rem"></i>
      <img width="50px" height="50px" :src="stackLogo.link" :alt="stackLogo.title" loading="eager" fetchpriority="high"/>
      <h3 class="hidden">{{stackLogo.title}}</h3>
    </div>
  </div>
</div>
<div class="my-6">
  <div class="text-center pb-4">
  </div>
  <div class="gallery">
    <div
      v-for="(img, index) in projects"
      :key="index"
      class="gallery-item"
    >
      <a :href="img.link" target="_blank" class="text-l p-2 font-medium text-center no-underline" :aria-label="img.name">
        <img :src="img.images[0].itemImageSrc" :alt="img.images[0].alt" loading="eager" fetchpriority="high" />
        <h3 class="p-0 mt-4">{{ img.name }} <i class="pi pi-external-link ml-1 text-blue-700" style="font-size: 1rem"></i></h3>
      </a>
    </div>
  </div>
  <div class="text-center pb-4 grid justify-content-center gap-4">
    <a href="/about/#stack" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
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
    <a href="/web-development-projects/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
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
    <h2>
      <div class="text-4xl font-bold">Trusted by</div>
      <a class="text-4xl font-bold no-underline">World Wide</a>
    </h2>
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
                    <i class="pi pi-linkedin mr-1 text-blue-700" style="font-size: 1rem"></i>
                    {{ slotProps.data.name }}, 
                  </div>
                  <div>
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
    <a href="https://www.linkedin.com/in/jiwanghosal/details/recommendations/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
      <div class="p-flex p-ai-center">
        <div
          class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"
        >
          <span class="mr-6">
            <i class="pi pi-linkedin" aria-label="LinkedIn Testimonials" style="font-size: 1rem"></i>
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
    <h2>
      <div class="text-4xl font-bold">Why me?</div>
    </h2>
    <div class="my-4 text-xl line-height-2">Here’s why I’m the right choice for your project</div>
  </div>
  <div class="flex flex-wrap">
    <div class="md:col-6 col-12 md:p-4" v-for="why in whyme" :key="why.title">  
      <Fieldset class="vp-feature-item">
        <template #legend>
            <h3 class="flex items-center pl-2 m-0 p-0">
                <Avatar :image="`/img/home/${why.id}.svg`" :aria-label="why.title" shape="square" size="normal"/>
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
    <h2>
      <div class="text-4xl font-bold">Scaling startups</div>
      <a class="text-4xl font-bold no-underline">Elevating industry giants</a>
    </h2>
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
    <h2>
      <div class="text-4xl font-bold line-height-2">Frequently asked <a class="no-underline">questions</a></div>
    </h2>
  </div>
  <div class="grid overflow-hidden border-round-2xl">
    <div class="col-12 ">
      <div class="border-round-2xl flex flex-column gap-2 md:p-2">
          <Accordion :activeIndex="0">
            <AccordionTab header="Q: How can I start a project with you?">
                <h3 class="m-0 p-0 hidden">How can I start a project with you?</h3>
                <p class="mx-3">
                    You can start by <a href="https://cal.com/stackseekers" class="no-underline text-xl" aria-label="schedule a meeting">scheduling a meeting</a> with me. I’ll connect with you promptly to discuss your requirements and plan the next steps.
                </p>
            </AccordionTab>
            <AccordionTab header="Q: What services do you provide?">
                <h3 class="m-0 p-0 hidden">What services do you provide?</h3>
                <p class="mx-3 ">
                    I offer a variety of services tailored to your needs, including 
                    <a href="web-development-services/#ConsultingAndTechnicalAdvisory" class="no-underline" aria-label="Custom Web Development">Custom Web Development</a>, 
                    <a href="web-development-services/#E-commerceSolutions" class="no-underline" aria-label="E-commerce Solutions">E-commerce Solutions</a>, 
                    <a href="web-development-services/#APIDevelopmentAndIntegration" class="no-underline" aria-label="API Development and Integration">API Development and Integration </a>, 
                    <a href="web-development-services/#FigmatoWeb" class="no-underline" aria-label="Figma to Web Conversion">Figma to Web Conversion</a>, and 
                    <a href="web-development-services/#hosting" class="no-underline" aria-label="Hosting & Deployment">Hosting & Deployment</a>. 
                    <div class="mt-2">Let’s find the best solution for your project!</div>
                </p>
            </AccordionTab>
            <AccordionTab header="Q: What does the project process look like?">
                <h3 class="m-0 p-0 hidden">What does the project process look like?</h3>
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
                <div></div>
            </AccordionTab>
        </Accordion>
        <div class="my-4">
          <a href="https://cal.com/stackseekers" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4" aria-label="scheduling a meeting"> 
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
        <div class="text-4xl font-bold">NEED A FULL STACK WEB DEVELOPER?</div>
      </h3>
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <div class="mx-4 text-center text-xl line-height-3">
      I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to collaborate!
    </div>
    <div class="my-4">
      <a href="mailto:jiwan.cse@gmail.com?subject=Inquiry:%20collaborate%20now" size="large" color="deeppink" class="flex justify-content-center text-center no-underline" aria-label="Send an Email"> 
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

// Current page and autoplay interval
const currentPage = ref(0);
const autoplayInterval = 5000;
let autoplayTimer = null;

const events = ref([
    { status: 'We start with understanding your requirements', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Set a clear timeline', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'I handle the development phase', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Deliver your project with ongoing support to ensure success', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);
const projects = ref([
    {
        name: "Upstox: Demat Account",
        description: "Open a Demat Account Online: Demat Account Opening at Upstox",
        skills: ["AngularJS", "MongoDB", "MSSQL", "LoopbackJS","Digital Ocean"],
        software: "Web",
        org: "Upstox",
        year: "2017",
        schema: "https://schema.org/BusinessApplication",
        link: "https://upstox.com/open-demat-account/",
        images: [
                {
                    itemImageSrc: '/img/projects/openDemat.webp',
                    thumbnailImageSrc: '/img/projects/openDemat.webp',
                    alt: 'Open a Demat Account Online: Demat Account Opening at Upstox',
                    title: 'Open a Demat Account Online: Demat Account Opening at Upstox'
                },
            ],
    },
    {
        name: "Trokka Attraction",
        description: "Book Attractions and Tours for Your Next Holiday",
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Axios","API integration",   "ExpressJS", "MongoDB", "Git", "EC2"],
        software: "Web",
        org: "Catch That Bus",
        year: "2019",
        schema: "https://schema.org/DeveloperApplication",
        link: "/projects/#Trokka Attraction",
        images: [
                {
                    itemImageSrc: '/img/projects/trokka.webp',
                    thumbnailImageSrc: '/img/projects/trokka.webp',
                    alt: 'Trokka.com | Book Attractions and Tours for Your Next Holiday',
                    title: 'Trokka.com | Book Attractions and Tours for Your Next Holiday'
                },
            ],
    },
    {
        name: "Catch That Bus",
        description: "Book Malaysia and Singapore bus tickets online.",
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Vite","Axios", "Cordova", "API integration",   "ExpressJS", "MongoDB", "Git", "EC2",  "Eslint", "Prettier"],
        software: "Web / IOS APP",
        org: "Catch That Bus",
        year: "2019",
        schema: "https://schema.org/DeveloperApplication",
        link: "https://m.catchthatbus.com",
        iosLink: "https://apps.apple.com/my/app/catchthatbus/id1025824078",
        images: [
                {
                    itemImageSrc: '/img/projects/catchthatbus.webp',
                    thumbnailImageSrc: '/img/projects/catchthatbus.webp',
                    alt: 'Book Malaysia and Singapore bus tickets online. | CatchThatBus',
                    title: 'Book Malaysia and Singapore bus tickets online. | CatchThatBus'
                },
                {
                    itemImageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png',
                    thumbnailImageSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png',
                    alt: 'IOS app for booking Malaysia and Singapore bus tickets online | CatchThatBus',
                    title: 'Title 1'
                },
            ],
    },
    {
        name: "Call Matrix",
        description: "Call Intelligence, Marketing, and Analytics Platform",
        skills: ["NodeJS", "MongoDB", "MSSQL", "HapiJS","Digital Ocean"],
        software: "Web",
        org: "Mobistreak",
        year: "2015",
        schema: "https://schema.org/BusinessApplication",
        link: "https://callmatrix.io/",
        images: [
                {
                    itemImageSrc: '/img/projects/callmatrix/callmatrix.webp',
                    thumbnailImageSrc: '/img/projects/callmatrix/callmatrix.webp',
                    alt: 'CallMatrix - Call Intelligence, Marketing, and Analytics Platform',
                    title: 'Title 1'
                },
            ],
    },
    // {
    //     name: "Upstox: Partner Dashboard",
    //     description: "Open a sub-broker account with Upstox.",
    //     skills: ["AngularJS", "MongoDB", "MSSQL", "LoopbackJS"],
    //     software: "Web",
    //     org: "Upstox",
    //     year: "2018",
    //     schema: "https://schema.org/BusinessApplication",
    //     link: "https://upstox.com/sub-broker/",
    //     images: [
    //       {
    //           itemImageSrc: '/img/projects/partnerUpstox/dashboard.webp',
    //           thumbnailImageSrc: '/img/projects/partnerUpstox/dashboard.webp',
    //           alt: 'Open a sub-broker account with Upstox.',
    //           title: 'Open a sub-broker account with Upstox.'
    //       },
    //       {
    //           itemImageSrc: '/img/projects/partnerUpstox/partnerUpstox.webp',
    //           thumbnailImageSrc: '/img/projects/partnerUpstox/partnerUpstox.webp',
    //           alt: 'Open a sub-broker account with Upstox.',
    //           title: 'Open a sub-broker account with Upstox.'
    //       },
          
    //       {
    //           itemImageSrc: '/img/projects/partnerUpstox/leads.webp',
    //           thumbnailImageSrc: '/img/projects/partnerUpstox/leads.webp',
    //           alt: 'Open a sub-broker account with Upstox.',
    //           title: 'Open a sub-broker account with Upstox.'
    //       },
    //       {
    //           itemImageSrc: '/img/projects/partnerUpstox/customer.webp',
    //           thumbnailImageSrc: '/img/projects/partnerUpstox/customer.webp',
    //           alt: 'Open a sub-broker account with Upstox.',
    //           title: 'Open a sub-broker account with Upstox.'
    //       },
    //       {
    //           itemImageSrc: '/img/projects/partnerUpstox/earning.webp',
    //           thumbnailImageSrc: '/img/projects/partnerUpstox/earning.webp',
    //           alt: 'Open a sub-broker account with Upstox.',
    //           title: 'Open a sub-broker account with Upstox.'
    //       },
    //     ],
    // },
]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const responsiveCustomerOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

  const social= [
    { label: 'linkedin', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/jiwanghosal/' },
    { label: 'youtube', icon: 'pi pi-youtube', url: 'https://www.youtube.com/@stackseekers' },
    { label: 'stackoverflow', icon: 'pi pi-chart-bar', url: 'https://stackoverflow.com/users/10376224/stchr?tab=profile' },
    { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/jiwan_ghosal/' },
  ];

const orgs= [
  {
    "title": "Capgemini",
    "icon": "/img/home/capgemini.webp",
    "details": "Consulting and technology services",
    "link": "https://www.capgemini.com/"
  },
  {
    "title": "Catch That Bus",
    "icon": "/img/home/catchthatbus.webp",
    "details": "Leisure, travel, and tourism",
    "link": "https://www.catchthatbus.com/"
  },
  {
    "title": "Upstox",
    "icon": "/img/home/upstox.webp",
    "details": "Online stock broker",
    "link": "https://www.upstox.com/"
  },
  {
    "title": "Mobistreak",
    "icon": "/img/home/mobistreak.webp",
    "details": "Marketing and advertising",
    "link": "https://www.mobistreak.com/"
  }
]

  const skills = [
    {
      name: "Front end",
      value: ["VueJS", "Vue3", "Nuxt", "ReactJS", "Vite", "Pinia","Axios", "Vuepress", "Storybook", "Lit","HTML5","CSS3","JavaScript(ES6)", "TypeScript"]
    },
    {
      name: "Back end",
      value: ["ExpressJS","NodeJS","MYSQL","MSSQL","PLSQL","MongoDB","DynamoDB"],
    },
    {
      name: "Hosting & Deployment",
      value: ["Git","CICD","Ansible", "YAML", "Docker","Kibana","Azure", "AWS"],
    },
    {
      name: "Automation Testing",
      value: ["Jest","Testcafe","Lighthouse","Playwright"],
    }
  ];

  const getImage = () =>`background-image: url('/img/home/faq.webp');  background-repeat: no-repeat; background-size: cover;`

  const features = [
    {
      icon: 'pi pi-tag',
      title: 'No minimum order',
      description: 'Try our service without any hassle.'
    },
    {
      icon: 'pi pi-bolt',
      title: 'Fast Delivery',
      description: 'I have got you covered.'
    },
    {
      icon: 'pi pi-calendar-clock',
      title: 'Support',
      description: 'I am here to help!'
    },
    {
      icon: 'pi pi-eye',
      title: 'Free Demo',
      description: 'Free demo biweekly to update progress.'
    }
  ]

  const stackLogos = [
    {
      link: 'https://cdn.simpleicons.org/javascript?viewbox=auto',
      title: 'Javascript',
    },
    {
      link: 'https://cdn.simpleicons.org/typescript?viewbox=auto',
      title: 'Typescript',
    },
    {
      link: 'https://cdn.simpleicons.org/vuedotjs?viewbox=auto',
      title: 'vuejs',
    },
    {
      link: 'https://cdn.simpleicons.org/react?viewbox=auto',
      title: 'ReactJS',
    },
    {
      link: 'https://cdn.simpleicons.org/nodedotjs?viewbox=auto',
      title: 'NodeJs',
    },
    {
      link: 'https://cdn.simpleicons.org/mongodb?viewbox=auto',
      title: 'MongoDb',
    }
  ]


  const testimonials = ref([
    {
      name: 'Harris Malik',
      designation: 'Senior Product Manager at 8x8',
      message: 'Jiwan is one of the most valuable people I have ever met. He is smart, professional, and never fails to surprise us with creative solutions to difficult problems. Jiwan\'s personality and skills would be a great asset to any company. Highly recommended.',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQG8ooyo97JCoA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1682841547783?e=1750896000&v=beta&t=RV2vZM-PEHtTdtboor0V4y6H-KGoUu7-DuJiiET_buU',
      link: 'https://www.linkedin.com/in/harrismalik04/',
      location: 'Malaysia',
      code: 'my'
    },
    {
      name: 'Jurgen Sweere',
      designation: 'Front End Expert at ABN Amro',
      message: 'Jiwan never stopped amazing me. He brings a lot of front-end knowledge to the table and is able to quickly learn anything new. Jiwan is a great colleague to have!',
      avatar: 'https://media.licdn.com/dms/image/v2/C5603AQGLWlLKfqFZgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516235161685?e=1750896000&v=beta&t=29wMeVltwAWsPCr9QHNhRJZWz1LZaEgES0iwjE2A4oc',
      link: 'https://www.linkedin.com/in/jurgensweere',
      location: 'The Netherlands',
      code: 'nl'
    },
    {
      name: 'Shyam Kumar',
      designation: 'Senior Product Manager at Angel One',
      message: 'I always found Jiwan to be a very dependable and hardworking colleague. Many times he went above and beyond to meet the product requirements; it might be either working overtime to release the project on time or working with other teams to get the production issue fixed. He was always the go-to person on the team.',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHZpSlK7j89uA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698672442801?e=1750896000&v=beta&t=lscT5fFmahvoGSWRzV4hN-r2YM58ddKTki5HdOziiuI',
      link: 'https://www.linkedin.com/in/shyam-kumar-k/',
      location: 'India',
      code: 'in'
    },
    {
      name: 'Erkan Ateşli',
      designation: 'Chapter Lead at ABN AMRO Bank N.V.',
      message: 'In our connection with Jiwan at ABN AMRO, I noticed that he has a lot of knowledge in his field of expertise. He can transfer his knowledge easily to others. With his strong analytics skills, he can handle complex questions as usual. Jiwan is a brave colleague I’ve met, and we had a lot of fun during the India visit and especially at the party. ',
      avatar: 'https://media.licdn.com/dms/image/v2/C4E03AQFg4Oh_B9JEeQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1621625662967?e=1750896000&v=beta&t=9KwLZLloVo4ianxK3csxIjlMY0_G0Ez7nKYvgPVVssE',
      link: 'https://www.linkedin.com/in/erkanatesli',
      location: 'The Netherlands',
      code: 'nl'
    }
  ]);

  const whyme =[
    {
      id: "proven_expertise",
      title: "10+ Years of Proven Expertise",
      description: "Over a decade of delivering impactful projects, consistently providing innovative solutions that drive tangible results and add measurable value for clients across industries."
    },
    {
      id: "client_centric_approach",
      title: "Client-Centric Approach",
      description: "Focused on understanding your unique needs, I offer tailored solutions that align with your business goals, ensuring seamless collaboration and delivering the most effective value."
    },
    {
      id: "wide_range_of_experience",
      title: "20+ Clients Across Industries",
      description: "With experience working with over 20 clients from diverse sectors, I bring versatile expertise, quickly adapting to challenges and offering solutions suited to each industry’s demands."
    },
    {
      id: "commitment_to_quality_code",
      title: "Commitment to Quality Code",
      description: "I ensure all code is clean, scalable, and efficient by using industry-standard tools such as ESLint, Prettier, SonarQube, and Jest, delivering high-performance, maintainable, and reliable solutions."
    }
  ]

// Function to start autoplay
const startAutoPlay = () => {
  autoplayTimer = setInterval(() => {
    currentPage.value = (currentPage.value + 1) % testimonials.value.length;
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
