---
title: Marketplace Booking Platform
description: A multi-sided booking marketplace with search, listing management, reservations, and payments that can be adapted to other inventory-led domains.
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Marketplace Booking Platform"
  description: "A multi-sided booking marketplace with search, listing management, reservations, and payments that can be adapted to other inventory-led domains."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Marketplace SaaS"
  year: "2024"
  price: 0
  currency: USD
  link: ""
  codeLink: 
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20"
  stack: ["Javascript","Vuedotjs","vite","Axios","Express/black/white","jsonwebtokens/black/white","stripe","nodedotjs","MongoDB","Git","github/black/white","Eslint","Prettier"]
  images: []
  features: [{"text":"Secure user registration, login, and logout functionality."},{"text":"Role-based access for general users, property owners, and admins."},{"text":"Search inventory by type, geography, availability, and time."},{"text":"Advanced filters to refine search results based on user preferences."},{"text":"Detailed listing pages with full image galleries and inventory information."},{"text":"Booking request system with date, time, and duration selection."},{"text":"Free cancellation within 24 hours with redirection to the inventory catalog."},{"text":"Seamless and secure payment processing via Stripe for confirmed bookings."},{"text":"Email notifications for booking and payment confirmations (users & owners)."},{"text":"Providers can publish new listings with images and details."},{"text":"Admin verification process for new listing submissions."},{"text":"Responsive, mobile-friendly interface for seamless access across devices."},{"text":"Integrated APIs for authentication, listing management, booking, search, and payments."},{"text":"Scalable backend architecture to support future growth and features."},{"text":"Reusable marketplace architecture that can be replicated in another domain with different inventory, filters, and booking logic."}]
  perspective: {"executive":"","technical":""}
  details: "## Project Overview\nA comprehensive **marketplace booking platform** for discovering and reserving structured inventory. Built for a **confidential client** under NDA, this is a **full-stack application** that connects inventory providers with users looking to browse, compare, and book listed resources.\n\nOne of the strongest parts of this build is that the product logic is not tied to a single vertical. The same architecture can be replicated in another domain where users search structured inventory, compare results, book or request access, make payments, and manage listings through role-based workflows.\n\n## Executive Summary\n\nThis project shows how to build a reusable multi-sided marketplace foundation with booking, payments, provider workflows, and search-driven discovery. The commercial value is not limited to one vertical because the same architecture can be adapted to many inventory-led businesses.\n\n## Business Problem\n\nMarketplace products are difficult because they combine supply management, demand capture, trust, availability, payments, and role-based operations in one system. Many teams can prototype the interface, but far fewer can create a stable full-stack flow that providers and customers can actually use.\n\n## What I Built\n\n- A marketplace booking platform with provider, customer, and admin flows\n- Search, filtering, listing management, booking, and payment infrastructure\n- A role-based architecture that supports moderation and operational workflows\n- A reusable system that can be repurposed for other booking and catalog domains\n\n## Why It Matters\n\nThis kind of build is valuable because it compresses multiple business systems into one product foundation: discovery, inventory management, transactional workflow, and operational control. That makes it a strong proof point for both marketplace execution and scalable product architecture.\n\n## Best Fit If You Need Something Similar\n\nThis case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/) and [High-Performance API Design](/web-development-services/api-performance-and-integration/). It is a strong fit if you need a marketplace, booking system, or provider-managed platform.\n\n## Architecture\nThis is a **modern monorepo** with separate **client** and **server** applications, utilizing a **microservices-inspired architecture** with clear separation of concerns, role-based authentication, payment processing, and comprehensive booking management.\n\n### **Technology Stack**\n\n#### **Frontend (Client):**\n- **Vue.js 3.4.21** with Composition API\n- **TypeScript 5.4.0** for type safety\n- **PrimeVue 3.51.0** - Enterprise UI component library\n- **Vite 5.2.8** - Fast development and build tool\n- **Pinia 2.1.7** - State management\n- **Vue Router 4.3.0** - Client-side routing\n\n#### **Backend (Server):**\n- **Node.js** with **Express.js 4.18.2**\n- **MongoDB** with **Mongoose 8.1.0** ODM\n- **JWT Authentication** with refresh tokens\n- **Stripe 15.10.0** - Payment processing\n- **Multer** - File upload handling\n- **Nodemailer** - Email functionality\n\n#### **Development & Testing:**\n- **Playwright** - End-to-end testing\n- **Vitest** - Unit testing\n- **ESLint + Prettier** - Code quality\n- **Husky** - Git hooks\n- **TypeScript** - Type safety\n\n### **Root Directory Structure**\n\n```\nmarketplace-platform/\n├── client/                       # Frontend Vue.js application\n│   ├── src/                     # Source code\n│   ├── public/                  # Static assets\n│   ├── e2e/                     # End-to-end tests\n│   ├── package.json             # Frontend dependencies\n│   ├── vite.config.ts           # Vite configuration\n│   ├── playwright.config.ts     # E2E test configuration\n│   └── tsconfig.*.json          # TypeScript configurations\n├── server/                      # Backend Node.js application\n│   ├── controllers/             # Business logic handlers\n│   ├── models/                  # Database models\n│   ├── routes/                  # API route definitions\n│   ├── middlewares/             # Custom middleware\n│   ├── database/                # Database configuration\n│   ├── helpers/                 # Utility functions\n│   ├── validations/             # Input validation schemas\n│   ├── uploadedImages/          # File storage\n│   ├── build/                   # Production build\n│   └── server.js                # Main server file\n├── .github/                     # GitHub workflows\n├── .husky/                      # Git hooks\n├── .vscode/                     # VS Code settings\n├── package.json                 # Root package configuration\n├── pnpm-lock.yaml               # Package lock file\n└── README.md                    # Project documentation\n```\n\n## **Detailed Frontend Structure (`client/`)**\n\n### **Source Code Organization (`client/src/`)**\n\n```\nsrc/\n├── App.vue                      # Main application component\n├── main.ts                      # Application entry point\n├── components/                  # Reusable UI components\n│   ├── auth/                    # Authentication components\n│   │   ├── Login.vue\n│   │   └── Register.vue\n│   ├── booking/                 # Booking-related components\n│   │   ├── Banner.vue\n│   │   ├── Info.vue\n│   │   └── Booking.vue\n│   ├── layout/                  # Layout components\n│   │   ├── Footer.vue\n│   │   ├── Header.vue\n│   │   └── HeroBanner.vue\n│   ├── shared/                  # Shared utility components\n│   │   ├── Gallery.vue\n│   │   ├── Loader.vue\n│   │   ├── ListingCard.vue\n│   │   ├── Search.vue\n│   │   └── ConfirmTemplate.vue\n│   ├── UploadImages.vue         # Image upload component\n│   └── PaymentFailed.vue        # Payment failure handling\n├── views/                       # Page-level components\n│   ├── HomeView.vue             # Homepage\n│   ├── ListingsView.vue         # Inventory listing\n│   ├── ListingDetailsView.vue   # Individual listing details\n│   ├── RegisterListingView.vue  # Listing registration\n│   ├── Payment.vue              # Payment processing\n│   ├── AboutView.vue            # About page\n│   ├── NotFoundView.vue         # 404 page\n│   ├── Privacy.vue              # Privacy policy\n│   ├── Terms.vue                # Terms of service\n│   └── listings/                # Listing management views\n│       ├── AddListingView.vue\n│       ├── EditListingView.vue\n│       └── ListListingsView.vue\n├── router/                      # Routing configuration\n│   ├── index.ts                 # Main router setup\n│   └── routes.ts                # Route definitions\n├── stores/                      # Pinia state management\n│   ├── [8 store modules for:\n│   ├── - Authentication\n│   ├── - User management\n│   ├── - Listings management\n│   ├── - Booking system\n│   ├── - Payment processing\n│   ├── - Location services\n│   ├── - Image uploads\n│   └── - Filtering & search]\n├── service/                     # API service layer\n│   ├── [14 service modules for:\n│   ├── - API client configuration\n│   ├── - Authentication services\n│   ├── - User services\n│   ├── - Listing services\n│   ├── - Booking services\n│   ├── - Payment services\n│   ├── - Location services\n│   ├── - Image upload services\n│   ├── - Token management\n│   └── - Error handling]\n├── models/                      # TypeScript interfaces\n│   ├── User.interface.ts\n│   ├── Listing.interface.ts\n│   ├── Booking.interface.ts\n│   └── Payment.interface.ts\n├── assets/                      # Static assets\n│   ├── images/\n│   ├── styles/\n│   └── icons/\n└── plugins/                     # Vue plugins configuration\n```\n\n## **Detailed Backend Structure (`server/`)**\n\n### **Core Server Components**\n\n```\nserver/\n├── server.js                    # Main server entry point\n├── models/                      # Database models (9 models)\n│   ├── user.model.js            # User schema and methods\n│   ├── listing.model.js         # Inventory listing schema\n│   ├── booking.model.js         # Booking management\n│   ├── payment.model.js         # Payment records\n│   ├── role.model.js            # User roles (admin, owner, user)\n│   ├── country.model.js         # Country data\n│   ├── city.model.js            # City data\n│   ├── refreshToken.model.js    # JWT refresh tokens\n│   └── index.js                 # Model exports\n├── controllers/                 # Business logic (8 controllers)\n│   ├── auth.controller.js       # Authentication logic\n│   ├── user.controller.js       # User management\n│   ├── listing.controller.js    # Listing CRUD operations\n│   ├── booking.controller.js    # Booking management\n│   ├── payment.controller.js    # Stripe payment processing\n│   ├── filter.controller.js     # Search and filtering\n│   ├── country.city.controller.js # Location services\n│   └── shared/\n│       └── upload.images.controller.js # Image upload handling\n├── routes/                      # API route definitions (7 route files)\n│   ├── auth.routes.js           # Authentication endpoints\n│   ├── user.routes.js           # User management endpoints\n│   ├── listing.routes.js        # Listing management endpoints\n│   ├── booking.routes.js        # Booking endpoints\n│   ├── payment.routes.js        # Payment endpoints\n│   ├── filter.routes.js         # Search and filter endpoints\n│   └── country.city.routes.js   # Location endpoints\n├── middlewares/                 # Custom middleware (7 middleware)\n│   ├── [Authentication middleware\n│   ├── - Authorization checks\n│   ├── - Role-based access control\n│   ├── - Input validation\n│   ├── - Error handling\n│   ├── - File upload processing\n│   └── - Rate limiting]\n├── database/                    # Database configuration\n│   ├── db.config.js             # MongoDB connection\n│   └── [Additional DB utilities]\n├── helpers/                     # Utility functions\n│   ├── util.js                  # Common utilities\n│   ├── [Email helpers\n│   ├── - File management\n│   ├── - Date utilities\n│   ├── - Validation helpers\n│   └── - Response formatters]\n├── validations/                 # Input validation schemas\n│   ├── [Validation rules for:\n│   ├── - User registration/login\n│   ├── - Listing creation/updates\n│   ├── - Booking submissions\n│   └── - Payment processing]\n├── configs/                     # Configuration files\n│   └── [App configurations]\n├── uploadedImages/              # File storage (66 uploaded files)\n└── build/                       # Production build output\n```\n\n## **Key Features & Functionality**\n\n### **Core Platform Features**\n- **Inventory Discovery**: Browse and search structured listings\n- **Detailed Listings**: Comprehensive item information with image galleries\n- **Booking System**: Full booking workflow with calendar integration\n- **Payment Processing**: Secure payments via Stripe integration\n- **User Management**: Role-based authentication (admin, owner, user)\n- **Catalog Filtering**: Geography and availability-based filtering\n\n### **User Roles & Permissions**\n1. **Regular Users**: Browse listings, make bookings, manage their bookings\n2. **Providers**: Publish listings, manage bookings, update availability\n3. **Administrators**: Full platform management, user moderation\n\n### **Booking & Payment Flow**\n1. **Inventory Discovery**: Users browse available listings with filters\n2. **Listing Details**: View comprehensive information, images, availability\n3. **Booking Request**: Select dates, submit booking with details\n4. **Payment Processing**: Secure payment via Stripe\n5. **Confirmation**: Email notifications and booking management\n6. **Communication**: In-platform messaging between users and providers\n\n### **Technical Features**\n- **Image Upload**: Multi-image upload with optimization\n- **Search & Filtering**: Advanced filtering by location, price, amenities\n- **Responsive Design**: Mobile-first approach with PrimeVue components\n- **Real-time Updates**: Dynamic content updates\n- **Email Notifications**: Automated booking confirmations and updates\n\n## **Replication in Another Domain**\n\nThis platform is a strong reusable base for other marketplace and booking products because the core building blocks are already separated cleanly:\n\n- **Searchable inventory model**: adapt the same structure to equipment, workspaces, tours, professionals, rentals, appointments, or other bookable resources\n- **Role-based access**: keep the same user, provider, and admin workflow with only domain-specific policy changes\n- **Booking and request flow**: reuse the booking engine for reservations, consultations, demo slots, rentals, or service requests\n- **Payment infrastructure**: preserve Stripe flows while adjusting pricing, deposits, or commission rules\n- **Listing management**: reuse create, edit, verify, and media-upload workflows for any provider-managed catalog\n- **Filtering and discovery**: adapt country, city, availability, and attribute filters to the new vertical\n\nIn practical terms, this means the functionality does not need to be rebuilt from zero for a different business category. The existing frontend patterns, backend route structure, auth model, payment handling, and admin verification flow can be ported into another domain with targeted changes to terminology, schemas, business rules, and search attributes.\n\n## **Development Workflow**\n\n### **Available Scripts**\n\n```bash\n# Root level commands\npnpm install           # Install all dependencies (client + server)\npnpm start             # Start both client and server concurrently\npnpm start:server      # Start only the backend server\npnpm start:client      # Start only the frontend client\npnpm format            # Format code in both client and server\npnpm clean             # Clean all node_modules and build files\npnpm build:prod        # Production build\n\n# Client-specific commands\ncd client\npnpm dev               # Development server\npnpm build             # Production build\npnpm test:unit         # Run unit tests\npnpm test:e2e          # Run end-to-end tests\npnpm lint              # ESLint code quality\npnpm format            # Prettier code formatting\n\n# Server-specific commands\ncd server\npnpm dev               # Development server with nodemon\npnpm lint              # ESLint for backend\npnpm format            # Prettier for backend\n```\n\n### **Environment Setup**\n\n1. **Prerequisites**: Node.js 18+, pnpm, MongoDB\n2. **Installation**: `pnpm install` (installs both client and server)\n3. **Environment**: `pnpm copy:env` (copies server environment template)\n4. **Database**: Set up MongoDB connection in server/.env\n5. **Stripe**: Configure Stripe keys for payment processing\n6. **Development**: `pnpm start` (starts both client and server)\n7. **Access**: \n   - Frontend: `http://localhost:5173/`\n   - Backend: `http://localhost:3000/`\n\n## **API Architecture**\n\n### **RESTful Endpoints**\n\n```\nAuthentication:\nPOST   /api/auth/register     # User registration\nPOST   /api/auth/login        # User login\nPOST   /api/auth/refresh      # Refresh JWT token\nPOST   /api/auth/logout       # User logout\n\nUser Management:\nGET    /api/users/profile     # Get user profile\nPUT    /api/users/profile     # Update user profile\nGET    /api/users/listings    # Get user's listings\n\nListing Management:\nGET    /api/listings          # List all listings (with filters)\nGET    /api/listings/:id      # Get listing details\nPOST   /api/listings          # Create new listing (provider only)\nPUT    /api/listings/:id      # Update listing (provider only)\nDELETE /api/listings/:id      # Delete listing (provider only)\nPOST   /api/listings/images   # Upload listing images\n\nBooking Management:\nGET    /api/bookings          # List user's bookings\nPOST   /api/bookings          # Create new booking\nGET    /api/bookings/:id      # Get booking details\nPUT    /api/bookings/:id      # Update booking status\n\nPayment Processing:\nPOST   /api/payments/create-session  # Create Stripe session\nPOST   /webhook                      # Stripe webhook handler\n\nLocation Services:\nGET    /api/countries         # List countries\nGET    /api/cities            # List cities by country\n\nFiltering:\nGET    /api/filters/listings  # Advanced listing filtering\n```\n\n## **Security Features**\n\n### **Authentication & Authorization**\n- **JWT-based authentication** with refresh tokens\n- **Role-based access control** (RBAC)\n- **Password hashing** with bcrypt\n- **Route protection** on both client and server\n- **Session management** with secure token storage\n\n### **Data Protection**\n- **Input validation** on all endpoints\n- **File upload security** with type and size restrictions\n- **CORS configuration** for cross-origin requests\n- **Environment variable protection**\n- **MongoDB injection prevention**\n\n## **Payment Integration**\n\n### **Stripe Integration**\n- **Stripe Checkout** for secure payment processing\n- **Webhook handling** for payment confirmations\n- **Payment status tracking** and updates\n- **Refund capabilities** for cancellations\n- **Multiple currency support**\n\n## **Testing Strategy**\n\n### **Frontend Testing**\n- **Unit Tests**: Vitest for component testing\n- **E2E Tests**: Playwright for full user journey testing\n- **Component Testing**: Vue Test Utils integration\n- **Type Safety**: TypeScript for compile-time validation\n\n### **Backend Testing**\n- **API Testing**: Available endpoints for testing\n- **Database Testing**: Model validation\n- **Integration Testing**: Full workflow testing\n\n## **Deployment & DevOps**\n\n### **Development Tools**\n- **Husky**: Git hooks for code quality\n- **ESLint + Prettier**: Code formatting and linting\n- **Commitlint**: Conventional commit messages\n- **GitHub Actions**: CI/CD pipeline (.github/ folder)\n\n### **Production Considerations**\n- **Static file serving** from server build\n- **Image storage** in uploadedImages directory\n- **Environment-based configuration**\n- **Production optimizations** for both client and server\n\n## **Performance Optimizations**\n\n### **Frontend Optimizations**\n- **Vite** for fast development and optimized builds\n- **Code splitting** with Vue Router\n- **Component lazy loading**\n- **Image optimization** and lazy loading\n- **PrimeVue** for production-ready components\n\n### **Backend Optimizations**\n- **MongoDB indexing** for fast queries\n- **Image compression** for uploads\n- **API response caching** strategies\n- **Database query optimization**\n\n## **Business Logic**\n\n### **Marketplace Features**\n- **Commission-based model** (configurable)\n- **Listing verification** process\n- **Rating and review system** (ready for implementation)\n- **Search algorithm** with relevance scoring\n- **Availability management** with calendar integration\n\n### **User Experience**\n- **Responsive design** for all devices\n- **Intuitive booking flow**\n- **Real-time availability** updates\n- **Comprehensive search** and filtering\n- **Image galleries** with zoom capabilities\n\n***\n\n**Project**: Confidential Marketplace Booking Platform  \n**Client**: Withheld under NDA  \n**Developers**: Jiwan Ghosal, Naresh Battul  \n**Architecture**: Full-stack Vue.js + Node.js  \n**Database**: MongoDB with Mongoose  \n**Payment**: Stripe Integration  \n"
  previousProject: {"name":"Momentum Incident Management","link":"/web-development-projects/momentum-incident-management/"}
  nextProject: {"name":"IBRebuild for ABN AMRO BANK N.V.","link":"/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/"}
