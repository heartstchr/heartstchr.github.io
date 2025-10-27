---
title: Momentum Incident Management
description: A structured process for identifying, analyzing, and resolving incidents that disrupt an organization's operations
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "Momentum Incident Management"
  description: "A structured process for identifying, analyzing, and resolving incidents that disrupt an organization's operations"
  software: "Web"
  schema: "https://schema.org/BusinessApplication"
  domain: "IT Service"
  year: "2025"
  link: "https://momentum-chi-brown.vercel.app/"
  codeLink: 
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%20"
  stack: ["vuedotjs","PrimeVue","vite/black/white","tailwindcss","nodedotjs","express/black/white","pnpm","swagger","mongodb","vercel/black/white","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/home/projects/momentum_incident_management.webp","alt":"Incident Management"},{"itemImageSrc":"/img/projects/momentum/swagger.webp","alt":"Momentum Incident Management - Swagger API documentation"},{"itemImageSrc":"/img/projects/momentum/expanded_incident.webp","alt":"Momentum Incident Management - Expanded incident view"},{"itemImageSrc":"/img/projects/momentum/sorting_searching.webp","alt":"Momentum Incident Management - Sorting and searching functionality"},{"itemImageSrc":"/img/projects/momentum/download_incidents.webp","alt":"Momentum Incident Management - Download incidents feature"},{"itemImageSrc":"/img/projects/momentum/incident_notes_task.webp","alt":"Momentum Incident Management - Incident notes and task management"},{"itemImageSrc":"/img/projects/momentum/edit_notes.webp","alt":"Momentum Incident Management - Edit notes functionality"},{"itemImageSrc":"/img/projects/momentum/view_notes.webp","alt":"Momentum Incident Management - View notes interface"},{"itemImageSrc":"/img/projects/momentum/edit_task.webp","alt":"Momentum Incident Management - Edit task functionality"},{"itemImageSrc":"/img/projects/momentum/edit_incident.webp","alt":"Momentum Incident Management - Edit incident interface"},{"itemImageSrc":"/img/projects/momentum/login.webp","alt":"Momentum Incident Management - Login page"},{"itemImageSrc":"/img/projects/momentum/register.webp","alt":"Momentum Incident Management - Registration page"}]
  features: [{"text":"No More Clunky UI – Nested tables & column-based filtering (text, date, select) make incident tracking effortless."},{"text":"Nested CRUD for Incidents & Tasks – Create, update, and manage tasks seamlessly, with an option to add notes."},{"text":"Choose & Create CIs – Define and manage configuration items with ease."},{"text":"Automate with Swagger APIs – Ready for CI/CD pipelines, making integrations a breeze."},{"text":"Seamless Deployment – Frontend & backend deployed on Vercel for high performance."},{"text":"MongoDB Seeding – Easily set up initial data for a smooth start."},{"text":"Swagger Documentation – <a href='https://momentum-chi-brown.vercel.app/api-docs' target='_blank'>Well-documented APIs</a> for easy collaboration and scaling."},{"text":"No Costly Subscriptions – A powerful alternative to expensive service management platforms"}]
  details: "## Project Overview\nThis is a **full-stack web application** that is called \"momentum\" internally and aims to replicate ServiceNow's IT service management capabilities.\n\n## Architecture\nThe project follows a **client-server architecture** with clear separation of concerns:\n\n### **Root Level Structure**\n- **Monorepo setup** with both client and server in the same repository\n- **Package management**: Uses `pnpm` for dependency management\n- **Development tools**: Includes Husky for git hooks, ESLint/Prettier for code formatting\n- **Deployment**: Configured for Vercel deployment\n\n```\nmomentum/\n├── client/                 # Frontend Vue.js application\n├── server/                 # Backend Node.js API\n├── .github/               # GitHub workflows and templates\n├── .husky/                # Git hooks configuration\n├── .vercel/               # Vercel deployment config\n├── .vscode/               # VS Code workspace settings\n├── package.json           # Root package configuration\n├── pnpm-lock.yaml         # Package lock file\n├── vercel.json            # Vercel deployment settings\n└── README.md              # Project documentation\n```\n\n### **Frontend (Client Directory)**\n\n#### **Technology Stack:**\n- **Vue.js 3** with TypeScript\n- **PrimeVue** UI component library (modern ServiceNow-like interface)\n- **Vite** for fast development and building\n- **Pinia** for state management\n- **Vue Router** for navigation\n- **Playwright** for end-to-end testing\n- **Vitest** for unit testing\n\n#### **Key Features:**\n- Authentication system (Login/Register components)\n- Incident/Ticket management forms\n- Task management\n- File upload capabilities (with file-saver)\n- Data export functionality (xlsx)\n- Form validation (vee-validate with yup schemas)\n- Rich text editing (Quill editor)\n- Modern responsive UI with PrimeFlex\n\n#### **Client Directory Structure:**\n```\nclient/\n├── src/\n│   ├── components/\n│   │   ├── auth/           # Login/Register components\n│   │   ├── layout/         # Header/Footer components\n│   │   ├── shared/         # Reusable components\n│   │   ├── TicketForm.vue  # Incident ticket form\n│   │   └── TaskForm.vue    # Task management form\n│   ├── stores/             # Pinia state management\n│   │   ├── auth.module.ts\n│   │   ├── incidents.module.ts\n│   │   ├── user.module.ts\n│   │   └── ...\n│   ├── service/            # API service layer\n│   ├── utils/              # Utility functions\n│   ├── App.vue             # Main application component\n│   └── main.ts             # Application entry point\n├── public/                 # Static assets\n├── package.json            # Frontend dependencies\n├── vite.config.ts          # Vite configuration\n├── tsconfig.json           # TypeScript configuration\n└── playwright.config.ts    # E2E test configuration\n```\n\n### **Backend (Server Directory)**\n\n#### **Technology Stack:**\n- **Node.js** with Express.js\n- **MongoDB** with Mongoose ODM\n- **JWT** authentication with refresh tokens\n- **Swagger** API documentation\n- **CommonJS modules** (`.cjs` files)\n\n#### **Key Features:**\n- **Models**: User, Incident, CI (Configuration Items), Roles, Refresh Tokens\n- **Authentication**: JWT-based with bcrypt password hashing\n- **File uploads**: Multer for handling image uploads\n- **Email functionality**: Nodemailer integration\n- **API documentation**: Swagger UI available\n- **CORS enabled** for cross-origin requests\n\n#### **Server Directory Structure:**\n```\nserver/\n├── controllers/            # Request handlers\n│   ├── auth.controller.cjs\n│   ├── user.controller.cjs\n│   └── shared/\n├── models/                 # Database models\n│   ├── user.model.cjs\n│   ├── incident.model.cjs\n│   ├── ci.model.cjs\n│   ├── role.model.cjs\n│   └── refreshToken.model.cjs\n├── routes/                 # API route definitions\n├── middlewares/            # Custom middleware\n├── database/               # Database configuration\n├── helpers/                # Utility functions\n├── validations/            # Input validation schemas\n├── configs/                # Application configuration\n├── uploadedImages/         # File upload storage\n├── build/                  # Compiled output\n├── server.cjs              # Main server file\n├── swagger.cjs             # API documentation setup\n└── package.json            # Backend dependencies\n```\n\n### **Development Workflow**\n\n#### **Available Scripts:**\n```bash\n# Install dependencies for both client and server\npnpm install\n\n# Start both client and server concurrently\npnpm start\n\n# Start only the server (runs on backend port)\npnpm start:server\n\n# Start only the client (runs on http://localhost:5173/)\npnpm start:client\n\n# Format code in both directories\npnpm format\n\n# Copy environment variables\npnpm copy:env\n\n# Clean all node_modules and build files\npnpm clean\n```\n\n#### **Environment Setup:**\n1. Clone the repository\n2. Run `pnpm install` to install all dependencies\n3. Run `pnpm copy:env` to set up environment variables\n4. Run `pnpm start` to start both client and server\n5. Access the application at `http://localhost:5173/`\n\n### **DevOps & Quality**\n- **Git hooks**: Husky for pre-commit actions\n- **Linting**: ESLint configuration for both frontend and backend\n- **Code formatting**: Prettier for consistent code style\n- **Commit standards**: Commitlint for conventional commits\n- **Testing**: Unit tests (Vitest) and E2E tests (Playwright)\n- **Deployment**: Vercel configuration for production deployment\n\n## ServiceNow-like Features\n\nBased on the structure, this clone implements:\n\n1. **Incident Management**: Ticket creation and tracking\n2. **Task Management**: Work item handling\n3. **Configuration Items (CI)**: IT asset management\n4. **User Management**: Role-based access control\n5. **Authentication**: Secure login/registration system\n6. **File Management**: Document/image upload capabilities\n7. **Reporting**: Data export and analysis features\n8. **API Documentation**: Swagger UI for API exploration\n\n## Technology Highlights\n\n### **Frontend Technologies:**\n- Vue 3 Composition API\n- TypeScript for type safety\n- PrimeVue for enterprise UI components\n- Pinia for reactive state management\n- Vite for fast development builds\n- Playwright for reliable E2E testing\n\n### **Backend Technologies:**\n- Express.js for robust API development\n- MongoDB for flexible document storage\n- Mongoose for elegant object modeling\n- JWT for secure authentication\n- Swagger for comprehensive API documentation\n- Multer for efficient file handling\n\nThis is a well-structured, production-ready application that demonstrates modern full-stack development practices while replicating core ServiceNow functionality for educational/demonstration purposes.\n\n\n"
  previousProject: {"name":"SR-22 Insurance Now","link":"/web-development-projects/sr-22-insurance-now/"}
  nextProject: {"name":"Finding The Spots","link":"/web-development-projects/finding-the-spots/"}
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
        <a v-if="$frontmatter.project.contact" :href="`/contact/?subject=${encodeURIComponent('Custom Request: ' + $frontmatter.project.name)}`"
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
      <h4 class="m-2 text-sm line-height-3" v-html="feature.text"></h4>
    </li>
  </ul>
</div>

## Project Overview
This is a **full-stack web application** that is called "momentum" internally and aims to replicate ServiceNow's IT service management capabilities.

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




<div class="flex justify-content-between align-items-center mt-6 pt-4 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.project.previousProject" :href="$frontmatter.project.previousProject.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-chevron-left mr-2"></i>
      <div class="flex flex-column">
        <span class="text-sm text-color-secondary">Previous Project</span>
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.project.previousProject.name }}</span>
      </div>
    </a>
  </div>
  <div class="flex-1 text-center">
    <a href="/web-development-projects/" class="no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-th-large mr-2"></i>
      All Projects
    </a>
  </div>
  <div class="flex-1 text-right">
    <a v-if="$frontmatter.project.nextProject" :href="$frontmatter.project.nextProject.link" class="flex align-items-center justify-content-end no-underline text-color-secondary hover:text-primary">
      <div class="flex flex-column text-right">
        <span class="text-sm text-color-secondary">Next Project</span>
        <span class="font-semibold" style="color: var(--theme-color)">{{ $frontmatter.project.nextProject.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2"></i>
    </a>
  </div>
</div>

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>