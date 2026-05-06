---
title: Appliance Repair Service Platform
description: A modern, content-driven platform for connecting users with local appliance repair professionals and providing troubleshooting guides for major home appliances
lastUpdated: false
editLink: false
contributors: false
breadcrumb: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Appliance Repair Service Platform"
  description: "A modern, content-driven platform for connecting users with local appliance repair professionals and providing troubleshooting guides for major home appliances"
  software: "Web"
  schema: "https://schema.org/WebApplication"
  domain: "Digital Marketing"
  year: "2025"
  price: 0
  currency: USD
  link: "https://appliancerepairly.com"
  codeLink: 
  contact: "mailto:jiwan.cse@gmail.com?subject=Inquiry : "
  stack: ["nextdotjs/black/white","react","nodedotjs","json/black/white","tailwindcss","axios","npm","pm2","digitalocean","lighthouse","bitbucket","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/home/projects/appliance_repair_cover.webp","alt":"Appliance Repair Service Platform - Cover page"},{"itemImageSrc":"/img/projects/appliance-repair/home.webp","alt":"Appliance Repair Service Platform - Home page"},{"itemImageSrc":"/img/projects/appliance-repair/performance-desktop.webp","alt":"Appliance Repair Service Platform - Desktop performance metrics"},{"itemImageSrc":"/img/projects/appliance-repair/performance-mobile.webp","alt":"Appliance Repair Service Platform - Mobile performance metrics"},{"itemImageSrc":"/img/projects/appliance-repair/services.webp","alt":"Appliance Repair Service Platform - Services page"},{"itemImageSrc":"/img/projects/appliance-repair/find-repair.webp","alt":"Appliance Repair Service Platform - Find repair services"},{"itemImageSrc":"/img/projects/appliance-repair/contact.webp","alt":"Appliance Repair Service Platform - Contact page"},{"itemImageSrc":"/img/projects/appliance-repair/refrigerator-troubleshoot.webp","alt":"Appliance Repair Service Platform - Refrigerator troubleshooting guide"},{"itemImageSrc":"/img/projects/appliance-repair/refrigerator-problem.webp","alt":"Appliance Repair Service Platform - Refrigerator problem identification"},{"itemImageSrc":"/img/projects/appliance-repair/refrigerator.webp","alt":"Appliance Repair Service Platform - Refrigerator home page"},{"itemImageSrc":"/img/projects/appliance-repair/blog-post.webp","alt":"Appliance Repair Service Platform - Blog post"},{"itemImageSrc":"/img/projects/appliance-repair/blog.webp","alt":"Appliance Repair Service Platform - Blog section"}]
  features: [{"text":"Dynamic Appliance Support: Browse and get help for refrigerators, washers, dryers, dishwashers, ovens, microwaves, cooktops, and more."},{"text":"Find Local Providers: Enter your ZIP code or select your state to view local repair listings."},{"text":"Problem & Troubleshooting Guides: Step-by-step guides for common appliance issues, including DIY tips and when to call a pro."},{"text":"SEO Optimized: Each page includes dynamic SEO metadata for better search engine visibility."},{"text":"Reusable UI Components: Modular React components for listings, CTAs, features, and more."},{"text":"Content Management: All appliance, problem, and troubleshooting content is managed centrally in JSON for easy updates."}]
  perspective: {"executive":"","technical":""}
  details: "## Project Overview\nA modern, **content-driven Next.js platform** for connecting users with local appliance repair professionals and providing comprehensive troubleshooting guides for major home appliances. Built as a freelance project by **Jiwan Ghosal** at [Appliance Repairly](https://appliancerepairly.com).\n\n## Executive Summary\n\nThis project is a strong example of combining **programmatic SEO**, **lead generation**, and **content operations** into one monetizable platform. It is not just a website. It is a search-acquisition engine designed to capture long-tail service demand and convert that demand into provider inquiries.\n\n## Business Problem\n\nLocal service businesses need thousands of search-relevant pages to capture intent across appliance types, issues, cities, and states. Building that manually is too slow, and most generic CMS setups are not structured well enough for durable search growth.\n\n## What I Built\n\n- A content-driven Next.js platform for troubleshooting and provider matching\n- Structured content architecture for appliances, problems, and local landing pages\n- SEO-aware page generation with metadata, routing, and sitemap support\n- A user journey that moves from problem discovery to service-provider contact\n\n## Why It Matters\n\nThe commercial strength is in the overlap between useful educational content and high-intent local search. This kind of system can attract traffic through troubleshooting queries, then convert that traffic through provider matching and contact flows.\n\n## Best Fit If You Need Something Similar\n\nThis case study supports [Programmatic Growth Engines](/web-development-services/programmatic-seo-and-growth/) and [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/). It is a strong fit if you want a directory, service marketplace, or content-led lead-generation platform.\n\n## Architecture\nThis is a **Next.js 15** application with **React 19**, utilizing a **content-management driven approach** where all appliance data, problems, and troubleshooting guides are centrally managed through JSON files for easy updates and scalability.\n\n### **Technology Stack**\n\n#### **Frontend Framework:**\n- **Next.js 15.2.4** - React framework with SSR/SSG capabilities\n- **React 19.1.0** - Latest React with concurrent features\n- **Tailwind CSS 4.1.4** - Utility-first CSS framework\n- **Sass 1.86.3** - CSS preprocessor for advanced styling\n\n#### **Development & Build Tools:**\n- **ESLint 9.24.0** - Code linting and quality\n- **PostCSS 8.5.3** - CSS processing pipeline\n- **Autoprefixer** - Automatic vendor prefixes\n- **Bundle Analyzer** - Performance optimization\n- **Next Sitemap** - Automatic sitemap generation\n\n#### **Utilities & Libraries:**\n- **Axios 1.9.0** - HTTP client for API calls\n- **Lodash 4.17.21** - JavaScript utility library\n- **Prop Types** - Runtime type checking\n\n### **Root Directory Structure**\n\n```\nappliance2025/\n├── src/                           # Main source code\n│   ├── components/               # Reusable UI components\n│   ├── pages/                   # Next.js pages (routing)\n│   ├── utils/                   # Utilities and content management\n│   ├── wrapper/                 # Layout wrappers\n│   ├── hooks/                   # Custom React hooks\n│   ├── context/                 # React context providers\n│   ├── apis/                    # API integration layer\n│   ├── lib/                     # External library configurations\n│   ├── assets/                  # Static assets\n│   └── styles/                  # Global styles and SCSS\n├── public/                       # Public static files\n│   ├── favicon.ico\n│   ├── sitemap.xml\n│   └── robots.txt\n├── .next/                       # Next.js build output\n├── node_modules/                # Dependencies\n├── package.json                 # Project dependencies and scripts\n├── next.config.js               # Next.js configuration\n├── next-sitemap.config.mjs      # Sitemap generation config\n├── postcss.config.mjs           # PostCSS configuration\n├── jsconfig.json                # JavaScript/paths configuration\n├── build-deploy.sh              # Deployment script\n├── bitbucket-pipelines.yml      # CI/CD pipeline\n├── .env                         # Environment variables\n└── README.md                    # Project documentation\n```\n\n## **Detailed Source Structure**\n\n### **Pages Architecture (`src/pages/`)**\n\nNext.js file-based routing with dynamic and static pages:\n\n```\npages/\n├── _app.js                      # Global app wrapper\n├── _document.js                 # Custom document structure\n├── _index.js                    # Index redirect\n├── 404.js                       # Custom 404 page\n├── home/                        # Homepage components\n├── [repairSlug]/               # Dynamic appliance repair pages\n│   ├── index.js                # Main appliance page\n│   ├── [problemSlug].js        # Specific problem pages\n│   └── [...troubleshootingSlug].js # Nested troubleshooting guides\n├── location/                    # Location-based pages\n│   ├── [state].js              # State-specific listings\n│   └── [state]/[city].js       # City-specific listings\n├── l/                          # Short URL location pages\n├── find-repair/                # Repair finder functionality\n├── services/                   # All services overview\n├── contact/                    # Contact page\n├── about/                      # About page\n├── blog/                       # Blog section\n├── api/                        # API routes\n│   ├── location.js            # Location API\n│   ├── contact.js             # Contact form API\n│   └── sitemap.js             # Dynamic sitemap\n├── privacy-policy/             # Legal pages\n├── terms-of-service/\n├── ccpa-notice/\n└── brand-disclaimer/\n```\n\n### **Components Library (`src/components/`)**\n\nModular, reusable React components:\n\n```\ncomponents/\n├── index.js                     # Component exports\n├── Autocomplete/               # Location autocomplete\n├── BlogCard/                   # Blog post cards\n├── Breadcrumb/                 # Navigation breadcrumbs\n├── Button/                     # Reusable button components\n├── Checkbox/                   # Form checkbox inputs\n├── ConfirmationPopup/          # Modal confirmations\n├── ContactUsForm/              # Contact form component\n├── Coverage/                   # Service coverage display\n├── Cta/                        # Call-to-action components\n├── Features/                   # Feature listing components\n├── Footer/                     # Site footer\n├── GoogleMap/                  # Map integration\n├── Header/                     # Site header and navigation\n├── HeroHome/                   # Homepage hero section\n├── Image/                      # Optimized image component\n├── Input/                      # Form input components\n├── ListingCard/                # Provider listing cards\n├── Loader/                     # Loading indicators\n├── Modal/                      # Modal dialog component\n├── Pagination/                 # Results pagination\n├── ProviderCard/               # Service provider cards\n├── Rating/                     # Star rating component\n├── SearchBox/                  # Search functionality\n├── SeoHead/                    # SEO meta tags\n├── ServiceCard/                # Service offering cards\n├── Svg/                        # SVG icon components\n├── Tag/                        # Content tags\n├── TestimonialCard/            # Customer testimonials\n├── Text/                       # Typography components\n├── TrustedBy/                  # Brand trust indicators\n├── ZipCode/                    # ZIP code input\n└── [Additional components]/\n```\n\n### **Content Management (`src/utils/Content/`)**\n\nCentralized content management system:\n\n```\nutils/Content/\n├── PageContent.json            # Main appliance content database\n│   ├── APPLIANCES              # All appliance types and problems\n│   ├── PROBLEMS                # Common appliance issues\n│   └── TROUBLESHOOTING         # Step-by-step guides\n├── BlogContent.json            # Blog posts and articles\n├── LocationContent.js          # Cities, states, service areas\n└── index.js                    # Content utility functions\n```\n\n### **Utilities & Configuration (`src/utils/`)**\n\n```\nutils/\n├── Content/                    # Content management (above)\n├── SEOMapping.js               # Dynamic SEO metadata\n├── States.js                   # US states data\n├── CommonUtils.js              # Shared utility functions\n└── Constant.js                 # Application constants\n```\n\n### **Layout Wrappers (`src/wrapper/`)**\n\n```\nwrapper/\n├── index.js                    # Wrapper exports\n├── AppLayoutWrapper/           # Main app layout\n│   ├── index.js\n│   └── AppLayoutWrapper.js\n└── PageWrapper/                # Individual page wrapper\n    ├── index.js\n    └── PageWrapper.js\n```\n\n### **API Integration (`src/apis/`)**\n\n```\napis/\n├── index.js                    # API exports\n├── commonAPI.js                # Shared API functions\n└── [additional API modules]\n```\n\n### **Custom Hooks (`src/hooks/`)**\n\n```\nhooks/\n├── [Custom React hooks for:\n├── - Location detection\n├── - Form handling\n├── - SEO management\n├── - Content fetching\n└── - State management]\n```\n\n## **Key Features & Functionality**\n\n### **Content-Driven Architecture**\n- **JSON-based content management** for easy updates without code changes\n- **Dynamic page generation** for appliances, problems, and troubleshooting\n- **SEO-optimized content** with dynamic meta tags and structured data\n\n### **Location-Based Services**\n- **ZIP code lookup** for local service providers\n- **State and city pages** for local SEO\n- **Google Maps integration** for provider locations\n- **Autocomplete location search**\n\n### **Appliance Support System**\n- **Comprehensive appliance database** (refrigerators, washers, dryers, etc.)\n- **Problem categorization** with symptom-based navigation\n- **Step-by-step troubleshooting guides**\n- **When to call a professional** recommendations\n\n### **SEO & Performance**\n- **Dynamic sitemap generation** with next-sitemap\n- **Optimized meta tags** for each page type\n- **Bundle analysis** for performance monitoring\n- **Server-side rendering** for better SEO\n\n### **User Experience Features**\n- **Responsive design** with Tailwind CSS\n- **Fast search and filtering**\n- **Contact forms** with validation\n- **Provider ratings and reviews**\n- **Blog system** for content marketing\n\n## **Development Workflow**\n\n### **Available Scripts**\n\n```bash\n# Development\nnpm run dev              # Start development server\nnpm run debug            # Debug mode with Node inspector\n\n# Building\nnpm run build            # Production build\nnpm run start            # Start production server\nnpm run postbuild        # Generate sitemap after build\n\n# Quality & Analysis\nnpm run lint             # Run ESLint\nnpm run analyze          # Bundle size analysis\n\n# Deployment\nnpm run deploy           # Run deployment script\nsh build-deploy.sh       # Manual deployment\n```\n\n### **Environment Setup**\n\n1. **Prerequisites**: Node.js 18+, npm\n2. **Installation**: `npm install`\n3. **Environment**: Configure `.env` file\n4. **Development**: `npm run dev`\n5. **Access**: `http://localhost:3000`\n\n## **Content Management**\n\n### **Adding New Appliances**\nEdit `src/utils/Content/PageContent.json`:\n\n```json\n{\n  \"APPLIANCES\": {\n    \"new_appliance_repair\": {\n      \"title\": \"New Appliance Repair Services\",\n      \"subTitle\": \"Description...\",\n      \"topics\": [\n        // Content structure\n      ]\n    }\n  }\n}\n```\n\n### **Adding New Problems**\nAdd problem definitions with troubleshooting steps and when to call professionals.\n\n### **SEO Management**\nUpdate `src/utils/SEOMapping.js` for new pages:\n\n```javascript\nexport const SEO_MAPPING = {\n  '/new-page': {\n    title: 'Page Title',\n    description: 'Meta description',\n    keywords: 'relevant, keywords'\n  }\n};\n```\n\n## **Deployment & CI/CD**\n\n### **Bitbucket Pipelines**\n- Automated builds on code push\n- Environment-specific deployments\n- Quality checks and testing\n\n### **Build Process**\n1. **Dependency installation**\n2. **ESLint code quality checks**\n3. **Next.js production build**\n4. **Sitemap generation**\n5. **Bundle analysis** (optional)\n6. **Deployment to hosting**\n\n## **Performance Optimizations**\n\n### **Next.js Features**\n- **Static Site Generation (SSG)** for content pages\n- **Server Side Rendering (SSR)** for dynamic content\n- **Image optimization** with Next.js Image component\n- **Code splitting** for optimized loading\n\n### **SEO Optimizations**\n- **Dynamic meta tags** based on content\n- **Structured data** for rich snippets\n- **Automatic sitemap generation**\n- **Optimized URL structure**\n\n## **Business Logic**\n\n### **Service Provider Connection**\n- **Lead generation** through ZIP code forms\n- **Local provider matching**\n- **Phone call routing** for immediate service\n- **Contact form submissions**\n\n### **Content Strategy**\n- **Problem-solution focused** content structure\n- **Local SEO** through location pages\n- **Educational content** to build trust\n- **Brand disclaimers** for legal compliance\n\n## **Technology Highlights**\n\n### **Modern Stack Benefits**\n- **React 19** with latest concurrent features\n- **Next.js 15** with improved performance\n- **Tailwind CSS 4** for rapid UI development\n- **JSON-driven content** for non-developer updates\n\n### **Scalability Features**\n- **Component-based architecture**\n- **Content separation** from code\n- **API-ready structure** for future integrations\n- **Modular design** for easy feature additions\n\n***\n\n**Project**: Appliance Repair Service Platform  \n**Developer**: Jiwan Ghosal  \n**Website**: [Appliance Repairly](https://appliancerepairly.com)  \n**Framework**: Next.js 15 + React 19  \n**Styling**: Tailwind CSS 4  \n**Content Management**: JSON-based system\n"
  previousProject: {"name":"Service Request System","link":"/web-development-projects/service-request-system/"}
  nextProject: {"name":"SR-22 Insurance Now","link":"/web-development-projects/sr-22-insurance-now/"}
