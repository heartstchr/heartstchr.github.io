import { posts } from "./posts.js";
import { services } from "./services.js";
import { freelance } from "./projects.js";
import { youtubeVideos } from "./youtubeVideos.ts";
import { toKebabCase } from "../utils/index.js";

const DOMAIN = "https://stackseekers.com";

const absoluteUrl = (pagePath: string) => `${DOMAIN}${pagePath}`;

const videoSchema = (video: any, index: number) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": video.url,
  name: video.title,
  description: (video.description || "").slice(0, 300),
  thumbnailUrl: video.thumbnail,
  uploadDate: video.publishedAt,
  contentUrl: video.url,
  embedUrl: `https://www.youtube.com/embed/${video.id}`,
  publisher: {
    "@type": "Organization",
    "@id": `${DOMAIN}/#organization`,
    name: "Stack Seekers",
  },
  author: {
    "@type": "Person",
    "@id": `${DOMAIN}/#person`,
  },
});

const tvHubSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${DOMAIN}/stackseekers-tv/`,
    name: "Stack Seekers TV — Code Tutorials & Architecture Demos",
    description:
      "Watch web development tutorials, app walkthroughs, and architectural demos from an Enterprise Architect building with React, Node.js, and full-stack systems.",
    url: absoluteUrl("/stackseekers-tv/"),
    isPartOf: { "@id": `${DOMAIN}/#organization` },
  },
  ...(youtubeVideos.channelVideos || []).map(videoSchema),
  ...(youtubeVideos.podcastVideos || []).map(videoSchema),
];

const breadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

const faqPageSchema = (qas: Array<[string, string]>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qas.map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: {
      "@type": "Answer",
      text,
    },
  })),
});

export const globalSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${DOMAIN}/#organization`,
    name: "Stack Seekers",
    url: DOMAIN,
    logo: `${DOMAIN}/img/stackseekers.webp`,
    image: `${DOMAIN}/img/home/jiwanghosal.webp`,
    description:
      "Stack Seekers is an independent engineering consultancy focused on fractional CTO advisory, AI automation, programmatic SEO, and scalable product architecture.",
    areaServed: "Worldwide",
    priceRange: "$$$",
    founder: {
      "@id": `${DOMAIN}/#person`,
    },
    knowsAbout: [
      "Fractional CTO advisory",
      "Product architecture",
      "AI automation",
      "Programmatic SEO",
      "React",
      "Next.js",
      "Node.js",
    ],
    sameAs: [
      "https://github.com/heartstchr",
      "https://www.linkedin.com/in/jiwanghosal/",
      "https://www.youtube.com/@stackseekers",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${DOMAIN}/#person`,
    name: "Jiwan Ghosal",
    url: DOMAIN,
    image: `${DOMAIN}/img/home/jiwanghosal.webp`,
    jobTitle: "Enterprise Architecture Partner and Fractional CTO",
    worksFor: {
      "@id": `${DOMAIN}/#organization`,
    },
    knowsAbout: [
      "Enterprise Architecture",
      "SaaS Development",
      "AI Automation",
      "Programmatic SEO",
      "React",
      "Next.js",
      "Node.js",
      "AWS",
      "Azure",
    ],
    sameAs: [
      "https://www.linkedin.com/in/jiwanghosal/",
      "https://github.com/heartstchr",
      "https://www.youtube.com/@stackseekers",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    name: "Stack Seekers",
    alternateName: "Stack Seekers Engineering Consultancy",
    url: DOMAIN,
    description:
      "Stack Seekers is an independent engineering consultancy focused on fractional CTO advisory, AI automation, programmatic SEO, and scalable product architecture.",
    publisher: {
      "@id": `${DOMAIN}/#organization`,
    },
    inLanguage: "en",
    isPartOf: {
      "@id": `${DOMAIN}/#organization`,
    },
  },
];

const homepageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${DOMAIN}/#homepage`,
    url: DOMAIN,
    name: "Stack Seekers | Fractional CTO, AI Automation, and Product Architecture",
    description:
      "Stack Seekers helps startups and enterprise teams with fractional CTO leadership, AI automation, programmatic SEO, and scalable product architecture.",
    about: { "@id": `${DOMAIN}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do I need Programmatic SEO over regular SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regular SEO works for a blog post. Programmatic SEO works for building massive directories or local service marketplaces. If you need to target long-tail keywords natively across 1,000 cities, you need database-driven site architecture, not standard blogging tools.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle both Frontend and Backend on custom SaaS builds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. As a full-stack engineering partner, I design the complete system — from fast, interactive user interfaces to high-performance server logic and secure, scalable cloud infrastructure. One partner, full ownership.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can we launch our MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most production-ready MVPs are scoped for a 4 to 8-week delivery cycle. We focus on 'High-Integrity Velocity' — shipping a product that is fast to market but built on a foundation that won't require a total rewrite at 10k users.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work with our existing engineering team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. I often operate as a Fractional CTO or Architecture Lead, working directly with your developers to set standards, review code, and solve the hardest technical bottlenecks while upskilling the internal team.",
        },
      },
      {
        "@type": "Question",
        name: "What is your preferred technology stack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I specialize in the 'Modern Enterprise Stack': React/Next.js, Node.js/TypeScript, and Cloud-Native Infrastructure (AWS/GCP/Azure). I choose tools based on your business constraints, not personal hype.",
        },
      },
      {
        "@type": "Question",
        name: "What if our current codebase is a legacy mess?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "That is where I do my best work. I specialize in phased modernizations and architectural resets — fixing the structural debt while keeping the product running, ensuring zero downtime during the modernization.",
        },
      },
    ],
  },
];

const servicesHubSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${DOMAIN}/web-development-services/#collection`,
    url: `${DOMAIN}/web-development-services/`,
    name: "Engineering Services",
    description:
      "Core consulting and implementation services from Stack Seekers, including fractional CTO advisory, AI automation, programmatic SEO, and product architecture.",
    about: { "@id": `${DOMAIN}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Stack Seekers Service Catalog",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        url: `${DOMAIN}/web-development-services/${service.code}/`,
      },
    })),
  },
];

const contactSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${DOMAIN}/contact/#contact`,
    url: `${DOMAIN}/contact/`,
    name: "Book Jiwan Ghosal",
    description:
      "Contact Stack Seekers to discuss fractional CTO support, AI automation, scalable product engineering, or programmatic SEO systems.",
  },
];

const serviceSchemas = Object.fromEntries(
  services.map((service) => {
    const pagePath = `/web-development-services/${toKebabCase(service.code)}/`;

    return [
      pagePath,
      [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${absoluteUrl(pagePath)}#service`,
          name: service.name,
          serviceType: service.name,
          url: absoluteUrl(pagePath),
          description: service.descriptions.join(" "),
          image: `${DOMAIN}/img/service/${service.imageCode || service.code}.webp`,
          provider: { "@id": `${DOMAIN}/#organization` },
          areaServed: "Worldwide",
          audience: {
            "@type": "Audience",
            audienceType: (service.idealFor || []).join("; "),
          },
          offers: {
            "@type": "Offer",
            url: `${DOMAIN}/contact/?service=${encodeURIComponent(service.name)}`,
            availability: "https://schema.org/InStock",
          },
        },
        ...(service.faq && service.faq.length
          ? [
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "@id": `${absoluteUrl(pagePath)}#faq`,
                mainEntity: service.faq.map((item: any) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
            ]
          : []),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/web-development-services/" },
          { name: service.name, path: pagePath },
        ]),
      ],
    ];
  })
);

const postSchemas = Object.fromEntries(
  posts.map((post) => [
    post.link,
    [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(post.link)}#article`,
        headline: post.title,
        description: post.summary,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: absoluteUrl(post.link),
        author: { "@id": `${DOMAIN}/#person` },
        publisher: { "@id": `${DOMAIN}/#organization` },
        keywords: post.tags.join(", "),
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Posts", path: "/posts/" },
        { name: post.title, path: post.link },
      ]),
    ],
  ])
);

const projectsHubSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${DOMAIN}/web-development-projects/#collection`,
    url: `${DOMAIN}/web-development-projects/`,
    name: "Engineering Portfolio",
    description:
      "Explore the software engineering portfolio of Stack Seekers. Case studies, startup MVPs, AI automation tools, and enterprise architecture designs.",
    about: { "@id": `${DOMAIN}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stack Seekers Projects Portfolio",
    itemListElement: freelance.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${DOMAIN}/web-development-projects/${toKebabCase(project.name)}/`,
    })),
  },
];

const projectSchemas = Object.fromEntries(
  freelance.map((project) => {
    const pagePath = `/web-development-projects/${toKebabCase(project.name)}/`;
    const schemaType = project.schema ? project.schema.split("/").pop() : "CreativeWork";
    
    return [
      pagePath,
      [
        {
          "@context": "https://schema.org",
          "@type": schemaType,
          "@id": `${absoluteUrl(pagePath)}#project`,
          name: project.name,
          url: absoluteUrl(pagePath),
          description: project.description,
          image: project.images?.[0]?.itemImageSrc
            ? (project.images[0].itemImageSrc.startsWith("http")
                ? project.images[0].itemImageSrc
                : `${DOMAIN}${project.images[0].itemImageSrc}`)
            : undefined,
          applicationCategory: project.category || "DeveloperApplication",
          operatingSystem: "All",
          creator: { "@id": `${DOMAIN}/#person` },
          publisher: { "@id": `${DOMAIN}/#organization` },
          datePublished: project.year ? `${project.year}-01-01` : undefined,
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/web-development-projects/" },
          { name: project.name, path: pagePath },
        ]),
      ],
    ];
  })
);

