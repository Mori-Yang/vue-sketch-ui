import { createApp } from 'vue';

import App from './App.vue';
import './style/index.css';
// directive
import directives from './directives/index';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const app = createApp(App);
directives.forEach((d) => {
  app.directive(d.directiveName, d.options);
});
app.mount('#app');
