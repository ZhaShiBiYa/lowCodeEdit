<template>
  <div class="toolsComponents">
    <VueDraggable
      group="edit"
      v-model="componentConfig"
      @start="onDragStart"
    >
      <div
        class="element"
        :key="index"
        v-for="(item, index) of componentConfig"
        draggable
      >
        {{ item.name }}
      </div>
    </VueDraggable>
  </div>
</template>

<script setup>
import { VueDraggable } from 'vue-draggable-plus';
import { useMaterialsStores } from '@/stores/materials';
import { useComponentsStores } from '@/stores/componentsStore';

const { componentConfig } = useMaterialsStores()
let { updateCurrentComponent } = useComponentsStores()
const store = useComponentsStores() 

const onDragStart = (event) => {
  updateCurrentComponent(event.clonedData)
};

</script>

<style lang="less" scoped>
.toolsComponents {
  width: 100%;
  height: 380px;
  background-color: #fff;

  display: grid;
  grid-template-rows: repeat(15, 25px);
  grid-template-columns: repeat(2, 1fr);

  .element {
    height: 20px;
    width: 65px;
    font-size: 10px;
    background-color: grey;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>