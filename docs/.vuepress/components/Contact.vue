<template>
    <div class="border-round-md vp-feature-item" id="contact">
        <div class="orb orb-3"></div>
        <Svg />
        <div>
            <div class="text-center pb-4">
                <h3>
                    <div class="text-4xl font-bold">Partnering for Technical Excellence</div>
                </h3>
                <div class="my-4 text-md opacity-70">Strategic leadership for your next big build.</div>
            </div>
            <div class="mx-4 text-center text-xl line-height-3 opacity-90">
                I specialize in turning complex technical challenges into scalable business assets. If you're looking for a dedicated architecture partner to lead your vision to reality, let's start the conversation.
            </div>
            <div class="my-4">
                <a href="/contact/?subject=Inquiry:%20Strategic%20Partnership" size="large"
                    class="flex justify-content-center text-center no-underline" aria-label="Start the conversation">
                    <Button label="Start the Conversation" icon="pi pi-comments" severity="primary" raised rounded />
                </a>
            </div>
            <div class="flex flex-row justify-content-end flex-wrap gap-4 m-6 ">
                <a v-for="(socialElement, socialIndex) in social" :key="socialIndex" :href="socialElement.url"
                    target="_blank" class="flex flex-row gap-2" :aria-label="socialElement.name">
                    <i :class="socialElement.icon" :aria-label="socialElement.label" style="font-size: 1rem"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { social } from "@data/social.js";
</script>