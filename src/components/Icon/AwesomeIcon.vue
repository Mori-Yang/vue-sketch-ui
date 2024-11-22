<template>
  <i class="sk-icon" v-bind="$attrs">
    <FontAwesomeIcon v-bind="$props" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/vue-fontawesome';

defineOptions({
  name: 'AwesomeIcon',
  inheritAttrs: false,
});
defineProps<FontAwesomeIconProps>();
</script>

<style lang="scss" scoped>
.sk-icon {
  display: inline-block;
}
</style>
