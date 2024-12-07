import type { App } from 'vue';
import SketchCollapse from './SketchCollapse.vue';
import SketchCollapseItem from './SketchCollapseItem.vue';

SketchCollapse.install = (app: App) => {
  app.component(SketchCollapse.name!, SketchCollapse);
};
SketchCollapseItem.install = (app: App) => {
  app.component(SketchCollapseItem.name!, SketchCollapseItem);
};

export default SketchCollapse;
export { SketchCollapseItem };
export * from './types';
