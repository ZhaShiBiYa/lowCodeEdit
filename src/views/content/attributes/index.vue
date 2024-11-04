<template>
  <div class="attributes">
    <attributeContent></attributeContent>
    <styleContent></styleContent>
  </div>
</template>

<script setup>
  import attributeContent from "@/views/content/attributes/attributeContent/index.vue"
  import styleContent from "@/views/content/attributes/styleContent/index.vue"
</script>

<style lang="less" scoped>
  .attributes {
    background-color: ivory;
  }
</style>