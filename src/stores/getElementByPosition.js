import { defineStore } from "pinia";
import { useComponentsStores } from "./componentsStore";
const { components, addComponent, deleteComponent, getComponentById, updateComponent } = useComponentsStores()


const elementComput = defineStore("elementCompute", {
  state:() => ({
    components: components, 
    addComponent: addComponent, 
    deleteComponent: deleteComponent, 
    getComponentById: getComponentById, 
    updateComponent: updateComponent
  }),

  actions: {
    getComponentByPosition(x, y) {
      const Id = document.elementFromPoint(x, y).id
    }
  }
})

export default elementComput
