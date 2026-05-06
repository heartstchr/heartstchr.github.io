---
title: Tech Create
description: A landing page for digital solutions through innovative software development.
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Tech Create"
  description: "A landing page for digital solutions through innovative software development."
  software: "Web"
  schema: "https://schema.org/BusinessApplication"
  domain: "IT Service"
  year: "2025"
  price: 0
  currency: USD
  link: "https://techcreate.vercel.app/"
  codeLink: 
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20a%20custom%20code%20solution%20for%"
  stack: ["Vuedotjs","PrimeVue","CSS3","vercel/black/white","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/home/projects/tech_create.webp","alt":"Tech Create - Landing page"}]
  features: [{"text":"Responsive Design: Seamless experience across devices."},{"text":"Component-Based Architecture: Efficient and scalable codebase."},{"text":"Modern UI/UX: Clean aesthetics with intuitive navigation"}]
  perspective: {"executive":"","technical":""}
  details: "## Project Overview\nA modern **creative agency website** built with **Vue.js 3** and **PrimeVue**, showcasing digital services including **programming & development**, **game development**, **art & animation**, and **interactive entertainment**. This is a **Stack Seekers project** featuring a sleek, professional design with video backgrounds and portfolio showcases.\n\n## Executive Summary\n\nThis project is a brand-and-demand example rather than a workflow-heavy app. It shows how to package a creative technology business into a polished, conversion-friendly frontend experience with strong visual identity, responsive execution, and reusable section architecture.\n\n## Business Problem\n\nService businesses often need a site that looks premium enough to build trust while still being lightweight, fast, and easy to extend. Many agency sites look decorative but do not translate well into scalable frontend systems.\n\n## What I Built\n\n- A Vue-based agency website with a strong visual identity\n- Responsive section architecture using PrimeVue and PrimeFlex\n- A polished presentation layer for multi-service positioning\n- A reusable frontend structure suitable for future growth and content expansion\n\n## Why It Matters\n\nThis kind of project is commercially useful because brand presentation often decides whether a service business gets shortlisted. It also demonstrates frontend discipline beyond pure dashboards or internal tools.\n\n## Best Fit If You Need Something Similar\n\nThis case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/) and [Fractional CTO Strategy](/web-development-services/fractional-cto-and-advisory/). It is relevant for branded service websites, polished web presence upgrades, and frontend modernization.\n\n## Architecture\nThis is a **single-page application (SPA)** built with **Vue.js 3** using the **Composition API**, featuring a modern component-based architecture with **PrimeVue** for enterprise-grade UI components and **PrimeFlex** for responsive layouts.\n\n### **Technology Stack**\n\n#### **Frontend Framework:**\n- **Vue.js 3.5.13** with Composition API\n- **Vue Router 4.5.0** for client-side routing\n- **Vite 6.0.11** - Next-generation build tool\n- **JavaScript (ES6+)** - No TypeScript for simplicity\n\n#### **UI Framework & Styling:**\n- **PrimeVue 4.2.5** - Enterprise Vue component library\n- **PrimeFlex 3.3.1** - CSS utility framework\n- **PrimeIcons 7.0.0** - Icon library\n- **Aura Theme** - Modern PrimeVue theme\n- **Custom CSS** with Google Fonts integration\n\n#### **Development Tools:**\n- **ESLint 9.18.0** - Code linting\n- **Prettier 3.4.2** - Code formatting\n- **Vue DevTools** - Development debugging\n- **Zod 3.24.2** - Schema validation (ready for forms)\n\n#### **Build & Deployment:**\n- **Vite** for fast development and optimized production builds\n- **Auto-import resolver** for PrimeVue components\n- **Rollup** bundling for production\n\n### **Root Directory Structure**\n\n```\ntechcreate/\n├── src/                         # Main source code\n│   ├── components/             # Reusable Vue components\n│   ├── views/                 # Page-level components\n│   ├── router/                # Vue Router configuration\n│   ├── assets/                # Stylesheets and static assets\n│   ├── App.vue                # Root application component\n│   └── main.js                # Application entry point\n├── public/                      # Static public assets\n│   ├── *.webp                  # Service showcase images\n│   ├── *.svg                  # Icons and logos\n│   └── favicon.ico            # Site favicon\n├── dist/                        # Production build output\n├── node_modules/                # Dependencies\n├── .vscode/                     # VS Code configuration\n├── package.json                 # Project dependencies and scripts\n├── pnpm-lock.yaml               # Package lock file\n├── vite.config.js               # Vite configuration\n├── eslint.config.js             # ESLint configuration\n├── .prettierrc.json             # Prettier configuration\n├── index.html                   # HTML entry point\n└── README.md                    # Project documentation\n```\n\n## **Detailed Source Structure (`src/`)**\n\n### **Application Entry Point**\n\n```\nsrc/\n├── main.js                      # Vue app initialization and plugins\n├── App.vue                      # Root component with layout structure\n└── router/\n    └── index.js                 # Vue Router configuration\n```\n\n### **Components Architecture (`src/components/`)**\n\n```\ncomponents/\n└── layout/                      # Layout-specific components\n    ├── Header.vue               # Navigation header with scroll effects\n    └── Footer.vue               # Site footer\n```\n\n### **Views/Pages (`src/views/`)**\n\n```\nviews/\n├── HomeView.vue                 # Main homepage with all sections\n└── NotFoundView.vue             # 404 error page\n```\n\n### **Styling & Assets (`src/assets/`)**\n\n```\nassets/\n├── main.css                     # Main stylesheet imports\n└── base.css                     # Base styles and CSS variables\n```\n\n### **Static Assets (`public/`)**\n\n```\npublic/\n├── favicon.ico                  # Site favicon\n├── headerLogo.svg               # Company logo\n├── Service Images:              # Service showcase images\n│   ├── dashboard.webp            # Programming & Development\n│   ├── fantacy.webp              # Game Development\n│   ├── character.webp            # Art & Animation\n│   └── digital.webp              # Digital solutions\n└── Service Icons:               # Service category icons\n    ├── iaa.svg                  # Art & Animation icon\n    ├── igd.svg                  # Game Development icon\n    ├── iie.svg                  # Interactive Entertainment icon\n    └── ipd.svg                  # Programming & Development icon\n```\n\n## **Key Features & Functionality**\n\n### **Homepage Sections**\n1. **Hero Section**: Full-screen video background with company tagline\n2. **Services Section**: Four main service categories with images\n3. **Featured Work**: Portfolio showcase with video/image galleries\n4. **Contact Section**: Contact form with name, email, and message fields\n\n### **Service Categories**\n1. **Programming & Development**\n   - Custom software solutions\n   - Business-tailored applications\n\n2. **Game Development**\n   - Multi-platform gaming experiences\n   - Interactive entertainment\n\n3. **Art & Animation**\n   - Visual design and animations\n   - Creative content production\n\n4. **Interactive & Entertainment**\n   - Cutting-edge technology experiences\n   - Immersive digital solutions\n\n### **Technical Features**\n- **Responsive Design**: Mobile-first approach with PrimeFlex grid system\n- **Video Backgrounds**: Auto-playing background videos with fallback images\n- **Smooth Scrolling**: Anchor navigation between sections\n- **Dynamic Header**: Header background changes on scroll\n- **Portfolio Gallery**: Featured work with video previews\n- **Contact Form**: Integrated form components (ready for backend integration)\n\n## **Component Details**\n\n### **App.vue - Root Component**\n```vue\n<template>\n  <Header />\n  <RouterView />\n  <Footer />\n</template>\n```\n- Simple layout structure with header, main content, and footer\n- Uses Vue Router for page navigation\n\n### **Header.vue - Navigation Component**\n**Features:**\n- Fixed position navigation\n- Scroll-based background color change\n- Smooth anchor link navigation to sections\n- Company branding (\"Koro\")\n- Navigation links: Home, Services, Work, Contact\n\n**Reactive Behavior:**\n- Transparent gradient background initially\n- Solid white background after scrolling 400px\n- Text color changes from white to black on scroll\n\n### **HomeView.vue - Main Page Component**\n**Sections:**\n\n1. **Hero Video Section**\n   - Full-width background video\n   - Overlay content with company tagline\n   - \"Crafting Digital Excellence\" headline\n   - Call-to-action button\n\n2. **Services Grid**\n   - Responsive 4-column layout (mobile: 1 column)\n   - Service cards with images, titles, and descriptions\n   - Data-driven from reactive `services` array\n\n3. **Featured Work Portfolio**\n   - 3-column responsive grid\n   - Video/image showcase with fallback handling\n   - Project titles and descriptions\n   - Smart video loading with error handling\n\n4. **Contact Form**\n   - Name, email, and message fields\n   - PrimeVue form components\n   - Ready for backend integration\n   - Responsive layout\n\n## **Vue.js Implementation Details**\n\n### **Composition API Usage**\n```javascript\n// Reactive data management\nconst form = ref({})\nconst services = ref([...])\nconst featured = ref([...])\nconst showImage = ref([])\n\n// Video handling logic\nwatch(featured, (newVal) => {\n  showImage.value = newVal.map(feature => !feature.video);\n}, { deep: true, immediate: true });\n\nconst handleVideoError = (index) => {\n  showImage.value[index] = true;\n};\n```\n\n### **Routing Configuration**\n```javascript\nconst routes = [\n  {\n    path: '/',\n    name: 'home',\n    component: HomeView,\n  },\n  {\n    path: '/:pathMatch(.*)*',\n    name: 'Not found',\n    component: () => import('@/views/NotFoundView.vue'),\n  },\n]\n```\n\n## **PrimeVue Integration**\n\n### **Theme Configuration**\n```javascript\napp.use(PrimeVue, {\n  ripple: true,\n  theme: {\n    preset: Aura,\n    options: {\n      prefix: 'p',\n      darkModeSelector: false,\n      cssLayer: false,\n    },\n  },\n})\n```\n\n### **Components Used**\n- **Button**: Call-to-action buttons with custom styling\n- **InputText**: Form input fields\n- **Textarea**: Multi-line message input\n- **Auto-import**: Automatic component importing via resolver\n\n### **Styling Integration**\n- **PrimeFlex**: Utility-first CSS framework\n- **PrimeIcons**: Icon library integration\n- **Custom CSS**: Additional styling for video backgrounds and layouts\n\n## **Development Workflow**\n\n### **Available Scripts**\n\n```bash\n# Development\nnpm run dev          # Start Vite development server\n\n# Building\nnpm run build        # Production build with Vite\nnpm run preview      # Preview production build\n\n# Code Quality\nnpm run lint         # ESLint code linting with auto-fix\nnpm run format       # Prettier code formatting\n```\n\n### **Environment Setup**\n\n1. **Prerequisites**: Node.js 18+, npm/pnpm\n2. **Installation**: `npm install`\n3. **Development**: `npm run dev`\n4. **Access**: `http://localhost:5173/`\n5. **Building**: `npm run build`\n\n## **Vite Configuration**\n\n```javascript\nexport default defineConfig({\n  plugins: [\n    vue(),\n    Components({\n      resolvers: [PrimeVueResolver()],\n    }),\n  ],\n  resolve: {\n    alias: {\n      '@': fileURLToPath(new URL('./src', import.meta.url)),\n    },\n  },\n})\n```\n\n**Key Features:**\n- **Vue plugin**: Vue.js integration\n- **Auto-import**: Automatic PrimeVue component importing\n- **Path aliases**: `@` for `src/` directory\n- **Fast HMR**: Hot module replacement for development\n\n## **Styling Architecture**\n\n### **CSS Framework Stack**\n1. **PrimeFlex**: Utility-first CSS (similar to Tailwind)\n2. **PrimeVue**: Component-specific styles\n3. **Custom CSS**: Brand-specific styling\n4. **Google Fonts**: Typography (Inter, Electrolize, Inconsolata)\n\n### **Responsive Design**\n- **Mobile-first**: Responsive breakpoints\n- **Flexbox layouts**: Modern CSS layouts\n- **Grid system**: PrimeFlex responsive grid\n- **Utility classes**: Spacing, typography, colors\n\n### **Visual Design Elements**\n- **Video backgrounds**: Hero section with auto-playing video\n- **Gradient overlays**: Header background transitions\n- **Shadow effects**: Card components with depth\n- **Smooth animations**: Hover effects and transitions\n\n## **Performance Optimizations**\n\n### **Build Optimizations**\n- **Vite bundling**: Fast build times and optimized output\n- **Tree shaking**: Unused code elimination\n- **Code splitting**: Lazy loading for routes\n- **Asset optimization**: Image and video compression\n\n### **Runtime Optimizations**\n- **Lazy loading**: Route-based code splitting\n- **Component auto-import**: Reduced bundle size\n- **Video handling**: Graceful fallbacks for video errors\n- **Responsive images**: Optimized loading for different screen sizes\n\n## **SEO & Accessibility**\n\n### **HTML Structure**\n- **Semantic HTML**: Proper heading hierarchy\n- **Meta tags**: Basic SEO optimization\n- **DNS prefetch**: Performance optimization for external resources\n- **Accessibility**: Screen reader friendly structure\n\n### **Performance Features**\n- **Preconnect**: Google Fonts optimization\n- **DNS prefetch**: Social media and CDN links\n- **Favicon**: Brand identity\n- **Viewport meta**: Mobile optimization\n\n## **Business Focus**\n\n### **Brand Identity**\n- **Company Name**: \"Koro\"\n- **Tagline**: \"Crafting Digital Excellence\"\n- **Value Proposition**: Transform ideas into powerful digital solutions\n\n### **Service Portfolio**\n1. **Software Development**: Custom business solutions\n2. **Gaming**: Cross-platform entertainment\n3. **Creative Services**: Visual design and animation\n4. **Interactive Media**: Cutting-edge technology experiences\n\n### **Client Engagement**\n- **Portfolio showcase**: Featured work with video previews\n- **Contact form**: Direct client communication\n- **Professional presentation**: High-quality visuals and descriptions\n\n## **Future Enhancements Ready**\n\n### **Form Integration**\n- **Zod validation**: Schema validation ready\n- **Backend API**: Contact form submission\n- **Email integration**: Automated responses\n\n### **Content Management**\n- **Dynamic content**: Services and portfolio from API\n- **Admin panel**: Content management system\n- **Blog integration**: Company updates and insights\n\n### **Advanced Features**\n- **Animations**: GSAP or Framer Motion integration\n- **3D elements**: Three.js for interactive experiences\n- **Performance analytics**: User interaction tracking\n\n***\n\n**Project**: TechCreate (Koro)  \n**Organization**: Stack Seekers  \n**Type**: Creative Agency Website  \n**Framework**: Vue.js 3 + PrimeVue  \n**Build Tool**: Vite  \n**Focus**: Digital Services Portfolio\n"
  previousProject: {"name":"Emerald Design System","link":"/web-development-projects/emerald-design-system/"}
  nextProject: {"name":"Yit Plus","link":"/web-development-projects/yit-plus/"}
