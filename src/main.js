import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

createApp(App).use(router).mount('#app')
//create prendre l'application principal pour crée une application dessus, le monter sur une div avec l'id #app