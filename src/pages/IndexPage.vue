<template>
  <q-page class="column justify-center items-center">
    <q-btn color="black" label="등록" @click="handleAddChargeBoxDialog(true)" />
    <add-charge-box-dialog
      :isOpenDialog="isOpenAddChargeBoxDialog"
      @close:dialog="handleAddChargeBoxDialog(false)"
    ></add-charge-box-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import AddChargeBoxDialog from "components/AddChargeBoxDialog";

const isOpenAddChargeBoxDialog = ref(false);
const handleAddChargeBoxDialog = (status) => {
  isOpenAddChargeBoxDialog.value = status;
};
</script>
