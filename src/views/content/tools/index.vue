<template>
  <div class="tools">
    <leftBar></leftBar>
    <leftContent></leftContent>
  </div>
</template>

<script setup>
  import leftBar from "@/views/content/tools/leftBar/index.vue"
  import leftContent from "@/views/content/tools/leftContent/index.vue"
</script>

<style lang="less" scoped>
  .tools{
    display: flex;
  }
</style>