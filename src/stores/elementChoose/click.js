import { defineStore } from "pinia";
import { useHoverStores } from "@/stores/elementChoose/hover";
import { useComponentsStores } from "@/stores/componentsStore";


export const useClickStores = defineStore("click", {
  state: () => ({
    clickId: 1,
    componentName: null,
    tabStyle: { dispaly: "none" }, 
    moreStyle: { dispaly: "none" },
    parentComponet: [],
  }), 

  actions: { 
    clickComponentById(clickId) {
      if (clickId && clickId !== 1) {
        const node = document.querySelector(`[data-id="${clickId}"]`);
        const container = document.querySelector(`[data-id="1"]`);
          
        if (node && container) {
          useHoverStores().hoverComponentById(clickId)
          
          const { top, left, width, height } = node.getBoundingClientRect();
          const { top: containerTop, left: containerLeft } = container.getBoundingClientRect();

          this.componentName = useComponentsStores().getComponentById(clickId).name
          this.tabStyle = {
            display: "flex", 
            position: "absolute", 
            margin: "0px",
            padding: "0px",
            height: "12px", 
            backgroundColor: "blue",
            color: "white",

            fontSize: "8px",
            justifyContent: "center", /* 水平居中 */
            alignItems: "center",

            left: `${left}px`,
            top: `${top-12}px`,
          }
        }
      } 
      // 点击主页面，取消全部选择
      if(clickId === 1) {
        this.tabStyle = { dispaly: "none" } 
      }

    },

    // 显示更多：显示上级组件
    clickMoreFn(clickId) {
      const componentStore = useComponentsStores()
      const node = document.querySelector(`[data-id="${clickId}"]`);

      const { top, left, width, height } = node.getBoundingClientRect();
      let parentId = componentStore.getComponentById(clickId).parentId
      while (parentId !== 1) {
        const parentName = componentStore.getComponentById(parentId).name
        this.parentComponet.push({ parentName: parentName, parentId: parentId })
        parentId = componentStore.getComponentById(parentId).parentId
      }
      console.log(this.parentComponet);
      
      this.moreStyle = {
        position: "absolute", 
        display: "flex", 
        flexDirection: "column",
        left: `${left+80}px`, 
        top: `${top}px`,
      } 
    },
    // 删除
    clickDeleteFn(clickId){
      // 直接删除组件和对应组件下的子组件 clickId设置为null
      const componentStore = useComponentsStores()
      componentStore.deleteComponent(clickId)
      this.clickId = null      
    },
    // 前移
    clickFrontFn(clickId) {
      console.log("front");
      const componentStore = useComponentsStores()
      const curComponent = componentStore.getComponentById(clickId)
      const parentComponet = componentStore.getComponentById(curComponent.parentId)
      // 判断父节点存在与否
      if (parentComponet.parentId) {
        curComponent.parentId = parentComponet.parentId
        componentStore.deleteComponent(clickId)
        componentStore.addComponent(curComponent, parentComponet.parentId)
      }
    }, 
    // 后移
    clickBackFn(clickId) {
      const componentStore = useComponentsStores()
      
      const curComponent = componentStore.getComponentById(clickId)
      const childrenComponents = curComponent.childrenComponents
      const parentComponet = componentStore.getComponentById(curComponent.parentId)

      if(childrenComponents) {
        const parentId = parentComponet.id
        // 更改子元素的父元素 指向当前组件的父元素
        for(const component in childrenComponents) {
          component.parentId = parentId
        }
        // 删除当前组件
        componentStore.deleteComponent(clickId)
        // 将当前组件 当前组件下子元素 父元素子元素 全部放入当前组件父元素的子元素内
        parentComponet.childrenComponents = [curComponent, ...parentComponet.childrenComponents, ...childrenComponents]
      }
    }
  }
})