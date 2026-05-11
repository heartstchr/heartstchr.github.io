---
title: "Local Home Services Pros"
description: "A modern, SEO-optimized web platform that connects homeowners and property managers with verified local service providers. Built with Next.js 15 and React 19, it serves as a lead generation and matching service with dynamic routing for thousands of location-service combinations."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Local Home Services Pros"
  description: "A modern, SEO-optimized web platform that connects homeowners and property managers with verified local service providers. Built with Next.js 15 and React 19, it serves as a lead generation and matching service with dynamic routing for thousands of location-service combinations."
  software: "Web Platform"
  schema: "https://schema.org/WebApplication"
  domain: "Home Services & Lead Generation"
  year: "2025"
  price: 0
  currency: "USD"
  link: "https://localxr.com"
  codeLink: ""
  contact: "mailto:jiwan.cse@gmail.com?subject=LocalXR Inquiry"
  stack: ["nextdotjs/black/white","react","tailwindcss","sass","nodedotjs","axios","Eslint","Prettier"]
  images: [{"itemImageSrc":"/img/projects/localxr/localxr-cover.webp","alt":"LocalXR - Home Services Marketplace Cover"},{"itemImageSrc":"/img/projects/localxr/plumber-home.webp","alt":"LocalXR - Plumber Home Page"},{"itemImageSrc":"/img/projects/localxr/listing.webp","alt":"LocalXR - Service Listings"},{"itemImageSrc":"/img/projects/localxr/plumbing-services.webp","alt":"LocalXR - Plumbing Services Page"},{"itemImageSrc":"/img/projects/localxr/blog.webp","alt":"LocalXR - Blog Section"}]
  features: [{"text":"Location-Aware Search: Google Places Integration, ZIP Code Search, and hierarchical State/City navigation with smart normalization."},{"text":"Dynamic Listings & Routing: Automatically generated listings for thousands of location-service combinations with SEO-optimized URLs."},{"text":"Lead Generation System: Secure callback and contact forms with input sanitization, validation, and rate limiting."},{"text":"Performance First: Optimized for Core Web Vitals with dynamic imports, image optimization, and server-side rendering."},{"text":"Comprehensive SEO: Dynamic meta tags, canonical URLs, and automated sitemap generation for maximum search visibility."},{"text":"Scalable Architecture: Built on Next.js 15 and React 19 with a modular component system and context-driven state management."}]
  perspective: {"executive":"Engineered for high-volume lead generation. It solves the complexity of managing thousands of local service routes while maintaining lightning-fast performance and SEO dominance. Built to scale from a single city to a national platform with minimal operational overhead.","technical":"Built with Next.js 15 and React 19, utilizing Server-Side Rendering (SSR) for maximum SEO efficiency. Implements a hierarchical routing system for thousands of dynamic paths, optimized with incremental static regeneration (ISR) and advanced image processing for Core Web Vitals excellence."}
  previousProject: {"name":"AI Dynamic CRUD App","link":"/web-development-projects/ai-dynamic-crud-app/"}
  nextProject: {"name":"Contact Form Plugin","link":"/web-development-projects/contact-form-plugin/"}
---

<ProjectHero :project="$frontmatter.project" />

<ProjectGallery :images="$frontmatter.project.images" />

<ProjectTabs v-if="$frontmatter.project?.perspective?.executive" :project="$frontmatter.project">


## Executive Summary

**LocalXR** is a modern, SEO-optimized web platform that connects homeowners and property managers with verified local service providers across multiple home service categories. Built with Next.js 15 and React 19, the platform serves as a lead generation and matching service for home repair, maintenance, and improvement professionals.

### Why This Matters for Buyers

This is one of the clearest examples in the portfolio of a system built to turn organic traffic into revenue. It combines programmatic SEO, location-aware routing, and lead-capture logic into a platform designed for long-tail acquisition at scale.

## Business Problem

Local-service businesses need visibility across thousands of service and geography combinations, but manual landing-page creation does not scale. At the same time, they still need a conversion path that turns search visits into qualified leads.

## What I Built

- A Next.js lead-generation platform with location-aware routing
- Dynamic listing architecture for thousands of location-service combinations
- SEO infrastructure around metadata, canonicals, and sitemap generation
- Forms and tracking workflows designed to convert traffic into provider leads

