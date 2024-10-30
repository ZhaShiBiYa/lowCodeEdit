<template>
  <div class="app">
    <tabBar></tabBar>
    <content></content>
  </div>
</template>

<script setup>
  import content from "@/views/content/index.vue";
  import tabBar from "@/views/tab-bar/index.vue";

  import { useComponentsStores } from "@/stores/componentsStore";
  import { useMaterialsStores } from "@/stores/materials";

  const componentsStore = useComponentsStores();
  // const { components, addComponent, deleteComponent, updateComponent, getComponentById } = componentsStore;

  const materialsStore = useMaterialsStores();
  // const { componentConfig, registerComponent } = materialsStore;

  // 测试组件配置
  // const h2 = {
  //   id: 2,
  //   name: "H2",
  //   props: { "good": 200 },
  //   parentId: 1,
  //   desc: "desc"
  // };

  // const h3 = {
  //   id: 3,
  //   name: "H3",
  //   props: { "good": 200 },
  //   parentId: 2,
  //   desc: "desc"
  // };

  // const h4 = {
  //   id: 4,
  //   name: "H4",
  //   props: {  },
  //   parentId: 1,
  //   desc: "desc"
  // };

  // 测试注册新组件
  // const newComponent = {
  //   name: "NewButton",
  //   defaultProps: {
  //     type: "danger",
  //     text: "新的按钮"
  //   },

  //   component: ''
  // };

  // 添加组件
  // addComponent(h2, h2.parentId);
  // addComponent(h3, h3.parentId);

  // 注册新组件
  // console.log(JSON.parse(JSON.stringify(components)))

</script>

<style lang="less" scoped>
.tabBar {
  width: 100%;
  display: flex;
}

.content {
  width: 100%;
  display: flex;
}
</style>