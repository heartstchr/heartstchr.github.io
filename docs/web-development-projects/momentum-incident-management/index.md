---
title: "Momentum Incident Management"
description: "A structured process for identifying, analyzing, and resolving incidents that disrupt an organization's operations"
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Momentum Incident Management"
  description: "A structured process for identifying, analyzing, and resolving incidents that disrupt an organization's operations"
  software: "Web"
  schema: "https://schema.org/BusinessApplication"
  domain: "IT Service"
  year: "2025"
  price: 0
  currency: "USD"
  link: "https://momentum-chi-brown.vercel.app/"
  codeLink: ""
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20"
  stack: ["vuedotjs","PrimeVue","vite/black/white","tailwindcss","nodedotjs","express/black/white","pnpm","swagger","mongodb","vercel/black/white","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/home/projects/momentum_incident_management.webp","alt":"Incident Management"},{"itemImageSrc":"/img/projects/momentum/swagger.webp","alt":"Momentum Incident Management - Swagger API documentation"},{"itemImageSrc":"/img/projects/momentum/expanded_incident.webp","alt":"Momentum Incident Management - Expanded incident view"},{"itemImageSrc":"/img/projects/momentum/sorting_searching.webp","alt":"Momentum Incident Management - Sorting and searching functionality"},{"itemImageSrc":"/img/projects/momentum/download_incidents.webp","alt":"Momentum Incident Management - Download incidents feature"},{"itemImageSrc":"/img/projects/momentum/incident_notes_task.webp","alt":"Momentum Incident Management - Incident notes and task management"},{"itemImageSrc":"/img/projects/momentum/edit_notes.webp","alt":"Momentum Incident Management - Edit notes functionality"},{"itemImageSrc":"/img/projects/momentum/view_notes.webp","alt":"Momentum Incident Management - View notes interface"},{"itemImageSrc":"/img/projects/momentum/edit_task.webp","alt":"Momentum Incident Management - Edit task functionality"},{"itemImageSrc":"/img/projects/momentum/edit_incident.webp","alt":"Momentum Incident Management - Edit incident interface"},{"itemImageSrc":"/img/projects/momentum/login.webp","alt":"Momentum Incident Management - Login page"},{"itemImageSrc":"/img/projects/momentum/register.webp","alt":"Momentum Incident Management - Registration page"}]
  features: [{"text":"No More Clunky UI – Nested tables & column-based filtering (text, date, select) make incident tracking effortless."},{"text":"Nested CRUD for Incidents & Tasks – Create, update, and manage tasks seamlessly, with an option to add notes."},{"text":"Choose & Create CIs – Define and manage configuration items with ease."},{"text":"Automate with Swagger APIs – Ready for CI/CD pipelines, making integrations a breeze."},{"text":"Seamless Deployment – Frontend & backend deployed on Vercel for high performance."},{"text":"MongoDB Seeding – Easily set up initial data for a smooth start."},{"text":"Swagger Documentation – <a href='https://momentum-chi-brown.vercel.app/api-docs' target='_blank'>Well-documented APIs</a> for easy collaboration and scaling."},{"text":"No Costly Subscriptions – A powerful alternative to expensive service management platforms"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"SR-22 Insurance Now","link":"/web-development-projects/sr-22-insurance-now/"}
  nextProject: {"name":"Marketplace Booking Platform","link":"/web-development-projects/marketplace-booking-platform/"}
---

<ProjectHero :project="$frontmatter.project" />

<ProjectGallery :images="$frontmatter.project.images" />

<ProjectTabs v-if="$frontmatter.project?.perspective?.executive" :project="$frontmatter.project">

## Project Overview
This is a **full-stack web application** that is called "momentum" internally and aims to replicate ServiceNow's IT service management capabilities.

## Executive Summary

This project demonstrates how to build internal operational software that replaces expensive or bloated enterprise tooling with a focused, modern workflow system. It is a strong proof point for custom internal tools, process-heavy dashboards, and product architecture for business operations.

## Business Problem

Many teams outgrow spreadsheets and lightweight ticket tools but do not want the cost, complexity, or rigidity of large enterprise platforms. They need a system that fits their workflow, not a generic product that forces them to adapt around it.

## What I Built

- A full-stack incident and task management platform
- Role-based workflows for operations and internal teams
- File management, export capability, and structured form handling
- API-backed architecture that can support future automation and integrations

## Why It Matters

Internal software is often where a lot of business inefficiency hides. This project shows how targeted product architecture can create a cleaner operational system with less friction, better visibility, and room for future scaling.

## Best Fit If You Need Something Similar

This case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/), [Fractional CTO Strategy](/web-development-services/fractional-cto-and-advisory/), and [High-Performance API Design](/web-development-services/api-performance-and-integration/). It is especially relevant for internal portals, workflow tools, and operations software.

