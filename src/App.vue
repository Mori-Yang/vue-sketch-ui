<template>
  <Block>
    <Button ref="buttonRef" size="large">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="danger" size="small" dashed>Danger</Button>
    <Button type="danger" plain dashed>Plain</Button>
    <Button disabled size="large">Disable</Button>
  </Block>
  <br />
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
        nemo eum autem amet odit non nam excepturi exercitationem porro, eius aliquam quod quas
        repellendus dicta ex dignissimos. Quasi doloremque nemo quia expedita sequi voluptates,
        repellat hic unde dicta, autem suscipit dolores a nam nobis sed quae, qui ut provident
        incidunt error fugit esse! Tempore harum beatae necessitatibus! Ullam itaque nemo omnis
        nesciunt dolor unde quidem vel quia tenetur dolorum temporibus nostrum adipisci a quas
        reprehenderit molestiae veritatis blanditiis dolores, ad earum. Delectus distinctio corporis
        reprehenderit tempora sit.
      </SketchCollapseItem>
      <SketchCollapseItem name="2">
        <template #header>
          <h3>Custom Title</h3>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur cum officia quae
        labore facere fugit nulla tempore natus ipsa!
      </SketchCollapseItem>
      <SketchCollapseItem name="3" title="Disabled Item" disabled>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quisquam.
      </SketchCollapseItem>
    </SketchCollapse>
  </Block>
  <Block>
    <SketchCollapse accordion v-model="openCollapse2" @change="doChange">
      <SketchCollapseItem name="a" title="Accordion 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iste voluptatibus minus.
        Ratione sit culpa iusto, tenetur praesentium ex dignissimos quod veniam nisi, illo
        distinctio ut modi perspiciatis nostrum debitis. Repellat nisi perferendis, blanditiis
        dolorem eaque nihil illum sit qui temporibus tempora explicabo fuga, minus impedit
        cupiditate voluptatum debitis magnam quibusdam minima? Iure laboriosam, quia deserunt fuga
        aliquid officia dolorum? Rem impedit tempore, sed, quas nulla accusantium culpa excepturi
        reprehenderit voluptatem, distinctio eveniet eligendi temporibus. Nesciunt, laborum qui eius
        officiis nostrum deserunt necessitatibus, quis ab sequi adipisci fuga facere ipsum?
        Architecto non quasi consequuntur explicabo alias in nesciunt. Eos dolor consequatur minima
        nemo eum autem amet odit non nam excepturi exercitationem porro, eius aliquam quod quas
        repellendus dicta ex dignissimos. Quasi doloremque nemo quia expedita sequi voluptates,
        repellat hic unde dicta, autem suscipit dolores a nam nobis sed quae, qui ut provident
        incidunt error fugit esse! Tempore harum beatae necessitatibus! Ullam itaque nemo omnis
        nesciunt dolor unde quidem vel quia tenetur dolorum temporibus nostrum adipisci a quas
        reprehenderit molestiae veritatis blanditiis dolores, ad earum. Delectus distinctio corporis
        reprehenderit tempora sit.
      </SketchCollapseItem>
      <SketchCollapseItem name="b">
        <template #header>
          <h1>Accordion 2</h1>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur cum officia quae
        labore facere fugit nulla tempore natus ipsa!
      </SketchCollapseItem>
      <SketchCollapseItem name="c" title="Disabled Item" disabled>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quisquam.
      </SketchCollapseItem>
    </SketchCollapse>
  </Block>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Block from '@@/SketchBlock/Block.vue';
import Button from '@@/SketchButton/SketchButton.vue';
import type { ButtonInstance } from '@@/SketchButton/types';
import SketchCollapse from '@/components/SketchCollapse/SketchCollapse.vue';
import SketchCollapseItem from '@/components/SketchCollapse/SketchCollapseItem.vue';
import type { CollapseChangeParam } from './components/SketchCollapse/types';
//---------SketchButton
const buttonRef = ref<ButtonInstance | null>(null);
//---------SketchCollapse
const openCollapse1 = ref([]);
const openCollapse2 = ref([]);
function doChange(name: CollapseChangeParam) {
  console.log(name);
}
</script>

<style scoped lang="scss"></style>
