import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
createApp(App)
    .use(router).mount('#app')


// const RootComponent = {
//     /* 选项 */
//     App

// }
// const app = Vue.createApp(RootComponent)
// app.use(router)
// const vm = app.mount('#app')