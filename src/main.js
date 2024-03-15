//樣式
import './assets/main.css'
//套件
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//引入主程式
import App from './App.vue'
import router from './router'

const app = createApp(App)

//設定全域的網站名稱
app.use(createPinia())
app.use(router)

app.mount('#app')
