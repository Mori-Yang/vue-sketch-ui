<template>
  <div class="sk-tooltip" v-on="events" ref="tooltipNode">
    <!-- trigger -->
    <div class="sk-tooltip__trigger" ref="triggerNode">
      <slot></slot>
    </div>
    <!-- popper -->
    <div class="sk-tooltip__popper" ref="popperNode" v-if="show">
      <slot name="content">{{ content }}</slot>
    </div>
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
});

const emits = defineEmits<SketchToolTipEmits>();

const show = ref(false);
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
let popperInstance: null | Instance = null;
const display = () => {
  show.value = true;
  emits('visible-change', show.value);
};
const hide = () => {
  show.value = false;
  emits('visible-change', show.value);
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
const events = reactive<Record<string, () => void>>({});
const attachEvent = () => {
  if (props.trigger === 'click') {
    events['click'] = () => {
      if (show.value) {
        hide();
      } else {
        display();
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
      }, props.delay);
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
}
</style>
