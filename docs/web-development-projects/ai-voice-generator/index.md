---
title: AI Voice Generator
description: Transform your Google Docs into high-quality audio with this free AI voice generator and text to audio converter. Powered by Gemini TTS, it offers natural-sounding speech generation for YouTubers, teachers, and creators. Experience the best free text to speech AI directly in your documents.
lastUpdated: false
editLink: false
contributors: false
pageInfo: false
copyright: false
layout: Layout
project:
  name: "AI Voice Generator"
  description: "Transform your Google Docs into high-quality audio with this free AI voice generator and text to audio converter. Powered by Gemini TTS, it offers natural-sounding speech generation for YouTubers, teachers, and creators. Experience the best free text to speech AI directly in your documents."
  software: "Google Docs Add-on"
  schema: "https://schema.org/WebApplication"
  domain: "AI & Content Creation"
  year: "2025"
  price: "0"
  currency: "USD"
  link: "https://ainarrator.stackseekers.com/"
  codeLink: 
  contact: "mailto:support@stackseekers.com?subject=AI Narrator Inquiry"
  stack: ["javascript","googleappsscript","googledocs","googledrive","html5","css","json/black/white"]
  images: [{"itemImageSrc":"/img/projects/ai-narrator/Google-docs-text-to-speech-ai-voice-ai-audio.webp","alt":"AI Narrator Google Docs Add-on Interface"},{"itemImageSrc":"/img/projects/ai-narrator/app-screenshot.webp","alt":"AI Narrator Application Screenshot"}]
  video: ""
  features: [{"text":"Gemini Speech Generation: Leverage advanced Gemini TTS for ultra-realistic, natural-sounding voiceovers completely free."},{"text":"Free Text to Speech AI: Convert unlimited text to audio without subscription fees using your own API key."},{"text":"Smart Document Analysis: AI-powered review of document structure, word choice, and engagement factors."},{"text":"25+ Professional AI Voices: Choose from diverse voice options including 'Gemini Speech' styles for any content type."},{"text":"Real-time Voice Preview: Test selected text with instant browser playback before full generation."},{"text":"Custom Voice Instructions: Add pronunciation guides and tone settings for brand names and proper nouns."},{"text":"Multi-language Support: Generate audio in different languages for global content reach."},{"text":"Smart Text Processing: Automatically converts bullets, tables, and complex formatting into natural speech."},{"text":"Flexible Audio Generation: Create full document audio or regenerate specific sections as needed"},{"text":"Seamless Integration: Works directly within Google Docs with a clean, modern sidebar interface"}]
  perspective: {"executive":"Strategic content automation that turns static documents into professional audio assets. It allows marketing and education teams to scale their content reach across platforms without the cost of professional voice actors.","technical":"Leverages Google Apps Script for deep integration with Google Workspace. It interfaces with the Gemini TTS API, handling complex text truncation and chunking to ensure stability with large documents. Includes a custom-built sidebar UI with real-time audio playback control."}
  details: "## Engineering Architecture: Ambient AI & Media Synthesis\n\nAI Narrator is a sophisticated **Google Workspace Integration** that transforms Google Docs from a static text editor into an AI-powered media production studio. It demonstrates how to orchestrate distributed cloud services (Gemini, Google Drive, and Apps Script) into a cohesive, zero-friction user workflow.\n\n### 1. The Workflow Engine (Layman's Perspective)\nImagine you have a **Professional Narrator** sitting inside your Google Doc. Instead of copying your script, opening a separate recording app, and manually saving files, you just highlight a paragraph and click a button. \n\nThe \"Narrator\" (Gemini AI) reads your text, applies your specific instructions (like \"speak excitedly\" or \"use a calm teaching tone\"), and instantly places a high-quality audio file into a folder on your desk (Google Drive). It turns your document into a living, breathing media asset without you ever leaving the page.\n\n### 2. Technical Architecture & Media Pipeline\nThe system is built on an event-driven architecture using Google Apps Script (GAS) to bridge the gap between the document UI and the Gemini Media API.\n\n```mermaid\ngraph LR\n    subgraph \"Workspace Environment\"\n        Doc[Google Doc] --> Sidebar[Custom Vue/HTML Sidebar]\n        Sidebar --> GAS[Google Apps Script Engine]\n    end\n\n    subgraph \"AI Processing Layer\"\n        GAS --> GeminiTTS[Gemini TTS API]\n        GAS --> GeminiAnalysis[Gemini Content Analysis]\n    end\n\n    subgraph \"Media & Storage\"\n        GeminiTTS --> AudioBuffer[Base64 Audio Data]\n        AudioBuffer --> Drive[Google Drive Storage]\n        Drive --> UIPlayer[In-Sidebar Audio Player]\n    end\n\n    subgraph \"Analytics & Reporting\"\n        GeminiAnalysis --> HTMLReport[HTML Performance Report]\n        HTMLReport --> Drive\n    end\n```\n\n### 3. Key Engineering Pillars\n\n#### A. The \"Direct-to-Drive\" Media Pipeline\nOne of the core technical challenges was handling binary audio data within the constraints of Google Apps Script. We implemented a seamless pipeline where:\n- **Text Extraction:** GAS intelligently extracts text, handling complex document structures like tables and lists.\n- **Base64 Orchestration:** Binary audio streams from Gemini are converted and passed through the GAS bridge.\n- **Automatic Filing:** The system automatically manages a persistent \"AI Narrator\" folder structure in the user's Drive, ensuring media assets are organized and accessible for post-production.\n\n#### B. Context-Aware Speech Generation\nUnlike standard Text-to-Speech (TTS) tools, AI Narrator allows for **Adverbial Instruction Injection**. We don't just send text to the API; we send a \"Performance Brief.\" By wrapping the text with AI-driven tone and style modifiers, we produce audio that matches the *intent* of the content, whether it's an excitable YouTube script or a gentle educational guide.\n\n#### C. Embedded Workflow Architecture\nThis project is a prime example of **Ambient AI**. Instead of a standalone portal, the logic lives where the content is created. This required:\n- **Optimized UI (HTML Service):** A high-performance sidebar that manages state (API keys, voice selections) across multiple document sessions.\n- **Asynchronous Processing:** Using `google.script.run` to handle long-running audio generation without freezing the document interface.\n\n### 4. Strategic Business Value (ROI)\n- **Reduced Production Overhead:** Lowers the cost of professional narration to nearly zero for educators and creators.\n- **Workflow Consolidation:** Eliminates \"App Fatigue\" by keeping the entire production cycle (Scripting -> Analysis -> Recording) inside Google Docs.\n- **Content Accessibility:** Enables rapid generation of audio versions for all written materials, improving compliance and reaching broader audiences.\n\nAI Narrator proves that the most valuable AI tools are not the ones that require new habits, but the ones that **enhance existing ones**.\n"
  previousProject: {"name":"Dynamic CRUD App Free","link":"/web-development-projects/dynamic-crud-app-free/"}
  nextProject: {"name":"Service Request System","link":"/web-development-projects/service-request-system/"}
  relatedCaseStudy: null