---

<section class="mt-4 mb-6">
  <div class="grid">
    <div class="col-12">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
      <h1 class="text-4xl md:text-6xl font-bold mb-3 mt-0 line-height-2">{{$frontmatter.project.name}}</h1>
      <p class="text-xl opacity-70 line-height-4 max-w-50rem mb-4">{{$frontmatter.project.description}}</p>
      <div class="surface-card p-4 md:p-5 border-round-3xl shadow-2 border-1 border-100 mb-4">
        <div class="grid align-items-center">
          <div class="col-12 md:col-4 border-bottom-1 md:border-bottom-none md:border-right-1 border-100 mb-3 md:mb-0 pb-3 md:pb-0">
             <div class="flex align-items-center gap-3">
                <i class="pi pi-briefcase text-primary text-2xl"></i>
                <div>
                  <div class="text-xs opacity-50 uppercase font-bold">Industry</div>
                  <div class="font-bold text-lg text-900">{{$frontmatter.project.domain}}</div>
                </div>
             </div>
          </div>
          <div class="col-12 md:col-4 border-bottom-1 md:border-bottom-none md:border-right-1 border-100 mb-3 md:mb-0 pb-3 md:pb-0">
             <div class="flex align-items-center gap-3">
                <i class="pi pi-bolt text-primary text-2xl"></i>
                <div>
                  <div class="text-xs opacity-50 uppercase font-bold">Project Status</div>
                  <div class="font-bold text-lg text-900">Scale & Growth</div>
                </div>
             </div>
          </div>
          <div class="col-12 md:col-4 pt-3 md:pt-0">
             <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
          </div>
        </div>
        <div class="mt-4 pt-4 border-top-1 border-100">
           <div class="flex flex-column md:flex-row align-items-stretch gap-3">
              <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank" class="no-underline flex-1">
                <Button label="View Live Demo" icon="pi pi-external-link" severity="primary" class="w-full font-bold py-3" raised rounded />
              </a>
              <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank" class="no-underline flex-1">
                <Button label="View Source Code" icon="pi pi-github" severity="secondary" class="w-full font-bold py-3" raised rounded />
              </a>
              <a v-if="$frontmatter.project.contact" :href="'/contact/?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline flex-1">
                <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold py-3" raised rounded />
              </a>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section v-if="$frontmatter.project.images && $frontmatter.project.images.length" class="mb-8" itemscope itemtype="https://schema.org/SoftwareApplication">
  <div class="grid m-0 p-0">
    <div :class="['col-12 p-2', $frontmatter.project.images.length > 1 ? 'md:col-8 lg:col-9' : 'col-12']">
       <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
         <Image :src="$frontmatter.project.images[0].itemImageSrc" :alt="$frontmatter.project.images[0].alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-20rem md:min-h-30rem" />
       </div>
    </div>
    <div v-if="$frontmatter.project.images.length > 1" class="col-12 md:col-4 lg:col-3 p-0">
       <div class="grid m-0 p-0">
          <div v-for="(img, idx) in $frontmatter.project.images.slice(1, 3)" :key="idx" class="col-12 p-2">
             <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
                <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-12rem md:min-h-14-5rem" />
             </div>
          </div>
       </div>
    </div>
    <div v-for="(img, idx) in $frontmatter.project.images.slice(3)" :key="idx" class="col-12 md:col-6 lg:col-4 p-2">
       <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
          <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" />
       </div>
    </div>
  </div>
