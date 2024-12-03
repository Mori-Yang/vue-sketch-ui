---
title: SketchButton
description: SketchButton docs
---

# SketchButton

非常非常常用的按钮组件

## 基础用法

使用`type plain round circle`来定义样式。

### 直接展示

#### 普通的

<Block>
    <SketchButton ref="buttonRef" size="large" @click="handleClick">Primary</SketchButton>
    <SketchButton type="success">Success</SketchButton>
    <SketchButton type="danger" size="small" dashed>Danger</SketchButton>
    <SketchButton plain dashed>Plain</SketchButton>
    <SketchButton disabled size="large">Disable</SketchButton>
</Block>

```vue
<SketchButton ref="buttonRef" size="large" @click="handleClick">Primary</SketchButton>
<SketchButton type="success">Success</SketchButton>
<SketchButton type="danger" size="small" dashed>Danger</SketchButton>
<SketchButton plain dashed>Plain</SketchButton>
<SketchButton disabled size="large">Disable</SketchButton>
```

#### 简单的

<Block>
    <SketchButton size="large" plain>Primary</SketchButton>
    <SketchButton type="success" plain>Success</SketchButton>
    <SketchButton type="danger" size="small" dashed plain>Danger</SketchButton>
    <SketchButton plain dashed>Plain</SketchButton>
    <SketchButton size="large" plain disabled>Disable</SketchButton>
</Block>

```vue
<SketchButton size="large" plain>Primary</SketchButton>
<SketchButton type="success" plain>Success</SketchButton>
<SketchButton type="danger" size="small" dashed plain>Danger</SketchButton>
<SketchButton plain dashed>Plain</SketchButton>
<SketchButton size="large" plain disabled>Disable</SketchButton
```

#### loading的

<Block>
    <SketchButton :loading="loading1" @click="onLoad1">Click</SketchButton>
    <SketchButton type="success" icon="arrow-up" size="small" @click="onLoad2" :loading="loading2" >Click Upload</SketchButton
        >
    <SketchButton type="danger" size="small" dashed loading>Loading</SketchButton>
</Block>

```vue
<SketchButton :loading="loading1" @click="onLoad1">Click</SketchButton>
<SketchButton
  type="success"
  icon="arrow-up"
  size="small"
  @click="onLoad2"
  :loading="loading2"
>Click Upload</SketchButton>
<SketchButton type="danger" size="small" dashed loading>Loading</SketchButton>
```

<script setup>
import SketchButton from '../../src/components/SketchButton/SketchButton.vue';
import Block from '../../src/components/SketchBlock/Block.vue';

import { ref } from 'vue';

const buttonRef = ref(null);
const handleClick = (e) => {
  console.log(e);
};
const loading1 = ref(false);
const onLoad1 = () => {
  loading1.value = true;
  setTimeout(() => {
    loading1.value = false;
  }, 1000);
};
const loading2 = ref(false);
const onLoad2 = () => {
  loading2.value = true;
  setTimeout(() => {
    loading2.value = false;
  }, 1000);
};
</script>
