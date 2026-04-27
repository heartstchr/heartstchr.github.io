import { defineUserConfig } from "vuepress";
import { loadEnv } from "vite";
import { viteBundler } from "@vuepress/bundler-vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import { path } from "vuepress/utils";
import theme from "./theme.js";
import { globalSchemas, pageSpecificSchemas } from "./data/schemas.js";

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
        }) as unknown as any,
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
      title: "Stack Seekers",
      description:
        "Senior Full Stack Developer - Graphic Artist - UI/UX Designer",
      // extra keys are permitted by casting
      logo: "/img/whitelogo.webp",
      logoDark: "/img/stackseekers.webp",
      logoAlt: "Stack Seekers Logo – Web Development Experts",
    } as unknown as any,
  },
  head: [
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "public, max-age=31536000, immutable", // Cache static assets
      },
    ],
    ["meta", { property: "og:image", content: "https://stackseekers.com/img/home/jiwanghosal.webp" }],
    ["meta", { property: "og:site_name", content: "Stack Seekers" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@heartstchr" }],
    ["meta", { name: "twitter:creator", content: "@heartstchr" }],
    ...globalSchemas.map((schema) => [
      "script",
      { type: "application/ld+json" },
      JSON.stringify(schema),
    ]),

    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
      },
    ],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
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
    ["meta", { name: "ai-category", content: "Enterprise Architecture Digital Transformation" }],
    ["meta", { name: "ai-specialty", content: "Fractional CTO, AI Automation, Scalable SaaS" }],
    ["script", { src: "/ga-loader.js" }],
  ],
  theme,
  plugins: [
    (app: any) => ({
      name: "inject-json-ld",
      extendsPage: (page: any) => {
        const path = page.path;
        const schemas = pageSpecificSchemas[path] || [];
        if (schemas.length > 0) {
          page.frontmatter.head = [
            ...(page.frontmatter.head || []),
            ...schemas.map((s) => [
              "script",
              { type: "application/ld+json" },
              JSON.stringify(s),
            ]),
          ];
        }
      },
    }),
  ],
  alias: {
    // Here you can redirect aliases to your own components
    // For example, here we change the theme's home page component to HomePage.vue under user .vuepress/components
    "@theme-hope/modules/navbar/components/NavbarBrand": path.resolve(
      __dirname,
      "./components/NavbarBrand.vue"
    ),
    "@theme-hope/modules/navbar/components/RepoLink": path.resolve(
      __dirname,
      "./components/RepoLink.vue"
    ),
    "@theme-hope/modules/navbar/components/Sidebar": path.resolve(
      __dirname,
      "./components/Sidebar.vue"
    ),
    "@data": path.resolve(__dirname, "./data"),
    "@utils": path.resolve(__dirname, "./utils"),
    "@services": path.resolve(__dirname, "./services"),
  },
  shouldPrefetch: false,
  define: {
    __VITE_YOUTUBE_API_KEY__: process.env.VITE_YOUTUBE_API_KEY || "",
    __VITE_YOUTUBE_CHANNEL_ID__: process.env.VITE_YOUTUBE_CHANNEL_ID || "",
    __VITE_YOUTUBE_PODCAST_PLAYLIST_ID__: process.env.VITE_YOUTUBE_PODCAST_PLAYLIST_ID || "",
    __VITE_YOUTUBE_UPLOADS_PLAYLIST_ID__: process.env.VITE_YOUTUBE_UPLOADS_PLAYLIST_ID || "",
    __VITE_NOTION_ENDPOINT__: process.env.VITE_NOTION_ENDPOINT || "",
    __VITE_NOTION_DATABASE_ID__: process.env.VITE_NOTION_DATABASE_ID || "",
    __WHATSAPP_NUMBER__: process.env.VITE_WHATSAPP_NUMBER || "",
  },
});
