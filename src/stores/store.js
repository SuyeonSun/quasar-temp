import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("store", {
  state: () => ({
    worldPopulation: undefined,
  }),

  actions: {
    async getWorldPopulation() {
      try {
        const response = await axios.get("/data/population.json");
        this.worldPopulation = response.data;
      } catch (error) {
        console.log("error");
      }
    },
  },
});
