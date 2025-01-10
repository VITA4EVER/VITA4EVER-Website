import { createApp } from 'vue'
import App from './App.vue' // Main app layout
import router from './router/Index.js'; // Our router

/* CSS */

import 'animate.css';
import '@/css/Main.css'; // Our custom global CSS

createApp(App).use(router).mount('#app');