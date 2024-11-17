<template>
  <div class="style">
    <ul>
      <li v-for="item in styleList">
        <input type="text"
               class="key"
               @change="cssChangeFn($event.target.value.trim(), Object.values(item)[0])"
               :value.lazy.trim="Object.keys(item)[0]">
        <input type="text"
               class="value"
               @change="cssChangeFn(Object.keys(item)[0], $event.target.value.trim())"
               :value.lazy.trim="Object.values(item)[0]">
      </li>
      <div class="addStyle" @click="addStyle">新增样式</div>
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
  // 获取style的列表
  const styleList = computed(() => {
    if (!clickId) return []
    
    const curComponent = componentsStore.getComponentById(clickId.value)
    if (!curComponent) return []
    
    const curCss = curComponent.props.css
    if (!curCss) return []

    const curCssList = []
    Object.keys(curCss).forEach((key) => {
      curCssList.push({[key]: curCss[key]})
    })
    return curCssList
  })
  // 改变css方法
  function cssChangeFn(name, value, id=clickId.value) {
    componentsStore.cssChangeComponent(id, name, value)
  }

  function addStyle() {
    componentsStore.getComponentById(clickStore.clickId).props.css[""] = ""
  }

</script>

<style lang="less" scoped>
  .style {
    width: 100%;
    height: 30%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;

    .addStyle {
      width: 100%;
      height: 20px;
      font-size: 12px;

      border: 1px solid black;
    }

    li {
      .key{
        height: 13px;
        width: 60px;
        padding: 0px;
        margin: 0px;
        font-size: 10px;
      }
      .value {
        height: 13px;
        width: 70px;
        padding: 0px;
        margin: 0px;
        font-size: 10px;
      }
    }
    .addStyle {
      width: 80%;
      height: 15px;

      margin-top: 5px;
    }
  }
</style>