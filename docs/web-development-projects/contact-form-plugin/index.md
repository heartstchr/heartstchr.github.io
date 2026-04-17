---
title: Contact Form Plugin
description: A lightweight, embeddable contact form widget that can be integrated into any website and automatically forwards submissions to a Notion database. Generator-based architecture allowing multiple form configurations with various field combinations - completely free and easy to customize.
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "Contact Form Plugin"
  description: "A lightweight, embeddable contact form widget that can be integrated into any website and automatically forwards submissions to a Notion database. Generator-based architecture allowing multiple form configurations with various field combinations - completely free and easy to customize."
  software: "Widget"
  schema: "https://schema.org/WebApplication"
  domain: "Contact Forms & Lead Capture"
  year: "2025"
  price: "0"
  currency: "USD"
  link: "https://contact-form-app.stackseekers.com/"
  codeLink: 
  contact: "mailto:jiwan.cse@gmail.com?subject=Contact Form Plugin Inquiry"
  stack: ["javascript","notion/black/white","html5","css","netlify","json/black/white","github/black/white"]
  images: [{"itemImageSrc":"/img/projects/contact-form-plugin/contact-form-widget-cover.webp","alt":"Contact Form Plugin - Embeddable Contact Form"},{"itemImageSrc":"/img/projects/contact-form-plugin/business-contact-form-widget-cover.webp","alt":"Contact Form Plugin - Business Contact Form"},{"itemImageSrc":"/img/projects/contact-form-plugin/simple-contact-form-widget.webp","alt":"Contact Form Plugin - Simple Contact Form"},{"itemImageSrc":"/img/projects/contact-form-plugin/live-demo-contact-form-widget.webp","alt":"Contact Form Plugin - Live Demo"}]
  features: [{"text":"Generator-Based Architecture: Create unlimited form configurations with dynamic field combinations without code changes"},{"text":"Automatic Notion Integration: Form submissions instantly saved to your Notion database with structured properties"},{"text":"Security-First Design: Built-in rate limiting (5 req/min), CAPTCHA verification, input sanitization, and XSS protection"},{"text":"Easy Integration: Copy-paste one script tag to embed into any website - works across all platforms and frameworks"},{"text":"Flexible Field Types: Support for text, email, phone, website, select dropdowns, textarea, and checkbox fields"},{"text":"Customizable Styling: Full theme control with custom colors, fonts, border radius, and responsive max-width"},{"text":"Client & Server Validation: Comprehensive validation on both frontend and backend for data integrity"},{"text":"Privacy Protected: Rate limiting prevents spam while CAPTCHA blocks automated bot submissions"}]
  details: "## Architecture Overview\n\n### System Components\n\n```\n┌───────────────────────────────────────────────────────────┐\n│                     USER'S WEBSITE                        │\n│  ┌────────────────────────────────────────────────────┐   │\n│  │  contact-widget.js (Generator)                     │   │\n│  │  ┌─────────────────────────────────────────────┐   │   │\n│  │  │  ContactWidget Instance                     │   │   │\n│  │  │  - Configures form fields                   │   │   │\n│  │  │  - Generates HTML dynamically               │   │   │\n│  │  │  - Handles user interactions                │   │   │\n│  │  │  - Validates inputs                         │   │   │\n│  │  │  - Sends data to backend                    │   │   │\n│  │  └─────────────────────────────────────────────┘   │   │\n│  └────────────────────────────────────────────────────┘   │\n└───────────────────────────────────────────────────────────┘\n                            │\n                            │ HTTPS POST (JSON)\n                            ▼\n┌────────────────────────────────────────────────────────────┐\n│                     NETLIFY BACKEND                        │\n│  ┌─────────────────────────────────────────────────────┐   │\n│  │  /.netlify/functions/submit-contact                 │   │\n│  │  - Rate limiting (5 req/min/IP)                     │   │\n│  │  - CAPTCHA verification                             │   │\n│  │  - Input sanitization                               │   │\n│  │  - Email validation                                 │   │\n│  │  - Notion API integration                           │   │\n│  └─────────────────────────────────────────────────────┘   │\n└────────────────────────────────────────────────────────────┘\n                            │\n                            │ Notion API\n                            ▼\n┌─────────────────────────────────────────────────────────────┐\n│                   NOTION DATABASE                           │\n│  - Stores contact submissions                               │\n│  - Structured as database rows                              │\n└─────────────────────────────────────────────────────────────┘\n```\n\n---\n\n## Generator System\n\n### What is a Generator?\n\nA **generator** in this application is an instance of the `ContactWidget` class that is configured with a specific set of form fields and UI options. Each generator produces a unique form based on its configuration.\n\n### Generator Configuration Pattern\n\n```javascript\nnew ContactWidget('#container', {\n    // API Configuration\n    apiUrl: 'https://your-domain.com/.netlify/functions/submit-contact',\n    \n    // Theme Configuration\n    theme: {\n        primaryColor: '#3b82f6',      // Button color\n        borderRadius: '12px',         // Form border radius\n        fontFamily: 'sans-serif',     // Font family\n        maxWidth: '500px'             // Maximum width\n    },\n    \n    // Form Configuration\n    form: {\n        title: 'Contact Us',                    // Form heading\n        submitText: 'Send Message',             // Submit button text\n        successMessage: 'Thank you!',           // Success message\n        errorMessage: 'Failed to send',         // Error message\n        enableCaptcha: true,                   // Enable CAPTCHA\n        captchaSiteKey: 'your-site-key'        // CAPTCHA site key\n    },\n    \n    // Field Configuration (THE GENERATOR HEART)\n    fields: {\n        name: { enabled: true, required: true },\n        email: { enabled: true, required: true },\n        phone: { enabled: false },\n        company: { enabled: true, required: false },\n        subject: { enabled: true, required: true, type: 'select', options: [...] },\n        message: { enabled: true, required: true, type: 'textarea', rows: 4 },\n        website: { enabled: false },\n        budget: { enabled: false },\n        newsletter: { enabled: false }\n    }\n});\n```\n---\n\n## Core Components\n\n### 1. ContactWidget Class (`contact-widget.js`)\n\n**Location**: `public/contact-widget.js` (lines 133-620)\n\n**Responsibility**: Core generator engine that:\n- Accepts configuration objects\n- Dynamically generates form HTML\n- Manages form state and user interactions\n- Handles client-side validation\n- Communicates with backend API\n\n**Key Methods**:\n\n```javascript\nclass ContactWidget {\n    constructor(container, options)     // Initialize widget\n    mergeConfig(defaultConfig, userConfig) // Deep merge configs\n    init()                                // Setup widget\n    generateHTML()                       // Generate form DOM\n    generateFieldHTML(key, field)       // Generate individual field\n    loadRecaptcha()                      // Load CAPTCHA script\n    bindEvents()                         // Attach event listeners\n    handleSubmit(e)                      // Process form submission\n    showStatus(message, isSuccess)      // Display status messages\n    setLoading(isLoading)                // Show/hide loading state\n}\n```\n\n**Field Types Supported**:\n- `text` - Standard text input\n- `email` - Email input with validation\n- `tel` - Phone number input\n- `url` - Website URL input\n- `textarea` - Multi-line text input\n- `select` - Dropdown selection\n- `checkbox` - Boolean checkbox\n\n### 2. Backend Function (`submit-contact.js`)\n\n**Location**: `netlify/functions/submit-contact.js`\n\n**Responsibility**: Server-side processing including:\n- Rate limiting (5 requests/minute per IP)\n- CAPTCHA verification\n- Input sanitization (XSS protection)\n- Email validation\n- Notion API integration\n- Error handling and logging\n\n**Key Functions**:\n\n```javascript\n// Rate limiting\ncheckRateLimit(clientIP)\n\n// CAPTCHA verification\nverifyCaptcha(captchaToken, secretKey)\n\n// Input sanitization\nsanitizeInput(input)\n\n// Main handler\nexport default async function handler(request, context)\n```\n\n**Notion Property Mapping**:\n```javascript\n{\n    name       → Name (title)\n    email      → Email (email)\n    phone      → Phone (phone_number)\n    company    → Company (rich_text)\n    subject    → Subject (rich_text)\n    message    → Message (rich_text)\n    website    → Website (url)\n    budget     → Budget (rich_text)\n    newsletter → Newsletter (select: Yes/No)\n}\n```\n\n### 3. Build Script (`build-inject-env.js`)\n\n**Location**: Root directory\n\n**Responsibility**: Injects environment variables at build time:\n- Netlify site URL\n- CAPTCHA site key\n- Cache-busting timestamps\n\n**Process**:\n1. Reads `NETLIFY_URL` from environment\n2. Reads `RECAPTCHA_SITE_KEY` from environment\n3. Injects into `contact-widget.js`\n4. Updates HTML references with cache-busting\n5. Updates sitemap.xml with site URL\n\n---\n\n## Security Mechanisms\n\n### 1. Rate Limiting\n- **5 requests per minute per IP address**\n- In-memory storage (resets on serverless cold start)\n- Prevents spam and DDoS attacks\n\n### 2. CAPTCHA Protection\n- Google reCAPTCHA v2 integration\n- Client-side CAPTCHA widget\n- Server-side verification\n- Optional (can be disabled)\n\n### 3. Input Sanitization\n```javascript\n// Removes dangerous content:\n- <script> tags\n- <iframe> tags\n- <object> and <embed> tags\n- javascript: URLs\n- Event handlers (onclick, etc.)\n```\n\n### 4. Email Validation\n- Client-side: Basic regex validation\n- Server-side: Same regex for security\n- Format: `^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$`\n\n### 5. CORS Headers\n- Allows requests from any origin\n- Proper preflight handling\n- Configured in netlify.toml\n\n---\n\n## Build & Deployment\n\n### Build Process\n\n```bash\nnpm run build\n  ↓\nnode build-inject-env.js\n  ↓\n  ├── Read process.env.URL\n  ├── Read process.env.RECAPTCHA_SITE_KEY\n  ├── Inject into contact-widget.js\n  ├── Update index.html with cache-busting\n  └── Update sitemap.xml with site URL\n```\n\n### Deployment\n\n```bash\nnpm run deploy\n  ↓\nNetlify CLI detects:\n  ├── netlify.toml configuration\n  ├── Build command: npm run build\n  ├── Publish directory: public\n  ├── Functions directory: netlify/functions\n  └── Environment variables (set in Netlify dashboard)\n```\n\n### Required Environment Variables\n\nSet in Netlify dashboard → Site settings → Environment variables:\n\n```bash\nNOTION_API_KEY=secret_xxx          # Notion integration API key\nNOTION_DATABASE_ID=abc123          # Notion database ID\nRECAPTCHA_SITE_KEY=6Lcxxx          # Google reCAPTCHA site key (optional)\nRECAPTCHA_SECRET_KEY=6Lcxxx        # Google reCAPTCHA secret (optional)\n```\n\n---\n\n## How Generators Work\n\n### Example: Creating a Business Contact Form\n\n```javascript\n// 1. Load the widget script\n<script src=\"https://your-domain.com/contact-widget.js\"></script>\n\n// 2. Create a container\n<div id=\"my-contact-form\"></div>\n\n// 3. Initialize the generator with business-focused configuration\n<script>\nnew ContactWidget('#my-contact-form', {\n    form: {\n        title: 'Business Contact',\n        submitText: 'Submit Inquiry',\n        enableCaptcha: false\n    },\n    fields: {\n        name: { enabled: true, required: true },\n        email: { enabled: true, required: true },\n        company: { enabled: true, required: true },\n        phone: { enabled: true, required: false },\n        subject: { \n            enabled: true, \n            required: true, \n            type: 'select',\n            options: [\n                { value: '', text: 'Select...', disabled: true, selected: true },\n                { value: 'Partnership', text: 'Partnership' },\n                { value: 'Sales', text: 'Sales Inquiry' }\n            ]\n        },\n        budget: { \n            enabled: true, \n            required: false,\n            type: 'select',\n            options: [\n                { value: '', text: 'Select...', disabled: true, selected: true },\n                { value: '$1k-5k', text: '$1,000 - $5,000' },\n                { value: '$5k-10k', text: '$5,000 - $10,000' }\n            ]\n        },\n        message: { enabled: true, required: true },\n        newsletter: { enabled: true, required: false }\n    }\n});\n</script>\n```\n\n### Generator Execution Sequence\n\n1. **Configuration Merge**: User options merged with `DEFAULT_CONFIG`\n2. **HTML Generation**: `generateHTML()` iterates through enabled fields\n3. **Field Rendering**: Each field calls `generateFieldHTML()` \n4. **DOM Injection**: HTML is injected into container\n5. **Event Binding**: Form submit event attached\n6. **CAPTCHA Loading**: If enabled, loads Google reCAPTCHA\n\n---\n\n## Implementing New Generators\n\n### Step 1: Add New Field Type to Widget\n\n**In `contact-widget.js`** (add to `generateFieldHTML` method around line 344):\n\n```javascript\ncase 'date':\n    inputHTML = `\n        <input \n            type=\"date\" \n            id=\"contact-${key}\" \n            name=\"${key}\" \n            ${requiredAttr}\n            style=\"...\"\n        >\n    `;\n    break;\n\ncase 'range':\n    inputHTML = `\n        <input \n            type=\"range\" \n            id=\"contact-${key}\" \n            name=\"${key}\" \n            min=\"${field.min || 0}\"\n            max=\"${field.max || 100}\"\n            ${requiredAttr}\n            style=\"...\"\n        >\n    `;\n    break;\n```\n\n### Step 2: Update Backend to Handle New Field\n\n**In `submit-contact.js`** (add to field mapping around line 194):\n\n```javascript\ncase 'date':\n    notionProperties[\"Event Date\"] = { \n        date: { start: value } \n    };\n    break;\n\ncase 'range':\n    notionProperties[\"Score\"] = { \n        number: parseInt(value)\n    };\n    break;\n```\n\n### Step 3: Create Example Usage\n\n**In `index.html` or `examples.html`**:\n\n```javascript\nnew ContactWidget('#date-form', {\n    fields: {\n        name: { enabled: true, required: true },\n        email: { enabled: true, required: true },\n        eventDate: { \n            enabled: true, \n            required: true, \n            type: 'date',\n            label: 'Select Event Date'\n        },\n        guests: { \n            enabled: true, \n            required: false, \n            type: 'range',\n            label: 'Number of Guests',\n            min: 1,\n            max: 100\n        }\n    }\n});\n```\n\n---\n\n## Debugging Guide\n\n### Client-Side Debugging\n\n**Enable Console Logging**:\n```javascript\nnew ContactWidget('#form', {\n    apiUrl: '...',\n    debug: true  // Add this to see detailed logs\n});\n```\n\n**Common Issues**:\n\n1. **Form not rendering**\n   - Check: Is script loaded? Check browser console for errors\n   - Check: Is container selector correct? (`#my-contact-form`)\n   - Check: DOM loaded? Wrap in `DOMContentLoaded` listener\n\n2. **Submission fails**\n   - Check: API URL correct? Test in browser console: `fetch('url', {...})`\n   - Check: CORS headers? Check Network tab in DevTools\n   - Check: Rate limit? Wait 1 minute and retry\n\n3. **CAPTCHA not loading**\n   - Check: Site key is set? Check environment variables\n   - Check: Domain approved in Google reCAPTCHA admin\n   - Check: Browser console for script load errors\n\n### Backend Debugging\n\n**Check Netlify Function Logs**:\n\n```bash\n# In terminal\nnetlify dev\n\n# Or check Netlify dashboard:\n# Site → Functions → submit-contact → View logs\n```\n\n**Common Backend Issues**:\n\n1. **\"Notion configuration missing\"**\n   - Check: `NOTION_API_KEY` is set in Netlify dashboard\n   - Check: `NOTION_DATABASE_ID` is set\n\n2. **\"Rate limit exceeded\"**\n   - Wait 1 minute, or increase `MAX_REQUESTS_PER_WINDOW`\n\n3. **\"CAPTCHA verification failed\"**\n   - Check: `RECAPTCHA_SECRET_KEY` is set\n   - Check: CAPTCHA token is being sent from client\n\n4. **\"Invalid email format\"**\n   - Email regex is strict: `^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$`\n   - Test with valid email like `test@example.com`\n\n### Testing Examples\n\n**Test Basic Generator**:\n```bash\n# Start local dev server\nnpm run dev\n\n# Open browser to:\nhttp://localhost:8888/index.html\nhttp://localhost:8888/examples.html\n\n# Check:\n- Forms render correctly\n- Submit shows loading spinner\n- Success message appears\n- Check Notion database for new entry\n```\n\n---\n\n## Extension Roadmap\n\n### Adding New Features\n\n**1. Custom Validation Rules**\n\n```javascript\n// In contact-widget.js\nfields: {\n    phone: { \n        enabled: true, \n        required: true,\n        validation: {\n            pattern: /^\\+?[1-9]\\d{1,14}$/,\n            message: 'Please enter a valid phone number'\n        }\n    }\n}\n```\n\n**2. Conditional Field Display**\n\n```javascript\n// Show budget field only if subject is \"Sales\"\nfields: {\n    budget: {\n        enabled: true,\n        showIf: { field: 'subject', equals: 'Sales' }\n    }\n}\n```\n\n**3. File Upload Support**\n\n```javascript\n// In generateFieldHTML\ncase 'file':\n    inputHTML = `\n        <input type=\"file\" \n               accept=\"${field.accept || '*/*'}\"\n               max-size=\"${field.maxSize || 10485760}\"\n        >\n    `;\n    break;\n```\n\n**4. Webhook Integration**\n\n```javascript\n// In submit-contact.js\nconst webhookUrl = process.env.WEBHOOK_URL;\nif (webhookUrl) {\n    await fetch(webhookUrl, {\n        method: 'POST',\n        body: JSON.stringify(formData)\n    });\n}\n```\n\n**5. Database Options**\n\nSupport for multiple backends:\n- Airtable\n- Google Sheets\n- Custom webhook\n- Email notification\n\n```javascript\n// In netlify.toml or environment\nDATABASE_TYPE=notion|airtable|webhook|email\n```\n\n---\n\n## Key Takeaways for Developers\n\n### Understanding the Generator Pattern\n\n1. **Every form is a generator instance** - Each `new ContactWidget()` creates a unique form\n2. **Configuration drives behavior** - Fields, validation, and styling all from config\n3. **Separation of concerns**:\n   - Client: UI rendering and validation\n   - Backend: Security and data processing\n   - Notion: Data storage\n\n### Code Flow Quick Reference\n\n```\nUser Input → Form Collection → Client Validation \n    → API Request → Rate Limiting → CAPTCHA Verification \n    → Input Sanitization → Notion API → Success/Error Response \n    → UI Update\n```\n\n### Common Configurations\n\n**Minimal Form**:\n```javascript\n{ name: true, email: true, message: true }\n```\n\n**Business Form**:\n```javascript\n{ name, email, company, phone, subject, message }\n```\n\n**Support Ticket**:\n```javascript\n{ name, email, subject (with options), message }\n```\n\n**Lead Capture**:\n```javascript\n{ name, email, newsletter: true }\n```\n\n---\n\n## Environment Setup\n\n### Local Development\n\n```bash\n# 1. Clone repository\ngit clone <repo-url>\ncd contact-us\n\n# 2. Install dependencies\nnpm install\n\n# 3. Create .env file (copy from env.example)\ncp env.example .env\n\n# 4. Edit .env with your credentials\nNOTION_API_KEY=your_key\nNOTION_DATABASE_ID=your_id\nRECAPTCHA_SITE_KEY=your_key\nRECAPTCHA_SECRET_KEY=your_secret\n\n# 5. Run local dev server\nnpm run dev\n\n# Opens on http://localhost:8888\n```\n\n### Production Deployment\n\n```bash\n# 1. Push to GitHub\ngit push origin main\n\n# 2. Netlify auto-deploys (if connected)\n# Or manually:\nnetlify deploy --prod\n\n# 3. Set environment variables in Netlify dashboard\n# Site settings → Environment variables\n```\n\n---\n\n## Summary\n\nThis project implements a **generator-based contact form system** where:\n\n1. **Core Engine**: `ContactWidget` class generates forms dynamically\n2. **Generators**: Different configurations create different form types\n3. **Data Flow**: Client → Netlify Function → Notion Database\n4. **Security**: Rate limiting, CAPTCHA, input sanitization\n5. **Extensibility**: Easy to add fields, validations, or backends\n\n**Key Files**:\n- `contact-widget.js` - Generator engine (client-side)\n- `submit-contact.js` - Backend processor (serverless function)\n- `build-inject-env.js` - Build-time environment injection\n\n**Key Concepts**:\n- Configuration-driven form generation\n- Serverless architecture for scalability\n- Security-first approach\n- Notion integration for data storage\n\nThis architecture makes it easy to create new form variations (generators) by simply changing the configuration object passed to `ContactWidget`, without modifying the core code.\n\n"
  previousProject: {"name":"Local Home Services Pros","link":"/web-development-projects/local-home-services-pros/"}
  nextProject: {"name":"AI-Powered Influencer Platform - Vibe3","link":"/web-development-projects/ai-powered-influencer-platform-vibe3/"}