## Architecture
The project follows a **client-server architecture** with clear separation of concerns:

### **Root Level Structure**
- **Monorepo setup** with both client and server in the same repository
- **Package management**: Uses `pnpm` for dependency management
- **Development tools**: Includes Husky for git hooks, ESLint/Prettier for code formatting
- **Deployment**: Configured for Vercel deployment

```
momentum/
├── client/                 # Frontend Vue.js application
├── server/                 # Backend Node.js API
├── .github/               # GitHub workflows and templates
├── .husky/                # Git hooks configuration
├── .vercel/               # Vercel deployment config
├── .vscode/               # VS Code workspace settings
├── package.json           # Root package configuration
├── pnpm-lock.yaml         # Package lock file
├── vercel.json            # Vercel deployment settings
└── README.md              # Project documentation
```

### **Frontend (Client Directory)**

#### **Technology Stack:**
- **Vue.js 3** with TypeScript
- **PrimeVue** UI component library (modern ServiceNow-like interface)
- **Vite** for fast development and building
- **Pinia** for state management
- **Vue Router** for navigation
- **Playwright** for end-to-end testing
- **Vitest** for unit testing

#### **Key Features:**
- Authentication system (Login/Register components)
- Incident/Ticket management forms
- Task management
- File upload capabilities (with file-saver)
- Data export functionality (xlsx)
- Form validation (vee-validate with yup schemas)
- Rich text editing (Quill editor)
- Modern responsive UI with PrimeFlex

#### **Client Directory Structure:**
```
client/
├── src/
│   ├── components/
│   │   ├── auth/           # Login/Register components
│   │   ├── layout/         # Header/Footer components
│   │   ├── shared/         # Reusable components
│   │   ├── TicketForm.vue  # Incident ticket form
│   │   └── TaskForm.vue    # Task management form
│   ├── stores/             # Pinia state management
│   │   ├── auth.module.ts
│   │   ├── incidents.module.ts
│   │   ├── user.module.ts
│   │   └── ...
│   ├── service/            # API service layer
│   ├── utils/              # Utility functions
│   ├── App.vue             # Main application component
│   └── main.ts             # Application entry point
├── public/                 # Static assets
├── package.json            # Frontend dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── playwright.config.ts    # E2E test configuration
```

### **Backend (Server Directory)**

#### **Technology Stack:**
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** authentication with refresh tokens
- **Swagger** API documentation
- **CommonJS modules** (`.cjs` files)

#### **Key Features:**
- **Models**: User, Incident, CI (Configuration Items), Roles, Refresh Tokens
- **Authentication**: JWT-based with bcrypt password hashing
- **File uploads**: Multer for handling image uploads
- **Email functionality**: Nodemailer integration
- **API documentation**: Swagger UI available
- **CORS enabled** for cross-origin requests

#### **Server Directory Structure:**
```
server/
├── controllers/            # Request handlers
│   ├── auth.controller.cjs
│   ├── user.controller.cjs
│   └── shared/
├── models/                 # Database models
│   ├── user.model.cjs
│   ├── incident.model.cjs
│   ├── ci.model.cjs
│   ├── role.model.cjs
│   └── refreshToken.model.cjs
├── routes/                 # API route definitions
├── middlewares/            # Custom middleware
├── database/               # Database configuration
├── helpers/                # Utility functions
├── validations/            # Input validation schemas
├── configs/                # Application configuration
├── uploadedImages/         # File upload storage
├── build/                  # Compiled output
├── server.cjs              # Main server file
├── swagger.cjs             # API documentation setup
└── package.json            # Backend dependencies
```

### **Development Workflow**

#### **Available Scripts:**
```bash
# Install dependencies for both client and server
pnpm install

# Start both client and server concurrently
pnpm start

# Start only the server (runs on backend port)
pnpm start:server

# Start only the client (runs on http://localhost:5173/)
pnpm start:client

# Format code in both directories
pnpm format

# Copy environment variables
pnpm copy:env

# Clean all node_modules and build files
pnpm clean
```