---

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
                <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-12rem md:min-h-14-5rem" :imageProps="{ loading: 'lazy' }" />
             </div>
          </div>
       </div>
    </div>
    <div v-for="(img, idx) in $frontmatter.project.images.slice(3, 5)" :key="idx" class="col-12 md:col-6 lg:col-4 p-2">
       <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card">
          <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" :imageProps="{ loading: 'lazy' }" />
       </div>
    </div>
    <div v-if="$frontmatter.project.images.length >= 6" class="col-12 md:col-6 lg:col-4 p-2">
       <div class="border-round-3xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 h-full surface-card relative" :class="{'cursor-pointer': $frontmatter.project.images.length > 6}" @click="$frontmatter.project.images.length > 6 ? displayModal = true : null">
          <Image :src="$frontmatter.project.images[5].itemImageSrc" :alt="$frontmatter.project.images[5].alt" :preview="$frontmatter.project.images.length === 6" class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" :imageProps="{ loading: 'lazy' }" />
          <div v-if="$frontmatter.project.images.length > 6" class="absolute top-0 left-0 w-full h-full flex align-items-center justify-content-center bg-black-alpha-60 text-white hover:bg-black-alpha-40 transition-all transition-duration-300">
             <div class="text-center">
                <i class="pi pi-images text-4xl mb-2"></i>
                <div class="text-xl font-bold uppercase tracking-widest">+{{ $frontmatter.project.images.length - 5 }} More</div>
                <div class="text-xs opacity-70 mt-1">View All Media</div>
             </div>
          </div>
       </div>
    </div>
  </div>
</section>

