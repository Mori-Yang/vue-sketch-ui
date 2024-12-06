---
title: SketchMessage
description: SketchMessage docs
---

<Block>
<SketchButton @click="showMessage1">Click</SketchButton>
<SketchButton @click="showMessage2" type="success">Click</SketchButton>
<SketchButton @click="showMessage3" type="danger" dashed>Click</SketchButton>
</Block>

```html
<Block>
  <SketchButton @click="showMessage1">Click</SketchButton>
  <SketchButton @click="showMessage2" type="success">Click</SketchButton>
  <SketchButton @click="showMessage3" type="danger" dashed>Click</SketchButton>
</Block>
```

```js
function showMessage1() {
  createMessage({
    duration: 0,
    closeable: true,
    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!',
  });
}
function showMessage2() {
  createMessage({
    duration: 0,
    closeable: true,
    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!',
    type: 'success',
    offset: 60,
  });
}
function showMessage3() {
  createMessage({
    duration: 1000,
    closeable: true,
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!',
    type: 'error',
  });
}
```

<script setup>
import SketchButton from '../../src/components/SketchButton/SketchButton.vue';
import Block from '../../src/components/SketchBlock/Block.vue';
import {createMessage} from '../../src/components/SketchMessage/methods.ts';

function showMessage1() {
  createMessage({
    duration: 0,
    closeable: true,
    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!',
  });
}
function showMessage2() {
  createMessage({
    duration: 0,
    closeable: true,
    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!',
    type: 'success',
    offset: 60,
  });
}
function showMessage3() {
  createMessage({
    duration: 1000,
    closeable: true,
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, mollitia!',
    type: 'error',
  });
}
</script>
