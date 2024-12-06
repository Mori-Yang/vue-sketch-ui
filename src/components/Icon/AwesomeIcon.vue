<template>
  <i class="sk-icon" v-bind="$attrs" :class="clazz">
    <FontAwesomeIcon v-bind="$props" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/vue-fontawesome';
type SketchProps = FontAwesomeIconProps & {
  onClick?: () => void;
  clazz?: string;
};
defineOptions({
  name: 'AwesomeIcon',
  inheritAttrs: false,
});
defineProps<SketchProps>();
</script>

<style lang="scss" scoped>
.sk-icon {
  display: inline-block;
  min-width: 12px;
}
</style>
