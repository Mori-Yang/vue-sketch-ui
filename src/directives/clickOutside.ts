import type { Directive } from 'vue';

let handler: (e: MouseEvent) => void | null;
const directiveName = 'clickOutside';
const options: Directive = {
  mounted(el, binding) {
    if (!el) {
      return;
    }
    handler = (e: MouseEvent) => {
      if (el && e.target) {
        if (!el.contains(e.target as HTMLElement)) {
          const callback = binding.value;
          if (typeof callback === 'function') {
            callback(e);
          }
        }
      }
    };

    document.addEventListener('click', handler);
  },
  unmounted(el) {
    if (el) {
      document.removeEventListener('click', handler);
    }
  },
};
export default {
  directiveName,
  options,
};
