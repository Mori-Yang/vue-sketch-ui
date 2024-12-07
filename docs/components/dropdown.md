---
title: SketchDropdown
description: SketcDropdown docs
---

# 看

Dropdown组件提供了组件写法和JSX写法
基于Tooltip封装的

<Block>
    <SketchDropdown :menu-options="dropdownOpt">
        <SketchButton size="small" dashed>Hover me</SketchButton>
    </SketchDropdown>
    <DropdownJSX :menu-options="dropdownOpt2" trigger="click" >
        <SketchButton size="small" dashed>JSX</SketchButton>
    </DropdownJSX>
</Block>

```html
<SketchDropdown :menu-options="dropdownOpt">
  <SketchButton size="small" dashed>Hover me</SketchButton>
</SketchDropdown>
<DropdownJSX :menu-options="dropdownOpt2" trigger="click">
  <SketchButton size="small" dashed>JSX</SketchButton>
</DropdownJSX>
```

```vue
<script setup>
import SketchToolTip from '../../src/components/SketchToolTip/SketchToolTip.vue';
import SketchButton from '../../src/components/SketchButton/SketchButton.vue';
import Block from '../../src/components/SketchBlock/Block.vue';
import SketchDropdown from '../../src/components/SketchDropdown/SketchDropdown.vue';
import DropdownJSX from '../../src/components/SketchDropdown/Dropdown.tsx';
import { ref, h } from 'vue';
const dropdownOpt = ref([
  {
    label: 'Item 1',
    key: 1,
  },
  {
    label: 'Item 2',
    key: 2,
  },
  {
    label: h('b', 'Item 3'),
    key: 3,
  },
]);
const dropdownOpt2 = ref([
  {
    label: h(
      SketchButton,
      {
        type: 'plain',
      },
      () => 'Item 1',
    ),
    key: 1,
  },
  {
    label: h(
      SketchButton,
      {
        type: 'success',
      },
      () => 'Item 2',
    ),
    key: 2,
  },
  {
    label: h(
      SketchButton,
      {
        type: 'danger',
      },
      () => 'Item 3',
    ),
    key: 3,
  },
]);
</script>
```

<script setup>
import SketchToolTip from '../../src/components/SketchToolTip/SketchToolTip.vue';
import SketchButton from '../../src/components/SketchButton/SketchButton.vue';
import Block from '../../src/components/SketchBlock/Block.vue';
import SketchDropdown from '../../src/components/SketchDropdown/SketchDropdown.vue';
import DropdownJSX from '../../src/components/SketchDropdown/Dropdown.tsx';
import {ref,h} from 'vue';
const dropdownOpt = ref([
  {
    label: 'Item 1',
    key: 1,
  },
  {
    label: 'Item 2',
    key: 2,
  },
  {
    label: h('b', 'Item 3'),
    key: 3,
  },
]);
const dropdownOpt2 = ref([
  {
    label:h(SketchButton, {
        type:'plain'
    },()=>'Item 1'),
    key: 1,
  },
  {
    label: h(
      SketchButton,
      {
        type: 'success',
      },
      () => 'Item 2',
    ),
    key: 2,
  },
  {
    label: h(SketchButton, {
        type:'danger'
    },()=>'Item 3'),
    key: 3,
  },
]);
</script>
