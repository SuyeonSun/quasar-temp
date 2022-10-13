import { defineStore } from "pinia";
import axios from "axios";

export const useMainPageStore = defineStore("mainPageStore", {
  state: () => ({
    eviqPickChartInfoList: [],
  }),
  actions: {
    async getEviqPickChartInfoList() {
      const response = await axios.get("/data/eviq-pick-10.json");
      this.eviqPickChartInfoList = response.data;
    },
  },
});
