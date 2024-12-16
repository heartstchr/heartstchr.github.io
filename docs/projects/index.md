---
title: Projects
icon: discover
order: 2
lastUpdated: false
editLink: false
copyright: false
footer: '<div class="card surface-100 text-600">
  <div class="flex flex-wrap">
  <div class="w-full">
  <div class="gap-2">
  <div class="card flex md:flex-row flex-column justify-content-between flex-grow-1 my-4 align-item-center gap-4">
  <div class="flex flex-row justify-content-between align-items-center gap-2 m-auto">Copyright © 2022</div>
  <div class="flex md:flex-row flex-column justify-content-between align-items-center gap-4">
  <a href="/projects/" class="text-600"> Projects </a>
  <a href="/services/" class="text-600"> Services </a>
  <a href="/about/" class="text-600"> About </a>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>'
---

<div class="flex flex-column gap-4 my-6">
    <div>Here, you’ll find a showcase of some of my featured projects, highlighting my expertise and passion for creating meaningful digital experiences. These projects reflect my ability to turn ideas into reality, tailored to meet each client’s unique needs.</div>
    <div>If you’re searching for a professional who can bring your vision to life with precision and creativity, you’ve come to the right place.</div>
    <div>
        <a href="https://cal.com/stackseekers" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
            <Button label="Let’s build something extraordinary together!" icon="pi pi-calendar-clock" severity="primary" raised rounded />
        </a>
    </div>
</div>

<div class="grid my-6">
    <div class="vp-feature-item col-12 shadow-1 p-4" v-for= "(project, index) in projects">
        <div>
            <div itemprop="name" class="text-4xl font-bold">{{project.name}}</div> 
            <div class="text-xl mt-2" itemprop="operatingSystem">{{project.software}} <span class="text-sm mt-2" >({{project.year}})</span></div>
        </div>
        <div class="surface-card flex md:flex-row flex-column" itemscope itemtype="https://schema.org/SoftwareApplication">
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
        <div class="flex flex-column mt-4 p-2">
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
                    <Button label="Live Demo" icon="pi pi-angle-double-right" severity="help" raised rounded />
                </a>
                <a v-if="project.codeLink" :href="project.codeLink" target="_blank" class="w-full flex flex-row no-underline mt-4">
                    <Button label="Repo" icon="pi pi-github" severity="contrast" raised rounded />
                </a>
            </div>
        </div>
  </div>
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
const projects= [
    {
        name: "Quatar Airways widget",
        description: "Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more.",
        skills: ["Javascript", "ES6", "Vue3","Landingi", "Pinia","Vite","Axios","Express", "Responsive", "API integration", "MongoDB", "git", "EC2", "eslint", "prettier"],
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
        skills: ["Javascript", "ES6", "Vue3", "Pinia","Vite","Axios","Express", "Responsive", "API integration", "MongoDB", "git", "EC2", "eslint", "prettier"],
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
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Vite","Axios","API integration", "Responsive", "API integration", "MongoDB", "git", "EC2", "eslint", "prettier"],
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
        name: "Trokka Attraction",
        description: "Book Attractions and Tours for Your Next Holiday",
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Axios","API integration", "Responsive", "ExpressJS", "MongoDB", "git", "EC2"],
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
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Vite","Axios", "Cordova", "API integration", "Responsive", "ExpressJS", "MongoDB", "git", "EC2",  "eslint", "prettier"],
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
