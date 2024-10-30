<template>
  <div class="toolsTabBar">
    <div class="item"><RouterLink to="">系统组件</RouterLink></div>
    <div class="item"><RouterLink to="">自定义组件</RouterLink></div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .toolsTabBar {
    display: flex;
    flex-direction: row;

    width: 100%;
    height: 20px;
    background-color: yellowgreen;

    .item {
      flex-grow: 1;
      font-size: 12px;
      text-align: center;
      align-items: center;
    }
  }
</style>