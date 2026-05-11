---
title: Qatar Airways widget
description: Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more.
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Qatar Airways widget"
  description: "Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more."
  software: "Web"
  schema: "https://schema.org/DeveloperApplication"
  domain: "Leisure, travel, and tourism"
  year: "2021"
  price: 0
  currency: USD
  link: "https://holidays.qatarairways.com/en-in/avios"
  codeLink: 
  contact: 
  stack: ["Javascript","Vuedotjs","Vite/black/white","Axios/black/white","Express/black/white","MongoDB","Git","amazonec2","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/qatar/placeholder.webp","alt":"Qatar Airways"},{"itemImageSrc":"/img/projects/qatar/qatar-airways.webp","alt":"Qatar Airways"},{"itemImageSrc":"/img/projects/qatar/thumbnail.webp","alt":"Qatar Airways"},{"itemImageSrc":"/img/projects/qatar/qatar.webp","alt":"Qatar Airways"}]
  features: [{"text":"Widget for Flight Booking"},{"text":"Widget for Flight + Hotel Booking"},{"text":"Widget for Transfer Booking"},{"text":"Use widget with any CMS Platform like Landingi"}]
  perspective: {"executive":"","technical":""}
  details: "## Project Overview\nA comprehensive **travel booking widget collection** built with **Vue.js 2** for **TUI International Holiday (Malaysia)** . This project contains multiple embeddable search forms for different travel products including **flights**, **hotels**, **flight+hotel packages**, **tours**, **transfers**, and **car rentals**.\n\n## Executive Summary\n\nThis project is a strong example of modular frontend architecture for high-traffic commercial travel flows. It shows how one codebase can support multiple booking widgets, each tailored to a different product type while staying consistent and embeddable across partner environments.\n\n## Business Problem\n\nTravel businesses often need many search and booking entry points across different products and websites, but duplicating those flows creates maintenance overhead and UX inconsistency. The challenge is to build reusable widgets that still support domain-specific behavior.\n\n## What I Built\n\n- A modular widget suite for multiple travel-booking use cases\n- Embeddable search experiences for flights, hotels, packages, tours, transfers, and rentals\n- Shared frontend architecture with reusable components and integration logic\n- A structure designed for deployment across different travel web properties\n\n## Why It Matters\n\nThis kind of system matters because commercial search widgets are often the conversion-critical layer of a travel product. Strong component architecture here improves maintainability, speed of rollout, and consistency across multiple booking funnels.\n\n## Best Fit If You Need Something Similar\n\nThis case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/) and [High-Performance API Design](/web-development-services/api-performance-and-integration/). It is especially relevant for embeddable booking experiences, modular frontend systems, and multi-product search interfaces.\n\n## Architecture\nThis is a **modular Vue.js 2 application** built with **Webpack 3**, designed as **embeddable widgets** that can be integrated into various travel websites. Each widget is a self-contained search form component that interfaces with GoQuo's booking platform.\n\n### **Technology Stack**\n\n#### **Frontend Framework:**\n- **Vue.js 2.5.16** - JavaScript framework\n- **Vue Router 3.1.6** - Client-side routing\n- **Bootstrap Vue 2.0.4** - UI component framework\n- **jQuery 3.5.1** - DOM manipulation and legacy support\n\n#### **Build Tools:**\n- **Webpack 3.11.0** - Module bundler\n- **Babel** - JavaScript transpilation\n- **Sass/SCSS** - CSS preprocessing\n- **PostCSS** - CSS processing with Autoprefixer\n\n#### **Date & Time Libraries:**\n- **Moment.js 2.24.0** - Date manipulation\n- **Vue2 DateRange Picker 0.3.1** - Date range selection\n- **Vue2 Timepicker 0.1.4** - Time selection\n- **VueJS Datepicker 1.6.2** - Date picking components\n\n#### **Additional Libraries:**\n- **Vue Multiselect 2.0.8** - Multi-select dropdowns\n- **Vue Slick 1.1.15** - Carousel/slider functionality\n- **Vue UUID 1.1.1** - Unique identifier generation\n- **Axios 0.18.0** - HTTP client for API calls\n- **FuzzySearch 1.0.3** - Search functionality\n\n### **Root Directory Structure**\n\n```\nQAwidget-All/\n├── src/                         # Main source code\n│   ├── component/              # Vue components (25+ travel forms)\n│   ├── mixins/                 # Reusable Vue mixins\n│   ├── js/                     # JavaScript libraries\n│   ├── scss/                   # Sass stylesheets\n│   ├── css/                    # Compiled CSS\n│   ├── images/                 # Image assets\n│   ├── config/                 # Configuration files\n│   ├── app.js                  # Main application entry\n│   └── translation.js          # Internationalization\n├── config/                      # Webpack configuration\n├── dist/                        # Built/compiled output\n├── node_modules/                # Dependencies\n├── HTML Pages:                  # Individual widget pages\n│   ├── index.html              # Main search form\n│   ├── hotel.html              # Hotel search widget\n│   ├── flight.html             # Flight search widget\n│   ├── flighthotel.html        # Flight+Hotel combo widget\n│   ├── tour.html               # Tour package widget\n│   └── transfer.html           # Transfer service widget\n├── package.json                 # Project dependencies\n├── webpack.config.js            # Webpack build configuration\n├── .babelrc                     # Babel configuration\n└── postcss.config.js            # PostCSS configuration\n```\n\n## **Detailed Source Structure (`src/`)**\n\n### **Components Architecture (`src/component/`)**\n\n```\ncomponent/\n├── Main Search Forms:           # Primary widget components\n│   ├── SearchForm.vue          # Universal search form with tabs\n│   ├── SearchHotelForm.vue     # Hotel-specific search\n│   ├── SearchFlightForm.vue    # Flight-specific search\n│   ├── SearchFlightHotelForm.vue # Flight+Hotel combo search\n│   ├── SearchTourForm.vue      # Tour package search\n│   ├── SearchTransferForm.vue  # Transfer service search\n│   ├── SearchDealForm.vue      # Special deals search\n│   └── SearchCarRentalForm.vue # Car rental search\n├── Booking Forms:               # Detailed booking components\n│   ├── HotelForm.vue           # Hotel booking form\n│   ├── FlightForm.vue          # Flight booking form\n│   ├── FlightHotelForm.vue     # Flight+Hotel booking form\n│   ├── TourForm.vue            # Tour booking form\n│   ├── TransferForm.vue        # Transfer booking form\n│   ├── DealForm.vue            # Deal booking form\n│   └── TourPackageForm.vue     # Tour package booking form\n├── EasyGDS Forms:               # Alternative booking systems\n│   ├── HotelFormeasyGDS.vue    # Hotel EasyGDS integration\n│   ├── FlightFormeasyGDS.vue   # Flight EasyGDS integration\n│   └── FlightHotelFormeasyGDS.vue # Flight+Hotel EasyGDS\n├── Shared Components:\n│   ├── RoomPax.vue             # Room and passenger selection\n│   ├── RoomPaxTourPackage.vue  # Tour-specific room/pax selector\n│   └── Modal.vue               # Modal dialog component\n├── control/                     # Form control components\n└── common/                      # Common utility components\n```\n\n### **Mixins (`src/mixins/`)**\n\n```\nmixins/\n├── apiMixin.js                  # API integration utilities\n├── translationMixin.js          # Internationalization helpers\n├── focusMixin.js                # Focus management utilities\n├── validateMixIn.js             # Form validation helpers\n└── constants.js                 # Application constants\n```\n\n### **Assets & Resources**\n\n```\nsrc/\n├── scss/                        # Sass stylesheets\n│   └── app.scss                # Main stylesheet\n├── css/                         # Compiled CSS files\n├── images/                      # Image assets for widgets\n├── js/                          # JavaScript libraries\n│   ├── jquery/                 # jQuery library files\n│   ├── moment/                 # Moment.js library\n│   ├── vue-multiselect/        # Multiselect component\n│   ├── vue-uuid/               # UUID generation\n│   ├── daterange-picker/       # Date range picker\n│   └── vue2-daterange-picker/  # Vue 2 date range picker\n├── config/\n│   └── workContext.js          # Application configuration\n└── translation.js               # Translation/localization data\n```\n\n## **Key Features & Functionality**\n\n### **Travel Product Categories**\n\n1. **Hotel Bookings**\n   - Hotel search and selection\n   - Room and guest configuration\n   - Date range selection\n   - Location-based filtering\n\n2. **Flight Bookings**\n   - Flight search (one-way, round-trip)\n   - Multi-city flight options\n   - Passenger management\n   - Airport/city selection\n\n3. **Flight + Hotel Packages**\n   - Combined flight and hotel booking\n   - Package deal optimization\n   - Synchronized travel dates\n   - Cost savings display\n\n4. **Tour Packages**\n   - Pre-designed tour packages\n   - Group size management\n   - Tour date selection\n   - Destination-based filtering\n\n5. **Transfer Services**\n   - Airport transfers\n   - City-to-city transfers\n   - Vehicle type selection\n   - Pickup/dropoff locations\n\n6. **Car Rentals**\n   - Vehicle selection\n   - Rental duration\n   - Pickup/return locations\n   - Insurance options\n\n### **Widget Integration Features**\n- **Embeddable Design**: Each widget can be embedded in external websites\n- **Responsive Layout**: Mobile-first responsive design\n- **Multi-language Support**: Internationalization with translation system\n- **Currency Support**: Multiple currency options\n- **Date Validation**: Smart date range validation\n- **Real-time Search**: Dynamic search with API integration\n\n## **HTML Entry Points**\n\n### **Individual Widget Pages**\n\n```html\n<!-- Main Universal Search Form -->\nindex.html              # Multi-tab search form\n\n<!-- Specific Product Widgets -->\nhotel.html             # Hotel search only\nflight.html            # Flight search only\nflighthotel.html       # Flight+Hotel combo\ntour.html              # Tour packages\ntransfer.html          # Transfer services\n```\n\n### **Widget Integration Example**\n```html\n<div id=\"gq-search-forms\" class=\"gq-container type-2 flex-grow\">\n    <div id=\"gq-hotel\" class=\"gq-container-content\" v-cloak>\n        <search-form />\n    </div>\n</div>\n<script src=\"dist/app.js\"></script>\n```\n\n## **Vue.js Application Structure**\n\n### **Main Application Entry (`src/app.js`)**\n\n```javascript\nimport Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport axios from 'axios'\nimport VueAxios from 'vue-axios'\n\n// Import all search form components\nimport SearchTourForm from './component/SearchTourForm.vue';\nimport SearchTransferForm from './component/SearchTransferForm.vue';\nimport SearchHotelForm from './component/SearchHotelForm.vue';\nimport SearchFlightHotelForm from './component/SearchFlightHotelForm.vue';\nimport SearchFlightForm from './component/SearchFlightForm.vue';\nimport SearchForm from './component/SearchForm.vue';\n\n// Initialize Vue application\nnew Vue({\n    el: '#gq-search-forms',\n    components: {\n        SearchTourForm,\n        SearchTransferForm,\n        SearchHotelForm,\n        SearchFlightHotelForm,\n        SearchFlightForm,\n        SearchForm\n    }\n});\n```\n\n### **Component Architecture**\n\n#### **SearchForm.vue - Universal Widget**\n- **Tabbed Interface**: Multiple travel products in one widget\n- **Dynamic Loading**: Components loaded based on selected tab\n- **Slick Carousel**: Responsive navigation for product tabs\n- **Product Configuration**: Dynamic product list from API\n- **Responsive Design**: Mobile-optimized tab navigation\n\n#### **Individual Search Forms**\n- **Product-Specific**: Each form optimized for specific travel type\n- **Standalone Widgets**: Can be embedded independently\n- **Consistent API**: Unified interface across all forms\n- **Validation**: Form-specific validation rules\n\n### **Mixin System**\n\n#### **API Mixin (`apiMixin.js`)**\n```javascript\n// Centralized API communication\n// GoQuo platform integration\n// Response handling and error management\n// Authentication and session management\n```\n\n#### **Translation Mixin (`translationMixin.js`)**\n```javascript\n// Multi-language support\n// Dynamic text translation\n// Culture-specific formatting\n// RTL/LTR text direction support\n```\n\n#### **Validation Mixin (`validateMixIn.js`)**\n```javascript\n// Form validation rules\n// Date range validation\n// Passenger/guest validation\n// Required field checking\n```\n\n## **Build Configuration**\n\n### **Webpack Configuration (`webpack.config.js`)**\n\n```javascript\nmodule.exports = {\n    entry: {\n        app: './src/app.js'\n    },\n    output: {\n        path: path.resolve(__dirname, './dist'),\n        publicPath: 'dist/',\n        filename: '[name].js'\n    },\n    module: {\n        rules: [\n            // Vue.js single file components\n            { test: /\\.vue$/, loader: 'vue-loader' },\n            \n            // JavaScript transpilation\n            { test: /\\.js$/, loader: 'babel-loader' },\n            \n            // Sass/SCSS compilation\n            { test: /\\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },\n            \n            // Image processing\n            { test: /\\.(png|jpg|gif|svg)$/, loader: 'file-loader' }\n        ]\n    }\n};\n```\n\n### **Development vs Production**\n- **Development**: Source maps, hot reloading, unminified code\n- **Staging**: Development build for testing\n- **Production**: Minified, optimized, compressed assets\n\n## **Integration with GoQuo Platform**\n\n### **API Integration**\n- **Search APIs**: Real-time availability and pricing\n- **Booking APIs**: Reservation and payment processing\n- **Location APIs**: City, airport, and hotel data\n- **Currency APIs**: Real-time exchange rates\n- **Authentication**: Session management and user tracking\n\n### **White-label Customization**\n- **TUI Branding**: Customized for TUI International Holiday\n- **Color Schemes**: Brand-specific styling\n- **Custom Domains**: Integration with client websites\n- **Localization**: Malaysia-specific content and pricing\n\n## **Development Workflow**\n\n### **Available Scripts**\n\n```bash\n# Development\nnpm run dev              # Start development server with hot reload\n\n# Building\nnpm run staging          # Build for staging environment\nnpm run build            # Production build with optimization\n\n# Development Tools\nwebpack-dev-server       # Live reload development server\ncross-env               # Cross-platform environment variables\n```\n\n### **Environment Setup**\n\n1. **Prerequisites**: Node.js 8+, npm\n2. **Installation**: `npm install`\n3. **Development**: `npm run dev`\n4. **Building**: `npm run build`\n5. **Integration**: Include built `dist/app.js` in target websites\n\n## **Internationalization & Localization**\n\n### **Translation System (`translation.js`)**\n- **26KB translation file** with comprehensive language support\n- **Dynamic text rendering** based on culture code\n- **Date format localization**\n- **Currency formatting**\n- **Right-to-left language support**\n\n### **Supported Features**\n- **Multiple languages**: English, Malay, Chinese, etc.\n- **Regional settings**: Malaysia-specific formatting\n- **Cultural adaptations**: Local holidays, business rules\n- **Currency display**: MYR, USD, SGD support\n\n## **Responsive Design & Mobile Optimization**\n\n### **Bootstrap Vue Integration**\n- **Mobile-first design** approach\n- **Responsive breakpoints** for all screen sizes\n- **Touch-friendly interface** for mobile devices\n- **Optimized forms** for mobile input\n\n### **Slick Carousel Features**\n- **Responsive navigation** for product tabs\n- **Touch/swipe support** on mobile devices\n- **Variable width slides** for different content\n- **Accessibility features** for screen readers\n\n## **Performance Optimizations**\n\n### **Build Optimizations**\n- **Webpack code splitting** for efficient loading\n- **Babel transpilation** for browser compatibility\n- **Sass compilation** with autoprefixer\n- **Image optimization** with file-loader\n- **Production minification** with UglifyJS\n\n### **Runtime Optimizations**\n- **Lazy loading** of components\n- **API response caching**\n- **Debounced search** for performance\n- **Optimized re-rendering** with Vue.js\n\n## **Browser Compatibility**\n\n### **Supported Browsers**\n- **IE 11+** (with Babel polyfills)\n- **Chrome 60+**\n- **Firefox 55+**\n- **Safari 11+**\n- **Mobile browsers** (iOS Safari, Android Chrome)\n\n### **Polyfills & Fallbacks**\n- **@babel/polyfill** for ES6+ features\n- **jQuery fallback** for legacy support\n- **CSS autoprefixer** for vendor prefixes\n\n## **Security Considerations**\n\n### **Data Protection**\n- **HTTPS enforcement** for all API calls\n- **Input sanitization** and validation\n- **XSS protection** in templates\n- **CSRF protection** for form submissions\n\n### **API Security**\n- **Authentication tokens** for API access\n- **Rate limiting** protection\n- **Secure session management**\n- **PCI DSS compliance** for payment data\n\n## **Business Integration**\n\n### **TUI International Holiday Features**\n- **Brand customization** with TUI styling\n- **Malaysia market focus** with local content\n- **Multi-currency support** (MYR, USD, SGD)\n- **Local partnerships** integration\n- **Regional tour packages**\n\n### **GoQuo Platform Benefits**\n- **Real-time inventory** management\n- **Dynamic pricing** algorithms\n- **Multi-supplier integration**\n- **Booking management** system\n- **Customer support** integration\n\n***\n\n**Project**: QAwidget-All\n**Client**: TUI International Holiday (Malaysia) Sdn. Bhd.  \n**Platform**: GoQuo Travel Technology  \n**Framework**: Vue.js 2 + Webpack 3  \n**Focus**: Embeddable Travel Booking Widgets\n"
  previousProject: {"name":"Yit Plus","link":"/web-development-projects/yit-plus/"}
  nextProject: {"name":"Recipes","link":"/web-development-projects/recipes/"}
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
A comprehensive **travel booking widget collection** built with **Vue.js 2** for **TUI International Holiday (Malaysia)** . This project contains multiple embeddable search forms for different travel products including **flights**, **hotels**, **flight+hotel packages**, **tours**, **transfers**, and **car rentals**.

