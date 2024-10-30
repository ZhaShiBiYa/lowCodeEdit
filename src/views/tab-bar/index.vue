<template>
  <div class="tabBar">
    <div class="name">低代码平台</div>
    <div class="channel"><channel/></div>
    <div class="exit">退出</div>
  </div>
</template>

<script setup>
  import channel from "./channel/index.vue"
</script>

<style lang="less" scoped>
  .tabBar {
    background-color: wheat;
    width: 100%; 
    height: 25px; 
    text-align: center;
    
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    
    text-align: center;

    .name {
      width: 100px;
    }

    .channel {
      display: flex;
      flex: 1 1 auto;
      flex-grow: 8;
      text-align: center;
      align-items: center;
      justify-content: center;

      channel {
        flex: 1 1 auto;
        flex-grow: 1;
      }
    }

    .exit {
      width: 100px;
    }
  }
</style>