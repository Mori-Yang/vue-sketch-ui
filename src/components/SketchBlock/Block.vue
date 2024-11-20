<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  border: 1px dashed black;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
