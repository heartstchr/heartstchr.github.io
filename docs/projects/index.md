---
title: Projects
icon: discover
order: 2
lastUpdated: false
editLink: false
copyright: false
---

<div class="flex flex-column gap-4 my-6">
    <div>Here, you’ll find a showcase of some of my featured projects, highlighting my expertise and passion for creating meaningful digital experiences. These projects reflect my ability to turn ideas into reality, tailored to meet each client’s unique needs.</div>
    <div>If you’re searching for a professional who can bring your vision to life with precision and creativity, you’ve come to the right place.</div>
    <div>
        <a href="https://cal.com/stackseekers" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
            <Button label="Build Your Vision with Us!" icon="pi pi-calendar-clock" severity="primary" raised rounded />
        </a>
    </div>
</div>

<div class="grid my-6 gap-8">
    <div class="vp-feature-item col-12 shadow-1 m-0 p-0" v-for= "(project, index) in projects" :id="project.name">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 200"><path fill="#10b981" fill-opacity="0.1" d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,202.7C560,213,640,203,720,192C800,181,880,171,960,181.3C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <div class="px-4">
            <div>
                <div itemprop="name" class="text-4xl font-bold">{{project.name}}</div> 
                <div class="text-xl mt-2" itemprop="operatingSystem">{{project.software}} <span class="text-sm mt-2" >({{project.year}})</span><span class="text-sm mt-2" > - {{project.org}}</span></div>
            </div>
            <div class="flex md:flex-row flex-column" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="md:col-6 col-12">
                    <div class="my-2 text-xl">{{project.description}}</div>
                    <div class="flex flex-column mt-4 p-2" v-if="project.features">
                        <div class="my-2 text-l">Features</div>
                        <ul class="my-2 text-sm" v-for="feature in project.features">
                            <li>{{feature.name}}</li>
                        </ul>
                    </div>
                </div>
                <div class="md:col-6 col-12">
                    <link itemprop="applicationCategory" :href="project.schema" />
                    <div class="card" v-if="project.images">
                        <Galleria :value="project.images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" :showItemNavigators="true" :showThumbnails="false">
                            <template #item="slotProps">
                                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                            </template>
                            <template #thumbnail="slotProps">
                                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                            </template>
                        </Galleria>
                    </div>
                </div>  
            </div>
        </diV>
        <div class="flex flex-column mt-4 p-4">
            <div class="my-2 text-l">Stack Used</div>
            <div class="flex grid mt-4 p-2">
                <Tag style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color)" v-for="part in project.skills" :key="part" :value="part" class="m-1">
                    <div class="flex items-center gap-2 px-1">
                        <i class="pi pi-cog" style="font-size: 1rem"></i>
                        <span class="text-base">{{part}}</span>
                    </div>
                </Tag>
            </div>
            <div class="flex flex-row justify-content-between align-items-center gap-2">
                <a v-if="project.link" :href="project.link" target="_blank" class="w-full flex flex-row no-underline mt-4">
                    <Button label="Live Demo" icon="pi pi-angle-double-right" severity="primary" raised rounded />
                </a>
                <a v-if="project.codeLink" :href="project.codeLink" target="_blank" class="w-full flex flex-row no-underline mt-4">
                    <Button label="Repo" icon="pi pi-github" severity="secondary" raised rounded />
                </a>
            </div>
        </div>
  </div>
</div>


<!-- Contact Me -->
<div class="border-round-md vp-feature-item" id="contact">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <div>
    <div class="text-center pb-4">
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <div class="mx-4 text-center text-xl">
      Ready to turn your vision into reality? Let’s discuss how I can help you achieve your goals.
    </div>
    <div class="my-4">
      <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="flex justify-content-center text-center no-underline"> 
        <Button label="Hire Now!" icon="pi pi-briefcase" severity="primary" raised rounded />
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
</div>


