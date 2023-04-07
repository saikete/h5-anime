import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import VuePageStack from '@/components/vue-page-stack' // 页面导航管理器

const app = createApp(App)

// 注入 router
app.use(router)
app.use(ElementPlus)
// app.use(VuePageStack, {router})

app.mount('#app')