const categoryMeta = {
  "ready-made-apps": {
    name: "Ready-made Apps",
    desc: "Premium, production-ready templates, AI tools, widgets, and business applications.",
    categoryName: "Ready-made Apps"
  },
  "enterprise": {
    name: "Enterprise Web Development Projects",
    desc: "Large-scale enterprise platforms, banking systems, and mission-critical applications.",
    categoryName: "Enterprise"
  },
  "ai": {
    name: "AI Web Development Projects",
    desc: "AI-powered tools, intelligent automation, and machine learning integrations.",
    categoryName: "AI"
  },
  "saas": {
    name: "SaaS Web Development Projects",
    desc: "Multi-tenant SaaS platforms, marketplaces, and subscription software.",
    categoryName: "SaaS"
  },
  "automation": {
    name: "Automation Web Development Projects",
    desc: "Workflow automation, no-code tooling, and process efficiency systems.",
    categoryName: "Automation"
  },
  "startup-mvps": {
    name: "Startup MVP Web Development Projects",
    desc: "Fast-to-market products, niche platforms, and proof-of-concept launches.",
    categoryName: "Startup MVPs"
  }
};

const categorySchemas = Object.fromEntries(
  Object.entries(categoryMeta).map(([slug, meta]) => {
    const pagePath = `/web-development-projects/${slug}/`;
    const filteredProjects = freelance.filter((p: any) => p.category === meta.categoryName);
    return [
      pagePath,
      [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${absoluteUrl(pagePath)}#collection`,
          url: absoluteUrl(pagePath),
          name: meta.name,
          description: meta.desc,
          about: { "@id": `${DOMAIN}/#organization` },
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${meta.name} List`,
          itemListElement: filteredProjects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${DOMAIN}/web-development-projects/${toKebabCase(project.name)}/`,
          })),
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/web-development-projects/" },
          { name: meta.categoryName, path: pagePath },
        ]),
      ]
    ];
  })
);

// Standalone service landing pages (not under /web-development-services/) — add
// the Service JSON-LD (previously placed in frontmatter head, where VuePress
// strips script+ld+json entries) plus a breadcrumb so they qualify for both
// service and breadcrumb rich results site-wide.
const standaloneServiceSchemas = Object.fromEntries(
  [
    {
      path: "/hire-nuxt-developer/",
      name: "Hire Nuxt.js Developers",
      description:
        "Senior Nuxt.js developers for SSR, SSG, and SEO-optimized Vue.js applications.",
      serviceType: "Nuxt.js Development",
      jobTitle: "Senior Nuxt.js Developer",
    },
    {
      path: "/hire-nextjs-developer/",
      name: "Hire Next.js Developer",
      description: "Senior Next.js developer for SSR, SSG, ISR, and SEO-optimized React applications.",
      serviceType: "Next.js Development",
      jobTitle: "Senior Next.js Developer",
    },
    {
      path: "/figma-to-vue-development/",
      name: "Figma to Vue.js Development",
      description:
        "Transform Figma designs into production-ready Vue.js applications with pixel-perfect implementation.",
      serviceType: "Frontend Development",
      jobTitle: "Senior Frontend Engineer",
    },
    {
      path: "/ai-saas-development/",
      name: "AI SaaS Development",
      description:
        "Build AI-powered SaaS products with LLM integration, intelligent automation, and production-grade architecture.",
      serviceType: "AI SaaS Development",
      jobTitle: "AI SaaS Developer",
    },
    {
      path: "/web-development-for-startups/",
      name: "Web Development for Startups",
      description:
        "Production-ready startup MVPs built by a senior full-stack developer with fixed scope and timeline.",
      serviceType: "MVP Development",
      jobTitle: "Fractional CTO & Senior Full-Stack Developer",
    },
    {
      path: "/website-development-for-small-business/",
      name: "Website Development for Small Business",
      description:
        "Professional website development for small businesses with custom design and SEO optimization.",
      serviceType: "Small Business Web Development",
      jobTitle: "Senior Web Developer",
    },
  ].map(({ path, name, description, serviceType, jobTitle }) => [
    path,
    [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name,
        url: absoluteUrl(path),
        description,
        serviceType,
        areaServed: "Global",
        provider: {
          "@type": "Person",
          "@id": `${DOMAIN}/#person`,
          name: "Jiwan Ghosal",
          jobTitle,
        },
        isSimilarTo: { "@id": `${DOMAIN}/#organization` },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/web-development-services/" },
        { name, path },
      ]),
    ],
  ])
);

