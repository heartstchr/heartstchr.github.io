---
title: Projects
icon: discover
order: 2
---

<div class="flex flex-column gap-4">
    <div>I take pride in delivering innovative and impactful projects across various domains. Our dedication to excellence and our commitment to client satisfaction are reflected in every project we undertake.</div>
    <div>Here, you can explore some of my featured projects, which demonstrate my expertise and commitment to excellence. If you're looking for a professional to bring your vision to life, you're in the right place.</div>
</div>

<div class="grid mt-4">
  <div class="col-5 surface-card shadow-1 m-2 p-2" itemscope itemtype="https://schema.org/SoftwareApplication" v-for= "(project, index) in projects">
      <link itemprop="applicationCategory" :href="project.schema" />
      <a :href="project.link" class="portfolio-link" target="_blank">
          <img :src="project.img" class="" :alt="project.altText" width="100%"/>
      </a>
      <div class="text-md font-bold mt-4">
          <div itemprop="name">{{project.name}}</div> 
          <div class="text-xs mt-2" itemprop="operatingSystem">{{project.software}}</div>
      </div>
      <div class="mt-4">{{project.description}}</div>
      <div class="flex grid mt-4 p-2">
        <div v-for= "(part, i) in project.skills"> <div class="text-sm px-2 ml-2 mb-2 surface-100 border-round-xs line-height-3">{{part}}</div></div>
      </div>
  </div>
</div>

<script setup lang="ts">
    const projects= [
            {
                name: "Catch That Bus",
                description: "Book Malaysia and Singapore Bus Ticket Online",
                skills: ["Javascript", "ES6", "VueJs", "Vuex","Vite","Axios","API integration", "Responsive", "ExpressJS", "MongoDB", "git", "EC2",  "eslint", "prettier"],
                software: "Browser",
                schema: "https://schema.org/DeveloperApplication",
                link: "https://m.catchthatbus.com",
                img: "/img/portfolio/catchthatbus.gif",
                altText: "Book Malaysia and Singapore Bus Ticket Online | CatchThatBus"
            },
            {
                name: "Catch That Bus APP",
                description: "IOS app for booking Malaysia and Singapore Bus Ticket Online",
                skills: ["Cordova", "Javascript", "ES6", "VueJs", "Vuex","Axios","API integration", "Responsive", "ExpressJS", "MongoDB", "git","eslint", "prettier"],
                software: "IOS APP",
                schema: "https://schema.org/DeveloperApplication",
                link: "https://apps.apple.com/my/app/catchthatbus/id1025824078",
                img: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",
                altText: "Book Malaysia and Singapore Bus Ticket Online | CatchThatBus"
            },
            {
                name: "Trokka Attraction",
                description: "Book Attractions and Tours for Your Next Holiday",
                skills: ["Javascript", "ES6", "VueJs", "Vuex","Axios","API integration", "Responsive", "ExpressJS", "MongoDB", "git", "EC2"],
                software: "Browser",
                schema: "https://schema.org/DeveloperApplication",
                link: "https://m.trokka.com/attraction",
                img: "/img/portfolio/trokka.gif",
                altText: "Trokka.com | Book Attractions and Tours for Your Next Holiday"
            },
            {
                name: "klang Sentral",
                description: "Book Malaysia and Singapore Bus Ticket Online",
                software: "Browser",
                skills: ["NodeJS", "PHP"],
                schema: "https://schema.org/DeveloperApplication",
                link: "https://klangsentral.com/#/",
                img: "/img/portfolio/klang.gif",
                altText: "Book Malaysia and Singapore Bus Ticket Online | klangsentral"
            },
            {
                name: "Command Line Dictionary",
                description: "CLI for Dictionary",
                software: "TERMINAL",
                skills: ["inquirer", "commander", "plop", "eslint", "prettier"],
                schema: "https://schema.org/DeveloperApplication",
                link: "https://github.com/heartstchr/dic",
                img: "/img/portfolio/dictionary.png",
                altText: "CLI for Dictionary"
            },
            {
                name: "Partner Dashboard Upstox",
                description: "Open a Sub-Broker account with Upstox",
                skills: ["AngularJS", "MongoDB", "MSSQL", "LoopbackJS"],
                software: "Browser",
                schema: "https://schema.org/BusinessApplication",
                link: "https://upstox.com/sub-broker/",
                img: "/img/portfolio/partnerUpstox.png",
                altText: "Open a Sub-Broker account with Upstox"
            },
            {
                name: "Open Demat Account for Upstox",
                description: "Open a Demat Account Online - Demat Account Opening at Upstox",
                skills: ["AngularJS", "MongoDB", "MSSQL", "LoopbackJS","Digital Ocean"],
                software: "Browser",
                schema: "https://schema.org/BusinessApplication",
                link: "https://upstox.com/open-demat-account/",
                img: "/img/portfolio/openDemat.png",
                altText: "Open a Demat Account Online - Demat Account Opening at Upstox"
            },
            {
                name: "CallMatrix",
                description: "Call Intelligence, Marketing &amp; Analytics Platform",
                skills: ["NodeJS", "MongoDB", "MSSQL", "HapiJS","Digital Ocean"],
                software: "Browser",
                schema: "https://schema.org/BusinessApplication",
                link: "https://www.callmatrix.io/",
                img: "/img/portfolio/callmatrix.png",
                altText: "CallMatrix - Call Intelligence, Marketing &amp; Analytics Platform"
            },
            {
                name: "Stock Market",
                description: "Consuming socket data and plot realtime d3 graph",
                skills: ["D3JS", "AngularJS", "NodeJS"],
                software: "Browser",
                schema: "https://schema.org/BusinessApplication",
                link: "https://github.com/heartstchr/StockMarket",
                img: "/img/portfolio/stocks.png",
                altText: "Consuming socket data and plot realtime d3 graph"
            },
            {
                name: "Liqx App | Liqur delivery app",
                description: "UI design for liqur delivery app",
                skills: ["Photoshop", "CoralDraw"],
                software: "Photoshop",
                schema: "https://schema.org/BusinessApplication",
                link: "https://www.behance.net/gallery/74532693/Liqx",
                img: "/img/portfolio/liqx.png",
                altText: "UI design for liqur delivery app"
            },
        ]
</script>
