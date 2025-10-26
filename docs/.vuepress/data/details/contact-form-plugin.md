This project is a **lightweight, embeddable contact form widget** that can be integrated into any website and automatically forwards submissions to a Notion database. It's designed as a "generator" where different form configurations (generators) can be instantiated with various field combinations.

---

## Architecture Overview

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                     USER'S WEBSITE                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  contact-widget.js (Generator)                       │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │  ContactWidget Instance                      │   │   │
│  │  │  - Configures form fields                    │   │   │
│  │  │  - Generates HTML dynamically                │   │   │
│  │  │  - Handles user interactions                 │   │   │
│  │  │  - Validates inputs                          │   │   │
│  │  │  - Sends data to backend                     │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTPS POST (JSON)
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                     NETLIFY BACKEND                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  /.netlify/functions/submit-contact                  │   │
│  │  - Rate limiting (5 req/min/IP)                     │   │
│  │  - CAPTCHA verification                             │   │
│  │  - Input sanitization                               │   │
│  │  - Email validation                                 │   │
│  │  - Notion API integration                           │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Notion API
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    NOTION DATABASE                           │
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

