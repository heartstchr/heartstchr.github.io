---
home: true
icon: home
title: Home
heroImage: /img/jiwan.png
heroText: Jiwan Ghosal
tagline: Senior Full Stack Developer MERN, MEVN & Microsoft Certified with AZ 900 & Google Certified SEM Analyst 
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
<div class="flex felx-row justify-content-center">
  <Button label="Consultation form" @click="visible = true" />
</div>

<div class="text-md text-2xl mt-8">Full Stack Developer with extensive experience in Javascript, NodeJS ecosystem and Cloud.</div>
<div class="my-4">
With a demonstrated history of success in the industry, I bring a comprehensive skill set that covers all phases of software development, including Planning, Implementation, Automated testing, Monitoring, and Contineous Integration and Contineous Delivery.
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

<Dialog 
  v-model:visible="visible"
  header="Consultation form"
  modal
  :pt="{
      root: 'border-none',
      mask: {
          style: 'backdrop-filter: blur(2px)'
      }
  }"
  :style="{ width: '60rem' }">
    <span class="p-text-secondary block mb-5">Update your information.</span>
    <form class="felx flex-column">
      <div class="felx flex-column gap-2 mb-4 w-full">
        <label for="name">Name</label>
        <InputText id="name" v-model="form.name" required class="w-full" />
      </div>
      <div class="felx flex-column gap-2 mb-4 w-full">
        <label for="email">Email</label>
        <InputText id="email" v-model="form.email" type="email" required  class="w-full"/>
      </div>
      <div class="felx flex-column gap-2 mb-4 w-full">
        <label for="phone">Phone</label>
        <InputText id="phone" v-model="form.phone" type="tel"  class="w-full"/>
      </div>
      <div class="felx flex-column gap-2 mb-4 w-full">
        <label for="service">Service</label>
        <Dropdown id="service" v-model="form.service" :options="services" optionLabel="name" placeholder="Select a service" class="w-full" />
      </div>
      <div class="felx flex-column gap-2 mb-4 w-full">
        <label for="message">Message</label>
        <Textarea id="message" v-model="form.message" rows="5"  class="w-full"/>
      </div>
    </form>
    <div class="flex justify-content-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="submit" label="Send" @click="submitForm"></Button>
    </div>