## Executive Summary

This project is a strong example of modular frontend architecture for high-traffic commercial travel flows. It shows how one codebase can support multiple booking widgets, each tailored to a different product type while staying consistent and embeddable across partner environments.

## Business Problem

Travel businesses often need many search and booking entry points across different products and websites, but duplicating those flows creates maintenance overhead and UX inconsistency. The challenge is to build reusable widgets that still support domain-specific behavior.

## What I Built

- A modular widget suite for multiple travel-booking use cases
- Embeddable search experiences for flights, hotels, packages, tours, transfers, and rentals
- Shared frontend architecture with reusable components and integration logic
- A structure designed for deployment across different travel web properties

## Why It Matters

This kind of system matters because commercial search widgets are often the conversion-critical layer of a travel product. Strong component architecture here improves maintainability, speed of rollout, and consistency across multiple booking funnels.

## Best Fit If You Need Something Similar

This case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/) and [High-Performance API Design](/web-development-services/api-performance-and-integration/). It is especially relevant for embeddable booking experiences, modular frontend systems, and multi-product search interfaces.

## Architecture
This is a **modular Vue.js 2 application** built with **Webpack 3**, designed as **embeddable widgets** that can be integrated into various travel websites. Each widget is a self-contained search form component that interfaces with GoQuo's booking platform.

