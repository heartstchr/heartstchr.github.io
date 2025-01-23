import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "", icon: "pi pi-home", link: "/" },
  { text: "Projects", icon: "pi pi-briefcase", link: "/projects/" },
  {
    text: "Services",
    icon: "pi pi-code",
    link: "/services/",
    children: [
      {
        text: "Figma to web",
        link: "services/#FigmatoWeb",
      },
      {
        text: "E-commerce",
        link: "services/#E-commerceSolutions",
      },
      {
        text: "Consulting",
        link: "services/#ConsultingAndTechnicalAdvisory",
      },
      {
        text: "Web Development",
        link: "services/#CustomWebDevelopment",
      },
      {
        text: "API Developement",
        link: "services/#APIDevelopmentAndIntegration",
      },
      {
        text: "CICD",
        link: "services/#cicd",
      },
      {
        text: "Hosting",
        link: "services/#hosting",
      },
    ],
  },
  { text: "About", icon: "pi pi-user", link: "/about/" },
  {
    text: "Videos",
    icon: "pi pi-youtube",
    link: "videos/",
  },
]);
