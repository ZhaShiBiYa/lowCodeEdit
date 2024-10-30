import { createApp } from 'vue'
import App from './App.vue'

import "normalize.css"
import "@/assets/css/common.css"

import router from "@/router/index.js"
import pinia from './stores'

createApp(App).use(router).use(pinia).mount('#app')
