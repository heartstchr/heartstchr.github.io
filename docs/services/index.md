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
            <Button label="Book Your Free Consultation!" icon="pi pi-calendar-clock" severity="primary" raised rounded />
        </a>
    </div>
</div>

<div class="flex flex-wrap md:gap-4 gap-2">
    <div class="grid my-6 md:col-6 p-0" :class="[{ 'md:col-12' : (index === services.length-1 || index === 0 || index === 5) }]" v-for= "(service, index) in services" :id="service.code">
        <div class="shadow-1 col-12 border-round-2xl vp-feature-item p-0" itemscope itemtype="https://schema.org/SoftwareApplication">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,202.7C560,213,640,203,720,192C800,181,880,171,960,181.3C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <div class="px-4 m-2">
                <div class="text-4xl font-bold mb-4">
                    <span itemprop="name">{{service.name}}</span>
                </div>
                <Image v-if="service.code" :src="`/img/service/${service.code}.jpeg`" class="" :alt="service.name" width="100%"/>
                <div class="my-4 flex flex-column gap-2">
                    <link itemprop="applicationCategory" :href="service.schema" />
                    <div itemprop="name">{{service.description}}</div>
                    <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
                    <Button label="Book Now!" icon="pi pi-briefcase" severity="primary" raised rounded />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Contact Me -->
<div class="border-round-md vp-feature-item" id="contact">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <div>
    <div class="text-center pb-4">
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <div class="mx-4 text-center text-xl">
      Ready to turn your vision into reality? Let’s discuss how I can help you achieve your goals.
    </div>
    <div class="my-4">
      <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="flex justify-content-center text-center no-underline"> 
        <Button label="Tell Us Your Needs!" icon="pi pi-briefcase" severity="primary" raised rounded />
      </a>
    </div>
    <div class="flex flex-row justify-content-end flex-wrap gap-4 mx-6">
      <a
        v-for="(socialElement, socialIndex) in social"
        :key="socialIndex"
        :href="socialElement.url"
        target="_blank"
        class="flex flex-row gap-2"
        >
        <i :class="socialElement.icon" style="font-size: 1rem"></i>
        </a>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
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
