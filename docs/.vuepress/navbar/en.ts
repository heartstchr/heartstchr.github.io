import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Projects", icon: "discover", link: "/projects/" },
  {
    text: "Services",
    icon: "code",
    link: "/services/",
    children: [
      {
        text: "Figma to web",
        link: "services/#FigmatoWeb",
      },
      {
        text: "API Developement",
        link: "services/#APIDevelopmentAndIntegration",
      },
      {
        text: "Web Development",
        link: "services/#CustomWebDevelopment",
      },
      {
        text: "Consulting",
        link: "services/#ConsultingAndTechnicalAdvisory",
      },
      {
        text: "E-commerce",
        link: "services/#E-commerceSolutions",
      },
      {
        text: "Mobile App",
        link: "services/#mobileAppDevelopment",
      },
      {
        text: "CICD",
        link: "services/#cicd",
      },
      {
        text: "Hosting",
        link: "services/#hosting",
      },
      {
        text: "Domain",
        link: "services/#domain",
      },
    ],
  },
  // {
  //   text: "Graphics",
  //   icon: "creative",
  //   prefix: "/graphics/",
  //   children: [
  //     {
  //       text: "Banner",
  //       icon: "creative",
  //       link: "banner/",
  //     },
  //     {
  //       text: "Logos",
  //       icon: "creative",
  //       link: "logos/",
  //     },
  //     {
  //       text: "Paintings",
  //       icon: "creative",
  //       link: "paintings/",
  //     },
  //     {
  //       text: "Vcard",
  //       icon: "creative",
  //       link: "vcard/",
  //     },
  //   ],
  // },
  { text: "About", icon: "discover", link: "/about/" },
  // { text: "Blog", icon: "rss", link: "/blog/" },
  {
    text: "YouTube",
    icon: "pi pi-youtube",
    link: "https://www.youtube.com/@stackseekers",
  },
]);
