---
home: true
icon: pi pi-home
title: Home
heroImage: /img/jiwan.png
heroText: Hi, I am Jiwan Ghosal
tagline: Experienced full-stack developer specializing in scalable web, mobile, and software solutions. Let’s bring your vision to life.
containerClass: fancy-container
actions:
  - text: Schedule Meeting
    icon: pi pi-calendar-clock
    link: https://cal.com/stackseekers
    type: primary
  - text: See my work 💡
    link: /projects/

editLink: false
copyright: false
---

<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold">Delivering Results for Industry Leaders</div>
  </div>
  <div class="grid my-4">
    <div class="md:col col-12 surface-card shadow-1 border-round-md p-2 m-2 text-900 vp-feature-item" v-for="org in orgs" :key="org.title">
      <a :href="org.link" class="text-600 no-underline flex flex-column">
        <div class="text-2xl font-bold"><img :src="org.icon" alt="Avatar" width="30px" class="mr-2"/><span>{{org.title}}</span></div>
        <div class="text-l">{{org.details}}</div>
      </a>
    </div>
  </div>
</div>

<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold">Featured Projects</div>
  </div>
  <div class="card">
      <Carousel :value="projects" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
          <template #item="slotProps">
              <div class="border border-surface-200 shadow-1 border-round-md dark:border-surface-700 rounded m-2 p-4 text-center">
                  <div class="mb-4">
                      <div class="relative mx-auto h-10rem overflow-hidden">
                          <img :src="slotProps.data.images[0].itemImageSrc" :alt="slotProps.data.images[0].alt" class="w-full rounded"/>
                      </div>
                  </div>
                  <div class="mb-4 text-l font-medium text-center">
                    {{ slotProps.data.name }}
                  </div>
              </div>
          </template>
      </Carousel>
  </div>
</div>

<div class="my-6">
    <a href="https://github.com/heartstchr?tab=repositories" target="_blank" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4 external-link-icon"> 
      <Button label="Open source projects" icon="pi pi-github" severity="primary" raised rounded/>
    </a>
</div>

<div class="flex flex-column">
  <div class="text-xl">
    I bring a proven track record of success in the industry, with a comprehensive skill set spanning every phase of software development
    <ul>
      <li>Planning</li>
      <li>Implementation</li>
      <li>Automated Testing</li>
      <li>Monitoring</li>
      <li>Continuous Integration and Delivery</li>
    </ul>
  </div>
</div>
<div class="my-4">
  <div class="text-xl">
    I'm a full-stack developer with extensive experience in the JavaScript, VueJS, ReactJS and NodeJS ecosystems, as well as expertise in the Azure cloud platform.
  </div>
  <div class="grid mt-4">
    <div class="md:col col-6 text-center" v-for="stackLogo in stackLogos" :key="stackLogo.title">
      <i :class="stackLogo.icon" class="m-auto text-400 pl-3" style="font-size: 5rem"></i>
      <img :src="stackLogo.link" alt="Avatar" width="100px" />
    </div>
  </div>
</div>
<div class="my-4">
  <div class="grid my-4">
    <div class="col-12">
      <img src="/img/home/JiwanGhosalMicrosoftAz900.png" alt="Jiwan Ghosal Microsoft Az900" />
    </div>
  </div>
</div>