---
<article class="project-details">
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
      <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <meta itemprop="price" :content="$frontmatter.project.price" />
        <meta itemprop="priceCurrency" :content="$frontmatter.project.currency" />
      </div>
      <div class="flex md:flex-row flex-column justify-content-center align-items-center gap-2 my-4 w-full max-w-96">
        <a v-if="$frontmatter.project.contact" :href="'/contact/?subject=' + encodeURIComponent('Custom Request: ' + $frontmatter.project.name)"
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
</article>
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

## Architecture Overview

### System Components

```
┌───────────────────────────────────────────────────────────┐
│                     USER'S WEBSITE                        │
│  ┌────────────────────────────────────────────────────┐   │
│  │  contact-widget.js (Generator)                     │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │  ContactWidget Instance                     │   │   │
│  │  │  - Configures form fields                   │   │   │
│  │  │  - Generates HTML dynamically               │   │   │
│  │  │  - Handles user interactions                │   │   │
│  │  │  - Validates inputs                         │   │   │
│  │  │  - Sends data to backend                    │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  └────────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────┘
                            │
                            │ HTTPS POST (JSON)
                            ▼
┌────────────────────────────────────────────────────────────┐
│                     NETLIFY BACKEND                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  /.netlify/functions/submit-contact                 │   │
│  │  - Rate limiting (5 req/min/IP)                     │   │
│  │  - CAPTCHA verification                             │   │
│  │  - Input sanitization                               │   │
│  │  - Email validation                                 │   │
│  │  - Notion API integration                           │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘
                            │
                            │ Notion API
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                   NOTION DATABASE                           │
│  - Stores contact submissions                               │
│  - Structured as database rows                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Generator System

### What is a Generator?

A **generator** in this application is an instance of the `ContactWidget` class that is configured with a specific set of form fields and UI options. Each generator produces a unique form based on its configuration.

### Generator Configuration Pattern

```javascript
new ContactWidget('#container', {
    // API Configuration
    apiUrl: 'https://your-domain.com/.netlify/functions/submit-contact',
    
    // Theme Configuration
    theme: {
        primaryColor: '#3b82f6',      // Button color
        borderRadius: '12px',         // Form border radius
        fontFamily: 'sans-serif',     // Font family
        maxWidth: '500px'             // Maximum width
    },
    
    // Form Configuration
    form: {
        title: 'Contact Us',                    // Form heading
        submitText: 'Send Message',             // Submit button text
        successMessage: 'Thank you!',           // Success message
        errorMessage: 'Failed to send',         // Error message
        enableCaptcha: true,                   // Enable CAPTCHA
        captchaSiteKey: 'your-site-key'        // CAPTCHA site key
    },
    
    // Field Configuration (THE GENERATOR HEART)
    fields: {
        name: { enabled: true, required: true },
        email: { enabled: true, required: true },
        phone: { enabled: false },
        company: { enabled: true, required: false },
        subject: { enabled: true, required: true, type: 'select', options: [...] },
        message: { enabled: true, required: true, type: 'textarea', rows: 4 },
        website: { enabled: false },
        budget: { enabled: false },
        newsletter: { enabled: false }
    }
});
```
---

## Core Components

### 1. ContactWidget Class (`contact-widget.js`)

**Location**: `public/contact-widget.js` (lines 133-620)

**Responsibility**: Core generator engine that:
- Accepts configuration objects
- Dynamically generates form HTML
- Manages form state and user interactions
- Handles client-side validation
- Communicates with backend API

**Key Methods**:

```javascript
class ContactWidget {
    constructor(container, options)     // Initialize widget
    mergeConfig(defaultConfig, userConfig) // Deep merge configs
    init()                                // Setup widget
    generateHTML()                       // Generate form DOM
    generateFieldHTML(key, field)       // Generate individual field
    loadRecaptcha()                      // Load CAPTCHA script
    bindEvents()                         // Attach event listeners
    handleSubmit(e)                      // Process form submission
    showStatus(message, isSuccess)      // Display status messages
    setLoading(isLoading)                // Show/hide loading state
}
```

**Field Types Supported**:
- `text` - Standard text input
- `email` - Email input with validation
- `tel` - Phone number input
- `url` - Website URL input
- `textarea` - Multi-line text input
- `select` - Dropdown selection
- `checkbox` - Boolean checkbox

### 2. Backend Function (`submit-contact.js`)

**Location**: `netlify/functions/submit-contact.js`

**Responsibility**: Server-side processing including:
- Rate limiting (5 requests/minute per IP)
- CAPTCHA verification
- Input sanitization (XSS protection)
- Email validation
- Notion API integration
- Error handling and logging

**Key Functions**:

```javascript
// Rate limiting
checkRateLimit(clientIP)

