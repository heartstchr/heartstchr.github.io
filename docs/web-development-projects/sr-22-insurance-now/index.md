---
title: SR-22 Insurance Now
description: Need a Cheap SR-22 Insurance? Compare & save on SR22 Insurance from top providers.
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "SR-22 Insurance Now"
  description: "Need a Cheap SR-22 Insurance? Compare & save on SR22 Insurance from top providers."
  software: "Web"
  schema: "https://schema.org/BusinessApplication"
  domain: "Digital Marketing"
  year: "2025"
  link: "https://sr22insurancenow.com/"
  codeLink: 
  contact: "mailto:jiwan.cse@gmail.com?subject=Inquiry : "
  stack: ["nextdotjs/black/white","React","Nodedotjs","JSON/black/white","Axios/black/white","npm","pm2/black/white","digitalocean","lighthouse","bitbucket"]
  images: [{"itemImageSrc":"/img/home/projects/sr22.webp","alt":"SR-22 insurance Now"},{"itemImageSrc":"/img/projects/sr22/desktop_web_performance.webp","alt":"Desktop web performance"},{"itemImageSrc":"/img/projects/sr22/mobile_web_performance.webp","alt":"Mobile web performance"},{"itemImageSrc":"/img/projects/sr22/why_need_sr22.webp","alt":"why need sr22 insurance Now"},{"itemImageSrc":"/img/projects/sr22/how_to_get_sr22.webp","alt":"how to get sr22 insurance Now"},{"itemImageSrc":"/img/projects/sr22/landing_page.webp","alt":"Landing page sr22 insurance Now"},{"itemImageSrc":"/img/projects/sr22/states_map.webp","alt":"states map sr22 insurance Now"},{"itemImageSrc":"/img/projects/sr22/sr22_city.webp","alt":"sr22 city list"},{"itemImageSrc":"/img/projects/sr22/auto_complete_zip_code.webp","alt":"auto complete zip code sr22 insurance Now"},{"itemImageSrc":"/img/projects/sr22/render_json.webp","alt":"JSON reader for sr22 insurance Now"}]
  features: [{"text":"Campaign owners need fast, dynamic, and conversion-focused websites to maximize ROI from ad campaigns."},{"text":"Dynamic Landing Pages: Generated from a flexible JSON structure for quick deployment."},{"text":"Click-to-Call Ads: Location-based phone numbers to boost conversions."},{"text":"Auto-Complete Google Place API: Enhances user experience and reduces friction."},{"text":"Image Optimization: Ensures lightning-fast load speeds."},{"text":"Google Analytics Integration: Tracks performance for data-driven decisions."},{"text":"Custom Components: Built from scratch for full flexibility and scalability."},{"text":"Mobile Optimization & Accessibility: Ensures seamless experiences for all users."},{"text":"Dynamic Content: JSON-driven landing pages tailored for campaigns."},{"text":"Performance Optimization: WebP images and lazy loading for faster pages."},{"text":"SEO & Analytics: Designed to convert traffic into leads while tracking every interaction."}]
  details: "## Project Overview\nA comprehensive **SR22 insurance platform** built with **Next.js 13** that helps users understand SR22 requirements and connect with insurance providers.\n\n## Architecture\nThis is a **Next.js 13** application with **React 18**, utilizing a **content-driven approach** where SR22 information, provider details, and location-specific content are managed through JSON files and utility modules for scalability and SEO optimization.\n\n### **Technology Stack**\n\n#### **Frontend Framework:**\n- **Next.js 13.5.11** - React framework with SSR/SSG capabilities\n- **React 18.2.0** - Modern React with concurrent features\n- **Sass 1.64.1** - CSS preprocessor for advanced styling\n- **Sharp 0.34.1** - High-performance image processing\n\n#### **Development & Build Tools:**\n- **Bundle Analyzer** - Performance optimization and bundle analysis\n- **Cross-env** - Cross-platform environment variables\n- **PM2** - Production process management (Digital Ocean deployment)\n\n#### **Utilities & Libraries:**\n- **Axios 1.5.0** - HTTP client for API calls\n- **Lodash 4.17.21** - JavaScript utility library\n- **Prop Types** - Runtime type checking\n\n### **Root Directory Structure**\n\n```\nsr2023/\n├── src/                           # Main source code\n│   ├── components/               # Reusable UI components (53 components)\n│   ├── pages/                   # Next.js pages (34+ pages)\n│   ├── utils/                   # Utilities and content management\n│   ├── wrapper/                 # Layout wrappers\n│   ├── hooks/                   # Custom React hooks (7 hooks)\n│   ├── context/                 # React context providers\n│   ├── apis/                    # API integration layer\n│   ├── lib/                     # External library configurations\n│   ├── assets/                  # Static assets and images\n│   └── styles/                  # Global styles and SCSS\n├── content/                      # Content management\n│   └── SR22Content.json         # Comprehensive SR22 content database\n├── public/                       # Public static files\n│   ├── favicon.ico\n│   ├── sitemap.xml\n│   └── robots.txt\n├── .next/                       # Next.js build output\n├── node_modules/                # Dependencies\n├── package.json                 # Project dependencies and scripts\n├── next.config.js               # Next.js configuration with rewrites/redirects\n├── jsconfig.json                # JavaScript configuration\n├── build-deploy.sh              # Deployment script\n├── bitbucket-pipelines.yml      # CI/CD pipeline\n├── .env                         # Environment variables\n└── README.md                    # Project documentation\n```\n\n## **Detailed Source Structure**\n\n### **Pages Architecture (`src/pages/`)**\n\nComprehensive Next.js routing with 34+ pages for SR22 services:\n\n```\npages/\n├── _app.js                      # Global app wrapper\n├── _document.js                 # Custom document structure\n├── _index.js                    # Index redirect\n├── 404.js                       # Custom 404 page\n├── home/                        # Homepage\n├── [providerSlug]/             # Dynamic insurance provider pages\n│   ├── index.js                # Main provider page\n│   ├── [citySlug].js           # Provider city pages\n│   └── [...otherSlug].js       # Additional provider routes\n├── location/                    # Location-based pages\n│   ├── [stateSlug]/            # State-specific SR22 info\n│   └── [stateSlug]/[citySlug]/ # City-specific SR22 services\n├── api/                        # API routes\n│   ├── contact.js              # Contact form API\n│   ├── business.js             # Business listing API\n│   ├── location.js             # Location services API\n│   └── sitemap.js              # Dynamic sitemap generation\n├── sr22-insurance-quotes/      # Quote request functionality\n├── what-is-sr22/               # SR22 education pages\n├── sr22-cost/                  # Cost information\n├── sr22-faq/                   # Frequently asked questions\n├── sr22-by-state/              # State-specific requirements\n├── sr22-providers/             # Insurance provider directory\n├── sr22-bond/                  # SR22 bond information\n├── non-owner-sr22/             # Non-owner SR22 insurance\n├── fr44-insurance/             # FR44 (Virginia/Florida) insurance\n├── bac-calculator/             # Blood alcohol calculator\n├── dui-terms/                  # DUI terminology guide\n├── list-your-business/         # Provider registration\n├── contact-us/                 # Contact page\n├── thank-you/                  # Form submission confirmation\n├── privacy-and-terms/          # Legal pages\n├── do-not-sell-my-data/        # Privacy compliance\n├── how-it-works/               # Process explanation\n├── why-use-our-service/        # Value proposition\n├── lp/                         # Landing pages\n├── lp1/                        # Landing page variant 1\n├── lp11/                       # Landing page variant 11\n├── lp1e/                       # Landing page variant 1e\n└── lpe/                        # Landing page variant e\n```\n\n### **Components Library (`src/components/`)**\n\nExtensive component library with 53+ reusable components:\n\n```\ncomponents/\n├── Accordion/                  # FAQ and content accordions\n├── Autocomplete/               # Location autocomplete\n├── BlogCard/                   # Blog post cards\n├── BusinessForm/               # Provider registration form\n├── Button/                     # Standard button components\n├── ButtonLP/                   # Landing page specific buttons\n├── CalculatorForm/             # BAC calculator form\n├── Checkbox/                   # Form checkbox inputs\n├── CircleLoader/               # Loading indicators\n├── ConfirmationPopup/          # Modal confirmations\n├── ContactUsForm/              # Contact form component\n├── Dropdown/                   # Select dropdown components\n├── FeatureCard/                # Feature highlighting cards\n├── Footer/                     # Site footer with links\n├── Header/                     # Site header and navigation\n├── HeroHome/                   # Homepage hero section\n├── HeroHomeLP/                 # Landing page hero variants\n├── Image/                      # Optimized image component\n├── Input/                      # Form input components\n├── ListingCard/                # Provider listing cards\n├── Loader/                     # Various loading states\n├── Modal/                      # Modal dialog component\n├── ProviderCard/               # Insurance provider cards\n├── QuoteForm/                  # Quote request forms\n├── Rating/                     # Star rating component\n├── SearchBox/                  # Search functionality\n├── SeoHead/                    # SEO meta tags\n├── ServiceCard/                # Service offering cards\n├── Sidebar/                    # Navigation sidebar\n├── StateCard/                  # State-specific info cards\n├── Tag/                        # Content tags\n├── TestimonialCard/            # Customer testimonials\n├── Text/                       # Typography components\n├── TrustedBy/                  # Trust indicators\n├── ZipCodeForm/                # ZIP code input forms\n└── [20+ additional components]/\n```\n\n### **Content Management (`content/` & `src/utils/Content/`)**\n\nCentralized content management system:\n\n```\ncontent/\n└── SR22Content.json            # Comprehensive SR22 content database (493KB)\n    ├── INSURANCE               # SR22 insurance information\n    ├── PROVIDERS              # Insurance provider details\n    ├── LOCATIONS              # State/city specific content\n    ├── FAQ                    # Frequently asked questions\n    ├── GUIDES                 # Educational content\n    └── LEGAL                  # Legal and compliance content\n\nsrc/utils/Content/\n├── PageContent.js              # Page content utilities\n├── LocationContent.js          # Cities, states, service areas\n├── FeatureContent.js           # Feature descriptions\n└── [additional content modules]\n```\n\n### **Utilities & Configuration (`src/utils/`)**\n\n```\nutils/\n├── Content/                    # Content management (above)\n├── SEOMapping.js               # Dynamic SEO metadata\n├── States.js                   # US states data\n├── CommonUtils.js              # Shared utility functions\n├── Constant.js                 # Application constants\n└── RandomDescription.js        # Dynamic content generation\n```\n\n### **Custom Hooks (`src/hooks/`)**\n\n```\nhooks/\n├── [7 custom React hooks for:\n├── - Location detection and management\n├── - Form handling and validation\n├── - SEO management\n├── - Content fetching and parsing\n├── - State management\n├── - API integration\n└── - User interaction tracking]\n```\n\n### **Layout Wrappers (`src/wrapper/`)**\n\n```\nwrapper/\n├── index.js                    # Wrapper exports\n├── AppLayoutWrapper/           # Main app layout\n├── PageWrapper/                # Individual page wrapper\n├── LandingPageWrapper/         # Landing page specific layout\n└── ProviderWrapper/            # Provider page layout\n```\n\n### **API Integration (`src/apis/`)**\n\n```\napis/\n├── index.js                    # API exports\n├── commonAPI.js                # Shared API functions\n├── contactAPI.js               # Contact form submissions\n├── locationAPI.js              # Location services\n└── [additional API modules]\n```\n\n## **Key Features & Functionality**\n\n### **SR22 Insurance Platform Features**\n- **Comprehensive SR22 education** with detailed guides and FAQs\n- **State-specific requirements** for all 50 states\n- **Insurance provider directory** with 20+ major insurers\n- **Quote request system** for connecting users with providers\n- **Location-based services** for local SR22 requirements\n- **DUI/DWI recovery resources** and tools\n\n### **Content-Driven Architecture**\n- **JSON-based content management** in SR22Content.json (493KB of content)\n- **Dynamic page generation** for providers, locations, and guides\n- **SEO-optimized content** with dynamic meta tags and structured data\n- **Educational resources** covering all aspects of SR22 requirements\n\n### **Location & Provider Services**\n- **50-state coverage** with specific requirements and laws\n- **City-level content** for major metropolitan areas\n- **Provider comparison** tools and information\n- **Local agent finder** functionality\n- **State-specific forms** and requirements\n\n### **User Tools & Calculators**\n- **BAC (Blood Alcohol Content) calculator**\n- **SR22 cost estimator** tools\n- **Quote comparison** functionality\n- **DUI terms glossary**\n- **Timeline calculators** for license reinstatement\n\n### **SEO & Performance**\n- **Dynamic sitemap generation** for all pages\n- **State and city-specific SEO** optimization\n- **Rich snippets** and structured data\n- **Bundle optimization** with analyzer\n- **Server-side rendering** for better indexing\n\n### **Business Features**\n- **Provider registration** system\n- **Lead generation** through quote forms\n- **Contact management** system\n- **Business listing** functionality\n- **Compliance tools** for privacy regulations\n\n## **Development Workflow**\n\n### **Available Scripts**\n\n```bash\n# Development\nnpm run dev              # Start development server\n\n# Building\nnpm run build            # Production build\nnpm run start            # Start production server\nnpm run export           # Static export\n\n# Analysis & Quality\nnpm run lint             # ESLint code quality\nnpm run analyze-build    # Bundle size analysis\n\n# Deployment\nnpm run deploy           # Run deployment script\nsh build-deploy.sh       # Manual deployment to Digital Ocean\n```\n\n### **Digital Ocean Deployment Process**\n\n```bash\n# SSH to Digital Ocean droplet\nssh user@server\n\n# Navigate to project\ncd sr2023\n\n# Pull latest changes\ngit pull origin master\n\n# Build application\nnpm run build\n\n# Restart PM2 process\npm2 restart sr23\n```\n\n### **Environment Setup**\n\n1. **Prerequisites**: Node.js 18+, npm, PM2 (for production)\n2. **Installation**: `npm install`\n3. **Environment**: Configure `.env` file\n4. **Development**: `npm run dev`\n5. **Access**: `http://localhost:3000`\n\n## **Content Management**\n\n### **SR22Content.json Structure**\nThe main content file (493KB) contains:\n\n```json\n{\n  \"INSURANCE\": {\n    \"what_is_sr22\": {\n      \"title\": \"What is SR-22 Insurance?\",\n      \"content\": \"Educational content...\",\n      \"topics\": [\n        // Detailed topic breakdown\n      ]\n    }\n  },\n  \"PROVIDERS\": {\n    // Insurance provider information\n  },\n  \"LOCATIONS\": {\n    // State and city specific content\n  }\n}\n```\n\n### **Adding New Content**\n1. **SR22 Guides**: Edit `SR22Content.json` INSURANCE section\n2. **Providers**: Add to PROVIDERS section with images and details\n3. **Locations**: Update LOCATIONS for new states/cities\n4. **SEO**: Update `SEOMapping.js` for new pages\n\n## **Next.js Configuration Highlights**\n\n### **Rewrites & Redirects**\n```javascript\n// Blog redirect to external domain\n{\n  source: \"/blog/:path*\",\n  destination: \"https://sr22insurancenow.com/blog/:path*\"\n}\n\n// SEO-friendly redirects\n{\n  source: \"/about-sr22\",\n  destination: \"/what-is-sr22\",\n  statusCode: 301\n}\n```\n\n### **Bundle Analysis**\n- Integrated **@next/bundle-analyzer** for performance monitoring\n- **Image optimization** with Sharp\n- **Sass support** for advanced styling\n\n## **SEO Strategy**\n\n### **Content SEO**\n- **50+ state-specific pages** for local SEO\n- **Provider-specific content** for brand searches\n- **Educational content** for informational queries\n- **FAQ sections** for long-tail keywords\n\n### **Technical SEO**\n- **Dynamic meta tags** based on content\n- **Structured data** for insurance providers\n- **XML sitemap** generation\n- **Optimized URL structure** for SEO\n\n## **Deployment & CI/CD**\n\n### **Bitbucket Pipelines**\n- Automated builds on code push\n- Quality checks and linting\n- **Digital Ocean deployment** integration\n\n### **Production Infrastructure**\n- **Digital Ocean Droplet** hosting\n- **PM2 process management** for reliability\n- **Git-based deployment** workflow\n- **SSL certificate** management\n\n## **Business Logic**\n\n### **Lead Generation Flow**\n1. **User education** through comprehensive guides\n2. **ZIP code collection** for location targeting\n3. **Quote form submission** to partner providers\n4. **Provider matching** based on location and needs\n5. **Follow-up communication** through contact system\n\n### **Provider Network**\n- **20+ major insurance companies** represented\n- **State-specific availability** tracking\n- **Provider comparison** tools\n- **Business registration** system for new providers\n\n## **Compliance & Legal**\n\n### **Privacy Compliance**\n- **CCPA compliance** with do-not-sell functionality\n- **Privacy policy** and terms of service\n- **Data handling** procedures\n- **User consent** management\n\n### **Insurance Regulations**\n- **State-specific requirements** accuracy\n- **Disclaimer management** for legal protection\n- **Provider licensing** verification\n- **Compliance monitoring** tools\n\n## **Performance Optimizations**\n\n### **Next.js Features**\n- **Static Site Generation (SSG)** for content pages\n- **Server Side Rendering (SSR)** for dynamic content\n- **Image optimization** with Next.js Image and Sharp\n- **Code splitting** for optimized loading\n- **Bundle analysis** for performance monitoring\n\n### **Content Optimizations**\n- **Lazy loading** for images and components\n- **Content caching** strategies\n- **Optimized JSON** content structure\n- **Minimal JavaScript** for critical pages\n\n## **Technology Highlights**\n\n### **Modern Stack Benefits**\n- **Next.js 13** with improved performance and features\n- **React 18** with concurrent features\n- **Sass** for maintainable styles\n- **JSON-driven content** for non-developer updates\n\n### **Scalability Features**\n- **Component-based architecture** with 53+ components\n- **Content separation** from code logic\n- **API-ready structure** for future integrations\n- **Modular design** for easy feature additions\n\n---\n\n**Project**: SR22 Insurance Platform  \n**Industry**: Insurance / Financial Services  \n**Framework**: Next.js 13 + React 18  \n**Deployment**: Digital Ocean with PM2  \n**Content**: 493KB comprehensive SR22 database  \n**Coverage**: 50 states + 20+ insurance providers\n\n"
