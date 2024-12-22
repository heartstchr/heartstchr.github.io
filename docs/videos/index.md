---
title: Latest youtube videos
order: 4
editLink: false
copyright: false
---

<div class="my-6">
  <YouTubeVideos />
</div>

<!-- Contact Me -->
<div class="border-round-md vp-feature-item" id="contact">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
  <div>
    <div class="text-center py-4">
      <div class="my-4 text-md">Let's work together!</div>
    </div>
    <div class="mx-4 text-center text-xl">
      Ready to turn your vision into reality? Let’s discuss how I can help you achieve your goals.
    </div>
    <div class="my-4">
      <a href="mailto:jiwan.cse@gmail.com" size="large" color="deeppink" class="flex justify-content-center text-center no-underline"> 
        <Button label="Make It Happen!" icon="pi pi-briefcase" severity="primary" raised rounded />
      </a>
    </div>
    <div class="flex flex-row justify-content-end flex-wrap gap-4 mx-6">
      <a
        v-for="(socialElement, socialIndex) in social"
        :key="socialIndex"
        :href="socialElement.url"
        target="_blank"
        class="flex flex-row gap-2"
        >
        <i :class="socialElement.icon" style="font-size: 1rem"></i>
        </a>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10b981" fill-opacity="0.1" d="M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
</div>

<script setup lanf="ts">
  import { ref, onMounted } from 'vue';

  const social= [
    { label: 'linkedin', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/jiwanghosal/' },
    { label: 'youtube', icon: 'pi pi-youtube', url: 'https://www.youtube.com/@stackseekers' },
    { label: 'stackoverflow', icon: 'pi pi-chart-bar', url: 'https://stackoverflow.com/users/10376224/stchr?tab=profile' },
    { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/jiwan_ghosal/' },
  ]
</script>
