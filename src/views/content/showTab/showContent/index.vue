<template>
  <div class="showContent" 
    @mouseover="hoverStores.hoverComponentSide(hoverStores.hoverId)"
    @mouseleave="hoverLabelLeave"
    @click="clickStores.clickComponentById(hoverStores.hoverId)" >
    <editArea></editArea>
    <!-- hover 显示名字 -->
    <div class="componentName"
       :style="hoverStores.sideLabelStyle"
    > 
      {{ hoverStores.labelText }}
    </div>
    <!-- click 显示工具栏 -->
    <div class="componentTab">
      <div class="tab" :style="clickStores.tabStyle">
        <!-- tab: name -->
        {{ clickStores.componentName }}
        <p @click="clickStores.clickFrontFn(clickStores.clickId)">front</p>
        <p @click="clickStores.clickBackFn(clickStores.clickId)">back</p>
        <p @click="clickStores.clickMoreFn(clickStores.clickId)">more</p>
        <p @click="clickStores.clickDeleteFn(clickStores.clickId)">delete</p>
      </div>
      <!-- 点击更多 显示上级父组件 -->
      <div class="more" 
           :style="clickStores.moreStyle">
        <div class="moreItem" 
             v-for="item of clickStores.parentComponet"
             @click="clickStores.clickComponentById(item.parentId)"> 
          {{ item.parentName }} 
        </div>
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

  .moreItem {
    height: 10px;
    width: 40px;
    border-bottom: 1px solid black;

    font-size: 8px;
    color: black;
    background-color: #fff;
  }
</style>