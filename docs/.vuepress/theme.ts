import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://heartstchr.github.io/",
  author: {
    name: "Jiwan Ghosal",
    url: "http://heartstchr.github.io/",
  },
  logo: "/img/logojg.svg",
  repo: "heartstchr",
  docsDir: "/src",
  pageInfo: [],
  locales: {
    "/": {
      navbar: enNavbar,
      sidebar: false,
      footer: `
      <div>
        <div class="flex flex-wrap">
        <div class="w-full">
        <div class="gap-2">
        <div class="flex md:flex-row flex-column justify-content-between flex-grow-1 my-4 align-item-center gap-4">
        <div class="flex flex-row justify-content-between align-items-center gap-2 m-auto">© 2024 Stack Seekers</div>
        <div class="flex md:flex-row flex-column justify-content-between align-items-center gap-4">
        <a href="/projects/"> Projects </a>
        <a href="/services/"> Services </a>
        <a href="/about/"> About </a>
        <a href="/videos/"> Videos </a>
        <a href="/#contact"> Contact </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>`,
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },
  blog: {},
  plugins: {
    blog: true,
    comment: {},
    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      demo: true,
      gfm: true,
      figure: true,
      include: true,
      mark: true,
      playground: {
        presets: ["ts", "vue"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
