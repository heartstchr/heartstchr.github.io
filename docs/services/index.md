---
title: Services
icon: code
order: 3
lastUpdated: false
editLink: false
copyright: false
---

<div class="flex flex-column gap-4 my-6">
  <div>I’m your ultimate partner for all things development and hosting, offering a comprehensive range of services to bring your digital vision to life. With a deep understanding of modern technologies and trends, I aim to provide solutions that are not only functional but also innovative and future-ready.
  </div>

  <div>
  Whether you’re looking for a custom-built website that stands out, a seamless mobile application to engage your audience, or reliable hosting and deployment services to ensure everything runs smoothly, I’ve got you covered. Each service is designed with your unique requirements in mind to deliver the best results.
  </div>

  <div>
  My focus is always on delivering high-quality, personalized solutions. By understanding your specific needs and goals, I create digital experiences that truly resonate with your target audience. Let’s explore the many ways I can help you succeed in the digital space.</div>
  <div>
        <a href="https://cal.com/stackseekers" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
            <Button label="Schedule Meeting" icon="pi pi-calendar-clock" severity="primary" raised rounded />
        </a>
    </div>
</div>

<div class="grid my-6" v-for= "(service, index) in services" :id="service.code">
  <div class="surface-card shadow-1 m-2 p-4 col-12 border-round-2xl vp-feature-item" itemscope itemtype="https://schema.org/SoftwareApplication">
    <div class="text-4xl font-bold mb-4">
        <span itemprop="name">{{service.name}}</span>
    </div>
    <Image v-if="service.code" :src="`/img/service/${service.code}.jpeg`" class="" :alt="service.name" width="100%"/>
      <div class="mt-4 flex flex-column gap-2">
        <link itemprop="applicationCategory" :href="service.schema" />
        <div itemprop="name">{{service.description}}</div>
        <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
          <Button label="Hire Now" icon="pi pi-briefcase" severity="primary" raised rounded />
        </a>
      </div>
  </div>
</div>

<script setup lang="ts">
const services = [
    {
        name: "Consulting and Support",
        code: "ConsultingAndTechnicalAdvisory",
        description: "Whether you're just starting your project or facing technical challenges, I'm here to provide expert guidance and support. I offer consulting services to help you make informed decisions and overcome any obstacles along the way."
    },
    {
        name: "Figma to Web",
        code: "FigmatoWeb",
        description: "Turn your Figma designs into fully functional, dynamic websites with my expertise. Leveraging the power of VueJS, ReactJS, and their robust ecosystems, I create innovative websites tailored precisely to your requirements. My solutions are fully customizable, ensuring they align perfectly with your vision, while remaining exceptionally lightweight for optimal performance."
    },
    {
        name: "E-commerce Solutions",
        code: "E-commerceSolutions",
        description: "I specialize in building robust e-commerce platforms that empower businesses to sell their products and services online effortlessly. My solutions are scalable, secure, and packed with advanced features to drive sales and boost customer satisfaction."
    },
    {
        name: "Custom Web Development",
        code: "CustomWebDevelopment",
        description: "I design responsive and visually stunning websites optimized for performance and user experience. Whether you need a simple landing page or a complex web application, I have the expertise to bring your vision to life."
    },
    {
        name: "API Development and Integration",
        code: "APIDevelopmentAndIntegration",
        description: "Need to integrate third-party services or develop custom APIs for your application? I specialize in creating RESTful APIs, enabling seamless communication between systems and enhancing your software's functionality"
    },    
    {
        name: "Mobile App Development",
        code: "mobileAppDevelopment",
        description: "I develop native and cross-platform mobile applications for iOS and Android that are intuitive, feature-rich, and designed to engage users. Whether you're targeting smartphones, tablets, or wearable devices, I have you covered."
    },
    {
        name: "CICD",
        code: "cicd",
        description: "I specialize in designing and optimizing CI/CD pipelines to streamline your software delivery process. Utilizing tools like Jenkins, GitLab CI, I automate builds, tests, and deployments for faster, more reliable releases. My expertise in scripting and Infrastructure as Code (IaC) enhances efficiency and scalability, allowing your development team to focus on innovation. Whether you're starting from scratch or refining existing workflows, I deliver tailored solutions that boost productivity and quality in your software projects."
    },
    {
        name: "Hosting",
        code: "hosting",
        description: "I offer comprehensive hosting services to ensure your applications run smoothly, securely, and efficiently. From setting up cloud infrastructure on AWS, Azure, or Google Cloud, to configuring and maintaining web servers, databases, and load balancers, I provide end-to-end solutions tailored to your needs. My expertise in containerization with Docker and orchestration with Kubernetes ensures scalable and resilient deployments. With a focus on uptime, security, and performance, I deliver hosting solutions that enable your business to thrive in the digital landscape."
    },
    {
        name: "Domain",
        code: "domain",
        description: "Registering a domain name is simple, but I can offer expert advice and assistance to make the process even easier. Need help choosing the right provider or transferring your domain to a new website? I'm here to guide you every step of the way."
    }
]
</script>
