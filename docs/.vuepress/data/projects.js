import { toKebabCase } from "../utils/index.js";

export const SUPPORT_EMAIL = typeof __VITE_SUPPORT_EMAIL__ !== "undefined"
  ? __VITE_SUPPORT_EMAIL__
  : "support@stackseekers.com";

export const freelance = [
  {
    name: "Premium Furniture Landing Page & Catalog",
    seoTitle: "Premium Furniture Landing Page & Catalog",
    seoDescription: "A luxury furniture landing page, lookbook, and product catalog built with Vue.js and a Notion headless CMS — perfect for premium retail showrooms.",
    category: "Ready-made Apps",
    description: "A luxury, full-featured furniture landing page, lookbook, and product catalog platform built with Vue.js, powered by a Notion Headless CMS, and deployed on Netlify. Perfect for custom furniture showrooms, interior design catalogs, or any premium retail catalog.",
    software: "Web Application",
    org: "Stack Seekers",
    year: "2025",
    domain: "Headless Commerce & CMS Integration",
    schema: "https://schema.org/WebApplication",
    link: "",
    price: "20",
    currency: "USD",
    contact: `mailto:${SUPPORT_EMAIL}?subject=Notion Furniture Catalog Inquiry`,
    stack: [
      "javascript",
      "vuedotjs",
      "notion/black/white",
      "html5",
      "css",
      "tailwindcss",
      "PrimeVue",
      "netlify",
      "vite/black/white",
      "github/black/white"
    ],
    otherSkills: [
      "Headless CMS Integration",
      "Notion API Syncing",
      "Interactive Hotspot Mapping",
      "Serverless Functions",
      "Asset Storage via Blobs",
      "SEO Optimization"
    ],
    features: [
      { text: "Dynamic DB Auto-Discovery: Automatically maps database schema by scanning titles in your Notion page." },
      { text: "Interactive Visual Lookbook: Map coordinates visually to direct catalog items with hoverable pricing tags." },
      { text: "Admin Hotspot Mapper: An intuitive admin panel overlay that lets users click images to place product hotspots." },
      { text: "Full Content Customization: Edit hero headlines, team members, contact coordinates, and styles from Notion." },
      { text: "VIP Leads Pipeline: Form submissions and WhatsApp click logs are stored directly back into Notion." }
    ],
    images: [
      {
        itemImageSrc: "/img/projects/furniture-landing-page/furniture-cover.webp",
        alt: "Notion-Powered Furniture Landing Page Showcase"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/product-catalog.webp",
        alt: "Premium Furniture Catalog and Filtering Interface"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/interactive-lookbook.webp",
        alt: "Interactive Lookbook Scene with Hoverable Hotspots"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/product-detail.webp",
        alt: "Product Detail Page with Rich Image Gallery"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/product-detail-complete-look.webp",
        alt: "Related Products Recommendation Section"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/product-specifications.webp",
        alt: "Dynamic Product Specifications and Support Actions"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/admin-dashboard.webp",
        alt: "Notion CMS Admin Panel Dashboard Overview"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/admin-products-list.webp",
        alt: "Showroom Product Inventory Management Interface"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/admin-hotspot-mapper.webp",
        alt: "Admin Coordinate Hotspot Mapper Panel"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/admin-image-upload.webp",
        alt: "Drag & Drop Netlify Blobs Media Uploader"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/admin-content-editor.webp",
        alt: "Notion Page Content and Banners Editor"
      },
      {
        itemImageSrc: "/img/projects/furniture-landing-page/admin-vip-leads.webp",
        alt: "Real-time VIP Leads and Inquiries Pipeline"
      }
    ],
    video: "https://youtu.be/55QSJ9nAheI",
    perspective: {
      executive: "Transforms Notion from a simple productivity workspace into a high-performance, headless catalog CMS. It empowers showroom owners and marketers to publish new collections, update pricing, map lookbooks, and capture leads with zero code and zero maintenance overhead.",
      technical: "Features a dynamic Vue 3 component architecture driven by Notion database schemas. Integrates Netlify Serverless Functions as a secure API bridge, Netlify Blobs for persistent image asset uploads, and Pinia for reactive global state management. Includes local caching of database schemas to prevent rate limits."
    },
    details: "./details/furniture-landing-page.md"
  },
  {
    name: "AI Dynamic CRUD App",
    seoTitle: "AI Dynamic CRUD App: Notion to Web App",
    seoDescription: "Transform any Notion database into a professional web application with AI. Automatic field detection, intelligent forms, search, and multi-language support.",
    category: "Ready-made Apps",
    description: "Transform your Notion database into a professional web application in minutes with the power of AI. Automatically reads your Notion structure, suggests field relationships, and creates beautiful, responsive interfaces with intelligent forms, search, and multi-language support.",
    software: "Web Application",
    org: "Stack Seekers",
    year: "2025",
    domain: "Database Management & AI Automation",
    schema: "https://schema.org/WebApplication",
    link: "https://ai-dynamic-crud-app.stackseekers.com/",
    price: "20",
    currency: "USD",
    contact: `mailto:${SUPPORT_EMAIL}?subject=AI Dynamic CRUD App Inquiry`,
    stack: [
      "javascript",
      "vuedotjs",
      "notion/black/white",
      "html5",
      "css",
      "json/black/white",
    ],
    otherSkills: [
      "AI Form Generation",
      "No-Code Development",
      "Database Integration",
    ],
    features: [
      { text: "AI Schema Detection: Automatically detects and adapts to your Notion database structure." },
      { text: "Dynamic Form Generation: Creates perfect forms based on field types." },
      { text: "Professional Interface: Clean, modern design with card and table views." }
    ],
    images: [
      {
        itemImageSrc: "/img/projects/ai-dynamic-crud-app/ai-webapp-english.webp",
        alt: "AI Dynamic CRUD App - Create with Gemini",
      },
      {
        itemImageSrc: "/img/projects/ai-dynamic-crud-app/ai-webapp-hindi.webp",
        alt: "AI Dynamic CRUD App - Hindi Translation",
      },
      {
        itemImageSrc: "/img/projects/ai-dynamic-crud-app/ai-webapp-japanese.webp",
        alt: "AI Dynamic CRUD App - Japanese Translation",
      },
      {
        itemImageSrc: "/img/projects/ai-dynamic-crud-app/ai-webapp-schema-review.webp",
        alt: "AI Database Schema Review",
      },
      {
        itemImageSrc: "/img/projects/ai-dynamic-crud-app/ai-webapp-crud-ui.webp",
        alt: "AI Generated Dashboard Interface",
      }
    ],
    video: "https://www.youtube.com/watch?v=jrkwxLkICRY",
    perspective: {
      executive: "A game-changer for businesses using Notion as a backend. It eliminates the need for expensive custom development by automatically generating a professional web interface directly from your data. Ideal for internal tools, client portals, and rapid prototyping with zero friction.",
      technical: "Features a dynamic schema-driven UI engine. It parses Notion database properties in real-time to generate Vue components with appropriate validation and input types. Includes multi-language support through a custom i18n bridge and optimized API caching for smooth performance."
    },
    details: "./details/ai-dynamic-crud-app.md",
  },
  {
    name: "Local Home Services Pros",
    seoTitle: "Home Services Marketplace | Programmatic SEO",
    seoDescription: "A Next.js 15 home services marketplace with dynamic routing for thousands of location-service pages. Programmatic SEO and lead generation built in.",
    category: "Startup MVPs",
    description:
      "A modern, SEO-optimized web platform that connects homeowners and property managers with verified local service providers. Built with Next.js 15 and React 19, it serves as a lead generation and matching service with dynamic routing for thousands of location-service combinations.",
    software: "Web Platform",
    org: "Stack Seekers",
    year: "2025",
    domain: "Home Services & Lead Generation",
    schema: "https://schema.org/WebApplication",
    link: "https://localxr.com",
    price: "0",
    currency: "USD",
    contact: `mailto:${SUPPORT_EMAIL}?subject=LocalXR Inquiry`,
    stack: [
      "nextdotjs/black/white",
      "react",
      "tailwindcss",
      "sass",
      "nodedotjs",
      "axios",
      "Eslint",
      "Prettier",
    ],
    otherSkills: [
      "SEO Optimization",
      "Lead Generation",
      "Dynamic Routing",
      "Server-Side Rendering",
      "Google Places API",
      "Performance Optimization",
    ],
    features: [
      {
        text: "Location-Aware Search: Google Places Integration, ZIP Code Search, and hierarchical State/City navigation with smart normalization.",
      },
      {
        text: "Dynamic Listings & Routing: Automatically generated listings for thousands of location-service combinations with SEO-optimized URLs.",
      },
      {
        text: "Lead Generation System: Secure callback and contact forms with input sanitization, validation, and rate limiting.",
      },
      {
        text: "Performance First: Optimized for Core Web Vitals with dynamic imports, image optimization, and server-side rendering.",
      },
      {
        text: "Comprehensive SEO: Dynamic meta tags, canonical URLs, and automated sitemap generation for maximum search visibility.",
      },
      {
        text: "Scalable Architecture: Built on Next.js 15 and React 19 with a modular component system and context-driven state management.",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/localxr/localxr-cover.webp",
        alt: "LocalXR - Home Services Marketplace Cover",
      },
      {
        itemImageSrc: "/img/projects/localxr/plumber-home.webp",
        alt: "LocalXR - Plumber Home Page",
      },
      {
        itemImageSrc: "/img/projects/localxr/listing.webp",
        alt: "LocalXR - Service Listings",
      },
      {
        itemImageSrc: "/img/projects/localxr/plumbing-services.webp",
        alt: "LocalXR - Plumbing Services Page",
      },
      {
        itemImageSrc: "/img/projects/localxr/blog.webp",
        alt: "LocalXR - Blog Section",
      },
    ],
    video: "",
    perspective: {
      executive: "Engineered for high-volume lead generation. It solves the complexity of managing thousands of local service routes while maintaining lightning-fast performance and SEO dominance. Built to scale from a single city to a national platform with minimal operational overhead.",
      technical: "Built with Next.js 15 and React 19, utilizing Server-Side Rendering (SSR) for maximum SEO efficiency. Implements a hierarchical routing system for thousands of dynamic paths, optimized with incremental static regeneration (ISR) and advanced image processing for Core Web Vitals excellence."
    },
    details: "./details/localxr.md",
  },
  {
    name: "Contact Form Plugin",
    seoTitle: "Free Contact Form Plugin with Notion",
    seoDescription: "Embed a secure contact form on any website with one script tag. Submissions auto-save to Notion, with CAPTCHA, rate limiting, and sanitization built in.",
    category: "Ready-made Apps",
    description:
      "A lightweight, embeddable contact form widget that can be integrated into any website and automatically forwards submissions to a Notion database. Generator-based architecture allowing multiple form configurations with various field combinations - completely free and easy to customize.",
    software: "Widget",
    org: "Stack Lab",
    year: "2025",
    domain: "Contact Forms & Lead Capture",
    schema: "https://schema.org/WebApplication",
    link: "https://contact-form-app.stackseekers.com/",
    price: "20",
    currency: "USD",
    contact: `mailto:${SUPPORT_EMAIL}?subject=Contact Form Plugin Inquiry`,
    stack: [
      "javascript",
      "notion/black/white",
      "html5",
      "css",
      "netlify",
      "json/black/white",
      "github/black/white",
    ],
    otherSkills: [
      "Serverless Functions",
      "Widget Development",
      "Embeddable Components",
      "CAPTCHA Integration",
      "Rate Limiting",
      "Input Sanitization",
    ],
    features: [
      {
        text: "Generator-Based Architecture: Create unlimited form configurations with dynamic field combinations without code changes",
      },
      {
        text: "Automatic Notion Integration: Form submissions instantly saved to your Notion database with structured properties",
      },
      {
        text: "Security-First Design: Built-in rate limiting (5 req/min), CAPTCHA verification, input sanitization, and XSS protection",
      },
      {
        text: "Easy Integration: Copy-paste one script tag to embed into any website - works across all platforms and frameworks",
      },
      {
        text: "Flexible Field Types: Support for text, email, phone, website, select dropdowns, textarea, and checkbox fields",
      },
      {
        text: "Customizable Styling: Full theme control with custom colors, fonts, border radius, and responsive max-width",
      },
      {
        text: "Client & Server Validation: Comprehensive validation on both frontend and backend for data integrity",
      },
      {
        text: "Privacy Protected: Rate limiting prevents spam while CAPTCHA blocks automated bot submissions",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/contact-form-plugin/contact-form-widget-cover.webp",
        alt: "Contact Form Plugin - Embeddable Contact Form",
      },
      {
        itemImageSrc: "/img/projects/contact-form-plugin/business-contact-form-widget-cover.webp",
        alt: "Contact Form Plugin - Business Contact Form",
      },
      {
        itemImageSrc: "/img/projects/contact-form-plugin/simple-contact-form-widget.webp",
        alt: "Contact Form Plugin - Simple Contact Form",
      },
      {
        itemImageSrc: "/img/projects/contact-form-plugin/live-demo-contact-form-widget.webp",
        alt: "Contact Form Plugin - Live Demo",
      },
    ],
    video: "",
    details: "./details/contact-form-plugin.md",
  },
  {
    name: "AI-Powered Influencer Platform - Vibe3",
    seoTitle: "AI Influencer Platform | Vibe3 PWA",
    seoDescription: "An AI-powered influencer marketing platform connecting creators with premium brands. React-based PWA with intelligent matching and Web3 integration.",
    category: "AI",
    description:
      "A cutting-edge AI-powered influencer marketing platform built with modern frontend technologies. Features a sophisticated React-based user interface that connects content creators with premium brands through intelligent matching algorithms. Built as a Progressive Web App (PWA) with Web3 integration, delivering seamless user experience across all devices.",
    software: "Progressive Web App",
    org: "VibeSquad",
    year: "2025",
    domain: "Web3 & Influencer Marketing",
    schema: "https://schema.org/WebApplication",
    link: "https://vibe3.vibesquad.co",
    contact: `mailto:${SUPPORT_EMAIL}?subject=Vibe3 Platform Inquiry`,
    stack: [
      "nextdotjs/black/white",
      "react",
      "typescript",
      "tailwindcss",
      "pwa",
      "nodedotjs",
      "mongodb",
      "github/black/white",
      "solana",
      "ton",
    ],
    otherSkills: [
      "React Component Architecture",
      "Responsive Design Excellence",
      "Modern UI/UX Design",
      "PWA Development",
      "Web3 Frontend Integration",
      "Interactive Dashboards",
      "Mobile-First Design",
      "Performance Optimization",
    ],
    features: [
      {
        text: "Responsive Design Excellence: Built with mobile-first approach using Tailwind CSS v4 with adaptive layouts, custom glass-morphism effects, and cyber-themed animations for premium UX",
      },
      {
        text: "Modern UI/UX Design: Cyberpunk-inspired design system with neon accents, custom gradient animations, floating elements, glass-effect components with backdrop blur, and responsive grid layouts",
      },
      {
        text: "AI-Powered Matching System: Intelligent brand-influencer matching algorithm analyzing audience engagement patterns and content style with compatibility scoring system showing 94% match rates",
      },
      {
        text: "Progressive Web App (PWA): Full PWA implementation with service workers, install prompts for mobile and desktop, offline capabilities, and custom manifest with shortcuts to Dashboard and Campaigns",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/vibesquade/vibe3-platform-overview.webp",
        alt: "Vibe3 Modern React-Based User Interface",
      },
      {
        itemImageSrc: "/img/projects/vibesquade/creator-dashboard.webp",
        alt: "Vibe3 Interactive Creator Dashboard with Real-time Analytics",
      },
      {
        itemImageSrc: "/img/projects/vibesquade/campaign-management.webp",
        alt: "Vibe3 Campaign Management Interface with Drag-and-Drop Features",
      },
      {
        itemImageSrc: "/img/projects/vibesquade/web3-payments.webp",
        alt: "Vibe3 Web3 Wallet Integration UI Components",
      },
      {
        itemImageSrc: "/img/projects/vibesquade/ai-matching.webp",
        alt: "Vibe3 AI-Powered Creator Matching Interface",
      },
      {
        itemImageSrc: "/img/projects/vibesquade/pwa-mobile.webp",
        alt: "Vibe3 PWA Mobile User Experience",
      },
      {
        itemImageSrc: "/img/projects/vibesquade/user-profile-management.webp",
        alt: "Vibe3 User Profile Management Interface",
      },
      {
        itemImageSrc: "/img/projects/vibesquade/earnings-calculator.webp",
        alt: "Vibe3 Earnings Calculator Interface",
      },
    ],
    video: "",
    perspective: {
      executive: "A Web3-ready marketing engine that bridges the gap between premium brands and content creators. It utilizes AI to ensure high-match accuracy, reducing campaign waste and increasing engagement ROI in the influencer space.",
      technical: "A sophisticated PWA implementation using Next.js and Tailwind CSS v4. Features a complex state management system for real-time analytics and Web3 wallet integration (Solana/TON). Utilizes glass-morphism effects and hardware-accelerated animations for a high-end feel."
    },
    details: "./details/vibesquade.md",
  },
  {
    name: "Dynamic CRUD App Free",
    seoTitle: "Free CRUD App: Notion to Web App",
    seoDescription: "Transform your Notion database into a professional, responsive web app in minutes — free and no-code. Auto-generated forms, search, multi-language support.",
    category: "Ready-made Apps",
    description:
      "Transform your Notion database into a professional web application in minutes. Automatically reads your Notion structure and creates beautiful, responsive interfaces with intelligent forms, search, and multi-language support - completely free and no-code required.",
    software: "Web Application",
    org: "Stack Lab",
    year: "2025",
    domain: "Database Management & No-Code",
    schema: "https://schema.org/WebApplication",
    link: "https://notion-crud.netlify.app/",
    price: "20",
    currency: "USD",
    contact: `mailto:${SUPPORT_EMAIL}?subject=Notion CRUD App Inquiry`,
    stack: [
      "javascript",
      "vuedotjs",
      "notion/black/white",
      "html5",
      "css",
      "json/black/white",
      "netlify",
      "github/black/white",
    ],
    otherSkills: [
      "No-Code Development",
      "Database Integration",
      "Dynamic Form Generation",
      "Multi-language Support",
      "Responsive Design",
    ],
    features: [
      {
        text: "Intelligent Schema Detection: Automatically reads and adapts to your Notion database structure in real-time",
      },
      {
        text: "Dynamic Form Generation: Creates perfect forms based on field types - text, email, phone, dates, dropdowns, checkboxes",
      },
      {
        text: "Professional Interface: Clean, modern design with card and table views that work on any device",
      },
      {
        text: "Smart Search & Filtering: Intelligent search across all field types with automatic filter toggles for yes/no fields",
      },
      {
        text: "Enterprise Safety: Confirmation dialogs for deletions, pre-loaded edit forms, and validation to prevent data loss",
      },
      {
        text: "Multi-language Support: Works in any language with automatic currency formatting (USD, EUR, JPY, etc.)",
      },
      {
        text: "Privacy Controls: Mark fields as '(Private)' in Notion to automatically mask sensitive information",
      },
      {
        text: "Real-time Updates: Interface automatically updates when you modify your Notion database structure",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/notion-crud-app/Notion-crud-app-free.webp",
        alt: "Dynamic Form Generation from Notion Database",
      },
      {
        itemImageSrc: "/img/projects/notion-crud-app/CRUD-app-free.webp",
        alt: "CRUD App Free Interface",
      },
      {
        itemImageSrc: "/img/projects/notion-crud-app/edit-talent-pool.webp",
        alt: "Edit Talent Pool Interface",
      },
      {
        itemImageSrc: "/img/projects/notion-crud-app/home-page.webp",
        alt: "Dynamic CRUD App Home Page",
      },
    ],
    video: "",
    details: "./details/notion-crud.md",
  },
  {
    name: "AI Voice Generator",
    seoTitle: "AI Voice Generator for Google Docs",
    seoDescription: "Turn Google Docs into natural-sounding AI audio with Gemini TTS. Free text-to-speech with 25+ professional voices and real-time preview.",
    category: "Ready-made Apps",
    details: "./details/ai-narrator.md",
    description:
      "Transform your Google Docs into high-quality audio with this free AI voice generator and text to audio converter. Powered by Gemini TTS, it offers natural-sounding speech generation for YouTubers, teachers, and creators. Experience the best free text to speech AI directly in your documents.",
    software: "Google Docs Add-on",
    org: "Stack Lab",
    year: "2025",
    domain: "AI & Content Creation",
    schema: "https://schema.org/WebApplication",
    link: "https://ainarrator.stackseekers.com/",
    workspace: "https://workspace.google.com/marketplace/app/ai_narrator_ai_voice_generator/70473820113?utm_source=ainarrator&utm_medium=website&utm_campaign=free_version&utm_content=get_free_addon",
    price: "0",
    currency: "USD",
    contact: `mailto:${SUPPORT_EMAIL}?subject=AI Narrator Inquiry`,
    stack: [
      "javascript",
      "googleappsscript",
      "googledocs",
      "googledrive",
      "html5",
      "css",
      "json/black/white",
    ],
    otherSkills: [
      "AI Integration",
      "Document Processing",
      "API Development",
      "Gemini Speech Generation",
      "Text to Audio Converter",
      "gemini-tts",
      "text-to-speech",
      "free-ai-voice",
    ],
    features: [
      {
        text: "Gemini Speech Generation: Leverage advanced Gemini TTS for ultra-realistic, natural-sounding voiceovers completely free.",
      },
      {
        text: "Free Text to Speech AI: Convert unlimited text to audio without subscription fees using your own API key.",
      },
      {
        text: "Smart Document Analysis: AI-powered review of document structure, word choice, and engagement factors.",
      },
      {
        text: "25+ Professional AI Voices: Choose from diverse voice options including 'Gemini Speech' styles for any content type.",
      },
      {
        text: "Real-time Voice Preview: Test selected text with instant browser playback before full generation.",
      },
      {
        text: "Custom Voice Instructions: Add pronunciation guides and tone settings for brand names and proper nouns.",
      },
      {
        text: "Multi-language Support: Generate audio in different languages for global content reach.",
      },
      {
        text: "Smart Text Processing: Automatically converts bullets, tables, and complex formatting into natural speech.",
      },
      {
        text: "Flexible Audio Generation: Create full document audio or regenerate specific sections as needed",
      },
      {
        text: "Seamless Integration: Works directly within Google Docs with a clean, modern sidebar interface",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/ai-narrator/Google-docs-text-to-speech-ai-voice-ai-audio.webp",
        alt: "AI Narrator Google Docs Add-on Interface",
      },
      {
        itemImageSrc: "/img/projects/ai-narrator/app-screenshot.webp",
        alt: "AI Narrator Application Screenshot",
      },
    ],
    video: "",
    perspective: {
      executive: "Strategic content automation that turns static documents into professional audio assets. It allows marketing and education teams to scale their content reach across platforms without the cost of professional voice actors.",
      technical: "Leverages Google Apps Script for deep integration with Google Workspace. It interfaces with the Gemini TTS API, handling complex text truncation and chunking to ensure stability with large documents. Includes a custom-built sidebar UI with real-time audio playback control."
    }
  },
  {
    name: "Service Request System",
    seoTitle: "Service Request System with Notion",
    seoDescription: "Build a complete customer service request system with Notion and Netlify. Automated email notifications and file uploads — free, no coding required.",
    category: "Ready-made Apps",
    details: "./details/service-request.md",
    description:
      "Build a complete customer service request management system using Notion database and Netlify functions. Features automated email notifications, file uploads, real-time sync, and professional web forms - all completely free with no coding required.",
    software: "Web",
    org: "Stack Seekers",
    year: "2025",
    domain: "Service Request",
    schema: "https://schema.org/WebApplication",
    link: "https://notion-p.netlify.app/",
    price: "20",
    currency: "USD",
    contact: `mailto:${SUPPORT_EMAIL}?subject=Inquiry : `,
    stack: [
      "nodedotjs",
      "json/black/white",
      "tailwindcss",
      "axios",
      "npm",
      "netlify",
      "notion",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    otherSkills: [
      "Accessibility",
      "Performance Optimization",
      "Responsive Design",
      "API Integration",
    ],
    features: [
      {
        text: "Real-time Notion Database Sync: Form submissions instantly appear as structured database entries",
      },
      {
        text: "Automated Email Notifications: Smart status-based email system with professional HTML templates",
      },
      {
        text: "Drag-and-Drop File Uploads: Images automatically stored in Notion with thumbnail previews",
      },
      {
        text: "Dynamic Issue Type Loading: Dropdown options update automatically from your Notion database",
      },
      {
        text: "Complete Workflow Management: Multiple views for status tracking, employee assignment, and priority management",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/home/projects/notion_service_request.webp",
        alt: "Service Request System - Cover page",
      },
      {
        itemImageSrc:
          "/img/projects/service-request/customer_service_form.webp",
        alt: "Customer service form interface",
      },
      {
        itemImageSrc: "/img/projects/service-request/chart_by_issue_type.webp",
        alt: "Chart showing issues by type",
      },
      {
        itemImageSrc: "/img/projects/service-request/service_by_status.webp",
        alt: "Service requests by status",
      },
      {
        itemImageSrc: "/img/projects/service-request/service_by_priority.webp",
        alt: "Service requests by priority",
      },
      {
        itemImageSrc:
          "/img/projects/service-request/email_notification_notion.webp",
        alt: "Email notification in Notion",
      },
    ],
    video: "",
    perspective: {
      executive: "Automates customer service workflows by bridging professional web forms with Notion. It provides a zero-cost alternative to expensive ticketing systems while maintaining professional notification standards and data integrity.",
      technical: "Utilizes Netlify Functions (Serverless) as an intermediary to handle secure Notion API calls. Implements a sophisticated email templating engine and automated file processing pipeline for attachments, ensuring a seamless data flow from web to internal database."
    }
  },
  {
    name: "Appliance Repair Service Platform",
    seoTitle: "Appliance Repair Platform & Troubleshooting",
    seoDescription: "A content-driven platform connecting users with local appliance repair professionals, backed by free troubleshooting guides for major home appliances.",
    category: "Startup MVPs",
    details: "./details/appliance-repair.md",
    description:
      "A modern, content-driven platform for connecting users with local appliance repair professionals and providing troubleshooting guides for major home appliances",
    software: "Web",
    org: "ApplianceRepairly",
    year: "2025",
    domain: "Digital Marketing",
    schema: "https://schema.org/WebApplication",
    link: "https://appliancerepairly.com",
    contact: `mailto:${SUPPORT_EMAIL}?subject=Inquiry : `,
    stack: [
      "nextdotjs/black/white",
      "react",
      "nodedotjs",
      "json/black/white",
      "tailwindcss",
      "axios",
      "npm",
      "pm2",
      "digitalocean",
      "lighthouse",
      "bitbucket",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    otherSkills: [
      "SEO",
      "Content Management",
      "Accessibility",
      "Performance Optimization",
      "Responsive Design",
      "API Integration",
    ],
    features: [
      {
        text: "Dynamic Appliance Support: Browse and get help for refrigerators, washers, dryers, dishwashers, ovens, microwaves, cooktops, and more.",
      },
      {
        text: "Find Local Providers: Enter your ZIP code or select your state to view local repair listings.",
      },
      {
        text: "Problem & Troubleshooting Guides: Step-by-step guides for common appliance issues, including DIY tips and when to call a pro.",
      },
      {
        text: "SEO Optimized: Each page includes dynamic SEO metadata for better search engine visibility.",
      },
      {
        text: "Reusable UI Components: Modular React components for listings, CTAs, features, and more.",
      },
      {
        text: "Content Management: All appliance, problem, and troubleshooting content is managed centrally in JSON for easy updates.",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/home/projects/appliance_repair_cover.webp",
        alt: "Appliance Repair Service Platform - Cover page",
      },
      {
        itemImageSrc: "/img/projects/appliance-repair/home.webp",
        alt: "Appliance Repair Service Platform - Home page",
      },
      {
        itemImageSrc: "/img/projects/appliance-repair/performance-desktop.webp",
        alt: "Appliance Repair Service Platform - Desktop performance metrics",
      },
      {
        itemImageSrc: "/img/projects/appliance-repair/performance-mobile.webp",
        alt: "Appliance Repair Service Platform - Mobile performance metrics",
      },
      {
        itemImageSrc: "/img/projects/appliance-repair/services.webp",
        alt: "Appliance Repair Service Platform - Services page",
      },
      {
        itemImageSrc: "/img/projects/appliance-repair/find-repair.webp",
        alt: "Appliance Repair Service Platform - Find repair services",
      },
      {
        itemImageSrc: "/img/projects/appliance-repair/contact.webp",
        alt: "Appliance Repair Service Platform - Contact page",
      },
      {
        itemImageSrc:
          "/img/projects/appliance-repair/refrigerator-troubleshoot.webp",
        alt: "Appliance Repair Service Platform - Refrigerator troubleshooting guide",
      },
      {
        itemImageSrc:
          "/img/projects/appliance-repair/refrigerator-problem.webp",
        alt: "Appliance Repair Service Platform - Refrigerator problem identification",
      },
      {
        itemImageSrc: "/img/projects/appliance-repair/refrigerator.webp",
        alt: "Appliance Repair Service Platform - Refrigerator home page",
      },
      {
        itemImageSrc: "/img/projects/appliance-repair/blog-post.webp",
        alt: "Appliance Repair Service Platform - Blog post",
      },
      {
        itemImageSrc: "/img/projects/appliance-repair/blog.webp",
        alt: "Appliance Repair Service Platform - Blog section",
      },
    ],
    video: ""
  },
  {
    name: "SR-22 Insurance Now",
    seoTitle: "Cheap SR-22 Insurance: Compare & Save",
    seoDescription: "Need a cheap SR-22 insurance? Compare and save on SR22 coverage from top providers — instant quotes, state-by-state requirements, and hassle-free filing.",
    category: "Startup MVPs",
    details: "./details/sr22.md",
    description:
      "Need a Cheap SR-22 Insurance? Compare & save on SR22 Insurance from top providers.",
    software: "Web",
    org: "Sr22InsuranceNow",
    year: "2025",
    domain: "Digital Marketing",
    schema: "https://schema.org/BusinessApplication",
    link: "https://sr22insurancenow.com/",
    contact: `mailto:${SUPPORT_EMAIL}?subject=Inquiry : `,
    features: [
      {
        text: "Campaign owners need fast, dynamic, and conversion-focused websites to maximize ROI from ad campaigns.",
      },
      {
        text: "Dynamic Landing Pages: Generated from a flexible JSON structure for quick deployment.",
      },
      {
        text: "Click-to-Call Ads: Location-based phone numbers to boost conversions.",
      },
      {
        text: "Auto-Complete Google Place API: Enhances user experience and reduces friction.",
      },
      {
        text: "Image Optimization: Ensures lightning-fast load speeds.",
      },
      {
        text: "Google Analytics Integration: Tracks performance for data-driven decisions.",
      },
      {
        text: "Custom Components: Built from scratch for full flexibility and scalability.",
      },
      {
        text: "Mobile Optimization & Accessibility: Ensures seamless experiences for all users.",
      },
      {
        text: "Dynamic Content: JSON-driven landing pages tailored for campaigns.",
      },
      {
        text: "Performance Optimization: WebP images and lazy loading for faster pages.",
      },
      {
        text: "SEO & Analytics: Designed to convert traffic into leads while tracking every interaction.",
      },
    ],
    stack: [
      "nextdotjs/black/white",
      "React",
      "Nodedotjs",
      "JSON/black/white",
      "Axios/black/white",
      "npm",
      "pm2/black/white",
      "digitalocean",
      "lighthouse",
      "bitbucket",
    ],
    otherSkills: ["SEO"],
    images: [
      {
        itemImageSrc: "/img/home/projects/sr22.webp",
        alt: "SR-22 insurance Now",
      },
      {
        itemImageSrc: "/img/projects/sr22/desktop_web_performance.webp",
        alt: "SR-22 Insurance Now - Desktop web performance metrics",
      },
      {
        itemImageSrc: "/img/projects/sr22/mobile_web_performance.webp",
        alt: "SR-22 Insurance Now - Mobile web performance metrics",
      },
      {
        itemImageSrc: "/img/projects/sr22/why_need_sr22.webp",
        alt: "SR-22 Insurance Now - Why you need SR-22 insurance",
      },
      {
        itemImageSrc: "/img/projects/sr22/how_to_get_sr22.webp",
        alt: "SR-22 Insurance Now - How to get SR-22 insurance",
      },
      {
        itemImageSrc: "/img/projects/sr22/landing_page.webp",
        alt: "SR-22 Insurance Now - Landing page",
      },
      {
        itemImageSrc: "/img/projects/sr22/states_map.webp",
        alt: "SR-22 Insurance Now - States map",
      },
      {
        itemImageSrc: "/img/projects/sr22/sr22_city.webp",
        alt: "SR-22 Insurance Now - City list",
      },
      {
        itemImageSrc: "/img/projects/sr22/auto_complete_zip_code.webp",
        alt: "SR-22 Insurance Now - Auto-complete zip code functionality",
      },
      {
        itemImageSrc: "/img/projects/sr22/render_json.webp",
        alt: "SR-22 Insurance Now - JSON reader functionality",
      },
    ],
    video: "",
    perspective: {
      executive: "A low-friction insurance lead engine designed for maximum conversion. It simplifies complex insurance compliance (SR-22) into a user-friendly experience, driving high-quality calls and form submissions for insurance providers.",
      technical: "A high-performance landing page engine driven by JSON configurations. Features advanced Google Places API integration for address autocomplete and location-based dynamic content injection, optimized for sub-second load times on mobile devices."
    }
  },
  {
    name: "Momentum Incident Management",
    seoTitle: "Incident Management Software",
    seoDescription: "A structured process for identifying, analyzing, and resolving incidents that disrupt your operations — with clear workflows and post-incident review.",
    category: "Enterprise",
    details: "./details/momentum.md",
    description:
      "A structured process for identifying, analyzing, and resolving incidents that disrupt an organization's operations",
    software: "Web",
    org: "Momentum",
    year: "2025",
    domain: "IT Service",
    schema: "https://schema.org/BusinessApplication",
    link: "https://momentum-chi-brown.vercel.app/",
    contact:
      "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20",
    stack: [
      "vuedotjs",
      "PrimeVue",
      "vite/black/white",
      "tailwindcss",
      "nodedotjs",
      "express/black/white",
      "pnpm",
      "swagger",
      "mongodb",
      "vercel/black/white",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    otherSkills: ["Pinia", "vee-validate"],
    features: [
      {
        text: "No More Clunky UI – Nested tables & column-based filtering (text, date, select) make incident tracking effortless.",
      },
      {
        text: "Nested CRUD for Incidents & Tasks – Create, update, and manage tasks seamlessly, with an option to add notes.",
      },
      {
        text: "Choose & Create CIs – Define and manage configuration items with ease.",
      },
      {
        text: "Automate with Swagger APIs – Ready for CI/CD pipelines, making integrations a breeze.",
      },
      {
        text: "Seamless Deployment – Frontend & backend deployed on Vercel for high performance.",
      },
      {
        text: "MongoDB Seeding – Easily set up initial data for a smooth start.",
      },
      {
        text: "Swagger Documentation – <a href='https://momentum-chi-brown.vercel.app/api-docs' target='_blank'>Well-documented APIs</a> for easy collaboration and scaling.",
      },
      {
        text: "No Costly Subscriptions – A powerful alternative to expensive service management platforms",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/home/projects/momentum_incident_management.webp",
        alt: "Incident Management",
      },
      {
        itemImageSrc: "/img/projects/momentum/swagger.webp",
        alt: "Momentum Incident Management - Swagger API documentation",
      },
      {
        itemImageSrc: "/img/projects/momentum/expanded_incident.webp",
        alt: "Momentum Incident Management - Expanded incident view",
      },
      {
        itemImageSrc: "/img/projects/momentum/sorting_searching.webp",
        alt: "Momentum Incident Management - Sorting and searching functionality",
      },
      {
        itemImageSrc: "/img/projects/momentum/download_incidents.webp",
        alt: "Momentum Incident Management - Download incidents feature",
      },
      {
        itemImageSrc: "/img/projects/momentum/incident_notes_task.webp",
        alt: "Momentum Incident Management - Incident notes and task management",
      },
      {
        itemImageSrc: "/img/projects/momentum/edit_notes.webp",
        alt: "Momentum Incident Management - Edit notes functionality",
      },
      {
        itemImageSrc: "/img/projects/momentum/view_notes.webp",
        alt: "Momentum Incident Management - View notes interface",
      },
      {
        itemImageSrc: "/img/projects/momentum/edit_task.webp",
        alt: "Momentum Incident Management - Edit task functionality",
      },
      {
        itemImageSrc: "/img/projects/momentum/edit_incident.webp",
        alt: "Momentum Incident Management - Edit incident interface",
      },
      {
        itemImageSrc: "/img/projects/momentum/login.webp",
        alt: "Momentum Incident Management - Login page",
      },
      {
        itemImageSrc: "/img/projects/momentum/register.webp",
        alt: "Momentum Incident Management - Registration page",
      },
    ],
    video: ""
  },
  {
    name: "Marketplace Booking Platform",
    seoTitle: "Marketplace Booking Platform: Reservations & Payments",
    seoDescription: "A multi-sided booking marketplace with search, listing management, reservations, and payments — adaptable to any inventory-led domain.",
    category: "SaaS",
    description:
      "A multi-sided booking marketplace with search, listing management, reservations, and payments that can be adapted to other inventory-led domains.",
    software: "Web",
    org: "Confidential Client",
    year: "2024",
    domain: "Marketplace SaaS",
    schema: "https://schema.org/DeveloperApplication",
    link: "",
    contact:
      "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20",
    stack: [
      "Javascript",
      "Vuedotjs",
      "vite",
      "Axios",
      "Express/black/white",
      "jsonwebtokens/black/white",
      "stripe",
      "nodedotjs",
      "MongoDB",
      "Git",
      "github/black/white",
      "Eslint",
      "Prettier",
    ],
    otherSkills: ["Pinia", "API integration"],
    images: [
    ],
    features: [
      { text: "Secure user registration, login, and logout functionality." },
      {
        text: "Role-based access for general users, property owners, and admins.",
      },
      { text: "Search inventory by type, geography, availability, and time." },
      {
        text: "Advanced filters to refine search results based on user preferences.",
      },
      {
        text: "Detailed listing pages with full image galleries and inventory information.",
      },
      {
        text: "Booking request system with date, time, and duration selection.",
      },
      {
        text: "Free cancellation within 24 hours with redirection to the inventory catalog.",
      },
      {
        text: "Seamless and secure payment processing via Stripe for confirmed bookings.",
      },
      {
        text: "Email notifications for booking and payment confirmations (users & owners).",
      },
      { text: "Providers can publish new listings with images and details." },
      { text: "Admin verification process for new listing submissions." },
      {
        text: "Responsive, mobile-friendly interface for seamless access across devices.",
      },
      {
        text: "Integrated APIs for authentication, listing management, booking, search, and payments.",
      },
      {
        text: "Scalable backend architecture to support future growth and features.",
      },
      {
        text: "Reusable marketplace architecture that can be replicated in another domain with different inventory, filters, and booking logic.",
      },
    ],
    video: "",
    details: "./details/fts.md",
  },
  {
    name: "IBRebuild for ABN AMRO BANK N.V.",
    seoTitle: "IBRebuild: ABN AMRO Banking Migration",
    seoDescription: "ABN AMRO's internet banking application rebuilt from AngularJS to Vue.js on Microsoft Azure — a zero-downtime modernization of a mission-critical platform.",
    category: "Enterprise",
    description:
      "ABN AMRO Bank N.V. is a Dutch bank with headquarters in Amsterdam. The internet banking (IB) application for the bank customers which is migrating from old Angular JS to Vue.js integrated with Microsoft Azure cloud services as IBRebuild.",
    software: "Web",
    org: "ABN Amro",
    year: "2022",
    domain: "Banking",
    schema: "https://schema.org/DeveloperApplication",
    link: "https://www.abnamro.nl/en/personal/index.html",
    stack: [
      "Javascript",
      "Angular/black/white",
      "Vuedotjs",
      "Axios",
      "webpack",
      "lit",
      "bitbucket",
      "npm",
      "nodedotjs",
      "Git",
      "Eslint",
      "Prettier",
    ],
    otherSkills: ["Pinia", "API integration"],
    images: [
      {
        itemImageSrc: "/img/home/projects/ABN_Amro.webp",
        alt: "IBRebuild for ABN AMRO BANK N.V. - Cover page",
      },
    ],
  },
  {
    name: "Emerald Design System",
    seoTitle: "Emerald Design System | ABN AMRO",
    seoDescription: "A tokens-first, component-driven design system built on Lit Web Components for ABN AMRO — consistent, bank-grade UX with faster time-to-market.",
    category: "Enterprise",
    description:
      "Our innovative digital strategy emphasizes efficiency through a 'build once, deploy multiple times' approach. Utilizing the Emerald design system, we ensure a consistent and seamless user experience across platforms. Significant investments in this system, coupled with an expanded team, have enhanced productivity and scalability, delivering cohesive digital solutions for optimal user engagement.",
    software: "Web",
    org: "ABN Amro",
    year: "2022",
    domain: "Banking",
    schema: "https://schema.org/SoftwareApplication",
    link: "https://www.abnamro.com/en/home",
    contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20building%20a%20modern%20Design%20System",
    details: "./details/emerald-design-system.md",
    perspective: {
      executive: "A strategic investment in design consistency and development velocity. The Emerald Design System provides a unified language for ABN AMRO's digital ecosystem, significantly reducing time-to-market for new features while ensuring a seamless, banking-grade user experience across all platforms. It represents a shift from bespoke development to a scalable, component-driven digital strategy.",
      technical: "Built using Lit (Web Components) for maximum interoperability and performance. The system utilizes a tokens-first approach to manage theming and visual variables, integrated with a robust Storybook documentation suite. The architecture emphasizes modularity and tree-shaking, ensuring that enterprise applications remain lightweight and fast while consuming complex design patterns."
    },
    stack: [
      "JavaScript",
      "Lit",
      "Axios",
      "Webpack",
      "Bitbucket",
      "npm",
      "Node.js",
      "Git",
      "ESLint",
      "Prettier",
      "storybook",
      "markdown/black/white",
      "vitepress",
    ],
    features: [
      { text: "Responsive Design: Seamless experience across devices." },
      {
        text: "Component-Based Architecture: Efficient and scalable codebase.",
      },
      { text: "Modern UI/UX: Clean aesthetics with intuitive navigation." },
      {
        text: "API Integration: Robust connectivity with external services using Axios.",
      },
      {
        text: "Modular Development: Leverages Webpack for optimized, modular builds.",
      },
      {
        text: "Code Quality Assurance: Enforced by ESLint and Prettier for consistent, error-free code.",
      },
      {
        text: "Version Control: Streamlined collaboration via Git and Bitbucket.",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/home/projects/ABN_Amro_design_system.webp",
        alt: "Cover screen for Emerald Design System project page",
      },
      {
        itemImageSrc: "/img/projects/abn/emerald_home.webp",
        alt: "Emerald Design System Home Page",
      },
      {
        itemImageSrc: "/img/projects/abn/emerald_storybook.webp",
        alt: "Emerald Design System Storybook",
      },
    ],
    relatedCaseStudy: {
      title: "See it in Action: ABN AMRO Corporate Rebuild",
      description: "Discover how the Emerald Design System was deployed to modernize ABN AMRO's primary web portal, driving massive performance and UX gains.",
      link: "/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/",
      buttonText: "Read the Rebuild Case Study"
    }
  },
  {
    name: "Tech Create",
    seoTitle: "Tech Create: Digital Solutions Landing Page",
    seoDescription: "A high-converting landing page for digital solutions and innovative software development — built with Vue.js, PrimeVue, and deployed on Vercel.",
    category: "Startup MVPs",
    details: "./details/tech-create.md",
    description:
      "A landing page for digital solutions through innovative software development.",
    software: "Web",
    org: "LV",
    year: "2025",
    domain: "IT Service",
    schema: "https://schema.org/BusinessApplication",
    link: "https://techcreate.vercel.app/",
    contact:
      "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%",
    stack: [
      "Vuedotjs",
      "PrimeVue",
      "CSS3",
      "vercel/black/white",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    features: [
      { text: "Responsive Design: Seamless experience across devices." },
      {
        text: "Component-Based Architecture: Efficient and scalable codebase.",
      },
      { text: "Modern UI/UX: Clean aesthetics with intuitive navigation" },
    ],
    images: [
      {
        itemImageSrc: "/img/home/projects/tech_create.webp",
        alt: "Tech Create - Landing page",
      },
    ],
    video: ""
  },
  {
    name: "Yit Plus",
    seoTitle: "YIT Plus: Monitor Home & Apartment Data",
    seoDescription: "YIT Plus is a modern digital service for monitoring data about your home and apartment association — energy, maintenance, and updates in one place.",
    category: "Enterprise",
    description:
      "YIT Plus is a modern digital service helping you to monitor data related to your home and apartment association.",
    software: "Web",
    org: "YIT",
    year: "2025",
    domain: "Housing company",
    schema: "https://schema.org/DeveloperApplication",
    link: "https://plus.yitgroup.com/",
    stack: [
      "Javascript",
      "Vuedotjs",
      "Axios",
      "Express/black/white",
      "nodedotjs",
      "MongoDB",
      "mysql",
      "Git",
      "mailgun",
      "kentico",
      "amazonec2",
      "Eslint",
      "Prettier",
    ],
    otherSkills: ["Pinia", "API integration", "tinymce"],
    images: [
      {
        itemImageSrc: "/img/home/projects/YIT_plus.webp",
        alt: "YIT Plus - Login page",
      },
      {
        itemImageSrc: "/img/projects/yitplus/login.webp",
        alt: "YIT Plus - Login page",
      },
      {
        itemImageSrc: "/img/projects/yitplus/home.webp",
        alt: "YIT Plus - Home page",
      },
      {
        itemImageSrc: "/img/projects/yitplus/discussion_board.webp",
        alt: "YIT Plus - Discussion board",
      },
      {
        itemImageSrc: "/img/projects/yitplus/document.webp",
        alt: "YIT Plus - Document management page",
      },
      {
        itemImageSrc: "/img/projects/yitplus/one_year_warranty.webp",
        alt: "YIT Plus - One year warranty page",
      },
      {
        itemImageSrc: "/img/projects/yitplus/service_lounge.webp",
        alt: "YIT Plus - Service lounge page",
      },
      {
        itemImageSrc: "/img/projects/yitplus/service_request.webp",
        alt: "YIT Plus - Service request category",
      },
      {
        itemImageSrc: "/img/projects/yitplus/service_request_category.webp",
        alt: "YIT Plus - Service request category management",
      },
      {
        itemImageSrc: "/img/projects/yitplus/admin.webp",
        alt: "YIT Plus - Admin dashboard",
      },
    ],
  },
  {
    name: "Qatar Airways widget",
    seoTitle: "Qatar Airways Flight Booking Widget",
    seoDescription: "Book flights to destinations worldwide with Qatar Airways — special fares, Avios collection, and award-winning service in a seamless booking widget.",
    category: "Enterprise",
    details: "./details/qa.md",
    description:
      "Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more.",
    software: "Web",
    org: "TUI",
    year: "2021",
    domain: "Leisure, travel, and tourism",
    schema: "https://schema.org/DeveloperApplication",
    link: "https://holidays.qatarairways.com/en-in/avios",
    stack: [
      "Javascript",
      "Vuedotjs",
      "Vite/black/white",
      "Axios/black/white",
      "Express/black/white",
      "MongoDB",
      "Git",
      "amazonec2",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    otherSkills: ["Landingi", "Pinia", "API integration"],
    features: [
      {
        text: "Widget for Flight Booking",
      },
      {
        text: "Widget for Flight + Hotel Booking",
      },
      {
        text: "Widget for Transfer Booking",
      },
      {
        text: "Use widget with any CMS Platform like Landingi",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/qatar/placeholder.webp",
        alt: "Qatar Airways",
      },
      {
        itemImageSrc: "/img/projects/qatar/qatar-airways.webp",
        alt: "Qatar Airways",
      },
      {
        itemImageSrc: "/img/projects/qatar/thumbnail.webp",
        alt: "Qatar Airways",
      },
      {
        itemImageSrc: "/img/projects/qatar/qatar.webp",
        alt: "Qatar Airways",
      },
    ],
    video: ""
  },
  {
    name: "Recipes",
    seoTitle: "Recipes Platform: Share & Discover Food",
    seoDescription: "A community-driven recipe platform where food lovers share, discover, and cook dishes from around the world. Connect and create with fellow enthusiasts.",
    category: "Startup MVPs",
    description:
      "A community-driven platform where food lovers share, discover, and discuss recipes from around the world. Connect, cook, and create with fellow culinary enthusiasts.",
    software: "Web",
    org: "Momentum",
    year: "2020",
    domain: "Food Blogging",
    schema: "https://schema.org/DeveloperApplication",
    link: "http://recipes-client.s3-website.ap-south-1.amazonaws.com/",
    codeLink: "https://github.com/heartstchr/recipe",
    stack: [
      "Javascript",
      "Vuedotjs",
      "quasar/black/white",
      "Vite",
      "Axios",
      "Express/black/white",
      "MongoDB",
      "Git",
      "amazonec2",
      "Eslint",
      "Prettier",
    ],
    otherSkills: ["Pinia", "API integration"],
    features: [
      {
        text: "Authentication with Incognigo pool",
      },
      {
        text: "Create and Share recipes with friends",
      },
      {
        text: "Search recipes",
      },
      {
        text: "List and share your recipes direction or ingradients",
      },
      {
        text: "Rate and review for recipe",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/home/projects/Recipe.webp",
        alt: "Recipes - Login page",
      },
      {
        itemImageSrc: "/img/projects/recipe/login.webp",
        alt: "Recipes - Login page",
      },
      {
        itemImageSrc: "/img/projects/recipe/register.webp",
        alt: "Recipes - Registration page",
      },
      {
        itemImageSrc: "/img/projects/recipe/home.webp",
        alt: "Recipes - Home page",
      },
      {
        itemImageSrc: "/img/projects/recipe/direction.webp",
        alt: "Recipes - Directions page",
      },
      {
        itemImageSrc: "/img/projects/recipe/ingredients.webp",
        alt: "Recipes - Ingredients page",
      },
      {
        itemImageSrc: "/img/projects/recipe/addrecipe.webp",
        alt: "Recipes - Add Recipe page",
      },
      {
        itemImageSrc: "/img/projects/recipe/search.webp",
        alt: "Recipes - Search page",
      },
      {
        itemImageSrc: "/img/projects/recipe/share.webp",
        alt: "Recipes - Share screen",
      },
    ],
  },
  {
    name: "Frontend of Tv Maze API",
    seoTitle: "TVmaze Frontend: TV Info for Your App",
    seoDescription: "A fast, responsive frontend built on the TVmaze API — add TV show information, schedules, and search to your website or app without a backend.",
    category: "Startup MVPs",
    description: "TVmaze- Add TV information to your website or app.",
    software: "Web",
    org: "Freelance",
    year: "2020",
    domain: "Entertainment",
    schema: "https://schema.org/DeveloperApplication",
    link: "https://heartstchr.github.io/tvmaze/",
    codeLink: "https://github.com/heartstchr/tvshows",
    stack: [
      "Javascript",
      "Vuedotjs",
      "Quasar/black/white",
      "Axios",
      "Git",
      "amazonec2",
      "Eslint",
      "Prettier",
    ],
    otherSkills: ["Vuex", "API integration"],
    features: [
      {
        text: "Popular Tv shows sorted based on rating",
      },
      {
        text: "Tv shows based on genre",
      },
      {
        text: "Search Tv shows",
      },
      {
        text: "Details Tv shows",
      },
      {
        text: "Episodes, cast and crew of a Tv shows",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/home/projects/tvmaze.webp",
        alt: "TVmaze - Home page",
      },
      {
        itemImageSrc: "/img/projects/tvmaze/home.webp",
        alt: "TVmaze - Home page",
      },
      {
        itemImageSrc: "/img/projects/tvmaze/search.webp",
        alt: "TVmaze - Search page",
      },
      {
        itemImageSrc: "/img/projects/tvmaze/episodes.webp",
        alt: "TVmaze - Episodes tab",
      },
      {
        itemImageSrc: "/img/projects/tvmaze/cast.webp",
        alt: "TVmaze - Cast tab",
      },
      {
        itemImageSrc: "/img/projects/tvmaze/genres.webp",
        alt: "TVmaze - Genres",
      },
    ],
  },
  {
    name: "Trokka Attraction",
    seoTitle: "Trokka: Book Attractions & Tours",
    seoDescription: "Book attractions and tours for your next holiday on Trokka — curated experiences, instant confirmation, and mobile-friendly booking.",
    category: "Startup MVPs",
    description: "Book Attractions and Tours for Your Next Holiday",
    software: "Web",
    org: "Catch That Bus",
    year: "2019",
    domain: "Leisure, travel, and tourism",
    schema: "https://schema.org/DeveloperApplication",
    link: "https://m.trokka.com/attraction",
    stack: [
      "Javascript",
      "VuedotJs",
      "Axios/black/white",
      "Express/black/white",
      "MongoDB",
      "Git",
      "amazonEC2",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    otherSkills: ["Vuex", "API integration"],
    features: [
      {
        text: "Show Tours and Attraction of Malaysia",
      },
      {
        text: "Popular activities based on rating and demand",
      },
      {
        text: "Activities and details based on location",
      },
      {
        text: "Book and share attractions with other people",
      },
      {
        text: "Discount system based on promo code",
      },
      {
        text: "Payment system using Boost wallet and other payment methods",
      },
      {
        text: "Custom CMS backend system to add, update, and delete tours and attractions",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/trokka.webp",
        alt: "Trokka.com | Book Attractions and Tours for Your Next Holiday",
      },
    ],
  },
  {
    name: "Catch That Bus",
    seoTitle: "Catch That Bus: Malaysia & Singapore Tickets",
    seoDescription: "Book Malaysia and Singapore bus tickets online with Catch That Bus — instant e-tickets, live schedules, and cross-border routes on web and iOS.",
    category: "Enterprise",
    description: "Book Malaysia and Singapore bus tickets online.",
    software: "Web / IOS APP",
    org: "Catch That Bus",
    year: "2019",
    domain: "Leisure, travel, and tourism",
    schema: "https://schema.org/DeveloperApplication",
    iosLink: "https://apps.apple.com/my/app/catchthatbus/id1025824078",
    stack: [
      "Javascript",
      "VuedotJs",
      "Axios/black/white",
      "Express/black/white",
      "MongoDB",
      "Git",
      "amazonec2",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    otherSkills: ["Vuex", "API integration", "Cordova"],
    features: [
      {
        text: "Search for a bus by choosing from the destination and to the destination in Malaysia for dates.",
      },
      {
        text: "Sort and filter on available buses",
      },
      {
        text: "Seat visualization of a bus",
      },
      {
        text: "Booking system to handle concurrent requests",
      },
      {
        text: "Discount system based on coupon code",
      },
      {
        text: "Insurance integration for travellers",
      },
      {
        text: "Payment system using wallets and cards",
      },
      {
        text: "Webview for Boost wallet",
      },
      {
        text: "Multiple language support",
      },
      {
        text: "Multiple Currency support",
      },
      {
        text: "Bus Booked history",
      },
      {
        text: "Bus onboarding system for admin and bus operator",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/catchthatbus.webp",
        alt: "Book Malaysia and Singapore bus tickets online. | CatchThatBus",
      },
      {
        itemImageSrc:
          "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.webp/230x0w.webp",
        alt: "IOS app for booking Malaysia and Singapore bus tickets online | CatchThatBus",
      },
    ],
  },
  {
    name: "Partner Dashboard Upstox",
    seoTitle: "Upstox Partner Dashboard: Sub-Broker Account",
    seoDescription: "Upstox's partner dashboard for opening a sub-broker account — onboard clients, track commissions, and run your brokerage business from one place.",
    category: "Enterprise",
    description: "Open a sub-broker account with Upstox.",
    software: "Web",
    org: "Upstox",
    year: "2018",
    domain: "FinTech",
    schema: "https://schema.org/BusinessApplication",
    link: "https://upstox.com/sub-broker/",
    stack: [
      "Angular/black/white",
      "MongoDB",
      "mysql",
      "loopback",
      "npm",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    otherSkills: [],
    features: [
      {
        text: "Refer and earn program",
      },
      {
        text: "Track lead referred",
      },
      {
        text: "Ambassador program",
      },
      {
        text: "Royalty program",
      },
      {
        text: "Track customer referred",
      },
      {
        text: "Dashboard to show earnings based on the program",
      },
      {
        text: "Search by name and UCC",
      },
      {
        text: "Earning report based on the customer trade",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/partnerUpstox/partnerUpstox.webp",
        alt: "Partner Dashboard Upstox - Cover page",
      },
      {
        itemImageSrc: "/img/projects/partnerUpstox/dashboard.webp",
        alt: "Partner Dashboard Upstox - Dashboard",
      },
      {
        itemImageSrc: "/img/projects/partnerUpstox/leads.webp",
        alt: "Partner Dashboard Upstox - Leads management",
      },
      {
        itemImageSrc: "/img/projects/partnerUpstox/customer.webp",
        alt: "Partner Dashboard Upstox - Customer management",
      },
      {
        itemImageSrc: "/img/projects/partnerUpstox/earning.webp",
        alt: "Partner Dashboard Upstox - Earnings report",
      },
    ],
  },
  {
    name: "Demat Account Open",
    seoTitle: "Open a Demat Account Online | Upstox",
    seoDescription: "Open a Demat account online with Upstox in minutes — instant KYC, free equity delivery trading, and a smooth onboarding flow built with Angular.",
    category: "Enterprise",
    description: "Open a Demat Account Online at Upstox",
    stack: [
      "Angular/black/white",
      "MongoDB",
      "mysql",
      "loopback",
      "npm",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    otherSkills: [],
    software: "Web",
    org: "Upstox",
    year: "2017",
    domain: "FinTech",
    schema: "https://schema.org/BusinessApplication",
    link: "https://upstox.com/open-demat-account/",
    features: [
      {
        text: "Open a Demat account with document upload.",
      },
      {
        text: "PAN, Aadhar, IPV, and cancelled check verification",
      },
      {
        text: "Lead to CRM system",
      },
      {
        text: "Scrutiny of lead",
      },
      {
        text: "Upload details to NSE, BSE, and MCX",
      },
      {
        text: "Report based on the flow of lead",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/openDemat.webp",
        alt: "Open a Demat Account Online: Demat Account Opening at Upstox",
      },
    ],
  },
  {
    name: "Call Matrix",
    seoTitle: "Call Matrix: Call Intelligence & Analytics",
    seoDescription: "A SaaS platform for call intelligence, marketing attribution, and analytics — track calls from ad to close with D3-powered dashboards.",
    category: "SaaS",
    description: "Call Intelligence, Marketing, and Analytics Platform",
    stack: [
      "Angular/black/white",
      "Nodedotjs",
      "d3",
      "MongoDB",
      "MySQL",
      "Express/black/white",
      "googleads",
      "googlesheets",
      "twilio",
      "DigitalOcean",
    ],
    otherSkills: [],
    software: "Web",
    org: "Mobistreak",
    year: "2015",
    domain: "Digital Marketing",
    schema: "https://schema.org/BusinessApplication",
    link: "https://callmatrix.io/",
    features: [
      {
        text: "Create a campaign for the call",
      },
      {
        text: "Create a bundle of campaigns for the call",
      },
      {
        text: "Buy local & toll-free numbers",
      },
      {
        text: "Call Recording and Off-Hour Call Handling",
      },
      {
        text: "Funnel to redirect the call based on the multi-level IVR",
      },
      {
        text: "Report of bundle, CDR, and offer based on hour, week, and geo location",
      },
      {
        text: "Dashboard to get a birds-eye view",
      },
      {
        text: "Google AdWords API integration",
      },
      {
        text: "User authorization based on role",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/callmatrix/callmatrix.webp",
        alt: "CallMatrix - Call Intelligence, Marketing, and Analytics Platform",
      },
      {
        itemImageSrc: "/img/projects/callmatrix/mobistreak.webp",
        alt: "CallMatrix - Call Intelligence, Marketing, and Analytics Platform",
      },
    ],
  },
  {
    name: "Command Line Dictionary",
    seoTitle: "CLI Dictionary: Definitions in Your Terminal",
    seoDescription: "A fast, lightweight command line interface for looking up word definitions, synonyms, and examples — built for developers who live in the terminal.",
    category: "Automation",
    description: "A fast, lightweight Command Line Interface (CLI) for looking up word definitions, synonyms, and examples. Built for developers who live in the terminal.",
    software: "Terminal",
    org: "Freelance",
    year: "2020",
    domain: "Ed Tech",
    stack: ["npm", "Eslint", "Prettier"],
    otherSkills: ["Inquirer", "Commander", "Plop"],
    schema: "https://schema.org/DeveloperApplication",
    codeLink: "https://github.com/heartstchr/dic",
    features: [
      {
        text: "Create help command for available commands",
      },
      {
        text: "Definition of a word",
      },
      {
        text: "Synonyms and antonyms of a word",
      },
      {
        text: "Get example sentence from a word",
      },
      {
        text: "Get word of the day",
      },
      {
        text: "Play word game",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/dictionary.webp",
        alt: "CLI for Dictionary",
      },
    ],
  },
  {
    name: "Stock Market",
    seoTitle: "Real-Time Stock Market Dashboard",
    seoDescription: "A high-performance real-time data visualization platform that renders live, interactive D3.js charts from socket-driven financial data with sub-second latency.",
    category: "Startup MVPs",
    description: "A high-performance real-time data visualization platform that consumes socket-driven financial data and renders live, interactive D3.js charts with sub-second latency.",
    stack: [
      "Socket.io/black/white",
      "d3",
      "angular/black/white",
      "NodedotJS",
      "gulp",
      "Eslint",
      "Prettier",
      "github/black/white",
    ],
    software: "Web",
    org: "Freelance",
    year: "2016",
    domain: "FinTech",
    schema: "https://schema.org/BusinessApplication",
    codeLink: "https://github.com/heartstchr/StockMarket",
    features: [
      {
        text: "Show realtime charts of a unit",
      },
      {
        text: "Show history of a unit in charts",
      },
    ],
    images: [
      {
        itemImageSrc: "/img/projects/stocks.webp",
        alt: "Consuming socket data and plotting a real-time D3 graph",
      },
    ],
  },
];

export const projects = freelance.map((project) => ({
  ...project,
  link: `/web-development-projects/${toKebabCase(project.name)}/`,
}));