---

<section class="mt-4 mb-6">
  <div class="grid align-items-center">
    <div class="col-12 lg:col-8">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
      <h1 class="text-4xl md:text-6xl font-bold mb-3 mt-0 line-height-2">{{$frontmatter.project.name}}</h1>
      <p class="text-xl opacity-70 line-height-3 max-w-30rem">{{$frontmatter.project.description}}</p>
    </div>
    <div class="col-12 lg:col-4">
      <div class="surface-card p-4 border-round-2xl shadow-2 border-1 border-100">
        <div class="flex align-items-center gap-3 mb-3">
          <i class="pi pi-clock text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Timeline</div>
            <div class="font-bold">{{$frontmatter.project.year}}</div>
          </div>
        </div>
        <div class="flex align-items-center gap-3 mb-3">
          <i class="pi pi-briefcase text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Industry</div>
            <div class="font-bold">{{$frontmatter.project.domain}}</div>
          </div>
        </div>
        <div class="flex align-items-center gap-3">
          <i class="pi pi-bolt text-primary"></i>
          <div>
            <div class="text-xs opacity-50 uppercase font-bold">Status</div>
            <div class="font-bold">Scale & Growth</div>
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

<TabView class="project-perspective-tabs mb-8" v-if="$frontmatter.project.perspective?.executive">
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
      <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
      <div v-pre class="project-markdown-content text-lg line-height-4">

