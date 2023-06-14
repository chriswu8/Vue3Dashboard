import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // export f/ index.js
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

createApp(App).use(router).mount('#app')
