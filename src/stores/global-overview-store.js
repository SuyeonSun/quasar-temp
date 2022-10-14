import { defineStore } from "pinia";
import axios from "axios";

export const useGlobalOverviewStore = defineStore("globalOverviewStore", {
  state: () => ({
    country: "USA",
    comparisonOfSalesGraphInfo: {},
  }),
  actions: {
    async getComparisonOfSalesGraphInfo() {
      const response = await axios.get("/data/comparison-of-sales.json");
      this.comparisonOfSalesGraphInfo = response.data;
    },
  },
});