## Project Overview
A modern **creative agency website** built with **Vue.js 3** and **PrimeVue**, showcasing digital services including **programming & development**, **game development**, **art & animation**, and **interactive entertainment**. This is a **Stack Seekers project** featuring a sleek, professional design with video backgrounds and portfolio showcases.

## Executive Summary

This project is a brand-and-demand example rather than a workflow-heavy app. It shows how to package a creative technology business into a polished, conversion-friendly frontend experience with strong visual identity, responsive execution, and reusable section architecture.

## Business Problem

Service businesses often need a site that looks premium enough to build trust while still being lightweight, fast, and easy to extend. Many agency sites look decorative but do not translate well into scalable frontend systems.

## What I Built

- A Vue-based agency website with a strong visual identity
- Responsive section architecture using PrimeVue and PrimeFlex
- A polished presentation layer for multi-service positioning
- A reusable frontend structure suitable for future growth and content expansion

## Why It Matters

This kind of project is commercially useful because brand presentation often decides whether a service business gets shortlisted. It also demonstrates frontend discipline beyond pure dashboards or internal tools.

## Best Fit If You Need Something Similar

This case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/) and [Fractional CTO Strategy](/web-development-services/fractional-cto-and-advisory/). It is relevant for branded service websites, polished web presence upgrades, and frontend modernization.

