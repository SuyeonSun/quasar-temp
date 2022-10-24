import { defineStore } from "pinia";
import axios from "axios";

export const useChargingTimeStore = defineStore("chargingTimeStore", {
  state: () => ({
    // 1
    chargingTimeChartInfo: [],
  }),
  actions: {
    // 1
    async getChargingTimeChartInfo() {
      const response = await axios.get("/data/chargingTimeChartInfo.json");
      this.chargingTimeChartInfo = response.data;
    },
  },
});

// ev < av
// dataFromS -> data
// ev: 20 -> ev: 20
// max: 60 -> max: 30
// av: 30 -> av: 10

// ev > av
// dataFromS -> data
// ev: 20 -> ev: 20
// max: 60 -> max: 40
// av: 10 -> av: 0
