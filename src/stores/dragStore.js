import { defineStore } from 'pinia';

export const useDragDropStore = defineStore('dragDrop', {
  state: () => ({
    draggedElement: null,
    dropPosition: { x: 0, y: 0 }
  }),
  actions: {
    startDrag(element) {
      this.draggedElement = element;
    },
    endDrag(event) {
      const rect = event.target.getBoundingClientRect();
      const position = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      this.dropPosition = position;
    }
  }
});