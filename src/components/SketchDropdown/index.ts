import type { App } from 'vue';
import SketchDropdown from './SketchDropdown.vue';
import Dropdown from './Dropdown';

SketchDropdown.install = (app: App) => {
  app.component(SketchDropdown.name!, SketchDropdown);
};
Dropdown.install = (app: App) => {
  app.component(Dropdown.name!, Dropdown);
};
export default SketchDropdown;
export { Dropdown };
export * from './types';
