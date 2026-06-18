import { posts } from "./posts.js";
import { services } from "./services.js";
import { freelance } from "./projects.js";
import { toKebabCase } from "../utils/index.js";

const DOMAIN = "https://stackseekers.com";

const absoluteUrl = (pagePath: string) => `${DOMAIN}${pagePath}`;

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
        name: "What kinds of companies hire Stack Seekers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stack Seekers works with founders, product teams, and enterprise partners that need senior technical leadership, AI automation, scalable architecture, or programmatic SEO systems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle strategy and implementation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Engagements can include architecture reviews, roadmap planning, hands-on implementation, delivery oversight, and advisory support.",
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
          applicationCategory: project.category || "DeveloperApplication",
          operatingSystem: "All",
          creator: { "@id": `${DOMAIN}/#person` },
          publisher: { "@id": `${DOMAIN}/#organization` },
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

export const pageSpecificSchemas: Record<string, any[]> = {
  "/": homepageSchemas,
  "/web-development-services/": servicesHubSchemas,
  "/web-development-projects/": projectsHubSchemas,
  "/contact/": contactSchemas,
  ...serviceSchemas,
  ...projectSchemas,
  ...postSchemas,
  ...categorySchemas,
};
