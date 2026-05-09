import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "🌐", icon: "pi pi-home", link: "/" },
  {
    text: "Projects",
    icon: "pi pi-briefcase",
    link: "/web-development-projects/",
    children: [
      {
        text: "Enterprise",
        link: "/web-development-projects/enterprise/",
      },
      {
        text: "AI",
        link: "/web-development-projects/ai/",
      },
      {
        text: "SaaS",
        link: "/web-development-projects/saas/",
      },
      {
        text: "Automation",
        link: "/web-development-projects/automation/",
      },
      {
        text: "Startup MVPs",
        link: "/web-development-projects/startup-mvps/",
      },
      {
        text: "All Projects",
        link: "/web-development-projects/",
      },
    ],
  },
  {
    text: "Services",
    icon: "pi pi-code",
    link: "/web-development-services/",
    children: [
      {
        text: "Product Architecture",
        link: "/web-development-services/product-architecture-and-scaling/",
      },
      {
        text: "AI Automation",
        link: "/web-development-services/ai-and-automation-strategy/",
      },
      {
        text: "Fractional CTO",
        link: "/web-development-services/fractional-cto-and-advisory/",
      },
      {
        text: "Cloud Migration",
        link: "/web-development-services/enterprise-cloud-migration/",
      },
      {
        text: "Programmatic SEO",
        link: "/web-development-services/programmatic-seo-and-growth/",
      },
      {
        text: "API Performance",
        link: "/web-development-services/api-performance-and-integration/",
      },
      {
        text: "All Services",
        link: "/web-development-services/",
      },
    ],
  },
  {
    text: "Resources",
    icon: "pi pi-code",
    link: "/web-development-services/",
    children: [
      {
        text: "Blog",
        link: "/posts/",
      },
      {
        text: "Audit Checklist",
        link: "/startup-stack-audit-checklist/",
      },
      {
        text: "Videos",
        link: "stackseekers-tv/",
      },
      {
        text: "Podcast",
        link: "stackcast-podcast-mini/",
      },
      {
        text: "Products",
        link: "https://stackseekers.gumroad.com/",
      },
    ],
  },
  {
    text: "About",
    icon: "pi pi-user",
    link: "/about/",
    children: [
      {
        text: "Agency",
        link: "/about/",
      },
      {
        text: "Jiwan Ghosal Profile",
        link: "/jiwan-ghosal/",
      },
    ],
  },
  {
    text: "Contact",
    icon: "",
    link: "contact/",
  },
]);