---

<section class="mt-4 mb-6">
  <div class="grid align-items-center">
    <div class="col-12 lg:col-8">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
      <h1 class="text-4xl md:text-6xl font-bold mb-3 mt-0 line-height-2">{{$frontmatter.project.name}}</h1>
      <p class="text-xl opacity-70 line-height-3 max-w-30rem">{{$frontmatter.project.description}}</p>
    </div>
    <div class="col-12 lg:col-4">
      <div class="surface-card p-4 border-round-2xl shadow-2 border-1 border-100">
        <div class="flex align-items-center gap-3 mb-3">
          <i class="pi pi-clock text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Timeline</div>
            <div class="font-bold">{{$frontmatter.project.year}}</div>
          </div>
        </div>
        <div class="flex align-items-center gap-3 mb-3">
          <i class="pi pi-briefcase text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Industry</div>
            <div class="font-bold">{{$frontmatter.project.domain}}</div>
          </div>
        </div>
        <div class="flex align-items-center gap-3">
          <i class="pi pi-bolt text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Status</div>
            <div class="font-bold">Scale & Growth</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section v-if="$frontmatter.project.images && $frontmatter.project.images.length" class="mb-8 overflow-hidden border-round-3xl shadow-4" itemscope itemtype="https://schema.org/SoftwareApplication">
  <div>
    <div v-if="$frontmatter.project.images.length > 1">
      <Galleria :value="$frontmatter.project.images" :responsiveOptions="responsiveOptions" :numVisible="5"
        :circular="true" :showItemNavigators="true" :showThumbnails="true" class="custom-galleria">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
            style="width: 100%; display: block" loading="eager" fetchpriority="high" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 60px; height: 60px; object-fit: cover;" />
        </template>
      </Galleria>
    </div>
    <div v-else>
      <img :src="$frontmatter.project.images[0].itemImageSrc" :alt="$frontmatter.project.images[0].alt"
        style="width: 100%; display: block" loading="eager" fetchpriority="high" />
    </div>
  </div>
