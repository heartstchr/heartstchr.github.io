---
title: Projects
icon: discover
order: 2
---


<div>
    <p>I take pride in delivering innovative and impactful projects across various domains. Our dedication to excellence and our commitment to client satisfaction are reflected in every project we undertake.</p>
    <p>Here, you can explore some of my featured projects, which demonstrate my expertise and commitment to excellence. If you're looking for a professional to bring your vision to life, you're in the right place.</p>
</div>

<div class="container">
  <div class="col-6 portfolio-item column" itemscope itemtype="https://schema.org/SoftwareApplication" v-for= "(project, index) in projects">
      <link itemprop="applicationCategory" :href="project.schema" />
      <a :href="project.link" class="portfolio-link" target="_blank">
          <img :src="project.img" class="img-responsive"
              alt="{{project.altText}}">
      </a>
      <div class="appTitle">
          <span itemprop="name">{{project.name}}</span> | <span class="blue"
              itemprop="operatingSystem">{{project.software}}</span>
      </div>
      <div>{{project.description}}</div>
      <div class="surface-50" v-for= "(part, i) in project.skills">{{part}}</div>
  </div>
</div>

<script>
  export default {
    data: () => ({
        projects: [
            {
                name: "Catch That Bus",
                description: "Book Malaysia and Singapore Bus Ticket Online",
                skills: ["VueJs", "Vuex"],
                software: "Browser",
                schema: "https://schema.org/DeveloperApplication",
                link: "https://m.catchthatbus.com",
                img: "/img/portfolio/catchthatbus.gif",
                altText: "Book Malaysia and Singapore Bus Ticket Online | CatchThatBus"
            },
            {
                name: "Trokka Attraction",
                software: "Browser",
                schema: "https://schema.org/DeveloperApplication",
                link: "https://m.trokka.com/attraction",
                img: "/img/portfolio/trokka.gif",
                altText: "Trokka.com | Book Attractions and Tours for Your Next Holiday"
            },
            {
                name: "CatchThatBus APP",
                software: "IOS APP",
                schema: "https://schema.org/DeveloperApplication",
                link: "https://apps.apple.com/my/app/catchthatbus/id1025824078",
                img: "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",
                altText: "Book Malaysia and Singapore Bus Ticket Online | CatchThatBus"
            },
            {
                name: "klang Sentral",
                software: "Browser",
                schema: "https://schema.org/DeveloperApplication",
                link: "https://klangsentral.com/#/",
                img: "/img/portfolio/klang.gif",
                altText: "Book Malaysia and Singapore Bus Ticket Online | klangsentral"
            },
            {
                name: "Command Line Dictionary",
                software: "TERMINAL",
                schema: "https://schema.org/DeveloperApplication",
                link: "https://github.com/heartstchr/dic",
                img: "/img/portfolio/dictionary.png",
                altText: "CLI for Dictionary"
            },
            {
                name: "Partner Dashboard Upstox",
                software: "Browser",
                schema: "https://schema.org/BusinessApplication",
                link: "https://upstox.com/sub-broker/",
                img: "/img/portfolio/partnerUpstox.png",
                altText: "Open a Sub-Broker account with Upstox"
            },
            {
                name: "Open Demat Account for Upstox",
                software: "Browser",
                schema: "https://schema.org/BusinessApplication",
                link: "https://upstox.com/open-demat-account/",
                img: "/img/portfolio/openDemat.png",
                altText: "Open a Demat Account Online - Demat Account Opening at Upstox"
            },
            {
                name: "CallMatrix",
                software: "Browser",
                schema: "https://schema.org/BusinessApplication",
                link: "https://www.callmatrix.io/",
                img: "/img/portfolio/callmatrix.png",
                altText: "CallMatrix - Call Intelligence, Marketing &amp; Analytics Platform"
            },
            {
                name: "Stock Market",
                software: "Browser",
                schema: "https://schema.org/BusinessApplication",
                link: "https://github.com/heartstchr/StockMarket",
                img: "/img/portfolio/stocks.png",
                altText: "Consuming socket data and plot realtime d3 graph"
            },
            {
                name: "Liqx App | Liqur delivery app",
                software: "Photoshop",
                schema: "https://schema.org/BusinessApplication",
                link: "https://www.behance.net/gallery/74532693/Liqx",
                img: "/img/portfolio/liqx.png",
                altText: "UI design for liqur delivery app"
            },
        ]
    })
  }
</script>
<style>
    .appTitle{
        margin-bottom:10px;
        font-size: 1.2em;
        font-weight: bold;
    }
    blockquote {
        margin-bottom:100px;
    }
    .portfolio-link img{
        width:100%;
    }
    .portfolio-item {
        padding:20px;
        box-shadow: 0 1px 6px 0 #20212451;
        border-radius: 4px;
        margin-bottom: 30px;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 20px;
        width: 100%;
        margin: 20px auto;
    }

    .column {
        padding: 20px;
    }
</style>