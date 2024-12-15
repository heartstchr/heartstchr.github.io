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
    <div>I take immense pride in delivering innovative and impactful projects across diverse domains. Each project is a testament to my dedication to excellence and unwavering commitment to client satisfaction, ensuring every solution is both functional and transformative.</div>
    <div>Here, you’ll find a showcase of some of my featured projects, highlighting my expertise and passion for creating meaningful digital experiences. These projects reflect my ability to turn ideas into reality, tailored to meet each client’s unique needs.</div>
    <div>If you’re searching for a professional who can bring your vision to life with precision and creativity, you’ve come to the right place. Let’s build something extraordinary together!</div>
    <div>
        <a href="https://cal.com/stackseekers" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
            <Button label="Schedule Meeting" icon="pi pi-calendar-clock" severity="primary" raised rounded />
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
            <div class="md:col-6 col-12">
                <link itemprop="applicationCategory" :href="project.schema" />
                <div class="w-full flex flex-row">
                    <Image :src="project.img" class="" :alt="project.altText" width="100%"/>
                    <Image v-if="project.imgMobile" :src="project.imgMobile" class="" :alt="project.altText" width="100%"/>
                </div>
            </div>  
        </div>
  </div>
</div>

<script setup lang="ts">
const projects= [
    {
        name: "Quatar Airways widget",
        description: "Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more.",
        skills: ["Javascript", "ES6", "Vue3","Landingi", "Pinia","Vite","Axios","Express", "Responsive", "API integration", "MongoDB", "git", "EC2", "eslint", "prettier"],
        software: "Web",
        features: [
            {
                name:'Feature'
            }
        ],
        year: "2021",
        schema: "https://schema.org/DeveloperApplication",
        link: "https://www.qatarairways.com/en-us/homepage.html",
        img: "/img/projects/quatar.png",
        altText: "Quatar Airways"
    },
    {
        name: "Recipes",
        description: "Recipes: Social Network",
        skills: ["Javascript", "ES6", "Vue3", "Pinia","Vite","Axios","Express", "Responsive", "API integration", "MongoDB", "git", "EC2", "eslint", "prettier"],
        software: "Web",
        features: [
            {
                name:'Feature'
            }
        ],
        year: "2020",
        schema: "https://schema.org/DeveloperApplication",
        link: "http://recipes-client.s3-website.ap-south-1.amazonaws.com/",
        codeLink: "https://github.com/heartstchr/recipe",
        img: "/img/projects/recepie.gif",
        altText: "Recipes - Social Network | Recipes"
    },
    {
        name: "Tv maze",
        description: "TVmaze: Add TV information to your website or app.",
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Vite","Axios","API integration", "Responsive", "API integration", "MongoDB", "git", "EC2", "eslint", "prettier"],
        software: "Web",
        features: [
            {
                name:'Feature'
            }
        ],
        year: "2020",
        schema: "https://schema.org/DeveloperApplication",
        link: "https://heartstchr.github.io/tvmaze/",
        codeLink: "https://github.com/heartstchr/tvshows",
        img: "/img/projects/tvmaze.gif",
        altText: "TVmaze - Add TV information to your website or app. | Tv maze"
    },
    {
        name: "Catch That Bus",
        description: "Book Malaysia and Singapore bus tickets online.",
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Vite","Axios","API integration", "Responsive", "ExpressJS", "MongoDB", "git", "EC2",  "eslint", "prettier"],
        software: "Web",
        features: [
            {
                name:'Feature'
            }
        ],
        year: "2019",
        schema: "https://schema.org/DeveloperApplication",
        link: "https://m.catchthatbus.com",
        img: "/img/projects/catchthatbus.gif",
        altText: "Book Malaysia and Singapore bus tickets online. | CatchThatBus"
    },
    {
        name: "Trokka Attraction",
        description: "Book Attractions and Tours for Your Next Holiday",
        skills: ["Javascript", "ES6", "VueJs", "Vuex","Axios","API integration", "Responsive", "ExpressJS", "MongoDB", "git", "EC2"],
        software: "Web",
        features: [
            {
                name:'Feature'
            }
        ],
        year: "2019",
        schema: "https://schema.org/DeveloperApplication",
        link: "https://m.trokka.com/attraction",
        img: "/img/projects/trokka.gif",
        altText: "Trokka.com | Book Attractions and Tours for Your Next Holiday"
    },
    {
        name: "Partner Dashboard Upstox",
        description: "Open a sub-broker account with Upstox.",
        skills: ["AngularJS", "MongoDB", "MSSQL", "LoopbackJS"],
        software: "Web",
        features: [
            {
                name:'Feature'
            }
        ],
        year: "2018",
        schema: "https://schema.org/BusinessApplication",
        link: "https://upstox.com/sub-broker/",
        img: "/img/projects/partnerUpstox.png",
        altText: "Open a sub-broker account with Upstox."
    },
    {
        name: "Open Demat Account for Upstox",
        description: "Open a Demat Account Online: Demat Account Opening at Upstox",
        skills: ["AngularJS", "MongoDB", "MSSQL", "LoopbackJS","Digital Ocean"],
        software: "Web",
        features: [
            {
                name:'Feature'
            }
        ],
        year: "2017",
        schema: "https://schema.org/BusinessApplication",
        link: "https://upstox.com/open-demat-account/",
        img: "/img/projects/openDemat.png",
        altText: "Open a Demat Account Online: Demat Account Opening at Upstox"
    },
    
    {
        name: "CallMatrix",
        description: "Call Intelligence, Marketing, and Analytics Platform",
        skills: ["NodeJS", "MongoDB", "MSSQL", "HapiJS","Digital Ocean"],
        software: "Web",
        features: [
            {
                name:'Feature'
            }
        ],
        year: "2015",
        schema: "https://schema.org/BusinessApplication",
        link: "http://app.callmatrix.io/#/signup",
        img: "/img/projects/callmatrix.png",
        altText: "CallMatrix - Call Intelligence, Marketing, and Analytics Platform"
    },
    {
        name: "Command Line Dictionary",
        description: "CLI for Dictionary",
        software: "Terminal",
        year: "2020",
        skills: ["Inquirer", "Commander", "Plop", "Eslint", "Prettier"],
        schema: "https://schema.org/DeveloperApplication",
        codeLink: "https://github.com/heartstchr/dic",
        img: "/img/projects/dictionary.png",
        altText: "CLI for Dictionary"
    },
    {
        name: "Stock Market",
        description: "Consuming socket data and plotting a real-time D3 graph",
        skills: ["D3JS", "VueJS", "NodeJS"],
        software: "Web",
        features: [
            {
                name:'Feature'
            }
        ],
        year: "2016",
        schema: "https://schema.org/BusinessApplication",
        codeLink: "https://github.com/heartstchr/StockMarket",
        img: "/img/projects/stocks.png",
        altText: "Consuming socket data and plotting a real-time D3 graph"
    },
    {
        name: "Catch That Bus APP",
        description: "IOS app for booking Malaysia and Singapore bus tickets online",
        skills: ["Cordova", "Javascript", "ES6", "VueJs", "Vuex","Axios","API integration", "Responsive", "ExpressJS", "MongoDB", "git","eslint", "prettier"],
        software: "IOS APP",
        schema: "https://schema.org/DeveloperApplication",
        link: "https://apps.apple.com/my/app/catchthatbus/id1025824078",
        img: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",
        altText: "IOS app for booking Malaysia and Singapore bus tickets online | CatchThatBus"
    }
]
</script>