#### **Environment Setup:**
1. Clone the repository
2. Run `pnpm install` to install all dependencies
3. Run `pnpm copy:env` to set up environment variables
4. Run `pnpm start` to start both client and server
5. Access the application at `http://localhost:5173/`

### **DevOps & Quality**
- **Git hooks**: Husky for pre-commit actions
- **Linting**: ESLint configuration for both frontend and backend
- **Code formatting**: Prettier for consistent code style
- **Commit standards**: Commitlint for conventional commits
- **Testing**: Unit tests (Vitest) and E2E tests (Playwright)
- **Deployment**: Vercel configuration for production deployment

## ServiceNow-like Features

Based on the structure, this clone implements:

1. **Incident Management**: Ticket creation and tracking
2. **Task Management**: Work item handling
3. **Configuration Items (CI)**: IT asset management
4. **User Management**: Role-based access control
5. **Authentication**: Secure login/registration system
6. **File Management**: Document/image upload capabilities
7. **Reporting**: Data export and analysis features
8. **API Documentation**: Swagger UI for API exploration

## Technology Highlights

### **Frontend Technologies:**
- Vue 3 Composition API
- TypeScript for type safety
- PrimeVue for enterprise UI components
- Pinia for reactive state management
- Vite for fast development builds
- Playwright for reliable E2E testing

### **Backend Technologies:**
- Express.js for robust API development
- MongoDB for flexible document storage
- Mongoose for elegant object modeling
- JWT for secure authentication
- Swagger for comprehensive API documentation
- Multer for efficient file handling

This is a well-structured, production-ready application that demonstrates modern full-stack development practices while replicating core ServiceNow functionality for educational/demonstration purposes.



</ProjectTabs>

<template v-else>

<ProjectTabs :project="$frontmatter.project" />

<div v-pre class="project-markdown-content text-lg line-height-4 mb-8">

## Project Overview
This is a **full-stack web application** that is called "momentum" internally and aims to replicate ServiceNow's IT service management capabilities.

## Executive Summary

This project demonstrates how to build internal operational software that replaces expensive or bloated enterprise tooling with a focused, modern workflow system. It is a strong proof point for custom internal tools, process-heavy dashboards, and product architecture for business operations.

## Business Problem

Many teams outgrow spreadsheets and lightweight ticket tools but do not want the cost, complexity, or rigidity of large enterprise platforms. They need a system that fits their workflow, not a generic product that forces them to adapt around it.

## What I Built

- A full-stack incident and task management platform
- Role-based workflows for operations and internal teams
- File management, export capability, and structured form handling
- API-backed architecture that can support future automation and integrations

## Why It Matters

Internal software is often where a lot of business inefficiency hides. This project shows how targeted product architecture can create a cleaner operational system with less friction, better visibility, and room for future scaling.

## Best Fit If You Need Something Similar

This case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/), [Fractional CTO Strategy](/web-development-services/fractional-cto-and-advisory/), and [High-Performance API Design](/web-development-services/api-performance-and-integration/). It is especially relevant for internal portals, workflow tools, and operations software.

## Architecture
The project follows a **client-server architecture** with clear separation of concerns:

### **Root Level Structure**
- **Monorepo setup** with both client and server in the same repository
- **Package management**: Uses `pnpm` for dependency management
- **Development tools**: Includes Husky for git hooks, ESLint/Prettier for code formatting
- **Deployment**: Configured for Vercel deployment

```
momentum/
├── client/                 # Frontend Vue.js application
├── server/                 # Backend Node.js API
├── .github/               # GitHub workflows and templates
├── .husky/                # Git hooks configuration
├── .vercel/               # Vercel deployment config
├── .vscode/               # VS Code workspace settings
├── package.json           # Root package configuration
├── pnpm-lock.yaml         # Package lock file
├── vercel.json            # Vercel deployment settings
└── README.md              # Project documentation
```

### **Frontend (Client Directory)**

#### **Technology Stack:**
- **Vue.js 3** with TypeScript
- **PrimeVue** UI component library (modern ServiceNow-like interface)
- **Vite** for fast development and building
- **Pinia** for state management
- **Vue Router** for navigation
- **Playwright** for end-to-end testing
- **Vitest** for unit testing

#### **Key Features:**
- Authentication system (Login/Register components)
- Incident/Ticket management forms
- Task management
- File upload capabilities (with file-saver)
- Data export functionality (xlsx)
- Form validation (vee-validate with yup schemas)
- Rich text editing (Quill editor)
- Modern responsive UI with PrimeFlex