## Best Fit If You Need Something Similar

This case study strongly supports [Programmatic Growth Engines](/web-development-services/programmatic-seo-and-growth/) and [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/). It is a best-fit example for directories, service marketplaces, and search-led lead engines.

### Core Business Model

LocalXR operates as a **free matching service** that facilitates connections between homeowners seeking services and independent local professionals. The platform generates revenue through lead generation, where service providers pay for qualified leads and phone connections. Homeowners can either call listed professionals directly or contact LocalXR agents for immediate assistance.

***

## Business Value & Benefits

### For Homeowners
- **Quick Access**: Find verified local service providers within minutes
- **Trust & Verification**: Connect with vetted, professional service providers
- **24/7 Availability**: Emergency services available around the clock
- **Multiple Service Categories**: Single platform for all home service needs
- **No Cost to Users**: Free matching service with no hidden fees
- **Location-Aware**: Personalized results based on geographic location

### For Service Providers
- **Lead Generation**: Access to qualified, location-specific leads
- **Direct Connections**: Phone-based lead capture for immediate contact
- **Geographic Targeting**: Reach customers in specific states and cities
- **Service-Specific Listings**: Targeted visibility for specialized services

### For Business Stakeholders
- **Scalable Revenue Model**: Lead-based monetization with high conversion potential
- **SEO-Optimized**: Dynamic page generation for thousands of location-service combinations
- **Performance-First**: Fast page loads and mobile optimization for better user experience
- **Analytics Integration**: Comprehensive tracking via Google Tag Manager for data-driven decisions
- **Compliance Ready**: CCPA compliance features (Do Not Sell page) and secure form handling

***

## Technical Architecture

### Framework & Core Technologies

- **Next.js 15.2.4**: Server-side rendering (SSR), static site generation (SSG), and dynamic routing
- **React 19.1.0**: Modern React with hooks and context API for state management
- **Tailwind CSS 4.1.4**: Utility-first CSS framework for responsive, mobile-first design
- **Sass/SCSS**: Component-level styling with modular CSS architecture
- **Sharp 0.34.4**: Image optimization and WebP conversion for performance

### Key Technical Features

#### 1. Dynamic Routing System
- **Location-Based URLs**: `/locations/[service]/[state]/[city]` structure
- **State Normalization**: Automatic conversion of state codes (e.g., "OH" → "Ohio") to full names
- **Slug Validation**: Whitelist-based validation prevents invalid URLs
- **Smart Redirects**: Handles ZIP code suffixes, state code variations, and reserved words

#### 2. Context-Driven State Management
- **LocationContext**: Manages user location, address, and geographic data
- **PhoneNumberContext**: Dynamic phone number assignment based on location/service
- **SlugContext**: Tracks current page slug for analytics and personalization

#### 3. SEO Optimization
- **Dynamic Meta Tags**: Page-specific titles, descriptions, and Open Graph tags
- **Canonical URLs**: Prevents duplicate content issues
- **Sitemap Generation**: Automated sitemap creation via `next-sitemap`
- **Structured Data Ready**: Semantic HTML and meta tag structure

#### 4. Performance Optimizations
- **Dynamic Imports**: Code splitting for reduced initial bundle size
- **Image Optimization**: Next.js Image component with WebP format and lazy loading
- **Bundle Analysis**: Built-in bundle analyzer for performance monitoring
- **Scroll Restoration**: Maintains scroll position on navigation

#### 5. Lead Generation System
- **Callback Forms**: Secure form submission with validation and sanitization
- **Contact Forms**: Multi-purpose contact forms with consent mechanisms
- **API Integration**: RESTful API endpoints for form submissions and data retrieval
- **Traffic Source Tracking**: Session-based tracking for marketing attribution

***

## Service Categories

The platform supports **20+ home service categories** organized into logical groups:

### Core Home Systems & Emergency
- Plumbing
- HVAC (Heating, Ventilation, Air Conditioning)
- Electrical
- Handyman Services
- Appliance Repair
- Damage Restoration
- Garage Door Repair & Installation

### Flooring & Interior Finishing
- Tiling
- Hardwood Flooring
- Carpet Installation
- Laminate & Vinyl Flooring
- Drywall & Painting

### Exterior, Roofing & Siding
- Roofing
- Siding
- Windows & Doors
- Gutter Cleaning

