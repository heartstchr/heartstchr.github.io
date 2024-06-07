import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import theme from "./theme.js";

export default defineUserConfig({
  title: 'Jiwan Ghosal',
  description: 'A portfolio site with PrimeVue',
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
  theme,
  shouldPrefetch: false,
});