---
<div>
  <div class="col-12">
    <div class="my-2 text-l line-height-3">{{$frontmatter.project.description}}</div>
  </div>
  <div class="flex flex-column" itemscope itemtype="https://schema.org/SoftwareApplication">
    <div v-if="$frontmatter.project.images">
      <div class="card" v-if="$frontmatter.project.images.length != 1">
        <Galleria :value="$frontmatter.project.images" :responsiveOptions="responsiveOptions" :numVisible="5"
          :circular="true" :showItemNavigators="true" :showThumbnails="true" :pt="{
            prevButton: { 'aria-label': 'Previous screen of project' },
            nextButton: { 'aria-label': 'Next screen of project' }
          }">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
              style="width: 100%; display: block" loading="eager" fetchpriority="high" />
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
          </template>
        </Galleria>
      </div>
      <div class="card" v-else>
        <img :src="$frontmatter.project.images[0].itemImageSrc" :alt="$frontmatter.project.images[0].alt"
          style="width: 100%; display: block" loading="eager" fetchpriority="high" />
      </div>
    </div>
    <div class="col-12">
      <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
    </div>
    <div class="col-12 pt-4">
      <link itemprop="applicationCategory" :href="$frontmatter.project.schema" />
      <div class="flex md:flex-row flex-column justify-content-center align-items-center gap-2 my-4 w-full max-w-96">
        <a v-if="$frontmatter.project.contact" :href="`$frontmatter.project.contact $frontmatter.project.name`" target="_blank"
          class="flex flex-row no-underline w-full">
          <Button label="Get Custom Request" icon="pi pi-inbox" severity="secondary" raised rounded class="w-full" />
        </a>
        <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank"
          class="flex flex-row no-underline w-full">
          <Button label="Live Demo" icon="pi pi-angle-double-right" severity="primary" raised rounded class="w-full" />
        </a>
        <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank"
          class="flex flex-row no-underline w-full">
          <Button label="Get Started" icon="pi pi-github" severity="secondary" raised rounded class="w-full" />
        </a>
      </div>
    </div>
  </div>
