import { defineStore } from "pinia";
import { useHoverStores } from "@/stores/elementChoose/hover";
import { useComponentsStores } from "@/stores/componentsStore";


export const useClickStores = defineStore("click", {
  state: () => ({
    clickId: null,
    componentName: null,
    tabStyle: { dispaly: "none" }, 
    moreStyle: { dispaly: "none" },
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

    }
  }
})