</section>

<div class="grid mb-8">
  <div class="col-12">
    <TabView class="project-perspective-tabs" v-if="$frontmatter.project.perspective?.executive">
      <TabPanel>
        <template #header>
          <div class="flex align-items-center gap-2">
            <i class="pi pi-briefcase"></i>
            <span>Strategic Executive</span>
          </div>
        </template>
        <div class="p-4 md:p-6 surface-card border-round-3xl shadow-1 mt-4">
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
        <div class="p-4 md:p-6 surface-card border-round-3xl shadow-1 mt-4">
          <div class="flex align-items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
            <i class="pi pi-code"></i>
            Technical Deep-Dive
          </div>
          <div class="text-xl line-height-4 text-700 mb-6">
            {{ $frontmatter.project.perspective.technical }}
          </div>
          <div v-pre class="project-markdown-content text-lg line-height-4">

## Project Overview
A comprehensive **marketplace booking platform** for discovering and reserving structured inventory. Built for a **confidential client** under NDA, this is a **full-stack application** that connects inventory providers with users looking to browse, compare, and book listed resources.

One of the strongest parts of this build is that the product logic is not tied to a single vertical. The same architecture can be replicated in another domain where users search structured inventory, compare results, book or request access, make payments, and manage listings through role-based workflows.