// CAPTCHA verification
verifyCaptcha(captchaToken, secretKey)

// Input sanitization
sanitizeInput(input)

// Main handler
export default async function handler(request, context)
```

**Notion Property Mapping**:
```javascript
{
    name       → Name (title)
    email      → Email (email)
    phone      → Phone (phone_number)
    company    → Company (rich_text)
    subject    → Subject (rich_text)
    message    → Message (rich_text)
    website    → Website (url)
    budget     → Budget (rich_text)
    newsletter → Newsletter (select: Yes/No)
}
```

### 3. Build Script (`build-inject-env.js`)

**Location**: Root directory

**Responsibility**: Injects environment variables at build time:
- Netlify site URL
- CAPTCHA site key
- Cache-busting timestamps

**Process**:
1. Reads `NETLIFY_URL` from environment
2. Reads `RECAPTCHA_SITE_KEY` from environment
3. Injects into `contact-widget.js`
4. Updates HTML references with cache-busting
5. Updates sitemap.xml with site URL

---

## Security Mechanisms

### 1. Rate Limiting
- **5 requests per minute per IP address**
- In-memory storage (resets on serverless cold start)
- Prevents spam and DDoS attacks

### 2. CAPTCHA Protection
- Google reCAPTCHA v2 integration
- Client-side CAPTCHA widget
- Server-side verification
- Optional (can be disabled)

### 3. Input Sanitization
```javascript
// Removes dangerous content:
- <script> tags
- <iframe> tags
- <object> and <embed> tags
- javascript: URLs
- Event handlers (onclick, etc.)
```

### 4. Email Validation
- Client-side: Basic regex validation
- Server-side: Same regex for security
- Format: `^[^\s@]+@[^\s@]+\.[^\s@]+$`

### 5. CORS Headers
- Allows requests from any origin
- Proper preflight handling
- Configured in netlify.toml

---

## Build & Deployment

### Build Process

```bash
npm run build
  ↓
