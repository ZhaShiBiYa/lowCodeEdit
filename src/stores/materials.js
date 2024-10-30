import { defineStore } from "pinia";


export const useMaterialsStores = defineStore("materials", {

  state: () => ({
    componentConfig: [
      {
        name: "container",
        type: "div",
        props: {
          css: {
            backgroundcolor: "white",
            width: "100px", 
            height: "100px", 
            boreder: "1px solid black"
          }, 
          text: "container",
        },
        children: [],
        id: null, 
        parentId: null
      },
      { 
        name: "button",
        type: "button", 
        props: {
          css: {
            backgroundColor: "white", 
            border: "1px solid black", 
            width: "40px", 
            height: "20px", 
            fontSize: "15px"
          }, 
          text: "btn", 
        }, 
        children: [],
        id: null, 
        parentId: null
      }, 
      {
        name: "page", 
        type: "div", 
        props: {
          css: {}, 
        }, 
        children: [], 
        id: null, 
        parentId: null    
      },
  ]}),

  actions: {
    registerComponent(name, component) {
      this.componentConfig = {
        ...this.componentConfig,
        [name]: component
      }
    }
  }
})

