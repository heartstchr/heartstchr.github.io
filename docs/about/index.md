---
title: Full-stack Web App Developer
description: Full-stack developer for hire, specialising in development of custom websites, Figma to web, and web applications in JavaScript, React.js, Next.js, Node.js, & more.
order: 4
editLink: false
copyright: false
---

<div class="my-6 ">
  <div class="text-4xl font-bold"> I am a freelance professional.</div>
  <div class="flex md:flex-row flex-column flex-column-reverse md:align-items-start line-height-3">
    <div class="md:col-6 col-12">
      <div class="my-4 text-md"> Diverse skill set and a passion for continuous exploration and creativity.</div>
      <div class="my-4 text-md">
      With extensive experience in full-stack development, I excel in both <a href="#Frontend Technologies" class="no-underline">frontend technologies</a> and <a href="#Backend Technologies" class="no-underline">backend</a>, making significant contributions to various <a href="/projects/" class="no-underline">projects</a> within the tech industry.</div>
      <div class="my-4 text-md">
      My expertise spans all stages of agile software development, from planning and implementation to testing, monitoring, and delivery.</div>
      <div class="my-4 text-md">
      You might know me as <span class="my-4 font-italic">heartstchr/Jiwanghosal</span> on various platforms.</div>
    </div>
    <div class="md:col-6 col-12 h-30rem overflow-hidden image-box">
      <Image :src="`/img/about/about_jiwanghosal.jpg`" width="100%" />
    </div>
  </div>
</div>

<div class="my-6 flex md:flex-row flex-column ">
  <div class="col-12 line-height-3">
    <div class="my-4 text-4xl font-bold">I will simplify the steps for you</div>
    <div class="my-4 text-md">My mission is to make the whole process much easier and understandable for you</div>
    <div class="my-4 text-md">I simplify the steps to launching a digital application minus the lingo and hype so you can get on with living the life you envisioned.</div>
    <div class="my-4 text-md">You'll finally gain the clarity and confidence you need.</div>
  </div>
</div>
<div class="my-6 flex md:flex-row flex-column ">
  <div class="col-12 line-height-3">
    <div class="my-4 text-4xl font-bold">Highlights of My Journey</div>
    <div>
      <div class="my-4 text-2xl text-md">Participant at the JS world conference, Amsterdam. </div>
      <div class="col-12 overflow-hidden image-box">
        <Image :src="`/img/about/amsterdamConference.jpg`" width="100%" />
      </div>
      <div class="my-4 text-md">In 2023, I had the privilege of participating in the renowned JS world conference Amsterdam, where I contributed to discussions on cutting-edge technologies, VueJs, Pinia, including micro-frontends and modern application architectures.</div>
      <div class="my-4 text-2xl text-md">Participant at NSE Future Tech Hackathon, India.</div>
      <div class="col-12 overflow-hidden image-box">
        <Image :src="`/img/about/nseHackathon.png`" width="100%" />
      </div>
      <div class="my-4 text-md">At NSE Hackathon, our team reached the top 7 finalists, showcasing innovative problem-solving skills and pushing the boundaries of creative technology development.</div>
    </div>
  </div>
</div>
<!-- Skills -->
<div class="my-6" id="stack">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold">Stack</div>
    <div class="my-4 text-xl line-height-3">Some of the software and technologies I use on a daily basis.</div>
  </div>
  <div class="flex flex-wrap gap-4">
    <div v-for="(category, key) in technologies" :key="key" class='grid md:col-6' 
    :class="[{ 'md:col-12' : key === 'otherTools' }]" :id="category.title">
      <div class="shadow-1 border-round-md vp-feature-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 50 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <div class="px-2 gap-2">
          <div class="text-2xl font-bold">{{ category.title }}</div>
          <div v-for="(subheading, subKey) in category.subheadings" :key="subKey" class="p-2">
            <div class="text-xl m-2">{{ subheading.title }}</div>
            <div class="p-1">
              <Tag style="border: 2px solid var(--border-color); background: transparent; color: var(--text-color)" v-for="tech in subheading.technologies" :key="tech.name"
                :value="tech.name" class="m-1">
                <div class="flex items-center gap-2 px-1">
                    <img v-if="tech.logoUrl" :src="tech.logoUrl" style="width: 20px;" />
                    <i v-else class="pi pi-cog" style="font-size: 1rem"></i>
                    <span class="text-base">{{tech.name}}</span>
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
    <div class="text-4xl font-bold">Certificate of Achievement</div>
  </div>
  <div class="flex flex-wrap gap-4 p-4">
      <Galleria :value="certificate.images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" :showItemNavigators="true" :showThumbnails="false">
          <template #item="slotProps">
              <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
          <template #thumbnail="slotProps">
              <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
          </template>
      </Galleria>
      <img src="/img/about/JiwanGhosalMicrosoftAz900.png" width="100%" />
  </div>
