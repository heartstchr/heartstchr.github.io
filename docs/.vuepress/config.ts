import { defineUserConfig } from "vuepress";
import fs from "node:fs";
import { loadEnv } from "vite";
import { viteBundler } from "@vuepress/bundler-vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import { path } from "vuepress/utils";
import theme from "./theme.js";
import { globalSchemas, pageSpecificSchemas } from "./data/schemas.js";

const mode = process.env.NODE_ENV || "development";
process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

const SUPPORT_EMAIL = "support@stackseekers.com";

export default defineUserConfig({
  title: "Stack Seekers",
  description:
    "Experienced full-stack freelance developer specializing in scalable web, mobile, and software solutions",
  lang: "en-US",
  base: "/",
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        Components({
          resolvers: [PrimeVueResolver()],
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.md\?vue/],
        }) as unknown as any,
        {
          name: "emit-build-version",
          apply: "build",
          closeBundle() {
            const distDir = path.resolve(__dirname, "./dist");
            const assetsDir = path.join(distDir, "assets");
            const appFile = fs
              .readdirSync(assetsDir)
              .find((f: string) => /^app-[A-Za-z0-9_-]+\.js$/.test(f));
            const bundleHash = appFile ? appFile.replace(/^app-/, "").replace(/\.js$/, "") : "";
            const version = {
              hash: bundleHash,
              timestamp: Date.now(),
            };
            fs.writeFileSync(
              path.join(distDir, "version.json"),
              JSON.stringify(version)
            );
            // Also expose to the page head-injected version check
            fs.writeFileSync(
              path.join(distDir, "assets", "version.js"),
              `window.__BUILD_VERSION__=${JSON.stringify(version)};`
            );
          },
        } as any,
      ],
      ssr: {
        noExternal: ["primevue"],
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes("node_modules/primevue")) {
                return "vendor-primevue";
              }
              if (id.includes("node_modules/vue-router") || id.includes("node_modules/vue/")) {
                return "vendor-vue";
              }
            },
          },
        },
      },
    },
    vuePluginOptions: {},
  }),
  head: [
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "public, max-age=31536000, immutable", // Cache static assets
      },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "/img/stackseekers.webp" }],
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
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
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
        href: "/img/home/jiwanghosal.webp",
        type: "image/webp",
        fetchpriority: "high",
      },
    ],
    ["meta", { name: "ai-category", content: "Enterprise Architecture Digital Transformation" }],
    ["meta", { name: "ai-specialty", content: "Fractional CTO, AI Automation, Scalable SaaS" }],
    ["script", { src: "/ga-loader.js" }],
    ["script", { src: "/sw-register.js" }],
    [
      "script",
      {
        children: `(function(){if(document.querySelector('link[rel="stylesheet"][href*="version"]')){return}var reloaded=sessionStorage.getItem("ss_bs");if(reloaded){return}function getBundleHash(){var s=document.querySelector('script[src*="/assets/app-"]');if(s){var m=s.src.match(/\\/app-([A-Za-z0-9_-]+)\\.js/);if(m){return m[1]}}return""}try{fetch("/version.json"+location.search,{cache:"no-store"}).then(function(r){return r.ok?r.json():null}).then(function(v){if(v&&v.hash){if(v.hash!==getBundleHash()){sessionStorage.setItem("ss_bs","1");location.reload(true)}}})}catch(e){}})();`,
      },
    ],
  ],
  theme,
  plugins: [
    (app: any) => ({
      name: "custom-page-config",
      extendsPage: (page: any) => {
        const path = page.path;
        
        // Disable metadata/breadcrumbs for all posts
        if (path.startsWith("/posts/")) {
          page.frontmatter.pageInfo = false;
          page.frontmatter.breadcrumb = false;
          page.frontmatter.contributors = false;
        }

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
    "@theme-hope/components/navbar/NavbarBrand": path.resolve(
      __dirname,
      "./components/NavbarBrand.vue"
    ),
    "@theme-hope/components/navbar/RepoLink": path.resolve(
      __dirname,
      "./components/RepoLink.vue"
    ),
    "@theme-hope/components/sidebar/Sidebar": path.resolve(
      __dirname,
      "./components/Sidebar.vue"
    ),
    "@theme-hope/components/base/PageTitle": path.resolve(
      __dirname,
      "./components/PageTitle.vue"
    ),
    "@theme-hope/components/base/BreadCrumb": path.resolve(
      __dirname,
      "./components/BreadCrumb.vue"
    ),
    "@theme-hope/components/base/MainFadeInUpTransition": path.resolve(
      __dirname,
      "./components/MainFadeInUpTransition.vue"
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
    __WHATSAPP_NUMBER__: process.env.VITE_WHATSAPP_NUMBER || "917026217029",
    __VITE_RAZORPAY_KEY_ID__: process.env.VITE_RAZORPAY_KEY_ID || "",
    __VITE_DODO_PAYMENT_URL__: process.env.VITE_DODO_PAYMENT_URL || "https://checkout.dodopayments.com/buy/pdt_0NmnKgqaTDyhk2wTWUM6i",
    __VITE_SUPPORT_EMAIL__: SUPPORT_EMAIL,
  },
});