node build-inject-env.js
  ↓
  ├── Read process.env.URL
  ├── Read process.env.RECAPTCHA_SITE_KEY
  ├── Inject into contact-widget.js
  ├── Update index.html with cache-busting
  └── Update sitemap.xml with site URL
```

### Deployment

```bash
npm run deploy
  ↓
Netlify CLI detects:
  ├── netlify.toml configuration
  ├── Build command: npm run build
  ├── Publish directory: public
  ├── Functions directory: netlify/functions
  └── Environment variables (set in Netlify dashboard)
```

### Required Environment Variables

Set in Netlify dashboard → Site settings → Environment variables:

```bash
NOTION_API_KEY=secret_xxx          # Notion integration API key
NOTION_DATABASE_ID=abc123          # Notion database ID
RECAPTCHA_SITE_KEY=6Lcxxx          # Google reCAPTCHA site key (optional)
RECAPTCHA_SECRET_KEY=6Lcxxx        # Google reCAPTCHA secret (optional)
```

---

## How Generators Work

### Example: Creating a Business Contact Form

```javascript
// 1. Load the widget script
<script src="https://your-domain.com/contact-widget.js"></script>

// 2. Create a container
<div id="my-contact-form"></div>

// 3. Initialize the generator with business-focused configuration
<script>
new ContactWidget('#my-contact-form', {
    form: {
        title: 'Business Contact',
        submitText: 'Submit Inquiry',
        enableCaptcha: false
    },
    fields: {
        name: { enabled: true, required: true },
        email: { enabled: true, required: true },
        company: { enabled: true, required: true },
        phone: { enabled: true, required: false },
        subject: { 
            enabled: true, 
            required: true, 
            type: 'select',
            options: [
                { value: '', text: 'Select...', disabled: true, selected: true },
                { value: 'Partnership', text: 'Partnership' },
                { value: 'Sales', text: 'Sales Inquiry' }
            ]
        },
        budget: { 
            enabled: true, 
            required: false,
            type: 'select',
            options: [
                { value: '', text: 'Select...', disabled: true, selected: true },
                { value: '$1k-5k', text: '$1,000 - $5,000' },
                { value: '$5k-10k', text: '$5,000 - $10,000' }
            ]
        },
        message: { enabled: true, required: true },
        newsletter: { enabled: true, required: false }
    }
});
</script>
```

### Generator Execution Sequence

1. **Configuration Merge**: User options merged with `DEFAULT_CONFIG`
2. **HTML Generation**: `generateHTML()` iterates through enabled fields
3. **Field Rendering**: Each field calls `generateFieldHTML()` 
4. **DOM Injection**: HTML is injected into container
5. **Event Binding**: Form submit event attached
6. **CAPTCHA Loading**: If enabled, loads Google reCAPTCHA

---

## Implementing New Generators

### Step 1: Add New Field Type to Widget

**In `contact-widget.js`** (add to `generateFieldHTML` method around line 344):

```javascript
case 'date':
    inputHTML = `
        <input 
            type="date" 
            id="contact-${key}" 
            name="${key}" 
            ${requiredAttr}
            style="..."
        >
    `;
    break;

