<template>
  <div class="codeContent">
    <pre>
      {{ componentsStore.components[0] }}
    </pre>
  </div>
</template>

<script setup>
  import { useComponentsStores } from '@/stores/componentsStore';

  const componentsStore = useComponentsStores()

</script>

<style lang="less" scoped>
  .codeContent {
    width: 150px;
    height: 100%;
    overflow-y: auto;
    overflow-x: auto;
    background-color: #fff;
    pre {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      font-size: 10px;
    }
  }
</style>