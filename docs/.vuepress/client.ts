import { defineClientConfig } from '@vuepress/client'
// import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css' // core styles
import 'primeicons/primeicons.css' // icons
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.use(PrimeVue);
  },
})