case 'range':
    inputHTML = `
        <input 
            type="range" 
            id="contact-${key}" 
            name="${key}" 
            min="${field.min || 0}"
            max="${field.max || 100}"
            ${requiredAttr}
            style="..."
        >
    `;
    break;
```

### Step 2: Update Backend to Handle New Field

**In `submit-contact.js`** (add to field mapping around line 194):

```javascript
case 'date':
    notionProperties["Event Date"] = { 
        date: { start: value } 
    };
    break;

case 'range':
    notionProperties["Score"] = { 
        number: parseInt(value)
    };
    break;
```

### Step 3: Create Example Usage

**In `index.html` or `examples.html`**:

```javascript
new ContactWidget('#date-form', {
    fields: {
        name: { enabled: true, required: true },
        email: { enabled: true, required: true },
        eventDate: { 
            enabled: true, 
            required: true, 
            type: 'date',
            label: 'Select Event Date'
        },
        guests: { 
            enabled: true, 
            required: false, 
            type: 'range',
            label: 'Number of Guests',
            min: 1,
            max: 100
        }
    }
});
```

---

## Debugging Guide

### Client-Side Debugging

**Enable Console Logging**:
```javascript
new ContactWidget('#form', {
    apiUrl: '...',
    debug: true  // Add this to see detailed logs
});
```

**Common Issues**:

1. **Form not rendering**
   - Check: Is script loaded? Check browser console for errors
   - Check: Is container selector correct? (`#my-contact-form`)
   - Check: DOM loaded? Wrap in `DOMContentLoaded` listener