</div>
<div class="flex flex-column px-4">
  <h3 class="my-2 text-l">Features</h3>
  <ul class="my-2 md:ml-3 text-sm">
    <li v-for="feature in $frontmatter.project.features" :key="feature.text"
      class="flex flex-row align-content-center line-height-3">
      <i class="pi pi-verified m-2 bg-primary" alt="arrow" style="font-size: 1rem;"></i>
      <h4 class="m-2 text-sm" v-html="feature.text"></h4>
    </li>
  </ul>
</div>

## Project Overview
A comprehensive **SR22 insurance platform** built with **Next.js 13** that helps users understand SR22 requirements and connect with insurance providers.

## Architecture
This is a **Next.js 13** application with **React 18**, utilizing a **content-driven approach** where SR22 information, provider details, and location-specific content are managed through JSON files and utility modules for scalability and SEO optimization.

### **Technology Stack**

#### **Frontend Framework:**
- **Next.js 13.5.11** - React framework with SSR/SSG capabilities
- **React 18.2.0** - Modern React with concurrent features
- **Sass 1.64.1** - CSS preprocessor for advanced styling
- **Sharp 0.34.1** - High-performance image processing

#### **Development & Build Tools:**
- **Bundle Analyzer** - Performance optimization and bundle analysis
- **Cross-env** - Cross-platform environment variables
- **PM2** - Production process management (Digital Ocean deployment)

