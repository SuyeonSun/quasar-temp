import { defineStore } from "pinia";
import axios from "axios";

export const useEvDetailStore = defineStore("evDetailStore", {
  state: () => ({
    // 1
    evAverageComparisonGraphInfo: [], // TODO

    // 2
    rangeAfterFullChargingGraphInfo: {},

    // 3
    safetyIndexScoreGraphInfo: {},
  }),
  actions: {
    // 1
    async getEvAverageComparisonGraphInfo() {
      // TODO
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

    // 3
    async getSafetyIndexScoreGraphInfo() {
      const response = await axios.get("/data/safety-index-score-info.json");
      this.safetyIndexScoreGraphInfo = response.data;
    },
  },
});
