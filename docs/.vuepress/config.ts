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
      ssr: {
          noExternal: [
              'primevue',
          ],
      },
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
  head: [
    ['script', {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-L6P0G1Y09S', 
        async: true,
    }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', 'G-L6P0G1Y09S');
  `]
  ],
  theme,
  shouldPrefetch: false,
});