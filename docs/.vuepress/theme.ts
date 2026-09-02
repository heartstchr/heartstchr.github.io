import { footer } from "./footer.js";
import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { pageSpecificSchemas } from "./data/schemas.js";

export default hopeTheme(
  {
    hostname: "https://stackseekers.com",
    logo: "/img/stackseekers.webp",
    logoDark: "/img/whitelogo.webp",
    author: {
      name: "Stack Seekers",
      url: "https://stackseekers.com/",
    },
    repo: "heartstchr",
    docsDir: "/src",
    darkmode: "disable",
    appearance: false,
    pageInfo: ["Category", "Tag", "ReadingTime", "Date"],
    sidebar: false,
    breadcrumb: true,
    navbar: enNavbar,
    footer: footer,
    displayFooter: true,
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
        // Only treat individual blog posts (/posts/<slug>/) as schema.org Article.
        // This stops the theme from emitting a generic "Article" JSON-LD and
        // og:type=article on services, projects, the TV hub, and listing pages,
        // which conflicted with the more specific page schemas we inject.
        isArticle: (page) => {
          const path = page.path.replace(/\?.*$/, '').replace(/#.*$/, '');
          return /^\/posts\/[^/]+\/?$/.test(path);
        },
        // Where we already inject page-specific JSON-LD via the
        // "custom-page-config" plugin, suppress the theme's generic WebPage/Article
        // schema entirely to avoid conflicting duplicate structured data.
        jsonLd: (defaultJSONLD, page) => {
          const path = page.path.replace(/\?.*$/, '').replace(/#.*$/, '');
          if (pageSpecificSchemas[path] && pageSpecificSchemas[path].length > 0) {
            return undefined;
          }
          return defaultJSONLD;
        },
        // Dynamically set Open Graph image based on project frontmatter, set a
        // per-page og:type, and ensure twitter:image / twitter:description exist.
        ogp: (ogp, page) => {
          const images = page.frontmatter?.project?.images;
          if (Array.isArray(images) && images.length > 0 && images[0].itemImageSrc) {
            const src = images[0].itemImageSrc;
            ogp['og:image'] = src.startsWith('http') ? src : `https://stackseekers.com${src}`;
          } else if (!ogp['og:image']) {
             // Fallback if no image is found by default logic
             ogp['og:image'] = 'https://stackseekers.com/img/home/jiwanghosal.webp';
          }
          // og:type per page (project hub stays 'website'; only project detail/category pages are 'product')
          const path = page.path.replace(/\?.*$/, '').replace(/#.*$/, '');
          if (/^\/web-development-projects\/.+\/$/.test(path) && path !== '/web-development-projects/') {
            ogp['og:type'] = 'product';
          } else if (ogp['og:type'] === 'article') {
            // keep article only for real posts (handled by isArticle)
          } else {
            ogp['og:type'] = 'website';
          }
          // twitter:image — mirror og:image for all pages
          ogp['twitter:image'] = ogp['og:image'];
          ogp['twitter:image:alt'] = page.title;
          // twitter:description fallback
          if (!ogp['twitter:description']) {
            ogp['twitter:description'] =
              page.frontmatter?.description || ogp['og:description'];
          }
          return ogp;
        },
      },
      sitemap: true,
      blog: true,
      git: {
        contributors: false, // Disable contributors list
      },
      pwa: false, // Disable PWA completely to avoid service worker caching issues
      backToTop: false, // Remove back to top functionality
      mdEnhance: {
        mermaid: true,
      },
    },
  },
  { custom: true }
);
