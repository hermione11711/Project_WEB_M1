import { createApp } from 'vue'
import App from './App.vue'
import { getAuthConfig } from './services/auth.js'
import router from '../src/router/index.js';

createApp(App)
.use(getAuthConfig())
.use(router)  
.mount('#app');

