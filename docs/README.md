---
home: true
icon: pi pi-home
title: Home
heroImage: /img/jiwan.png
heroText: Hi, I am Jiwan Ghosal
tagline: Experienced full-stack developer specializing in scalable web, mobile, and software solutions.
containerClass: fancy-container
actions:
  - text: Let’s bring your vision to life
    icon: pi pi-calendar-clock
    link: https://cal.com/stackseekers
    type: primary
  - text: See my work 🚀
    link: /projects/

editLink: false
copyright: false
---

<div class="hidden">
  <div class="text-4xl font-bold">Scaling startups, Elevating Industry Giants</div>
  <div class="my-4 text-xl">Experienced full-stack developer specializing in scalable web, mobile, and software solutions.</div>
</div>

<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold">Scaling startups</div>
    <a class="text-4xl font-bold no-underline">Elevating industry giants</a>
    <div class="my-4 text-xl line-height-2">I bring a proven track record of success in the industry, with a comprehensive skill set spanning every phase of software development</div>
  </div>
  <div class="my-4 flex flex-column md:flex-row justify-content-center gap-2">
    <div class="md:col col-12 border-round-md md:p-2 md:m-2 vp-feature-item flex align-items-center justify-content-center" v-for="org in orgs" :key="org.title">
      <div class="no-underline flex flex-column justify-content-center flex-wrap">
        <div class="mr-2 flex align-items-center justify-content-center">
          <img :src="org.icon" alt="Avatar" width="80px" class="border-round-md"/>
        </div>
        <div class="text-2xl font-bold flex align-items-center justify-content-center"><span>{{org.title}}</span></div>
        <div class="text-xs flex align-items-center justify-content-center line-height-2">{{org.details}}</div>
      </div>
    </div>
  </div>
</div>

<div class="my-6">
  <div class="text-center pb-4">
  </div>
  <div class="card relative">
    <Carousel :value="projects" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="flex">
        <template #item="slotProps">
            <div class="border border-surface-200 shadow-1 border-round-md rounded md:m-2 md:p-2 flex flex-column align-self-center align-items-center justify-content-center" >
                <div class="mb-2 image-box" v-if=slotProps.data.images[0]>
                    <div class="relative mx-auto w-13rem h-10rem overflow-hidden" >
                        <img :src="slotProps.data.images[0].itemImageSrc" :alt="slotProps.data.images[0].alt" class="w-full rounded"/>
                    </div>
                </div>
                <a :href="slotProps.data.link" class="text-l p-2 font-medium text-center no-underline">
                  {{ slotProps.data.name }}
                </a>
            </div>
        </template>
    </Carousel>
  </div>
  <div class="text-center pb-4">
    <a href="/projects/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
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
    <div class="text-4xl font-bold">Trusted by</div>
    <a class="text-4xl font-bold no-underline">World Wide</a>
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
              <img :src="slotProps.data.avatar" alt="Avatar" class="border-circle" width="50px" />
              <a :href="slotProps.data.link" target="_blank" class="no-underline">
                <div class="flex flex-column align-items-start ml-2">
                  <div>{{ slotProps.data.name }}</div>
                  <div>
                    <img :alt="slotProps.data.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.data.code.toLowerCase()} mr-2`" style="width: 18px" />
                    {{ slotProps.data.location }}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </template>
    </Carousel>
  </div>
</div>

<div class="my-6 flex flex-column">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold">Why me?</div>
    <div class="my-4 text-xl line-height-2">Here’s why I’m the right choice for your project</div>
  </div>
  <div class="flex flex-wrap">
    <div class="md:col-6 col-12 md:p-4" v-for="why in whyme" :key="why.title">  
      <Fieldset class="vp-feature-item">
        <template #legend>
            <div class="flex items-center pl-2">
                <Avatar :image="`/img/home/${why.id}.svg`" shape="circle" />
                <span class="font-bold p-2 line-height-2">{{why.title}}</span>
            </div>
        </template>
        <p class="m-0 pt-4">
          {{why.description}}
        </p>
      </Fieldset>
    </div>
  </div>
</div>

