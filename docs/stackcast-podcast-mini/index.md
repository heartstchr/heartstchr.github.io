---
title: Podcast Mini
description: Mission here is to unpack the tools, trends, and strategies that power the software world, so you can stay ahead of the curve. Whether you're a developer, an engineer, or just tech-curious, we've got you covered with actionable insights.
order: 5
editLink: false
copyright: false
---

Mission here is to unpack the tools, trends, and strategies that power the software world, so you can stay ahead of the curve. Whether you're a developer, an engineer, or just tech-curious, we've got you covered with actionable insights.
<div class="surface-ground text-white">
    <!-- Hero Section -->
    <section class="">
      <h1 class="text-4xl font-bold mb-2">Stack Cast 🎙️</h1>
      <p class="mb-4">Tools, insights & frameworks for devs, indie hackers, and startup CTOs.</p>
    </section>
    <!-- Free Tools Section -->
    <!-- <section class="py-6">
      <h2 class="text-2xl font-semibold mb-4">🚀 New Here? Start With These Free Tools</h2>
      <ul class="list-none p-0 m-0 grid gap-3 md:grid-cols-2">
        <li class="flex items-center gap-2">
          <i class="pi pi-check-circle text-primary"></i>
          <span>Startup Stack Audit Checklist</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="pi pi-check-circle text-primary"></i>
          <span>Free Tech Hiring Playbook</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="pi pi-check-circle text-primary"></i>
          <span>Freelancer to Founder Blueprint</span>
        </li>
        <li class="flex items-center gap-2">
          <i class="pi pi-check-circle text-primary"></i>
          <span>Weekly DevOps Toolkit Digest</span>
        </li>
      </ul>
      <div class="mt-4">
        <Button label="Get All Tools in One Email" icon="pi pi-envelope" class="p-button-lg p-button-help" />
      </div>
    </section> -->
    <!-- Featured Episodes -->
    <section>
      <h2 class="text-2xl font-semibold">Featured Episodes</h2>
      <ul class="list-disc ml-5">
        <li><strong>How 3 Devs Scaled a FinTech to Series A</strong></li>
        <li><strong>What Startup CTOs Wish They Knew Earlier</strong></li>
        <li><strong>The Tech Behind a Solo SaaS Hitting $10K MRR</strong></li>
      </ul>
      <Button label="Browse All Episodes" icon="pi pi-arrow-right" class="mt-3" />
    </section>
    <!-- Submit Project -->
    <section class="py-6">
      <h2 class="text-2xl font-semibold mb-4">🛠️ Built Something With Our Stuff?</h2>
      <p>Many listeners turn our insights into real apps, startups, or side-hustles. Want yours featured or reviewed?</p>
      <div class="flex flex-column gap-3 mt-4">
        <div class="flex flex-column gap-2">
          <label for="github-repo" class="font-medium">GitHub Repository Link:</label>
          <InputText 
            id="github-repo" 
            v-model="githubRepo" 
            placeholder="https://github.com/username/repository"
            class="w-full"
            :class="{ 'p-invalid': showError }"
          />
          <small v-if="showError" class="text-red-500">Please enter a valid GitHub repository URL</small>
        </div>
        <Button 
          label="Submit Your Project" 
          icon="pi pi-send" 
          class="p-button-secondary" 
          @click="submitToWhatsApp"
          :loading="isSubmitting"
        />
      </div>
    </section>
    <!-- Newsletter Signup -->
    <section class="py-6">
      <h2 class="text-2xl font-semibold mb-4">Join Tech Builders</h2>
      <p>Get podcast drops.</p>
      <div class="flex flex-column gap-3 mt-4">
        <div class="flex flex-column gap-2">
          <label for="email-signup" class="font-medium">Email Address:</label>
          <InputText 
            id="email-signup" 
            v-model="emailSignup" 
            placeholder="Enter your email"
            class="w-full"
            :class="{ 'p-invalid': showEmailError }"
          />
          <small v-if="showEmailError" class="text-red-500">Please enter a valid email address</small>
        </div>
        <Button 
          label="Join Tech Builders" 
          icon="pi pi-send" 
          class="p-button-primary" 
          @click="submitEmailToWhatsApp"
          :loading="isEmailSubmitting"
        />
      </div>
    </section>
    <!-- Final CTA -->
    <section class="py-6 text-center">
      <h2 class="text-2xl font-bold mb-4">Not Hiring… But Open to Collaboration?</h2>
      <p>I help early-stage teams go from idea to MVP, and beyond. (Only when it's the right fit.)</p>
      <div class="text-center pb-4">
    <a href="https://www.linkedin.com/in/jiwanghosal/" size="large" class="flex justify-content-center text-center no-underline mt-4"> 
      <div class="p-flex p-ai-center">
        <div
          class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"
        >
          <span class="mr-6">
            <i class="pi pi-linkedin mr-1" aria-label="View LinkedIn Reviews" style="font-size: 1rem; color:#0a66c2;"></i>
             Say Hi on LinkedIn
          </span>
          <Circles/>
          <i class="pi pi-angle-double-right" style="font-size: 1rem;"></i>
        </div>
      </div>
    </a>
  </div>
    </section>
  </div>

<div class="my-6">
  <Podcast />
</div>

<!-- Contact Me -->
<div class="border-round-md vp-feature-item" id="contact">
  <div>
    <div class="text-center py-4">
      <h2 class="my-4 text-md m-0 p-0">Connect with me on other social networks!</h2>
    </div>
    <div class="flex flex-row justify-content-end flex-wrap gap-4 mx-6 mb-6">
      <a
        v-for="(socialElement, socialIndex) in social"
        :key="socialIndex"
        :href="socialElement.url"
        target="_blank"
        class="flex flex-row gap-2"
        >
        <h3 class="sr-only m-0 p-0">{{socialElement.label}} </h3>
        <i :class="socialElement.icon" style="font-size: 1rem"></i>
        </a>
    </div>
  </div>
</div>

<script setup lang="ts">
  import { social } from "@data/social.js";
  import { ref } from 'vue';

  const githubRepo = ref('');
  const showError = ref(false);
  const isSubmitting = ref(false);
  const emailSignup = ref('');
  const showEmailError = ref(false);
  const isEmailSubmitting = ref(false);

  const submitToWhatsApp = () => {
    // Validate GitHub URL
    const githubUrlPattern = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-._]+$/;
    
    if (!githubRepo.value || !githubUrlPattern.test(githubRepo.value)) {
      showError.value = true;
      return;
    }
    
    showError.value = false;
    isSubmitting.value = true;
    
    const whatsappNumber = '+917026217029';
    
    // Create WhatsApp message
    const message = `Hi! I built something using insights from StackCast Podcast. Here's my GitHub repository: ${githubRepo.value}`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    githubRepo.value = '';
    isSubmitting.value = false;
  };

  const submitEmailToWhatsApp = () => {
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailSignup.value || !emailPattern.test(emailSignup.value)) {
      showEmailError.value = true;
      return;
    }
    
    showEmailError.value = false;
    isEmailSubmitting.value = true;
    
    const whatsappNumber = '+917026217029';
    
    // Create WhatsApp message
    const message = `Hi! I'm interested in joining Tech Builders. My email is: ${emailSignup.value}`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    emailSignup.value = '';
    isEmailSubmitting.value = false;
  };
</script>
