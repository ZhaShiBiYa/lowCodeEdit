<template>
  <div class="eventContent">
    <ul>
      <li v-for="event in Object.keys(eventObject)" class="event">
        <p>
          事件
          <input type="text" 
               :value.lazy.trim="event"
               @change="eventChangeFn($event.target.value.trim())">
        </p>
        <ul>
          <!-- 每个函数对应部分 -->
          <li v-for="fn in eventObject[event]" class="fn">
            <p>
              函数名 
              <input type="text" 
                     :value.lazy.trim="fn.name"
                     @change="fnChangeFn($event.target.value.trim(), fn.params, fn.fn, event)">
            </p>
            <p>
              参数 
              <input type="text" 
                     :value="fn.params"
                     @change="fnChangeFn(fn.name, $event.target.value.trim(), fn.fn, event)">
            </p>
            <p>
              函数内容
              <textarea name="" id="" 
                      :value="fn.fn"
                      @change="fnChangeFn(fn.name, fn.params, $event.target.value.trim(), event)"/>
            </p>
          </li>
          <div class="addFn">新增函数</div>
        </ul>
      </li>
      <div class="addEvent">新增事件</div>
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

  // 获取事件列表
  // { click: [{}], }
  const eventObject = computed(() => {
    if (!clickId) return {}

    const curComponent = componentsStore.getComponentById(clickId.value)
    if(!curComponent) return {}
    
    if (!curComponent.on) return {}
    const curEvent = curComponent.on

    const tmpCurEventObj = {}
    Object.keys(curEvent).forEach((eventKey) => {
      // 这里获取到每一种事件
      let eventList = []
      curEvent[eventKey].forEach((fn) => {
        // 获取到每一个fn
        function composeFn(fn) {
          if (!fn) return {
            name: '', 
            params: '', 
            fn: null
          }
          const params = fn.toString().match(/function\s+\w+\s*\(([^)]*)\)/)[1];
          const funcName = fn.name;
          const funcBody = fn.toString().match(/\{([\s\S]*)\}/)[1].trim();
          return {
            name: funcName,
            params: params, 
            fn: funcBody
          }
        }
        eventList.push(composeFn(fn))
      })
      tmpCurEventObj[eventKey] = eventList
    })
    return tmpCurEventObj
  })

  function fnChangeFn(name, param, fn, event, id=clickId.value) {

  }

  function eventChangeFn() {}

</script>

<style lang="less" scoped>
  .eventContent {
    background-color: #fff;
    overflow: auto;
    width: 100%;
    height: 50%;
    .addEvent {
      font-size: 12px;
      height: 15px;
      border: 1px solid palegreen;
    }
    
    .event {
      p {
        font-size: 12px;
        margin: 0;
        padding: 0;
        input {
          font-size: 12px;
        }
      }

      .fn {
        p {
          font-size: 12px;
          input {
            font-size: 12px;
          }
        }
        textarea {
          font-size: 12px;
        }
      }

      .addFn {
        font-size: 12px;
        height: 15px;
        border: 1px solid paleturquoise;
      }
    }
  }  
</style>