#### **Utilities & Libraries:**
- **Axios 1.5.0** - HTTP client for API calls
- **Lodash 4.17.21** - JavaScript utility library
- **Prop Types** - Runtime type checking

### **Root Directory Structure**

```
sr2023/
├── src/                           # Main source code
│   ├── components/               # Reusable UI components (53 components)
│   ├── pages/                   # Next.js pages (34+ pages)
│   ├── utils/                   # Utilities and content management
│   ├── wrapper/                 # Layout wrappers
│   ├── hooks/                   # Custom React hooks (7 hooks)
│   ├── context/                 # React context providers
│   ├── apis/                    # API integration layer
│   ├── lib/                     # External library configurations
│   ├── assets/                  # Static assets and images
│   └── styles/                  # Global styles and SCSS
├── content/                      # Content management
│   └── SR22Content.json         # Comprehensive SR22 content database
├── public/                       # Public static files
│   ├── favicon.ico
│   ├── sitemap.xml
│   └── robots.txt
├── .next/                       # Next.js build output
├── node_modules/                # Dependencies
├── package.json                 # Project dependencies and scripts
├── next.config.js               # Next.js configuration with rewrites/redirects
├── jsconfig.json                # JavaScript configuration
├── build-deploy.sh              # Deployment script
├── bitbucket-pipelines.yml      # CI/CD pipeline
├── .env                         # Environment variables
└── README.md                    # Project documentation
```

