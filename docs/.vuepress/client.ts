import { defineClientConfig } from "vuepress/client";
import PrimeVue from "primevue/config";
import { updatePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "./styles/flags.css";
import YouTubeVideos from "./components/YoutubeVideos.vue";
import YouTubeAside from "./components/YouTubeAside.vue";
import Podcast from "./components/Podcast.vue";
import YouTubePlayers from "./components/YoutubePlayers.vue";
import Svg from "./components/Svg.vue";
import Circles from "./components/Circles.vue";
import CustomButton from "./components/CustomButton.vue";
import ProjectDetail from "./components/ProjectDetail.vue";
import ProjectPage from "./components/ProjectPage.vue";
import ProjectCard from "./components/ProjectCard.vue";
import Stacks from "./components/Stacks.vue";
import Features from "./components/Features.vue";
import CardHeader from "./components/CardHeader.vue";
import BlogList from "./components/BlogList.vue";
import MetaContent from "./components/MetaContent.vue";
import Contact from "./components/Contact.vue";
import Pagination from "./components/Pagination.vue";
import ProjectRequestForm from "./components/ProjectRequestForm.vue";
import BlogNavigation from "./components/BlogNavigation.vue";
import RelatedPosts from "./components/RelatedPosts.vue";

import TagPage from "./components/TagPage.vue";
import GlobalLeadCapture from "./components/GlobalLeadCapture.vue";
import NewsletterForm from "./components/NewsletterForm.vue";
import DiagnosticQuiz from "./components/DiagnosticQuiz.vue";
import ConsultingBridge from "./components/ConsultingBridge.vue";
import TagIndex from "./components/TagIndex.vue";

import Image from "primevue/image";
import Galleria from "primevue/galleria";

export default defineClientConfig({
  enhance({ app }) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
      },
    });
    app.component("Image", Image);
    app.component("Galleria", Galleria);
    app.component("YouTubeVideos", YouTubeVideos);
    app.component("YouTubeAside", YouTubeAside);
    app.component("Podcast", Podcast);
    app.component("YouTubePlayers", YouTubePlayers);
    app.component("Svg", Svg);
    app.component("Circles", Circles);
    app.component("CustomButton", CustomButton);
    app.component("ProjectDetail", ProjectDetail);
    app.component("ProjectPage", ProjectPage);
    app.component("ProjectCard", ProjectCard);
    app.component("Stacks", Stacks);
    app.component("Features", Features);
    app.component("CardHeader", CardHeader);
    app.component("BlogList", BlogList);
    app.component("MetaContent", MetaContent);
    app.component("Contact", Contact);
    app.component("Pagination", Pagination);
    app.component("ProjectRequestForm", ProjectRequestForm);
    app.component("BlogNavigation", BlogNavigation);
    app.component("RelatedPosts", RelatedPosts);
    app.component("TagPage", TagPage);
    app.component("GlobalLeadCapture", GlobalLeadCapture);
    app.component("NewsletterForm", NewsletterForm);
    app.component("DiagnosticQuiz", DiagnosticQuiz);
    app.component("ConsultingBridge", ConsultingBridge);
    app.component("TagIndex", TagIndex);
  },
  rootComponents: [GlobalLeadCapture, ConsultingBridge],
  setup() {
    // Ensure canonical URLs strip query parameters
    if (typeof window !== 'undefined') {
      const updateCanonical = () => {
        // Get current URL without query params and hash
        let cleanPath = window.location.pathname;
        // Ensure homepage always has trailing slash for consistency
        if (cleanPath === '' || cleanPath === '/') {
          cleanPath = '/';
        }
        // Ensure path doesn't have double slashes
        cleanPath = cleanPath.replace(/\/+/g, '/');
        // Build canonical URL
        const cleanUrl = `https://stackseekers.com${cleanPath}`;
        
        // Find or create canonical link tag
        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        
        if (!canonicalLink) {
          canonicalLink = document.createElement('link');
          canonicalLink.setAttribute('rel', 'canonical');
          document.head.appendChild(canonicalLink);
        }
        
        // Update canonical URL to clean version (without query params)
        canonicalLink.setAttribute('href', cleanUrl);
      };
      
      // Update on page load
      updateCanonical();
      
      // Update on navigation (for Vue Router and browser navigation)
      window.addEventListener('popstate', updateCanonical);
      
      // Also watch for Vue Router navigation
      if (window.history && window.history.pushState) {
        const originalPushState = window.history.pushState;
        window.history.pushState = function(...args) {
          originalPushState.apply(window.history, args);
          setTimeout(updateCanonical, 0);
        };
        
        const originalReplaceState = window.history.replaceState;
        window.history.replaceState = function(...args) {
          originalReplaceState.apply(window.history, args);
          setTimeout(updateCanonical, 0);
        };
      }
    }
  },
});
