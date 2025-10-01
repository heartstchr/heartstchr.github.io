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
        link: "/web-development-services/figma-to-web/",
      },
      {
        text: "E-commerce",
        link: "/web-development-services/e-commerce-solutions/",
      },
      {
        text: "Consulting",
        link: "/web-development-services/consulting-and-technical-advisory/",
      },
      {
        text: "Web Development",
        link: "/web-development-services/custom-web-development/",
      },
      {
        text: "API Development",
        link: "/web-development-services/api-development-and-integration/",
      },
      {
        text: "CICD",
        link: "/web-development-services/ci-cd/",
      },
      {
        text: "Hosting",
        link: "/web-development-services/hosting/",
      },
      {
        text: "Other",
        link: "contact/",
      },
    ],
  },
  {
    text: "Resources",
    icon: "pi pi-code",
    link: "/web-development-services/",
    children: [
      {
        text: "Blog",
        link: "/posts/",
      },
      {
        text: "Videos",
        link: "stackseekers-tv/",
      },
      {
        text: "Podcast",
        link: "stackcast-podcast-mini/",
      },
      {
        text: "Products",
        link: "https://stackseekers.gumroad.com/",
      },
    ],
  },
  { text: "About", icon: "pi pi-user", link: "/about/" },
  {
    text: "Contact",
    icon: "",
    link: "contact/",
  },
]);
