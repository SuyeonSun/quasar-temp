import { defineStore } from "pinia";
import axios from "axios";

export const useFinalStore = defineStore("useFinalStore", {
  state: () => ({
    storedData: [], // 서버에서 받아와서 프론트에 저장하는 데이터
    flag: 3,
    count: 4,
  }),

  actions: {
    async getData(count, flag) {
      // 서버에 있는 데이터 가상 구현
      const serverData = await axios.get("/data/safetyIndexCardList.json");

      // 서버에서 받아와서 프론트에 저장하는 데이터
      for (let i = 0; i < count; i++) {
        console.log("======", i);
      }
    },

    addFlag() {},

    subFlag() {},
  },
});