## Architecture
This is a **single-page application (SPA)** built with **Vue.js 3** using the **Composition API**, featuring a modern component-based architecture with **PrimeVue** for enterprise-grade UI components and **PrimeFlex** for responsive layouts.

### **Technology Stack**

#### **Frontend Framework:**
- **Vue.js 3.5.13** with Composition API
- **Vue Router 4.5.0** for client-side routing
- **Vite 6.0.11** - Next-generation build tool
- **JavaScript (ES6+)** - No TypeScript for simplicity

#### **UI Framework & Styling:**
- **PrimeVue 4.2.5** - Enterprise Vue component library
- **PrimeFlex 3.3.1** - CSS utility framework
- **PrimeIcons 7.0.0** - Icon library
- **Aura Theme** - Modern PrimeVue theme
- **Custom CSS** with Google Fonts integration

#### **Development Tools:**
- **ESLint 9.18.0** - Code linting
- **Prettier 3.4.2** - Code formatting
- **Vue DevTools** - Development debugging
- **Zod 3.24.2** - Schema validation (ready for forms)

#### **Build & Deployment:**
- **Vite** for fast development and optimized production builds
- **Auto-import resolver** for PrimeVue components
- **Rollup** bundling for production

### **Root Directory Structure**

```
techcreate/
├── src/                         # Main source code
│   ├── components/             # Reusable Vue components
│   ├── views/                 # Page-level components
│   ├── router/                # Vue Router configuration
│   ├── assets/                # Stylesheets and static assets
│   ├── App.vue                # Root application component
│   └── main.js                # Application entry point
├── public/                      # Static public assets
│   ├── *.webp                  # Service showcase images
│   ├── *.svg                  # Icons and logos
│   └── favicon.ico            # Site favicon
├── dist/                        # Production build output
├── node_modules/                # Dependencies
├── .vscode/                     # VS Code configuration
├── package.json                 # Project dependencies and scripts
├── pnpm-lock.yaml               # Package lock file
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── .prettierrc.json             # Prettier configuration
├── index.html                   # HTML entry point
└── README.md                    # Project documentation
```

## **Detailed Source Structure (`src/`)**

### **Application Entry Point**

```
src/
├── main.js                      # Vue app initialization and plugins
├── App.vue                      # Root component with layout structure
└── router/
    └── index.js                 # Vue Router configuration
```

### **Components Architecture (`src/components/`)**

```
components/
└── layout/                      # Layout-specific components
    ├── Header.vue               # Navigation header with scroll effects
    └── Footer.vue               # Site footer
```

### **Views/Pages (`src/views/`)**

```
views/
├── HomeView.vue                 # Main homepage with all sections
└── NotFoundView.vue             # 404 error page
```

### **Styling & Assets (`src/assets/`)**

```
assets/
├── main.css                     # Main stylesheet imports
└── base.css                     # Base styles and CSS variables
```

### **Static Assets (`public/`)**

