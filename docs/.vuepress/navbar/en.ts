import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Projects", icon: "discover", link: "/projects/" },
  { text: "Services", icon: "code", link: "/services/" },
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
    icon: "youtube-play",
    link: "https://www.youtube.com/@JiwanGhosal",
  },
]);
