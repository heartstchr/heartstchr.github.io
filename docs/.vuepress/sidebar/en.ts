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
      prefix: "services/",
      link: "services/",
    },
    { text: "About", icon: "pi pi-user", link: "/about/" },
    // {
    //   text: "Graphics",
    //   icon: "creative",
    //   prefix: "graphics/",
    //   link: "graphics/",
    //   children: [
    //     {
    //       text: "Banner",
    //       link: "banner/",
    //     },
    //     {
    //       text: "Logos",
    //       link: "logos/",
    //     },
    //     {
    //       text: "Paintings",
    //       link: "paintings/",
    //     },
    //     {
    //       text: "Vcard",
    //       link: "vcard/",
    //     },
    //   ],
    // },
  ],
});
