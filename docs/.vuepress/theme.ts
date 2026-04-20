import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";

export default hopeTheme(
  {
    hostname: "https://stackseekers.com",
    logo: "/img/stackseekers.webp",
    logoDark: "/img/whitelogo.webp",
    author: {
      name: "Stack Seekers",
      url: "http://heartstchr.github.io/",
    },
    repo: "heartstchr",
    docsDir: "/src",
    darkmode: "auto",
    pageInfo: ["Category", "Tag", "ReadingTime", "Date"],
    sidebar: false,
    breadcrumb: true,
    locales: {
      "/": {
        navbar: enNavbar,
        footer: `
        <div>
          <div class="flex flex-wrap">
            <div class="w-full">
              <div class="gap-2">
                <div class="flex md:flex-row flex-column justify-content-between flex-grow-1 my-4 align-item-center gap-4">
                  <div class="flex flex-row justify-content-between align-items-center gap-4">
                    <a href="/web-development-projects/"> Projects </a>
                    <a href="/web-development-services/"> Services </a>
                    <a href="/careers/"> Careers </a>
                    <a href="/contact/"> Contact </a>
                  </div>
                </div>
                <div class="flex md:flex-row flex-column justify-content-center flex-grow-1 my-2 align-item-center gap-4">
                  <div class="flex flex-row justify-content-center align-items-center gap-4">
                    <a href="/privacy-policy/"> Privacy Policy </a>
                    <a href="/terms-of-service/"> Terms of Service </a>
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
      seo: {
        canonical: (page) => {
          // Strip query parameters and hash from canonical URL
          let cleanPath = page.path.replace(/\?.*$/, '').replace(/#.*$/, '');
          // Ensure homepage always has trailing slash for consistency
          if (cleanPath === '/' || cleanPath === '') {
            cleanPath = '/';
          }
          // Ensure path doesn't have double slashes
          cleanPath = cleanPath.replace(/\/+/g, '/');
          return `https://stackseekers.com${cleanPath}`;
        },
        // Dynamically set Open Graph image based on project frontmatter
        ogp: (ogp, page) => {
          const images = page.frontmatter?.project?.images;
          if (Array.isArray(images) && images.length > 0 && images[0].itemImageSrc) {
            const src = images[0].itemImageSrc;
            ogp['og:image'] = src.startsWith('http') ? src : `https://stackseekers.com${src}`;
          } else if (!ogp['og:image']) {
             // Fallback if no image is found by default logic
             ogp['og:image'] = 'https://stackseekers.com/img/home/jiwanghosal.webp';
          }
          return ogp;
        },
      },
      sitemap: {
        changefreq: "hourly",
      },
      blog: true,
      git: {
        contributors: false, // Disable contributors list
      },
      pwa: false, // Disable PWA completely to avoid service worker caching issues
    },
  },
  { custom: true }
);