<div class="my-4">
  <div class="text-xl text-center md:text-left line-height-3">
    I'm a full-stack developer with extensive experience in the JavaScript, VueJS, ReactJS and NodeJS ecosystems, as well as expertise in the Azure cloud platform.
  </div>
  <div class="grid mt-4">
    <div class="md:col col-6 text-center" v-for="stackLogo in stackLogos" :key="stackLogo.title">
      <i :class="stackLogo.icon" class="m-auto text-400 pl-3" style="font-size: 5rem"></i>
      <img :src="stackLogo.link" alt="Avatar" width="100px" />
    </div>
  </div>
  <div class="text-center pb-4">
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
          <i class="pi pi-angle-double-right" style="font-size: 1rem;"></i>
        </div>
      </div>
    </a>
  </div>
</div>

<!-- FAQ -->
<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold line-height-2">Frequently asked <a class="no-underline">questions</a></div>
  </div>
  <div class="grid overflow-hidden border-round-2xl">
    <div class="col-12 ">
      <div class="border-round-2xl flex flex-column gap-2 md:p-2">
          <Accordion :activeIndex="0">
            <AccordionTab header="Q: How can I start a project with you?">
                <p class="m-0">
                    You can start by <a href="https://cal.com/stackseekers" class="no-underline">scheduling a meeting</a> with me. I’ll connect with you promptly to discuss your requirements and plan the next steps.
                </p>
            </AccordionTab>
            <AccordionTab header="Q: What services do you provide?">
                <p class="m-0 ">
                    I offer a variety of services tailored to your needs, including 
                    <a href="services/#ConsultingAndTechnicalAdvisory" class="no-underline">Custom Web Development</a>, 
                    <a href="services/#E-commerceSolutions" class="no-underline">E-commerce Solutions</a>, 
                    <a href="services/#APIDevelopmentAndIntegration" class="no-underline">API Development and Integration </a>, 
                    <a href="services/#FigmatoWeb" class="no-underline">Figma to Web Conversion</a>, and 
                    <a href="services/#hosting" class="no-underline">Hosting & Deployment</a>. 
                    <div class="mt-2">Let’s find the best solution for your project!</div>
                </p>
            </AccordionTab>
            <AccordionTab header="Q: What does the project process look like?">
                <p class="m-0">
                  <div>It’s simple and straightforward: </div>
                  <Timeline :value="events"  class="w-full md:w-80">
                      <template #content="slotProps">
                          {{ slotProps.item.status }}
                      </template>
                  </Timeline>
                </p>
            </AccordionTab>
        </Accordion>
        <div class="my-4">
          <a href="https://cal.com/stackseekers" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
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
      <div class="text-4xl font-bold">Contact me</div>
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <div class="mx-4 text-center text-xl line-height-3">
      I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to collaborate!
    </div>
    <div class="my-4">
      <a href="mailto:jiwan.cse@gmail.com?subject=Inquiry:%20collaborate%20now" size="large" color="deeppink" class="flex justify-content-center text-center no-underline"> 
        <Button label="Let's collaborate now!" icon="pi pi-briefcase" severity="primary" raised rounded />
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 220"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
</div>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

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
        features: [
            {
                name:'Open Demat account with document upload'
            },
            {
                name:'Pan, Aadhar, IPV, and canceled check verification'
            },
            {
                name:'Lead to CRM system'
            },
            {
                name:'Scrutiny of lead'
            },
            {
                name:'Upload details to NSE, BSE, and MCX'
            },
            {
                name:'Report based on the flow of lead'
            },
        ],
        org: "Upstox",
        year: "2017",
        schema: "https://schema.org/BusinessApplication",
        link: "https://upstox.com/open-demat-account/",
        images: [
                {
                    itemImageSrc: '/img/projects/openDemat.png',
                    thumbnailImageSrc: '/img/projects/openDemat.png',
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
        features: [
            {
                name:'Show Tours and Attraction of Malaysia'
            },
            {
                name:'Popular activities based on rating and demand'
            },
            {
                name:'Activities and details based on location'
            },
            {
                name:'Book and share attractions for other people'
            },
            {
                name:'Discount system based on promo code'
            },
            {
                name:'Paymnet system using Boost wallet and other payment methods'
            },
            {
                name:'Custome CMS Backend system to add, update, delete tours and attractions'
            },
        ],
        org: "Catch That Bus",
        year: "2019",
        schema: "https://schema.org/DeveloperApplication",
        link: "/projects/#Trokka Attraction",
        images: [
                {
                    itemImageSrc: '/img/projects/trokka.gif',
                    thumbnailImageSrc: '/img/projects/trokka.gif',
                    alt: 'Trokka.com | Book Attractions and Tours for Your Next Holiday',
                    title: 'Trokka.com | Book Attractions and Tours for Your Next Holiday'
                },
            ],
    },
    
    {
        name: "Call Matrix",
        description: "Call Intelligence, Marketing, and Analytics Platform",
        skills: ["NodeJS", "MongoDB", "MSSQL", "HapiJS","Digital Ocean"],
        software: "Web",
        features: [
            {
                name:'Create campaign for call'
            },
            {
                name:'Create bundel of campaigns for call'
            },
            {
                name:'Buy local & toll-free numbers'
            },
            {
                name:'Call Recording and Off Hour Call Handling'
            },
            {
                name:'Funnel to redirect the call based on the multi level IVR'
            },
            {
                name:'Report of bundel, CDR, and offer based on hour, week and geo location'
            },
            {
                name:'Dashboard to get bird eye view'
            },
            {
                name:'Google Adwords API integration'
            },
            {
                name:'User autherisation based on role'
            },
        ],
        org: "Mobistreak",
        year: "2015",
        schema: "https://schema.org/BusinessApplication",
        link: "https://callmatrix.io/",
        images: [
                {
                    itemImageSrc: '/img/projects/callmatrix.png',
                    thumbnailImageSrc: '/img/projects/callmatrix.png',
                    alt: 'CallMatrix - Call Intelligence, Marketing, and Analytics Platform',
                    title: 'Title 1'
                },
            ],
    },
    {
        name: "Catch That Bus",
        description: "Book Malaysia and Singapore bus tickets online.",
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Vite","Axios", "Cordova", "API integration",   "ExpressJS", "MongoDB", "Git", "EC2",  "Eslint", "Prettier"],
        software: "Web / IOS APP",
        features: [
            {
                name:'Search for bus by chosing from destination and to destination in Malaysia for dates'
            },
            {
                name:'Sort and filter on available buses'
            },
            {
                name:'Seat visualization of a bus'
            },
            {
                name:'Booking system to handel concurent request'
            },
            {
                name:'Discount system based on cupon code',
            },
            {
                name:'Insurnce integration for travelers',
            },
            {
                name:'Payment system usign wallet and cards',
            },
            {
                name:'Webview for Boost wallet',
            },
            {
                name:'Multiple language support'
            },
            {
                name:'Multiple Currency support'
            },
            {
                name:'Bus Booked history'
            },
            {
                name:'Bus orboarding sytem for admin and bus operator'
            },
        ],
        org: "Catch That Bus",
        year: "2019",
        schema: "https://schema.org/DeveloperApplication",
        link: "https://m.catchthatbus.com",
        iosLink: "https://apps.apple.com/my/app/catchthatbus/id1025824078",
        images: [
                {
                    itemImageSrc: '/img/projects/catchthatbus.gif',
                    thumbnailImageSrc: '/img/projects/catchthatbus.gif',
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
        name: "Upstox: Partner Dashboard",
        description: "Open a sub-broker account with Upstox.",
        skills: ["AngularJS", "MongoDB", "MSSQL", "LoopbackJS"],
        software: "Web",
        features: [
            {
                name:'Refer and earn program'
            },
            {
                name:'Track lead refered'
            },
            {
                name:'Ambasador program'
            },
            {
                name:'Royalty program'
            },
            {
                name:'Track customer refered'
            },
            {
                name:'Dashboard to show earning based on the program'
            },
            {
                name:'Search by name and UCC'
            },
            {
                name:'Earning report based on the customer trade'
            },
        ],
        org: "Upstox",
        year: "2018",
        schema: "https://schema.org/BusinessApplication",
        link: "https://upstox.com/sub-broker/",
        images: [
          {
              itemImageSrc: '/img/projects/partnerUpstox/dashboard.png',
              thumbnailImageSrc: '/img/projects/partnerUpstox/dashboard.png',
              alt: 'Open a sub-broker account with Upstox.',
              title: 'Open a sub-broker account with Upstox.'
          },
          {
              itemImageSrc: '/img/projects/partnerUpstox/partnerUpstox.png',
              thumbnailImageSrc: '/img/projects/partnerUpstox/partnerUpstox.png',
              alt: 'Open a sub-broker account with Upstox.',
              title: 'Open a sub-broker account with Upstox.'
          },
          
          {
              itemImageSrc: '/img/projects/partnerUpstox/leads.png',
              thumbnailImageSrc: '/img/projects/partnerUpstox/leads.png',
              alt: 'Open a sub-broker account with Upstox.',
              title: 'Open a sub-broker account with Upstox.'
          },
          {
              itemImageSrc: '/img/projects/partnerUpstox/customer.png',
              thumbnailImageSrc: '/img/projects/partnerUpstox/customer.png',
              alt: 'Open a sub-broker account with Upstox.',
              title: 'Open a sub-broker account with Upstox.'
          },
          {
              itemImageSrc: '/img/projects/partnerUpstox/earning.png',
              thumbnailImageSrc: '/img/projects/partnerUpstox/earning.png',
              alt: 'Open a sub-broker account with Upstox.',
              title: 'Open a sub-broker account with Upstox.'
          },
        ],
    },
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
    "icon": "/img/home/capgemini2.png",
    "details": "Consulting and technology services",
    "link": "https://www.capgemini.com/"
  },
  {
    "title": "CatchThatBus",
    "icon": "/img/home/catchthatbus.png",
    "details": "Leisure, travel, and tourism",
    "link": "https://www.catchthatbus.com/"
  },
  {
    "title": "Upstox",
    "icon": "/img/home/upstox.jpeg",
    "details": "Online stock broker",
    "link": "https://www.upstox.com/"
  },
  {
    "title": "Mobistreak",
    "icon": "/img/home/mobistreak.png",
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

  const getImage = () =>`background-image: url('/img/home/faq.jpeg');  background-repeat: no-repeat; background-size: cover;`

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
      link: '/img/stacks/vuejs.png',
      title: 'VueJs',
    },
    {
      link: '/img/stacks/reactjs.png',
      title: 'ReactJS',
    },
    {
      link: '/img/stacks/nodejs.png',
      title: 'NodeJs',
    },
    {
      link: '/img/stacks/mongodb.png',
      title: 'MongoDb',
    }
  ]


  const testimonials = ref([
    {
      name: 'Harris Malik',
      designation: 'Senior Product Manager at 8x8',
      message: 'Jiwan is one of the most valuable people I have ever met. He is smart, professional, and never fails to surprise us with creative solutions to difficult problems. Jiwan\'s personality and skills would be a great asset to any company. Highly recommended.',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQG8ooyo97JCoA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1682841547783?e=1738195200&v=beta&t=JARoSOLbmEvkdoSPUN0KudV6as1XSLEzxngLUDb9S6c',
      link: 'https://www.linkedin.com/in/harrismalik04/',
      location: 'Malaysia',
      code: 'my'
    },
    {
      name: 'Jurgen Sweere',
      designation: 'Front End Expert at ABN Amro',
      message: 'Jiwan never stopped amazing me. He brings a lot of front-end knowledge to the table and is able to quickly learn anything new. Jiwan is a great colleague to have!',
      avatar: 'https://media.licdn.com/dms/image/v2/C5603AQGLWlLKfqFZgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516235161685?e=1738195200&v=beta&t=UF337AJukgtr4CHB2h-M-Azrt31Y24z3Q2lRBTiIk_c',
      link: 'https://www.linkedin.com/in/jurgensweere',
      location: 'The Netherlands',
      code: 'nl'
    },
    {
      name: 'Shyam Kumar',
      designation: 'Senior Product Manager at Angel One',
      message: 'I always found Jiwan to be a very dependable and hardworking colleague. Many times he went above and beyond to meet the product requirements; it might be either working overtime to release the project on time or working with other teams to get the production issue fixed. He was always the go-to person on the team.',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHZpSlK7j89uA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698672442801?e=1738195200&v=beta&t=lXm4yDQlyLnGzUFtfzqjDGEgBzttasSc03uUb5s0ZVc',
      link: 'https://www.linkedin.com/in/shyam-kumar-k/',
      location: 'India',
      code: 'in'
    },
    {
      name: 'Erkan Ateşli',
      designation: 'Chapter Lead at ABN AMRO Bank N.V.',
      message: 'In our connection with Jiwan at ABN AMRO, I noticed that he has a lot of knowledge in his field of expertise. He can transfer his knowledge easily to others. With his strong analytics skills, he can handle complex questions as usual. Jiwan is a brave colleague I’ve met, and we had a lot of fun during the India visit and especially at the party. ',
      avatar: 'https://media.licdn.com/dms/image/v2/C4E03AQFg4Oh_B9JEeQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1621625662967?e=1738195200&v=beta&t=Pe3O7c2KVXVkPPfb7cs06mLOgmvBHxUufz1hWnUDVCI',
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
