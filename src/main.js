import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem'

const app = createApp(App)

// 注入 router
app.use(router)

app.mount('#app')
