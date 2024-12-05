---
title: SketchTooltip
description: SketcTooltip docs
---

# 看就完了

基于Popper.js封装的

<Block>
<SketchToolTip
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, minus."
        placement="bottom"
    >
<SketchButton type="success" size="small" dashed plain>Hover</SketchButton>
</SketchToolTip>
<SketchToolTip trigger="click" ref="tooltipRef1">
<template #content>
<Block>
<SketchButton type="success" size="small" icon="arrow-up" @click="onLoad" :loading="loading">Click Upload</SketchButton>
</Block>
</template>
<SketchButton type="danger" size="small" dashed plain>Click</SketchButton>
</SketchToolTip>
<SketchToolTip manual content="Lorem ipsum dolor" placement="left" ref="tooltipRef2">
<div style="border: 1px solid black">Box</div>
</SketchToolTip>
<SketchButton type="danger" size="small" dashed plain @click="toggleTooltip">Show in left box</SketchButton>
</Block>

```html
<Block>
  <SketchToolTip
    content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, minus."
    placement="bottom"
  >
    <SketchButton type="success" size="small" dashed plain>Hover</SketchButton>
  </SketchToolTip>
  <SketchToolTip trigger="click" ref="tooltipRef1">
    <template #content>
      <Block>
        <SketchButton type="success" size="small" icon="arrow-up" @click="onLoad" :loading="loading"
          >Click Upload</SketchButton
        >
      </Block>
    </template>
    <SketchButton type="danger" size="small" dashed plain>Click</SketchButton>
  </SketchToolTip>
  <SketchToolTip manual content="Lorem ipsum dolor" placement="left" ref="tooltipRef2">
    <div style="border: 1px solid black">Box</div>
  </SketchToolTip>
  <SketchButton type="danger" size="small" dashed plain @click="toggleTooltip"
    >Show in left box</SketchButton
  >
</Block>
```

<script setup>
import SketchToolTip from '../../src/components/SketchToolTip/SketchToolTip.vue';
import SketchButton from '../../src/components/SketchButton/SketchButton.vue';
import Block from '../../src/components/SketchBlock/Block.vue';

import {ref} from 'vue';
const tooltipRef1 = ref(null);
const tooltipRef2 = ref(null);
const loading = ref(false);
const onLoad = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
const toggleTooltip = () => {
  if (tooltipRef2.value) {
    if (tooltipRef2.value.isShow) {
      tooltipRef2.value.hide?.();
    } else {
      tooltipRef2.value.show?.();
    }
  }
};
</script>
