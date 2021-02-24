import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from '@/code/router'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(router).use(Antd).mount('#app')