### Outdoors, Yard & Fencing
- Landscaping
- Deck & Patio
- Fencing

### Pest Control & Exterminators
- Pest Control

***

## Key Features & Functionality

### 1. Location-Aware Search
- **Google Places Integration**: Autocomplete address search with place details API
- **ZIP Code Search**: Quick location lookup by ZIP code
- **State/City Navigation**: Hierarchical location-based routing
- **Smart Normalization**: Converts state codes to full names, handles variations

### 2. Service Provider Listings
- **Dynamic Listings**: Generated listings based on location and service type
- **Listing Cards**: Display provider information, ratings, and contact details
- **Pagination**: Efficient handling of large listing sets
- **Category Filtering**: Filter listings by service category

### 3. Lead Capture Forms
- **Callback Request Form**: Primary lead generation form with validation
- **Contact Form**: General inquiry form with consent mechanisms
- **Form Security**: Input sanitization, XSS prevention, validation
- **Confirmation Popups**: User consent and confirmation dialogs

### 4. Content Management
- **JSON-Based Content**: Service descriptions and content stored in JSON files
- **Blog System**: Guides and advice section with filtering
- **Dynamic Content Rendering**: Component-based content rendering system
- **SEO Content**: Location and service-specific content generation

### 5. Analytics & Tracking
- **Google Tag Manager**: Comprehensive event tracking
- **Traffic Source Attribution**: Session-based marketing attribution
- **Scroll Tracking**: User engagement metrics
- **Form Submission Tracking**: Lead generation analytics

### 6. Mobile Optimization
- **Responsive Design**: Tailwind CSS mobile-first approach
- **Touch-Friendly UI**: Optimized for mobile interactions
- **Performance**: Fast load times on mobile networks
- **Progressive Enhancement**: Works across all device types

***

## SEO Strategy

### Technical SEO
- **Server-Side Rendering**: All pages rendered on server for better crawlability
- **Dynamic Meta Tags**: Unique titles and descriptions for each page variant
- **Canonical URLs**: Prevents duplicate content penalties
- **Sitemap Generation**: Automated XML sitemap for search engines
- **Semantic HTML**: Proper heading hierarchy and semantic markup

### Content SEO
- **Location-Specific Pages**: Thousands of unique pages for location-service combinations
- **Service Landing Pages**: Dedicated pages for each service category
- **Blog Content**: SEO-optimized guides and advice content
- **Internal Linking**: Strategic internal link structure

### Performance SEO
- **Core Web Vitals**: Optimized for Google's Core Web Vitals metrics
- **Image Optimization**: WebP format, lazy loading, responsive images
- **Code Splitting**: Reduced bundle sizes for faster loads
- **CDN Ready**: Static asset optimization for CDN delivery

***

## Technology Stack Summary

### Frontend
- **Next.js 15.2.4** - React framework with SSR/SSG
- **React 19.1.0** - UI library
- **Tailwind CSS 4.1.4** - Utility-first CSS
- **Sass 1.86.3** - CSS preprocessor

### Backend/API
- **Next.js API Routes** - Serverless API endpoints
- **Axios 1.9.0** - HTTP client
- **Google Places API** - Location autocomplete and details

### Build & Development
- **ESLint 9.24.0** - Code linting
- **Prettier 3.6.2** - Code formatting
- **@next/bundle-analyzer** - Bundle size analysis
- **next-sitemap 4.2.3** - Sitemap generation

### Image Processing
- **Sharp 0.34.4** - Image optimization
- **Next.js Image** - Optimized image component

***

## Security Features

- **Input Sanitization**: XSS prevention in all user inputs
- **Form Validation**: Client and server-side validation
- **Reserved Word Protection**: Prevents URL injection attacks
- **HTTPS Enforcement**: Secure connections for all API calls
- **CCPA Compliance**: "Do Not Sell" page and privacy controls
- **Content Security Policy**: CSP headers for additional security

***

## Performance Metrics

### Optimization Strategies
- **Dynamic Imports**: Code splitting for reduced initial load
- **Image Optimization**: WebP format, lazy loading, responsive images
- **Bundle Analysis**: Regular monitoring of bundle sizes
- **Static Generation**: Pre-rendered pages for instant loads
- **CDN Ready**: Optimized for content delivery networks