```
public/
├── favicon.ico                  # Site favicon
├── headerLogo.svg               # Company logo
├── Service Images:              # Service showcase images
│   ├── dashboard.webp            # Programming & Development
│   ├── fantacy.webp              # Game Development
│   ├── character.webp            # Art & Animation
│   └── digital.webp              # Digital solutions
└── Service Icons:               # Service category icons
    ├── iaa.svg                  # Art & Animation icon
    ├── igd.svg                  # Game Development icon
    ├── iie.svg                  # Interactive Entertainment icon
    └── ipd.svg                  # Programming & Development icon
```

## **Key Features & Functionality**

### **Homepage Sections**
1. **Hero Section**: Full-screen video background with company tagline
2. **Services Section**: Four main service categories with images
3. **Featured Work**: Portfolio showcase with video/image galleries
4. **Contact Section**: Contact form with name, email, and message fields

### **Service Categories**
1. **Programming & Development**
   - Custom software solutions
   - Business-tailored applications

2. **Game Development**
   - Multi-platform gaming experiences
   - Interactive entertainment

3. **Art & Animation**
   - Visual design and animations
   - Creative content production

4. **Interactive & Entertainment**
   - Cutting-edge technology experiences
   - Immersive digital solutions

### **Technical Features**
- **Responsive Design**: Mobile-first approach with PrimeFlex grid system
- **Video Backgrounds**: Auto-playing background videos with fallback images
- **Smooth Scrolling**: Anchor navigation between sections
- **Dynamic Header**: Header background changes on scroll
- **Portfolio Gallery**: Featured work with video previews
- **Contact Form**: Integrated form components (ready for backend integration)

## **Component Details**

### **App.vue - Root Component**
```vue
<template>
  <Header />
  <RouterView />
  <Footer />
</template>
```
- Simple layout structure with header, main content, and footer
- Uses Vue Router for page navigation

### **Header.vue - Navigation Component**
**Features:**
- Fixed position navigation
- Scroll-based background color change
- Smooth anchor link navigation to sections
- Company branding ("Koro")
- Navigation links: Home, Services, Work, Contact

**Reactive Behavior:**
- Transparent gradient background initially
- Solid white background after scrolling 400px
- Text color changes from white to black on scroll

### **HomeView.vue - Main Page Component**
**Sections:**

1. **Hero Video Section**
   - Full-width background video
   - Overlay content with company tagline
   - "Crafting Digital Excellence" headline
   - Call-to-action button

2. **Services Grid**
   - Responsive 4-column layout (mobile: 1 column)
   - Service cards with images, titles, and descriptions
   - Data-driven from reactive `services` array

3. **Featured Work Portfolio**
   - 3-column responsive grid
   - Video/image showcase with fallback handling
   - Project titles and descriptions
   - Smart video loading with error handling

4. **Contact Form**
   - Name, email, and message fields
   - PrimeVue form components
   - Ready for backend integration
   - Responsive layout

## **Vue.js Implementation Details**

### **Composition API Usage**
```javascript
// Reactive data management
const form = ref({})
const services = ref([...])
const featured = ref([...])
const showImage = ref([])

// Video handling logic
watch(featured, (newVal) => {
  showImage.value = newVal.map(feature => !feature.video);
}, { deep: true, immediate: true });

const handleVideoError = (index) => {
  showImage.value[index] = true;
};
```

### **Routing Configuration**
```javascript
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]
```

## **PrimeVue Integration**

### **Theme Configuration**
```javascript
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: false,
      cssLayer: false,
    },
  },
})
```

### **Components Used**
- **Button**: Call-to-action buttons with custom styling
- **InputText**: Form input fields
- **Textarea**: Multi-line message input
- **Auto-import**: Automatic component importing via resolver

### **Styling Integration**
- **PrimeFlex**: Utility-first CSS framework
- **PrimeIcons**: Icon library integration
- **Custom CSS**: Additional styling for video backgrounds and layouts

## **Development Workflow**

### **Available Scripts**

```bash
# Development
npm run dev          # Start Vite development server

# Building
npm run build        # Production build with Vite
npm run preview      # Preview production build

# Code Quality
npm run lint         # ESLint code linting with auto-fix
npm run format       # Prettier code formatting
```

### **Environment Setup**

1. **Prerequisites**: Node.js 18+, npm/pnpm
2. **Installation**: `npm install`
3. **Development**: `npm run dev`
4. **Access**: `http://localhost:5173/`
5. **Building**: `npm run build`

## **Vite Configuration**

