---
title: Services
icon: code
order: 3
---


<blockquote>
    <p>we're your one-stop destination for comprehensive development and hosting services. With a team of experienced and skilled developers, we offer a wide range of solutions to meet your digital needs. Here's what we can do for you</p>
</blockquote>

<div class="container">
  <div class="col-sm-4 portfolio-item column" itemscope itemtype="https://schema.org/SoftwareApplication" v-for= "(service, index) in services">
      <div class="appTitle">
          <span itemprop="name">{{service.name}}</span>
      </div>
      <link itemprop="applicationCategory" :href="service.schema" />
      <div itemprop="name">{{service.description}}</div>
      <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink">Contact Us</a>
  </div>
</div>

<script>
  export default {
    data: () => ({
        services: [
            {
                name: "Custom Web Development",
                schema: "https://schema.org/DeveloperApplication",
                description: "We create responsive and visually stunning websites that are optimized for performance and user experience. Whether you need a simple landing page or a complex web application, we have the skills to make it happen"
            },
            {
                name: "E-commerce Solutions",
                schema: "https://schema.org/DeveloperApplication",
                description: "We specialize in building robust e-commerce platforms that empower businesses to sell their products and services online seamlessly. Our solutions are scalable, secure, and equipped with advanced features to drive sales and enhance customer satisfaction"
            },
            {
                name: "API Development and Integration",
                schema: "https://schema.org/DeveloperApplication",
                description: "Need to integrate third-party services or create custom APIs for your application? We've got the expertise to develop RESTful APIs that facilitate seamless communication between different systems and enhance the functionality of your software"
            },
            {
                name: "Figma to Web",
                schema: "https://schema.org/DeveloperApplication",
                description: "I will figma to website for you. With Vue and Vue Ecosystem I create creative websites that exactly meet your requirments. Fully customizable, but a lot lighter."
            },
            {
                name: "Mobile App Development",
                schema: "https://schema.org/DeveloperApplication",
                description: "From iOS to Android, we develop native and cross-platform mobile applications that are intuitive, feature-rich, and designed to engage your users. Whether you're targeting smartphones, tablets, or wearable devices, we've got you covered."
            },
            {
                name: "CICD",
                schema: "https://schema.org/DeveloperApplication",
                description: "When your existing website could use an update, or your Wordpress plugins are lagging behind, your registrations are about to expire or your design could use a refresher. I am available for all kinds of maintenance."
            },
            {
                name: "Hosting",
                schema: "https://schema.org/DeveloperApplication",
                description: "We offer reliable and secure hosting solutions to ensure your website or application is always available to your users. From shared hosting to dedicated servers, we have options to suit your needs and budget"
            },
            {
                name: "Doamin",
                schema: "https://schema.org/DeveloperApplication",
                description: "Registering a domain name is a piece of cake. Could you use some help with that? I can give you advice about the party and also offer you a helping hand during registration. Also if you want to transfer your domain name to a new website."
            },
            {
                name: "Maintenance and Support",
                schema: "https://schema.org/DeveloperApplication",
                description: "Our commitment doesn't end with the delivery of the project. We provide ongoing maintenance and support services to ensure your application remains up-to-date, secure, and performing optimally at all times"
            },
            {
                name: "Consulting and Technical Advisory",
                schema: "https://schema.org/DeveloperApplication",
                description: "Whether you're just starting out with your project or facing technical challenges, our team is here to provide expert guidance and support. We offer consulting services to help you make informed decisions and overcome any obstacles you may encounter along the way"
            }
        ]
    })
  }
</script>
<style>
    .appTitle{
        margin-bottom:10px;
        font-size: 1.2em;
        font-weight: bold;
    }
    blockquote {
        margin-bottom:100px;
    }
    .portfolio-link img{
        width:50%;
    }
    .portfolio-item {
        padding:20px;
        box-shadow: 0 1px 6px 0 #20212451;
        border-radius: 4px;
        margin-bottom: 30px;
    }
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 20px;
        width: 100%;
        margin: 20px auto;
    }

    .column {
        padding: 20px;
        text-align: center;
    }
</style>