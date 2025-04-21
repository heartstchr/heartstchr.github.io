import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";

export default hopeTheme(
  {
    hostname: "https://heartstchr.github.io/",
    author: {
      name: "Jiwan Ghosal",
      url: "http://heartstchr.github.io/",
    },
    repo: "heartstchr",
    docsDir: "/src",
    darkmode: "auto",
    pageInfo: [],
    sidebar: false,
    locales: {
      "/": {
        navbar: enNavbar,
        footer: `
      <div>
        <div class="flex flex-wrap">
          <div class="w-full">
            <div class="gap-2">
              <div class="flex md:flex-row flex-column justify-content-between flex-grow-1 my-4 align-item-center gap-4">
                <div class="flex flex-row justify-content-between align-items-center gap-2 m-auto">© 2024 Stack Seekers</div>
                  <div class="flex md:flex-row flex-column justify-content-between align-items-center gap-4">
                  <a href="/web-development-projects/"> Projects </a>
                  <a href="/web-development-services/"> Services </a>
                  <a href="/about/"> About </a>
                  <a href="/stackseekers-tv/"> Videos </a>
                  <a href="/#contact"> Contact </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`,
        displayFooter: true,
      },
    },
    plugins: {
      seo: true,
      blog: false,
      pwa: {
        favicon: "/favicon.ico",
        cacheHTML: false,
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
        },
      },
    },
  },
  { custom: true }
);
