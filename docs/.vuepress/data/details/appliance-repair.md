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

---

**Project**: Appliance Repair Service Platform  
**Developer**: Jiwan Ghosal  
**Website**: [Appliance Repairly](https://appliancerepairly.com)  
**Framework**: Next.js 15 + React 19  
**Styling**: Tailwind CSS 4  
**Content Management**: JSON-based system