```javascript
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

**Key Features:**
- **Vue plugin**: Vue.js integration
- **Auto-import**: Automatic PrimeVue component importing
- **Path aliases**: `@` for `src/` directory
- **Fast HMR**: Hot module replacement for development

## **Styling Architecture**

### **CSS Framework Stack**
1. **PrimeFlex**: Utility-first CSS (similar to Tailwind)
2. **PrimeVue**: Component-specific styles
3. **Custom CSS**: Brand-specific styling
4. **Google Fonts**: Typography (Inter, Electrolize, Inconsolata)

### **Responsive Design**
- **Mobile-first**: Responsive breakpoints
- **Flexbox layouts**: Modern CSS layouts
- **Grid system**: PrimeFlex responsive grid
- **Utility classes**: Spacing, typography, colors

### **Visual Design Elements**
- **Video backgrounds**: Hero section with auto-playing video
- **Gradient overlays**: Header background transitions
- **Shadow effects**: Card components with depth
- **Smooth animations**: Hover effects and transitions

## **Performance Optimizations**

### **Build Optimizations**
- **Vite bundling**: Fast build times and optimized output
- **Tree shaking**: Unused code elimination
- **Code splitting**: Lazy loading for routes
- **Asset optimization**: Image and video compression

### **Runtime Optimizations**
- **Lazy loading**: Route-based code splitting
- **Component auto-import**: Reduced bundle size
- **Video handling**: Graceful fallbacks for video errors
- **Responsive images**: Optimized loading for different screen sizes

## **SEO & Accessibility**

### **HTML Structure**
- **Semantic HTML**: Proper heading hierarchy
- **Meta tags**: Basic SEO optimization
- **DNS prefetch**: Performance optimization for external resources
- **Accessibility**: Screen reader friendly structure

### **Performance Features**
- **Preconnect**: Google Fonts optimization
- **DNS prefetch**: Social media and CDN links
- **Favicon**: Brand identity
- **Viewport meta**: Mobile optimization

## **Business Focus**

### **Brand Identity**
- **Company Name**: "Koro"
- **Tagline**: "Crafting Digital Excellence"
- **Value Proposition**: Transform ideas into powerful digital solutions

### **Service Portfolio**
1. **Software Development**: Custom business solutions
2. **Gaming**: Cross-platform entertainment
3. **Creative Services**: Visual design and animation
4. **Interactive Media**: Cutting-edge technology experiences

### **Client Engagement**
- **Portfolio showcase**: Featured work with video previews
- **Contact form**: Direct client communication
- **Professional presentation**: High-quality visuals and descriptions

## **Future Enhancements Ready**

### **Form Integration**
- **Zod validation**: Schema validation ready
- **Backend API**: Contact form submission
- **Email integration**: Automated responses

### **Content Management**
- **Dynamic content**: Services and portfolio from API
- **Admin panel**: Content management system
- **Blog integration**: Company updates and insights

### **Advanced Features**
- **Animations**: GSAP or Framer Motion integration
- **3D elements**: Three.js for interactive experiences
- **Performance analytics**: User interaction tracking

***

**Project**: TechCreate (Koro)  
**Organization**: Stack Seekers  
**Type**: Creative Agency Website  
**Framework**: Vue.js 3 + PrimeVue  
**Build Tool**: Vite  
**Focus**: Digital Services Portfolio


</div>
</div>
</TabPanel>
</TabView>

<div v-else>
  <div class="grid mb-8">
    <div class="col-12 lg:col-8">
       <div class="surface-card p-4 md:p-6 border-round-3xl shadow-2 h-full">
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
    <div class="col-12 lg:col-4">
       <div class="surface-900 text-white p-4 border-round-3xl shadow-4 h-full relative overflow-hidden">
          <div class="absolute top-0 right-0 w-10rem h-10rem border-circle bg-primary opacity-20" style="filter: blur(40px); transform: translate(30%, -30%);"></div>
          <div class="relative z-1">
            <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
            <div class="flex flex-column gap-2 mt-6">
              <div class="flex align-items-stretch gap-2 w-full">
                <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank" class="flex-1 no-underline flex align-items-stretch">
                  <Button label="View Demo" icon="pi pi-external-link" severity="primary" class="w-full h-full font-bold" raised rounded />
                </a>
                 <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank" class="flex-1 no-underline flex align-items-stretch">
                  <Button label="Source" icon="pi pi-github" severity="secondary" class="w-full h-full font-bold" raised rounded />
                </a>
              </div>
              <a v-if="$frontmatter.project.contact" :href="'/contact/?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline w-full">
                <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold" raised rounded />
              </a>
            </div>
          </div>
       </div>
    </div>
  </div>

  <div v-pre class="project-markdown-content text-lg line-height-4 mb-8">

## Project Overview
A modern **creative agency website** built with **Vue.js 3** and **PrimeVue**, showcasing digital services including **programming & development**, **game development**, **art & animation**, and **interactive entertainment**. This is a **Stack Seekers project** featuring a sleek, professional design with video backgrounds and portfolio showcases.

## Executive Summary

This project is a brand-and-demand example rather than a workflow-heavy app. It shows how to package a creative technology business into a polished, conversion-friendly frontend experience with strong visual identity, responsive execution, and reusable section architecture.

## Business Problem

Service businesses often need a site that looks premium enough to build trust while still being lightweight, fast, and easy to extend. Many agency sites look decorative but do not translate well into scalable frontend systems.

## What I Built

- A Vue-based agency website with a strong visual identity
- Responsive section architecture using PrimeVue and PrimeFlex
- A polished presentation layer for multi-service positioning
- A reusable frontend structure suitable for future growth and content expansion

## Why It Matters

This kind of project is commercially useful because brand presentation often decides whether a service business gets shortlisted. It also demonstrates frontend discipline beyond pure dashboards or internal tools.

## Best Fit If You Need Something Similar

This case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/) and [Fractional CTO Strategy](/web-development-services/fractional-cto-and-advisory/). It is relevant for branded service websites, polished web presence upgrades, and frontend modernization.

## Architecture
This is a **single-page application (SPA)** built with **Vue.js 3** using the **Composition API**, featuring a modern component-based architecture with **PrimeVue** for enterprise-grade UI components and **PrimeFlex** for responsive layouts.

### **Technology Stack**

#### **Frontend Framework:**
- **Vue.js 3.5.13** with Composition API
- **Vue Router 4.5.0** for client-side routing
- **Vite 6.0.11** - Next-generation build tool
- **JavaScript (ES6+)** - No TypeScript for simplicity

#### **UI Framework & Styling:**
- **PrimeVue 4.2.5** - Enterprise Vue component library
- **PrimeFlex 3.3.1** - CSS utility framework
- **PrimeIcons 7.0.0** - Icon library
- **Aura Theme** - Modern PrimeVue theme
- **Custom CSS** with Google Fonts integration

#### **Development Tools:**
- **ESLint 9.18.0** - Code linting
- **Prettier 3.4.2** - Code formatting
- **Vue DevTools** - Development debugging
- **Zod 3.24.2** - Schema validation (ready for forms)

#### **Build & Deployment:**
- **Vite** for fast development and optimized production builds
- **Auto-import resolver** for PrimeVue components
- **Rollup** bundling for production

### **Root Directory Structure**

```
techcreate/
├── src/                         # Main source code
│   ├── components/             # Reusable Vue components
│   ├── views/                 # Page-level components
│   ├── router/                # Vue Router configuration
│   ├── assets/                # Stylesheets and static assets
│   ├── App.vue                # Root application component
│   └── main.js                # Application entry point
├── public/                      # Static public assets
│   ├── *.webp                  # Service showcase images
│   ├── *.svg                  # Icons and logos
│   └── favicon.ico            # Site favicon
├── dist/                        # Production build output
├── node_modules/                # Dependencies
├── .vscode/                     # VS Code configuration
├── package.json                 # Project dependencies and scripts
├── pnpm-lock.yaml               # Package lock file
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── .prettierrc.json             # Prettier configuration
├── index.html                   # HTML entry point
└── README.md                    # Project documentation
```

## **Detailed Source Structure (`src/`)**

### **Application Entry Point**

```
src/
├── main.js                      # Vue app initialization and plugins
├── App.vue                      # Root component with layout structure
└── router/
    └── index.js                 # Vue Router configuration
