<template>
  <div class="attributes">
    <attributeContent></attributeContent>
    <styleContent></styleContent>
    <eventContent></eventContent>
  </div>
</template>

<script setup>
  import attributeContent from "@/views/content/attributes/attributeContent/index.vue"
  import styleContent from "@/views/content/attributes/styleContent/index.vue"
  import eventContent from "@/views/content/attributes/eventContent/index.vue"
</script>

<style lang="less" scoped>
  .attributes {
    attributeContent {
      border-bottom: 1px solid black;
    }
    styleContent {
      border-bottom: 1px solid gray;
    }
  }
</style>