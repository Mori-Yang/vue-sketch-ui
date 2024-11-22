import { createApp } from 'vue';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import './style/index.css';

library.add(fas);

const app = createApp(App);
app.mount('#app');
