---
title: Finding The Spots
description: Say goodbye to the chaos of location scouting host, book, and create in our spaces effortlessly.
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "Finding The Spots"
  description: "Say goodbye to the chaos of location scouting host, book, and create in our spaces effortlessly."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Leisure, travel, and tourism"
  year: "2024"
  link: "https://findingthespots.com/"
  codeLink: 
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20"
  stack: ["Javascript","Vuedotjs","vite","Axios","Express/black/white","jsonwebtokens/black/white","stripe","nodedotjs","MongoDB","Git","github/black/white","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/home/projects/fts.webp","alt":"Cover screen for application page"}]
  features: [{"text":"Secure user registration, login, and logout functionality."},{"text":"Role-based access for general users, property owners, and admins."},{"text":"Search for properties/spots by type, country, city, and time."},{"text":"Advanced filters to refine search results based on user preferences."},{"text":"Detailed property pages with full image galleries and spot information."},{"text":"Booking request system with date, time, and duration selection."},{"text":"Free cancellation within 24 hours with redirection to spot listings."},{"text":"Seamless and secure payment processing via Stripe for confirmed bookings."},{"text":"Email notifications for booking and payment confirmations (users & owners)."},{"text":"Property owners can list new spots with images and details."},{"text":"Admin verification process for new spot submissions."},{"text":"Responsive, mobile-friendly interface for seamless access across devices."},{"text":"Integrated APIs for authentication, spot listing, booking, search, and payments."},{"text":"Scalable backend architecture to support future growth and features."}]
  details: "## Project Overview\nA comprehensive **location-based marketplace platform** for discovering and booking unique spots/venues. Built as a **freelance project for FindingTheSpot** team, this is a **full-stack application** that connects spot owners with people looking for unique locations for events, photoshoots, meetings, or experiences.\n\n## Architecture\nThis is a **modern monorepo** with separate **client** and **server** applications, utilizing a **microservices-inspired architecture** with clear separation of concerns, role-based authentication, payment processing, and comprehensive booking management.\n\n### **Technology Stack**\n\n#### **Frontend (Client):**\n- **Vue.js 3.4.21** with Composition API\n- **TypeScript 5.4.0** for type safety\n- **PrimeVue 3.51.0** - Enterprise UI component library\n- **Vite 5.2.8** - Fast development and build tool\n- **Pinia 2.1.7** - State management\n- **Vue Router 4.3.0** - Client-side routing\n\n#### **Backend (Server):**\n- **Node.js** with **Express.js 4.18.2**\n- **MongoDB** with **Mongoose 8.1.0** ODM\n- **JWT Authentication** with refresh tokens\n- **Stripe 15.10.0** - Payment processing\n- **Multer** - File upload handling\n- **Nodemailer** - Email functionality\n\n#### **Development & Testing:**\n- **Playwright** - End-to-end testing\n- **Vitest** - Unit testing\n- **ESLint + Prettier** - Code quality\n- **Husky** - Git hooks\n- **TypeScript** - Type safety\n\n### **Root Directory Structure**\n\n```\nfts/\n├── client/                       # Frontend Vue.js application\n│   ├── src/                     # Source code\n│   ├── public/                  # Static assets\n│   ├── e2e/                     # End-to-end tests\n│   ├── package.json             # Frontend dependencies\n│   ├── vite.config.ts           # Vite configuration\n│   ├── playwright.config.ts     # E2E test configuration\n│   └── tsconfig.*.json          # TypeScript configurations\n├── server/                      # Backend Node.js application\n│   ├── controllers/             # Business logic handlers\n│   ├── models/                  # Database models\n│   ├── routes/                  # API route definitions\n│   ├── middlewares/             # Custom middleware\n│   ├── database/                # Database configuration\n│   ├── helpers/                 # Utility functions\n│   ├── validations/             # Input validation schemas\n│   ├── uploadedImages/          # File storage\n│   ├── build/                   # Production build\n│   └── server.js                # Main server file\n├── .github/                     # GitHub workflows\n├── .husky/                      # Git hooks\n├── .vscode/                     # VS Code settings\n├── package.json                 # Root package configuration\n├── pnpm-lock.yaml               # Package lock file\n└── README.md                    # Project documentation\n```\n\n## **Detailed Frontend Structure (`client/`)**\n\n### **Source Code Organization (`client/src/`)**\n\n```\nsrc/\n├── App.vue                      # Main application component\n├── main.ts                      # Application entry point\n├── components/                  # Reusable UI components\n│   ├── auth/                    # Authentication components\n│   │   ├── Login.vue\n│   │   └── Register.vue\n│   ├── booking/                 # Booking-related components\n│   │   ├── Banner.vue\n│   │   ├── Info.vue\n│   │   └── Booking.vue\n│   ├── layout/                  # Layout components\n│   │   ├── Footer.vue\n│   │   ├── Header.vue\n│   │   └── HeroBanner.vue\n│   ├── shared/                  # Shared utility components\n│   │   ├── Gallery.vue\n│   │   ├── Loader.vue\n│   │   ├── Spot.vue\n│   │   ├── Search.vue\n│   │   └── ConfirmTemplate.vue\n│   ├── UploadImages.vue         # Image upload component\n│   └── PaymentFailed.vue        # Payment failure handling\n├── views/                       # Page-level components\n│   ├── HomeView.vue             # Homepage\n│   ├── SpotsView.vue            # Spots listing\n│   ├── SpotDetailsView.vue      # Individual spot details\n│   ├── RegisterYourSpotView.vue # Spot registration\n│   ├── Payment.vue              # Payment processing\n│   ├── AboutView.vue            # About page\n│   ├── NotFoundView.vue         # 404 page\n│   ├── Privacy.vue              # Privacy policy\n│   ├── Terms.vue                # Terms of service\n│   └── spots/                   # Spot management views\n│       ├── AddSpotView.vue\n│       ├── EditSpotView.vue\n│       └── ListSpotsView.vue\n├── router/                      # Routing configuration\n│   ├── index.ts                 # Main router setup\n│   └── routes.ts                # Route definitions\n├── stores/                      # Pinia state management\n│   ├── [8 store modules for:\n│   ├── - Authentication\n│   ├── - User management\n│   ├── - Spots management\n│   ├── - Booking system\n│   ├── - Payment processing\n│   ├── - Location services\n│   ├── - Image uploads\n│   └── - Filtering & search]\n├── service/                     # API service layer\n│   ├── [14 service modules for:\n│   ├── - API client configuration\n│   ├── - Authentication services\n│   ├── - User services\n│   ├── - Spot services\n│   ├── - Booking services\n│   ├── - Payment services\n│   ├── - Location services\n│   ├── - Image upload services\n│   ├── - Token management\n│   └── - Error handling]\n├── models/                      # TypeScript interfaces\n│   ├── User.interface.ts\n│   ├── Spot.interface.ts\n│   ├── Booking.interface.ts\n│   └── Payment.interface.ts\n├── assets/                      # Static assets\n│   ├── images/\n│   ├── styles/\n│   └── icons/\n└── plugins/                     # Vue plugins configuration\n```\n\n## **Detailed Backend Structure (`server/`)**\n\n### **Core Server Components**\n\n```\nserver/\n├── server.js                    # Main server entry point\n├── models/                      # Database models (9 models)\n│   ├── user.model.js            # User schema and methods\n│   ├── spot.model.js            # Spot/venue schema\n│   ├── booking.model.js         # Booking management\n│   ├── payment.model.js         # Payment records\n│   ├── role.model.js            # User roles (admin, owner, user)\n│   ├── country.model.js         # Country data\n│   ├── city.model.js            # City data\n│   ├── refreshToken.model.js    # JWT refresh tokens\n│   └── index.js                 # Model exports\n├── controllers/                 # Business logic (8 controllers)\n│   ├── auth.controller.js       # Authentication logic\n│   ├── user.controller.js       # User management\n│   ├── spot.controller.js       # Spot CRUD operations\n│   ├── booking.controller.js    # Booking management\n│   ├── payment.controller.js    # Stripe payment processing\n│   ├── filter.controller.js     # Search and filtering\n│   ├── country.city.controller.js # Location services\n│   └── shared/\n│       └── upload.images.controller.js # Image upload handling\n├── routes/                      # API route definitions (7 route files)\n│   ├── auth.routes.js           # Authentication endpoints\n│   ├── user.routes.js           # User management endpoints\n│   ├── spot.routes.js           # Spot management endpoints\n│   ├── booking.routes.js        # Booking endpoints\n│   ├── payment.routes.js        # Payment endpoints\n│   ├── filter.routes.js         # Search and filter endpoints\n│   └── country.city.routes.js   # Location endpoints\n├── middlewares/                 # Custom middleware (7 middleware)\n│   ├── [Authentication middleware\n│   ├── - Authorization checks\n│   ├── - Role-based access control\n│   ├── - Input validation\n│   ├── - Error handling\n│   ├── - File upload processing\n│   └── - Rate limiting]\n├── database/                    # Database configuration\n│   ├── db.config.js             # MongoDB connection\n│   └── [Additional DB utilities]\n├── helpers/                     # Utility functions\n│   ├── util.js                  # Common utilities\n│   ├── [Email helpers\n│   ├── - File management\n│   ├── - Date utilities\n│   ├── - Validation helpers\n│   └── - Response formatters]\n├── validations/                 # Input validation schemas\n│   ├── [Validation rules for:\n│   ├── - User registration/login\n│   ├── - Spot creation/updates\n│   ├── - Booking submissions\n│   └── - Payment processing]\n├── configs/                     # Configuration files\n│   └── [App configurations]\n├── uploadedImages/              # File storage (66 uploaded files)\n└── build/                       # Production build output\n```\n\n## **Key Features & Functionality**\n\n### **Core Platform Features**\n- **Spot Discovery**: Browse and search unique venues/locations\n- **Detailed Listings**: Comprehensive spot information with image galleries\n- **Booking System**: Full booking workflow with calendar integration\n- **Payment Processing**: Secure payments via Stripe integration\n- **User Management**: Role-based authentication (admin, owner, user)\n- **Location Services**: Country and city-based filtering\n\n### **User Roles & Permissions**\n1. **Regular Users**: Browse spots, make bookings, manage their bookings\n2. **Spot Owners**: List their spots, manage bookings, update availability\n3. **Administrators**: Full platform management, user moderation\n\n### **Booking & Payment Flow**\n1. **Spot Discovery**: Users browse available spots with filters\n2. **Spot Details**: View comprehensive information, images, availability\n3. **Booking Request**: Select dates, submit booking with details\n4. **Payment Processing**: Secure payment via Stripe\n5. **Confirmation**: Email notifications and booking management\n6. **Communication**: In-platform messaging between users and owners\n\n### **Technical Features**\n- **Image Upload**: Multi-image upload with optimization\n- **Search & Filtering**: Advanced filtering by location, price, amenities\n- **Responsive Design**: Mobile-first approach with PrimeVue components\n- **Real-time Updates**: Dynamic content updates\n- **Email Notifications**: Automated booking confirmations and updates\n\n## **Development Workflow**\n\n### **Available Scripts**\n\n```bash\n# Root level commands\npnpm install           # Install all dependencies (client + server)\npnpm start             # Start both client and server concurrently\npnpm start:server      # Start only the backend server\npnpm start:client      # Start only the frontend client\npnpm format            # Format code in both client and server\npnpm clean             # Clean all node_modules and build files\npnpm build:prod        # Production build\n\n# Client-specific commands\ncd client\npnpm dev               # Development server\npnpm build             # Production build\npnpm test:unit         # Run unit tests\npnpm test:e2e          # Run end-to-end tests\npnpm lint              # ESLint code quality\npnpm format            # Prettier code formatting\n\n# Server-specific commands\ncd server\npnpm dev               # Development server with nodemon\npnpm lint              # ESLint for backend\npnpm format            # Prettier for backend\n```\n\n### **Environment Setup**\n\n1. **Prerequisites**: Node.js 18+, pnpm, MongoDB\n2. **Installation**: `pnpm install` (installs both client and server)\n3. **Environment**: `pnpm copy:env` (copies server environment template)\n4. **Database**: Set up MongoDB connection in server/.env\n5. **Stripe**: Configure Stripe keys for payment processing\n6. **Development**: `pnpm start` (starts both client and server)\n7. **Access**: \n   - Frontend: `http://localhost:5173/`\n   - Backend: `http://localhost:3000/`\n\n## **API Architecture**\n\n### **RESTful Endpoints**\n\n```\nAuthentication:\nPOST   /api/auth/register     # User registration\nPOST   /api/auth/login        # User login\nPOST   /api/auth/refresh      # Refresh JWT token\nPOST   /api/auth/logout       # User logout\n\nUser Management:\nGET    /api/users/profile     # Get user profile\nPUT    /api/users/profile     # Update user profile\nGET    /api/users/spots       # Get user's spots\n\nSpot Management:\nGET    /api/spots             # List all spots (with filters)\nGET    /api/spots/:id         # Get spot details\nPOST   /api/spots             # Create new spot (owner only)\nPUT    /api/spots/:id         # Update spot (owner only)\nDELETE /api/spots/:id         # Delete spot (owner only)\nPOST   /api/spots/images      # Upload spot images\n\nBooking Management:\nGET    /api/bookings          # List user's bookings\nPOST   /api/bookings          # Create new booking\nGET    /api/bookings/:id      # Get booking details\nPUT    /api/bookings/:id      # Update booking status\n\nPayment Processing:\nPOST   /api/payments/create-session  # Create Stripe session\nPOST   /webhook                      # Stripe webhook handler\n\nLocation Services:\nGET    /api/countries         # List countries\nGET    /api/cities            # List cities by country\n\nFiltering:\nGET    /api/filters/spots     # Advanced spot filtering\n```\n\n## **Security Features**\n\n### **Authentication & Authorization**\n- **JWT-based authentication** with refresh tokens\n- **Role-based access control** (RBAC)\n- **Password hashing** with bcrypt\n- **Route protection** on both client and server\n- **Session management** with secure token storage\n\n### **Data Protection**\n- **Input validation** on all endpoints\n- **File upload security** with type and size restrictions\n- **CORS configuration** for cross-origin requests\n- **Environment variable protection**\n- **MongoDB injection prevention**\n\n## **Payment Integration**\n\n### **Stripe Integration**\n- **Stripe Checkout** for secure payment processing\n- **Webhook handling** for payment confirmations\n- **Payment status tracking** and updates\n- **Refund capabilities** for cancellations\n- **Multiple currency support**\n\n## **Testing Strategy**\n\n### **Frontend Testing**\n- **Unit Tests**: Vitest for component testing\n- **E2E Tests**: Playwright for full user journey testing\n- **Component Testing**: Vue Test Utils integration\n- **Type Safety**: TypeScript for compile-time validation\n\n### **Backend Testing**\n- **API Testing**: Available endpoints for testing\n- **Database Testing**: Model validation\n- **Integration Testing**: Full workflow testing\n\n## **Deployment & DevOps**\n\n### **Development Tools**\n- **Husky**: Git hooks for code quality\n- **ESLint + Prettier**: Code formatting and linting\n- **Commitlint**: Conventional commit messages\n- **GitHub Actions**: CI/CD pipeline (.github/ folder)\n\n### **Production Considerations**\n- **Static file serving** from server build\n- **Image storage** in uploadedImages directory\n- **Environment-based configuration**\n- **Production optimizations** for both client and server\n\n## **Performance Optimizations**\n\n### **Frontend Optimizations**\n- **Vite** for fast development and optimized builds\n- **Code splitting** with Vue Router\n- **Component lazy loading**\n- **Image optimization** and lazy loading\n- **PrimeVue** for production-ready components\n\n### **Backend Optimizations**\n- **MongoDB indexing** for fast queries\n- **Image compression** for uploads\n- **API response caching** strategies\n- **Database query optimization**\n\n## **Business Logic**\n\n### **Marketplace Features**\n- **Commission-based model** (configurable)\n- **Spot verification** process\n- **Rating and review system** (ready for implementation)\n- **Search algorithm** with relevance scoring\n- **Availability management** with calendar integration\n\n### **User Experience**\n- **Responsive design** for all devices\n- **Intuitive booking flow**\n- **Real-time availability** updates\n- **Comprehensive search** and filtering\n- **Image galleries** with zoom capabilities\n\n---\n\n**Project**: FindingTheSpot (FTS)  \n**Team**: FindingTheSpot Development Team  \n**Developers**: Jiwan Ghosal, Naresh Battul  \n**Architecture**: Full-stack Vue.js + Node.js  \n**Database**: MongoDB with Mongoose  \n**Payment**: Stripe Integration  \n\n"
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
A comprehensive **location-based marketplace platform** for discovering and booking unique spots/venues. Built as a **freelance project for FindingTheSpot** team, this is a **full-stack application** that connects spot owners with people looking for unique locations for events, photoshoots, meetings, or experiences.

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
fts/
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
│   │   ├── Spot.vue
│   │   ├── Search.vue
│   │   └── ConfirmTemplate.vue
│   ├── UploadImages.vue         # Image upload component
│   └── PaymentFailed.vue        # Payment failure handling
├── views/                       # Page-level components
│   ├── HomeView.vue             # Homepage
│   ├── SpotsView.vue            # Spots listing
│   ├── SpotDetailsView.vue      # Individual spot details
│   ├── RegisterYourSpotView.vue # Spot registration
│   ├── Payment.vue              # Payment processing
│   ├── AboutView.vue            # About page
│   ├── NotFoundView.vue         # 404 page
│   ├── Privacy.vue              # Privacy policy
│   ├── Terms.vue                # Terms of service
│   └── spots/                   # Spot management views
│       ├── AddSpotView.vue
│       ├── EditSpotView.vue
│       └── ListSpotsView.vue
├── router/                      # Routing configuration
│   ├── index.ts                 # Main router setup
│   └── routes.ts                # Route definitions
├── stores/                      # Pinia state management
│   ├── [8 store modules for:
│   ├── - Authentication
│   ├── - User management
│   ├── - Spots management
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
│   ├── - Spot services
│   ├── - Booking services
│   ├── - Payment services
│   ├── - Location services
│   ├── - Image upload services
│   ├── - Token management
│   └── - Error handling]
├── models/                      # TypeScript interfaces
│   ├── User.interface.ts
│   ├── Spot.interface.ts
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
│   ├── spot.model.js            # Spot/venue schema
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
│   ├── spot.controller.js       # Spot CRUD operations
│   ├── booking.controller.js    # Booking management
│   ├── payment.controller.js    # Stripe payment processing
│   ├── filter.controller.js     # Search and filtering
│   ├── country.city.controller.js # Location services
│   └── shared/
│       └── upload.images.controller.js # Image upload handling
├── routes/                      # API route definitions (7 route files)
│   ├── auth.routes.js           # Authentication endpoints
│   ├── user.routes.js           # User management endpoints
│   ├── spot.routes.js           # Spot management endpoints
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
│   ├── - Spot creation/updates
│   ├── - Booking submissions
│   └── - Payment processing]
├── configs/                     # Configuration files
│   └── [App configurations]
├── uploadedImages/              # File storage (66 uploaded files)
└── build/                       # Production build output
```

## **Key Features & Functionality**

### **Core Platform Features**
- **Spot Discovery**: Browse and search unique venues/locations
- **Detailed Listings**: Comprehensive spot information with image galleries
- **Booking System**: Full booking workflow with calendar integration
- **Payment Processing**: Secure payments via Stripe integration
- **User Management**: Role-based authentication (admin, owner, user)
- **Location Services**: Country and city-based filtering

### **User Roles & Permissions**
1. **Regular Users**: Browse spots, make bookings, manage their bookings
2. **Spot Owners**: List their spots, manage bookings, update availability
3. **Administrators**: Full platform management, user moderation

### **Booking & Payment Flow**
1. **Spot Discovery**: Users browse available spots with filters
2. **Spot Details**: View comprehensive information, images, availability
3. **Booking Request**: Select dates, submit booking with details
4. **Payment Processing**: Secure payment via Stripe
5. **Confirmation**: Email notifications and booking management
6. **Communication**: In-platform messaging between users and owners

### **Technical Features**
- **Image Upload**: Multi-image upload with optimization
- **Search & Filtering**: Advanced filtering by location, price, amenities
- **Responsive Design**: Mobile-first approach with PrimeVue components
- **Real-time Updates**: Dynamic content updates
- **Email Notifications**: Automated booking confirmations and updates

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
GET    /api/users/spots       # Get user's spots

Spot Management:
GET    /api/spots             # List all spots (with filters)
GET    /api/spots/:id         # Get spot details
POST   /api/spots             # Create new spot (owner only)
PUT    /api/spots/:id         # Update spot (owner only)
DELETE /api/spots/:id         # Delete spot (owner only)
POST   /api/spots/images      # Upload spot images

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
GET    /api/filters/spots     # Advanced spot filtering
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
- **Spot verification** process
- **Rating and review system** (ready for implementation)
- **Search algorithm** with relevance scoring
- **Availability management** with calendar integration

### **User Experience**
- **Responsive design** for all devices
- **Intuitive booking flow**
- **Real-time availability** updates
- **Comprehensive search** and filtering
- **Image galleries** with zoom capabilities

---

**Project**: FindingTheSpot (FTS)  
**Team**: FindingTheSpot Development Team  
**Developers**: Jiwan Ghosal, Naresh Battul  
**Architecture**: Full-stack Vue.js + Node.js  
**Database**: MongoDB with Mongoose  
**Payment**: Stripe Integration  



<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>