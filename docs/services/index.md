---
title: Services
icon: code
order: 3
lastUpdated: false
editLink: false
copyright: false
footer: '<div class="card surface-100 text-600">
 <div class="flex flex-wrap">
      <div class="w-full">
        <div class="gap-2">
          <div class="card flex md:flex-row flex-column justify-content-between flex-grow-1 my-4 align-item-center gap-4">
            <div class="flex flex-row justify-content-between align-items-center gap-2">Copyright © 2022</div>
            <div class="flex md:flex-row flex-column justify-content-between align-items-center gap-4">
              <a href="/projects" class="text-600"> Projects </a>
              <a href="/services" class="text-600"> Services </a>
              <a href="/about" class="text-600"> About </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>'
---


<div class="font-italic">I am your one-stop destination for comprehensive development and hosting services. I offer a wide range of solutions to meet your digital needs. Here's what I can do for you:</div>

<div class="grid mt-4">
  <div class="surface-card shadow-1 m-2 p-4 col-12 border-round-2xl vp-feature-item" itemscope itemtype="https://schema.org/SoftwareApplication" v-for= "(service, index) in services">
    <Image v-if="service.img" :src="service.img" class="" :alt="service.name" width="100%"/>
      <div class="text-2xl font-bold">
          <span itemprop="name">{{service.name}}</span>
      </div>
      <div class="mt-4 flex flex-column gap-2">
        <link itemprop="applicationCategory" :href="service.schema" />
        <div itemprop="name">{{service.description}}</div>
        <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
          <Button label="Send email" icon="pi pi-envelope" severity="info" />
        </a>
      </div>
  </div>
</div>


<script setup lang="ts">
const services = [
    {
        name: "Figma to Web",
        img: "/img/service/FigmatoWeb.jpeg",
        description: "Transform your Figma designs into fully functional websites with me. Using VueJS/ReactJS and their ecosystems, I craft innovative websites tailored precisely to your needs. Enjoy fully customizable yet remarkably lightweight solutions."
    },
    {
        name: "API Development and Integration",
        img: "/img/service/APIDevelopmentAndIntegration.jpeg",
        description: "Need to integrate third-party services or develop custom APIs for your application? I specialize in creating RESTful APIs that enable seamless communication between systems and enhance your software's functionality."
    },
    {
        name: "Custom Web Development",
        img: "/img/service/CustomWebDevelopment.jpeg",
        description: "I design responsive and visually stunning websites optimized for performance and user experience. Whether you need a simple landing page or a complex web application, I have the expertise to bring your vision to life."
    },
    {
        name: "Consulting and Support",
        img: "/img/service/ConsultingAndTechnicalAdvisory.jpeg",
        description: "Whether you're just starting your project or facing technical challenges, I'm here to provide expert guidance and support. I offer consulting services to help you make informed decisions and overcome any obstacles along the way."
    },
    {
        name: "E-commerce Solutions",
        img: "/img/service/E-commerceSolutions.jpeg",
        description: "I specialize in building robust e-commerce platforms that empower businesses to sell their products and services online effortlessly. My solutions are scalable, secure, and packed with advanced features to drive sales and boost customer satisfaction."
    },
    {
        name: "Mobile App Development",
        img: "/img/service/mobileAppDevelopment.jpg",
        description: "I develop native and cross-platform mobile applications for iOS and Android that are intuitive, feature-rich, and designed to engage users. Whether you're targeting smartphones, tablets, or wearable devices, I have you covered."
    },
    {
        name: "CICD",
        img: "/img/service/cicd.jpg",
        description: "I specialize in designing and optimizing CI/CD pipelines to streamline your software delivery process. Utilizing tools like Jenkins, GitLab CI, I automate builds, tests, and deployments for faster, more reliable releases. My expertise in scripting and Infrastructure as Code (IaC) enhances efficiency and scalability, allowing your development team to focus on innovation. Whether you're starting from scratch or refining existing workflows, I deliver tailored solutions that boost productivity and quality in your software projects."
    },
    {
        name: "Hosting",
        img: "/img/service/hosting.jpg",
        description: "I offer comprehensive hosting services to ensure your applications run smoothly, securely, and efficiently. From setting up cloud infrastructure on AWS, Azure, or Google Cloud, to configuring and maintaining web servers, databases, and load balancers, I provide end-to-end solutions tailored to your needs. My expertise in containerization with Docker and orchestration with Kubernetes ensures scalable and resilient deployments. With a focus on uptime, security, and performance, I deliver hosting solutions that enable your business to thrive in the digital landscape."
    },
    {
        name: "Domain",
        img: "/img/service/domain.jpg",
        description: "Registering a domain name is simple, but I can offer expert advice and assistance to make the process even easier. Need help choosing the right provider or transferring your domain to a new website? I'm here to guide you every step of the way."
    }
]
</script>