## Executive Summary

This project shows how to build a reusable multi-sided marketplace foundation with booking, payments, provider workflows, and search-driven discovery. The commercial value is not limited to one vertical because the same architecture can be adapted to many inventory-led businesses.

## Business Problem

Marketplace products are difficult because they combine supply management, demand capture, trust, availability, payments, and role-based operations in one system. Many teams can prototype the interface, but far fewer can create a stable full-stack flow that providers and customers can actually use.

## What I Built

- A marketplace booking platform with provider, customer, and admin flows
- Search, filtering, listing management, booking, and payment infrastructure
- A role-based architecture that supports moderation and operational workflows
- A reusable system that can be repurposed for other booking and catalog domains

## Why It Matters

This kind of build is valuable because it compresses multiple business systems into one product foundation: discovery, inventory management, transactional workflow, and operational control. That makes it a strong proof point for both marketplace execution and scalable product architecture.

## Best Fit If You Need Something Similar

This case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/) and [High-Performance API Design](/web-development-services/api-performance-and-integration/). It is a strong fit if you need a marketplace, booking system, or provider-managed platform.

## Architecture
This is a **modern monorepo** with separate **client** and **server** applications, utilizing a **microservices-inspired architecture** with clear separation of concerns, role-based authentication, payment processing, and comprehensive booking management.

### **Technology Stack**

#### **Frontend (Client):**
- **Vue.js 3.4.21** with Composition API
- **TypeScript 5.4.0** for type safety
- **PrimeVue 3.51.0** - Enterprise UI component library
- **Vite 5.2.8** - Fast development and build tool
- **Pinia 2.1.7** - State management
- **Vue Router 4.3.0** - Client-side routing

#### **Backend (Server):**
- **Node.js** with **Express.js 4.18.2**
- **MongoDB** with **Mongoose 8.1.0** ODM
- **JWT Authentication** with refresh tokens
- **Stripe 15.10.0** - Payment processing
- **Multer** - File upload handling
- **Nodemailer** - Email functionality

#### **Development & Testing:**
- **Playwright** - End-to-end testing
- **Vitest** - Unit testing
- **ESLint + Prettier** - Code quality
- **Husky** - Git hooks
- **TypeScript** - Type safety

### **Root Directory Structure**

```
marketplace-platform/
├── client/                       # Frontend Vue.js application
│   ├── src/                     # Source code
│   ├── public/                  # Static assets
│   ├── e2e/                     # End-to-end tests
│   ├── package.json             # Frontend dependencies
│   ├── vite.config.ts           # Vite configuration
│   ├── playwright.config.ts     # E2E test configuration
│   └── tsconfig.*.json          # TypeScript configurations
├── server/                      # Backend Node.js application
│   ├── controllers/             # Business logic handlers
│   ├── models/                  # Database models
│   ├── routes/                  # API route definitions
│   ├── middlewares/             # Custom middleware
│   ├── database/                # Database configuration
│   ├── helpers/                 # Utility functions
│   ├── validations/             # Input validation schemas
│   ├── uploadedImages/          # File storage
│   ├── build/                   # Production build
│   └── server.js                # Main server file
├── .github/                     # GitHub workflows
├── .husky/                      # Git hooks
├── .vscode/                     # VS Code settings
├── package.json                 # Root package configuration
├── pnpm-lock.yaml               # Package lock file
└── README.md                    # Project documentation
```

## **Detailed Frontend Structure (`client/`)**

### **Source Code Organization (`client/src/`)**

```
src/
├── App.vue                      # Main application component
├── main.ts                      # Application entry point
├── components/                  # Reusable UI components
│   ├── auth/                    # Authentication components
│   │   ├── Login.vue
│   │   └── Register.vue
│   ├── booking/                 # Booking-related components
│   │   ├── Banner.vue
│   │   ├── Info.vue
│   │   └── Booking.vue
│   ├── layout/                  # Layout components
│   │   ├── Footer.vue
│   │   ├── Header.vue
│   │   └── HeroBanner.vue
│   ├── shared/                  # Shared utility components
│   │   ├── Gallery.vue
│   │   ├── Loader.vue
│   │   ├── ListingCard.vue
│   │   ├── Search.vue
│   │   └── ConfirmTemplate.vue
│   ├── UploadImages.vue         # Image upload component
│   └── PaymentFailed.vue        # Payment failure handling
├── views/                       # Page-level components
│   ├── HomeView.vue             # Homepage
│   ├── ListingsView.vue         # Inventory listing
│   ├── ListingDetailsView.vue   # Individual listing details
│   ├── RegisterListingView.vue  # Listing registration
│   ├── Payment.vue              # Payment processing
│   ├── AboutView.vue            # About page
│   ├── NotFoundView.vue         # 404 page
│   ├── Privacy.vue              # Privacy policy
│   ├── Terms.vue                # Terms of service
│   └── listings/                # Listing management views
│       ├── AddListingView.vue
│       ├── EditListingView.vue
│       └── ListListingsView.vue
├── router/                      # Routing configuration
│   ├── index.ts                 # Main router setup
│   └── routes.ts                # Route definitions
├── stores/                      # Pinia state management
│   ├── [8 store modules for:
│   ├── - Authentication
│   ├── - User management
│   ├── - Listings management
│   ├── - Booking system
│   ├── - Payment processing
│   ├── - Location services
│   ├── - Image uploads
│   └── - Filtering & search]
├── service/                     # API service layer
│   ├── [14 service modules for:
│   ├── - API client configuration
│   ├── - Authentication services
│   ├── - User services
│   ├── - Listing services
│   ├── - Booking services
│   ├── - Payment services
│   ├── - Location services
│   ├── - Image upload services
│   ├── - Token management
│   └── - Error handling]
├── models/                      # TypeScript interfaces
│   ├── User.interface.ts
│   ├── Listing.interface.ts
│   ├── Booking.interface.ts
│   └── Payment.interface.ts
├── assets/                      # Static assets
│   ├── images/
│   ├── styles/
│   └── icons/
└── plugins/                     # Vue plugins configuration
```