</div>

<div class="my-6">
  
</div>

<!-- Contact Me -->
<div class="border-round-md vp-feature-item" id="contact">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <div>
    <div class="text-center px-4">
      <div class="text-4xl font-bold">A Little More About Me</div>
      <div class="my-4 text-md line-height-3">When I’m not coding, I enjoy creating tech tutorials for my YouTube channel <a href="https://www.youtube.com/@stackseekers" target="_blank" class="no-underline">Stack Seekers</a>, exploring the latest in mobile technology, and <a href="https://www.youtube.com/@JiwanGhosal" target="_blank" class="no-underline">traveling</a> to discover new cultures and ideas.</div>
    </div>
    <div class="text-center py-4">
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <div class="mx-4 text-center text-xl line-height-3">
      Ready to turn your vision into reality? Let’s discuss how I can help you achieve your goals.
    </div>
    <div class="my-4">
      <a href="mailto:jiwan.cse@gmail.com?subject=Make%20it%20for%20me" size="large" color="deeppink" class="flex justify-content-center text-center no-underline"> 
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

<script setup lanf="ts">
  import { ref } from "vue";
  const certificate = ref([
    {
        name: "certificate",
        images: [
                {
                    itemImageSrc: '/img/about/JiwanGhosalMicrosoftAz900.png',
                    thumbnailImageSrc: '/img/about/JiwanGhosalMicrosoftAz900.png',
                    alt: 'Jiwan Ghosal Microsoft Az900',
                    title: 'Jiwan Ghosal Microsoft Az900'
                },
                {
                    itemImageSrc: '/img/about/connectedManager.png',
                    thumbnailImageSrc: '/img/about/connectedManager.png',
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
          { name: "React", logoUrl: "https://cdn.simpleicons.org/react" },
          { name: "Next.js", logoUrl: "https://cdn.simpleicons.org/nextdotjs/black/white" },
          { name: "Vue.js", logoUrl: "https://cdn.simpleicons.org/vuedotjs" },
          { name: "Nuxt.js", logoUrl: "https://cdn.simpleicons.org/nuxt" },
          { name: "Ant Design", logoUrl: "https://cdn.simpleicons.org/antdesign" },
          { name: "Primevue", logoUrl: "https://cdn.simpleicons.org/primevue" },
          { name: "Shadcn", logoUrl: "https://cdn.simpleicons.org/shadcnui/black/white" },
          { name: "Quasar", logoUrl: "https://cdn.simpleicons.org/quasar/black/white" },
        ]
      },
      styling: {
        title: "Styling Tools",
        technologies: [
          { name: "Tailwind CSS", logoUrl: "https://cdn.simpleicons.org/tailwindcss" },
          { name: "PrimeFlex", logoUrl: "https://cdn.simpleicons.org/primefaces" },
          { name: "Bootstrap", logoUrl: "https://cdn.simpleicons.org/bootstrap" },
          { name: "Material-UI", logoUrl: "https://cdn.simpleicons.org/mui" },
        ]
      },
      stateManagement: {
        title: "State Management",
        technologies: [
          { name: "Pinia", logoUrl: "https://cdn.simpleicons.org/" },
          { name: "Redux", logoUrl: "https://cdn.simpleicons.org/" },
          { name: "vuex", logoUrl: "https://cdn.simpleicons.org/" },
        ]
      },
      buildTools: {
        title: "Build Tools",
        technologies: [
          { name: "Vite", logoUrl: "https://cdn.simpleicons.org/vite" },
          { name: "Rollup", logoUrl: "https://cdn.simpleicons.org/rollupdotjs" },
          { name: "Webpack", logoUrl: "https://cdn.simpleicons.org/webpack" },
        ]
      },
      testing: {
        title: "Testing",
        technologies: [
          { name: "Jest", logoUrl: "https://cdn.simpleicons.org/jest" },
          { name: "Testcafe", logoUrl: "https://cdn.simpleicons.org/testcafe" },
          { name: "Playwrite", logoUrl: "https://cdn.simpleicons.org/playwright" },
          { name: "Lighthouse", logoUrl: "https://cdn.simpleicons.org/lighthouse" },
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
          { name: "Node.js", logoUrl: "https://cdn.simpleicons.org/nodedotjs" },
          { name: "Express.js", logoUrl: "https://cdn.simpleicons.org/express/black/white" },
        ]
      },
      microservices_and_apis: {
        title: "APIs",
        technologies: [
          { name: "RESTful API", logoUrl: "https://cdn.simpleicons.org/swagger" },
          { name: "Web Socket", logoUrl: "https://cdn.simpleicons.org/socketdotio/black/white" },
          { name: "GraphQL", logoUrl: "https://cdn.simpleicons.org/graphql" }
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
          { name: "MySQL", logoUrl: "https://cdn.simpleicons.org/mysql" },
          { name: "PostgreSQL", logoUrl: "https://cdn.simpleicons.org/postgresql" },
          { name: "DynamoDB", logoUrl: "https://cdn.simpleicons.org/amazondynamodb" },
          { name: "Firebase", logoUrl: "https://cdn.simpleicons.org/firebase" },
          { name: "Prisma", logoUrl: "https://cdn.simpleicons.org/prisma" },
          { name: "MongoDB", logoUrl: "https://cdn.simpleicons.org/mongodb" },
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
          { name: "Vercel", logoUrl: "https://cdn.simpleicons.org/vercel/black/white" },
          { name: "Netlify", logoUrl: "https://cdn.simpleicons.org/netlify" },
          { name: "Heroku", logoUrl: "https://cdn.simpleicons.org/heroku" },
          { name: "Github pages", logoUrl: "https://cdn.simpleicons.org/githubpages/black/white" },
          { name: "Azure", logoUrl: "https://cdn.simpleicons.org/" },
          { name: "AWS", logoUrl: "https://cdn.simpleicons.org/awslambda" },
        ]
      },
      CI_CD: {
        title: "CI/CD",
        technologies: [
          { name: "Github Action", logoUrl: "https://cdn.simpleicons.org/githubactions" },
          { name: "Azure Devops", logoUrl: "https://cdn.simpleicons.org/" },
          { name: "GitLab CI/CD", logoUrl: "https://cdn.simpleicons.org/gitlab" },
          { name: "Jenkins", logoUrl: "https://cdn.simpleicons.org/jenkins" },
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
          { name: "GitHub", logoUrl: "https://cdn.simpleicons.org/github/black/white" },
          { name: "GitLab", logoUrl: "https://cdn.simpleicons.org/gitlab" },
          { name: "Bitbucket", logoUrl: "https://cdn.simpleicons.org/bitbucket" },
          { name: "Azure Devops", logoUrl: "https://cdn.simpleicons.org/" },
        ]
      },
      package_manager: {
        title: "Package managers",
        technologies: [
          { name: "npm", logoUrl: "https://cdn.simpleicons.org/npm" },
          { name: "yarn", logoUrl: "https://cdn.simpleicons.org/yarn" },
          { name: "pnpm", logoUrl: "https://cdn.simpleicons.org/pnpm" },
          { name: "bun", logoUrl: "https://cdn.simpleicons.org/bun/black/white" },
        ]
      },
      code_quality: {
        title: "Code Quality",
        technologies: [
          { name: "ESLint", logoUrl: "https://cdn.simpleicons.org/eslint" },
          { name: "Prettier", logoUrl: "https://cdn.simpleicons.org/prettier" },
          { name: "SonarQube", logoUrl: "https://cdn.simpleicons.org/sonarqube" },
        ]
      },
      collaboration: {
        title: "Collaboration",
        technologies: [
          { name: "Jira", logoUrl: "https://cdn.simpleicons.org/jira" },
          { name: "Trello", logoUrl: "https://cdn.simpleicons.org/trello" },
          { name: "Slack", logoUrl: "https://cdn.simpleicons.org/slack" },
          { name: "Teams", logoUrl: "https://cdn.simpleicons.org/team" },
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
    { label: 'linkedin', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/jiwanghosal/' },
    { label: 'youtube', icon: 'pi pi-youtube', url: 'https://www.youtube.com/@stackseekers' },
    { label: 'stackoverflow', icon: 'pi pi-chart-bar', url: 'https://stackoverflow.com/users/10376224/stchr?tab=profile' },
    { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/jiwan_ghosal/' },
  ]
</script>
