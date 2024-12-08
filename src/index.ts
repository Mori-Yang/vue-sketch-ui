import SketchButton from './components/SketchButton/index';
import SketchAlert from './components/SketchAlert/index';
import SketchCollapse, { SketchCollapseItem } from './components/SketchCollapse/index';
import SketchMessage from './components/SketchMessage/index';
import SketchDropdown from './components/SketchDropdown/index';
import SketchToolTip from './components/SketchToolTip/index';
import directives from './directives/index';
import type { App } from 'vue';
/**
 * 打包需要style / 第三方库 / api
 */
// style
import './style/index.css';
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
// api
import { createMessage } from './components/SketchMessage/index';

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
    directives.forEach((directive) => {
      app.directive(directive.directiveName, directive.options);
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
  createMessage,
};
