<template>
  <div class="sk-tooltip" v-on="events" ref="tooltipNode">
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
import { computed, reactive, ref, watch } from 'vue';
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
});
const delayOptions = computed(() => {
  return {
    openDelay: props.delay || 0,
    closeDelay: props.closeDelay || props.delay || 0,
  };
});
const emits = defineEmits<SketchToolTipEmits>();

const show = ref(false);
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
let popperInstance: null | Instance = null;
// 最终触发的事件（最小事件单元）
const display = () => {
  setTimeout(() => {
    show.value = true;
    emits('visible-change', show.value);
  }, delayOptions.value.openDelay);
};
const hide = () => {
  setTimeout(() => {
    show.value = false;
    emits('visible-change', show.value);
  }, delayOptions.value.closeDelay);
};
const handleHover = (open: boolean) => {
  show.value = open;
  emits('visible-change', open);
};
watch(
  show,
  (newV) => {
    if (newV) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement,
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 6],
              },
            },
          ],
        });
      } else {
        popperInstance?.destroy();
      }
    }
  },
  { flush: 'post' },
);
// v-on="events" 支持hover 和 click
let leaveTimer: number | undefined = undefined;
const events = reactive<Record<string, (e: Event) => void>>({});
const attachEvent = () => {
  if (props.trigger === 'click') {
    events['click'] = (e: Event) => {
      if (!show.value) {
        display();
      } else {
        if (triggerNode.value?.contains(e.target as HTMLElement)) {
          hide();
        }
      }
    };
  } else if (props.trigger === 'hover') {
    events['mouseenter'] = () => {
      clearTimeout(leaveTimer);
      handleHover(true);
    };
    events['mouseleave'] = () => {
      leaveTimer = setTimeout(() => {
        handleHover(false);
      }, delayOptions.value.closeDelay);
    };
  }
};
if (!props.manual) {
  attachEvent();
}
const handleClickOutside = (_: MouseEvent) => {
  if (props.trigger === 'click' && show.value && !props.manual) {
    hide();
  }
};
const tooltipNode = ref<HTMLElement>();
useClickOutside(tooltipNode, handleClickOutside);

defineExpose<SketchToolTipInstance>({
  show: display,
  hide,
  isShow: show,
});
</script>

<style lang="scss" scoped>
.sk-tooltip__popper {
  background-color: var(--brand-color-light-3);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--brand-color-dark-1);

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
