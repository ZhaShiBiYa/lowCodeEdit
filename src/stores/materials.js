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
            width: "90%", 
            height: "90%", 
            border: "1px solid black"
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
        on: {
          click: [
            function yell() {},
          ],
        },
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
        name: "input", 
        type: "input", 
        props: {
          css: {
            width: "100px", 
            height: "20px"
          }, 
        }, 
        children: [], 
        id: null, 
        parentId: null    
      },
      {
        name: "radio", 
        type: "radio", 
        props: {
          css: {
            width: "100px", 
            height: "20px"
          },
        },
        children: [], 
        id: null, 
        parentId: null
      }
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

