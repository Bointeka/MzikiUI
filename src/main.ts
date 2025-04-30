import './assets/main.css'

import { createApp } from 'vue'
import Main from './MyMain.vue'
import router from './router'
import axios from 'axios'

const app = createApp(Main)
const api = axios.create({
  baseURL: 'http://localhost:8080/api/',
})

app.use(router)
app.use(api)

app.mount('#main')

export default api
