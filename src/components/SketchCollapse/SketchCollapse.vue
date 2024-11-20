<template>
  <div class="sk-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import { CollapseConetxtKey, type CollapseEmits, type CollapseProps, type NameType } from './types';

defineOptions({
  name: 'SketchCollapse',
});
const { modelValue, accordion = false } = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
// open item list
const activeNames = ref<NameType[]>(modelValue);
watch(
  () => modelValue,
  () => {
    activeNames.value = modelValue;
  },
);
// dev
if (modelValue.length > 1 && accordion) {
  console.warn(
    `accordion mode should only have on active item, but you passed ${modelValue.length} active item`,
  );
}

const handleItemClick = (item: NameType) => {
  if (accordion) {
    activeNames.value = [activeNames.value[0] === item ? '' : item];
  } else {
    const index = activeNames.value.indexOf(item);
    if (index > -1) {
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(item);
    }
  }
  emits('update:modelValue', activeNames.value);
  emits('change', activeNames.value);
};

provide(CollapseConetxtKey, {
  activeNames,
  handleItemClick,
});
</script>

<style lang="scss" scoped>
.sk-collapse {
  width: 100%;
  border: 1px solid var(--line-light);
  border-radius: 8px;
  overflow: hidden;
}
</style>
