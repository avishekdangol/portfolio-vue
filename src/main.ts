import './assets/main.scss'

import { createApp } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import helpers from '@/utils/common'

import VueClickAway from 'vue3-click-away'
import App from './App.vue'
import router from './router'
import { pinia } from './stores'
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

import i18n from './i18n'

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(VueRecaptchaPlugin, {
  // v2SiteKey: 'YOUR_V2_SITEKEY_HERE',
  v2SiteKey: import.meta.env.VITE_RECAPTCHA_KEY,
})

app.use(router)
app.use(pinia)
app.use(i18n)
app.use(VueClickAway)

app.config.globalProperties.$helpers = helpers

app.mount('#app')
