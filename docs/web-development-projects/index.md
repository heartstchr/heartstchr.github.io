---
title: Web Development Portfolio
description: Explore real-world web development projects crafted by Stack Seekers. From scalable SaaS apps to stunning websites, see how we build digital experiences that drive results. Freelance projects in custom web and app development, including booking platforms, dashboards, and analytics tools. Built with React, Node.js, and modern tech stacks.
order: 2
lastUpdated: false
editLink: false
copyright: false
---

<div class="flex flex-column gap-4 my-6 line-height-4">
  <div>
    Here, you’ll find a showcase of some of my organization and freelance
    projects, highlighting my expertise for creating meaningful digital
    experiences. These projects reflect my ability to turn ideas into reality,
    tailored to meet each client’s unique needs.
  </div>
  <div>
    If you’re searching for a professional who can bring your vision to life
    with precision and creativity, you’ve come to the right place.
  </div>
  <div>
    <a
      href="https://cal.com/stackseekers"
      size="large"
      color="deeppink"
      class="flex justify-content-center text-center no-underline mt-4"
    >
      <Button
        label="Build Your Vision with Us!"
        icon="pi pi-calendar-clock"
        severity="primary"
        raised
        rounded
      />
    </a>
  </div>
</div>

<!-- Vertical Tabs Navigation -->
<div class="p-d-flex p-flex-column p-mr-3">
      <div class="grid my-6 gap-8">
        <div
          class="vp-feature-item col-12 shadow-1 m-0 p-0"
          v-for="(project, index) in freelance"
          :id="project.name"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 120 1440 200">
            <path
              fill="#10b981"
              fill-opacity="0.1"
              d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,202.7C560,213,640,203,720,192C800,181,880,171,960,181.3C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
          <div>
            <div class="px-4">
              <h2 itemprop="name" class="text-4xl font-bold p-0 m-0" :id="project.name">
                {{project.name}}
              </h2>
            </div>
            <div
              class="flex md:flex-row flex-column"
              itemscope
              itemtype="https://schema.org/SoftwareApplication"
            >
              <div class="md:col-6 col-12 line-height-3 px-4">
                <div class="text-xl mt-2" itemprop="operatingSystem">
                  {{project.software}}
                  <span class="text-sm mt-2"> - {{project.domain}}</span>
                  <a class="text-sm mt-2 font-italic no-underline"
                    >({{project.year}})</a
                  >
                </div>
                <div class="my-2 text-xl">{{project.description}}</div>
                <div class="flex grid mt-4 px-2">
                  <Tag
                    style="
                      border: 2px solid var(--border-color);
                      background: transparent;
                      color: var(--text-color);
                    "
                    v-for="part in project.stack"
                    :key="part"
                    :value="part"
                    class="m-1"
                  >
                    <div class="flex items-center gap-2 px-1">
                        <img v-if="part" :src="`https://cdn.simpleicons.org/${part}`" :alt="part" style="width: 28px;" loading="lazy" fetchpriority="high"/>
                        <h3 class="text-base p-0 m-0 hidden">{{part}}</h3>
                    </div>
                  </Tag>
                  <Tag
                    style="
                      border: 2px solid var(--border-color);
                      background: transparent;
                      color: var(--text-color);
                    "
                    v-for="part in project.otherSkills"
                    :key="part"
                    :value="part"
                    class="m-1"
                  >
                    <div class="flex items-center gap-2 px-1">
                        <h4 class="text-base p-0 m-0">{{part}}</h4>
                    </div>
                  </Tag>
                </div>
              </div>
              <div class="md:col-6 col-12">
                <link itemprop="applicationCategory" :href="project.schema" />
                <div v-if="project.images">
                  <div class="card" v-if="project.images.length != 1">
                    <Galleria
                      :value="project.images"
                      :responsiveOptions="responsiveOptions"
                      :numVisible="5"
                      :circular="true"
                      :showItemNavigators="true"
                      :showThumbnails="false"
                      :pt="{
                        prevButton: { 'aria-label': 'Previous screen of project' },
                        nextButton: { 'aria-label': 'Next screen of project' }
                      }"
                    >
                      <template #item="slotProps">
                        <img
                          :src="slotProps.item.itemImageSrc"
                          :alt="slotProps.item.alt"
                          style="width: 100%; display: block"
                          loading="eager" fetchpriority="high"
                        />
                      </template>
                    </Galleria>
                  </div>
                  <div class="card" v-else>
                    <img
                      :src="project.images[0].itemImageSrc"
                      :alt="project.images[0].alt"
                      style="width: 100%; display: block"
                      loading="eager" fetchpriority="high"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-column px-4">
            <div class="flex flex-column mt-4 p-2" v-if="project.features">
              <h3 class="my-2 text-l">Features</h3>
              <ul class="my-2 ml-3 text-sm">
                <li v-for="feature in project.features" class="flex flex-row align-content-center">
                  <i class="pi pi-verified m-2 bg-primary" alt="arrow" style="font-size: 1rem;"></i>
                  <h4 class="m-2 text-sm">{{feature.name}}</h4>
                </li>
              </ul>
            </div>
            <div
              class="flex flex-row justify-content-between align-items-center gap-2"
            >
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="w-full flex flex-row no-underline my-4"
              >
                <Button
                  label="Demo"
                  icon="pi pi-angle-double-right"
                  severity="primary"
                  raised
                  rounded
                />
              </a>
              <a
                v-if="project.codeLink"
                :href="project.codeLink"
                target="_blank"
                class="w-full flex flex-row no-underline my-4"
              >
                <Button
                  label="Repo"
                  icon="pi pi-github"
                  severity="secondary"
                  raised
                  rounded
                />
              </a>
            </div>
          </div>
        </div>
      </div>
