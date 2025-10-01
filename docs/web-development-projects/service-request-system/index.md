---
title: Service Request System
description: Build a complete customer service request management system using Notion database and Netlify functions. Features automated email notifications, file uploads, real-time sync, and professional web forms - all completely free with no coding required.
lastUpdated: false
editLink: false
copyright: false
layout: Layout
project:
  name: "Service Request System"
  description: "Build a complete customer service request management system using Notion database and Netlify functions. Features automated email notifications, file uploads, real-time sync, and professional web forms - all completely free with no coding required."
  software: "Web"
  schema: "https://schema.org/WebApplication"
  domain: "Service Request"
  year: "2025"
  link: "https://notion-p.netlify.app/"
  codeLink: 
  contact: "mailto:jiwan.cse@gmail.com?subject=Inquiry : "
  stack: ["nodedotjs","json/black/white","tailwindcss","axios","npm","netlify","notion","Eslint","Prettier","github/black/white"]
  images: [{"itemImageSrc":"/img/home/projects/notion_service_request.webp","alt":"Service Request System - Cover page"},{"itemImageSrc":"/img/projects/service-request/customer_service_form.webp","alt":"Customer service form interface"},{"itemImageSrc":"/img/projects/service-request/chart_by_issue_type.webp","alt":"Chart showing issues by type"},{"itemImageSrc":"/img/projects/service-request/service_by_status.webp","alt":"Service requests by status"},{"itemImageSrc":"/img/projects/service-request/service_by_priority.webp","alt":"Service requests by priority"},{"itemImageSrc":"/img/projects/service-request/email_notification_notion.webp","alt":"Email notification in Notion"}]
  features: [{"text":"Real-time Notion Database Sync: Form submissions instantly appear as structured database entries"},{"text":"Automated Email Notifications: Smart status-based email system with professional HTML templates"},{"text":"Drag-and-Drop File Uploads: Images automatically stored in Notion with thumbnail previews"},{"text":"Dynamic Issue Type Loading: Dropdown options update automatically from your Notion database"},{"text":"Complete Workflow Management: Multiple views for status tracking, employee assignment, and priority management"}]
  details: "# Notion-P: Service Request Management System\n\nA professional web application that helps businesses manage customer service requests using Notion as a database. This system automatically saves customer requests to your Notion workspace, handles file uploads, and sends email notifications when request statuses change.\n\n## 🎥 **WATCH THE SETUP VIDEO**\n\n**📺 Complete Setup Tutorial** - Follow along with step-by-step video instructions for the easiest setup experience!\n\n<a href=\"https://youtu.be/4QR0qERWssI\" target=\"_blank\">\n  <img src=\"https://img.youtube.com/vi/4QR0qERWssI/maxresdefault.jpg\" alt=\"Setup Tutorial Video\" style=\"width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); cursor: pointer;\" />\n</a>\n\n**Click the image above to watch the full video tutorial**\n\n## ⚠️ **IMPORTANT: This is NOT a 5-minute setup**\n\n**Realistic Setup Time: 15-30 minutes** for first-time users using the template. The demo script claims \"15 minutes\" for users who follow the steps exactly.\n\n<iframe src=\"https://stackseekers.notion.site/ebd/24a30c0a61cd80869243f2beb52b019c?v=24a30c0a61cd80ee8563000c46a3714e\" width=\"100%\" height=\"600\" frameborder=\"0\" allowfullscreen />\n\n## 🎯 What This System Does\n\n**For Your Customers:**\n\n- Fill out a professional web form with service request details\n- Upload photos of broken items or issues (up to 5MB each)\n- Receive automatic email updates when their request status changes\n- Get a professional, trustworthy experience\n\n**For Your Business:**\n\n- All customer requests automatically appear in your Notion database\n- No more manual data entry or lost paperwork\n- Automatic email notifications keep customers informed\n- Everything is organized and searchable in Notion\n- File uploads are securely stored and linked to requests\n\n## 📋 **PREREQUISITES - You Need These BEFORE Starting**\n\n### Required Accounts & Access\n\n- ✅ **GitHub account** (free)\n- ✅ **Netlify account** (free)\n- ✅ **Notion account** (free)\n- ✅ **Gmail account** (free)\n\n### Required Knowledge\n\n- ✅ **Basic computer skills** (copy/paste, following step-by-step instructions)\n- ✅ **Ability to create accounts** on websites\n- ✅ **Patience** - this takes time to set up correctly\n\n### What You DON'T Need\n\n- ❌ **Coding knowledge** (everything is pre-built)\n- ❌ **Server management** (Netlify handles this)\n- ❌ **Database expertise** (Notion is user-friendly)\n\n## 🚀 **DETAILED SETUP GUIDE**\n\n### Step 1: Set Up Your Notion Database & Integration\n\n#### 1.1 Create the Database First\n\n**Duplicate the Template (RECOMMENDED)**\n\n1. Click this link: [Database Template](https://www.notion.so/stackseekers/24a30c0a61cd80869243f2beb52b019c?v=24a30c0a61cd8018bb86000ce5206b10&source=copy_link)\n2. Click **\"Duplicate\"** in the top right corner\n3. Choose your workspace and location\n4. **Rename it** to something like \"Service Requests\" or \"Customer Support\"\n\n**⚠️ CRITICAL**: The template must have these exact column names for the form to work:\n\n- `Full Name` (Title)\n- `Email` (Email)\n- `Product` (Text)\n- `Serial Number` (Text)\n- `Purchase Date` (Date)\n- `Issue Details` (Text)\n- `Issue Type` (Select) ← **This is critical for the dropdown**\n- `Status` (Status)\n- `Received Date` (Date)\n- `Schedule Date` (Date) - Optional\n- `Image Upload` (Files) - Optional\n\n#### 1.2 Get Database ID\n\n1. Look at your database URL: `https://notion.so/workspace-name/database-id-here`\n2. **Copy the last part** (the database ID) - it's a long string of letters/numbers\n3. **Save this somewhere safe** - you'll need it for the next steps\n\n#### 1.3 Create Notion Integration\n\n1. Go to your duplicated database in Notion\n2. Click the **triple dot menu** (⋮) in the top right\n3. Go to **\"Connections\"** → **\"Develop integration\"**\n4. It will open another tab asking to add new integration\n5. Click **\"Add new integration\"**\n6. Give it a name like \"Service Request Manager\"\n7. Choose associated workspace and type as **\"Internal\"**\n8. Logo is optional, then hit **\"Save\"**\n9. Click **\"Configure integration settings\"**\n10. **Copy the value \"Internal Integration Secret\"** - this is your Notion API key\n11. **Save this somewhere safe** - you'll need it for the next steps\n\n#### 1.4 Share Database with Integration (CRITICAL STEP!)\n\n1. Go back to your duplicated database in Notion\n2. Go to **\"Access\"** tab\n3. Select **\"Pages\"**\n4. Choose **\"Teamspace\"** then **\"Service Request\"** (or you can select entire teamspace)\n5. Hit **\"Update access\"**\n6. This gives your integration permission to access the database\n\n### Step 2: Set Up Gmail App Password\n\n#### 2.1 Enable 2-Factor Authentication\n\n1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)\n2. Enable **\"2-Step Verification\"** if not already enabled\n\n#### 2.2 Create App Password\n\n1. In the same security page, find **\"App passwords\"**\n2. Click **\"App passwords\"**\n3. Select **\"Mail\"** and **\"Other (Custom name)\"**\n4. Name it \"Service Request Manager\"\n5. Click **\"Generate\"**\n6. **Copy the 16-character password** (save this safely!)\n\n### Step 3: Deploy to Netlify\n\n#### 3.1 Create GitHub Repository\n\n1. Create a new **private repository** in your GitHub account\n2. Click **\"New\"** then give repo name and description\n3. Toggle **\"Add README\"** on then hit **\"Create repository\"**\n4. Click **\"Add file\"** followed by **\"Upload files\"**\n5. Use the drag-and-drop option to upload all the code files (download from the link in the description)\n6. This gives you complete control and privacy over your code\n\n#### 3.2 Connect to Netlify\n\n1. Go to [netlify.com](https://netlify.com) and sign up/login\n2. Click **\"New site from Git\"**\n3. Choose **\"GitHub\"**\n4. Select your **private repository** (not forked)\n5. Click **\"Deploy site\"**\n\n#### 3.3 Set Environment Variables (CRITICAL!)\n\n1. In your Netlify dashboard, go to **\"Site settings\"**\n2. Click **\"Environment variables\"**\n3. Add these **exactly as shown**:\n\n```\nNOTION_API_KEY = secret_your_actual_api_key_here\nNOTION_DATABASE_ID = your_actual_database_id_here\nSMTP_USER = your_email@gmail.com\nSMTP_PASS = your_16_character_app_password_here\n```\n\n4. **Click \"Save\"** after each one\n\n**🚨 SECURITY WARNING**: Never add these environment variables to your Git repository! They contain sensitive information like API keys and passwords. Always set them in Netlify's dashboard only.\n\n#### 3.4 Enable Netlify Blobs (REQUIRED for file uploads)\n\n1. In your Netlify dashboard, go to **\"Functions\"**\n2. Look for **\"Netlify Blobs\"** section\n3. If it shows \"Not enabled\", click **\"Enable\"**\n4. If you don't see this option, wait a few minutes and refresh\n\n#### 3.5 Redeploy\n\n1. Go to **\"Deploys\"** in your Netlify dashboard\n2. Click **\"Trigger deploy\"** → **\"Deploy site\"**\n3. Wait for deployment to complete\n\n### Step 4: Test Your System\n\n#### 4.1 Basic Form Test\n\n1. Visit your Netlify site URL\n2. Fill out the form with **test data**:\n   - Product: \"Test Product\"\n   - Serial Number: \"TEST123\"\n   - Purchase Date: Today's date\n   - Issue Type: Any option from your dropdown\n   - Description: \"This is a test request\"\n   - Client Name: \"Test User\"\n   - Client Email: \"your-email@gmail.com\"\n   - Phone: \"123-456-7890\"\n3. **Don't upload files yet** - test the basic form first\n4. Click Submit\n5. Check your Notion database - the request should appear automatically\n\n#### 4.2 File Upload Test\n\n1. Go back to your form\n2. Upload a small image file (under 1MB)\n3. Submit the form\n4. Check if the image appears in your Notion database\n\n#### 4.3 Email Test\n\n1. In your Notion database, change the Status to \"Completed\"\n2. Wait a few minutes\n3. Check your email for a notification\n\n## 🚨 **COMMON FAILURE POINTS & SOLUTIONS**\n\n### ❌ **\"Notion API key missing\" Error**\n\n**What you'll see**: Error message or blank page\n**Solution**:\n\n1. Check your Netlify environment variables\n2. Make sure `NOTION_API_KEY` starts with `secret_`\n3. Copy/paste the key exactly - no extra spaces\n\n### ❌ **\"Database ID missing\" Error**\n\n**What you'll see**: Error message or blank page\n**Solution**:\n\n1. Check your Netlify environment variables\n2. Make sure `NOTION_DATABASE_ID` is the long string from your URL\n3. No extra spaces or characters\n\n### ❌ **\"Unauthorized\" or \"Forbidden\" Error**\n\n**What you'll see**: Error when trying to submit form\n**Solution**:\n\n1. **You forgot to share the database with your integration!**\n2. Go back to Step 1.3 and share the database\n3. Wait a few minutes, then try again\n\n### ❌ **Photos not uploading**\n\n**What you'll see**: Form submits but no images in Notion\n**Solution**:\n\n1. Check if Netlify Blobs is enabled in your dashboard\n2. Wait a few minutes after first deployment\n3. Try uploading a smaller file (under 1MB)\n4. Check Netlify function logs for errors\n\n### ❌ **Emails not sending**\n\n**What you'll see**: Status changes but no email notifications\n**Solution**:\n\n1. Verify your Gmail app password is correct\n2. Check that `SMTP_USER` is your full Gmail address\n3. Make sure `SMTP_PASS` is the 16-character app password\n4. Check Netlify function logs for SMTP errors\n\n### ❌ **Form loads but dropdown is empty**\n\n**What you'll see**: \"Loading issue types...\" never changes\n**Solution**:\n\n1. **Check your Netlify function logs** for errors in the `get-issue-types` function\n2. **Verify your Notion API key has access** to the database\n3. **Make sure the \"Issue Type\" column exists** in your database with exactly this name (case-sensitive)\n4. **Ensure the \"Issue Type\" column is a Select field** (not Text or other types)\n5. **Check that the column has select options** - if it's empty, the dropdown will be empty\n6. **Verify the column name matches exactly**: `Issue Type` (with a space, not `IssueType` or `issue type`)\n\n## 🔧 **How It Actually Works (Technical Reality)**\n\n1. **Customer fills out form** → Data sent to Netlify Functions (serverless backend)\n2. **Photos get uploaded** → Stored in Netlify Blobs (secure file storage)\n3. **Data gets saved** → Automatically added to your Notion database via API\n4. **Status monitoring** → System checks for changes every 2 minutes (cron job)\n5. **Email notifications** → Automatic emails sent when status changes\n6. **File cleanup** → Temporary files are automatically managed by Netlify\n\n## 📱 **What Your Customers Actually Experience**\n\nA clean, professional form where they can:\n\n- **Product Details**: Enter product name, serial number, and purchase date (must be in the past)\n- **Product Symptom**: Select issue type from dropdown (populated from your Notion database) and describe the problem\n- **File Upload**: Drag & drop or click to upload images (up to 10 files, 5MB each, supports JPG, PNG, GIF, WebP, SVG)\n- **Engineer Schedule**: Choose preferred date for engineer visit (must be in the future)\n- **Contact Information**: Provide full name and email address\n\n## 📊 **What You Actually See in Notion**\n\nA well-organized database with these exact columns:\n\n- **Full Name** (Title) - Customer's full name\n- **Email** (Email) - Customer's email address\n- **Product** (Text) - Product name and model\n- **Serial Number** (Text) - Product serial number\n- **Purchase Date** (Date) - When the product was purchased\n- **Issue Details** (Text) - Description of the problem\n- **Issue Type** (Select) - Category of the issue (populates the form dropdown)\n- **Status** (Status) - Request status (New, In Progress, Completed, Rejected)\n- **Received Date** (Date) - When the request was submitted\n- **Schedule Date** (Date) - Preferred engineer visit date\n- **Image Upload** (Files) - Uploaded photos and documents\n- **Email Sent** (Checkbox) - Tracks if notification was sent\n- **Email Sent Date** (Date) - When notification was sent\n\nPlus easy filtering, searching, and multiple view options for workflow management.\n\n## 🎨 **Customization Options (Advanced Users)**\n\n### Change the Visual Design\n\n- Edit `public/index.html` to modify the form design\n- Update the logo by replacing `public/stackseekers.jpg`\n- Modify colors and styling using the embedded Tailwind CSS\n\n### Modify Form Fields\n\n- Add or remove fields in the HTML form\n- **IMPORTANT**: Update your Notion database structure to match\n- Modify the JavaScript code that processes the form\n\n### Customize Email Templates\n\nThe system includes comprehensive email customization options:\n\n#### **Email Configuration (`config.js`)**\n\n- **SMTP Settings**: Gmail SMTP configuration (host, port, security)\n- **Email Subjects**: Customize subject lines for different statuses\n- **Header Text**: Modify greeting messages and status update text\n- **Section Titles**: Change labels for product details, issue type, etc.\n- **Status Messages**: Customize messages for \"Completed\" and \"Rejected\" statuses\n- **Footer Content**: Update team name, website, and contact information\n\n#### **Email Templates (`email-templates.js`)**\n\n- **Visual Styling**: Colors, fonts, layouts, and responsive design\n- **Status-Specific Styling**: Different colors and icons for each status\n- **Content Layout**: Grid layouts, cards, and information organization\n- **Image Handling**: Product image display in emails\n- **Branding Elements**: Headers, gradients, and professional styling\n\n#### **What You Can Customize:**\n\n- **Company branding** and colors\n- **Email subjects** and message content\n- **Status-specific messages** for different workflows\n- **Visual design** and layout\n- **SMTP settings** for different email providers\n- **Email triggers** and automation rules\n\n## 💡 **Pro Tips for Success**\n\n1. **Test locally first**: Run `npm run dev` to test on your computer before deploying\n2. **Use Gmail app passwords**: Never use your regular Gmail password\n3. **Backup your database**: Export your Notion database regularly\n4. **Monitor your Netlify logs**: Check the function logs if something isn't working\n5. **Check the status function**: The system runs every 2 minutes to check for changes\n6. **Start small**: Test with 1-2 requests before going live\n7. **Keep API keys secure**: Don't share them or commit them to public repositories\n8. **Never commit environment variables**: Keep `.env` files out of Git and use Netlify's dashboard\n\n## 🔒 **Security & Privacy Features**\n\n- All data is stored securely in Notion (your data, your control)\n- No customer data is stored on Netlify servers\n- Photos are securely stored in Netlify Blobs\n- CORS is properly configured for cross-origin requests\n- File uploads are validated for type and size\n- API keys are stored securely in Netlify environment variables\n\n## 💰 **Realistic Cost Breakdown**\n\n- **Netlify**: Free tier includes 100GB bandwidth and 125K function calls per month\n- **Notion**: Free tier includes unlimited databases and 5GB file storage\n- **Gmail**: Free for sending emails (up to 500 per day)\n- **Total**: $0 for most small to medium businesses\n\n## 🎉 **What You Actually Get (After Successful Setup)**\n\nOnce deployed and working, you'll have a professional service request system that:\n\n- Saves you hours on data entry and organization\n- Keeps customers informed automatically\n- Organizes everything in your Notion workspace\n- Looks professional and builds customer trust\n- Handles file uploads securely\n- Scales with your business needs\n\n## 🌟 **Open Source Benefits**\n\nThis project is open source, which means:\n\n- **Transparency**: You can see exactly how it works\n- **Customization**: Modify it to fit your specific needs\n- **Community**: Get help from other developers\n- **Security**: Code is reviewed by the community\n- **No vendor lock-in**: You own your data and can modify the system\n\n---\n\n**Your customers will love the easy-to-use form, and you'll love having everything organized in one place with automatic notifications - but only after you get through the setup process successfully!**\n\n**Built with ❤️ using Netlify Functions, Notion API, and modern web technologies**\n"
  previousProject: {"name":"AI Voice Generator","link":"/web-development-projects/ai-voice-generator/"}
  nextProject: {"name":"Appliance Repair Service Platform","link":"/web-development-projects/appliance-repair-service-platform/"}
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
        <a v-if="$frontmatter.project.contact" :href="`${$frontmatter.project.contact}${$frontmatter.project.name}`" target="_blank"
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
      <h4 class="m-2 text-sm" v-html="feature.text"></h4>
    </li>
  </ul>
