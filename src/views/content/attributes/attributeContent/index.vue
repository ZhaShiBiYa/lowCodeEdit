<template>
  <div class="attribute">
    <ul>
      <li v-for="item in attrList">
        <p>{{ Object.keys(item)[0] }}</p>
        <input type="text" 
               @input="attributeChageFn(Object.keys(item)[0], $event.target.value.trim())" 
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
      { "id": componentsStore.getComponentById(1).id }, 
      { "text": componentsStore.getComponentById(1).props.text }
    ];
    
    const curComponent = componentsStore.getComponentById(clickId.value);
    if (!curComponent) return [
      { "name": componentsStore.getComponentById(1).name }, 
      { "class": componentsStore.getComponentById(1).class }, 
      { "id": componentsStore.getComponentById(1).id }, 
      { "text": componentsStore.getComponentById(1).props.text }
    ];
    return [
      { "name": curComponent.name }, 
      { "class": curComponent.class }, 
      { "id": curComponent.id },
      { "text": curComponent.props.text }
    ];
  });

  // 修改基本属性
  function attributeChageFn(name, content, id=clickStore.clickId) {
    componentsStore.attrchangeComponent(id, name, content)
  }

</script>

<style lang="less" scoped>
  .attribute {
    width: 100%;
    height: 20%;
    background-color: #fff;

    ul {
      p {
        width: 35px;
        margin: 0px;
        font-size: 10px;
        display: inline-block;
      }
  
      input {
        height: 13px;
        width: 90px;
        padding: 0px;
        margin: 0px;
  
        display: inline-block;
        font-size: 10px;
      }
    };
  }
</style>