## **Detailed Source Structure**

### **Pages Architecture (`src/pages/`)**

Comprehensive Next.js routing with 34+ pages for SR22 services:

```
pages/
├── _app.js                      # Global app wrapper
├── _document.js                 # Custom document structure
├── _index.js                    # Index redirect
├── 404.js                       # Custom 404 page
├── home/                        # Homepage
├── [providerSlug]/             # Dynamic insurance provider pages
│   ├── index.js                # Main provider page
│   ├── [citySlug].js           # Provider city pages
│   └── [...otherSlug].js       # Additional provider routes
├── location/                    # Location-based pages
│   ├── [stateSlug]/            # State-specific SR22 info
│   └── [stateSlug]/[citySlug]/ # City-specific SR22 services
├── api/                        # API routes
│   ├── contact.js              # Contact form API
│   ├── business.js             # Business listing API
│   ├── location.js             # Location services API
│   └── sitemap.js              # Dynamic sitemap generation
├── sr22-insurance-quotes/      # Quote request functionality
├── what-is-sr22/               # SR22 education pages
├── sr22-cost/                  # Cost information
├── sr22-faq/                   # Frequently asked questions
├── sr22-by-state/              # State-specific requirements
├── sr22-providers/             # Insurance provider directory
├── sr22-bond/                  # SR22 bond information
├── non-owner-sr22/             # Non-owner SR22 insurance
├── fr44-insurance/             # FR44 (Virginia/Florida) insurance
├── bac-calculator/             # Blood alcohol calculator
├── dui-terms/                  # DUI terminology guide
├── list-your-business/         # Provider registration
├── contact-us/                 # Contact page
├── thank-you/                  # Form submission confirmation
├── privacy-and-terms/          # Legal pages
├── do-not-sell-my-data/        # Privacy compliance
├── how-it-works/               # Process explanation
├── why-use-our-service/        # Value proposition
├── lp/                         # Landing pages
├── lp1/                        # Landing page variant 1
├── lp11/                       # Landing page variant 11
├── lp1e/                       # Landing page variant 1e
└── lpe/                        # Landing page variant e
```

