---
title: "Emerald Design System"
description: "Our innovative digital strategy emphasizes efficiency through a 'build once, deploy multiple times' approach. Utilizing the Emerald design system, we ensure a consistent and seamless user experience across platforms. Significant investments in this system, coupled with an expanded team, have enhanced productivity and scalability, delivering cohesive digital solutions for optimal user engagement."
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "Emerald Design System"
  description: "Our innovative digital strategy emphasizes efficiency through a 'build once, deploy multiple times' approach. Utilizing the Emerald design system, we ensure a consistent and seamless user experience across platforms. Significant investments in this system, coupled with an expanded team, have enhanced productivity and scalability, delivering cohesive digital solutions for optimal user engagement."
  software: "Web"
  schema: "https://schema.org/SoftwareApplication"
  domain: "Banking"
  year: "2022"
  price: 0
  currency: "USD"
  link: "https://www.abnamro.com/en/home"
  codeLink: ""
  contact: "https://wa.me/917026217029?text=Hi%20there%2C%20I'm%20interested%20in%20building%20a%20modern%20Design%20System"
  stack: ["JavaScript","Lit","Axios","Webpack","Bitbucket","npm","Node.js","Git","ESLint","Prettier","storybook","markdown/black/white","vitepress"]
  images: [{"itemImageSrc":"/img/home/projects/ABN_Amro_design_system.webp","alt":"Cover screen for Emerald Design System project page"},{"itemImageSrc":"/img/projects/abn/emerald_home.webp","alt":"Emerald Design System Home Page"},{"itemImageSrc":"/img/projects/abn/emerald_storybook.webp","alt":"Emerald Design System Storybook"}]
  features: [{"text":"Responsive Design: Seamless experience across devices."},{"text":"Component-Based Architecture: Efficient and scalable codebase."},{"text":"Modern UI/UX: Clean aesthetics with intuitive navigation."},{"text":"API Integration: Robust connectivity with external services using Axios."},{"text":"Modular Development: Leverages Webpack for optimized, modular builds."},{"text":"Code Quality Assurance: Enforced by ESLint and Prettier for consistent, error-free code."},{"text":"Version Control: Streamlined collaboration via Git and Bitbucket."}]
  perspective: {"executive":"A strategic investment in design consistency and development velocity. The Emerald Design System provides a unified language for ABN AMRO's digital ecosystem, significantly reducing time-to-market for new features while ensuring a seamless, banking-grade user experience across all platforms. It represents a shift from bespoke development to a scalable, component-driven digital strategy.","technical":"Built using Lit (Web Components) for maximum interoperability and performance. The system utilizes a tokens-first approach to manage theming and visual variables, integrated with a robust Storybook documentation suite. The architecture emphasizes modularity and tree-shaking, ensuring that enterprise applications remain lightweight and fast while consuming complex design patterns."}
  previousProject: {"name":"IBRebuild for ABN AMRO BANK N.V.","link":"/web-development-projects/ibrebuild-for-abn-amro-bank-n-v/"}
  nextProject: {"name":"Tech Create","link":"/web-development-projects/tech-create/"}
---

<ProjectHero :project="$frontmatter.project" />

<ProjectGallery :images="$frontmatter.project.images" />

<ProjectTabs v-if="$frontmatter.project?.perspective?.executive" :project="$frontmatter.project">

## The Architectural Vision

The Emerald Design System was conceived not just as a library of components, but as a strategic asset to unify the digital experience across ABN AMRO's diverse banking product suite. The core challenge was to provide a consistent look and feel while allowing for the specific functional requirements of different banking domains.

### Technical Implementation

We chose **Lit** (formerly LitElement) as the core technology for the components. This choice was driven by the need for:
- **Framework Agnosticism:** Components can be used in React, Vue, Angular, or plain HTML/JS applications.
- **Performance:** Minimal overhead and leveraging native browser standards like Shadow DOM and Scoped CSS.
- **Interoperability:** Seamless integration with existing legacy systems.

### Design Tokens & Theming

At the heart of Emerald is a robust design token system. We manage visual variables—colors, typography, spacing, and elevation—through a centralized token engine. This allows for:
- **Rapid Rebranding:** Updating the visual identity across all applications by changing a single set of tokens.
- **Dark Mode Support:** Built-in theme switching capabilities.
- **Consistency:** Eliminating "visual debt" by ensuring all products use the exact same design specifications.

### Developer Experience

To ensure high adoption rates among internal teams, we focused heavily on documentation and tooling:
- **Storybook:** A comprehensive playground where developers can explore components, test variations, and copy code snippets.
- **NPM Package Management:** Streamlined delivery and versioning of the design system.
- **Standardized CI/CD:** Automated testing and visual regression checks to maintain component integrity.


</ProjectTabs>

<template v-else>

<ProjectTabs :project="$frontmatter.project" />

<div v-pre class="project-markdown-content text-lg line-height-4 mb-8">

## The Architectural Vision

The Emerald Design System was conceived not just as a library of components, but as a strategic asset to unify the digital experience across ABN AMRO's diverse banking product suite. The core challenge was to provide a consistent look and feel while allowing for the specific functional requirements of different banking domains.

### Technical Implementation

We chose **Lit** (formerly LitElement) as the core technology for the components. This choice was driven by the need for:
- **Framework Agnosticism:** Components can be used in React, Vue, Angular, or plain HTML/JS applications.
- **Performance:** Minimal overhead and leveraging native browser standards like Shadow DOM and Scoped CSS.
- **Interoperability:** Seamless integration with existing legacy systems.

### Design Tokens & Theming

At the heart of Emerald is a robust design token system. We manage visual variables—colors, typography, spacing, and elevation—through a centralized token engine. This allows for:
- **Rapid Rebranding:** Updating the visual identity across all applications by changing a single set of tokens.
- **Dark Mode Support:** Built-in theme switching capabilities.
- **Consistency:** Eliminating "visual debt" by ensuring all products use the exact same design specifications.

### Developer Experience

To ensure high adoption rates among internal teams, we focused heavily on documentation and tooling:
- **Storybook:** A comprehensive playground where developers can explore components, test variations, and copy code snippets.
- **NPM Package Management:** Streamlined delivery and versioning of the design system.
- **Standardized CI/CD:** Automated testing and visual regression checks to maintain component integrity.


</div>

</template>

<ConsultingBridge />

<AuditCTA />

<RelatedServices />

<ProjectNavigation :previous="$frontmatter.project?.previousProject" :next="$frontmatter.project?.nextProject" />

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>