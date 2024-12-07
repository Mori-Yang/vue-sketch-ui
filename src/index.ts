import SketchButton from './components/SketchButton/index';
import SketchAlert from './components/SketchAlert/index';
import SketchCollapse, { SketchCollapseItem } from './components/SketchCollapse/index';
import SketchMessage from './components/SketchMessage/index';
import SketchDropdown from './components/SketchDropdown/index';
import SketchToolTip from './components/SketchToolTip/index';
import type { App } from 'vue';

const components = [
  SketchButton,
  SketchAlert,
  SketchCollapse,
  SketchCollapseItem,
  SketchMessage,
  SketchDropdown,
  SketchToolTip,
];

export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name!, component);
    });
  },
};

export {
  SketchButton,
  SketchAlert,
  SketchCollapse,
  SketchCollapseItem,
  SketchMessage,
  SketchDropdown,
  SketchToolTip,
};
