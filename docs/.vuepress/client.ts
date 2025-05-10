import { defineClientConfig } from "vuepress/client";
import PrimeVue from "primevue/config";
import { updatePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "./styles/flags.css";
import YouTubeVideos from "./components/YoutubeVideos.vue";
import Svg from "./components/Svg.vue";
import ProjectDetail from "./components/ProjectDetail.vue";
import ProjectPage from "./components/ProjectPage.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
      },
    });
    app.component("YouTubeVideos", YouTubeVideos);
    app.component("Svg", Svg);
    app.component("ProjectDetail", ProjectDetail);
    app.component("ProjectPage", ProjectPage);
    app.component("ProjectCard", ProjectCard);
  },
});