<script setup lang="ts">
import { ref } from "vue";

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
//todo: show in tabs
const tabs = ref([
    { title: 'Organisation', content: 'Organisation Projects', value: '0', children:[] },
    { title: 'Freelance', content: 'Freelance Projects', value: '1', children:[] },
]);
const projects= [
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
                    itemImageSrc: '/img/projects/partnerUpstox/partnerUpstox.png',
                    thumbnailImageSrc: '/img/projects/partnerUpstox/partnerUpstox.png',
                    alt: 'Open a sub-broker account with Upstox.',
                    title: 'Open a sub-broker account with Upstox.'
                },
                {
                    itemImageSrc: '/img/projects/partnerUpstox/dashboard.png',
                    thumbnailImageSrc: '/img/projects/partnerUpstox/dashboard.png',
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
        name: "Quatar Airways widget",
        description: "Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more.",
        skills: ["Javascript", "ES6", "Vue3","Landingi", "Pinia","Vite","Axios","Express",   "API integration", "MongoDB", "Git", "EC2", "Eslint", "Prettier"],
        software: "Web",
        features: [
            {
                name:'Widget for Flight Booking'
            },
            {
                name:'Widget for Flight + Hotel Booking'
            },
            {
                name:'Widget for Transfer Booking'
            },
            {
                name:'Use widget with any CMS Platform like Landingi'
            }
        ],
        org: "TUI",
        year: "2021",
        schema: "https://schema.org/DeveloperApplication",
        link: "https://www.qatarairways.com/en-us/homepage.html",
        images: [
            {
                    itemImageSrc: '/img/projects/quatar/placeholder.png',
                    thumbnailImageSrc: '/img/projects/quatar/placeholder.png',
                    alt: 'Quatar Airways',
                    title: 'Quatar Airways'
                },
                {
                    itemImageSrc: '/img/projects/quatar/quatar.png',
                    thumbnailImageSrc: '/img/projects/quatar/quatar.png',
                    alt: 'Quatar Airways',
                    title: 'Quatar Airways'
                },
                {
                    itemImageSrc: '/img/projects/quatar/qutar_airways.png',
                    thumbnailImageSrc: '/img/projects/quatar/qutar_airways.png',
                    alt: 'Quatar Airways',
                    title: 'Quatar Airways'
                },
                {
                    itemImageSrc: '/img/projects/quatar/thumbnail.png',
                    thumbnailImageSrc: '/img/projects/quatar/thumbnail.png',
                    alt: 'Quatar Airways',
                    title: 'Quatar Airways'
                },
            ],
    },
    {
        name: "Recipes",
        description: "Recipes: Social Network",
        skills: ["Javascript", "ES6", "Vue3", "Pinia","Vite","Axios","Express",   "API integration", "MongoDB", "Git", "EC2", "Eslint", "Prettier"],
        software: "Web",
        features: [
            {
                name:'Authentication with Incognigo pool'
            },
            {
                name:'Create and Share recipes with friends'
            },
            {
                name:'Search recipes'
            },
            {
                name:'List and share your recipes direction or ingradients'
            },
            {
                name:'Rate and review for recipe'
            },
        ],
        org: "Freelance",
        year: "2020",
        schema: "https://schema.org/DeveloperApplication",
        link: "http://recipes-client.s3-website.ap-south-1.amazonaws.com/",
        codeLink: "https://github.com/heartstchr/recipe",
        images: [
                {
                    itemImageSrc: '/img/projects/recipe/recipe.gif',
                    thumbnailImageSrc: '/img/projects/recipe/recipe.gif',
                    alt: 'Recipes - Social Network | Recipes',
                    title: 'Recipes - Social Network | Recipes'
                },
                {
                    itemImageSrc: '/img/projects/recipe/recipe-mobile.gif',
                    thumbnailImageSrc: '/img/projects/recipe/recipe-mobile.gif',
                    alt: 'Recipes - Social Network | Recipes',
                    title: 'Recipes - Social Network | Recipes'
                },
            ],
    },
    {
        name: "Tv maze",
        description: "TVmaze: Add TV information to your website or app.",
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Vite","Axios","API integration", "MongoDB", "Git", "EC2", "Eslint", "Prettier"],
        software: "Web",
        features: [
            {
                name:'Popular Tv shows sorted based on rating'
            },
            {
                name:'Tv shows based on genre'
            },
            {
                name:'Search Tv shows'
            },
            {
                name:'Details Tv shows'
            },
            {
                name:'Episodes, cast and crew of a Tv shows'
            },
        ],
        org: "Freelance",
        year: "2020",
        schema: "https://schema.org/DeveloperApplication",
        link: "https://heartstchr.github.io/tvmaze/",
        codeLink: "https://github.com/heartstchr/tvshows",
        images: [
            {
                itemImageSrc: '/img/projects/tvmaze/tvmaze-home.png',
                thumbnailImageSrc: '/img/projects/tvmaze/tvmaze-home.png',
                alt: 'TVmaze - Add TV information to your website or app. | Tv maze',
                title: 'TVmaze - Add TV information to your website or app. | Tv maze'
            },
            {
                itemImageSrc: '/img/projects/tvmaze/search.png',
                thumbnailImageSrc: '/img/projects/tvmaze/search.png',
                alt: 'TVmaze - Add TV information to your website or app. | Tv maze',
                title: 'TVmaze - Add TV information to your website or app. | Tv maze'
            },
            {
                itemImageSrc: '/img/projects/tvmaze/season.png',
                thumbnailImageSrc: '/img/projects/tvmaze/season.png',
                alt: 'TVmaze - Add TV information to your website or app. | Tv maze',
                title: 'TVmaze - Add TV information to your website or app. | Tv maze'
            },
            {
                itemImageSrc: '/img/projects/tvmaze/cast.png',
                thumbnailImageSrc: '/img/projects/tvmaze/cast.png',
                alt: 'TVmaze - Add TV information to your website or app. | Tv maze',
                title: 'TVmaze - Add TV information to your website or app. | Tv maze'
            },
            {
                itemImageSrc: '/img/projects/tvmaze/tvmaze.gif',
                thumbnailImageSrc: '/img/projects/tvmaze/tvmaze.gif',
                alt: 'TVmaze - Add TV information to your website or app. | Tv maze',
                title: 'TVmaze - Add TV information to your website or app. | Tv maze'
            },
            {
                itemImageSrc: '/img/projects/tvmaze/tvmaze.png',
                thumbnailImageSrc: '/img/projects/tvmaze/tvmaze.png',
                alt: 'TVmaze - Add TV information to your website or app. | Tv maze',
                title: 'TVmaze - Add TV information to your website or app. | Tv maze'
            },
        ],
    },
    {
        name: "Command Line Dictionary",
        description: "CLI for Dictionary",
        software: "Terminal",
        features: [
            {
                name:'Create help command for available commands'
            },
            {
                name:'Defination of a word'
            },
            {
                name:'Synonyms and antonyms of a word'
            },
            {
                name:'Get example sentence from a word'
            },
            {
                name:'Get word of the day'
            },
            {
                name:'Play word game'
            },
        ],
        org: "Freelance",
        year: "2020",
        skills: ["Inquirer", "Commander", "Plop", "Eslint", "Prettier"],
        schema: "https://schema.org/DeveloperApplication",
        codeLink: "https://github.com/heartstchr/dic",
        images: [
                {
                    itemImageSrc: '/img/projects/dictionary.png',
                    thumbnailImageSrc: '/img/projects/dictionary.png',
                    alt: 'CLI for Dictionary',
                    title: 'Title 1'
                },
            ],
    },
    {
        name: "Stock Market",
        description: "Consuming socket data and plotting a real-time D3 graph",
        skills: ["D3JS", "VueJS", "NodeJS"],
        software: "Web",
        features: [
            {
                name:'Show realtime charts of a unit'
            },
            {
                name:'Show history of a unit in charts'
            },
        ],
        org: "Freelance",
        year: "2016",
        schema: "https://schema.org/BusinessApplication",
        codeLink: "https://github.com/heartstchr/StockMarket",
        images: [
                {
                    itemImageSrc: '/img/projects/stocks.png',
                    thumbnailImageSrc: '/img/projects/stocks.png',
                    alt: 'Consuming socket data and plotting a real-time D3 graph',
                    title: 'Title 1'
                },
            ],
    },
]
</script>
