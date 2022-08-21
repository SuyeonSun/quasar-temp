<template>
  <q-page class="column justify-center items-center">
    <div>1. Dialog in Dialog: props, emit</div>
    <q-btn color="black" label="등록" @click="handleAddChargeBoxDialog(true)" />
    <add-charge-box-dialog
      :isOpenDialog="isOpenAddChargeBoxDialog"
      @close:AddChargeBoxDialog="handleAddChargeBoxDialog(false)"
    ></add-charge-box-dialog>

    <div class="q-mt-lg">2. Dialog in Dialog: state</div>
    <q-btn
      color="red"
      label="등록"
      @click="handleFirstDialog('isOpenFirstDialog', true)"
    />
    <first-dialog></first-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import AddChargeBoxDialog from "components/AddChargeBoxDialog";
import FirstDialog from "components/FirstDialog";
import { useExampleStore } from "stores/example-store";

const isOpenAddChargeBoxDialog = ref(false);
const handleAddChargeBoxDialog = (status) => {
  isOpenAddChargeBoxDialog.value = status;
};

const exampleStore = useExampleStore();
const handleFirstDialog = (dialog, status) => {
  exampleStore.handleDialogStatus(dialog, status);
};
</script>
