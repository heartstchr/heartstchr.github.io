import { defineClientConfig } from "@vuepress/client";
import PrimeVue from "primevue/config";
import { updatePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "./styles/flags.css";
import YouTubeVideos from "./components/YoutubeVideos.vue";

const MyPreset = updatePreset(Aura, {});
export default defineClientConfig({
  enhance({ app }) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
      },
    });
    app.component("YouTubeVideos", YouTubeVideos);
  },
});