### **Technology Stack**

#### **Frontend Framework:**
- **Vue.js 2.5.16** - JavaScript framework
- **Vue Router 3.1.6** - Client-side routing
- **Bootstrap Vue 2.0.4** - UI component framework
- **jQuery 3.5.1** - DOM manipulation and legacy support

#### **Build Tools:**
- **Webpack 3.11.0** - Module bundler
- **Babel** - JavaScript transpilation
- **Sass/SCSS** - CSS preprocessing
- **PostCSS** - CSS processing with Autoprefixer

#### **Date & Time Libraries:**
- **Moment.js 2.24.0** - Date manipulation
- **Vue2 DateRange Picker 0.3.1** - Date range selection
- **Vue2 Timepicker 0.1.4** - Time selection
- **VueJS Datepicker 1.6.2** - Date picking components

#### **Additional Libraries:**
- **Vue Multiselect 2.0.8** - Multi-select dropdowns
- **Vue Slick 1.1.15** - Carousel/slider functionality
- **Vue UUID 1.1.1** - Unique identifier generation
- **Axios 0.18.0** - HTTP client for API calls
- **FuzzySearch 1.0.3** - Search functionality

### **Root Directory Structure**

```
QAwidget-All/
├── src/                         # Main source code
│   ├── component/              # Vue components (25+ travel forms)
│   ├── mixins/                 # Reusable Vue mixins
│   ├── js/                     # JavaScript libraries
│   ├── scss/                   # Sass stylesheets
│   ├── css/                    # Compiled CSS
│   ├── images/                 # Image assets
│   ├── config/                 # Configuration files
│   ├── app.js                  # Main application entry
│   └── translation.js          # Internationalization
├── config/                      # Webpack configuration
├── dist/                        # Built/compiled output
├── node_modules/                # Dependencies
├── HTML Pages:                  # Individual widget pages
│   ├── index.html              # Main search form
│   ├── hotel.html              # Hotel search widget
│   ├── flight.html             # Flight search widget
│   ├── flighthotel.html        # Flight+Hotel combo widget
│   ├── tour.html               # Tour package widget
│   └── transfer.html           # Transfer service widget
├── package.json                 # Project dependencies
├── webpack.config.js            # Webpack build configuration
├── .babelrc                     # Babel configuration
└── postcss.config.js            # PostCSS configuration
```