<!-- Testimonials -->
<div class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold">What Customers Are Saying</div>
    <div class="my-4 text-xl">I value every client as a strategic partner. Here’s what they’ve shared about their experience working with me.</div>
  </div>
  <div class="my-4 text-center text-md overflow-x-scroll ">
    <div class="flex flex-row align-items-center">
      <div class="md:col-6 col-12 surface-card shadow-1 border-round-md p-2 m-2 text-900 vp-feature-item" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="font-italic mb-8">
          <div class="text-md" ><span class="font-bold text-4xl">"</span> {{ testimonial.message }}</div>
        </div>
        <div class="flex align-items-center">
          <img :src="testimonial.avatar" alt="Avatar" class="border-circle" width="50px" />
          <a :href="testimonial.link" target="_blank">
            <div class="flex flex-column align-items-start ml-2">
              <div>{{ testimonial.name }}</div>
              <div>{{ testimonial.designation }}</div>
              <div>
                <img :alt="testimonial.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${testimonial.code.toLowerCase()} mr-2`" style="width: 18px" />
                {{ testimonial.location }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- FAQ -->
<div v-if="questions" class="my-6">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold">Frequently Asked Questions</div>
  </div>
  <div class="grid md:mx-2 my-4 overflow-hidden border-round-2xl" :style="getImage()">
    <div class="md:col-8 col-12">
      <div class="surface-100 p-2 border-round-2xl text-900 flex flex-column gap-2 vp-feature-item">
        <div v-for="question in questions" :key="question.id" class="my-2">
          <div class="flex flex-column my-1 gap-2">
            <div class="font-medium text-xl">Q: {{ question.question }}</div>
            <div class="text-md"><span class="font-medium text-xl">A:</span> {{ question.answer }}</div>
          </div>
        </div>
        <div class="my-4">
          <a href="https://cal.com/stackseekers" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
            <Button label="Discuss Your Project" icon="pi pi-calendar-clock" severity="primary" raised rounded/>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Contact Me -->
<div class="surface-100 border-round-md text-900 vp-feature-item" id="contact">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold">Contact Me</div>
    <div class="my-4 text-md">Let's work together!</div>
  </div>
  <div class="my-4 text-center text-xl">
    I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to collaborate!
  </div>
  <div class="my-4">
    <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="flex justify-content-center text-center no-underline"> 
      <Button label="Hire Now" icon="pi pi-briefcase" severity="primary" raised rounded />
    </a>
  </div>
  <div class="flex flex-row justify-content-end flex-wrap gap-4 mx-6">
    <a
      v-for="(socialElement, socialIndex) in social"
      :key="socialIndex"
      :href="socialElement.url"
      target="_blank"
      class="flex flex-row text-600 gap-2"
      >
      <i :class="socialElement.icon" style="font-size: 1rem"></i>
      </a>
  </div>
</div>

<script setup lang="ts">
import { ref } from "vue";

const projects = ref([
    {
        name: "Partner Dashboard Upstox",
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
    {
        name: "Open Demat Account for Upstox",
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
        name: "CallMatrix",
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
        link: "https://m.trokka.com/attraction",
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
]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
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

  const social= [
    { label: 'linkedin', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/jiwanghosal/' },
    { label: 'stackoverflow', icon: 'pi pi-chart-bar', url: 'https://stackoverflow.com/users/10376224/stchr?tab=profile' },
    { label: 'Facebook', icon: 'pi pi-facebook', url: 'https://www.facebook.com/profile.php?id=100004925264462' },
    { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/jiwan_ghosal/' },
    { label: 'youtube', icon: 'pi pi-youtube', url: 'https://www.youtube.com/@stackseekers' },
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
    "details": "Leisure, Travel, and Tourism",
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

  const questions = [
    {
      id: 1,
      question: "How can I start a project with you?",
      answer: "You can start by scheduling a meeting with me. I’ll connect with you promptly to discuss your requirements and plan the next steps."
    },
    {
      id: 2,
      question: "What services do you provide?",
      answer: "I offer a variety of services tailored to your needs, including Custom Web Development, E-commerce Solutions, API Development and Integration, Figma to Web Conversion, and Hosting & Deployment. Let’s find the best solution for your project!"
    },
    {
      id: 3,
      question: "What does the project process look like?",
      answer: `It’s simple and straightforward:
      1) We start with understanding your requirements, 
      2) Set a clear timeline, 
      3) I handle the development phase, and 4) Deliver your project with ongoing support to ensure success.`
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


  const testimonials = [
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
  ];

</script>
