import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  actions: {
    inc() {
      this.count++
    },
    dec() {
      this.count--
    }
  },
})
