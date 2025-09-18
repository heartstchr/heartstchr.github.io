import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "pi pi-briefcase",
      text: "Projects",
      prefix: "web-development-projects/",
      link: "web-development-projects/",
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
      link: "stackseekers-tv/",
    },
    {
      text: "Podcast",
      icon: "pi pi-youtube",
      link: "stackcast-podcast-mini/",
    },
  ],
});
