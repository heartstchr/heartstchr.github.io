import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Jiwan Ghosal",
      description: "Senior Full Stack Developer - Graphic Artist - UI/UX Designer",
    },
  },

  theme,

  shouldPrefetch: false,
});
