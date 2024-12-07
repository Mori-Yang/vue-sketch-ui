import type { App } from 'vue';
import SketchToolTip from './SketchToolTip.vue';

SketchToolTip.install = (app: App) => {
  app.component(SketchToolTip.name!, SketchToolTip);
};

export default SketchToolTip;
export * from './types';