</section>

<TabView class="project-perspective-tabs mb-8" v-if="$frontmatter.project.perspective?.executive">
  <TabPanel>
    <template #header>
      <div class="flex align-items-center gap-2">
        <i class="pi pi-briefcase"></i>
        <span>Strategic Executive</span>
      </div>
    </template>
    <div class="p-4 md:p-6 surface-card border-round-3xl shadow-1 border-1 border-100 mt-4">
      <div class="flex align-items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
        <i class="pi pi-verified"></i>
        Business Impact & ROI
      </div>
      <div class="text-xl line-height-4 text-700 mb-6">
        {{ $frontmatter.project.perspective.executive }}
      </div>
      <div class="grid">
        <div class="col-12">
           <h4 class="text-lg font-bold mb-4 flex align-items-center gap-2">
              <i class="pi pi-list text-primary"></i> Strategic Playbook Features
           </h4>
           <div class="grid">
              <div v-for="feature in $frontmatter.project.features" :key="feature.text" class="col-12 md:col-6 mb-3">
                 <div class="flex align-items-start gap-3">
                    <i class="pi pi-check text-primary mt-1"></i>
                    <div class="text-sm font-medium line-height-3" v-html="feature.text"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </TabPanel>
  <TabPanel>
    <template #header>
      <div class="flex align-items-center gap-2">
        <i class="pi pi-cog"></i>
        <span>Engineering Architecture</span>
      </div>
    </template>
    <div class="p-4 md:p-6 surface-card border-round-3xl shadow-1 border-1 border-100 mt-4">
      <div class="flex align-items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
        <i class="pi pi-code"></i>
        Technical Deep-Dive
      </div>
      <div class="text-xl line-height-4 text-700 mb-6">
        {{ $frontmatter.project.perspective.technical }}
      </div>
      <div class="surface-900 text-white p-4 border-round-2xl mb-6">
        <h4 class="text-lg font-bold mb-3 mt-0">Architecture Stack</h4>
        <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
      </div>
      <div v-pre class="project-markdown-content text-lg line-height-4">

