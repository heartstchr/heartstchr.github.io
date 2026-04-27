/**
 * Centralized JSON-LD Schema Management
 * All application/ld+json blocks are defined here and mapped to their respective pages.
 */

const DOMAIN = "https://stackseekers.com";

export const globalSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${DOMAIN}/#organization`,
    name: "Stack Seekers",
    url: DOMAIN,
    logo: `${DOMAIN}/img/stackseekers.webp`,
    image: `${DOMAIN}/img/home/jiwanghosal.webp`,
    description: "Enterprise Architecture Partner and Fractional CTO consultancy.",
    areaServed: "Worldwide",
    priceRange: "$$$",
    sameAs: [
      "https://github.com/heartstchr",
      "https://www.linkedin.com/in/jiwanghosal/",
      "https://twitter.com/heartstchr",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${DOMAIN}/#person`,
    name: "Jiwan Ghosal",
    url: DOMAIN,
    image: `${DOMAIN}/img/home/jiwanghosal.webp`,
    jobTitle: "Enterprise Architecture Partner & Fractional CTO",
    worksFor: {
      "@id": `${DOMAIN}/#organization`
    },
    knowsAbout: [
      "Enterprise Architecture",
      "SaaS Development",
      "AI Automation",
      "React",
      "Node.js",
      "AWS"
    ],
    sameAs: [
      "https://www.linkedin.com/in/jiwanghosal/",
      "https://github.com/heartstchr",
      "https://twitter.com/heartstchr",
      "https://www.youtube.com/@stackseekers",
    ],
  }
];

export const pageSpecificSchemas: Record<string, any[]> = {
  "/": [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do I need Programmatic SEO over regular SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regular SEO works for a blog post. Programmatic SEO works for building massive directories or local service marketplaces. If you need to target long-tail keywords natively across 1,000 cities, you need database-driven site architecture, not standard blogging tools."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle both Frontend and Backend on custom SaaS builds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. As a Full-Stack engineering partner, I design architecture spanning the entire stack—from React/Vue UI interfaces to Node.js Microservices, and secure database management in AWS/Azure/MongoDB."
          }
        }
      ]
    }
  ],
  // Add more pages here as needed
  // "/careers/": [{ ... }],
};
