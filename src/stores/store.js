import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    list1: undefined,
    list2: undefined
  }),
  actions: {
    async timeOutFunc1(){
      // const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));
      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))
      await sleep(5000)
      this.list1 = 'list1 content'
      console.log('==== timeOutFunc1')
    },

    async timeOutFunc2(){
      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))
      await sleep(1000)
      this.list2 = 'list2 content'
      console.log('==== timeOutFunc2')
    }
  },
});
