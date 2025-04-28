import './assets/main.css'

import { createApp } from 'vue'
import Main from './MyMain.vue'
import router from './router'
import axios from 'axios'

const app = createApp(Main)
const api = axios.create({
  baseURL: process.env.BASE_URL,
})

app.use(router)

app.mount('#main')

export default api