<section class="mt-4 mb-6">
  <div class="grid">
    <div class="col-12">
      <div class="text-primary font-bold mb-2 uppercase tracking-widest text-xs">Project Case Study</div>
      <p class="text-xl opacity-70 line-height-4 max-w-50rem mb-4">{{$frontmatter.project.description}}</p>
      <div class="surface-card p-4 md:p-5 border-round-3xl shadow-2 border-1 border-100 mb-4">
        <div class="grid align-items-center">
          <div class="col-12 md:col-6 border-bottom-1 md:border-bottom-none md:border-right-1 border-100 mb-3 md:mb-0 pb-3 md:pb-0">
             <div class="flex align-items-center gap-3">
                <i class="pi pi-briefcase text-primary text-2xl"></i>
                <div>
                  <div class="text-xs opacity-50 uppercase font-bold">Industry</div>
                  <div class="font-bold text-lg text-900">{{$frontmatter.project.domain}}</div>
                </div>
             </div>
          </div>
          <div class="col-12 md:col-6 border-bottom-1 md:border-bottom-none border-100 mb-3 md:mb-0 pb-3 md:pb-0">
             <div class="flex align-items-center gap-3">
                <i class="pi pi-bolt text-primary text-2xl"></i>
                <div>
                  <div class="text-xs opacity-50 uppercase font-bold">Project Status</div>
                  <div class="font-bold text-lg text-900">Scale & Growth</div>
                </div>
             </div>
          </div>
          <div class="col-12 md:col-12 pt-3 md:pt-0">
             <Stacks :stack="$frontmatter.project.stack" :other-skills="$frontmatter.project.otherSkills" />
          </div>
        </div>
        <div class="mt-4 pt-4">
           <div class="flex flex-column md:flex-row align-items-stretch gap-3">
              <a v-if="$frontmatter.project.link" :href="$frontmatter.project.link" target="_blank" class="no-underline flex-1">
                <Button label="View Live Demo" icon="pi pi-external-link" severity="primary" class="w-full font-bold py-3" raised rounded />
              </a>
              <a v-if="$frontmatter.project.codeLink" :href="$frontmatter.project.codeLink" target="_blank" class="no-underline flex-1">
                <Button label="View Source Code" icon="pi pi-github" severity="secondary" class="w-full font-bold py-3" raised rounded />
              </a>
              <a v-if="$frontmatter.project.contact" :href="'mailto:support@stackseekers.com?subject=' + encodeURIComponent('Scale Request: ' + $frontmatter.project.name)" class="no-underline flex-1">
                <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="secondary" class="w-full font-bold py-3" raised rounded />
              </a>
           </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section v-if="$frontmatter.project.video" class="mb-8 overflow-hidden border-round-3xl shadow-4 surface-card border-1 border-100">
  <div class="relative w-full overflow-hidden" style="padding-top: 56.25%;">
     <iframe 
       class="absolute top-0 left-0 w-full h-full border-none" 
       :src="'https://www.youtube.com/embed/' + ($frontmatter.project.video.includes('v=') ? $frontmatter.project.video.split('v=')[1]?.split('&')[0] : $frontmatter.project.video.split('/').pop())" 
       title="Project Video Showcase" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" 
       allowfullscreen>
     </iframe>
  </div>
</section>

<div v-if="$frontmatter.project.video" class="flex flex-wrap justify-content-center gap-3 mb-8">
  <a :href="'mailto:support@stackseekers.com?subject=' + encodeURIComponent('Architectural Consultation: ' + $frontmatter.project.name)" class="no-underline">
    <Button label="Architect Similar Solution" icon="pi pi-bolt" severity="primary" raised rounded class="font-bold px-6 py-3" />
  </a>
  <a :href="'https://wa.me/917026217029?text=' + encodeURIComponent('Hi Jiwan! I saw your ' + $frontmatter.project.name + ' project and would like to discuss a similar strategic architecture.')" target="_blank" rel="noopener noreferrer" class="no-underline">
    <Button label="WhatsApp Connect" icon="pi pi-whatsapp" severity="success" raised rounded class="font-bold px-6 py-3" />
  </a>
</div>


<Dialog v-model:visible="displayModal" modal header="Project Media Showcase" :style="{ width: '90vw', maxWidth: '1200px' }" class="p-0 overflow-hidden border-round-3xl" :breakpoints="{'960px': '95vw'}">
  <div class="grid p-3 surface-ground">
    <div v-for="(img, idx) in $frontmatter.project.images" :key="idx" class="col-12 md:col-6 lg:col-4 p-2">
       <div class="border-round-2xl overflow-hidden shadow-2 hover:shadow-4 transition-all transition-duration-300 surface-card h-full">
          <Image :src="img.itemImageSrc" :alt="img.alt" preview class="w-full h-full" imageClass="w-full h-full object-cover block min-h-15rem" :imageProps="{ loading: 'lazy' }" />
       </div>
    </div>
  </div>
</Dialog>

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
        <div class="p-2 md:p-4 surface-card border-round-3xl shadow-1 mt-4">
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
        <div class="p-2 md:p-4 surface-card border-round-3xl shadow-1 mt-4">
          <div class="flex align-items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm">
            <i class="pi pi-code"></i>
            Technical Deep-Dive
          </div>
          <div class="text-xl line-height-4 text-700 mb-6">
            {{ $frontmatter.project.perspective.technical }}
          </div>
          <div class="project-markdown-content text-lg line-height-4">

## Engineering Architecture: Ambient AI & Media Synthesis