2. **Submission fails**
   - Check: API URL correct? Test in browser console: `fetch('url', {...})`
   - Check: CORS headers? Check Network tab in DevTools
   - Check: Rate limit? Wait 1 minute and retry

3. **CAPTCHA not loading**
   - Check: Site key is set? Check environment variables
   - Check: Domain approved in Google reCAPTCHA admin
   - Check: Browser console for script load errors

### Backend Debugging

**Check Netlify Function Logs**:

```bash
# In terminal
netlify dev

# Or check Netlify dashboard:
# Site → Functions → submit-contact → View logs
```

**Common Backend Issues**:

1. **"Notion configuration missing"**
   - Check: `NOTION_API_KEY` is set in Netlify dashboard
   - Check: `NOTION_DATABASE_ID` is set

2. **"Rate limit exceeded"**
   - Wait 1 minute, or increase `MAX_REQUESTS_PER_WINDOW`

3. **"CAPTCHA verification failed"**
   - Check: `RECAPTCHA_SECRET_KEY` is set
   - Check: CAPTCHA token is being sent from client

4. **"Invalid email format"**
   - Email regex is strict: `^[^\s@]+@[^\s@]+\.[^\s@]+$`
   - Test with valid email like `test@example.com`

### Testing Examples

**Test Basic Generator**:
```bash
# Start local dev server
npm run dev

# Open browser to:
http://localhost:8888/index.html
http://localhost:8888/examples.html

# Check:
- Forms render correctly
- Submit shows loading spinner
- Success message appears
- Check Notion database for new entry
```

