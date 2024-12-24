---
title: About
order: 4
editLink: false
copyright: false
---

<div class="my-6">
  <div class="text-4xl font-bold"> I am a freelance professional.</div>
  <div class="flex md:flex-row flex-column flex-column-reverse md:align-items-start ">
    <div class="md:col-6 col-12">
      <div class="my-4 text-md"> Diverse skill set and a passion for continuous exploration and creativity.</div>
      <div class="my-4 text-md">
      With extensive experience in full-stack development, I excels in both <a href="#Frontend Technologies" class="no-underline">frontend technologies</a> and <a href="#Backend Technologies" class="no-underline">backend</a>, making significant contributions to various <a href="/projects/" class="no-underline">projects</a> within the tech industry.</div>
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
  <div class="col-12">
    <div class="my-4 text-4xl font-bold">I will simplify the steps for you</div>
    <div class="my-4 text-md">My mission is to make the whole process much easier and understandable for you</div>
    <div class="my-4 text-md">I simplify the steps to launching a digital application minus the lingo and hype so you can get on with living the life you envisioned.</div>
    <div class="my-4 text-md">You'll finally gain the clarity and confidence you need.</div>
  </div>
</div>
<!-- Skills -->
<div class="my-6" id="stack">
  <div class="text-center pb-4">
    <div class="text-4xl font-bold">Stack</div>
    <div class="my-4 text-xl">Some of the software and technologies I use on a daily basis.</div>
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
      <div class="my-4 text-md">When I’m not coding, I enjoy creating tech tutorials for my YouTube channel <a href="https://www.youtube.com/@stackseekers" target="_blank" class="no-underline">Stack Seekers</a>, exploring the latest in mobile technology, and <a href="https://www.youtube.com/@JiwanGhosal" target="_blank" class="no-underline">traveling</a> to discover new cultures and ideas.</div>
    </div>
    <div class="text-center py-4">
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <div class="mx-4 text-center text-xl">
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
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
          { name: "React", logoUrl: "/img/stacks/reactjs.png" },
          { name: "Next.js", logoUrl: "/img/stacks/nextjs.svg" },
          { name: "Vue.js", logoUrl: "/img/stacks/vuejs.png" },
          { name: "Nuxt.js", logoUrl: "/img/stacks/nuxt.svg" },
          { name: "Ant Design", logoUrl: "" },
          { name: "Primevue", logoUrl: "" },
          { name: "Shadcn", logoUrl: "" },
          { name: "Quasar", logoUrl: "" },
        ]
      },
      styling: {
        title: "Styling Tools",
        technologies: [
          { name: "Tailwind CSS", logoUrl: "" },
          { name: "PrimeFlex", logoUrl: "" },
          { name: "Bootstrap", logoUrl: "" },
          { name: "Material-UI", logoUrl: "" },
          { name: "Ant Design", logoUrl: "" },
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
          { name: "Vite", logoUrl: "" },
          { name: "Rollup", logoUrl: "" },
          { name: "Webpack", logoUrl: "" },
        ]
      },
      testing: {
        title: "Testing",
        technologies: [
          { name: "Jest", logoUrl: "" },
          { name: "Testcafe", logoUrl: "" },
          { name: "Playwrite", logoUrl: "" },
          { name: "Lighthouse", logoUrl: "" },
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
          { name: "Node.js", logoUrl: "/img/stacks/nodejs.png" },
          { name: "Express.js", logoUrl: "" },
        ]
      },
      microservices_and_apis: {
        title: "APIs",
        technologies: [
          { name: "RESTful API", logoUrl: "" },
          { name: "Web Socket", logoUrl: "" },
          { name: "GraphQL", logoUrl: "" }
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
          { name: "MySQL", logoUrl: "" },
          { name: "PostgreSQL", logoUrl: "" },
          { name: "MS SQL Server", logoUrl: "" },
          { name: "DynamoDB", logoUrl: "" },
          { name: "Firebase Firestore", logoUrl: "" },
          { name: "Prisma", logoUrl: "" },
          { name: "MongoDB", logoUrl: "/img/stacks/mongodb.png" },
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
          { name: "Vercel", logoUrl: "" },
          { name: "Netlify", logoUrl: "" },
          { name: "Heroku", logoUrl: "" },
          { name: "Azure", logoUrl: "" },
          { name: "AWS", logoUrl: "" },
        ]
      },
      CI_CD: {
        title: "CI/CD",
        technologies: [
          { name: "Github Action", logoUrl: "" },
          { name: "Azure Devops", logoUrl: "" },
          { name: "GitLab CI/CD", logoUrl: "" },
          { name: "Jenkins", logoUrl: "" },
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
          { name: "GitHub", logoUrl: "" },
          { name: "GitLab", logoUrl: "" },
          { name: "Bitbucket", logoUrl: "" },
          { name: "Azure Devops", logoUrl: "" },
        ]
      },
      package_manager: {
        title: "Package managers",
        technologies: [
          { name: "npm", logoUrl: "" },
          { name: "yarn", logoUrl: "" },
          { name: "pnpm", logoUrl: "" },
          { name: "bun", logoUrl: "" },
        ]
      },
      code_quality: {
        title: "Code Quality",
        technologies: [
          { name: "ESLint", logoUrl: "" },
          { name: "Prettier", logoUrl: "" },
          { name: "SonarQube", logoUrl: "" },
          { name: "Fortify", logoUrl: "" },
          { name: "Nexus", logoUrl: "" },
        ]
      },
      collaboration: {
        title: "Collaboration",
        technologies: [
          { name: "Jira", logoUrl: "" },
          { name: "Trello", logoUrl: "" },
          { name: "Azure Boards", logoUrl: "" },
          { name: "Slack", logoUrl: "" },
          { name: "Teams", logoUrl: "" },
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
