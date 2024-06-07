import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import theme from "./theme.js";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        Components({
          resolvers: [PrimeVueResolver()],
        }),
      ],
    },
    vuePluginOptions: {},
  }),
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Jiwan Ghosal",
      description: "Senior Full Stack Developer - Graphic Artist - UI/UX Designer",
    },
  },

  // head: [
  //   [
  //     "link",
  //     {
  //       rel: "stylesheet",
  //       href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
  //     },
  //   ],
  // ],

  theme,

  shouldPrefetch: false,
});