</div>

# Notion-P: Service Request Management System

A professional web application that helps businesses manage customer service requests using Notion as a database. This system automatically saves customer requests to your Notion workspace, handles file uploads, and sends email notifications when request statuses change.

## 🎥 **WATCH THE SETUP VIDEO**

**📺 Complete Setup Tutorial** - Follow along with step-by-step video instructions for the easiest setup experience!

<a href="https://youtu.be/4QR0qERWssI" target="_blank">
  <img src="https://img.youtube.com/vi/4QR0qERWssI/maxresdefault.jpg" alt="Setup Tutorial Video" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); cursor: pointer;" />
</a>

**Click the image above to watch the full video tutorial**

## ⚠️ **IMPORTANT: This is NOT a 5-minute setup**

**Realistic Setup Time: 15-30 minutes** for first-time users using the template. The demo script claims "15 minutes" for users who follow the steps exactly.

<iframe src="https://stackseekers.notion.site/ebd/24a30c0a61cd80869243f2beb52b019c?v=24a30c0a61cd80ee8563000c46a3714e" width="100%" height="600" frameborder="0" allowfullscreen />

## 🎯 What This System Does

**For Your Customers:**

- Fill out a professional web form with service request details
- Upload photos of broken items or issues (up to 5MB each)
- Receive automatic email updates when their request status changes
- Get a professional, trustworthy experience

