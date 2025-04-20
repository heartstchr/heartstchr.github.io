import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "Web Developer", icon: "pi pi-home", link: "/" },
  {
    text: "Services",
    icon: "pi pi-code",
    link: "/web-development-services/",
    children: [
      {
        text: "Figma to web",
        link: "web-development-services/#FigmatoWeb",
      },
      {
        text: "E-commerce",
        link: "web-development-services/#E-commerceSolutions",
      },
      {
        text: "Consulting",
        link: "web-development-services/#ConsultingAndTechnicalAdvisory",
      },
      {
        text: "Web Development",
        link: "web-development-services/#CustomWebDevelopment",
      },
      {
        text: "API Developement",
        link: "web-development-services/#APIDevelopmentAndIntegration",
      },
      {
        text: "CICD",
        link: "web-development-services/#cicd",
      },
      {
        text: "Hosting",
        link: "web-development-services/#hosting",
      },
    ],
  },
  {
    text: "Projects",
    icon: "pi pi-briefcase",
    link: "/web-development-projects/",
  },
  { text: "About", icon: "pi pi-user", link: "/about/" },
  {
    text: "Videos",
    icon: "pi pi-youtube",
    link: "stackseekers-tv/",
  },
]);
