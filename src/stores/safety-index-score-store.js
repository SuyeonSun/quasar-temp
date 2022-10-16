import { defineStore } from "pinia";
import axios from "axios";

export const useSafetyIndexScoreStore = defineStore("safetyIndexScoreStore", {
  state: () => ({
    safetyIndexDetailsGraphInfo: [],
  }),
  actions: {
    async getSafetyIndexDetailsGraphInfo() {
      const response = await axios.get(
        "/data/safety-index-details-graph-info.json"
      );
      this.safetyIndexDetailsGraphInfo = response.data;
    },
  },
});
