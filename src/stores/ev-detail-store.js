import { defineStore } from "pinia";
import axios from "axios";

export const useEvDetailStore = defineStore("evDetailStore", {
  state: () => ({
    evAverageComparisonGraphInfo: [],
  }),
  actions: {
    async getEvAverageComparisonGraphInfo() {
      const response = await axios.get("/data/ev-average-comparison.json");
      this.evAverageComparisonGraphInfo = response.data;
    },
  },
});
