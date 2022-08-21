<template>
  <q-dialog v-model="isOpenSecondDialog">
    <q-card style="width: 500px; height: 500px">
      <q-card-section>
        <div class="text-h6">충전소 검색</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="취소" outline color="black" @click="handleDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useExampleStore } from "stores/example-store";
import { storeToRefs } from "pinia";

const exampleStore = useExampleStore();
const { isOpenSecondDialog } = storeToRefs(exampleStore);
const handleDialog = () => {
  exampleStore.handleDialogStatus("isOpenSecondDialog", false);
  exampleStore.handleDialogStatus("isOpenFirstDialog", true);
};
</script>

<style scoped></style>
