import { defineStore } from "pinia"


export const useComponentsStores = defineStore("components", {
  
  state: () => ({
    components: [
      {
        name: "page",
        type: 'div',
        props: {
          text: "",
          css: {
            width: "100%", 
            height: "100%", 
            backgroundColor: "white", 
            border: "1px solid black"
          }
        },
        children: [],
        parentId: null,
        id: 1
      }],
    currentId: 1, 
    currentNewComponent: {
      id: null, 
      parentId: null
    } 
  }),
  getters: {
    getComponentById: (state) => (id, components=state.components) => {
      if (!id) return null
      
      for (const component of components) {
        if (component.id === id) return component
        if (component.children && component.children.length > 0) {
          const res = useComponentsStores().getComponentById(id, component.children)
          if (res !== null) return res
        } 
      }
      return null
    },  
  },

  actions: {
    addComponent(component, parentId) {
      if(parentId) {
        const parentComponent = this.getComponentById(parentId)
        if(parentComponent) {
          if(parentComponent.children) {
            parentComponent.children.push(component)
          }
          else {
            parentComponent.children = [component]
          }
        }
        component.parentId = parentId
        return {components: [...this.components]}
      }
      return {components: [...this.components, component]}
    },

    deleteComponent(componentId) {
      if(!componentId) return null

      const component = this.getComponentById(componentId)
      if (component && component.parentId) {
        const parentComponent = this.getComponentById(component.parentId)
        // 这里应该可以优化，删除一条路径，但这个节点下可能还存在别的元素，这些元素和被删除节点存在连接，可能需要优化
        if(parentComponent) {
          parentComponent.children = parentComponent.children.filter(
            (child) => child.id !== componentId
          )
        }
      }
    },
    // 这个函数没有写返回，感觉不需要，记录一下
    updateComponent(componentId, props) {
      const component = this.getComponentById(componentId)
      if(component) {
        for(const key in props){
          if(component.props[key]) {
            component.props[key] = {...component.props[key], ...props[key]}
          } else {
            component[props] = props[key]
          }
        }
      }
    }, 
    
    updateCurrentComponent(newComponent) {
      this.currentNewComponent = newComponent;
    },

    addDataCurrentComponent(newAttribute, newValue) {
      this.currentNewComponent[newAttribute] = newValue
    }
  }
})
