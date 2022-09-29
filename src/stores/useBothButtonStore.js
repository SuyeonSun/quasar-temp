import { defineStore } from "pinia";

export const useBothButtonStore = defineStore("useBothButtonStore", {
  state: () => ({
    storedData: [], // 프론트에서 저장할 데이터
    flag: 3,
  }),

  actions: {
    getData() {
      this.storedData = [];
      for (let i = this.flag - 2; i < this.flag + 2; i++) {
        this.storedData.push(i);
      }
      console.log(this.storedData);
    },
    addFlag() {
      this.flag += 2;
    },
    subFlag() {
      this.flag -= 2;
    },
  },
});
