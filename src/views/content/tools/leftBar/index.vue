<template>
  <div class="leftBar">leftBar
    <div class="componentsList barItem">
      <RouterLink to="/tools">组件</RouterLink>
    </div>
    <div class="code barItem">
      <RouterLink to="/code">源码</RouterLink>
    </div>
    <div class="view barItem">
      <RouterLink to="/view">视图</RouterLink>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .leftBar {
    width: 50px;
    height: 100%;
    background-color: rosybrown;
    .barItem {
      width: 100%;
      height: 50px;
      background-color: #fff;
      border: 1px solid black;
    }
  }
</style>