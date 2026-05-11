---
title: "Qatar Airways widget"
description: "Book flights to destinations around the world with Qatar Airways and fly on board an award-winning airline. Enjoy special fares, collect Avios, and more."
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
  currency: "USD"
  link: "https://holidays.qatarairways.com/en-in/avios"
  codeLink: ""
  contact: ""
  stack: ["Javascript","Vuedotjs","Vite/black/white","Axios/black/white","Express/black/white","MongoDB","Git","amazonec2","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/qatar/placeholder.webp","alt":"Qatar Airways"},{"itemImageSrc":"/img/projects/qatar/qatar-airways.webp","alt":"Qatar Airways"},{"itemImageSrc":"/img/projects/qatar/thumbnail.webp","alt":"Qatar Airways"},{"itemImageSrc":"/img/projects/qatar/qatar.webp","alt":"Qatar Airways"}]
  features: [{"text":"Widget for Flight Booking"},{"text":"Widget for Flight + Hotel Booking"},{"text":"Widget for Transfer Booking"},{"text":"Use widget with any CMS Platform like Landingi"}]
  perspective: {"executive":"","technical":""}
  previousProject: {"name":"Yit Plus","link":"/web-development-projects/yit-plus/"}
  nextProject: {"name":"Recipes","link":"/web-development-projects/recipes/"}
---

<ProjectHero :project="$frontmatter.project" />

<ProjectGallery :images="$frontmatter.project.images" />

<ProjectTabs v-if="$frontmatter.project?.perspective?.executive" :project="$frontmatter.project">

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


</ProjectTabs>

<template v-else>

<ProjectTabs :project="$frontmatter.project" />

<div v-pre class="project-markdown-content text-lg line-height-4 mb-8">

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

</template>

<ConsultingBridge />

<AuditCTA />

<RelatedServices />

<ProjectNavigation :previous="$frontmatter.project?.previousProject" :next="$frontmatter.project?.nextProject" />

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>