import { defineStore } from "pinia";
import axios from "axios";

export const useEvDetailStore = defineStore("evDetailStore", {
  state: () => ({
    // 1
    evAverageComparisonGraphInfo: [],

    // 2
    rangeAfterFullChargingGraphInfo: {},
  }),
  actions: {
    // 1
    async getEvAverageComparisonGraphInfo() {
      const response = await axios.get("/data/ev-average-comparison.json");
      this.evAverageComparisonGraphInfo = response.data;
    },

    // 2
    async getRangeAfterFullChargingGraphInfo() {
      const response = await axios.get(
        "/data/range-after-full-charging-graph-info.json"
      );
      this.rangeAfterFullChargingGraphInfo = response.data;
    },
  },
});
