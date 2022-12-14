import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "Projects",
      prefix: "projects/",
      link: "projects/",
    },
    {
      text: "Graphics",
      icon: "creative",
      prefix: "graphics/",
      link: "graphics/",
      children: [
        {
          text: "Banner",
          link: "banner/",
        },
        {
          text: "Logos",
          link: "logos/",
        },
        {
          text: "Paintings",
          link: "paintings/",
        },
        {
          text: "Vcard",
          link: "vcard/",
        },
      ],
    },
  ],
});
