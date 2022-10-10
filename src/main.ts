import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/index.js'

const app = createApp(App);
app.use(router)
app.mount('#app')