## **Detailed Source Structure (`src/`)**

### **Components Architecture (`src/component/`)**

```
component/
├── Main Search Forms:           # Primary widget components
│   ├── SearchForm.vue          # Universal search form with tabs
│   ├── SearchHotelForm.vue     # Hotel-specific search
│   ├── SearchFlightForm.vue    # Flight-specific search
│   ├── SearchFlightHotelForm.vue # Flight+Hotel combo search
│   ├── SearchTourForm.vue      # Tour package search
│   ├── SearchTransferForm.vue  # Transfer service search
│   ├── SearchDealForm.vue      # Special deals search
│   └── SearchCarRentalForm.vue # Car rental search
├── Booking Forms:               # Detailed booking components
│   ├── HotelForm.vue           # Hotel booking form
│   ├── FlightForm.vue          # Flight booking form
│   ├── FlightHotelForm.vue     # Flight+Hotel booking form
│   ├── TourForm.vue            # Tour booking form
│   ├── TransferForm.vue        # Transfer booking form
│   ├── DealForm.vue            # Deal booking form
│   └── TourPackageForm.vue     # Tour package booking form
├── EasyGDS Forms:               # Alternative booking systems
│   ├── HotelFormeasyGDS.vue    # Hotel EasyGDS integration
│   ├── FlightFormeasyGDS.vue   # Flight EasyGDS integration
│   └── FlightHotelFormeasyGDS.vue # Flight+Hotel EasyGDS
├── Shared Components:
│   ├── RoomPax.vue             # Room and passenger selection
│   ├── RoomPaxTourPackage.vue  # Tour-specific room/pax selector
│   └── Modal.vue               # Modal dialog component
├── control/                     # Form control components
└── common/                      # Common utility components
```

### **Mixins (`src/mixins/`)**

