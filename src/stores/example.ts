import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
  state: () => {
    return {
      sampleVariable: 'Sample variable value',
    }
  },
})
