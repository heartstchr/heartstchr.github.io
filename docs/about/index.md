---
title: Who We Are | Full-stack web app developer
description: Stack Seekers is a web development agency committed to delivering custom digital solutions for startups and enterprises. Meet our team and explore the values behind our success. Full-stack developer for hire, specializing in development of custom websites, Figma to web, and web applications in JavaScript, React.js, Next.js, Node.js, & more.
order: 4
editLink: false
copyright: false
---

<div class="my-6 ">
  <h2 class="text-4xl font-bold"> I am a freelance professional.</h2>
  <div class="flex md:flex-row flex-column flex-column-reverse md:align-items-start line-height-3">
    <div class="md:col-6 col-12">
      <h3 class="my-4 text-md"> Diverse skill set and a passion for continuous exploration and creativity.</h3>
      <div class="my-4 text-md">
      With extensive experience in full-stack development, I excel in both <a href="#Frontend Technologies" class="no-underline">frontend technologies</a> and <a href="#Backend Technologies" class="no-underline">backend</a>, making significant contributions to various <a href="/web-development-projects/" class="no-underline">projects</a> within the tech industry.</div>
      <div class="my-4 text-md">
      My expertise spans all stages of agile software development, from planning and implementation to testing, monitoring, and delivery.</div>
      <div class="my-4 text-md">
      You might know me as <span class="my-4 font-italic">heartstchr/Jiwanghosal</span> on various platforms.</div>
    </div>
    <div class="md:col-6 col-12 h-30rem overflow-hidden image-box">
      <Image :src="`/img/about/about_jiwanghosal.webp`" width="100%" />
    </div>
  </div>
</div>

<div class="my-6 flex md:flex-row flex-column ">
  <div class="col-12 line-height-3">
    <h2 class="my-4 text-4xl font-bold">I will simplify the steps for you</h2>
    <h3 class="my-4 text-md">My mission is to make the whole process much easier and understandable for you</h3>
    <div class="my-4 text-md">I simplify the steps to launching a digital application minus the lingo and hype so you can get on with living the life you envisioned.</div>
    <div class="my-4 text-md">You'll finally gain the clarity and confidence you need.</div>
  </div>
</div>
<div class="my-6 flex md:flex-row flex-column ">
  <div class="col-12 line-height-3">
    <h2 class="my-4 text-4xl font-bold">Highlights of My Journey</h2>
    <div>
      <h3 class="my-4 text-2xl text-md">Participant at the JS world conference, Amsterdam. </h3>
      <div class="col-12 overflow-hidden image-box">
        <Image :src="`/img/about/amsterdamConference.webp`" width="100%" />
      </div>
      <div class="my-4 text-md">In 2023, I had the privilege of participating in the renowned JS world conference Amsterdam, where I contributed to discussions on cutting-edge technologies, VueJs, Pinia, including micro-frontend and modern application architectures.</div>
      <h3 class="my-4 text-2xl text-md">Participant at NSE Future Tech hackathon, India.</h3>
      <div class="col-12 overflow-hidden image-box">
        <Image :src="`/img/about/nseHackathon.webp`" width="100%" />
      </div>
      <div class="my-4 text-md">At NSE Hackathon, our team reached the top 7 finalists, showcasing innovative problem-solving skills and pushing the boundaries of creative technology development.</div>
    </div>
  </div>
</div>
<!-- Skills -->
<div class="my-6" id="stack">
  <div class="text-center pb-4">
    <h2 class="text-4xl font-bold">Stack</h2>
    <div class="my-4 text-xl line-height-3">Technologies and development tools I regularly use for building modern, high-performance web applications.</div>
  </div>
  <div class="flex flex-wrap gap-4">
    <div v-for="(category, key) in technologies" :key="key" class='grid md:col-6' 
    :class="[{ 'md:col-12' : key === 'otherTools' }]" :id="category.title">
      <div class="shadow-1 border-round-md vp-feature-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <div class="px-2 gap-2">
          <h3 class="text-2xl font-bold p-0 m-0">{{ category.title }}</h3>
          <div v-for="(subheading, subKey) in category.subheadings" :key="subKey" class="p-2">
            <div class="text-xl m-2">{{ subheading.title }}</div>
            <div class="p-1">
              <Tag style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color)" v-for="tech in subheading.technologies" :key="tech.name"
                :value="tech.name" class="m-1">
                <div class="flex items-center gap-2 px-1">
                    <img v-if="tech.logoUrl" :src="`https://cdn.simpleicons.org/${tech.logoUrl}`" style="width: 20px;" loading="eager" fetchpriority="high"/>
                    <i v-else class="pi pi-cog" style="font-size: 1rem"></i>
                    <h4 class="text-base p-0 m-0">{{tech.name}}</h4>
                </div>
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Certificate -->
<div class="my-6" id="stack">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <div class="text-center pb-4">
    <h2 class="text-4xl font-bold">Certificate of Achievement</h2>
  </div>
  <div class="flex flex-wrap gap-4 p-4">
      <Galleria :value="certificate.images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" :showItemNavigators="true" :showThumbnails="false" :pt="{
        prevButton: { 'aria-label': 'Previous image' },
        nextButton: { 'aria-label': 'Next image' }
      }">
          <template #item="slotProps">
              <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" loading="eager" fetchpriority="high" />
          </template>
          <template #thumbnail="slotProps">
              <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" loading="eager" fetchpriority="high"/>
          </template>
      </Galleria>
      <img src="/img/about/JiwanGhosalMicrosoftAz900.webp" width="100%" loading="eager" fetchpriority="high"/>
  </div>