```
mixins/
├── apiMixin.js                  # API integration utilities
├── translationMixin.js          # Internationalization helpers
├── focusMixin.js                # Focus management utilities
├── validateMixIn.js             # Form validation helpers
└── constants.js                 # Application constants
```

### **Assets & Resources**

```
src/
├── scss/                        # Sass stylesheets
│   └── app.scss                # Main stylesheet
├── css/                         # Compiled CSS files
├── images/                      # Image assets for widgets
├── js/                          # JavaScript libraries
│   ├── jquery/                 # jQuery library files
│   ├── moment/                 # Moment.js library
│   ├── vue-multiselect/        # Multiselect component
│   ├── vue-uuid/               # UUID generation
│   ├── daterange-picker/       # Date range picker
│   └── vue2-daterange-picker/  # Vue 2 date range picker
├── config/
│   └── workContext.js          # Application configuration
└── translation.js               # Translation/localization data
```

## **Key Features & Functionality**

### **Travel Product Categories**

1. **Hotel Bookings**
   - Hotel search and selection
   - Room and guest configuration
   - Date range selection
   - Location-based filtering

2. **Flight Bookings**
   - Flight search (one-way, round-trip)
   - Multi-city flight options
   - Passenger management
   - Airport/city selection

3. **Flight + Hotel Packages**
   - Combined flight and hotel booking
   - Package deal optimization
   - Synchronized travel dates
   - Cost savings display

4. **Tour Packages**
   - Pre-designed tour packages
   - Group size management
   - Tour date selection
   - Destination-based filtering

5. **Transfer Services**
   - Airport transfers
   - City-to-city transfers
   - Vehicle type selection
   - Pickup/dropoff locations

6. **Car Rentals**
   - Vehicle selection
   - Rental duration
   - Pickup/return locations
   - Insurance options

### **Widget Integration Features**
- **Embeddable Design**: Each widget can be embedded in external websites
- **Responsive Layout**: Mobile-first responsive design
- **Multi-language Support**: Internationalization with translation system
- **Currency Support**: Multiple currency options
- **Date Validation**: Smart date range validation
- **Real-time Search**: Dynamic search with API integration

## **HTML Entry Points**

### **Individual Widget Pages**

```html
<!-- Main Universal Search Form -->
index.html              # Multi-tab search form

<!-- Specific Product Widgets -->
hotel.html             # Hotel search only
flight.html            # Flight search only
flighthotel.html       # Flight+Hotel combo
tour.html              # Tour packages
transfer.html          # Transfer services
```

### **Widget Integration Example**
```html
<div id="gq-search-forms" class="gq-container type-2 flex-grow">
    <div id="gq-hotel" class="gq-container-content" v-cloak>
        <search-form />
    </div>
</div>
<script src="dist/app.js"></script>
```

## **Vue.js Application Structure**

### **Main Application Entry (`src/app.js`)**

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'

// Import all search form components
import SearchTourForm from './component/SearchTourForm.vue';
import SearchTransferForm from './component/SearchTransferForm.vue';
import SearchHotelForm from './component/SearchHotelForm.vue';
import SearchFlightHotelForm from './component/SearchFlightHotelForm.vue';
import SearchFlightForm from './component/SearchFlightForm.vue';
import SearchForm from './component/SearchForm.vue';

// Initialize Vue application
new Vue({
    el: '#gq-search-forms',
    components: {
        SearchTourForm,
        SearchTransferForm,
        SearchHotelForm,
        SearchFlightHotelForm,
        SearchFlightForm,
        SearchForm
    }
});
```

### **Component Architecture**

#### **SearchForm.vue - Universal Widget**
- **Tabbed Interface**: Multiple travel products in one widget
- **Dynamic Loading**: Components loaded based on selected tab
- **Slick Carousel**: Responsive navigation for product tabs
- **Product Configuration**: Dynamic product list from API
- **Responsive Design**: Mobile-optimized tab navigation

#### **Individual Search Forms**
- **Product-Specific**: Each form optimized for specific travel type
- **Standalone Widgets**: Can be embedded independently
- **Consistent API**: Unified interface across all forms
- **Validation**: Form-specific validation rules

### **Mixin System**

#### **API Mixin (`apiMixin.js`)**
```javascript
// Centralized API communication
// GoQuo platform integration
// Response handling and error management
// Authentication and session management
```

#### **Translation Mixin (`translationMixin.js`)**
```javascript
// Multi-language support
// Dynamic text translation
// Culture-specific formatting
// RTL/LTR text direction support
```

#### **Validation Mixin (`validateMixIn.js`)**
```javascript
// Form validation rules
// Date range validation
// Passenger/guest validation
// Required field checking
```

## **Build Configuration**

### **Webpack Configuration (`webpack.config.js`)**

```javascript
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            // Vue.js single file components
            { test: /\.vue$/, loader: 'vue-loader' },
            
            // JavaScript transpilation
            { test: /\.js$/, loader: 'babel-loader' },
            
            // Sass/SCSS compilation
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
            
            // Image processing
            { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader' }
        ]
    }
};
```

### **Development vs Production**
- **Development**: Source maps, hot reloading, unminified code
- **Staging**: Development build for testing
- **Production**: Minified, optimized, compressed assets

## **Integration with GoQuo Platform**

### **API Integration**
- **Search APIs**: Real-time availability and pricing
- **Booking APIs**: Reservation and payment processing
- **Location APIs**: City, airport, and hotel data
- **Currency APIs**: Real-time exchange rates
- **Authentication**: Session management and user tracking

### **White-label Customization**
- **TUI Branding**: Customized for TUI International Holiday
- **Color Schemes**: Brand-specific styling
- **Custom Domains**: Integration with client websites
- **Localization**: Malaysia-specific content and pricing

## **Development Workflow**

### **Available Scripts**

```bash
# Development
npm run dev              # Start development server with hot reload

# Building
npm run staging          # Build for staging environment
npm run build            # Production build with optimization

