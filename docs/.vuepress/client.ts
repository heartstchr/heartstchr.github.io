import { defineClientConfig } from "vuepress/client";
import PrimeVue from "primevue/config";
import { updatePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "./styles/flags.css";
import YouTubeVideos from "./components/YoutubeVideos.vue";
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

export default defineClientConfig({
  enhance({ app }) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
      },
    });
    app.component("YouTubeVideos", YouTubeVideos);
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
  },
});