## **Detailed Backend Structure (`server/`)**

### **Core Server Components**

```
server/
├── server.js                    # Main server entry point
├── models/                      # Database models (9 models)
│   ├── user.model.js            # User schema and methods
│   ├── listing.model.js         # Inventory listing schema
│   ├── booking.model.js         # Booking management
│   ├── payment.model.js         # Payment records
│   ├── role.model.js            # User roles (admin, owner, user)
│   ├── country.model.js         # Country data
│   ├── city.model.js            # City data
│   ├── refreshToken.model.js    # JWT refresh tokens
│   └── index.js                 # Model exports
├── controllers/                 # Business logic (8 controllers)
│   ├── auth.controller.js       # Authentication logic
│   ├── user.controller.js       # User management
│   ├── listing.controller.js    # Listing CRUD operations
│   ├── booking.controller.js    # Booking management
│   ├── payment.controller.js    # Stripe payment processing
│   ├── filter.controller.js     # Search and filtering
│   ├── country.city.controller.js # Location services
│   └── shared/
│       └── upload.images.controller.js # Image upload handling
├── routes/                      # API route definitions (7 route files)
│   ├── auth.routes.js           # Authentication endpoints
│   ├── user.routes.js           # User management endpoints
│   ├── listing.routes.js        # Listing management endpoints
│   ├── booking.routes.js        # Booking endpoints
│   ├── payment.routes.js        # Payment endpoints
│   ├── filter.routes.js         # Search and filter endpoints
│   └── country.city.routes.js   # Location endpoints
├── middlewares/                 # Custom middleware (7 middleware)
│   ├── [Authentication middleware
│   ├── - Authorization checks
│   ├── - Role-based access control
│   ├── - Input validation
│   ├── - Error handling
│   ├── - File upload processing
│   └── - Rate limiting]
├── database/                    # Database configuration
│   ├── db.config.js             # MongoDB connection
│   └── [Additional DB utilities]
├── helpers/                     # Utility functions
│   ├── util.js                  # Common utilities
│   ├── [Email helpers
│   ├── - File management
│   ├── - Date utilities
│   ├── - Validation helpers
│   └── - Response formatters]
├── validations/                 # Input validation schemas
│   ├── [Validation rules for:
│   ├── - User registration/login
│   ├── - Listing creation/updates
│   ├── - Booking submissions
│   └── - Payment processing]
├── configs/                     # Configuration files
│   └── [App configurations]
├── uploadedImages/              # File storage (66 uploaded files)
└── build/                       # Production build output
```

## **Key Features & Functionality**

### **Core Platform Features**
- **Inventory Discovery**: Browse and search structured listings
- **Detailed Listings**: Comprehensive item information with image galleries
- **Booking System**: Full booking workflow with calendar integration
- **Payment Processing**: Secure payments via Stripe integration
- **User Management**: Role-based authentication (admin, owner, user)
- **Catalog Filtering**: Geography and availability-based filtering

### **User Roles & Permissions**
1. **Regular Users**: Browse listings, make bookings, manage their bookings
2. **Providers**: Publish listings, manage bookings, update availability
3. **Administrators**: Full platform management, user moderation

### **Booking & Payment Flow**
1. **Inventory Discovery**: Users browse available listings with filters
2. **Listing Details**: View comprehensive information, images, availability
3. **Booking Request**: Select dates, submit booking with details
4. **Payment Processing**: Secure payment via Stripe
5. **Confirmation**: Email notifications and booking management
6. **Communication**: In-platform messaging between users and providers

### **Technical Features**
- **Image Upload**: Multi-image upload with optimization
- **Search & Filtering**: Advanced filtering by location, price, amenities
- **Responsive Design**: Mobile-first approach with PrimeVue components
- **Real-time Updates**: Dynamic content updates
- **Email Notifications**: Automated booking confirmations and updates

## **Replication in Another Domain**

This platform is a strong reusable base for other marketplace and booking products because the core building blocks are already separated cleanly:

- **Searchable inventory model**: adapt the same structure to equipment, workspaces, tours, professionals, rentals, appointments, or other bookable resources
- **Role-based access**: keep the same user, provider, and admin workflow with only domain-specific policy changes
- **Booking and request flow**: reuse the booking engine for reservations, consultations, demo slots, rentals, or service requests
- **Payment infrastructure**: preserve Stripe flows while adjusting pricing, deposits, or commission rules
- **Listing management**: reuse create, edit, verify, and media-upload workflows for any provider-managed catalog
- **Filtering and discovery**: adapt country, city, availability, and attribute filters to the new vertical

In practical terms, this means the functionality does not need to be rebuilt from zero for a different business category. The existing frontend patterns, backend route structure, auth model, payment handling, and admin verification flow can be ported into another domain with targeted changes to terminology, schemas, business rules, and search attributes.

## **Development Workflow**

### **Available Scripts**

```bash
# Root level commands
pnpm install           # Install all dependencies (client + server)
pnpm start             # Start both client and server concurrently
pnpm start:server      # Start only the backend server
pnpm start:client      # Start only the frontend client
pnpm format            # Format code in both client and server
pnpm clean             # Clean all node_modules and build files
pnpm build:prod        # Production build

# Client-specific commands
cd client
pnpm dev               # Development server
pnpm build             # Production build
pnpm test:unit         # Run unit tests
pnpm test:e2e          # Run end-to-end tests
pnpm lint              # ESLint code quality
pnpm format            # Prettier code formatting

# Server-specific commands
cd server
pnpm dev               # Development server with nodemon
pnpm lint              # ESLint for backend
pnpm format            # Prettier for backend
```

### **Environment Setup**

1. **Prerequisites**: Node.js 18+, pnpm, MongoDB
2. **Installation**: `pnpm install` (installs both client and server)
3. **Environment**: `pnpm copy:env` (copies server environment template)
4. **Database**: Set up MongoDB connection in server/.env
5. **Stripe**: Configure Stripe keys for payment processing
6. **Development**: `pnpm start` (starts both client and server)
7. **Access**: 
   - Frontend: `http://localhost:5173/`
   - Backend: `http://localhost:3000/`

## **API Architecture**

### **RESTful Endpoints**

