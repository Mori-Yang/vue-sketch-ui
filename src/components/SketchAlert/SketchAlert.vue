<template>
  <div
    class="sk-alert"
    :class="{
      [`sk-alert--${type}`]: type,
    }"
    :style="{
      display: hidden ? 'none' : 'flex',
    }"
    ref="root"
  >
    <div class="sk-alert__left">
      <AwesomeIcon v-if="icon" :icon="icon" />
      <span><slot></slot></span>
    </div>
    <div class="sk-alert__right">
      <div class="sk-alert__right__options">
        <slot name="options">
          <SketchButton v-for="(props, i) in options" :key="i" v-bind="props">{{
            props.text
          }}</SketchButton>
        </slot>
      </div>
      <AwesomeIcon
        v-if="closeable"
        icon="close"
        size="xs"
        class="sk-alert__right__close"
        @click="close"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AwesomeIcon from '../Icon/AwesomeIcon.vue';
import { type SketchAlertEmits, type SketchAlertProps } from './types';
import SketchButton from '../SketchButton/SketchButton.vue';

defineOptions({
  name: 'SketchAlter',
});
defineProps<SketchAlertProps>();
const emits = defineEmits<SketchAlertEmits>();
const hidden = ref(false);
const close = () => {
  emits('close');
  hidden.value = true;
};
</script>

<style lang="scss" scoped>
.sk-alert {
  width: 100%;
  padding: 8px;
  background-color: var(--brand-color-light-4);
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  margin: 4px 0;

  .sk-alert__right {
    display: flex;
    flex-direction: row;
    .sk-alert__right__options {
      display: flex;
      flex-direction: column;
    }
    .sk-alert__right__close {
      cursor: pointer;
      margin-left: 4px;
    }
  }
}

.sk-alert--danger {
  background-color: var(--error-hover-color);
}
.sk-alert--success {
  background-color: var(--success-hover-color);
}
</style>
