import { defineStore } from "pinia";
import axios from "axios";

export const useGlobalOverviewStore = defineStore("globalOverviewStore", {
  state: () => ({
    // 1
    country: "USA",
    comparisonOfSalesGraphInfo: {},

    // 2
    top5CountryGraphInfo: {},
  }),
  actions: {
    // 1
    async getComparisonOfSalesGraphInfo() {
      const response = await axios.get("/data/comparison-of-sales.json");
      this.comparisonOfSalesGraphInfo = response.data;
    },

    // 2
    async getTop5CountryGraphInfo() {
      const response = await axios.get("/data/top5-country-graph-info.json");
      this.top5CountryGraphInfo = response.data;
    },
  },
});
