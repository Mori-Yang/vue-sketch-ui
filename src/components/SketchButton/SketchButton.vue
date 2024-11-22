<template>
  <button
    ref="_ref"
    class="sk-button"
    :class="{
      [`sk-button--${type}`]: type,
      [`sk-button--${size}`]: size,
      'is-plain': plain,
      'is-disable': disabled || loading,
      'is-dashed': dashed,
    }"
    :disabled="disabled || loading"
    :type="nativeType"
    :autofocus="autofocus"
    :id="disabled || loading ? 'disabled' : ''"
  >
    <AwesomeIcon v-if="icon && !loading" :icon="icon" />
    <AwesomeIcon v-if="loading" :icon="faSpinner" spin />
    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonInstance, ButtonProps } from './types';
import AwesomeIcon from '../Icon/AwesomeIcon.vue';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
defineOptions({
  name: 'SketchButton',
});
// vue v3.5以下需要使用withDefaults
const { type = 'primary', nativeType = 'button', size = 'middle' } = defineProps<ButtonProps>();

const _ref = ref<ButtonInstance['ref']>();
defineExpose({
  ref: _ref,
});
</script>

<style lang="scss">
// base
.sk-button {
  color: var(--text-dark);
  background-color: var(--primary-color);
  border: 1px solid var(--line-light);
  padding: 4px 8px;
  cursor: pointer;
}
.sk-button:hover {
  background-color: var(--brand-color-light-4);
}

// type
.sk-button--success {
  background-color: var(--success-color);
}
.sk-button--success:hover {
  background-color: var(--success-hover-color);
  border-color: var(--success-color);
}
.sk-button--success.is-plain {
  border-color: var(--success-color);
  color: var(--success-color);
}
.sk-button--success.is-plain:hover {
  border-color: var(--success-hover-color);
  color: var(--success-hover-color);
}

.sk-button--danger {
  background-color: var(--error-color);
}
.sk-button--danger:hover {
  background-color: var(--error-hover-color);
  border-color: var(--error-color);
}
.sk-button--danger.is-plain {
  border-color: var(--error-color);
  color: var(--error-color);
}
.sk-button--danger.is-plain:hover {
  border-color: var(--error-hover-color);
  color: var(--error-hover-color);
}

// size
.sk-button--large {
  padding: 8px 12px;
  font-size: var(--font-size-large);
}

.sk-button--small {
  padding: 2px 4px;
  font-size: var(--font-size-small);
}
// disable
#disabled.is-disable {
  background-color: var(--file-disabled);
  color: var(--line-light);
  border-color: var(--line-dark);
  cursor: no-drop;
}
#disabled.is-disable:hover {
  border-color: var(--line-dark);
}
// plain
.is-plain {
  background-color: var(--brand-color-light-1);
  color: var(--text-light);
}
.is-plain:hover {
  background-color: var(--brand-color-light-1);
  color: var(--brand-color-light-4);
  border-color: var(--brand-color-light-4);
}
// dash
.is-dashed {
  border-style: dashed;
}
</style>
