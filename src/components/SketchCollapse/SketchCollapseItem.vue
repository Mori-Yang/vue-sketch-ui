<template>
  <div
    class="sk-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div class="sk-collapse-item__header" :id="`item-header-${name}`" @click="handleClick">
      <slot name="header">{{ title }}</slot>
    </div>
    <div v-show="isActive" class="sk-collapse-item__body" :id="`item-body-${name}`">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { CollapseConetxtKey, type CollapseItemProps } from './types';

defineOptions({
  name: 'SketchCollapseItem',
});
const { name, title, disabled = false } = defineProps<CollapseItemProps>();

const context = inject(CollapseConetxtKey);

const isActive = computed(() => {
  return context?.activeNames.value.includes(name);
});

const handleClick = () => {
  if (disabled) return;
  context?.handleItemClick(name);
};
</script>

<style lang="scss" scoped>
.sk-collapse-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid var(--line-light);

  .sk-collapse-item__header {
    width: 100%;
    font-size: var(--font-size-large);
    font-weight: 600;
    background-color: var(--brand-color-light-3);
    padding: 4px;
    cursor: pointer;
  }
  .sk-collapse-item__body {
    width: 100%;
    font-size: var(--font-size-middle);
    background-color: var(--brand-color);
    min-height: calc(var(--font-size-middle) * 4);
    color: var(--text-dark);
    padding: 4px;
  }
}

.is-disabled {
  color: var(--line-light);
  background-color: var(--line-dark);

  .sk-collapse-item__header {
    cursor: no-drop;
  }
}
</style>
