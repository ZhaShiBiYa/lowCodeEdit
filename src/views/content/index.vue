<template>
  <div class="content">
      <div class="tools"><tools></tools></div>
      <div class="showTab"><showTab></showTab></div>
      <div class="attributes"><attributes></attributes></div>
  </div>
</template>

<script setup>
  import attributes from './attributes/index.vue';
  import showTab from "./showTab/index.vue"
  import tools from "./tools/index.vue" 
</script>

<style lang="less" scoped>
  .content {
    background-color: palegreen;

    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 400px;

    .attributes {
      width: 150px;
      height: 400px;
    }

    .tools {
      width: 200px;
      height: 400px;
    }

    .showTab {
      flex: 1 1 auto;
      height: 400px
    }
  }

  
</style>