<template>
  <div
    class="sk-block"
    :style="{
      'flex-direction': vertical ? 'column' : 'row',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { SketchBlockProps } from './types';

defineProps<SketchBlockProps>();
</script>

<style scoped lang="scss">
.sk-block {
  display: flex;
  border: 1px dashed black;
  padding: 10px;
  margin: 10px;
  justify-content: space-around;
  align-items: center;
}
</style>
