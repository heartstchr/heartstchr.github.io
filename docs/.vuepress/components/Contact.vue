<template>
    <div class="border-round-md vp-feature-item" id="contact">
        <div class="orb orb-3"></div>
        <Svg />
        <div>
            <div class="text-center pb-4">
                <h3>
                    <div class="text-4xl font-bold">Need a full-stack web developer?</div>
                </h3>
                <div class="my-4 text-md">Let's work together!</div>
            </div>
            <div class="mx-4 text-center text-xl line-height-3">
                I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed
                full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to
                collaborate!
            </div>
            <div class="my-4">
                <a href="mailto:jiwan.cse@gmail.com?subject=Inquiry:%20collaborate%20now" size="large"
                    class="flex justify-content-center text-center no-underline" aria-label="Send an Email">
                    <Button label="Let's collaborate now!" icon="pi pi-briefcase" severity="primary" raised rounded />
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