```
Authentication:
POST   /api/auth/register     # User registration
POST   /api/auth/login        # User login
POST   /api/auth/refresh      # Refresh JWT token
POST   /api/auth/logout       # User logout

User Management:
GET    /api/users/profile     # Get user profile
PUT    /api/users/profile     # Update user profile
GET    /api/users/listings    # Get user's listings

Listing Management:
GET    /api/listings          # List all listings (with filters)
GET    /api/listings/:id      # Get listing details
POST   /api/listings          # Create new listing (provider only)
PUT    /api/listings/:id      # Update listing (provider only)
DELETE /api/listings/:id      # Delete listing (provider only)
POST   /api/listings/images   # Upload listing images

Booking Management:
GET    /api/bookings          # List user's bookings
POST   /api/bookings          # Create new booking
GET    /api/bookings/:id      # Get booking details
PUT    /api/bookings/:id      # Update booking status

Payment Processing:
POST   /api/payments/create-session  # Create Stripe session
POST   /webhook                      # Stripe webhook handler

Location Services:
GET    /api/countries         # List countries
GET    /api/cities            # List cities by country

Filtering:
GET    /api/filters/listings  # Advanced listing filtering
```

## **Security Features**

### **Authentication & Authorization**
- **JWT-based authentication** with refresh tokens
- **Role-based access control** (RBAC)
- **Password hashing** with bcrypt
- **Route protection** on both client and server
- **Session management** with secure token storage

### **Data Protection**
- **Input validation** on all endpoints
- **File upload security** with type and size restrictions
- **CORS configuration** for cross-origin requests
- **Environment variable protection**
- **MongoDB injection prevention**

## **Payment Integration**

### **Stripe Integration**
- **Stripe Checkout** for secure payment processing
- **Webhook handling** for payment confirmations
- **Payment status tracking** and updates
- **Refund capabilities** for cancellations
- **Multiple currency support**

## **Testing Strategy**

### **Frontend Testing**
- **Unit Tests**: Vitest for component testing
- **E2E Tests**: Playwright for full user journey testing
- **Component Testing**: Vue Test Utils integration
- **Type Safety**: TypeScript for compile-time validation

### **Backend Testing**
- **API Testing**: Available endpoints for testing
- **Database Testing**: Model validation
- **Integration Testing**: Full workflow testing

## **Deployment & DevOps**

### **Development Tools**
- **Husky**: Git hooks for code quality
- **ESLint + Prettier**: Code formatting and linting
- **Commitlint**: Conventional commit messages
- **GitHub Actions**: CI/CD pipeline (.github/ folder)

### **Production Considerations**
- **Static file serving** from server build
- **Image storage** in uploadedImages directory
- **Environment-based configuration**
- **Production optimizations** for both client and server

## **Performance Optimizations**

### **Frontend Optimizations**
- **Vite** for fast development and optimized builds
- **Code splitting** with Vue Router
- **Component lazy loading**
- **Image optimization** and lazy loading
- **PrimeVue** for production-ready components

### **Backend Optimizations**
- **MongoDB indexing** for fast queries
- **Image compression** for uploads
- **API response caching** strategies
- **Database query optimization**

## **Business Logic**

### **Marketplace Features**
- **Commission-based model** (configurable)
- **Listing verification** process
- **Rating and review system** (ready for implementation)
- **Search algorithm** with relevance scoring
- **Availability management** with calendar integration

### **User Experience**
- **Responsive design** for all devices
- **Intuitive booking flow**
- **Real-time availability** updates
- **Comprehensive search** and filtering
- **Image galleries** with zoom capabilities

***

**Project**: Confidential Marketplace Booking Platform  
**Client**: Withheld under NDA  
**Developers**: Jiwan Ghosal, Naresh Battul  
**Architecture**: Full-stack Vue.js + Node.js  
**Database**: MongoDB with Mongoose  
**Payment**: Stripe Integration  


</div>
</div>
</TabPanel>
</TabView>

<div v-else class="surface-card p-4 md:p-6 border-round-3xl shadow-2 h-full">
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

</div>

<div v-if="!$frontmatter.project.perspective?.executive" v-pre class="project-markdown-content text-lg line-height-4 mb-8">

## Project Overview
A comprehensive **marketplace booking platform** for discovering and reserving structured inventory. Built for a **confidential client** under NDA, this is a **full-stack application** that connects inventory providers with users looking to browse, compare, and book listed resources.

One of the strongest parts of this build is that the product logic is not tied to a single vertical. The same architecture can be replicated in another domain where users search structured inventory, compare results, book or request access, make payments, and manage listings through role-based workflows.

## Executive Summary

This project shows how to build a reusable multi-sided marketplace foundation with booking, payments, provider workflows, and search-driven discovery. The commercial value is not limited to one vertical because the same architecture can be adapted to many inventory-led businesses.

## Business Problem

Marketplace products are difficult because they combine supply management, demand capture, trust, availability, payments, and role-based operations in one system. Many teams can prototype the interface, but far fewer can create a stable full-stack flow that providers and customers can actually use.

## What I Built

- A marketplace booking platform with provider, customer, and admin flows
- Search, filtering, listing management, booking, and payment infrastructure
- A role-based architecture that supports moderation and operational workflows
- A reusable system that can be repurposed for other booking and catalog domains

## Why It Matters

This kind of build is valuable because it compresses multiple business systems into one product foundation: discovery, inventory management, transactional workflow, and operational control. That makes it a strong proof point for both marketplace execution and scalable product architecture.

## Best Fit If You Need Something Similar

This case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/) and [High-Performance API Design](/web-development-services/api-performance-and-integration/). It is a strong fit if you need a marketplace, booking system, or provider-managed platform.

## Architecture
This is a **modern monorepo** with separate **client** and **server** applications, utilizing a **microservices-inspired architecture** with clear separation of concerns, role-based authentication, payment processing, and comprehensive booking management.

### **Technology Stack**

#### **Frontend (Client):**
- **Vue.js 3.4.21** with Composition API
- **TypeScript 5.4.0** for type safety
- **PrimeVue 3.51.0** - Enterprise UI component library
- **Vite 5.2.8** - Fast development and build tool
- **Pinia 2.1.7** - State management
- **Vue Router 4.3.0** - Client-side routing

#### **Backend (Server):**
- **Node.js** with **Express.js 4.18.2**
- **MongoDB** with **Mongoose 8.1.0** ODM
- **JWT Authentication** with refresh tokens
- **Stripe 15.10.0** - Payment processing
- **Multer** - File upload handling
- **Nodemailer** - Email functionality

#### **Development & Testing:**
- **Playwright** - End-to-end testing
- **Vitest** - Unit testing
- **ESLint + Prettier** - Code quality
- **Husky** - Git hooks
- **TypeScript** - Type safety

### **Root Directory Structure**

