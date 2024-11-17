import { defineStore } from "pinia";


export const useMaterialsStores = defineStore("materials", {

  state: () => ({
    componentConfig: [
      // container
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
      // btn
      { 
        name: "button",
        type: "button", 
        props: {
          onClick: function yell(){
            console.log("btn yell");
          },
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
      // input
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
      // radio
      {
        name: "radio", 
        type: "input", 
        props: {
          type: "radio",
          text: "111",
          css: {
            width: "100px", 
            height: "20px",
            backgroundColor: "gray"
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

