---
home: true
icon: home
title: Home
heroImage: /img/jiwan.png
heroText: Jiwan Ghosal
tagline: Senior Full Stack Developer - Graphic Artist - UI/UX Designer
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

Full Stack Developer (Backend & Frontend) experienced in a wide variety of technologies and software tools with a demonstrated history of working in the industry. Agile Software Development and contribute in all steps of planning, implementation, test, monitoring and delivery.Also, a Google certified SEM Analyst.

## skills

<div class="container">
  <div class="column" v-for= "(item, index) in skils">
      <h3>{{item.name}}</h3>
      <div class="badge badge-info teal" v-for= "(part, i) in item.value">{{part}}</div>
  </div>
</div>

<script>
  export default {
    data: () => ({
        skils: [
          {
            name: "Front end",
            value: ["VueJS", "Vuepress", "Storybook", "Lit", "Storybook", "HTML5","CSS3","JavaScript(ES6)", "NuxtJS","ReactJS","AngularJS", "UI/UX Design","Web Design","Web Application","Web view","Service Worker","Webpack", "Rollup"]
          },
          {
            name: " Back end",
            value: ["NodeJS","HapiJS","LoopbackJS","ExpressJS","MYSQL","MSSQL","PLSQL","MongoDB","DynamoDB"],
          },
          {
            name: "DevOps",
            value: ["Git","CICD","Ansible", "Azure", "YAML", "Docker","Kibana", "Azure Gateway", "Azure Blob" ,"S3","ECS","EC2","Cognito","Lambda","API Gateway","Cloud Watch","VPC","SQS","SNS"],
          },
          {
            name: "Testing",
            value: ["Jest","Testcafe","Lighthouse","Playwright"],
          },
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
    })
  }
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
