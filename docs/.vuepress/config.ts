import { defineUserConfig } from "vuepress";
import { loadEnv } from "vite";
import { viteBundler } from "@vuepress/bundler-vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import { path } from "vuepress/utils";
import theme from "./theme.js";
import { globalSchemas, pageSpecificSchemas } from "./data/schemas.js";

const mode = process.env.NODE_ENV || "development";
const env = loadEnv(mode, process.cwd(), "");

export default defineUserConfig({
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules", "!**/details/*.md"],
  title: "Freelancer Jiwan Ghosal",
  description:
    "Experienced full-stack freelance developer specializing in scalable web, mobile, and software solutions",
  
  define: {
    __WHATSAPP_NUMBER__: JSON.stringify(env.VITE_WHATSAPP_NUMBER || "918017351651"),
    __VITE_YOUTUBE_API_KEY__: JSON.stringify(env.VITE_YOUTUBE_API_KEY || ""),
    __VITE_YOUTUBE_CHANNEL_ID__: JSON.stringify(env.VITE_YOUTUBE_CHANNEL_ID || ""),
    __VITE_YOUTUBE_PODCAST_PLAYLIST_ID__: JSON.stringify(env.VITE_YOUTUBE_PODCAST_PLAYLIST_ID || ""),
    __VITE_YOUTUBE_UPLOADS_PLAYLIST_ID__: JSON.stringify(env.VITE_YOUTUBE_UPLOADS_PLAYLIST_ID || ""),
    __VITE_NOTION_ENDPOINT__: JSON.stringify(env.VITE_NOTION_ENDPOINT || ""),
    __VITE_NOTION_DATABASE_ID__: JSON.stringify(env.VITE_NOTION_DATABASE_ID || ""),
  },

  alias: {
    "@data": path.resolve(__dirname, "data"),
    "@utils": path.resolve(__dirname, "utils"),
    "@components": path.resolve(__dirname, "components"),
    "@services": path.resolve(__dirname, "services"),
  },

  bundler: viteBundler({
    viteOptions: {
      define: {
        __WHATSAPP_NUMBER__: JSON.stringify(env.VITE_WHATSAPP_NUMBER || "918017351651"),
        __VITE_YOUTUBE_API_KEY__: JSON.stringify(env.VITE_YOUTUBE_API_KEY || ""),
        __VITE_YOUTUBE_CHANNEL_ID__: JSON.stringify(env.VITE_YOUTUBE_CHANNEL_ID || ""),
        __VITE_YOUTUBE_PODCAST_PLAYLIST_ID__: JSON.stringify(env.VITE_YOUTUBE_PODCAST_PLAYLIST_ID || ""),
        __VITE_YOUTUBE_UPLOADS_PLAYLIST_ID__: JSON.stringify(env.VITE_YOUTUBE_UPLOADS_PLAYLIST_ID || ""),
        __VITE_NOTION_ENDPOINT__: JSON.stringify(env.VITE_NOTION_ENDPOINT || ""),
        __VITE_NOTION_DATABASE_ID__: JSON.stringify(env.VITE_NOTION_DATABASE_ID || ""),
      },
      resolve: {
        alias: {
          "@data": path.resolve(__dirname, "data"),
          "@utils": path.resolve(__dirname, "utils"),
          "@components": path.resolve(__dirname, "components"),
          "@services": path.resolve(__dirname, "services"),
        },
      },
      plugins: [
        Components({
          resolvers: [PrimeVueResolver()],
          dirs: [path.resolve(__dirname, "./components")],
        }) as unknown as any,
      ],
      build: {
        target: ["es2020", "chrome87", "firefox78", "safari14"],
      },
      ssr: {
        noExternal: ["primevue"],
      },
    },
  }),
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Stack Seekers",
      description:
        "Senior Full Stack Developer - Graphic Artist - UI/UX Designer",
      logo: "/img/whitelogo.webp",
      logoDark: "/img/stackseekers.webp",
      logoAlt: "Stack Seekers Logo – Web Development Experts",
    } as unknown as any,
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
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
  ],
  plugins: [
    (app: any) => ({
      name: "custom-page-config",
      extendsPage: (page: any) => {
        const path = page.path;

        // Custom breadcrumb mapping
        if (path === "/") {
          page.frontmatter.breadcrumb = [{ label: "Home", link: "/" }];
        } else if (path.startsWith("/web-development-projects/")) {
          const parts = path.split("/").filter(Boolean);
          const breadcrumb = [{ label: "Home", link: "/" }];
          breadcrumb.push({
            label: "Projects",
            link: "/web-development-projects/",
          });
          if (parts.length > 1) {
            breadcrumb.push({
              label: page.frontmatter.title?.replace(" | Stack Seekers", "") || parts[1],
              link: path,
            });
          }
          page.frontmatter.breadcrumb = breadcrumb;
        }

        // Apply specific schema if available
        if (pageSpecificSchemas[path]) {
          if (!page.frontmatter.head) page.frontmatter.head = [];
          page.frontmatter.head.push([
            "script",
            { type: "application/ld+json" },
            JSON.stringify(pageSpecificSchemas[path]),
          ]);
        }
      },
    }),
  ],
  theme,
});
