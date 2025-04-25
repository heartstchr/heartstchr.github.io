import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "🌐", icon: "pi pi-home", link: "/" },
  {
    text: "Projects",
    icon: "pi pi-briefcase",
    link: "/web-development-projects/",
  },
  {
    text: "Services",
    icon: "pi pi-code",
    link: "/web-development-services/",
    children: [
      {
        text: "Figma to web",
        link: "web-development-services/#figma-to-web",
      },
      {
        text: "E-commerce",
        link: "web-development-services/#e-commerce-solutions",
      },
      {
        text: "Consulting",
        link: "web-development-services/#consulting-and-technical-advisory",
      },
      {
        text: "Web Development",
        link: "web-development-services/#custom-web-development",
      },
      {
        text: "API Development",
        link: "web-development-services/#API-development-and-integration",
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
  { text: "About", icon: "pi pi-user", link: "/about/" },
  {
    text: "Videos",
    icon: "pi pi-youtube",
    link: "stackseekers-tv/",
  },
]);
