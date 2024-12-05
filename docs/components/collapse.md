---
title: SketchCollapse
description: SketcCollapse docs
---

# 直接看吧

<Block>
    <SketchCollapse v-model="openCollapse1" @change="doChange">
      <SketchCollapseItem name="1" title="Default Title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste voluptatibus minus.
        Ratione sit culpa iusto, tenetur praesentium ex dignissimos quod veniam nisi, illo
        distinctio ut modi perspiciatis nostrum debitis. Repellat nisi perferendis, blanditiis
        dolorem eaque nihil illum sit qui temporibus tempora explicabo fuga, minus impedit
        cupiditate voluptatum debitis magnam quibusdam minima? Iure laboriosam, quia deserunt fuga
        aliquid officia dolorum? Rem impedit tempore, sed, quas nulla accusantium culpa excepturi
        reprehenderit voluptatem, distinctio eveniet eligendi temporibus. Nesciunt, laborum qui eius
        officiis nostrum deserunt necessitatibus, quis ab sequi adipisci fuga facere ipsum?
        Architecto non quasi consequuntur explicabo alias in nesciunt. Eos dolor consequatur minima
      </SketchCollapseItem>
      <SketchCollapseItem name="2">
        <template #header>
          <span>
            <span>Custom Header</span>
            <AwesomeIcon icon="street-view" />
          </span>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur cum officia quae
        labore facere fugit nulla tempore natus ipsa!
      </SketchCollapseItem>
      <SketchCollapseItem name="3" title="Disabled Item" disabled>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quisquam.
      </SketchCollapseItem>
    </SketchCollapse>
</Block>

```html
<SketchCollapse v-model="openCollapse1" @change="doChange">
  <SketchCollapseItem name="1" title="Default Title"> text... </SketchCollapseItem>
  <SketchCollapseItem name="2">
    <template #header>
      <span>
        <span>Custom Header</span>
        <AwesomeIcon icon="street-view" />
      </span>
    </template>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur cum officia quae labore
    facere fugit nulla tempore natus ipsa!
  </SketchCollapseItem>
  <SketchCollapseItem name="3" title="Disabled Item" disabled>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quisquam.
  </SketchCollapseItem>
</SketchCollapse>
```

## 手风琴

<Block>
    <SketchCollapse accordion v-model="openCollapse2" @change="doChange">
        <SketchCollapseItem name="b" title="Accordion 1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur cum officia quae
            labore facere fugit nulla tempore natus ipsa!
        </SketchCollapseItem>
        <SketchCollapseItem name="a" title="Accordion 2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste voluptatibus minus.
            Ratione sit culpa iusto, tenetur praesentium ex dignissimos quod veniam nisi, illo
            distinctio ut modi perspiciatis nostrum debitis. Repellat nisi perferendis, blanditiis
            dolorem eaque nihil illum sit qui temporibus tempora explicabo fuga, minus impedit
            cupiditate voluptatum debitis magnam quibusdam minima? Iure laboriosam, quia deserunt fuga
            aliquid officia dolorum? Rem impedit tempore, sed, quas nulla accusantium culpa excepturi
            reprehenderit voluptatem, distinctio eveniet eligendi temporibus. Nesciunt, laborum qui eius
            officiis nostrum deserunt necessitatibus, quis ab sequi 
        </SketchCollapseItem>
    </SketchCollapse>
</Block>

```html
<SketchCollapse accordion v-model="openCollapse2" @change="doChange">
  <SketchCollapseItem name="b" title="Accordion 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur cum officia quae labore
    facere fugit nulla tempore natus ipsa!
  </SketchCollapseItem>
  <SketchCollapseItem name="a" title="Accordion 2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste voluptatibus minus. Ratione
    sit culpa iusto, tenetur praesentium ex dignissimos quod veniam nisi, illo distinctio ut modi
    perspiciatis nostrum debitis. Repellat nisi perferendis, blanditiis dolorem eaque nihil illum
    sit qui temporibus tempora explicabo fuga, minus impedit cupiditate voluptatum debitis magnam
    quibusdam minima? Iure laboriosam, quia deserunt fuga aliquid officia dolorum? Rem impedit
    tempore, sed, quas nulla accusantium culpa excepturi reprehenderit voluptatem, distinctio
    eveniet eligendi temporibus. Nesciunt, laborum qui eius officiis nostrum deserunt
    necessitatibus, quis ab sequi
  </SketchCollapseItem>
</SketchCollapse>
```

<script setup lang='ts'>
import SketchCollapse from '../../src/components/SketchCollapse/SketchCollapse.vue';
import SketchCollapseItem from '../../src/components/SketchCollapse/SketchCollapseItem.vue';
import Block from '../../src/components/SketchBlock/Block.vue';

import { ref } from 'vue';

const openCollapse1 = ref([]);
const openCollapse2 = ref([]);
function doChange(name: CollapseChangeParam) {
  // tooltipRef1.value?.popperInstance?.update();
  console.log(name);
}
</script>