</div>

<script setup lang="ts">
  import { ref } from "vue";

  const images = ref();
  const responsiveOptions = ref([
    {
      breakpoint: "1300px",
      numVisible: 4,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ]);
  const freelance = [
    {
      name: "SR-22 Insurance Now",
      description:
        "Need a Cheap SR-22 Insurance? Compare & save on SR22 Insurance from top providers.",
      software: "Web",
      org: "Sr22InsuranceNow",
      year: "2025",
      domain: "Digital Marketing",
      schema: "https://schema.org/BusinessApplication",
      link: "https://sr22insurancenow.com/",
      features: [
        {name:"Campaign owners need fast, dynamic, and conversion-focused websites to maximize ROI from ad campaigns.",},
        {
          name: "Dynamic Landing Pages: Generated from a flexible JSON structure for quick deployment.",
        },
        {
          name: "Click-to-Call Ads: Location-based phone numbers to boost conversions.",
        },
        {
          name: "Auto-Complete Google Place API: Enhances user experience and reduces friction.",
        },
        {
          name: "Image Optimization: Ensures lightning-fast load speeds.",
        },
        {
          name: "Google Analytics Integration: Tracks performance for data-driven decisions.",
        },
        {
          name: "Custom Components: Built from scratch for full flexibility and scalability.",
        },
        {
          name: "Mobile Optimization & Accessibility: Ensures seamless experiences for all users.",
        },
        {name:"Dynamic Content: JSON-driven landing pages tailored for campaigns.",},
        {name:"Performance Optimization: WebP images and lazy loading for faster pages.",},
        {name:"SEO & Analytics: Designed to convert traffic into leads while tracking every interaction.",},
      ],
      stack: ["nextdotjs/black/white", "React","Nodedotjs", "JSON/black/white", "Axios/black/white", "npm", "pm2/black/white", "digitalocean", "lighthouse", "bitbucket"],
      otherSkills: ["SEO"],
      images: [
        {
          itemImageSrc: "/img/home/projects/sr22.webp",
          alt: "SR-22 insurance Now",
        },
        {
          itemImageSrc: "/img/projects/sr22/why_need_sr22.webp",
          alt: "why need sr22 insurance Now",
        },
        {
          itemImageSrc: "/img/projects/sr22/how_to_get_sr22.webp",
          alt: "how to get sr22 insurance Now",
        },
        {
          itemImageSrc: "/img/projects/sr22/landing_page.webp",
          alt: "Landing page sr22 insurance Now",
        },
        {
          itemImageSrc: "/img/projects/sr22/states_map.webp",
          alt: "states map sr22 insurance Now",
        },
        {
          itemImageSrc: "/img/projects/sr22/sr22_city.webp",
          alt: "sr22 city list",
        },
        {
          itemImageSrc: "/img/projects/sr22/auto_complete_zip_code.webp",
          alt: "auto complete zip code sr22 insurance Now",
        },
        {
          itemImageSrc: "/img/projects/sr22/render_json.webp",
          alt: "JSON reader for sr22 insurance Now",
        },
      ],
    },
    {
      name: "Momentum Incident Management",
      description:
        "A structured process for identifying, analyzing, and resolving incidents that disrupt an organization's operations",
      stack: ["vuedotjs", "PrimeVue", "vite/black/white", "tailwindcss", "nodedotjs", "express/black/white","pnpm", "swagger","mongodb","vercel/black/white", "Eslint","Prettier","github/black/white"],
      otherSkills:["Pinia", "vee-validate"],
      software: "Web",
      org: "Momentum",
      year: "2025",
      domain: "IT Service",
      schema: "https://schema.org/BusinessApplication",
      link: "https://momentum-chi-brown.vercel.app/",
      features:[
        {name :"No More Clunky UI – Nested tables & column-based filtering (text, date, select) make incident tracking effortless.",},
        {name :"Nested CRUD for Incidents & Tasks – Create, update, and manage tasks seamlessly, with an option to add notes.",},
        {name :"Choose & Create CIs – Define and manage configuration items with ease.",},
        {name :"Automate with Swagger APIs – Ready for CI/CD pipelines, making integrations a breeze.",},
        {name :"Seamless Deployment – Frontend & backend deployed on Vercel for high performance.",},
        {name :"MongoDB Seeding – Easily set up initial data for a smooth start.",},
        {name :"Swagger Documentation – Well-documented APIs for easy collaboration and scaling.",},
        {name :"No Costly Subscriptions – A powerful alternative to expensive service management platforms",},
      ],
      images: [
        {
          itemImageSrc: "/img/home/projects/momentum_incident_management.webp",
          alt: "Incident Management",
        },
        {
          itemImageSrc: "/img/projects/momentum/swagger.webp",
          alt: "Incident Management swagger api docs",
        },
        {
          itemImageSrc: "/img/projects/momentum/expanded_incident.webp",
          alt: "Incident Management expanded incident",
        },
        {
          itemImageSrc: "/img/projects/momentum/sorting_searching.webp",
          alt: "Incident Management sorting searching",
        },{
          itemImageSrc: "/img/projects/momentum/download_incidents.webp",
          alt: "Incident Management download incidents",
        },{
          itemImageSrc: "/img/projects/momentum/incident_notes_task.webp",
          alt: "Incident Management incident notes,task",
        },
        {
          itemImageSrc: "/img/projects/momentum/edit_notes.webp",
          alt: "Incident Management edit notes",
        },
        {
          itemImageSrc: "/img/projects/momentum/view_notes.webp",
          alt: "Incident Management view notes",
        },
        {
          itemImageSrc: "/img/projects/momentum/edit_task.webp",
          alt: "Incident Management edit task",
        },
        {
          itemImageSrc: "/img/projects/momentum/edit_incident.webp",
          alt: "Incident Management edit incident",
        },
        {
          itemImageSrc: "/img/projects/momentum/login.webp",
          alt: "Incident Management Login",
        },
        {
          itemImageSrc: "/img/projects/momentum/register.webp",
          alt: "Incident Management register",
        },
      ],
    },
    {
      name: "Tech Create",
      description: "A landing page for tech ",
      stack: ["Vuedotjs", "PrimeVue","CSS3", "vercel/black/white", "Eslint",
        "Prettier","github/black/white"],
      software: "Web",
      org: "LV",
      year: "2025",
      domain: "IT Service",
      schema: "https://schema.org/BusinessApplication",
      link: "https://techcreate.vercel.app/",
      features:[
        {name:"Responsive Design: Seamless experience across devices.",},
        {name:"Component-Based Architecture: Efficient and scalable codebase.",},
        {name:"Modern UI/UX: Clean aesthetics with intuitive navigation",},
      ],
      images: [
        {
          itemImageSrc: "/img/home/projects/tech_create.webp",
          alt: "landing page for tech",
        },
      ],
    },
    {
      name: "Qatar Airways widget",
      description:
        "Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more.",
      stack: [
        "Javascript",
        "Vuedotjs",
        "Vite/black/white",
        "Axios/black/white",
        "Express/black/white",
        "MongoDB",
        "Git",
        "amazonec2",
        "Eslint",
        "Prettier",
        "github/black/white"
      ],
      otherSkills:["Landingi","Pinia","API integration",],
      software: "Web",
      features: [
        {
          name: "Widget for Flight Booking",
        },
        {
          name: "Widget for Flight + Hotel Booking",
        },
        {
          name: "Widget for Transfer Booking",
        },
        {
          name: "Use widget with any CMS Platform like Landingi",
        },
      ],
      org: "TUI",
      year: "2021",
      domain: "Leisure, travel, and tourism",
      schema: "https://schema.org/DeveloperApplication",
      link: "https://holidays.qatarairways.com/en-in/avios",
      images: [
        {
          itemImageSrc: "/img/projects/quatar/placeholder.webp",
          alt: "Quatar Airways",
        },
        {
          itemImageSrc: "/img/projects/quatar/qutar_airways.webp",
          alt: "Quatar Airways",
        },
        {
          itemImageSrc: "/img/projects/quatar/thumbnail.webp",
          alt: "Quatar Airways",
        },
        {
          itemImageSrc: "/img/projects/quatar/quatar.webp",
          alt: "Quatar Airways",
        },
      ],
    },
    {
      name: "Recipes",
      description: "Recipes: Social Network",
      stack: [
        "Javascript",
        "Vuedotjs",
        "quasar/black/white",
        "Vite",
        "Axios",
        "Express/black/white",
        "MongoDB",
        "Git",
        "amazonec2",
        "Eslint",
        "Prettier",
      ],
      otherSkills:["Pinia","API integration",],
      software: "Web",
      features: [
        {
          name: "Authentication with Incognigo pool",
        },
        {
          name: "Create and Share recipes with friends",
        },
        {
          name: "Search recipes",
        },
        {
          name: "List and share your recipes direction or ingradients",
        },
        {
          name: "Rate and review for recipe",
        },
      ],
      org: "Momentum",
      year: "2020",
      domain: "Food Blogging",
      schema: "https://schema.org/DeveloperApplication",
      link: "http://recipes-client.s3-website.ap-south-1.amazonaws.com/",
      codeLink: "https://github.com/heartstchr/recipe",
      images: [
        {
          itemImageSrc: "/img/home/projects/Recipe.webp",
          alt: "Recipes - Login page | Recipes",
        },
        {
          itemImageSrc: "/img/projects/recipe/login.webp",
          alt: "Recipes - Login page | Recipes",
        },
        {
          itemImageSrc: "/img/projects/recipe/register.webp",
          alt: "Recipes - Register page | Recipes",
        },
        {
          itemImageSrc: "/img/projects/recipe/home.webp",
          alt: "Recipes - Home page | Recipes",
        },
        {
          itemImageSrc: "/img/projects/recipe/direction.webp",
          alt: "Recipes - Directions page | Recipes",
        },
        {
          itemImageSrc: "/img/projects/recipe/ingredients.webp",
          alt: "Recipes - Ingredients page | Recipes",
        },
        {
          itemImageSrc: "/img/projects/recipe/addrecipe.webp",
          alt: "Recipes - Add Recipe page | Recipes",
        },
        {
          itemImageSrc: "/img/projects/recipe/search.webp",
          alt: "Recipes - Search page | Recipes",
        },
        {
          itemImageSrc: "/img/projects/recipe/share.webp",
          alt: "Recipes - Share screen | Recipes",
        },
      ],
    },
    {
      name: "Tv Maze",
      description: "TVmaze: Add TV information to your website or app.",
      stack: [
        "Javascript",
        "Vuedotjs",
        "Quasar/black/white",
        "Axios",
        "Git",
        "amazonec2",
        "Eslint",
        "Prettier",
      ],
      otherSkills:[ "Vuex","API integration",],
      software: "Web",
      features: [
        {
          name: "Popular Tv shows sorted based on rating",
        },
        {
          name: "Tv shows based on genre",
        },
        {
          name: "Search Tv shows",
        },
        {
          name: "Details Tv shows",
        },
        {
          name: "Episodes, cast and crew of a Tv shows",
        },
      ],
      org: "Freelance",
      year: "2020",
      domain: "Entertainment",
      schema: "https://schema.org/DeveloperApplication",
      link: "https://heartstchr.github.io/tvmaze/",
      codeLink: "https://github.com/heartstchr/tvshows",
      images: [
        {
          itemImageSrc: "/img/home/projects/tvmaze.webp",
          alt: "TVmaze - Home page. | Tv maze",
        },
        {
          itemImageSrc: "/img/projects/tvmaze/home.webp",
          alt: "TVmaze - Home page. | Tv maze",
        },
        {
          itemImageSrc: "/img/projects/tvmaze/search.webp",
          alt: "TVmaze - . Search page| Tv maze",
        },
        {
          itemImageSrc: "/img/projects/tvmaze/episodes.webp",
          alt: "TVmaze - Episodes tab. | Tv maze",
        },
        {
          itemImageSrc: "/img/projects/tvmaze/cast.webp",
          alt: "TVmaze - Cast tab. | Tv maze",
        },
        {
          itemImageSrc: "/img/projects/tvmaze/genres.webp",
          alt: "TVmaze - Genres. | Tv maze",
        },
      ],
    },
    {
      name: "Trokka Attraction",
      description: "Book Attractions and Tours for Your Next Holiday",
      stack: [
        "Javascript",
        "VuedotJs",
        "Axios/black/white",
        "Express/black/white",
        "MongoDB",
        "Git",
        "amazonEC2",
        "Eslint","Prettier","github/black/white"
      ],
      otherSkills:["Vuex","API integration",],
      software: "Web",
      features: [
        {
          name: "Show Tours and Attraction of Malaysia",
        },
        {
          name: "Popular activities based on rating and demand",
        },
        {
          name: "Activities and details based on location",
        },
        {
          name: "Book and share attractions with other people",
        },
        {
          name: "Discount system based on promo code",
        },
        {
          name: "Payment system using Boost wallet and other payment methods",
        },
        {
          name: "Custom CMS backend system to add, update, and delete tours and attractions",
        },
      ],
      org: "Catch That Bus",
      year: "2019",
      domain: "Leisure, travel, and tourism",
      schema: "https://schema.org/DeveloperApplication",
      link: "https://m.trokka.com/attraction",
      images: [
        {
          itemImageSrc: "/img/projects/trokka.webp",
          alt: "Trokka.com | Book Attractions and Tours for Your Next Holiday",
        },
      ],
    },
    {
      name: "Catch That Bus",
      description: "Book Malaysia and Singapore bus tickets online.",
      stack: [
        "Javascript",
        "VuedotJs",
        "Axios/black/white",
        "Express/black/white",
        "MongoDB",
        "Git",
        "amazonec2",
        "Eslint","Prettier","github/black/white"
      ],
      otherSkills:["Vuex","API integration","Cordova",],
      software: "Web / IOS APP",
      features: [
        {
          name: "Search for a bus by choosing from the destination and to the destination in Malaysia for dates.",
        },
        {
          name: "Sort and filter on available buses",
        },
        {
          name: "Seat visualization of a bus",
        },
        {
          name: "Booking system to handle concurrent requests",
        },
        {
          name: "Discount system based on coupon code",
        },
        {
          name: "Insurance integration for travellers",
        },
        {
          name: "Payment system using wallets and cards",
        },
        {
          name: "Webview for Boost wallet",
        },
        {
          name: "Multiple language support",
        },
        {
          name: "Multiple Currency support",
        },
        {
          name: "Bus Booked history",
        },
        {
          name: "Bus onboarding system for admin and bus operator",
        },
      ],
      org: "Catch That Bus",
      year: "2019",
      domain: "Leisure, travel, and tourism",
      schema: "https://schema.org/DeveloperApplication",
      // link: "https://m.catchthatbus.com",
      iosLink: "https://apps.apple.com/my/app/catchthatbus/id1025824078",
      images: [
        {
          itemImageSrc: "/img/projects/catchthatbus.webp",
          alt: "Book Malaysia and Singapore bus tickets online. | CatchThatBus",
        },
        {
          itemImageSrc:
            "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",
          alt: "IOS app for booking Malaysia and Singapore bus tickets online | CatchThatBus",
        },
      ],
    },
    {
      name: "Partner Dashboard Upstox",
      description: "Open a sub-broker account with Upstox.",
      stack: ["Angular/black/white", "MongoDB", "mysql", "loopback", "npm", "Eslint","Prettier","github/black/white"],
      otherSkills:[],
      software: "Web",
      features: [
        {
          name: "Refer and earn program",
        },
        {
          name: "Track lead referred",
        },
        {
          name: "Ambassador program",
        },
        {
          name: "Royalty program",
        },
        {
          name: "Track customer referred",
        },
        {
          name: "Dashboard to show earnings based on the program",
        },
        {
          name: "Search by name and UCC",
        },
        {
          name: "Earning report based on the customer trade",
        },
      ],
      org: "Upstox",
      year: "2018",
      domain: "Fintech",
      schema: "https://schema.org/BusinessApplication",
      link: "https://upstox.com/sub-broker/",
      images: [
        {
          itemImageSrc: "/img/projects/partnerUpstox/partnerUpstox.webp",
          alt: "Open a sub-broker account with Upstox.",
        },
        {
          itemImageSrc: "/img/projects/partnerUpstox/dashboard.webp",
          alt: "Open a sub-broker account with Upstox.",
        },
        {
          itemImageSrc: "/img/projects/partnerUpstox/leads.webp",
          alt: "Open a sub-broker account with Upstox.",
        },
        {
          itemImageSrc: "/img/projects/partnerUpstox/customer.webp",
          alt: "Open a sub-broker account with Upstox.",
        },
        {
          itemImageSrc: "/img/projects/partnerUpstox/earning.webp",
          alt: "Open a sub-broker account with Upstox.",
        },
      ],
    },
    {
      name: "Open Demat Account for Upstox",
      description:
        "Open a Demat Account Online: Demat Account Opening at Upstox",
      stack: ["Angular/black/white", "MongoDB", "mysql", "loopback", "npm", "Eslint","Prettier","github/black/white"],
      otherSkills:[],
      software: "Web",
      features: [
        {
          name: "Open a Demat account with document upload.",
        },
        {
          name: "PAN, Aadhar, IPV, and cancelled check verification",
        },
        {
          name: "Lead to CRM system",
        },
        {
          name: "Scrutiny of lead",
        },
        {
          name: "Upload details to NSE, BSE, and MCX",
        },
        {
          name: "Report based on the flow of lead",
        },
      ],
      org: "Upstox",
      year: "2017",
      domain: "Fintech",
      schema: "https://schema.org/BusinessApplication",
      link: "https://upstox.com/open-demat-account/",
      images: [
        {
          itemImageSrc: "/img/projects/openDemat.webp",
          alt: "Open a Demat Account Online: Demat Account Opening at Upstox",
        },
      ],
    },
    {
      name: "Call Matrix",
      description: "Call Intelligence, Marketing, and Analytics Platform",
      stack: ["Angular/black/white","Nodedotjs","d3", "MongoDB", "MySQL", "Express/black/white","googleads","googlesheets", "twilio","DigitalOcean"],
      otherSkills:[""],
      software: "Web",
      features: [
        {
          name: "Create a campaign for the call",
        },
        {
          name: "Create a bundle of campaigns for the call",
        },
        {
          name: "Buy local & toll-free numbers",
        },
        {
          name: "Call Recording and Off-Hour Call Handling",
        },
        {
          name: "Funnel to redirect the call based on the multi-level IVR",
        },
        {
          name: "Report of bundle, CDR, and offer based on hour, week, and geolocation",
        },
        {
          name: "Dashboard to get a birds-eye view",
        },
        {
          name: "Google AdWords API integration",
        },
        {
          name: "User authorization based on role",
        },
      ],
      org: "Mobistreak",
      year: "2015",
      domain: "Digital Marketing",
      schema: "https://schema.org/BusinessApplication",
      link: "https://callmatrix.io/",
      images: [
        {
          itemImageSrc: "/img/projects/callmatrix/callmatrix.webp",
          alt: "CallMatrix - Call Intelligence, Marketing, and Analytics Platform",
        },
        {
          itemImageSrc: "/img/projects/callmatrix/mobistreak.webp",
          alt: "CallMatrix - Call Intelligence, Marketing, and Analytics Platform",
        },
      ],
    },
    {
      name: "Command Line Dictionary",
      description: "CLI for Dictionary",
      software: "Terminal",
      features: [
        {
          name: "Create help command for available commands",
        },
        {
          name: "Definition of a word",
        },
        {
          name: "Synonyms and antonyms of a word",
        },
        {
          name: "Get example sentence from a word",
        },
        {
          name: "Get word of the day",
        },
        {
          name: "Play word game",
        },
      ],
      org: "Freelance",
      year: "2020",
      domain: "Ed Tech",
      stack: ["npm", "Eslint", "Prettier"],
      otherSkills:["Inquirer", "Commander", "Plop",],
      schema: "https://schema.org/DeveloperApplication",
      codeLink: "https://github.com/heartstchr/dic",
      images: [
        {
          itemImageSrc: "/img/projects/dictionary.webp",
          alt: "CLI for Dictionary",
        },
      ],
    },
    {
      name: "Stock Market",
      description: "Consuming socket data and plotting a real-time D3 graph",
      stack: ["Socket.io/black/white","d3", "angular/black/white", "NodedotJS", "gulp", "Eslint","Prettier","github/black/white"],
      software: "Web",
      features: [
        {
          name: "Show realtime charts of a unit",
        },
        {
          name: "Show history of a unit in charts",
        },
      ],
      org: "Freelance",
      year: "2016",
      domain: "FinTech",
      schema: "https://schema.org/BusinessApplication",
      codeLink: "https://github.com/heartstchr/StockMarket",
      images: [
        {
          itemImageSrc: "/img/projects/stocks.webp",
          alt: "Consuming socket data and plotting a real-time D3 graph",
        },
      ],
    },
  ];
</script>
