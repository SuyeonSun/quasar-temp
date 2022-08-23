import { defineStore } from "pinia";

export const useExampleStore = defineStore("exampleStore", {
  state: () => {
    return {
      isOpenFirstDialog: false,
      isOpenSecondDialog: false,
      inputValues: {
        input1: "",
        input2: "",
      },
    };
  },
  getters: {},
  actions: {
    handleDialogStatus(dialog, status) {
      this[dialog] = status;
    },
    initState() {
      this.inputValues.input1 = "";
      this.inputValues.input2 = "";
      console.log("-----", this.inputValues);
    },
  },
});
