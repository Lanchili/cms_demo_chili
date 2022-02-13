import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import ljRequest1 from './network/index'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')

//
//
//
//
//
//
//

interface DataType {
  data: number
  dataCode: string
}

ljRequest1
  .request<DataType>({
    url: '/api/users/test',
    method: 'get',
    showLoading: true
  })
  .then((res) => {
    console.log(res)
  })
