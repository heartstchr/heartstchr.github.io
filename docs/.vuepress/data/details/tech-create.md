## Project Overview
A modern **creative agency website** built with **Vue.js 3** and **PrimeVue**, showcasing digital services including **programming & development**, **game development**, **art & animation**, and **interactive entertainment**. This is a **Stack Seekers project** featuring a sleek, professional design with video backgrounds and portfolio showcases.

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

---

**Project**: TechCreate (Koro)  
**Organization**: Stack Seekers  
**Type**: Creative Agency Website  
**Framework**: Vue.js 3 + PrimeVue  
**Build Tool**: Vite  
**Focus**: Digital Services Portfolio

