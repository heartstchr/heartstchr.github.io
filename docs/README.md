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

<div class="text-md text-2xl mt-8">Full Stack Developer with extensive experience in both backend and frontend technologies.</div>
<div class="my-4">
With a demonstrated history of success in the industry, I bring a comprehensive skill set that covers all phases of software development, including planning, implementation, testing, monitoring, and delivery.
</div>


<div v-if="questions" class="mt-8">
  <div class="text-xl font-bold">Frequently Asked Questions</div>
  <div v-for="question in questions" :key="question.id">
    <div class="flex flex-column my-4 gap-2">
      <div class="font-bold">Q {{ question.question }}</div>
      <div>A {{ question.answer }}</div>
    </div>
  </div>
</div>

##

<div class="my-4">
  <div class="my-4 font-bold text-5xl text-center">Commitment</div>
  <div class="grid mt-4">
    <div class="md:col col-12" v-for="feature in features" :key="feature.title">
      <i :class="feature.icon" class="m-auto text-400 pl-3" style="font-size: 5rem"></i>
      <div class="mt-4 font-bold text-base">{{ feature.title }}</div>
      <div class="mt-2 text-sm">
        {{ feature.description }}
      </div>
    </div>
  </div>
</div>

##

<div class="my-8">
  <div class="text-center">
    <div class="text-6xl font-bold">Contact Me</div>
    <div class="my-4 text-md">Let's Work Together!</div>
  </div>
  <div class="my-4 text-center text-md"> I'm always eager to take on new challenges and collaborate on exciting projects. If you’re looking for a dedicated Full Stack Developer feel free to reach out. <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="text-center">Send email</a></div>
</div>


## 

<div class="my-8">
  <div class="text-center">
    <div class="text-6xl font-bold">What Our Customers Are Saying</div>
    <div class="my-4 text-md">I treat every client as a strategic partner. Here’s what they have to say about working with Jiwan Ghosal</div>
  </div>
  <div class="my-4 text-center text-md">
  
  </div>
</div>

## Skills & Expertise

<div class="flex felx-row gap-2 grid nested-grid justify-content-center my-8">
  <div class="col-3 gap-1 grid mt-4 h-min surface-card shadow-1 grid-nogutter" v-for= "(item, index) in skills">
      <div class="col-12 font-bold text-xl">{{item.name}}</div>
      <div v-for= "(part, i) in item.value"> <Tag severity="secondary" :value="part"></Tag></div>
  </div>
</div>

## Other Skills

<div class="flex felx-row gap-2 grid nested-grid justify-content-center my-8">
  <div class="col-3 gap-1 grid mt-4 h-min surface-card shadow-1 grid-nogutter" v-for= "(item, index) in otherSkills">
      <div class="col-12 font-bold text-xl">{{item.name}}</div>
      <div v-for= "(part, i) in item.value"> <Tag severity="secondary" :value="part"></Tag></div>
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
];

const questions = [
  {
    id: 1,
    question: "How can I start a project with Jiwan Ghosal?",
    answer: `You can start by contacting us through our phone, email, or filling out the consultation form.`
  },
  {
    id: 2,
    question: 'What services do you offer?',
    answer: `We offer a wide range of services, including Custom Web Development, E-commerce Solutions, API Development and Integration, Figma to Web, Hosting & Deployment`
  },
  {
    id: 3,
    question: 'What is the hourly rate?',
    answer: `$25/hr`
  }
]

const features = [
  {
    icon: 'pi pi-calculator',
    title: 'No minimum order',
    description:
      'Try our service without any hassles'
  },
  {
    icon: 'pi pi-bolt',
    title: 'Fast Delivery',
    description:
      'I have got you covered'
  },
  {
    icon: 'pi pi-calendar-clock',
    title: 'Support',
    description:
      'I am here to help!'
  },
  {
    icon: 'pi pi-eye',
    title: 'Free Demo',
    description:
      'Free demo bi weekly to update progress'
  }
]

</script>