### Expected Performance
- Fast First Contentful Paint (FCP)
- Optimized Largest Contentful Paint (LCP)
- Minimal Cumulative Layout Shift (CLS)
- Efficient Time to Interactive (TTI)

***

## Future Enhancement Opportunities

1. **User Accounts**: Registration and saved searches
2. **Reviews & Ratings**: User-generated content for service providers
3. **Real-Time Chat**: In-app messaging between users and providers
4. **Payment Integration**: Direct payment processing for services
5. **Mobile App**: Native iOS/Android applications
6. **Provider Dashboard**: Self-service portal for service providers
7. **Advanced Analytics**: Enhanced reporting and insights
8. **Multi-Language Support**: Internationalization capabilities

***

## Compliance & Legal

- **Privacy Policy**: Comprehensive privacy policy page
- **Terms of Service**: Legal terms and conditions
- **CCPA Compliance**: California Consumer Privacy Act compliance
- **Do Not Sell**: Opt-out mechanism for data sales
- **Cookie Consent**: User consent mechanisms (if implemented)

***

## Contact & Support

For technical questions, feature requests, or business inquiries, refer to the project's contact form at `/contact` or the about page at `/about`.

***

## Document Metadata

**Last Updated**: 2025  
**Project Version**: 1.0.0  
**Framework**: Next.js 15.2.4  
**Primary Language**: JavaScript (React)  
**Maintainer**: Stack Seekers


</ProjectTabs>

<template v-else>

<ProjectTabs :project="$frontmatter.project" />

<div v-pre class="project-markdown-content text-lg line-height-4 mb-8">


## Executive Summary

**LocalXR** is a modern, SEO-optimized web platform that connects homeowners and property managers with verified local service providers across multiple home service categories. Built with Next.js 15 and React 19, the platform serves as a lead generation and matching service for home repair, maintenance, and improvement professionals.

### Why This Matters for Buyers

This is one of the clearest examples in the portfolio of a system built to turn organic traffic into revenue. It combines programmatic SEO, location-aware routing, and lead-capture logic into a platform designed for long-tail acquisition at scale.

## Business Problem

Local-service businesses need visibility across thousands of service and geography combinations, but manual landing-page creation does not scale. At the same time, they still need a conversion path that turns search visits into qualified leads.

## What I Built

- A Next.js lead-generation platform with location-aware routing
- Dynamic listing architecture for thousands of location-service combinations
- SEO infrastructure around metadata, canonicals, and sitemap generation
- Forms and tracking workflows designed to convert traffic into provider leads

## Best Fit If You Need Something Similar

This case study strongly supports [Programmatic Growth Engines](/web-development-services/programmatic-seo-and-growth/) and [Product Architecture & Scale](/web-development-services/product-architecture-and-scaling/). It is a best-fit example for directories, service marketplaces, and search-led lead engines.

### Core Business Model

LocalXR operates as a **free matching service** that facilitates connections between homeowners seeking services and independent local professionals. The platform generates revenue through lead generation, where service providers pay for qualified leads and phone connections. Homeowners can either call listed professionals directly or contact LocalXR agents for immediate assistance.

***

## Business Value & Benefits

### For Homeowners
- **Quick Access**: Find verified local service providers within minutes
- **Trust & Verification**: Connect with vetted, professional service providers
- **24/7 Availability**: Emergency services available around the clock
- **Multiple Service Categories**: Single platform for all home service needs
- **No Cost to Users**: Free matching service with no hidden fees
- **Location-Aware**: Personalized results based on geographic location

### For Service Providers
- **Lead Generation**: Access to qualified, location-specific leads
- **Direct Connections**: Phone-based lead capture for immediate contact
- **Geographic Targeting**: Reach customers in specific states and cities
- **Service-Specific Listings**: Targeted visibility for specialized services

### For Business Stakeholders
- **Scalable Revenue Model**: Lead-based monetization with high conversion potential
- **SEO-Optimized**: Dynamic page generation for thousands of location-service combinations
- **Performance-First**: Fast page loads and mobile optimization for better user experience
- **Analytics Integration**: Comprehensive tracking via Google Tag Manager for data-driven decisions
- **Compliance Ready**: CCPA compliance features (Do Not Sell page) and secure form handling

***

## Technical Architecture

