---
title: "Marketplace Booking Platform"
description: "A multi-sided booking marketplace with search, listing management, reservations, and payments that can be adapted to other inventory-led domains."
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
  currency: "USD"
  link: ""
  codeLink: ""
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20"
  stack: ["Javascript","Vuedotjs","vite","Axios","Express/black/white","jsonwebtokens/black/white","stripe","nodedotjs","MongoDB","Git","github/black/white","Eslint","Prettier"]
  images: []
  features: [{"text":"Secure user registration, login, and logout functionality."},{"text":"Role-based access for general users, property owners, and admins."},{"text":"Search inventory by type, geography, availability, and time."},{"text":"Advanced filters to refine search results based on user preferences."},{"text":"Detailed listing pages with full image galleries and inventory information."},{"text":"Booking request system with date, time, and duration selection."},{"text":"Free cancellation within 24 hours with redirection to the inventory catalog."},{"text":"Seamless and secure payment processing via Stripe for confirmed bookings."},{"text":"Email notifications for booking and payment confirmations (users & owners)."},{"text":"Providers can publish new listings with images and details."},{"text":"Admin verification process for new listing submissions."},{"text":"Responsive, mobile-friendly interface for seamless access across devices."},{"text":"Integrated APIs for authentication, listing management, booking, search, and payments."},{"text":"Scalable backend architecture to support future growth and features."},{"text":"Reusable marketplace architecture that can be replicated in another domain with different inventory, filters, and booking logic."}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Momentum Incident Management","link":"/web-development-projects/momentum-incident-management/"}
  nextProject: {"name":"IBRebuild for ABN AMRO BANK N.V.","link":"/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/"}
---

<ProjectHero :project="$frontmatter.project" />

<ProjectGallery :images="$frontmatter.project.images" />

<ProjectTabs v-if="$frontmatter.project?.perspective?.executive" :project="$frontmatter.project">

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


</ProjectTabs>

<template v-else>

<ProjectTabs :project="$frontmatter.project" />

<div v-pre class="project-markdown-content text-lg line-height-4 mb-8">

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

</template>

<ConsultingBridge />

<AuditCTA />

<RelatedServices />

<ProjectNavigation :previous="$frontmatter.project?.previousProject" :next="$frontmatter.project?.nextProject" />

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>