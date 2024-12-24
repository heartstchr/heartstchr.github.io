---
title: My Services
icon: code
order: 3
lastUpdated: false
editLink: false
copyright: false
---

<div class="flex flex-column gap-4 mt-6 line-height-3">
  <div>I’m your ultimate partner for all things development and hosting, offering a comprehensive range of services to bring your digital vision to life. With a deep understanding of modern technologies and trends, I aim to provide solutions that are not only functional but also innovative and future-ready.
  </div>

  <div>
    Each service is designed with your unique requirements in mind to deliver the best results.
  </div>

  <div>
  My focus is always on delivering high-quality, personalized solutions. Let’s explore the many ways I can help you succeed in the digital space.</div>
  <div>
        <!-- <a href="https://cal.com/stackseekers" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
            <Button label="Book Your Free Consultation!" icon="pi pi-calendar-clock" severity="primary" raised rounded />
        </a> -->
    </div>
</div>

<div class="flex flex-wrap md:gap-4 gap-2">
    <TabView class="p-tabview-vertical md:flex hidden">
      <!-- Tab Panels -->
      <TabPanel :header="`${service.name}`" leftIcon="pi pi-home" v-for= "(service, index) in services" :id="service.code">
        <div class="shadow-1 col-12 border-round-2xl vp-feature-item p-0 overflow-hidden" itemscope itemtype="https://schema.org/SoftwareApplication">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,202.7C560,213,640,203,720,192C800,181,880,171,960,181.3C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
              <div class="px-4 m-2">
                  <div class="text-4xl font-bold mb-4">
                      <span itemprop="name">{{service.name}}</span>
                  </div>
                  <Image v-if="service.code" :src="`/img/service/${service.code}.jpeg`" class="" :alt="service.name" width="100%"/>
                  <div class="my-4 flex flex-column gap-2 line-height-3">
                      <link itemprop="applicationCategory" :href="service.schema" />
                      <div itemprop="name" v-for= "(description, index) in service.descriptions" >    {{description}}
                      </div>
                      <a :href="`mailto:jiwan.cse@gmail.com?subject=Inquiry : ${service.name} Services`" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
                      <Button label="Book Now!" icon="pi pi-briefcase" severity="primary" raised rounded />
                      </a>
                  </div>
              </div>
          </div>
      </TabPanel>
    </TabView>
    <div class="grid my-6 md:col-6 p-0 md:hidden flex" :class="[{ 'md:col-12' : (index === services.length-1 || index === 0 || index === 3) }]" v-for= "(service, index) in services" :id="service.code">
        <div class="shadow-1 col-12 border-round-2xl vp-feature-item p-0 overflow-hidden" itemscope itemtype="https://schema.org/SoftwareApplication">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,202.7C560,213,640,203,720,192C800,181,880,171,960,181.3C1040,192,1120,224,1200,218.7C1280,213,1360,171,1400,149.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <div class="px-4 m-2">
                <div class="text-4xl font-bold mb-4">
                    <span itemprop="name">{{service.name}}</span>
                </div>
                <Image v-if="service.code" :src="`/img/service/${service.code}.jpeg`" class="" :alt="service.name" width="100%"/>
                <div class="my-4 flex flex-column gap-2 line-height-3">
                    <link itemprop="applicationCategory" :href="service.schema" />
                    <div itemprop="name" v-for= "(description, index) in service.descriptions" >    {{description}}
                    </div>
                    <a :href="`mailto:jiwan.cse@gmail.com?subject=Inquiry : ${service.name} Services`" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"> 
                    <Button label="Book Now!" icon="pi pi-briefcase" severity="primary" raised rounded />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<script setup lang="ts">
const services = [
    {
        name: "Figma to Web",
        code: "FigmatoWeb",
        descriptions: [
            "Turn your Figma designs into fully functional, dynamic websites with my expertise. Leveraging the power of VueJS, ReactJS, and their robust ecosystems, I create innovative websites tailored precisely to your requirements.",
            "My solutions are fully customizable and reusable, ensuring they align perfectly with your vision, while remaining exceptionally lightweight for optimal performance."]
    },
    {
        name: "E-commerce",
        code: "E-commerceSolutions",
        descriptions:[ 
            "I specialize in building robust e-commerce platforms that empower businesses to sell their products and services online effortlessly.", 
            "My solutions are scalable, secure, and packed with advanced features to drive sales and boost customer satisfaction."]
    },
    {
        name: "Consulting",
        code: "ConsultingAndTechnicalAdvisory",
        descriptions:[ 
            "Whether you're just starting your project or facing technical challenges, I'm here to provide expert guidance and support.",
            " I offer consulting services to help you make informed decisions and overcome any obstacles along the way."]
    },
    {
        name: "Web App",
        code: "CustomWebDevelopment",
        descriptions:[ 
            "I design responsive and visually stunning custom web application optimized for performance and user experience.",
            "Whether you need a simple landing page or a complex web application, I have the expertise to bring your vision to life."]
    },
    {
        name: "API",
        code: "APIDevelopmentAndIntegration",
        descriptions:[ 
            "Need to integrate third-party services or develop custom APIs for your application? ",
            "I specialize in creating RESTful APIs, enabling seamless communication between systems and enhancing your software's functionality."]
    },
    {
        name: "Hosting",
        code: "hosting",
        descriptions:[ 
            "I offer comprehensive hosting services to ensure your applications run smoothly, securely, and efficiently. From setting up cloud infrastructure on AWS, or Azure to configuring and maintaining web servers, databases, and load balancers, I provide end-to-end solutions tailored to your needs.",
            "My expertise in containerization with Docker and orchestration with Kubernetes ensures scalable and resilient deployments. With a focus on uptime, security, and performance, I deliver hosting solutions that enable your business to thrive in the digital landscape."]
    },
    {
        name: "CICD",
        code: "cicd",
        descriptions:[ 
            "I specialize in designing and optimizing CI/CD pipelines to streamline your software delivery process. Utilizing tools like Jenkins, GitLab CI, I automate builds, tests, and deployments for faster, more reliable releases.",
            "My expertise in scripting and Infrastructure as Code (IaC) enhances efficiency and scalability, allowing your development team to focus on innovation. Whether you're starting from scratch or refining existing workflows, I deliver tailored solutions that boost productivity and quality in your software projects."]
    },
]
</script>