#### **Client Directory Structure:**
```
client/
├── src/
│   ├── components/
│   │   ├── auth/           # Login/Register components
│   │   ├── layout/         # Header/Footer components
│   │   ├── shared/         # Reusable components
│   │   ├── TicketForm.vue  # Incident ticket form
│   │   └── TaskForm.vue    # Task management form
│   ├── stores/             # Pinia state management
│   │   ├── auth.module.ts
│   │   ├── incidents.module.ts
│   │   ├── user.module.ts
│   │   └── ...
│   ├── service/            # API service layer
│   ├── utils/              # Utility functions
│   ├── App.vue             # Main application component
│   └── main.ts             # Application entry point
├── public/                 # Static assets
├── package.json            # Frontend dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── playwright.config.ts    # E2E test configuration
```

### **Backend (Server Directory)**

#### **Technology Stack:**
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** authentication with refresh tokens
- **Swagger** API documentation
- **CommonJS modules** (`.cjs` files)

#### **Key Features:**
- **Models**: User, Incident, CI (Configuration Items), Roles, Refresh Tokens
- **Authentication**: JWT-based with bcrypt password hashing
- **File uploads**: Multer for handling image uploads
- **Email functionality**: Nodemailer integration
- **API documentation**: Swagger UI available
- **CORS enabled** for cross-origin requests

#### **Server Directory Structure:**
```
server/
├── controllers/            # Request handlers
│   ├── auth.controller.cjs
│   ├── user.controller.cjs
│   └── shared/
├── models/                 # Database models
│   ├── user.model.cjs
│   ├── incident.model.cjs
│   ├── ci.model.cjs
│   ├── role.model.cjs
│   └── refreshToken.model.cjs
├── routes/                 # API route definitions
├── middlewares/            # Custom middleware
├── database/               # Database configuration
├── helpers/                # Utility functions
├── validations/            # Input validation schemas
├── configs/                # Application configuration
├── uploadedImages/         # File upload storage
├── build/                  # Compiled output
├── server.cjs              # Main server file
├── swagger.cjs             # API documentation setup
└── package.json            # Backend dependencies
```

### **Development Workflow**

#### **Available Scripts:**
```bash
# Install dependencies for both client and server
pnpm install

# Start both client and server concurrently
pnpm start

# Start only the server (runs on backend port)
pnpm start:server

# Start only the client (runs on http://localhost:5173/)
pnpm start:client

# Format code in both directories
pnpm format

# Copy environment variables
pnpm copy:env

# Clean all node_modules and build files
pnpm clean
```

#### **Environment Setup:**
1. Clone the repository
2. Run `pnpm install` to install all dependencies
3. Run `pnpm copy:env` to set up environment variables
4. Run `pnpm start` to start both client and server
5. Access the application at `http://localhost:5173/`

### **DevOps & Quality**
- **Git hooks**: Husky for pre-commit actions
- **Linting**: ESLint configuration for both frontend and backend
- **Code formatting**: Prettier for consistent code style
- **Commit standards**: Commitlint for conventional commits
- **Testing**: Unit tests (Vitest) and E2E tests (Playwright)
- **Deployment**: Vercel configuration for production deployment

## ServiceNow-like Features

Based on the structure, this clone implements:

1. **Incident Management**: Ticket creation and tracking
2. **Task Management**: Work item handling
3. **Configuration Items (CI)**: IT asset management
4. **User Management**: Role-based access control
5. **Authentication**: Secure login/registration system
6. **File Management**: Document/image upload capabilities
7. **Reporting**: Data export and analysis features
8. **API Documentation**: Swagger UI for API exploration

## Technology Highlights

### **Frontend Technologies:**
- Vue 3 Composition API
- TypeScript for type safety
- PrimeVue for enterprise UI components
- Pinia for reactive state management
- Vite for fast development builds
- Playwright for reliable E2E testing

### **Backend Technologies:**
- Express.js for robust API development
- MongoDB for flexible document storage
- Mongoose for elegant object modeling
- JWT for secure authentication
- Swagger for comprehensive API documentation
- Multer for efficient file handling

This is a well-structured, production-ready application that demonstrates modern full-stack development practices while replicating core ServiceNow functionality for educational/demonstration purposes.



</div>

</template>

<ConsultingBridge />

<AuditCTA />

<RelatedServices />

<ProjectNavigation :previous="$frontmatter.project?.previousProject" :next="$frontmatter.project?.nextProject" />

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>