### Framework & Core Technologies

- **Next.js 15.2.4**: Server-side rendering (SSR), static site generation (SSG), and dynamic routing
- **React 19.1.0**: Modern React with hooks and context API for state management
- **Tailwind CSS 4.1.4**: Utility-first CSS framework for responsive, mobile-first design
- **Sass/SCSS**: Component-level styling with modular CSS architecture
- **Sharp 0.34.4**: Image optimization and WebP conversion for performance

### Key Technical Features

#### 1. Dynamic Routing System
- **Location-Based URLs**: `/locations/[service]/[state]/[city]` structure
- **State Normalization**: Automatic conversion of state codes (e.g., "OH" → "Ohio") to full names
- **Slug Validation**: Whitelist-based validation prevents invalid URLs
- **Smart Redirects**: Handles ZIP code suffixes, state code variations, and reserved words

#### 2. Context-Driven State Management
- **LocationContext**: Manages user location, address, and geographic data
- **PhoneNumberContext**: Dynamic phone number assignment based on location/service
- **SlugContext**: Tracks current page slug for analytics and personalization

#### 3. SEO Optimization
- **Dynamic Meta Tags**: Page-specific titles, descriptions, and Open Graph tags
- **Canonical URLs**: Prevents duplicate content issues
- **Sitemap Generation**: Automated sitemap creation via `next-sitemap`
- **Structured Data Ready**: Semantic HTML and meta tag structure

#### 4. Performance Optimizations
- **Dynamic Imports**: Code splitting for reduced initial bundle size
- **Image Optimization**: Next.js Image component with WebP format and lazy loading
- **Bundle Analysis**: Built-in bundle analyzer for performance monitoring
- **Scroll Restoration**: Maintains scroll position on navigation

#### 5. Lead Generation System
- **Callback Forms**: Secure form submission with validation and sanitization
- **Contact Forms**: Multi-purpose contact forms with consent mechanisms
- **API Integration**: RESTful API endpoints for form submissions and data retrieval
- **Traffic Source Tracking**: Session-based tracking for marketing attribution

***

## Service Categories

The platform supports **20+ home service categories** organized into logical groups:

### Core Home Systems & Emergency
- Plumbing
- HVAC (Heating, Ventilation, Air Conditioning)
- Electrical
- Handyman Services
- Appliance Repair
- Damage Restoration
- Garage Door Repair & Installation

### Flooring & Interior Finishing
- Tiling
- Hardwood Flooring
- Carpet Installation
- Laminate & Vinyl Flooring
- Drywall & Painting

### Exterior, Roofing & Siding
- Roofing
- Siding
- Windows & Doors
- Gutter Cleaning

### Outdoors, Yard & Fencing
- Landscaping
- Deck & Patio
- Fencing

### Pest Control & Exterminators
- Pest Control

***

## Key Features & Functionality

### 1. Location-Aware Search
- **Google Places Integration**: Autocomplete address search with place details API
- **ZIP Code Search**: Quick location lookup by ZIP code
- **State/City Navigation**: Hierarchical location-based routing
- **Smart Normalization**: Converts state codes to full names, handles variations

### 2. Service Provider Listings
- **Dynamic Listings**: Generated listings based on location and service type
- **Listing Cards**: Display provider information, ratings, and contact details
- **Pagination**: Efficient handling of large listing sets
- **Category Filtering**: Filter listings by service category

### 3. Lead Capture Forms
- **Callback Request Form**: Primary lead generation form with validation
- **Contact Form**: General inquiry form with consent mechanisms
- **Form Security**: Input sanitization, XSS prevention, validation
- **Confirmation Popups**: User consent and confirmation dialogs

### 4. Content Management
- **JSON-Based Content**: Service descriptions and content stored in JSON files
- **Blog System**: Guides and advice section with filtering
- **Dynamic Content Rendering**: Component-based content rendering system
- **SEO Content**: Location and service-specific content generation

### 5. Analytics & Tracking
- **Google Tag Manager**: Comprehensive event tracking
- **Traffic Source Attribution**: Session-based marketing attribution
- **Scroll Tracking**: User engagement metrics
- **Form Submission Tracking**: Lead generation analytics