```
marketplace-platform/
├── client/                       # Frontend Vue.js application
│   ├── src/                     # Source code
│   ├── public/                  # Static assets
│   ├── e2e/                     # End-to-end tests
│   ├── package.json             # Frontend dependencies
│   ├── vite.config.ts           # Vite configuration
│   ├── playwright.config.ts     # E2E test configuration
│   └── tsconfig.*.json          # TypeScript configurations
├── server/                      # Backend Node.js application
│   ├── controllers/             # Business logic handlers
│   ├── models/                  # Database models
│   ├── routes/                  # API route definitions
│   ├── middlewares/             # Custom middleware
│   ├── database/                # Database configuration
│   ├── helpers/                 # Utility functions
│   ├── validations/             # Input validation schemas
│   ├── uploadedImages/          # File storage
│   ├── build/                   # Production build
│   └── server.js                # Main server file
├── .github/                     # GitHub workflows
├── .husky/                      # Git hooks
├── .vscode/                     # VS Code settings
├── package.json                 # Root package configuration
├── pnpm-lock.yaml               # Package lock file
└── README.md                    # Project documentation
```

## **Detailed Frontend Structure (`client/`)**

### **Source Code Organization (`client/src/`)**

```
src/
├── App.vue                      # Main application component
├── main.ts                      # Application entry point
├── components/                  # Reusable UI components
│   ├── auth/                    # Authentication components
│   │   ├── Login.vue
│   │   └── Register.vue
│   ├── booking/                 # Booking-related components
│   │   ├── Banner.vue
│   │   ├── Info.vue
│   │   └── Booking.vue
│   ├── layout/                  # Layout components
│   │   ├── Footer.vue
│   │   ├── Header.vue
│   │   └── HeroBanner.vue
│   ├── shared/                  # Shared utility components
│   │   ├── Gallery.vue
│   │   ├── Loader.vue
│   │   ├── ListingCard.vue
│   │   ├── Search.vue
│   │   └── ConfirmTemplate.vue
│   ├── UploadImages.vue         # Image upload component
│   └── PaymentFailed.vue        # Payment failure handling
├── views/                       # Page-level components
│   ├── HomeView.vue             # Homepage
│   ├── ListingsView.vue         # Inventory listing
│   ├── ListingDetailsView.vue   # Individual listing details
│   ├── RegisterListingView.vue  # Listing registration
│   ├── Payment.vue              # Payment processing
│   ├── AboutView.vue            # About page
│   ├── NotFoundView.vue         # 404 page
│   ├── Privacy.vue              # Privacy policy
│   ├── Terms.vue                # Terms of service
│   └── listings/                # Listing management views
│       ├── AddListingView.vue
│       ├── EditListingView.vue
│       └── ListListingsView.vue
├── router/                      # Routing configuration
│   ├── index.ts                 # Main router setup
│   └── routes.ts                # Route definitions
├── stores/                      # Pinia state management
│   ├── [8 store modules for:
│   ├── - Authentication
│   ├── - User management
│   ├── - Listings management
│   ├── - Booking system
│   ├── - Payment processing
│   ├── - Location services
│   ├── - Image uploads
│   └── - Filtering & search]
├── service/                     # API service layer
│   ├── [14 service modules for:
│   ├── - API client configuration
│   ├── - Authentication services
│   ├── - User services
│   ├── - Listing services
│   ├── - Booking services
│   ├── - Payment services
│   ├── - Location services
│   ├── - Image upload services
│   ├── - Token management
│   └── - Error handling]
├── models/                      # TypeScript interfaces
│   ├── User.interface.ts
│   ├── Listing.interface.ts
│   ├── Booking.interface.ts
│   └── Payment.interface.ts
├── assets/                      # Static assets
│   ├── images/
│   ├── styles/
│   └── icons/
└── plugins/                     # Vue plugins configuration
```

## **Detailed Backend Structure (`server/`)**

### **Core Server Components**

```
server/
├── server.js                    # Main server entry point
├── models/                      # Database models (9 models)
│   ├── user.model.js            # User schema and methods
│   ├── listing.model.js         # Inventory listing schema
│   ├── booking.model.js         # Booking management
│   ├── payment.model.js         # Payment records
│   ├── role.model.js            # User roles (admin, owner, user)
│   ├── country.model.js         # Country data
│   ├── city.model.js            # City data
│   ├── refreshToken.model.js    # JWT refresh tokens
│   └── index.js                 # Model exports
├── controllers/                 # Business logic (8 controllers)
│   ├── auth.controller.js       # Authentication logic
│   ├── user.controller.js       # User management
│   ├── listing.controller.js    # Listing CRUD operations
│   ├── booking.controller.js    # Booking management
│   ├── payment.controller.js    # Stripe payment processing
│   ├── filter.controller.js     # Search and filtering
│   ├── country.city.controller.js # Location services
│   └── shared/
│       └── upload.images.controller.js # Image upload handling
├── routes/                      # API route definitions (7 route files)
│   ├── auth.routes.js           # Authentication endpoints
│   ├── user.routes.js           # User management endpoints
│   ├── listing.routes.js        # Listing management endpoints
│   ├── booking.routes.js        # Booking endpoints
│   ├── payment.routes.js        # Payment endpoints
│   ├── filter.routes.js         # Search and filter endpoints
│   └── country.city.routes.js   # Location endpoints
├── middlewares/                 # Custom middleware (7 middleware)
│   ├── [Authentication middleware
│   ├── - Authorization checks
│   ├── - Role-based access control
│   ├── - Input validation
│   ├── - Error handling
│   ├── - File upload processing
│   └── - Rate limiting]
├── database/                    # Database configuration
│   ├── db.config.js             # MongoDB connection
│   └── [Additional DB utilities]
├── helpers/                     # Utility functions
│   ├── util.js                  # Common utilities
│   ├── [Email helpers
│   ├── - File management
│   ├── - Date utilities
│   ├── - Validation helpers
│   └── - Response formatters]
├── validations/                 # Input validation schemas
│   ├── [Validation rules for:
│   ├── - User registration/login
│   ├── - Listing creation/updates
│   ├── - Booking submissions
│   └── - Payment processing]
├── configs/                     # Configuration files
│   └── [App configurations]
├── uploadedImages/              # File storage (66 uploaded files)
└── build/                       # Production build output
```

## **Key Features & Functionality**

### **Core Platform Features**
- **Inventory Discovery**: Browse and search structured listings
- **Detailed Listings**: Comprehensive item information with image galleries
- **Booking System**: Full booking workflow with calendar integration
- **Payment Processing**: Secure payments via Stripe integration
- **User Management**: Role-based authentication (admin, owner, user)
- **Catalog Filtering**: Geography and availability-based filtering

### **User Roles & Permissions**
1. **Regular Users**: Browse listings, make bookings, manage their bookings
2. **Providers**: Publish listings, manage bookings, update availability
3. **Administrators**: Full platform management, user moderation

### **Booking & Payment Flow**
1. **Inventory Discovery**: Users browse available listings with filters
2. **Listing Details**: View comprehensive information, images, availability
3. **Booking Request**: Select dates, submit booking with details
4. **Payment Processing**: Secure payment via Stripe
5. **Confirmation**: Email notifications and booking management
6. **Communication**: In-platform messaging between users and providers

### **Technical Features**
- **Image Upload**: Multi-image upload with optimization
- **Search & Filtering**: Advanced filtering by location, price, amenities
- **Responsive Design**: Mobile-first approach with PrimeVue components
- **Real-time Updates**: Dynamic content updates
- **Email Notifications**: Automated booking confirmations and updates

## **Replication in Another Domain**

This platform is a strong reusable base for other marketplace and booking products because the core building blocks are already separated cleanly:

