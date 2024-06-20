---
title: Services
icon: code
order: 3
editLink: false
copyright: false
footer: '<div class="card surface-100 text-600">
 <div class="flex flex-wrap">
      <div class="w-full">
        <div class="gap-2">
          <div class="card flex md:flex-row flex-column justify-content-between flex-grow-1 my-4 align-item-center gap-4">
            <div class="flex flex-row justify-content-between align-items-center gap-2">Copyright © 2022</div>
            <div class="flex md:flex-row flex-column justify-content-between align-items-center gap-4">
              <a href="/about" class="text-600"> About </a>
              <a href="/projects" class="text-600"> Projects </a>
              <a href="/services" class="text-600"> Services </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>'
---


<div class="font-italic">I am your one-stop destination for comprehensive development and hosting services. I offer a wide range of solutions to meet your digital needs. Here's what I can do for you:</div>

<div class="grid mt-4">
  <div class="surface-card shadow-1 m-2 p-4 col-12 border-round-2xl" itemscope itemtype="https://schema.org/SoftwareApplication" v-for= "(service, index) in services">
    <Image v-if="service.img" :src="service.img" class="" :alt="service.name" width="100%"/>
      <div class="text-2xl font-bold">
          <span itemprop="name">{{service.name}}</span>
      </div>
      <div class="mt-4 flex flex-column gap-2">
        <link itemprop="applicationCategory" :href="service.schema" />
        <div itemprop="name">{{service.description}}</div>
        <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink">Contact Us</a>
      </div>
  </div>
</div>


<script setup lang="ts">
const services = [
    {
        name: "Consulting and Technical Advisory",
        schema: "https://schema.org/DeveloperApplication",
        img: "/img/service/ConsultingAndTechnicalAdvisory.jpeg",
        description: "Whether you're just starting out with your project or facing technical challenges, I am here to provide expert guidance and support. We offer consulting services to help you make informed decisions and overcome any obstacles you may encounter along the way."
    },
    {
        name: "Custom Web Development",
        schema: "https://schema.org/DeveloperApplication",
        img: "/img/service/CustomWebDevelopment.jpeg",
        description: "I create responsive and visually stunning websites that are optimized for performance and user experience. Whether you need a simple landing page or a complex web application, I have the skills to make it happen."
    },
    {
        name: "E-commerce Solutions",
        schema: "https://schema.org/DeveloperApplication",
        img: "/img/service/E-commerceSolutions.jpeg",
        description: "I specialize in building robust e-commerce platforms that empower businesses to sell their products and services online seamlessly. Our solutions are scalable, secure, and equipped with advanced features to drive sales and enhance customer satisfaction."
    },
    {
        name: "API Development and Integration",
        schema: "https://schema.org/DeveloperApplication",
        img: "/img/service/APIDevelopmentAndIntegration.jpeg",
        description: "Need to integrate third-party services or create custom APIs for your application? I have the expertise to develop RESTful APIs that facilitate seamless communication between different systems and enhance the functionality of your software."
    },
    {
        name: "Figma to Web",
        schema: "https://schema.org/DeveloperApplication",
        img: "/img/service/FigmatoWeb.jpeg",
        description: "I will convert Figma to a website for you. With Vue and the Vue Ecosystem, I create creative websites that exactly meet your requirements. Fully customizable, but a lot lighter."
    },
    {
        name: "Mobile App Development",
        schema: "https://schema.org/DeveloperApplication",
        description: "From iOS to Android, we develop native and cross-platform mobile applications that are intuitive, feature-rich, and designed to engage your users. Whether you're targeting smartphones, tablets, or wearable devices, I have got you covered."
    },
    {
        name: "CICD",
        schema: "https://schema.org/DeveloperApplication",
        description: "I specialize in creating and optimizing CI/CD pipelines to streamline your software delivery process. Leveraging tools like Jenkins, GitLab CI, and Terraform, I automate builds, tests, and deployments, ensuring faster and more reliable releases. My expertise in scripting and Infrastructure as Code (IaC) enhances efficiency and scalability, allowing your development team to focus on innovation. Whether you're starting from scratch or need to refine existing workflows, I provide tailored solutions that drive productivity and quality in your software projects."
    },
    {
        name: "Hosting",
        schema: "https://schema.org/DeveloperApplication",
        description: "I offer comprehensive hosting services designed to ensure your applications run smoothly, securely, and efficiently. From setting up cloud infrastructure using AWS, Azure, or Google Cloud, to configuring and maintaining web servers, databases, and load balancers, I provide end-to-end solutions tailored to your needs. My expertise in containerization with Docker and orchestration with Kubernetes ensures scalable and resilient deployments. With a focus on uptime, security, and performance, I deliver hosting solutions that allow your business to thrive in a digital landscape."
    },
    {
        name: "Doamin",
        schema: "https://schema.org/DeveloperApplication",
        description: "Registering a domain name is a piece of cake. Could you use some help with that? I can give you advice about the party and also offer you a helping hand during registration. Also, if you want to transfer your domain name to a new website."
    },
    {
        name: "Maintenance and Support",
        schema: "https://schema.org/DeveloperApplication",
        description: "I provide dedicated maintenance and support services to keep your software systems running smoothly and efficiently. My services include regular updates, performance monitoring, bug fixing, and security patches to ensure optimal functionality and protection. With a proactive approach, I identify and resolve potential issues before they impact your operations, offering 24/7 support to address urgent needs. Trust in my expertise to maintain the reliability, security, and performance of your CI/CD pipelines and hosting environments, allowing you to focus on your core business activities."
    }
]
</script>