# Development Tools
webpack-dev-server       # Live reload development server
cross-env               # Cross-platform environment variables
```

### **Environment Setup**

1. **Prerequisites**: Node.js 8+, npm
2. **Installation**: `npm install`
3. **Development**: `npm run dev`
4. **Building**: `npm run build`
5. **Integration**: Include built `dist/app.js` in target websites

## **Internationalization & Localization**

### **Translation System (`translation.js`)**
- **26KB translation file** with comprehensive language support
- **Dynamic text rendering** based on culture code
- **Date format localization**
- **Currency formatting**
- **Right-to-left language support**

### **Supported Features**
- **Multiple languages**: English, Malay, Chinese, etc.
- **Regional settings**: Malaysia-specific formatting
- **Cultural adaptations**: Local holidays, business rules
- **Currency display**: MYR, USD, SGD support

## **Responsive Design & Mobile Optimization**

### **Bootstrap Vue Integration**
- **Mobile-first design** approach
- **Responsive breakpoints** for all screen sizes
- **Touch-friendly interface** for mobile devices
- **Optimized forms** for mobile input

### **Slick Carousel Features**
- **Responsive navigation** for product tabs
- **Touch/swipe support** on mobile devices
- **Variable width slides** for different content
- **Accessibility features** for screen readers

## **Performance Optimizations**

### **Build Optimizations**
- **Webpack code splitting** for efficient loading
- **Babel transpilation** for browser compatibility
- **Sass compilation** with autoprefixer
- **Image optimization** with file-loader
- **Production minification** with UglifyJS

### **Runtime Optimizations**
- **Lazy loading** of components
- **API response caching**
- **Debounced search** for performance
- **Optimized re-rendering** with Vue.js

## **Browser Compatibility**

### **Supported Browsers**
- **IE 11+** (with Babel polyfills)
- **Chrome 60+**
- **Firefox 55+**
- **Safari 11+**
- **Mobile browsers** (iOS Safari, Android Chrome)

### **Polyfills & Fallbacks**
- **@babel/polyfill** for ES6+ features
- **jQuery fallback** for legacy support
- **CSS autoprefixer** for vendor prefixes

## **Security Considerations**

### **Data Protection**
- **HTTPS enforcement** for all API calls
- **Input sanitization** and validation
- **XSS protection** in templates
- **CSRF protection** for form submissions

### **API Security**
- **Authentication tokens** for API access
- **Rate limiting** protection
- **Secure session management**
- **PCI DSS compliance** for payment data

## **Business Integration**

### **TUI International Holiday Features**
- **Brand customization** with TUI styling
- **Malaysia market focus** with local content
- **Multi-currency support** (MYR, USD, SGD)
- **Local partnerships** integration
- **Regional tour packages**

### **GoQuo Platform Benefits**
- **Real-time inventory** management
- **Dynamic pricing** algorithms
- **Multi-supplier integration**
- **Booking management** system
- **Customer support** integration

***

**Project**: QAwidget-All
**Client**: TUI International Holiday (Malaysia) Sdn. Bhd.  
**Platform**: GoQuo Travel Technology  
**Framework**: Vue.js 2 + Webpack 3  
**Focus**: Embeddable Travel Booking Widgets


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
A comprehensive **travel booking widget collection** built with **Vue.js 2** for **TUI International Holiday (Malaysia)** . This project contains multiple embeddable search forms for different travel products including **flights**, **hotels**, **flight+hotel packages**, **tours**, **transfers**, and **car rentals**.

## Executive Summary

This project is a strong example of modular frontend architecture for high-traffic commercial travel flows. It shows how one codebase can support multiple booking widgets, each tailored to a different product type while staying consistent and embeddable across partner environments.

## Business Problem

Travel businesses often need many search and booking entry points across different products and websites, but duplicating those flows creates maintenance overhead and UX inconsistency. The challenge is to build reusable widgets that still support domain-specific behavior.

## What I Built

- A modular widget suite for multiple travel-booking use cases
- Embeddable search experiences for flights, hotels, packages, tours, transfers, and rentals
- Shared frontend architecture with reusable components and integration logic
- A structure designed for deployment across different travel web properties

## Why It Matters

This kind of system matters because commercial search widgets are often the conversion-critical layer of a travel product. Strong component architecture here improves maintainability, speed of rollout, and consistency across multiple booking funnels.

## Best Fit If You Need Something Similar

This case study supports [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/) and [High-Performance API Design](/web-development-services/api-performance-and-integration/). It is especially relevant for embeddable booking experiences, modular frontend systems, and multi-product search interfaces.

## Architecture
This is a **modular Vue.js 2 application** built with **Webpack 3**, designed as **embeddable widgets** that can be integrated into various travel websites. Each widget is a self-contained search form component that interfaces with GoQuo's booking platform.

### **Technology Stack**

#### **Frontend Framework:**
- **Vue.js 2.5.16** - JavaScript framework
- **Vue Router 3.1.6** - Client-side routing
- **Bootstrap Vue 2.0.4** - UI component framework
- **jQuery 3.5.1** - DOM manipulation and legacy support

#### **Build Tools:**
- **Webpack 3.11.0** - Module bundler
- **Babel** - JavaScript transpilation
- **Sass/SCSS** - CSS preprocessing
- **PostCSS** - CSS processing with Autoprefixer

#### **Date & Time Libraries:**
- **Moment.js 2.24.0** - Date manipulation
- **Vue2 DateRange Picker 0.3.1** - Date range selection
- **Vue2 Timepicker 0.1.4** - Time selection
- **VueJS Datepicker 1.6.2** - Date picking components

#### **Additional Libraries:**
- **Vue Multiselect 2.0.8** - Multi-select dropdowns
- **Vue Slick 1.1.15** - Carousel/slider functionality
- **Vue UUID 1.1.1** - Unique identifier generation
- **Axios 0.18.0** - HTTP client for API calls
- **FuzzySearch 1.0.3** - Search functionality

### **Root Directory Structure**

```
QAwidget-All/
├── src/                         # Main source code
│   ├── component/              # Vue components (25+ travel forms)
│   ├── mixins/                 # Reusable Vue mixins
│   ├── js/                     # JavaScript libraries
│   ├── scss/                   # Sass stylesheets
│   ├── css/                    # Compiled CSS
│   ├── images/                 # Image assets
│   ├── config/                 # Configuration files
│   ├── app.js                  # Main application entry
│   └── translation.js          # Internationalization
├── config/                      # Webpack configuration
├── dist/                        # Built/compiled output
├── node_modules/                # Dependencies
├── HTML Pages:                  # Individual widget pages
│   ├── index.html              # Main search form
│   ├── hotel.html              # Hotel search widget
│   ├── flight.html             # Flight search widget
│   ├── flighthotel.html        # Flight+Hotel combo widget
│   ├── tour.html               # Tour package widget
│   └── transfer.html           # Transfer service widget
├── package.json                 # Project dependencies
├── webpack.config.js            # Webpack build configuration
├── .babelrc                     # Babel configuration
└── postcss.config.js            # PostCSS configuration
```

## **Detailed Source Structure (`src/`)**

### **Components Architecture (`src/component/`)**

```
component/
├── Main Search Forms:           # Primary widget components
│   ├── SearchForm.vue          # Universal search form with tabs
│   ├── SearchHotelForm.vue     # Hotel-specific search
│   ├── SearchFlightForm.vue    # Flight-specific search
│   ├── SearchFlightHotelForm.vue # Flight+Hotel combo search
│   ├── SearchTourForm.vue      # Tour package search
│   ├── SearchTransferForm.vue  # Transfer service search
│   ├── SearchDealForm.vue      # Special deals search
│   └── SearchCarRentalForm.vue # Car rental search
├── Booking Forms:               # Detailed booking components
│   ├── HotelForm.vue           # Hotel booking form
│   ├── FlightForm.vue          # Flight booking form
│   ├── FlightHotelForm.vue     # Flight+Hotel booking form
│   ├── TourForm.vue            # Tour booking form
│   ├── TransferForm.vue        # Transfer booking form
│   ├── DealForm.vue            # Deal booking form
│   └── TourPackageForm.vue     # Tour package booking form
├── EasyGDS Forms:               # Alternative booking systems
│   ├── HotelFormeasyGDS.vue    # Hotel EasyGDS integration
│   ├── FlightFormeasyGDS.vue   # Flight EasyGDS integration
│   └── FlightHotelFormeasyGDS.vue # Flight+Hotel EasyGDS
├── Shared Components:
│   ├── RoomPax.vue             # Room and passenger selection
│   ├── RoomPaxTourPackage.vue  # Tour-specific room/pax selector
│   └── Modal.vue               # Modal dialog component
├── control/                     # Form control components
└── common/                      # Common utility components
```

### **Mixins (`src/mixins/`)**

```
mixins/
├── apiMixin.js                  # API integration utilities
├── translationMixin.js          # Internationalization helpers
├── focusMixin.js                # Focus management utilities
├── validateMixIn.js             # Form validation helpers
└── constants.js                 # Application constants
```

### **Assets & Resources**

```
src/
├── scss/                        # Sass stylesheets
│   └── app.scss                # Main stylesheet
├── css/                         # Compiled CSS files
├── images/                      # Image assets for widgets
├── js/                          # JavaScript libraries
│   ├── jquery/                 # jQuery library files
│   ├── moment/                 # Moment.js library
│   ├── vue-multiselect/        # Multiselect component
│   ├── vue-uuid/               # UUID generation
│   ├── daterange-picker/       # Date range picker
│   └── vue2-daterange-picker/  # Vue 2 date range picker
├── config/
│   └── workContext.js          # Application configuration
└── translation.js               # Translation/localization data
```

## **Key Features & Functionality**

### **Travel Product Categories**

1. **Hotel Bookings**
   - Hotel search and selection
   - Room and guest configuration
   - Date range selection
   - Location-based filtering

2. **Flight Bookings**
   - Flight search (one-way, round-trip)
   - Multi-city flight options
   - Passenger management
   - Airport/city selection

3. **Flight + Hotel Packages**
   - Combined flight and hotel booking
   - Package deal optimization
   - Synchronized travel dates
   - Cost savings display

4. **Tour Packages**
   - Pre-designed tour packages
   - Group size management
   - Tour date selection
   - Destination-based filtering

5. **Transfer Services**
   - Airport transfers
   - City-to-city transfers
   - Vehicle type selection
   - Pickup/dropoff locations

6. **Car Rentals**
   - Vehicle selection
   - Rental duration
   - Pickup/return locations
   - Insurance options

### **Widget Integration Features**
- **Embeddable Design**: Each widget can be embedded in external websites
- **Responsive Layout**: Mobile-first responsive design
- **Multi-language Support**: Internationalization with translation system
- **Currency Support**: Multiple currency options
- **Date Validation**: Smart date range validation
- **Real-time Search**: Dynamic search with API integration

## **HTML Entry Points**

### **Individual Widget Pages**

```html
<!-- Main Universal Search Form -->
index.html              # Multi-tab search form