```

### **Components Architecture (`src/components/`)**

```
components/
└── layout/                      # Layout-specific components
    ├── Header.vue               # Navigation header with scroll effects
    └── Footer.vue               # Site footer
```

### **Views/Pages (`src/views/`)**

```
views/
├── HomeView.vue                 # Main homepage with all sections
└── NotFoundView.vue             # 404 error page
```

### **Styling & Assets (`src/assets/`)**

```
assets/
├── main.css                     # Main stylesheet imports
└── base.css                     # Base styles and CSS variables
```

### **Static Assets (`public/`)**

```
public/
├── favicon.ico                  # Site favicon
├── headerLogo.svg               # Company logo
├── Service Images:              # Service showcase images
│   ├── dashboard.webp            # Programming & Development
│   ├── fantacy.webp              # Game Development
│   ├── character.webp            # Art & Animation
│   └── digital.webp              # Digital solutions
└── Service Icons:               # Service category icons
    ├── iaa.svg                  # Art & Animation icon
    ├── igd.svg                  # Game Development icon
    ├── iie.svg                  # Interactive Entertainment icon
    └── ipd.svg                  # Programming & Development icon
```

## **Key Features & Functionality**

### **Homepage Sections**
1. **Hero Section**: Full-screen video background with company tagline
2. **Services Section**: Four main service categories with images
3. **Featured Work**: Portfolio showcase with video/image galleries
4. **Contact Section**: Contact form with name, email, and message fields

### **Service Categories**
1. **Programming & Development**
   - Custom software solutions
   - Business-tailored applications

2. **Game Development**
   - Multi-platform gaming experiences
   - Interactive entertainment

3. **Art & Animation**
   - Visual design and animations
   - Creative content production

4. **Interactive & Entertainment**
   - Cutting-edge technology experiences
   - Immersive digital solutions

### **Technical Features**
- **Responsive Design**: Mobile-first approach with PrimeFlex grid system
- **Video Backgrounds**: Auto-playing background videos with fallback images
- **Smooth Scrolling**: Anchor navigation between sections
- **Dynamic Header**: Header background changes on scroll
- **Portfolio Gallery**: Featured work with video previews
- **Contact Form**: Integrated form components (ready for backend integration)

## **Component Details**

### **App.vue - Root Component**
```vue
<template>
  <Header />
  <RouterView />
  <Footer />
</template>
```
- Simple layout structure with header, main content, and footer
- Uses Vue Router for page navigation

### **Header.vue - Navigation Component**
**Features:**
- Fixed position navigation
- Scroll-based background color change
- Smooth anchor link navigation to sections
- Company branding ("Koro")
- Navigation links: Home, Services, Work, Contact

**Reactive Behavior:**
- Transparent gradient background initially
- Solid white background after scrolling 400px
- Text color changes from white to black on scroll

### **HomeView.vue - Main Page Component**
**Sections:**

1. **Hero Video Section**
   - Full-width background video
   - Overlay content with company tagline
   - "Crafting Digital Excellence" headline
   - Call-to-action button

2. **Services Grid**
   - Responsive 4-column layout (mobile: 1 column)
   - Service cards with images, titles, and descriptions
   - Data-driven from reactive `services` array

3. **Featured Work Portfolio**
   - 3-column responsive grid
   - Video/image showcase with fallback handling
   - Project titles and descriptions
   - Smart video loading with error handling

4. **Contact Form**
   - Name, email, and message fields
   - PrimeVue form components
   - Ready for backend integration
   - Responsive layout

## **Vue.js Implementation Details**

### **Composition API Usage**
```javascript
// Reactive data management
const form = ref({})
const services = ref([...])
const featured = ref([...])
const showImage = ref([])

