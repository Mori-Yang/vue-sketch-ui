<template>
  <div class="sk-dropdown">
    <SketchToolTip
      :trigger="trigger"
      :manual="manual"
      :placement="placement"
      :close-delay="closeDelay"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot></slot>
      <template #content>
        <ul class="sk-dropdown__menu">
          <li
            v-for="item in menuOptions"
            :key="item.key"
            class="vk-dropdown__item"
            :class="{
              ['is-disabled']: item.disabled,
            }"
            :id="`menu-item-${item.key}`"
            @click="
              () => {
                handleClick(item);
              }
            "
          >
            <RenderPropsVnode :v-node="item.label"></RenderPropsVnode>
          </li>
        </ul>
      </template>
    </SketchToolTip>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import SketchToolTip from '../SketchToolTip/SketchToolTip.vue';
import type { SketchToolTipInstance } from '../SketchToolTip/types';
import type {
  MenuOption,
  SketchDropdownEmits,
  SketchDropdownInstance,
  SketchDropdownProps,
} from './types';
import RenderPropsVnode from '../common/RenderPropsVnode';

defineOptions({
  name: 'SketchDropdown',
});
const props = withDefaults(defineProps<SketchDropdownProps>(), {
  hideAfterClick: false,
});
const emits = defineEmits<SketchDropdownEmits>();
const options = props.menuOptions;
if (!options.length) {
  console.warn('SketchDropdown need "menuOptions" prop!');
}
const visibleChange = (isShow: boolean): void => {
  emits('visible-change', isShow);
};

const tooltipRef = ref() as Ref<SketchToolTipInstance>;
defineExpose<SketchDropdownInstance>({
  show: tooltipRef.value?.show,
  hide: tooltipRef.value?.hide,
});

const handleClick = (item: MenuOption) => {
  if (item.disabled) {
    return;
  }
  emits('select', item.key);
  if (props.hideAfterClick) {
    tooltipRef.value.hide?.();
  }
};
</script>

<style lang="scss" scoped></style>
