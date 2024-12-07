<template>
  <div class="sk-tooltip" ref="tooltipNode" v-on="events">
    <!-- trigger -->
    <div class="sk-tooltip__trigger" ref="triggerNode">
      <slot></slot>
    </div>
    <!-- popper -->
    <Transition :name="transition">
      <div class="sk-tooltip__popper" ref="popperNode" v-if="show">
        <slot name="content">{{ content }}</slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import type { SketchToolTipProps, SketchToolTipEmits, SketchToolTipInstance } from './types';
// hooks
import useClickOutside from '@/hooks/useClickOutside';
// popper
import { createPopper, type Instance } from '@popperjs/core';
defineOptions({
  name: 'SketchToolTip',
});

const props = withDefaults(defineProps<SketchToolTipProps>(), {
  placement: 'top',
  manual: false,
  trigger: 'hover',
  transition: 'sk-fade',
  hideAfterClick: false,
});
const emits = defineEmits<SketchToolTipEmits>();
const show = ref(false);
const tooltipNode = ref<HTMLElement>();
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
const popperInstance = ref<Instance | null>(null);
// atom event
const display = () => {
  show.value = true;
  emits('visible-change', show.value);
};
const hide = (inner?: boolean) => {
  if (!inner) {
    return;
  }
  show.value = false;
  emits('visible-change', show.value);
};
watch(
  show,
  (isShow) => {
    if (isShow) {
      if (triggerNode.value && popperNode.value) {
        popperInstance.value = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement,
        });
      }
    }
  },
  {
    flush: 'post',
  },
);
const events = reactive<Record<string, (e: MouseEvent) => void>>({});
const attachEvents = () => {
  if (props.trigger === 'click') {
    events['click'] = (e: MouseEvent) => {
      if (props.hideAfterClick) {
        if (show.value) {
          hide(true);
          return;
        }
      }
      if (
        show.value &&
        (!tooltipNode.value?.contains(e.target as HTMLElement) ||
          triggerNode.value?.contains(e.target as HTMLElement))
      ) {
        hide(true);
      } else {
        display();
      }
    };
  } else if (props.trigger === 'hover') {
    events['mouseenter'] = () => {
      display();
    };
    events['mouseleave'] = () => {
      hide(true);
    };
  }
};
if (!props.manual) {
  // 声明手动时，不添加事件
  attachEvents();
  useClickOutside(tooltipNode, () => {
    hide(true);
  });
}
defineExpose<SketchToolTipInstance>({
  show: display,
  hide: hide,
  isShow: show,
  popperInstance,
});
</script>

<style lang="scss" scoped>
.sk-tooltip__popper {
  background-color: var(--brand-color-light-3);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--brand-color-dark-1);
  z-index: 2;

  #arrow,
  #arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    background: var(--brand-color-light-3);
  }
  #arrow {
    visibility: hidden;
  }
  #arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }
  // 箭头位置
  &[data-popper-placement^='top'] > #arrow {
    bottom: -4px;
  }
  &[data-popper-placement^='bottom'] > #arrow {
    top: -4px;
  }
  &[data-popper-placement^='left'] > #arrow {
    right: -4px;
  }
  &[data-popper-placement^='right'] > #arrow {
    left: -4px;
  }
  // 箭头边框
  &[data-popper-placement^='top'] > #arrow::before {
    border-right: 1px solid var(--brand-color-dark-1);
    border-bottom: 1px solid var(--brand-color-dark-1);
  }
  &[data-popper-placement^='bottom'] > #arrow::before {
    border-left: 1px solid var(--brand-color-dark-1);
    border-top: 1px solid var(--brand-color-dark-1);
  }
  &[data-popper-placement^='left'] > #arrow::before {
    border-right: 1px solid var(--brand-color-dark-1);
    border-top: 1px solid var(--brand-color-dark-1);
  }
  &[data-popper-placement^='right'] > #arrow::before {
    border-left: 1px solid var(--brand-color-dark-1);
    border-bottom: 1px solid var(--brand-color-dark-1);
  }
}
</style>
