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