### **Components Library (`src/components/`)**

Extensive component library with 53+ reusable components:

```
components/
├── Accordion/                  # FAQ and content accordions
├── Autocomplete/               # Location autocomplete
├── BlogCard/                   # Blog post cards
├── BusinessForm/               # Provider registration form
├── Button/                     # Standard button components
├── ButtonLP/                   # Landing page specific buttons
├── CalculatorForm/             # BAC calculator form
├── Checkbox/                   # Form checkbox inputs
├── CircleLoader/               # Loading indicators
├── ConfirmationPopup/          # Modal confirmations
├── ContactUsForm/              # Contact form component
├── Dropdown/                   # Select dropdown components
├── FeatureCard/                # Feature highlighting cards
├── Footer/                     # Site footer with links
├── Header/                     # Site header and navigation
├── HeroHome/                   # Homepage hero section
├── HeroHomeLP/                 # Landing page hero variants
├── Image/                      # Optimized image component
├── Input/                      # Form input components
├── ListingCard/                # Provider listing cards
├── Loader/                     # Various loading states
├── Modal/                      # Modal dialog component
├── ProviderCard/               # Insurance provider cards
├── QuoteForm/                  # Quote request forms
├── Rating/                     # Star rating component
├── SearchBox/                  # Search functionality
├── SeoHead/                    # SEO meta tags
├── ServiceCard/                # Service offering cards
├── Sidebar/                    # Navigation sidebar
├── StateCard/                  # State-specific info cards
├── Tag/                        # Content tags
├── TestimonialCard/            # Customer testimonials
├── Text/                       # Typography components
├── TrustedBy/                  # Trust indicators
├── ZipCodeForm/                # ZIP code input forms
└── [20+ additional components]/
```

