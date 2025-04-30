import { defineUserConfig } from "vuepress";
import { loadEnv } from "vite";
import { viteBundler } from '@vuepress/bundler-vite';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import { path } from "vuepress/utils";
import theme from "./theme.js";

const mode = process.env.NODE_ENV || "development";
process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

export default defineUserConfig({
  title: "Freelancer Jiwan Ghosal",
  description:
    "Experienced full-stack freelance developer specializing in scalable web, mobile, and software solutions",
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        Components({
          resolvers: [PrimeVueResolver()],
        }),
      ],
      ssr: {
        noExternal: ["primevue"],
      },
    },
    vuePluginOptions: {},
  }),
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Jiwan Ghosal",
      description:
        "Senior Full Stack Developer - Graphic Artist - UI/UX Designer",
      logo: "/img/logojg.svg",
      logoAlt: "Stack Seekers Logo – Web Development Experts",
    },
  },
  head: [
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    ["link", { rel: "dns-prefetch", href: "//stackseekers.com" }],
    ["link", { rel: "dns-prefetch", href: "//heartstchr.github.io" }],
    ["link", { rel: "dns-prefetch", href: "//youtube.com" }],
    ["link", { rel: "dns-prefetch", href: "//github.com" }],
    ["link", { rel: "dns-prefetch", href: "//cdn.simpleicons.org" }],
    ["link", { rel: "dns-prefetch", href: "//googletagmanager.com" }],
    ["link", { rel: "dns-prefetch", href: "//media.licdn.com" }],
    [
      "link",
      {
        rel: "preload",
        as: "image",
        href: "pattern.webp",
        type: "image/webp",
        fetchpriority: "high",
      },
    ],
    [
      "link",
      {
        rel: "preload",
        as: "image",
        href: "/img/home/jiwanghosal.webp",
        type: "image/webp",
        fetchpriority: "high",
      },
    ],
    ["script", { src: "/ga-loader.js" }],
  ],
  theme,
  alias: {
    // Here you can redirect aliases to your own components
    // For example, here we change the theme's home page component to HomePage.vue under user .vuepress/components
    "@theme-hope/modules/navbar/components/NavbarBrand": path.resolve(
      __dirname,
      "./components/NavbarBrand.vue"
    ),
    "@data": path.resolve(__dirname, "./data"),
    "@utils": path.resolve(__dirname, "./utils"),
  },
  shouldPrefetch: false,
  define: {
    __VITE_YOUTUBE_API_KEY__: process.env.VITE_YOUTUBE_API_KEY,
    __VITE_YOUTUBE_CHANNEL_ID__: process.env.VITE_YOUTUBE_CHANNEL_ID,
  },
});