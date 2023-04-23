import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SvgIcon from './components/SvgIcon/index.vue'

import 'element-plus/dist/index.css'
import '@/assets/css/index.scss'

const app = createApp(App)

//全局组件
app.component('svg-icon', SvgIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')