### **Content Management (`content/` & `src/utils/Content/`)**

Centralized content management system:

```
content/
└── SR22Content.json            # Comprehensive SR22 content database (493KB)
    ├── INSURANCE               # SR22 insurance information
    ├── PROVIDERS              # Insurance provider details
    ├── LOCATIONS              # State/city specific content
    ├── FAQ                    # Frequently asked questions
    ├── GUIDES                 # Educational content
    └── LEGAL                  # Legal and compliance content

src/utils/Content/
├── PageContent.js              # Page content utilities
├── LocationContent.js          # Cities, states, service areas
├── FeatureContent.js           # Feature descriptions
└── [additional content modules]
```

### **Utilities & Configuration (`src/utils/`)**

```
utils/
├── Content/                    # Content management (above)
├── SEOMapping.js               # Dynamic SEO metadata
├── States.js                   # US states data
├── CommonUtils.js              # Shared utility functions
├── Constant.js                 # Application constants
└── RandomDescription.js        # Dynamic content generation
```

### **Custom Hooks (`src/hooks/`)**

```
hooks/
├── [7 custom React hooks for:
├── - Location detection and management
├── - Form handling and validation
├── - SEO management
├── - Content fetching and parsing
├── - State management
├── - API integration
└── - User interaction tracking]
```

### **Layout Wrappers (`src/wrapper/`)**

```
wrapper/
├── index.js                    # Wrapper exports
├── AppLayoutWrapper/           # Main app layout
├── PageWrapper/                # Individual page wrapper
├── LandingPageWrapper/         # Landing page specific layout
└── ProviderWrapper/            # Provider page layout
```

### **API Integration (`src/apis/`)**

```
apis/
├── index.js                    # API exports
├── commonAPI.js                # Shared API functions
├── contactAPI.js               # Contact form submissions
├── locationAPI.js              # Location services
└── [additional API modules]
```

## **Key Features & Functionality**

### **SR22 Insurance Platform Features**
- **Comprehensive SR22 education** with detailed guides and FAQs
- **State-specific requirements** for all 50 states
- **Insurance provider directory** with 20+ major insurers
- **Quote request system** for connecting users with providers
- **Location-based services** for local SR22 requirements
- **DUI/DWI recovery resources** and tools

### **Content-Driven Architecture**
- **JSON-based content management** in SR22Content.json (493KB of content)
- **Dynamic page generation** for providers, locations, and guides
- **SEO-optimized content** with dynamic meta tags and structured data
- **Educational resources** covering all aspects of SR22 requirements

### **Location & Provider Services**
- **50-state coverage** with specific requirements and laws
- **City-level content** for major metropolitan areas
- **Provider comparison** tools and information
- **Local agent finder** functionality
- **State-specific forms** and requirements

### **User Tools & Calculators**
- **BAC (Blood Alcohol Content) calculator**
- **SR22 cost estimator** tools
- **Quote comparison** functionality
- **DUI terms glossary**
- **Timeline calculators** for license reinstatement

### **SEO & Performance**
- **Dynamic sitemap generation** for all pages
- **State and city-specific SEO** optimization
- **Rich snippets** and structured data
- **Bundle optimization** with analyzer
- **Server-side rendering** for better indexing

### **Business Features**
- **Provider registration** system
- **Lead generation** through quote forms
- **Contact management** system
- **Business listing** functionality
- **Compliance tools** for privacy regulations

## **Development Workflow**

### **Available Scripts**

```bash
# Development
npm run dev              # Start development server

# Building
npm run build            # Production build
npm run start            # Start production server
npm run export           # Static export

# Analysis & Quality
npm run lint             # ESLint code quality
npm run analyze-build    # Bundle size analysis

# Deployment
npm run deploy           # Run deployment script
sh build-deploy.sh       # Manual deployment to Digital Ocean
```

