<template>
  <div class="attribute">
    <ul>
      <li v-for="item in attrList">
        <p>{{ Object.keys(item)[0] }}</p>
        <input type="text" 
               @change="attributeChageFn(Object.keys(item)[0], Object.values(item)[0])" 
               :value.lazy.trim="Object.values(item)[0]">
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useComponentsStores } from '@/stores/componentsStore';
  import { useClickStores } from '@/stores/elementChoose/click';
  import { storeToRefs } from 'pinia';

  const componentsStore = useComponentsStores()
  const clickStore = useClickStores()  
  const { clickId } = storeToRefs(clickStore)
    
  const attrList = computed(() => {
    if (!clickId.value) return [
      { "name": componentsStore.getComponentById(1).name }, 
      { "class": componentsStore.getComponentById(1).class }, 
      { "id": componentsStore.getComponentById(1).id }
    ];
    const curComponent = componentsStore.getComponentById(clickId.value);
    if (!curComponent) return [
      { "name": componentsStore.getComponentById(1).name }, 
      { "class": componentsStore.getComponentById(1).class }, 
      { "id": componentsStore.getComponentById(1).id }
    ];
    return [
      { "name": curComponent.name }, 
      { "class": curComponent.class }, 
      { "id": curComponent.id }
    ];
  });

  // 修改基本属性
  function attributeChageFn(name, content, id=clickStore.clickId) {
    componentsStore.changeComponent(id, name, content)
  }

</script>

<style lang="less" scoped>
  .attribute {
    width: 100%;
    height: 30%;
    background-color: #fff;

    p {
      width: 35px;
      margin: 0px;
      font-size: 10px;
    }

    input {
      height: 13px;
      width: 90px;
      padding: 0px;
      margin: 0px;

      font-size: 10px;
    }
  }
</style>