**For Your Business:**

- All customer requests automatically appear in your Notion database
- No more manual data entry or lost paperwork
- Automatic email notifications keep customers informed
- Everything is organized and searchable in Notion
- File uploads are securely stored and linked to requests

## 📋 **PREREQUISITES - You Need These BEFORE Starting**

### Required Accounts & Access

- ✅ **GitHub account** (free)
- ✅ **Netlify account** (free)
- ✅ **Notion account** (free)
- ✅ **Gmail account** (free)

### Required Knowledge

- ✅ **Basic computer skills** (copy/paste, following step-by-step instructions)
- ✅ **Ability to create accounts** on websites
- ✅ **Patience** - this takes time to set up correctly

### What You DON'T Need

- ❌ **Coding knowledge** (everything is pre-built)
- ❌ **Server management** (Netlify handles this)
- ❌ **Database expertise** (Notion is user-friendly)

## 🚀 **DETAILED SETUP GUIDE**

### Step 1: Set Up Your Notion Database & Integration

#### 1.1 Create the Database First

**Duplicate the Template (RECOMMENDED)**

1. Click this link: [Database Template](https://www.notion.so/stackseekers/24a30c0a61cd80869243f2beb52b019c?v=24a30c0a61cd8018bb86000ce5206b10&source=copy_link)
2. Click **"Duplicate"** in the top right corner
3. Choose your workspace and location
4. **Rename it** to something like "Service Requests" or "Customer Support"

**⚠️ CRITICAL**: The template must have these exact column names for the form to work:

- `Full Name` (Title)
- `Email` (Email)
- `Product` (Text)
- `Serial Number` (Text)
- `Purchase Date` (Date)
- `Issue Details` (Text)
- `Issue Type` (Select) ← **This is critical for the dropdown**
- `Status` (Status)
- `Received Date` (Date)
- `Schedule Date` (Date) - Optional
- `Image Upload` (Files) - Optional

#### 1.2 Get Database ID

1. Look at your database URL: `https://notion.so/workspace-name/database-id-here`
2. **Copy the last part** (the database ID) - it's a long string of letters/numbers
3. **Save this somewhere safe** - you'll need it for the next steps

#### 1.3 Create Notion Integration

1. Go to your duplicated database in Notion
2. Click the **triple dot menu** (⋮) in the top right
3. Go to **"Connections"** → **"Develop integration"**
4. It will open another tab asking to add new integration
5. Click **"Add new integration"**
6. Give it a name like "Service Request Manager"
7. Choose associated workspace and type as **"Internal"**
8. Logo is optional, then hit **"Save"**
9. Click **"Configure integration settings"**
10. **Copy the value "Internal Integration Secret"** - this is your Notion API key
11. **Save this somewhere safe** - you'll need it for the next steps

#### 1.4 Share Database with Integration (CRITICAL STEP!)

1. Go back to your duplicated database in Notion
2. Go to **"Access"** tab
3. Select **"Pages"**
4. Choose **"Teamspace"** then **"Service Request"** (or you can select entire teamspace)
5. Hit **"Update access"**
6. This gives your integration permission to access the database

### Step 2: Set Up Gmail App Password

#### 2.1 Enable 2-Factor Authentication

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **"2-Step Verification"** if not already enabled

#### 2.2 Create App Password

1. In the same security page, find **"App passwords"**
2. Click **"App passwords"**
3. Select **"Mail"** and **"Other (Custom name)"**
4. Name it "Service Request Manager"
5. Click **"Generate"**
6. **Copy the 16-character password** (save this safely!)

### Step 3: Deploy to Netlify

#### 3.1 Create GitHub Repository

1. Create a new **private repository** in your GitHub account
2. Click **"New"** then give repo name and description
3. Toggle **"Add README"** on then hit **"Create repository"**
4. Click **"Add file"** followed by **"Upload files"**
5. Use the drag-and-drop option to upload all the code files (download from the link in the description)
6. This gives you complete control and privacy over your code

#### 3.2 Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"New site from Git"**
3. Choose **"GitHub"**
4. Select your **private repository** (not forked)
5. Click **"Deploy site"**

#### 3.3 Set Environment Variables (CRITICAL!)

1. In your Netlify dashboard, go to **"Site settings"**
2. Click **"Environment variables"**
3. Add these **exactly as shown**:

```
NOTION_API_KEY = secret_your_actual_api_key_here
NOTION_DATABASE_ID = your_actual_database_id_here
SMTP_USER = your_email@gmail.com
SMTP_PASS = your_16_character_app_password_here
```

4. **Click "Save"** after each one

**🚨 SECURITY WARNING**: Never add these environment variables to your Git repository! They contain sensitive information like API keys and passwords. Always set them in Netlify's dashboard only.

#### 3.4 Enable Netlify Blobs (REQUIRED for file uploads)

1. In your Netlify dashboard, go to **"Functions"**
2. Look for **"Netlify Blobs"** section
3. If it shows "Not enabled", click **"Enable"**
4. If you don't see this option, wait a few minutes and refresh

#### 3.5 Redeploy

1. Go to **"Deploys"** in your Netlify dashboard
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment to complete

### Step 4: Test Your System

#### 4.1 Basic Form Test

1. Visit your Netlify site URL
2. Fill out the form with **test data**:
   - Product: "Test Product"
   - Serial Number: "TEST123"
   - Purchase Date: Today's date
   - Issue Type: Any option from your dropdown
   - Description: "This is a test request"
   - Client Name: "Test User"
   - Client Email: "your-email@gmail.com"
   - Phone: "123-456-7890"
3. **Don't upload files yet** - test the basic form first
4. Click Submit
5. Check your Notion database - the request should appear automatically

#### 4.2 File Upload Test

1. Go back to your form
2. Upload a small image file (under 1MB)
3. Submit the form
4. Check if the image appears in your Notion database

#### 4.3 Email Test

1. In your Notion database, change the Status to "Completed"
2. Wait a few minutes
3. Check your email for a notification

## 🚨 **COMMON FAILURE POINTS & SOLUTIONS**

### ❌ **"Notion API key missing" Error**

**What you'll see**: Error message or blank page
**Solution**:

1. Check your Netlify environment variables
2. Make sure `NOTION_API_KEY` starts with `secret_`
3. Copy/paste the key exactly - no extra spaces

### ❌ **"Database ID missing" Error**

**What you'll see**: Error message or blank page
**Solution**:

1. Check your Netlify environment variables
2. Make sure `NOTION_DATABASE_ID` is the long string from your URL
3. No extra spaces or characters

### ❌ **"Unauthorized" or "Forbidden" Error**

**What you'll see**: Error when trying to submit form
**Solution**:

1. **You forgot to share the database with your integration!**
2. Go back to Step 1.3 and share the database
3. Wait a few minutes, then try again

### ❌ **Photos not uploading**

**What you'll see**: Form submits but no images in Notion
**Solution**:

1. Check if Netlify Blobs is enabled in your dashboard
2. Wait a few minutes after first deployment
3. Try uploading a smaller file (under 1MB)
4. Check Netlify function logs for errors

### ❌ **Emails not sending**

**What you'll see**: Status changes but no email notifications
**Solution**:

1. Verify your Gmail app password is correct
2. Check that `SMTP_USER` is your full Gmail address
3. Make sure `SMTP_PASS` is the 16-character app password
4. Check Netlify function logs for SMTP errors

### ❌ **Form loads but dropdown is empty**

**What you'll see**: "Loading issue types..." never changes
**Solution**:

1. **Check your Netlify function logs** for errors in the `get-issue-types` function
2. **Verify your Notion API key has access** to the database
3. **Make sure the "Issue Type" column exists** in your database with exactly this name (case-sensitive)
4. **Ensure the "Issue Type" column is a Select field** (not Text or other types)
5. **Check that the column has select options** - if it's empty, the dropdown will be empty
6. **Verify the column name matches exactly**: `Issue Type` (with a space, not `IssueType` or `issue type`)

## 🔧 **How It Actually Works (Technical Reality)**

1. **Customer fills out form** → Data sent to Netlify Functions (serverless backend)
2. **Photos get uploaded** → Stored in Netlify Blobs (secure file storage)
3. **Data gets saved** → Automatically added to your Notion database via API
4. **Status monitoring** → System checks for changes every 2 minutes (cron job)
5. **Email notifications** → Automatic emails sent when status changes
6. **File cleanup** → Temporary files are automatically managed by Netlify

## 📱 **What Your Customers Actually Experience**

A clean, professional form where they can:

- **Product Details**: Enter product name, serial number, and purchase date (must be in the past)
- **Product Symptom**: Select issue type from dropdown (populated from your Notion database) and describe the problem
- **File Upload**: Drag & drop or click to upload images (up to 10 files, 5MB each, supports JPG, PNG, GIF, WebP, SVG)
- **Engineer Schedule**: Choose preferred date for engineer visit (must be in the future)
- **Contact Information**: Provide full name and email address

## 📊 **What You Actually See in Notion**

A well-organized database with these exact columns:

- **Full Name** (Title) - Customer's full name
- **Email** (Email) - Customer's email address
- **Product** (Text) - Product name and model
- **Serial Number** (Text) - Product serial number
- **Purchase Date** (Date) - When the product was purchased
- **Issue Details** (Text) - Description of the problem
- **Issue Type** (Select) - Category of the issue (populates the form dropdown)
- **Status** (Status) - Request status (New, In Progress, Completed, Rejected)
- **Received Date** (Date) - When the request was submitted
- **Schedule Date** (Date) - Preferred engineer visit date
- **Image Upload** (Files) - Uploaded photos and documents
- **Email Sent** (Checkbox) - Tracks if notification was sent
- **Email Sent Date** (Date) - When notification was sent

Plus easy filtering, searching, and multiple view options for workflow management.

## 🎨 **Customization Options (Advanced Users)**

### Change the Visual Design

- Edit `public/index.html` to modify the form design
- Update the logo by replacing `public/stackseekers.jpg`
- Modify colors and styling using the embedded Tailwind CSS

### Modify Form Fields

- Add or remove fields in the HTML form
- **IMPORTANT**: Update your Notion database structure to match
- Modify the JavaScript code that processes the form

### Customize Email Templates

The system includes comprehensive email customization options:

#### **Email Configuration (`config.js`)**

- **SMTP Settings**: Gmail SMTP configuration (host, port, security)
- **Email Subjects**: Customize subject lines for different statuses
- **Header Text**: Modify greeting messages and status update text
- **Section Titles**: Change labels for product details, issue type, etc.
- **Status Messages**: Customize messages for "Completed" and "Rejected" statuses
- **Footer Content**: Update team name, website, and contact information

#### **Email Templates (`email-templates.js`)**

- **Visual Styling**: Colors, fonts, layouts, and responsive design
- **Status-Specific Styling**: Different colors and icons for each status
- **Content Layout**: Grid layouts, cards, and information organization
- **Image Handling**: Product image display in emails
- **Branding Elements**: Headers, gradients, and professional styling

#### **What You Can Customize:**

- **Company branding** and colors
- **Email subjects** and message content
- **Status-specific messages** for different workflows
- **Visual design** and layout
- **SMTP settings** for different email providers
- **Email triggers** and automation rules

## 💡 **Pro Tips for Success**

1. **Test locally first**: Run `npm run dev` to test on your computer before deploying
2. **Use Gmail app passwords**: Never use your regular Gmail password
3. **Backup your database**: Export your Notion database regularly
4. **Monitor your Netlify logs**: Check the function logs if something isn't working
5. **Check the status function**: The system runs every 2 minutes to check for changes
6. **Start small**: Test with 1-2 requests before going live
7. **Keep API keys secure**: Don't share them or commit them to public repositories
8. **Never commit environment variables**: Keep `.env` files out of Git and use Netlify's dashboard

## 🔒 **Security & Privacy Features**

- All data is stored securely in Notion (your data, your control)
- No customer data is stored on Netlify servers
- Photos are securely stored in Netlify Blobs
- CORS is properly configured for cross-origin requests
- File uploads are validated for type and size
- API keys are stored securely in Netlify environment variables

## 💰 **Realistic Cost Breakdown**

- **Netlify**: Free tier includes 100GB bandwidth and 125K function calls per month
- **Notion**: Free tier includes unlimited databases and 5GB file storage
- **Gmail**: Free for sending emails (up to 500 per day)
- **Total**: $0 for most small to medium businesses

## 🎉 **What You Actually Get (After Successful Setup)**

Once deployed and working, you'll have a professional service request system that:

- Saves you hours on data entry and organization
- Keeps customers informed automatically
- Organizes everything in your Notion workspace
- Looks professional and builds customer trust
- Handles file uploads securely
- Scales with your business needs

## 🌟 **Open Source Benefits**

This project is open source, which means:

- **Transparency**: You can see exactly how it works
- **Customization**: Modify it to fit your specific needs
- **Community**: Get help from other developers
- **Security**: Code is reviewed by the community
- **No vendor lock-in**: You own your data and can modify the system

---

**Your customers will love the easy-to-use form, and you'll love having everything organized in one place with automatic notifications - but only after you get through the setup process successfully!**

**Built with ❤️ using Netlify Functions, Notion API, and modern web technologies**


<div class="flex justify-content-between align-items-center mt-6 pt-4 border-top-1 surface-border">
  <div class="flex-1">
    <a v-if="$frontmatter.project.previousProject" :href="$frontmatter.project.previousProject.link" class="flex align-items-center no-underline text-color-secondary hover:text-primary">
      <i class="pi pi-chevron-left mr-2"></i>
      <div class="flex flex-column">
        <span class="text-sm text-color-secondary">Previous Project</span>
        <span class="font-semibold">{{ $frontmatter.project.previousProject.name }}</span>
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
        <span class="font-semibold">{{ $frontmatter.project.nextProject.name }}</span>
      </div>
      <i class="pi pi-chevron-right ml-2"></i>
    </a>
  </div>
</div>

<script setup>
import { responsiveOptions } from "@data/responsive.js"
</script>