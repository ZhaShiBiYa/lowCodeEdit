<template>
  <div class="codeContent">
    <pre>
      {{ components }}
    </pre>
  </div>
</template>

<script setup>
  import { useComponentsStores } from '@/stores/componentsStore';

  const { components }  = useComponentsStores()

</script>

<style lang="less" scoped>
  .codeContent {
    width: 150px;
    height: 100%;
    background-color: #fff;
    pre {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      font-size: 10px;
    }
  }
</style>