const auditPageSchemas = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Startup Tech Stack Audit", path: "/startup-stack-audit-checklist/" },
  ]),
  faqPageSchema([
    [
      "What is a tech stack audit?",
      "A tech stack audit (also called a startup technical audit) is a structured review of your infrastructure — deployment, resilience, scaling, engineering velocity, data, and security — that identifies technical debt and bottlenecks before they block growth.",
    ],
    [
      "How long does a full audit take?",
      "A self-audit with this checklist takes about 5 minutes. A professional architecture review by Stack Seekers typically takes 48-72 hours and includes a prioritized roadmap.",
    ],
    [
      "Can non-technical founders use this checklist?",
      "Yes. Every question is written in business language with one-line insights, so founders and operators can complete the assessment without code-level knowledge.",
    ],
    [
      "What is the outcome of the audit?",
      "You receive a prioritized roadmap of technical fixes categorized by business risk and ROI impact — red flags you can act on, plus a baseline for future audits.",
    ],
    [
      "What areas does the startup technical audit cover?",
      "Six areas: deployment stability, platform resilience, growth and scaling, engineering velocity, data and AI strategy, and security and compliance.",
    ],
    [
      "Do you offer tech stack audit services for startups and companies?",
      "Yes. Stack Seekers runs professional technical audits for startups and scale-ups. A senior engineer reviews your deployment, resilience, security, and scaling and delivers a prioritized roadmap. Run this free checklist first to self-assess, then book a call to scope a professional audit.",
    ],
    [
      "How much does a professional tech stack audit cost?",
      "A professional audit is a fixed-scope engagement, so pricing depends on the size and complexity of your stack. The self-audit on this page is free and gives you an instant baseline; book a short call to get a project-specific quote.",
    ],
  ]),
];

const transferFaqSchema = faqPageSchema([
  [
    "How do I transfer or move a GitHub repository to an organization?",
    "Open the repository, go to Settings, scroll to the Danger Zone, and choose Transfer ownership. Select the destination organization, confirm the repository name, authenticate with your password or 2FA code, then click I understand, transfer this repository. Transferring and moving are the same GitHub feature — \"move a repo to an organization\" is simply the common way people phrase it.",
  ],
  [
    "Can I move a private GitHub repository to an organization?",
    "Yes. Both public and private repositories can be transferred to an organization. Internal repositories can only be transferred to an organization inside the same enterprise as the current owner.",
  ],
  [
    "Can I copy a repository to an organization instead of moving it?",
    "GitHub has no one-click \"copy to organization\" button. You either transfer ownership — which moves the repository and redirects the old URL — or fork the repository into the organization, which leaves the original untouched and creates a separate copy. Choose a fork when you want to keep the source repo, and a transfer when the organization should own the canonical repository.",
  ],
  [
    "What happens to the original repository URL after a transfer?",
    "GitHub automatically creates a redirect from the old URL to the new organization URL, so existing links, clones, and embedded references keep working.",
  ],
  [
    "What is preserved when I transfer a repository to an organization?",
    "The full commit history, branches, tags, issues, pull requests, stars, watchers, wiki, and releases are all preserved. The transfer does not rewrite history.",
  ],
  [
    "What happens to access and automation when I transfer a repository?",
    "External collaborators are removed when the transfer completes, so re-add anyone outside the organization. Webhooks, GitHub Actions secrets, branch protection rules, and deployment keys do not carry over to the new repository — reconfigure them under the organization. Stars, watchers, forks, issues, and releases move with the repository.",
  ],
  [
    "How long does a GitHub repository transfer take?",
    "Most transfers complete in a few minutes. Large repositories or repositories with heavy CI/automation can take slightly longer, but the process is generally quick and non-destructive.",
  ],
  [
    "Can I transfer or move a repository back from an organization to my personal account?",
    "Yes, if you have admin access to the repository you can transfer it back to your personal account or to another user, subject to the same ownership and access rules.",
  ],
]);

export const pageSpecificSchemas: Record<string, any[]> = {
  "/": homepageSchemas,
  "/web-development-services/": servicesHubSchemas,
  "/web-development-projects/": projectsHubSchemas,
  "/contact/": contactSchemas,
  "/stackseekers-tv/": tvHubSchemas,
  "/startup-stack-audit-checklist/": auditPageSchemas,
  ...serviceSchemas,
  ...projectSchemas,
  ...postSchemas,
  ...categorySchemas,
  ...standaloneServiceSchemas,
  "/posts/transfer-github-repository/": [
    ...postSchemas["/posts/transfer-github-repository/"],
    transferFaqSchema,
  ],
};
