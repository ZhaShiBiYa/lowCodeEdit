<template>
  <div class="toolsContent">
    <toolsTabBar></toolsTabBar>
    <toolsComponents></toolsComponents>
  </div>
</template>

<script setup>
  import toolsTabBar from "@/views/content/tools/leftContent/toolsContent/toolsTapBar/index.vue"
  import toolsComponents from "@/views/content/tools/leftContent/toolsContent/toolsComponents/index.vue"
</script>

<style lang="less" scoped>
  .toolsContent {
    width: 150px;
    height: 100%;
    background-color: #fff;
  }
</style>