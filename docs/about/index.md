---
title: About
order: 4
editLink: false
copyright: false
---

<div class="my-8">
  <div class="my-4 text-md"> I am a multifaceted freelance professional.</div>
  <div class="my-4 text-md"> Diverse skill set and a passion for continuous exploration and creativity.</div>
  <div class="my-4 text-md">
  With extensive experience in full-stack development, I excels in both backend and frontend technologies, making significant contributions to various projects within the tech industry.</div> <div class="my-4 text-md">
  My expertise spans all stages of agile software development, from planning and implementation to testing, monitoring, and delivery.</div>
</div>

<!-- Skills -->
<div class="my-6">
  <div class="text-center">
    <div class="text-4xl font-bold">Stack</div>
    <div class="my-4 text-xl">Some of the software and technologies I use on a daily basis.</div>
  </div>
  <div class="grid nested-grid gap-2">
    <div class="md:col-3 col-12 gap-1 grid mt-4 h-min surface-card shadow-1 grid-nogutter border-round-md text-900 vp-feature-item" 
      v-for= "(item, index) in skills">
        <div class="col-12 font-medium text-xl mb-4">{{item.name}}</div>
        <div class= "p-1" v-for= "(part, i) in item.value"><Tag>{{part}}</Tag></div>
    </div>
  </div>
</div>

<div class="pt-8 text-900">
  <div class="text-center">
    <div class="text-4xl font-bold">A Little More About Me</div>
    <div class="my-4 text-md">When I’m not coding, I enjoy creating tech tutorials for my YouTube channel Stack Seekers, exploring the latest in mobile technology, and traveling to discover new cultures and ideas.</div>
  </div>
</div>

<div class="pt-8 surface-100 border-round-md text-900">
  <div class="text-center">
    <div class="my-4 text-md">Let’s Collaborate!</div>
  </div>
  <div class="my-4 text-center text-md">Ready to turn your vision into reality? Let’s discuss how I can help you achieve your goals.
  </div>
  <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="flex justify-content-center text-center no-underline"> 
    <Button label="Let's work together" icon="pi pi-envelope" severity="info" />
  </a>
  <div class="flex flex-row justify-content-end flex-wrap gap-4 p-3 mx-6">
    <a
      v-for="(socialElement, socialIndex) in social"
      :key="socialIndex"
      :href="socialElement.url"
      target="_blank"
      class="flex flex-row text-600 gap-2"
      >
      <i :class="socialElement.icon" style="font-size: 1rem"></i>
      </a>
  </div>
</div>

<script setup lanf="ts">
  const skills = [
    {
      name: "Front end",
      value: ["VueJS", "Vue3", "Nuxt", "ReactJS", "Vite", "Pinia","Axios", "Vuepress", "Storybook", "Lit","HTML5","CSS3","JavaScript(ES6)", "TypeScript"]
    },
    {
      name: "Back end",
      value: ["ExpressJS","NodeJS","MYSQL","MSSQL","PLSQL","MongoDB","DynamoDB"],
    },
    {
      name: "Hosting & Deployment",
      value: ["Git","CICD","Ansible", "YAML", "Docker","Kibana","Azure", "AWS"],
    },
    {
      name: "Automation Testing",
      value: ["Jest","Testcafe","Lighthouse","Playwright"],
    }
  ];
  const social= [
    { label: 'linkedin', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/jiwanghosal/' },
    { label: 'stackoverflow', icon: 'pi pi-chart-bar', url: 'https://stackoverflow.com/users/10376224/stchr?tab=profile' },
    { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/jiwan_ghosal/' },
    { label: 'youtube', icon: 'pi pi-youtube', url: 'https://www.youtube.com/@stackseekers' },
  ]
</script>