<!-- Specific Product Widgets -->
hotel.html             # Hotel search only
flight.html            # Flight search only
flighthotel.html       # Flight+Hotel combo
tour.html              # Tour packages
transfer.html          # Transfer services
```

### **Widget Integration Example**
```html
<div id="gq-search-forms" class="gq-container type-2 flex-grow">
    <div id="gq-hotel" class="gq-container-content" v-cloak>
        <search-form />
    </div>
</div>
<script src="dist/app.js"></script>
```

## **Vue.js Application Structure**

### **Main Application Entry (`src/app.js`)**

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'

// Import all search form components
import SearchTourForm from './component/SearchTourForm.vue';
import SearchTransferForm from './component/SearchTransferForm.vue';
import SearchHotelForm from './component/SearchHotelForm.vue';
import SearchFlightHotelForm from './component/SearchFlightHotelForm.vue';
import SearchFlightForm from './component/SearchFlightForm.vue';
import SearchForm from './component/SearchForm.vue';

// Initialize Vue application
new Vue({
    el: '#gq-search-forms',
    components: {
        SearchTourForm,
        SearchTransferForm,
        SearchHotelForm,
        SearchFlightHotelForm,
        SearchFlightForm,
        SearchForm
    }
});
```

### **Component Architecture**

#### **SearchForm.vue - Universal Widget**
- **Tabbed Interface**: Multiple travel products in one widget
- **Dynamic Loading**: Components loaded based on selected tab
- **Slick Carousel**: Responsive navigation for product tabs
- **Product Configuration**: Dynamic product list from API
- **Responsive Design**: Mobile-optimized tab navigation

