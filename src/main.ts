import { createApp } from 'vue';
import App from './App.vue';
import router from '@/core/router/index';

createApp(App)
  .use(router)
  .mount('#app');
