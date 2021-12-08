import './index.css'

// plugins configuration
import './plugins/veevalidate'

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter } from './router'
import { createPinia } from 'pinia'
import { setupI18n } from './plugins/i18n'

const app = createApp(App)

app.use(createRouter())
app.use(createPinia())
app.use(setupI18n())

// Register layouts
import LandingPageLayout from '@/layouts/landing-page/index.vue'
import EmptyLayout from './layouts/empty/index.vue'

app.component('landing-page-layout', LandingPageLayout)
app.component('empty-layout', EmptyLayout)

app.mount('#app')
