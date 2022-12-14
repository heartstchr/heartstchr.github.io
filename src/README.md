---
home: true
icon: home
title: Home
heroImage: /img/jiwan.png
heroText: Jiwan Ghosal
tagline: Senior Full Stack Developer - Graphic Artist - UI/UX Designer
actions:
  - text: About 💡
    link: /demo/
    type: primary

  - text: Graphics
    link: /graphics/
  
  - text: Blog
    link: /blog/

  - text: Youtube
    link: "https://www.youtube.com/@JiwanGhosal"

features:
  - title: Capgemini
    icon: /img/home/capgemini2.png
    details: Leisure, Travel & Tourism
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

<div class="row">
  <div class="col-md-4" v-for= "(item, index) in skils">
      <p><i class=""></i> {{item.name}}</p>
      <div class="col-sm-12" v-for= "(part, i) in item.value">
        <span class="badge badge-info teal">{{part}}</span>
      </div>
  </div>
</div>

<script>
  export default {
    data: () => ({
        skils: [
          {
            name: "Front end",
            value: ["HTML5","CSS3","JavaScript ( ES6 )","Stylus","AngularJS","VueJS","NuxtJS","ReactJS","UI/UX Design","Web Design","Web Application","Web view","Graphics Design","SEO","Service Worker","Webpack"]
          },
          {
            name: " Back end",
            value: ["NodeJS","HapiJS","LoopbackJS","ExpressJS","MYSQL","MSSQL","PLSQL","MongoDB","DynamoDB"],
          },
          {
            name: "DevOps",
            value: ["Git","CICD","Ansible","Docker","Kibana","AWS S3","AWS ECS","AWS EC2","AWS Cognito","AWS Lambda","AWS API Gateway","AWS Cloud Watch","AWS VPC","AWS SQS","AWS SNS"],
          },
          {
            name: "Graphics",
            value: ["Davinci Resolve", "Adobe Premier pro", "Coral Draw", "Adobe Photoshop"],
          }
        ]
    })
  }
</script>