---

## Extension Roadmap

### Adding New Features

**1. Custom Validation Rules**

```javascript
// In contact-widget.js
fields: {
    phone: { 
        enabled: true, 
        required: true,
        validation: {
            pattern: /^\+?[1-9]\d{1,14}$/,
            message: 'Please enter a valid phone number'
        }
    }
}
```

**2. Conditional Field Display**

```javascript
// Show budget field only if subject is "Sales"
fields: {
    budget: {
        enabled: true,
        showIf: { field: 'subject', equals: 'Sales' }
    }
}
```

**3. File Upload Support**

```javascript
// In generateFieldHTML
case 'file':
    inputHTML = `
        <input type="file" 
               accept="${field.accept || '*/*'}"
               max-size="${field.maxSize || 10485760}"
        >
    `;
    break;
```

**4. Webhook Integration**

```javascript
// In submit-contact.js
const webhookUrl = process.env.WEBHOOK_URL;
if (webhookUrl) {
    await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(formData)
    });
}
```

**5. Database Options**

Support for multiple backends:
- Airtable
- Google Sheets
- Custom webhook
- Email notification

```javascript
// In netlify.toml or environment
DATABASE_TYPE=notion|airtable|webhook|email
```

---

## Key Takeaways for Developers

### Understanding the Generator Pattern

