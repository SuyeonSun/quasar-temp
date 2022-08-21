import { defineStore } from "pinia";

export const useExampleStore = defineStore("exampleStore", {
  state: () => {
    return {
      isOpenFirstDialog: false,
      isOpenSecondDialog: false,
    };
  },
  getters: {},
  actions: {
    handleDialogStatus(dialog, status) {
      this[dialog] = status;
    },
  },
});