</Dialog>

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
  <div class="my-4 text-center text-md overflow-x-scroll ">
    <div class="flex flex-row align-items-center">
      <div class="col-6 surface-card shadow-1 border-round-md p-2 m-2" v-for="(testimonial, index) in testimonials" :key="index">
        <div class="font-italic mb-8">
          <div><span class="font-bold text-7xl">"</span> {{ testimonial.message }}</div>
        </div>
        <div class="flex align-items-center">
          <img :src="testimonial.avatar" alt="Avatar" class="border-circle" width="50px" />
          <a :href="testimonial.link" target="_blank">
            <div class="flex flex-column align-items-start ml-2">
              <div>{{ testimonial.name }}</div>
              <div>{{ testimonial.designation }}</div>
              <div>
                <img :alt="testimonial.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${testimonial.code.toLowerCase()} mr-2`" style="width: 18px" />
                {{ testimonial.location }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

## 

<div class="flex felx-row gap-2 grid nested-grid justify-content-center my-8">
  <div class="text-center col-12">
    <div class="text-6xl font-bold">Skills & Expertise</div>
  </div>
  <div class="col-3 gap-1 grid mt-4 h-min surface-card shadow-1 grid-nogutter" v-for= "(item, index) in skills">
      <div class="col-12 font-bold text-xl">{{item.name}}</div>
      <div v-for= "(part, i) in item.value"><Tag>{{part}}</Tag></div>
  </div>
</div>

##

<div class="flex felx-row gap-2 grid nested-grid justify-content-center my-8">
  <div class="text-center col-12">
    <div class="text-6xl font-bold">Other skills</div>
  </div>
  <div class="col-3 gap-1 grid mt-4 h-min surface-card shadow-1 grid-nogutter" v-for= "(item, index) in otherSkills">
      <div class="col-12 font-bold text-xl">{{item.name}}</div>
      <div v-for= "(part, i) in item.value"> <Tag>{{part}}</Tag></div>
  </div>
</div>


<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
const form = ref({
  name: '',
  email: '',
  phone: '',
  service: null,
  message: ''
});

const services = ref([
  { name: 'Custom Web Development', code: 'C' },
  { name: 'E-commerce Solutions', code: 'D' },
  { name: 'API Development and Integration', code: 'DE' },
  { name: 'Figma to Web', code: 'M' },
  { name: 'Mobile App Development', code: 'M' },
  { name: 'CICD', code: 'M' },
  { name: 'Hosting', code: 'M' },
  { name: 'Doamin', code: 'M' },
  { name: 'Maintenance and Support', code: 'M' },
  { name: 'Consulting and Technical Advisory', code: 'M' },
  { name: 'Others', code: 'M' },
]);

const submitForm = () => {
  visible.value = false
  console.log('Form submitted:', form.value);
  // Add form submission logic here (e.g., send data to an API)
};
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

const testimonials = [
  {
    name: 'Harris Malik',
    designation: 'Senior Product Manager at 8x8',
    message: 'Jiwan is one of the most valuable people I have ever met. He is smart, professional, and never fails to surprise us with creative solutions to difficult problems. Jiwan\'s personality and skills would be a great asset to any company. Highly recommended.',
    avatar: 'https://media.licdn.com/dms/image/D5603AQG8ooyo97JCoA/profile-displayphoto-shrink_400_400/0/1682841547784?e=1723075200&v=beta&t=WbH3BcbAEAyHeARhHPZFnON1BjdItx1V_GBx5k6iiP4',
    link: 'https://www.linkedin.com/in/harrismalik04/',
    location: 'Malaysia',
    code: 'my'
  },
  {
    name: 'Shyam Kumar',
    designation: 'Senior Product Manager at Angel One',
    message: 'I had the pleasure of working with Jiwan for around 2 years. I always found him to a very dependable and hardworking colleague. Many time he went over and above to meet the product requirements, it might be either working overtime to release the project on time or working with other teams to get the production issue fixed. He was always the go to person in the team. I wish him all the best for the future endeavours and I can fully vouch that he will give his 100% every time.',
    avatar: 'https://media.licdn.com/dms/image/D5603AQHZpSlK7j89uA/profile-displayphoto-shrink_100_100/0/1698672442801?e=1723075200&v=beta&t=E85rxj2C06FDC5FQdl8iBdjN1CapnTEBy6nLLWTj7vs',
    link: 'https://www.linkedin.com/in/shyam-kumar-k/',
    location: 'India',
    code: 'in'
  },
  {
    name: 'Jurgen Sweere',
    designation: 'Front End Expert at ABN Amro',
    message: 'Jiwan never stopped amazing me. He brings a lot of front-end knowledge to the table and is able to quickly learn anything new. Jiwan is a great colleague to have!',
    avatar: 'https://media.licdn.com/dms/image/C5603AQGLWlLKfqFZgw/profile-displayphoto-shrink_100_100/0/1516235161685?e=1723075200&v=beta&t=Rk4L37_1TEaDNqfaf6UuDzvVuD8EFeHAN9yy7LJu1rc',
    link: 'https://www.linkedin.com/in/jurgensweere',
    location: 'The Netherlands',
    code: 'nl'
  },
  {
    name: 'Erkan Ateşli',
    designation: 'Chapter Lead at ABN AMRO Bank N.V.',
    message: 'In our connects with Jiwan at ABN AMRO, i noticed that he has in debt knowledge in his expertise field. He can transfer his knowledge easily to others. With his strong analytics skills, he can handle complex questions as usual. Jiwan is a brave colleague i’ve met and we had a lot of fun during the India visit and especially at the party. ',
    avatar: 'https://media.licdn.com/dms/image/C4E03AQFg4Oh_B9JEeQ/profile-displayphoto-shrink_100_100/0/1621625662967?e=1723075200&v=beta&t=-pCdN3E5__viY6S0t-na984qkDxxuOAyGToq3UnTKM0',
    link: 'https://www.linkedin.com/in/erkanatesli',
    location: 'The Netherlands',
    code: 'nl'
  }
];

</script>