AI Narrator is a sophisticated **Google Workspace Integration** that transforms Google Docs from a static text editor into an AI-powered media production studio. It demonstrates how to orchestrate distributed cloud services (Gemini, Google Drive, and Apps Script) into a cohesive, zero-friction user workflow.

### 1. The Workflow Engine (Layman's Perspective)
Imagine you have a **Professional Narrator** sitting inside your Google Doc. Instead of copying your script, opening a separate recording app, and manually saving files, you just highlight a paragraph and click a button. 

The "Narrator" (Gemini AI) reads your text, applies your specific instructions (like "speak excitedly" or "use a calm teaching tone"), and instantly places a high-quality audio file into a folder on your desk (Google Drive). It turns your document into a living, breathing media asset without you ever leaving the page.

### 2. Technical Architecture & Media Pipeline
The system is built on an event-driven architecture using Google Apps Script (GAS) to bridge the gap between the document UI and the Gemini Media API.

```mermaid
graph LR
    subgraph "Workspace Environment"
        Doc[Google Doc] --> Sidebar[Custom Vue/HTML Sidebar]
        Sidebar --> GAS[Google Apps Script Engine]
    end

    subgraph "AI Processing Layer"
        GAS --> GeminiTTS[Gemini TTS API]
        GAS --> GeminiAnalysis[Gemini Content Analysis]
    end

    subgraph "Media & Storage"
        GeminiTTS --> AudioBuffer[Base64 Audio Data]
        AudioBuffer --> Drive[Google Drive Storage]
        Drive --> UIPlayer[In-Sidebar Audio Player]
    end

    subgraph "Analytics & Reporting"
        GeminiAnalysis --> HTMLReport[HTML Performance Report]
        HTMLReport --> Drive
    end
```

### 3. Key Engineering Pillars

#### A. The "Direct-to-Drive" Media Pipeline
One of the core technical challenges was handling binary audio data within the constraints of Google Apps Script. We implemented a seamless pipeline where:
- **Text Extraction:** GAS intelligently extracts text, handling complex document structures like tables and lists.
- **Base64 Orchestration:** Binary audio streams from Gemini are converted and passed through the GAS bridge.
- **Automatic Filing:** The system automatically manages a persistent "AI Narrator" folder structure in the user's Drive, ensuring media assets are organized and accessible for post-production.

#### B. Context-Aware Speech Generation
Unlike standard Text-to-Speech (TTS) tools, AI Narrator allows for **Adverbial Instruction Injection**. We don't just send text to the API; we send a "Performance Brief." By wrapping the text with AI-driven tone and style modifiers, we produce audio that matches the *intent* of the content, whether it's an excitable YouTube script or a gentle educational guide.

#### C. Embedded Workflow Architecture
This project is a prime example of **Ambient AI**. Instead of a standalone portal, the logic lives where the content is created. This required:
- **Optimized UI (HTML Service):** A high-performance sidebar that manages state (API keys, voice selections) across multiple document sessions.
- **Asynchronous Processing:** Using `google.script.run` to handle long-running audio generation without freezing the document interface.

### 4. Strategic Business Value (ROI)
- **Reduced Production Overhead:** Lowers the cost of professional narration to nearly zero for educators and creators.
- **Workflow Consolidation:** Eliminates "App Fatigue" by keeping the entire production cycle (Scripting -> Analysis -> Recording) inside Google Docs.
- **Content Accessibility:** Enables rapid generation of audio versions for all written materials, improving compliance and reaching broader audiences.

AI Narrator proves that the most valuable AI tools are not the ones that require new habits, but the ones that **enhance existing ones**.


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

<div v-if="$frontmatter.project.relatedCaseStudy" class="mt-8 p-6 surface-50 border-round-2xl border-1 border-100 mb-6">
  <div class="flex flex-column md:flex-row align-items-center justify-content-between gap-4">
    <div>
      <h3 class="text-2xl font-bold m-0 flex align-items-center gap-2">
        <i class="pi pi-building text-primary"></i>
        {{ $frontmatter.project.relatedCaseStudy.title }}
      </h3>
      <p class="text-700 m-0 mt-2 line-height-3">{{ $frontmatter.project.relatedCaseStudy.description }}</p>
    </div>
    <div>
      <a :href="$frontmatter.project.relatedCaseStudy.link" class="no-underline">
        <Button :label="$frontmatter.project.relatedCaseStudy.buttonText" icon="pi pi-arrow-right" iconPos="right" severity="primary" raised rounded class="font-bold white-space-nowrap" />
      </a>
    </div>
  </div>
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

<section class="mt-8">
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
import { ref } from "vue"
import { responsiveOptions } from "@data/responsive.js"
const displayModal = ref(false)
</script>