### 6. Mobile Optimization
- **Responsive Design**: Tailwind CSS mobile-first approach
- **Touch-Friendly UI**: Optimized for mobile interactions
- **Performance**: Fast load times on mobile networks
- **Progressive Enhancement**: Works across all device types

***

## SEO Strategy

### Technical SEO
- **Server-Side Rendering**: All pages rendered on server for better crawlability
- **Dynamic Meta Tags**: Unique titles and descriptions for each page variant
- **Canonical URLs**: Prevents duplicate content penalties
- **Sitemap Generation**: Automated XML sitemap for search engines
- **Semantic HTML**: Proper heading hierarchy and semantic markup

### Content SEO
- **Location-Specific Pages**: Thousands of unique pages for location-service combinations
- **Service Landing Pages**: Dedicated pages for each service category
- **Blog Content**: SEO-optimized guides and advice content
- **Internal Linking**: Strategic internal link structure

### Performance SEO
- **Core Web Vitals**: Optimized for Google's Core Web Vitals metrics
- **Image Optimization**: WebP format, lazy loading, responsive images
- **Code Splitting**: Reduced bundle sizes for faster loads
- **CDN Ready**: Static asset optimization for CDN delivery

***

## Technology Stack Summary

### Frontend
- **Next.js 15.2.4** - React framework with SSR/SSG
- **React 19.1.0** - UI library
- **Tailwind CSS 4.1.4** - Utility-first CSS
- **Sass 1.86.3** - CSS preprocessor

### Backend/API
- **Next.js API Routes** - Serverless API endpoints
- **Axios 1.9.0** - HTTP client
- **Google Places API** - Location autocomplete and details

### Build & Development
- **ESLint 9.24.0** - Code linting
- **Prettier 3.6.2** - Code formatting
- **@next/bundle-analyzer** - Bundle size analysis
- **next-sitemap 4.2.3** - Sitemap generation

### Image Processing
- **Sharp 0.34.4** - Image optimization
- **Next.js Image** - Optimized image component

***

## Security Features

- **Input Sanitization**: XSS prevention in all user inputs
- **Form Validation**: Client and server-side validation
- **Reserved Word Protection**: Prevents URL injection attacks
- **HTTPS Enforcement**: Secure connections for all API calls
- **CCPA Compliance**: "Do Not Sell" page and privacy controls
- **Content Security Policy**: CSP headers for additional security

***

## Performance Metrics

### Optimization Strategies
- **Dynamic Imports**: Code splitting for reduced initial load
- **Image Optimization**: WebP format, lazy loading, responsive images
- **Bundle Analysis**: Regular monitoring of bundle sizes
- **Static Generation**: Pre-rendered pages for instant loads
- **CDN Ready**: Optimized for content delivery networks

### Expected Performance
- Fast First Contentful Paint (FCP)
- Optimized Largest Contentful Paint (LCP)
- Minimal Cumulative Layout Shift (CLS)
- Efficient Time to Interactive (TTI)

***

## Future Enhancement Opportunities

1. **User Accounts**: Registration and saved searches
2. **Reviews & Ratings**: User-generated content for service providers
3. **Real-Time Chat**: In-app messaging between users and providers
4. **Payment Integration**: Direct payment processing for services
5. **Mobile App**: Native iOS/Android applications
6. **Provider Dashboard**: Self-service portal for service providers
7. **Advanced Analytics**: Enhanced reporting and insights
8. **Multi-Language Support**: Internationalization capabilities

***

## Compliance & Legal

- **Privacy Policy**: Comprehensive privacy policy page
- **Terms of Service**: Legal terms and conditions
- **CCPA Compliance**: California Consumer Privacy Act compliance
- **Do Not Sell**: Opt-out mechanism for data sales
- **Cookie Consent**: User consent mechanisms (if implemented)

***

## Contact & Support

For technical questions, feature requests, or business inquiries, refer to the project's contact form at `/contact` or the about page at `/about`.

***

## Document Metadata

**Last Updated**: 2025  
**Project Version**: 1.0.0  
**Framework**: Next.js 15.2.4  
**Primary Language**: JavaScript (React)  
**Maintainer**: Stack Seekers


</div>

</template>

<ConsultingBridge />

<AuditCTA />

<RelatedServices />

<ProjectNavigation :previous="$frontmatter.project?.previousProject" :next="$frontmatter.project?.nextProject" />

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>