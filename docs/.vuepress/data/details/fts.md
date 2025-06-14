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

