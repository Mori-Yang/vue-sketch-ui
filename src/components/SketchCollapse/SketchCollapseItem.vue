<template>
  <div
    class="sk-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="sk-collapse-item__header"
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      @click="handleClick"
    >
      <AwesomeIcon :icon="faAngleRight" size="2xs" class="sk-collapse-item__header__angle" />
      <slot name="header">
        <span>
          {{ title }}
        </span>
      </slot>
    </div>
    <Transition name="sk-slide" v-on="transitionEvents">
      <div class="sk-collapse-item__body_wrapper" v-show="isActive">
        <div class="sk-collapse-item__body" :id="`item-body-${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { CollapseConetxtKey, type CollapseItemProps } from './types';
import AwesomeIcon from '../Icon/AwesomeIcon.vue';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

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

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px';
    el.style.overflow = 'hidden';
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.style.height = '';
    el.style.overflow = '';
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },
  leave(el) {
    el.style.height = '0px';
  },
  afterLeave(el) {
    el.style.height = '';
    el.style.overflow = '';
  },
};
</script>

<style lang="scss" scoped>
.sk-collapse-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .sk-collapse-item__header {
    width: 100%;
    font-size: var(--font-size-large);
    font-weight: 600;
    background-color: var(--brand-color-light-3);
    border-bottom: 1px solid var(--line-light);
    padding: 4px;
    cursor: pointer;
  }
  .sk-collapse-item__header__angle {
    transition: transform 0.5s;
  }
  .sk-collapse-item__body_wrapper {
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
    background-color: var(--brand-color-light-2);
    cursor: no-drop;
  }

  .is-active {
    border-bottom-color: transparent;
    .sk-collapse-item__header__angle {
      transform: rotate(90deg);
    }
  }
}
</style>
