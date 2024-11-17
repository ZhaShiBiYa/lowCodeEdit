<template>
  <div class="editArea" 
       ref="editAreaRef" 
       @mouseover="handleMouseOver"
       @mouseleave="handleMouseLeave"
       @click="handleMouseClick">
  </div>
</template>

<script setup>
  import { useComponentsStores } from "@/stores/componentsStore";
  import { editMethod } from "@/components/editMethod";
  import { ref, onMounted, createApp } from "vue";
  import { useHoverStores } from "@/stores/elementChoose/hover.js"
  import { useClickStores } from "@/stores/elementChoose/click";

  const { components } = useComponentsStores();
  const renderFunction = () => editMethod(components[0]);
  const hoverStores = useHoverStores()
  const clickStores = useClickStores()

  const editAreaRef = ref(null);

  // mouseover 鼠标移动显示位置
  const handleMouseOver = (event) => {
    if (event.target && event.target.getAttribute('data-id')) {
      hoverStores.unhoverId = parseInt(hoverStores.hoverId)
      hoverStores.hoverId = parseInt(event.target.getAttribute('data-id'));
      hoverStores.hoverComponentById(hoverStores.hoverId, hoverStores.unhoverId)
    }
  };

  const handleMouseLeave = () => {
    hoverStores.hoverComponentById(null, hoverStores.hoverId)
  }

  const handleMouseClick = (event) => {
    if (event.target && event.target.getAttribute('data-id')) {
      clickStores.clickId = parseInt(event.target.getAttribute('data-id'))
    }
  }


  // 在 onMounted 生命周期钩子中渲染内容
  onMounted(() => {
    if (editAreaRef.value) {
      // 创建一个子应用并将 render 函数作为根组件
      const app = createApp({
        render: renderFunction, 
      });
      // 将子应用挂载到指定的 DOM 元素
      app.mount(editAreaRef.value);
    }
  });

  // 暴露 render 函数给父组件
  defineExpose({
    render: renderFunction
  });
  
</script>

<style lang="less" scoped>
/* 你可以在这里添加样式 */
  .editArea {
    background-color: #ccc;
    height: 400px;
  }

  [data-id] {
    /* 原始样式 */
    border:1px solid white;
    background-color: blue;
  }
  
  /* 悬停时的样式 */
  .editArea .hovered {
    border: 1px solid blue;
  }

  .test {
    background-color: black;
  }
</style>