import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const isOpenSidebar = ref(false)

  const handleOpenSidebar = () => {
    isOpenSidebar.value = !isOpenSidebar.value
  }
  return {
    isOpenSidebar,
    actions: {
      handleOpenSidebar,
    },
  }
})
