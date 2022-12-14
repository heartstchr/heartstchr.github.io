<template><div><p>Full Stack Developer (Backend &amp; Frontend) experienced in a wide variety of technologies and software tools with a demonstrated history of working in the industry. Agile Software Development and contribute in all steps of planning, implementation, test, monitoring and delivery.Also, a Google certified SEM Analyst.</p>
<h2 id="skills" tabindex="-1"><a class="header-anchor" href="#skills" aria-hidden="true">#</a> skills</h2>
<div class="row">
  <div class="col-md-4" v-for= "(item, index) in skils">
      <p><i class=""></i> {{item.name}}</p>
      <div class="col-sm-12" v-for= "(part, i) in item.value">
        <span class="badge badge-info teal">{{part}}</span>
      </div>
  </div>
</div>
</div></template>

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
