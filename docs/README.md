---
home: true
icon: home
title: Home
heroImage: /img/jiwan.png
heroText: Jiwan Ghosal
tagline: Senior Full Stack Developer & Google Certified SEM Analyst
containerClass: fancy-container
actions:
  - text: About 💡
    link: /about/
    type: primary

  - text: Projects
    link: /projects/
  
  - text: Services
    link: /services/

  - text: Blog
    link: /blog/

  - text: Youtube
    link: "https://www.youtube.com/@JiwanGhosal"

features:
  - title: Capgemini
    icon: /img/home/capgemini2.png
    details: Consulting & technology services
    link: https://www.capgemini.com/

  - title: CatchThatBus
    icon: /img/home/catchthatbus.png
    details: Leisure, Travel & Tourism
    link: https://www.catchthatbus.com/

  - title: Upstox
    icon: /img/home/upstox.jpeg
    details: Online Stock Broker
    link: https://www.upstox.com/

  - title: Mobistreak
    icon: /img/home/mobistreak.png
    details: Marketing and Advertising
    link: https://www.mobistreak.com/

copyright: false
footer: Copyright © 2022
---
<p class= "text-xl">
I am a seasoned Full Stack Developer with extensive experience in both backend and frontend technologies. With a demonstrated history of success in the industry, I bring a comprehensive skill set that covers all phases of software development, including planning, implementation, testing, monitoring, and delivery. My expertise is complemented by a Google certification in Search Engine Marketing (SEM), adding a valuable dimension to my technical capabilities.
</p>

## Skills & Expertise

<div class="flex felx-row gap-2 grid nested-grid">
  <div class="col-3 gap-1 grid mt-4 h-min surface-card shadow-1 grid-nogutter" v-for= "(item, index) in skills">
      <div class="col-12 font-bold text-xl">{{item.name}}</div>
      <div class="col bg-bluegray-100 p-2 m-1 white-space-nowrap border-round-md text-center" v-for= "(part, i) in item.value">{{part}}</div>
  </div>
</div>

## Other Skills

<div class="flex felx-row gap-2 grid nested-grid">
  <div class="col-3 gap-1 grid mt-4 h-min surface-card shadow-1 grid-nogutter" v-for= "(item, index) in otherSkills">
      <div class="col-12 font-bold text-xl">{{item.name}}</div>
      <div class="col bg-bluegray-100 p-2 m-2 white-space-nowrap border-round-md text-center" v-for= "(part, i) in item.value">{{part}}</div>
  </div>
</div>

<script setup lang="ts">

const skills = [
  {
    name: "Front end",
    value: ["VueJS", "Vuepress", "Storybook", "Lit", "Storybook", "HTML5","CSS3","JavaScript(ES6)", "NuxtJS","ReactJS","AngularJS", "UI/UX Design","Web Design","Web Application","Web view","Service Worker","Webpack", "Rollup"]
  },
  {
    name: "Back end",
    value: ["ExpressJS","NodeJS","HapiJS","LoopbackJS","MYSQL","MSSQL","PLSQL","MongoDB","DynamoDB"],
  },
  {
    name: "Hosting & Deployment",
    value: ["Git","CICD","Ansible", "Azure", "YAML", "Docker","Kibana", "Azure Gateway", "Azure Blob" ,"S3","ECS","EC2","Cognito","Lambda","API Gateway","Cloud Watch","VPC","SQS","SNS"],
  },
  {
    name: "Automation Testing",
    value: ["Jest","Testcafe","Lighthouse","Playwright"],
  }
];
const otherSkills = [
  {
    name: "Graphics",
    value: ["Coral Draw", "Adobe Photoshop"],
  },
  {
    name: "Video Editing",
    value: ["Davinci Resolve", "Adobe Premier pro"],
  },
  {
    name: "Marketing",
    value: ["SEO", "Google Adwords"],
  }
]
</script>

<style>
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    width: 60%;
    margin: 20px auto;
}
.column {
    padding: 20px;
    text-align: center;
}
</style>