### **Digital Ocean Deployment Process**

```bash
# SSH to Digital Ocean droplet
ssh user@server

# Navigate to project
cd sr2023

# Pull latest changes
git pull origin master

# Build application
npm run build

# Restart PM2 process
pm2 restart sr23
```

### **Environment Setup**

1. **Prerequisites**: Node.js 18+, npm, PM2 (for production)
2. **Installation**: `npm install`
3. **Environment**: Configure `.env` file
4. **Development**: `npm run dev`
5. **Access**: `http://localhost:3000`

## **Content Management**

### **SR22Content.json Structure**
The main content file (493KB) contains:

```json
{
  "INSURANCE": {
    "what_is_sr22": {
      "title": "What is SR-22 Insurance?",
      "content": "Educational content...",
      "topics": [
        // Detailed topic breakdown
      ]
    }
  },
  "PROVIDERS": {
    // Insurance provider information
  },
  "LOCATIONS": {
    // State and city specific content
  }
}
```

### **Adding New Content**
1. **SR22 Guides**: Edit `SR22Content.json` INSURANCE section
2. **Providers**: Add to PROVIDERS section with images and details
3. **Locations**: Update LOCATIONS for new states/cities
4. **SEO**: Update `SEOMapping.js` for new pages

## **Next.js Configuration Highlights**

### **Rewrites & Redirects**
```javascript
// Blog redirect to external domain
{
  source: "/blog/:path*",
  destination: "https://sr22insurancenow.com/blog/:path*"
}

// SEO-friendly redirects
{
  source: "/about-sr22",
  destination: "/what-is-sr22",
  statusCode: 301
}
```

### **Bundle Analysis**
- Integrated **@next/bundle-analyzer** for performance monitoring
- **Image optimization** with Sharp
- **Sass support** for advanced styling

## **SEO Strategy**

### **Content SEO**
- **50+ state-specific pages** for local SEO
- **Provider-specific content** for brand searches
- **Educational content** for informational queries
- **FAQ sections** for long-tail keywords

### **Technical SEO**
- **Dynamic meta tags** based on content
- **Structured data** for insurance providers
- **XML sitemap** generation
- **Optimized URL structure** for SEO

## **Deployment & CI/CD**

### **Bitbucket Pipelines**
- Automated builds on code push
- Quality checks and linting
- **Digital Ocean deployment** integration

### **Production Infrastructure**
- **Digital Ocean Droplet** hosting
- **PM2 process management** for reliability
- **Git-based deployment** workflow
- **SSL certificate** management

## **Business Logic**

### **Lead Generation Flow**
1. **User education** through comprehensive guides
2. **ZIP code collection** for location targeting
3. **Quote form submission** to partner providers
4. **Provider matching** based on location and needs
5. **Follow-up communication** through contact system

### **Provider Network**
- **20+ major insurance companies** represented
- **State-specific availability** tracking
- **Provider comparison** tools
- **Business registration** system for new providers

## **Compliance & Legal**

### **Privacy Compliance**
- **CCPA compliance** with do-not-sell functionality
- **Privacy policy** and terms of service
- **Data handling** procedures
- **User consent** management

### **Insurance Regulations**
- **State-specific requirements** accuracy
- **Disclaimer management** for legal protection
- **Provider licensing** verification
- **Compliance monitoring** tools

## **Performance Optimizations**

### **Next.js Features**
- **Static Site Generation (SSG)** for content pages
- **Server Side Rendering (SSR)** for dynamic content
- **Image optimization** with Next.js Image and Sharp
- **Code splitting** for optimized loading
- **Bundle analysis** for performance monitoring

### **Content Optimizations**
- **Lazy loading** for images and components
- **Content caching** strategies
- **Optimized JSON** content structure
- **Minimal JavaScript** for critical pages

## **Technology Highlights**

### **Modern Stack Benefits**
- **Next.js 13** with improved performance and features
- **React 18** with concurrent features
- **Sass** for maintainable styles
- **JSON-driven content** for non-developer updates

### **Scalability Features**
- **Component-based architecture** with 53+ components
- **Content separation** from code logic
- **API-ready structure** for future integrations
- **Modular design** for easy feature additions

---

**Project**: SR22 Insurance Platform  
**Industry**: Insurance / Financial Services  
**Framework**: Next.js 13 + React 18  
**Deployment**: Digital Ocean with PM2  
**Content**: 493KB comprehensive SR22 database  
**Coverage**: 50 states + 20+ insurance providers



<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>