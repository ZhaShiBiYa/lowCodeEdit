<template>
  <div class="showTab" ref="dropArea" @drop="onDrop" @dragover.prevent>
    <showContent></showContent>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useComponentsStores } from '@/stores/componentsStore';
import showContent from "@/views/content/showTab/showContent/index.vue"

const dropArea = ref(null);
const { addComponent, addDataCurrentComponent } = useComponentsStores()
const store = useComponentsStores()

// 处理掉落事件
const onDrop = (event) => {
  const dropPosition = { x: event.clientX, y: event.clientY }
  const upEl = document.elementFromPoint(dropPosition.x, dropPosition.y)
  
  if(upEl) {
    // 确定父节点
    let upElParentId = parseInt(upEl.getAttribute('data-id'))
    if (!upElParentId) upElParentId = 1
    // 更新新添组件的节点以及父节点
    addDataCurrentComponent("parentId", upElParentId)
    addDataCurrentComponent("id", ++store.currentId)
    // 添加数据
    addComponent(store.currentNewComponent, store.currentNewComponent.parentId)
  }
};

</script>

<style lang="less" scoped>
.showTab {
  background-color: teal;
  width: 100%;
  height: 100%;
}
</style>