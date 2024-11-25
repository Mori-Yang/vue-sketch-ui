<template>
  <div class="sk-tooltip" v-on="events">
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
import { type SketchToolTipProps, type SketchToolTipEmits } from './types';
// popper
import { createPopper, type Instance } from '@popperjs/core';
defineOptions({
  name: 'SketchToolTip',
});

const props = withDefaults(defineProps<SketchToolTipProps>(), {
  placement: 'top',
  manual: true,
  trigger: 'hover',
});

const emits = defineEmits<SketchToolTipEmits>();

const show = ref(false);
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
let popperInstance: null | Instance = null;
const handleClick = () => {
  show.value = !show.value;
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
const events = reactive({
  click: props.trigger === 'click' ? handleClick : () => {},
  mouseenter:
    props.trigger === 'hover'
      ? () => {
          clearTimeout(leaveTimer);
          handleHover(true);
        }
      : () => {},
  mouseleave:
    props.trigger === 'hover'
      ? () => {
          leaveTimer = setTimeout(() => {
            handleHover(false);
          }, props.delay);
        }
      : () => {},
});
</script>

<style lang="scss" scoped>
.sk-tooltip__popper {
  background-color: var(--brand-color-light-3);
  padding: 8px;
  border-radius: 8px;
}
</style>