#### **Individual Search Forms**
- **Product-Specific**: Each form optimized for specific travel type
- **Standalone Widgets**: Can be embedded independently
- **Consistent API**: Unified interface across all forms
- **Validation**: Form-specific validation rules

### **Mixin System**

#### **API Mixin (`apiMixin.js`)**
```javascript
// Centralized API communication
// GoQuo platform integration
// Response handling and error management
// Authentication and session management
```

#### **Translation Mixin (`translationMixin.js`)**
```javascript
// Multi-language support
// Dynamic text translation
// Culture-specific formatting
// RTL/LTR text direction support
```

#### **Validation Mixin (`validateMixIn.js`)**
```javascript
// Form validation rules
// Date range validation
// Passenger/guest validation
// Required field checking
```

## **Build Configuration**

### **Webpack Configuration (`webpack.config.js`)**

```javascript
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            // Vue.js single file components
            { test: /\.vue$/, loader: 'vue-loader' },
            
            // JavaScript transpilation
            { test: /\.js$/, loader: 'babel-loader' },
            
            // Sass/SCSS compilation
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
            
            // Image processing
            { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader' }
        ]
    }
};
```

### **Development vs Production**
- **Development**: Source maps, hot reloading, unminified code
- **Staging**: Development build for testing
- **Production**: Minified, optimized, compressed assets

## **Integration with GoQuo Platform**

### **API Integration**
- **Search APIs**: Real-time availability and pricing
- **Booking APIs**: Reservation and payment processing
- **Location APIs**: City, airport, and hotel data
- **Currency APIs**: Real-time exchange rates
- **Authentication**: Session management and user tracking

### **White-label Customization**
- **TUI Branding**: Customized for TUI International Holiday
- **Color Schemes**: Brand-specific styling
- **Custom Domains**: Integration with client websites
- **Localization**: Malaysia-specific content and pricing

## **Development Workflow**

### **Available Scripts**

```bash
# Development
npm run dev              # Start development server with hot reload

# Building
npm run staging          # Build for staging environment
npm run build            # Production build with optimization

# Development Tools
webpack-dev-server       # Live reload development server
cross-env               # Cross-platform environment variables
```

### **Environment Setup**

1. **Prerequisites**: Node.js 8+, npm
2. **Installation**: `npm install`
3. **Development**: `npm run dev`
4. **Building**: `npm run build`
5. **Integration**: Include built `dist/app.js` in target websites

## **Internationalization & Localization**

### **Translation System (`translation.js`)**
- **26KB translation file** with comprehensive language support
- **Dynamic text rendering** based on culture code
- **Date format localization**
- **Currency formatting**
- **Right-to-left language support**

### **Supported Features**
- **Multiple languages**: English, Malay, Chinese, etc.
- **Regional settings**: Malaysia-specific formatting
- **Cultural adaptations**: Local holidays, business rules
- **Currency display**: MYR, USD, SGD support

## **Responsive Design & Mobile Optimization**

### **Bootstrap Vue Integration**
- **Mobile-first design** approach
- **Responsive breakpoints** for all screen sizes
- **Touch-friendly interface** for mobile devices
- **Optimized forms** for mobile input

### **Slick Carousel Features**
- **Responsive navigation** for product tabs
- **Touch/swipe support** on mobile devices
- **Variable width slides** for different content
- **Accessibility features** for screen readers

## **Performance Optimizations**

### **Build Optimizations**
- **Webpack code splitting** for efficient loading
- **Babel transpilation** for browser compatibility
- **Sass compilation** with autoprefixer
- **Image optimization** with file-loader
- **Production minification** with UglifyJS

### **Runtime Optimizations**
- **Lazy loading** of components
- **API response caching**
- **Debounced search** for performance
- **Optimized re-rendering** with Vue.js

## **Browser Compatibility**

### **Supported Browsers**
- **IE 11+** (with Babel polyfills)
- **Chrome 60+**
- **Firefox 55+**
- **Safari 11+**
- **Mobile browsers** (iOS Safari, Android Chrome)

### **Polyfills & Fallbacks**
- **@babel/polyfill** for ES6+ features
- **jQuery fallback** for legacy support
- **CSS autoprefixer** for vendor prefixes

## **Security Considerations**

### **Data Protection**
- **HTTPS enforcement** for all API calls
- **Input sanitization** and validation
- **XSS protection** in templates
- **CSRF protection** for form submissions

### **API Security**
- **Authentication tokens** for API access
- **Rate limiting** protection
- **Secure session management**
- **PCI DSS compliance** for payment data

## **Business Integration**

### **TUI International Holiday Features**
- **Brand customization** with TUI styling
- **Malaysia market focus** with local content
- **Multi-currency support** (MYR, USD, SGD)
- **Local partnerships** integration
- **Regional tour packages**

### **GoQuo Platform Benefits**
- **Real-time inventory** management
- **Dynamic pricing** algorithms
- **Multi-supplier integration**
- **Booking management** system
- **Customer support** integration

***

**Project**: QAwidget-All
**Client**: TUI International Holiday (Malaysia) Sdn. Bhd.  
**Platform**: GoQuo Travel Technology  
**Framework**: Vue.js 2 + Webpack 3  
**Focus**: Embeddable Travel Booking Widgets

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