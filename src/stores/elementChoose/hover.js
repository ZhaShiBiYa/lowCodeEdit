import { useComponentsStores } from "@/stores/componentsStore";
import { defineStore } from "pinia"
import { useClickStores } from "@/stores/elementChoose/click";


export const useHoverStores = defineStore("hover", {
  state: () => ({
    hoverId: null, 
    unhoverId: null, 
    sideLabelStyle: {},
    labelText: "page"
  }), 

  actions: {
    hoverComponentById: (hoverId, unhoverId) => {
      const hover = {
        css:{"border": "1px solid blue"}
      }
      const unhover = {
        css:{"border": "1px solid white"}
      }

      if (hoverId) {
        useComponentsStores().updateComponent(hoverId, hover)
      }
      if (unhoverId) {
        useComponentsStores().updateComponent(unhoverId, unhover)
      }
      if(useClickStores().clickId) {
        useComponentsStores().updateComponent(useClickStores().clickId, hover)
      }
    }, 

    hoverComponentSide(hoverId) {
      // 获取待渲染组件
      if (hoverId  && hoverId !== 1) {
        const node = document.querySelector(`[data-id="${hoverId}"]`);
        const container = document.querySelector(`[data-id="1"]`);
          
        if (node && container) {
          // 获取基本信息   
          const { top, left, width, height } = node.getBoundingClientRect();
          const { top: containerTop, left: containerLeft } = container.getBoundingClientRect();
          let labelTop = top - containerTop + container.scrollTop;
          let labelLeft = left - containerLeft + width;
          // 存放容器名字
          let tmp = useComponentsStores().getComponentById(hoverId).props.text
          this.labelText= tmp ? tmp : 'page'
          this.sideLabelStyle= {
            position: "absolute",
            margin: "0px",
            padding: "0px",
              
            top: `${top-15}px`,
            left: `${left+width-20}px`,
            fontSize: "12px", 
            color: "white", 
            backgroundColor: "blue",
            height: "15px", 
          }
        } 
      } 
      if (useClickStores().clickId === this.hoverId) {
        this.sideLabelStyle = { display: "none" }
      }
    }
  }, 

})
