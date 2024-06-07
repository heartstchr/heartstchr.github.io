import { defineClientConfig } from '@vuepress/client';
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'; // core styles
import 'primeicons/primeicons.css'; // icons
import 'primevue/resources/themes/saga-blue/theme.css'; // theme

export default defineClientConfig({
  enhance({ app }) {
    app.use(PrimeVue);
  },
});