## Project Overview
A modern, **content-driven Next.js platform** for connecting users with local appliance repair professionals and providing comprehensive troubleshooting guides for major home appliances. Built as a freelance project by **Jiwan Ghosal** at [Appliance Repairly](https://appliancerepairly.com).

## Executive Summary

This project is a strong example of combining **programmatic SEO**, **lead generation**, and **content operations** into one monetizable platform. It is not just a website. It is a search-acquisition engine designed to capture long-tail service demand and convert that demand into provider inquiries.

## Business Problem

Local service businesses need thousands of search-relevant pages to capture intent across appliance types, issues, cities, and states. Building that manually is too slow, and most generic CMS setups are not structured well enough for durable search growth.

## What I Built

- A content-driven Next.js platform for troubleshooting and provider matching
- Structured content architecture for appliances, problems, and local landing pages
- SEO-aware page generation with metadata, routing, and sitemap support
- A user journey that moves from problem discovery to service-provider contact

## Why It Matters

The commercial strength is in the overlap between useful educational content and high-intent local search. This kind of system can attract traffic through troubleshooting queries, then convert that traffic through provider matching and contact flows.

## Best Fit If You Need Something Similar

This case study supports [Programmatic Growth Engines](/web-development-services/programmatic-seo-and-growth/) and [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/). It is a strong fit if you want a directory, service marketplace, or content-led lead-generation platform.

## Architecture
This is a **Next.js 15** application with **React 19**, utilizing a **content-management driven approach** where all appliance data, problems, and troubleshooting guides are centrally managed through JSON files for easy updates and scalability.

### **Technology Stack**

#### **Frontend Framework:**
- **Next.js 15.2.4** - React framework with SSR/SSG capabilities
- **React 19.1.0** - Latest React with concurrent features
- **Tailwind CSS 4.1.4** - Utility-first CSS framework
- **Sass 1.86.3** - CSS preprocessor for advanced styling

#### **Development & Build Tools:**
- **ESLint 9.24.0** - Code linting and quality
- **PostCSS 8.5.3** - CSS processing pipeline
- **Autoprefixer** - Automatic vendor prefixes
- **Bundle Analyzer** - Performance optimization
- **Next Sitemap** - Automatic sitemap generation

#### **Utilities & Libraries:**
- **Axios 1.9.0** - HTTP client for API calls
- **Lodash 4.17.21** - JavaScript utility library
- **Prop Types** - Runtime type checking

### **Root Directory Structure**

```
appliance2025/
├── src/                           # Main source code
│   ├── components/               # Reusable UI components
│   ├── pages/                   # Next.js pages (routing)
│   ├── utils/                   # Utilities and content management
│   ├── wrapper/                 # Layout wrappers
│   ├── hooks/                   # Custom React hooks
│   ├── context/                 # React context providers
│   ├── apis/                    # API integration layer
│   ├── lib/                     # External library configurations
│   ├── assets/                  # Static assets
│   └── styles/                  # Global styles and SCSS
├── public/                       # Public static files
│   ├── favicon.ico
│   ├── sitemap.xml
│   └── robots.txt
├── .next/                       # Next.js build output
├── node_modules/                # Dependencies
├── package.json                 # Project dependencies and scripts
├── next.config.js               # Next.js configuration
├── next-sitemap.config.mjs      # Sitemap generation config
├── postcss.config.mjs           # PostCSS configuration
├── jsconfig.json                # JavaScript/paths configuration
├── build-deploy.sh              # Deployment script
├── bitbucket-pipelines.yml      # CI/CD pipeline
├── .env                         # Environment variables
└── README.md                    # Project documentation
```

## **Detailed Source Structure**

### **Pages Architecture (`src/pages/`)**

Next.js file-based routing with dynamic and static pages:

```
pages/
├── _app.js                      # Global app wrapper
├── _document.js                 # Custom document structure
├── _index.js                    # Index redirect
├── 404.js                       # Custom 404 page
├── home/                        # Homepage components
├── [repairSlug]/               # Dynamic appliance repair pages
│   ├── index.js                # Main appliance page
│   ├── [problemSlug].js        # Specific problem pages
│   └── [...troubleshootingSlug].js # Nested troubleshooting guides
├── location/                    # Location-based pages
│   ├── [state].js              # State-specific listings
│   └── [state]/[city].js       # City-specific listings
├── l/                          # Short URL location pages
├── find-repair/                # Repair finder functionality
├── services/                   # All services overview
├── contact/                    # Contact page
├── about/                      # About page
├── blog/                       # Blog section
├── api/                        # API routes
│   ├── location.js            # Location API
│   ├── contact.js             # Contact form API
│   └── sitemap.js             # Dynamic sitemap
├── privacy-policy/             # Legal pages
├── terms-of-service/
├── ccpa-notice/
└── brand-disclaimer/
```

### **Components Library (`src/components/`)**

Modular, reusable React components:

```
components/
├── index.js                     # Component exports
├── Autocomplete/               # Location autocomplete
├── BlogCard/                   # Blog post cards
├── Breadcrumb/                 # Navigation breadcrumbs
├── Button/                     # Reusable button components
├── Checkbox/                   # Form checkbox inputs
├── ConfirmationPopup/          # Modal confirmations
├── ContactUsForm/              # Contact form component
├── Coverage/                   # Service coverage display
├── Cta/                        # Call-to-action components
├── Features/                   # Feature listing components
├── Footer/                     # Site footer
├── GoogleMap/                  # Map integration
├── Header/                     # Site header and navigation
├── HeroHome/                   # Homepage hero section
├── Image/                      # Optimized image component
├── Input/                      # Form input components
├── ListingCard/                # Provider listing cards
├── Loader/                     # Loading indicators
├── Modal/                      # Modal dialog component
├── Pagination/                 # Results pagination
├── ProviderCard/               # Service provider cards
├── Rating/                     # Star rating component
├── SearchBox/                  # Search functionality
├── SeoHead/                    # SEO meta tags
├── ServiceCard/                # Service offering cards
├── Svg/                        # SVG icon components
├── Tag/                        # Content tags
├── TestimonialCard/            # Customer testimonials
├── Text/                       # Typography components
├── TrustedBy/                  # Brand trust indicators
├── ZipCode/                    # ZIP code input
└── [Additional components]/
```

### **Content Management (`src/utils/Content/`)**

Centralized content management system:

```
utils/Content/
├── PageContent.json            # Main appliance content database
│   ├── APPLIANCES              # All appliance types and problems
│   ├── PROBLEMS                # Common appliance issues
│   └── TROUBLESHOOTING         # Step-by-step guides
├── BlogContent.json            # Blog posts and articles
├── LocationContent.js          # Cities, states, service areas
└── index.js                    # Content utility functions
```

### **Utilities & Configuration (`src/utils/`)**

```
utils/
├── Content/                    # Content management (above)
├── SEOMapping.js               # Dynamic SEO metadata
├── States.js                   # US states data
├── CommonUtils.js              # Shared utility functions
└── Constant.js                 # Application constants
```

### **Layout Wrappers (`src/wrapper/`)**

```
wrapper/
├── index.js                    # Wrapper exports
├── AppLayoutWrapper/           # Main app layout
│   ├── index.js
│   └── AppLayoutWrapper.js
└── PageWrapper/                # Individual page wrapper
    ├── index.js
    └── PageWrapper.js
```

### **API Integration (`src/apis/`)**

```
apis/
├── index.js                    # API exports
├── commonAPI.js                # Shared API functions
└── [additional API modules]
```

### **Custom Hooks (`src/hooks/`)**

```
hooks/
├── [Custom React hooks for:
├── - Location detection
├── - Form handling
├── - SEO management
├── - Content fetching
└── - State management]
```

## **Key Features & Functionality**

### **Content-Driven Architecture**
- **JSON-based content management** for easy updates without code changes
- **Dynamic page generation** for appliances, problems, and troubleshooting
- **SEO-optimized content** with dynamic meta tags and structured data

### **Location-Based Services**
- **ZIP code lookup** for local service providers
- **State and city pages** for local SEO
- **Google Maps integration** for provider locations
- **Autocomplete location search**

### **Appliance Support System**
- **Comprehensive appliance database** (refrigerators, washers, dryers, etc.)
- **Problem categorization** with symptom-based navigation
- **Step-by-step troubleshooting guides**
- **When to call a professional** recommendations

### **SEO & Performance**
- **Dynamic sitemap generation** with next-sitemap
- **Optimized meta tags** for each page type
- **Bundle analysis** for performance monitoring
- **Server-side rendering** for better SEO

### **User Experience Features**
- **Responsive design** with Tailwind CSS
- **Fast search and filtering**
- **Contact forms** with validation
- **Provider ratings and reviews**
- **Blog system** for content marketing

## **Development Workflow**

### **Available Scripts**

```bash
# Development
npm run dev              # Start development server
npm run debug            # Debug mode with Node inspector

# Building
npm run build            # Production build
npm run start            # Start production server
npm run postbuild        # Generate sitemap after build

# Quality & Analysis
npm run lint             # Run ESLint
npm run analyze          # Bundle size analysis

# Deployment
npm run deploy           # Run deployment script
sh build-deploy.sh       # Manual deployment
```

### **Environment Setup**

1. **Prerequisites**: Node.js 18+, npm
2. **Installation**: `npm install`
3. **Environment**: Configure `.env` file
4. **Development**: `npm run dev`
5. **Access**: `http://localhost:3000`

## **Content Management**

### **Adding New Appliances**
Edit `src/utils/Content/PageContent.json`:

```json
{
  "APPLIANCES": {
    "new_appliance_repair": {
      "title": "New Appliance Repair Services",
      "subTitle": "Description...",
      "topics": [
        // Content structure
      ]
    }
  }
}
```

### **Adding New Problems**
Add problem definitions with troubleshooting steps and when to call professionals.

### **SEO Management**
Update `src/utils/SEOMapping.js` for new pages:

```javascript
export const SEO_MAPPING = {
  '/new-page': {
    title: 'Page Title',
    description: 'Meta description',
    keywords: 'relevant, keywords'
  }
};
```

## **Deployment & CI/CD**

### **Bitbucket Pipelines**
- Automated builds on code push
- Environment-specific deployments
- Quality checks and testing

### **Build Process**
1. **Dependency installation**
2. **ESLint code quality checks**
3. **Next.js production build**
4. **Sitemap generation**
5. **Bundle analysis** (optional)
6. **Deployment to hosting**

## **Performance Optimizations**

### **Next.js Features**
- **Static Site Generation (SSG)** for content pages
- **Server Side Rendering (SSR)** for dynamic content
- **Image optimization** with Next.js Image component
- **Code splitting** for optimized loading

### **SEO Optimizations**
- **Dynamic meta tags** based on content
- **Structured data** for rich snippets
- **Automatic sitemap generation**
- **Optimized URL structure**

## **Business Logic**

### **Service Provider Connection**
- **Lead generation** through ZIP code forms
- **Local provider matching**
- **Phone call routing** for immediate service
- **Contact form submissions**

### **Content Strategy**
- **Problem-solution focused** content structure
- **Local SEO** through location pages
- **Educational content** to build trust
- **Brand disclaimers** for legal compliance

## **Technology Highlights**

### **Modern Stack Benefits**
- **React 19** with latest concurrent features
- **Next.js 15** with improved performance
- **Tailwind CSS 4** for rapid UI development
- **JSON-driven content** for non-developer updates

### **Scalability Features**
- **Component-based architecture**
- **Content separation** from code
- **API-ready structure** for future integrations
- **Modular design** for easy feature additions

***

**Project**: Appliance Repair Service Platform  
**Developer**: Jiwan Ghosal  
**Website**: [Appliance Repairly](https://appliancerepairly.com)  
**Framework**: Next.js 15 + React 19  
**Styling**: Tailwind CSS 4  
**Content Management**: JSON-based system


</div>
</div>
</TabPanel>
</TabView>

<div v-else>
  <div class="grid mb-8">
    <div class="col-12 lg:col-8">
       <div class="surface-card p-4 md:p-6 border-round-3xl shadow-2 h-full">
          <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
             <i class="pi pi-list text-primary"></i> Playbook Features
          </h3>
          <div class="grid">
             <div v-for="feature in $frontmatter.project.features" :key="feature.text" class="col-12 md:col-6 mb-3">
                <div class="flex align-items-start gap-3">
                   <i class="pi pi-verified text-primary mt-1"></i>
                   <div class="text-sm font-medium line-height-3" v-html="feature.text"></div>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div class="col-12 lg:col-4">
       <div class="surface-900 text-white p-4 border-round-3xl shadow-4 h-full relative overflow-hidden">
          <div class="absolute top-0 right-0 w-10rem h-10rem border-circle bg-primary opacity-20" style="filter: blur(40px); transform: translate(30%, -30%);"></div>
          <div class="relative z-1">
            <h3 class="text-2xl font-bold mb-4">The Stack</h3>
            <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
            <div class="flex flex-column gap-2 mt-6">
              <div class="flex align-items-stretch gap-2 w-full">
                <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank" class="flex-1 no-underline flex align-items-stretch">
                  <Button label="View Demo" icon="pi pi-external-link" severity="primary" class="w-full h-full font-bold" raised rounded />
                </a>
                 <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank" class="flex-1 no-underline flex align-items-stretch">
                  <Button label="Source" icon="pi pi-github" severity="secondary" class="w-full h-full font-bold" raised rounded />
                </a>
              </div>
              <a v-if="$frontmatter.project.contact" :href="'/contact/?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline w-full">
                <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold" raised rounded />
              </a>
            </div>
          </div>
       </div>
    </div>
  </div>

  <div v-pre class="project-markdown-content text-lg line-height-4 mb-8">

## Project Overview
A modern, **content-driven Next.js platform** for connecting users with local appliance repair professionals and providing comprehensive troubleshooting guides for major home appliances. Built as a freelance project by **Jiwan Ghosal** at [Appliance Repairly](https://appliancerepairly.com).

## Executive Summary

This project is a strong example of combining **programmatic SEO**, **lead generation**, and **content operations** into one monetizable platform. It is not just a website. It is a search-acquisition engine designed to capture long-tail service demand and convert that demand into provider inquiries.

## Business Problem

Local service businesses need thousands of search-relevant pages to capture intent across appliance types, issues, cities, and states. Building that manually is too slow, and most generic CMS setups are not structured well enough for durable search growth.

## What I Built

- A content-driven Next.js platform for troubleshooting and provider matching
- Structured content architecture for appliances, problems, and local landing pages
- SEO-aware page generation with metadata, routing, and sitemap support
- A user journey that moves from problem discovery to service-provider contact

## Why It Matters

The commercial strength is in the overlap between useful educational content and high-intent local search. This kind of system can attract traffic through troubleshooting queries, then convert that traffic through provider matching and contact flows.

## Best Fit If You Need Something Similar

This case study supports [Programmatic Growth Engines](/web-development-services/programmatic-seo-and-growth/) and [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/). It is a strong fit if you want a directory, service marketplace, or content-led lead-generation platform.

## Architecture
This is a **Next.js 15** application with **React 19**, utilizing a **content-management driven approach** where all appliance data, problems, and troubleshooting guides are centrally managed through JSON files for easy updates and scalability.

### **Technology Stack**

#### **Frontend Framework:**
- **Next.js 15.2.4** - React framework with SSR/SSG capabilities
- **React 19.1.0** - Latest React with concurrent features
- **Tailwind CSS 4.1.4** - Utility-first CSS framework
- **Sass 1.86.3** - CSS preprocessor for advanced styling

#### **Development & Build Tools:**
- **ESLint 9.24.0** - Code linting and quality
- **PostCSS 8.5.3** - CSS processing pipeline
- **Autoprefixer** - Automatic vendor prefixes
- **Bundle Analyzer** - Performance optimization
- **Next Sitemap** - Automatic sitemap generation

#### **Utilities & Libraries:**
- **Axios 1.9.0** - HTTP client for API calls
- **Lodash 4.17.21** - JavaScript utility library
- **Prop Types** - Runtime type checking

### **Root Directory Structure**

```
appliance2025/
├── src/                           # Main source code
│   ├── components/               # Reusable UI components
│   ├── pages/                   # Next.js pages (routing)
│   ├── utils/                   # Utilities and content management
│   ├── wrapper/                 # Layout wrappers
│   ├── hooks/                   # Custom React hooks
│   ├── context/                 # React context providers
│   ├── apis/                    # API integration layer
│   ├── lib/                     # External library configurations
│   ├── assets/                  # Static assets
│   └── styles/                  # Global styles and SCSS
├── public/                       # Public static files
│   ├── favicon.ico
│   ├── sitemap.xml
│   └── robots.txt
├── .next/                       # Next.js build output
├── node_modules/                # Dependencies
├── package.json                 # Project dependencies and scripts
├── next.config.js               # Next.js configuration
├── next-sitemap.config.mjs      # Sitemap generation config
├── postcss.config.mjs           # PostCSS configuration
├── jsconfig.json                # JavaScript/paths configuration
├── build-deploy.sh              # Deployment script
├── bitbucket-pipelines.yml      # CI/CD pipeline
├── .env                         # Environment variables
└── README.md                    # Project documentation
```

## **Detailed Source Structure**

### **Pages Architecture (`src/pages/`)**

Next.js file-based routing with dynamic and static pages:

```
pages/
├── _app.js                      # Global app wrapper
├── _document.js                 # Custom document structure
├── _index.js                    # Index redirect
├── 404.js                       # Custom 404 page
├── home/                        # Homepage components
├── [repairSlug]/               # Dynamic appliance repair pages
│   ├── index.js                # Main appliance page
│   ├── [problemSlug].js        # Specific problem pages
│   └── [...troubleshootingSlug].js # Nested troubleshooting guides
├── location/                    # Location-based pages
│   ├── [state].js              # State-specific listings
│   └── [state]/[city].js       # City-specific listings
├── l/                          # Short URL location pages
├── find-repair/                # Repair finder functionality
├── services/                   # All services overview
├── contact/                    # Contact page
├── about/                      # About page
├── blog/                       # Blog section
├── api/                        # API routes
│   ├── location.js            # Location API
│   ├── contact.js             # Contact form API
│   └── sitemap.js             # Dynamic sitemap
├── privacy-policy/             # Legal pages
├── terms-of-service/
├── ccpa-notice/
└── brand-disclaimer/
```

### **Components Library (`src/components/`)**

Modular, reusable React components:

```
components/
├── index.js                     # Component exports
├── Autocomplete/               # Location autocomplete
├── BlogCard/                   # Blog post cards
├── Breadcrumb/                 # Navigation breadcrumbs
├── Button/                     # Reusable button components
├── Checkbox/                   # Form checkbox inputs
├── ConfirmationPopup/          # Modal confirmations
├── ContactUsForm/              # Contact form component
├── Coverage/                   # Service coverage display
├── Cta/                        # Call-to-action components
├── Features/                   # Feature listing components
├── Footer/                     # Site footer
├── GoogleMap/                  # Map integration
├── Header/                     # Site header and navigation
├── HeroHome/                   # Homepage hero section
├── Image/                      # Optimized image component
├── Input/                      # Form input components
├── ListingCard/                # Provider listing cards
├── Loader/                     # Loading indicators
├── Modal/                      # Modal dialog component
├── Pagination/                 # Results pagination
├── ProviderCard/               # Service provider cards
├── Rating/                     # Star rating component
├── SearchBox/                  # Search functionality
├── SeoHead/                    # SEO meta tags
├── ServiceCard/                # Service offering cards
├── Svg/                        # SVG icon components
├── Tag/                        # Content tags
├── TestimonialCard/            # Customer testimonials
├── Text/                       # Typography components
├── TrustedBy/                  # Brand trust indicators
├── ZipCode/                    # ZIP code input
└── [Additional components]/
```

### **Content Management (`src/utils/Content/`)**

Centralized content management system:

```
utils/Content/
├── PageContent.json            # Main appliance content database
│   ├── APPLIANCES              # All appliance types and problems
│   ├── PROBLEMS                # Common appliance issues
│   └── TROUBLESHOOTING         # Step-by-step guides
├── BlogContent.json            # Blog posts and articles
├── LocationContent.js          # Cities, states, service areas
└── index.js                    # Content utility functions
```

### **Utilities & Configuration (`src/utils/`)**

```
utils/
├── Content/                    # Content management (above)
├── SEOMapping.js               # Dynamic SEO metadata
├── States.js                   # US states data
├── CommonUtils.js              # Shared utility functions
└── Constant.js                 # Application constants
```

### **Layout Wrappers (`src/wrapper/`)**

```
wrapper/
├── index.js                    # Wrapper exports
├── AppLayoutWrapper/           # Main app layout
│   ├── index.js
│   └── AppLayoutWrapper.js
└── PageWrapper/                # Individual page wrapper
    ├── index.js
    └── PageWrapper.js
```

### **API Integration (`src/apis/`)**

```
apis/
├── index.js                    # API exports
├── commonAPI.js                # Shared API functions
└── [additional API modules]
```

### **Custom Hooks (`src/hooks/`)**

```
hooks/
├── [Custom React hooks for:
├── - Location detection
├── - Form handling
├── - SEO management
├── - Content fetching
└── - State management]
```

## **Key Features & Functionality**

### **Content-Driven Architecture**
- **JSON-based content management** for easy updates without code changes
- **Dynamic page generation** for appliances, problems, and troubleshooting
- **SEO-optimized content** with dynamic meta tags and structured data

### **Location-Based Services**
- **ZIP code lookup** for local service providers
- **State and city pages** for local SEO
- **Google Maps integration** for provider locations
- **Autocomplete location search**

### **Appliance Support System**
- **Comprehensive appliance database** (refrigerators, washers, dryers, etc.)
- **Problem categorization** with symptom-based navigation
- **Step-by-step troubleshooting guides**
- **When to call a professional** recommendations

### **SEO & Performance**
- **Dynamic sitemap generation** with next-sitemap
- **Optimized meta tags** for each page type
- **Bundle analysis** for performance monitoring
- **Server-side rendering** for better SEO

### **User Experience Features**
- **Responsive design** with Tailwind CSS
- **Fast search and filtering**
- **Contact forms** with validation
- **Provider ratings and reviews**
- **Blog system** for content marketing

## **Development Workflow**

### **Available Scripts**

```bash
# Development
npm run dev              # Start development server
npm run debug            # Debug mode with Node inspector

# Building
npm run build            # Production build
npm run start            # Start production server
npm run postbuild        # Generate sitemap after build

# Quality & Analysis
npm run lint             # Run ESLint
npm run analyze          # Bundle size analysis

# Deployment
npm run deploy           # Run deployment script
sh build-deploy.sh       # Manual deployment
```

### **Environment Setup**

1. **Prerequisites**: Node.js 18+, npm
2. **Installation**: `npm install`
3. **Environment**: Configure `.env` file
4. **Development**: `npm run dev`
5. **Access**: `http://localhost:3000`

## **Content Management**

### **Adding New Appliances**
Edit `src/utils/Content/PageContent.json`:

```json
{
  "APPLIANCES": {
    "new_appliance_repair": {
      "title": "New Appliance Repair Services",
      "subTitle": "Description...",
      "topics": [
        // Content structure
      ]
    }
  }
}
```

### **Adding New Problems**
Add problem definitions with troubleshooting steps and when to call professionals.

### **SEO Management**
Update `src/utils/SEOMapping.js` for new pages:

```javascript
export const SEO_MAPPING = {
  '/new-page': {
    title: 'Page Title',
    description: 'Meta description',
    keywords: 'relevant, keywords'
  }
};
```

## **Deployment & CI/CD**

### **Bitbucket Pipelines**
- Automated builds on code push
- Environment-specific deployments
- Quality checks and testing

### **Build Process**
1. **Dependency installation**
2. **ESLint code quality checks**
3. **Next.js production build**
4. **Sitemap generation**
5. **Bundle analysis** (optional)
6. **Deployment to hosting**

## **Performance Optimizations**

### **Next.js Features**
- **Static Site Generation (SSG)** for content pages
- **Server Side Rendering (SSR)** for dynamic content
- **Image optimization** with Next.js Image component
- **Code splitting** for optimized loading

### **SEO Optimizations**
- **Dynamic meta tags** based on content
- **Structured data** for rich snippets
- **Automatic sitemap generation**
- **Optimized URL structure**

## **Business Logic**

### **Service Provider Connection**
- **Lead generation** through ZIP code forms
- **Local provider matching**
- **Phone call routing** for immediate service
- **Contact form submissions**

### **Content Strategy**
- **Problem-solution focused** content structure
- **Local SEO** through location pages
- **Educational content** to build trust
- **Brand disclaimers** for legal compliance

## **Technology Highlights**

### **Modern Stack Benefits**
- **React 19** with latest concurrent features
- **Next.js 15** with improved performance
- **Tailwind CSS 4** for rapid UI development
- **JSON-driven content** for non-developer updates

### **Scalability Features**
- **Component-based architecture**
- **Content separation** from code
- **API-ready structure** for future integrations
- **Modular design** for easy feature additions

***

**Project**: Appliance Repair Service Platform  
**Developer**: Jiwan Ghosal  
**Website**: [Appliance Repairly](https://appliancerepairly.com)  
**Framework**: Next.js 15 + React 19  
**Styling**: Tailwind CSS 4  
**Content Management**: JSON-based system

</div>
</div>
    <div class="mt-8 p-6 surface-50 border-round-2xl border-1 border-100">
      <h3 class="text-2xl font-bold mb-4 flex align-items-center gap-2">
        <i class="pi pi-cog text-primary"></i>
        Related Engineering Services
      </h3>
      <div class="flex flex-wrap gap-3">
        <a href="/web-development-services/custom-software-engineering/" class="no-underline px-4 py-2 surface-0 shadow-1 border-round-xl text-700 font-bold hover:text-primary transition-all">Custom Software</a>
        <a href="/web-development-services/mvp-development-for-startups/" class="no-underline px-4 py-2 surface-0 shadow-1 border-round-xl text-700 font-bold hover:text-primary transition-all">MVP Development</a>
        <a href="/web-development-services/ai-and-automation-strategy/" class="no-underline px-4 py-2 surface-0 shadow-1 border-round-xl text-700 font-bold hover:text-primary transition-all">AI & Automation</a>
      </div>
    </div>


<div class="flex justify-content-between align-items-center mt-8 pt-6 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.project.previousProject" :href="$frontmatter.project.previousProject.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary group">
      <i class="pi pi-chevron-left mr-2 transition-transform group-hover:-translate-x-1"></i>
      <div class="flex flex-column">
        <span class="text-xs uppercase text-500 font-bold">Previous</span>
        <span class="font-bold text-900">{{ $frontmatter.project.previousProject.name }}</span>
      </div>
    </a>
  </div>
  <div class="flex-1 text-center">
    <a href="/web-development-projects/" class="no-underline text-color-secondary hover:text-primary font-bold">
      <i class="pi pi-th-large mr-2"></i>
      Portfolio
    </a>
  </div>
  <div class="flex-1 text-right">
    <a v-if="$frontmatter.project.nextProject" :href="$frontmatter.project.nextProject.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary group">
      <div class="flex flex-column text-right">
        <span class="text-xs uppercase text-500 font-bold">Next</span>
        <span class="font-bold text-900">{{ $frontmatter.project.nextProject.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2 transition-transform group-hover:translate-x-1"></i>
    </a>
  </div>
</div>

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>