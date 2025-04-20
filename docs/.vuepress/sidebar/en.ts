import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "pi pi-briefcase",
      text: "Projects",
      prefix: "projects/",
      link: "projects/",
    },
    {
      icon: "pi pi-code",
      text: "Services",
      prefix: "web-development-services/",
      link: "web-development-services/",
    },
    { text: "About", icon: "pi pi-user", link: "/about/" },
    {
      text: "Videos",
      icon: "pi pi-youtube",
      link: "videos/",
    },
  ],
});
