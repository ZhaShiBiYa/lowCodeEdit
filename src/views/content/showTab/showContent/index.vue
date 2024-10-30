<template>
  <div class="showContent" 
    @mouseover="hoverStores.hoverComponentSide(hoverStores.hoverId)"
    @mouseleave="hoverLabelLeave"
    @click="clickStores.clickComponentById(hoverStores.hoverId)" >
    <editArea></editArea>
    <div class="componentName"
       :style="hoverStores.sideLabelStyle"
    > 
      {{ hoverStores.labelText }}
    </div>
    <div class="componentTab">
      <div class="tab" :style="clickStores.tabStyle">
        <!-- tab: name -->
        {{ clickStores.componentName }}
        <p @click="">front</p>
        <p @click="">back</p>
        <p @click="clickMoreFn">more</p>
        <p @click="">delete</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import editArea from "@/views/content/showTab/showContent/EditArea/index.vue"
  import { useHoverStores } from "@/stores/elementChoose/hover";
  import { useClickStores } from "@/stores/elementChoose/click";

  const hoverStores = useHoverStores()
  const clickStores = useClickStores()
  
  function hoverLabelLeave() {
    hoverStores.labelText = ""
  }
  
</script>

<style lang="less" scoped>
  p {
    margin-left: 2px;
    border-left: 1px solid white;
  }
</style>