// Video handling logic
watch(featured, (newVal) => {
  showImage.value = newVal.map(feature => !feature.video);
}, { deep: true, immediate: true });

const handleVideoError = (index) => {
  showImage.value[index] = true;
};
```

### **Routing Configuration**
```javascript
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]
```

## **PrimeVue Integration**

### **Theme Configuration**
```javascript
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: false,
      cssLayer: false,
    },
  },
})
```

### **Components Used**
- **Button**: Call-to-action buttons with custom styling
- **InputText**: Form input fields
- **Textarea**: Multi-line message input
- **Auto-import**: Automatic component importing via resolver

### **Styling Integration**
- **PrimeFlex**: Utility-first CSS framework
- **PrimeIcons**: Icon library integration
- **Custom CSS**: Additional styling for video backgrounds and layouts

## **Development Workflow**

### **Available Scripts**

```bash
# Development
npm run dev          # Start Vite development server

# Building
npm run build        # Production build with Vite
npm run preview      # Preview production build

# Code Quality
npm run lint         # ESLint code linting with auto-fix
npm run format       # Prettier code formatting
```

### **Environment Setup**

1. **Prerequisites**: Node.js 18+, npm/pnpm
2. **Installation**: `npm install`
3. **Development**: `npm run dev`
4. **Access**: `http://localhost:5173/`
5. **Building**: `npm run build`

## **Vite Configuration**

```javascript
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

**Key Features:**
- **Vue plugin**: Vue.js integration
- **Auto-import**: Automatic PrimeVue component importing
- **Path aliases**: `@` for `src/` directory
- **Fast HMR**: Hot module replacement for development

## **Styling Architecture**

### **CSS Framework Stack**
1. **PrimeFlex**: Utility-first CSS (similar to Tailwind)
2. **PrimeVue**: Component-specific styles
3. **Custom CSS**: Brand-specific styling
4. **Google Fonts**: Typography (Inter, Electrolize, Inconsolata)

### **Responsive Design**
- **Mobile-first**: Responsive breakpoints
- **Flexbox layouts**: Modern CSS layouts
- **Grid system**: PrimeFlex responsive grid
- **Utility classes**: Spacing, typography, colors

### **Visual Design Elements**
- **Video backgrounds**: Hero section with auto-playing video
- **Gradient overlays**: Header background transitions
- **Shadow effects**: Card components with depth
- **Smooth animations**: Hover effects and transitions

## **Performance Optimizations**

### **Build Optimizations**
- **Vite bundling**: Fast build times and optimized output
- **Tree shaking**: Unused code elimination
- **Code splitting**: Lazy loading for routes
- **Asset optimization**: Image and video compression

### **Runtime Optimizations**
- **Lazy loading**: Route-based code splitting
- **Component auto-import**: Reduced bundle size
- **Video handling**: Graceful fallbacks for video errors
- **Responsive images**: Optimized loading for different screen sizes

## **SEO & Accessibility**

### **HTML Structure**
- **Semantic HTML**: Proper heading hierarchy
- **Meta tags**: Basic SEO optimization
- **DNS prefetch**: Performance optimization for external resources
- **Accessibility**: Screen reader friendly structure

### **Performance Features**
- **Preconnect**: Google Fonts optimization
- **DNS prefetch**: Social media and CDN links
- **Favicon**: Brand identity
- **Viewport meta**: Mobile optimization

## **Business Focus**

### **Brand Identity**
- **Company Name**: "Koro"
- **Tagline**: "Crafting Digital Excellence"
- **Value Proposition**: Transform ideas into powerful digital solutions

### **Service Portfolio**
1. **Software Development**: Custom business solutions
2. **Gaming**: Cross-platform entertainment
3. **Creative Services**: Visual design and animation
4. **Interactive Media**: Cutting-edge technology experiences

### **Client Engagement**
- **Portfolio showcase**: Featured work with video previews
- **Contact form**: Direct client communication
- **Professional presentation**: High-quality visuals and descriptions

## **Future Enhancements Ready**

### **Form Integration**
- **Zod validation**: Schema validation ready
- **Backend API**: Contact form submission
- **Email integration**: Automated responses

### **Content Management**
- **Dynamic content**: Services and portfolio from API
- **Admin panel**: Content management system
- **Blog integration**: Company updates and insights

### **Advanced Features**
- **Animations**: GSAP or Framer Motion integration
- **3D elements**: Three.js for interactive experiences
- **Performance analytics**: User interaction tracking

***

**Project**: TechCreate (Koro)  
**Organization**: Stack Seekers  
**Type**: Creative Agency Website  
**Framework**: Vue.js 3 + PrimeVue  
**Build Tool**: Vite  
**Focus**: Digital Services Portfolio

</div>
</div>
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