1. **Every form is a generator instance** - Each `new ContactWidget()` creates a unique form
2. **Configuration drives behavior** - Fields, validation, and styling all from config
3. **Separation of concerns**:
   - Client: UI rendering and validation
   - Backend: Security and data processing
   - Notion: Data storage

### Code Flow Quick Reference

```
User Input → Form Collection → Client Validation 
    → API Request → Rate Limiting → CAPTCHA Verification 
    → Input Sanitization → Notion API → Success/Error Response 
    → UI Update
```

### Common Configurations

**Minimal Form**:
```javascript
{ name: true, email: true, message: true }
```

**Business Form**:
```javascript
{ name, email, company, phone, subject, message }
```

**Support Ticket**:
```javascript
{ name, email, subject (with options), message }
```

**Lead Capture**:
```javascript
{ name, email, newsletter: true }
```

---

## Environment Setup

### Local Development

```bash
# 1. Clone repository
git clone <repo-url>
cd contact-us

# 2. Install dependencies
npm install

# 3. Create .env file (copy from env.example)
cp env.example .env

# 4. Edit .env with your credentials
NOTION_API_KEY=your_key
NOTION_DATABASE_ID=your_id
RECAPTCHA_SITE_KEY=your_key
RECAPTCHA_SECRET_KEY=your_secret

# 5. Run local dev server
npm run dev

# Opens on http://localhost:8888
```

### Production Deployment

```bash
# 1. Push to GitHub
git push origin main

# 2. Netlify auto-deploys (if connected)
# Or manually:
netlify deploy --prod

# 3. Set environment variables in Netlify dashboard
# Site settings → Environment variables
```

---

## Summary

This project implements a **generator-based contact form system** where:

1. **Core Engine**: `ContactWidget` class generates forms dynamically
2. **Generators**: Different configurations create different form types
3. **Data Flow**: Client → Netlify Function → Notion Database
4. **Security**: Rate limiting, CAPTCHA, input sanitization
5. **Extensibility**: Easy to add fields, validations, or backends

**Key Files**:
- `contact-widget.js` - Generator engine (client-side)
- `submit-contact.js` - Backend processor (serverless function)
- `build-inject-env.js` - Build-time environment injection

**Key Concepts**:
- Configuration-driven form generation
- Serverless architecture for scalability
- Security-first approach
- Notion integration for data storage

This architecture makes it easy to create new form variations (generators) by simply changing the configuration object passed to `ContactWidget`, without modifying the core code.



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