- **Searchable inventory model**: adapt the same structure to equipment, workspaces, tours, professionals, rentals, appointments, or other bookable resources
- **Role-based access**: keep the same user, provider, and admin workflow with only domain-specific policy changes
- **Booking and request flow**: reuse the booking engine for reservations, consultations, demo slots, rentals, or service requests
- **Payment infrastructure**: preserve Stripe flows while adjusting pricing, deposits, or commission rules
- **Listing management**: reuse create, edit, verify, and media-upload workflows for any provider-managed catalog
- **Filtering and discovery**: adapt country, city, availability, and attribute filters to the new vertical

In practical terms, this means the functionality does not need to be rebuilt from zero for a different business category. The existing frontend patterns, backend route structure, auth model, payment handling, and admin verification flow can be ported into another domain with targeted changes to terminology, schemas, business rules, and search attributes.

## **Development Workflow**

### **Available Scripts**

```bash
# Root level commands
pnpm install           # Install all dependencies (client + server)
pnpm start             # Start both client and server concurrently
pnpm start:server      # Start only the backend server
pnpm start:client      # Start only the frontend client
pnpm format            # Format code in both client and server
pnpm clean             # Clean all node_modules and build files
pnpm build:prod        # Production build

# Client-specific commands
cd client
pnpm dev               # Development server
pnpm build             # Production build
pnpm test:unit         # Run unit tests
pnpm test:e2e          # Run end-to-end tests
pnpm lint              # ESLint code quality
pnpm format            # Prettier code formatting

# Server-specific commands
cd server
pnpm dev               # Development server with nodemon
pnpm lint              # ESLint for backend
pnpm format            # Prettier for backend
```

### **Environment Setup**

1. **Prerequisites**: Node.js 18+, pnpm, MongoDB
2. **Installation**: `pnpm install` (installs both client and server)
3. **Environment**: `pnpm copy:env` (copies server environment template)
4. **Database**: Set up MongoDB connection in server/.env
5. **Stripe**: Configure Stripe keys for payment processing
6. **Development**: `pnpm start` (starts both client and server)
7. **Access**: 
   - Frontend: `http://localhost:5173/`
   - Backend: `http://localhost:3000/`

## **API Architecture**

### **RESTful Endpoints**

```
Authentication:
POST   /api/auth/register     # User registration
POST   /api/auth/login        # User login
POST   /api/auth/refresh      # Refresh JWT token
POST   /api/auth/logout       # User logout

User Management:
GET    /api/users/profile     # Get user profile
PUT    /api/users/profile     # Update user profile
GET    /api/users/listings    # Get user's listings

Listing Management:
GET    /api/listings          # List all listings (with filters)
GET    /api/listings/:id      # Get listing details
POST   /api/listings          # Create new listing (provider only)
PUT    /api/listings/:id      # Update listing (provider only)
DELETE /api/listings/:id      # Delete listing (provider only)
POST   /api/listings/images   # Upload listing images

Booking Management:
GET    /api/bookings          # List user's bookings
POST   /api/bookings          # Create new booking
GET    /api/bookings/:id      # Get booking details
PUT    /api/bookings/:id      # Update booking status

Payment Processing:
POST   /api/payments/create-session  # Create Stripe session
POST   /webhook                      # Stripe webhook handler

Location Services:
GET    /api/countries         # List countries
GET    /api/cities            # List cities by country

Filtering:
GET    /api/filters/listings  # Advanced listing filtering
```

## **Security Features**

### **Authentication & Authorization**
- **JWT-based authentication** with refresh tokens
- **Role-based access control** (RBAC)
- **Password hashing** with bcrypt
- **Route protection** on both client and server
- **Session management** with secure token storage

### **Data Protection**
- **Input validation** on all endpoints
- **File upload security** with type and size restrictions
- **CORS configuration** for cross-origin requests
- **Environment variable protection**
- **MongoDB injection prevention**

## **Payment Integration**

### **Stripe Integration**
- **Stripe Checkout** for secure payment processing
- **Webhook handling** for payment confirmations
- **Payment status tracking** and updates
- **Refund capabilities** for cancellations
- **Multiple currency support**

## **Testing Strategy**

### **Frontend Testing**
- **Unit Tests**: Vitest for component testing
- **E2E Tests**: Playwright for full user journey testing
- **Component Testing**: Vue Test Utils integration
- **Type Safety**: TypeScript for compile-time validation

### **Backend Testing**
- **API Testing**: Available endpoints for testing
- **Database Testing**: Model validation
- **Integration Testing**: Full workflow testing

## **Deployment & DevOps**

### **Development Tools**
- **Husky**: Git hooks for code quality
- **ESLint + Prettier**: Code formatting and linting
- **Commitlint**: Conventional commit messages
- **GitHub Actions**: CI/CD pipeline (.github/ folder)

### **Production Considerations**
- **Static file serving** from server build
- **Image storage** in uploadedImages directory
- **Environment-based configuration**
- **Production optimizations** for both client and server

## **Performance Optimizations**

### **Frontend Optimizations**
- **Vite** for fast development and optimized builds
- **Code splitting** with Vue Router
- **Component lazy loading**
- **Image optimization** and lazy loading
- **PrimeVue** for production-ready components

### **Backend Optimizations**
- **MongoDB indexing** for fast queries
- **Image compression** for uploads
- **API response caching** strategies
- **Database query optimization**

## **Business Logic**

### **Marketplace Features**
- **Commission-based model** (configurable)
- **Listing verification** process
- **Rating and review system** (ready for implementation)
- **Search algorithm** with relevance scoring
- **Availability management** with calendar integration

### **User Experience**
- **Responsive design** for all devices
- **Intuitive booking flow**
- **Real-time availability** updates
- **Comprehensive search** and filtering
- **Image galleries** with zoom capabilities

***

**Project**: Confidential Marketplace Booking Platform  
**Client**: Withheld under NDA  
**Developers**: Jiwan Ghosal, Naresh Battul  
**Architecture**: Full-stack Vue.js + Node.js  
**Database**: MongoDB with Mongoose  
**Payment**: Stripe Integration  

</div>
<ConsultingBridge />
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

<section class="mt-8 pt-8 border-top-1 surface-border">
  <div class="glass-effect p-6 md:p-8 border-round-3xl text-center relative overflow-hidden shadow-4">
    <div class="absolute top-0 right-0 w-20rem h-20rem bg-primary opacity-10 border-circle" style="filter: blur(80px); transform: translate(30%, -30%)"></div>
    <h2 class="text-3xl md:text-5xl font-bold mb-4 relative z-1">Need a similar <span class="text-gradient">strategic architecture</span>?</h2>
    <p class="text-xl text-600 mb-6 max-w-30rem mx-auto relative z-1">If this project aligns with your current bottlenecks, let's discuss how to apply these same principles to your business.</p>
    <div class="flex flex-wrap justify-content-center gap-3 relative z-1">
      <a :href="'/contact/?subject=' + encodeURIComponent('Inquiry regarding ' + $frontmatter.project.name)" class="no-underline">
        <Button label="Start Your Project Brief" icon="pi pi-file-edit" severity="primary" raised rounded />
      </a>
      <a href="https://cal.com/stackseekers" target="_blank" class="no-underline">
        <Button label="Book Technical Roadmap Audit" icon="pi pi-calendar-clock" severity="secondary" raised rounded />
      </a>
    </div>
  </div>
</section>

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