</div>

<div class="my-6">
  
</div>

<!-- Contact Me -->
<div class="border-round-md vp-feature-item" id="contact">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <div>
    <div class="text-center px-4">
      <h2 class="text-4xl font-bold p-0 m-0">A Little More About Me</h2>
      <div class="my-4 text-md line-height-3">When I’m not coding, I enjoy creating tech tutorials for my YouTube channel <a href="https://www.youtube.com/@stackseekers" target="_blank" class="no-underline">Stack Seekers</a>, exploring the latest in mobile technology, and <a href="https://www.youtube.com/@JiwanGhosal" target="_blank" class="no-underline">traveling</a> to discover new cultures and ideas.</div>
    </div>
    <div class="text-center py-4">
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <h3 class="mx-4 text-center text-xl line-height-3 p-0 m-0">
      Ready to turn your vision into reality? Let’s discuss how I can help you achieve your goals.
    </h3>
    <div class="my-4">
      <a href="mailto:jiwan.cse@gmail.com?subject=Make%20it%20for%20me" size="large" color="deeppink" class="flex justify-content-center text-center no-underline" aria-label="Send an Email"> 
        <Button label="Make It Happen!" icon="pi pi-briefcase" severity="primary" raised rounded />
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="-mb-2"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
</div>

<script setup lang="ts">
  import { ref } from "vue";
  const certificate = ref([
    {
        name: "certificate",
        images: [
                {
                    itemImageSrc: '/img/about/JiwanGhosalMicrosoftAz900.webp',
                    thumbnailImageSrc: '/img/about/JiwanGhosalMicrosoftAz900.webp',
                    alt: 'Jiwan Ghosal Microsoft Az900',
                    title: 'Jiwan Ghosal Microsoft Az900'
                },
                {
                    itemImageSrc: '/img/about/connectedManager.webp',
                    thumbnailImageSrc: '/img/about/connectedManager.webp',
                    alt: 'Connected Manager',
                    title: 'Connected Manager'
                },
            ],
    }])
  const responsiveOptions = ref([
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
  const technologies = {
  frontend: {
    title: "Frontend Technologies",
    subheadings: {
      frameworks_and_libraries: {
        title: "Frameworks and Libraries",
        technologies: [
          { name: "React", logoUrl: "react" },
          { name: "Next.js", logoUrl: "nextdotjs/black/white" },
          { name: "Vue.js", logoUrl: "vuedotjs" },
          { name: "Nuxt.js", logoUrl: "nuxt" },
          { name: "Ant Design", logoUrl: "antdesign" },
          { name: "Primevue", logoUrl: "primevue" },
          { name: "Shadcn", logoUrl: "shadcnui/black/white" },
          { name: "Quasar", logoUrl: "quasar/black/white" },
        ]
      },
      styling: {
        title: "Styling Tools",
        technologies: [
          { name: "Tailwind CSS", logoUrl: "tailwindcss" },
          { name: "PrimeFlex", logoUrl: "primefaces" },
          { name: "Bootstrap", logoUrl: "bootstrap" },
          { name: "Material-UI", logoUrl: "mui" },
        ]
      },
      stateManagement: {
        title: "State Management",
        technologies: [
          { name: "Pinia", logoUrl: "" },
          { name: "Redux", logoUrl: "" },
          { name: "vuex", logoUrl: "" },
        ]
      },
      buildTools: {
        title: "Build Tools",
        technologies: [
          { name: "Vite", logoUrl: "vite" },
          { name: "Rollup", logoUrl: "rollupdotjs" },
          { name: "Webpack", logoUrl: "webpack" },
        ]
      },
      testing: {
        title: "Testing",
        technologies: [
          { name: "Jest", logoUrl: "jest" },
          { name: "Testcafe", logoUrl: "testcafe" },
          { name: "Playwright", logoUrl: "" },
          { name: "Lighthouse", logoUrl: "lighthouse" },
        ]
      }
    }
  },
  backend: {
    title: "Backend Technologies",
    subheadings: {
      languages_and_frameworks: {
        title: "Languages and Frameworks",
        technologies: [
          { name: "Node.js", logoUrl: "nodedotjs" },
          { name: "Express.js", logoUrl: "express/black/white" },
        ]
      },
      microservices_and_apis: {
        title: "APIs",
        technologies: [
          { name: "RESTful API", logoUrl: "swagger" },
          { name: "Web Socket", logoUrl: "socketdotio/black/white" },
          { name: "GraphQL", logoUrl: "graphql" }
        ]
      }
    }
  },
  database: {
    title: "Databases",
    subheadings: {
      languages_and_frameworks: {
        title: "",
        technologies: [
          { name: "MySQL", logoUrl: "mysql" },
          { name: "PostgreSQL", logoUrl: "postgresql" },
          { name: "DynamoDB", logoUrl: "amazondynamodb" },
          { name: "Firebase", logoUrl: "firebase" },
          { name: "Prisma", logoUrl: "prisma" },
          { name: "MongoDB", logoUrl: "mongodb" },
        ]
      },
    }
  },
  deployment: {
    title: "Deployments",
    subheadings: {
      web_hosting: {
        title: "Web Hosting",
        technologies: [
          { name: "Vercel", logoUrl: "vercel/black/white" },
          { name: "Netlify", logoUrl: "netlify" },
          { name: "Heroku", logoUrl: "heroku" },
          { name: "Github pages", logoUrl: "githubpages/black/white" },
          { name: "Azure", logoUrl: "" },
          { name: "AWS", logoUrl: "awslambda" },
        ]
      },
      CI_CD: {
        title: "CI/CD",
        technologies: [
          { name: "Github Action", logoUrl: "githubactions" },
          { name: "Azure Devops", logoUrl: "" },
          { name: "GitLab CI/CD", logoUrl: "gitlab" },
          { name: "Jenkins", logoUrl: "jenkins" },
        ]
      },
    }
  },
  otherTools: {
    title: "OtherTools",
    subheadings: {
      version_control: {
        title: "Version control",
        technologies: [
          { name: "GitHub", logoUrl: "github/black/white" },
          { name: "GitLab", logoUrl: "gitlab" },
          { name: "Bitbucket", logoUrl: "bitbucket" },
          { name: "Azure Devops", logoUrl: "" },
        ]
      },
      package_manager: {
        title: "Package managers",
        technologies: [
          { name: "npm", logoUrl: "npm" },
          { name: "yarn", logoUrl: "yarn" },
          { name: "pnpm", logoUrl: "pnpm" },
          { name: "bun", logoUrl: "bun/black/white" },
        ]
      },
      code_quality: {
        title: "Code Quality",
        technologies: [
          { name: "ESLint", logoUrl: "eslint" },
          { name: "Prettier", logoUrl: "prettier" },
          { name: "Sonarqube", logoUrl: "sonarqube" },
        ]
      },
      collaboration: {
        title: "Collaboration",
        technologies: [
          { name: "Jira", logoUrl: "jira" },
          { name: "Trello", logoUrl: "trello" },
          { name: "Slack", logoUrl: "slack" },
          { name: "Teams", logoUrl: "team" },
        ]
      },
    }
  }
};

const getIcon = (logoUrl) => {
  // Placeholder logic for dynamic icon rendering. Replace this with your logic.
  return logoUrl ? 'pi pi-cog' : null;
};
  
  const social= [
    { label: 'Linkedin', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/jiwanghosal/' },
    { label: 'Youtube', icon: 'pi pi-youtube', url: 'https://www.youtube.com/@stackseekers' },
    { label: 'Stack Overflow', icon: 'pi pi-chart-bar', url: 'https://stackoverflow.com/users/10376224/stchr?tab=profile' },
    { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/jiwan_ghosal/' },
  ]
</script>
