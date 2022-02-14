import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
