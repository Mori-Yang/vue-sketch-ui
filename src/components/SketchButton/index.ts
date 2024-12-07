import type { App } from 'vue';
import SketchButton from './SketchButton.vue';

SketchButton.install = (app: App) => {
  app.component(SketchButton.name!, SketchButton);
};

export default SketchButton;
export * from './types';
