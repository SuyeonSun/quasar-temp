import { defineStore } from "pinia";

export const useOneButtonStore = defineStore("counter", {
  state: () => ({
    storedData: [], // 프론트에서 저장할 데이터
    count: 4, // 몇개씩 가지고 올건지
    data: 0,
  }),

  actions: {
    getData(count) {
      for (let i = 0; i < count; i++) {
        this.data++;
        this.storedData.push(this.data);
      }
    },
    setCount() {
      this.count = 2;
    },
  },
});
