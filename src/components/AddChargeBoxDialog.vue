<template>
  <q-dialog v-model="props.isOpenDialog">
    <q-card style="width: 500px; height: 800px">
      <q-card-section>
        <div class="text-h6">충전기 정보 등록</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn
          label="충전소 검색"
          outline
          color="primary"
          @click="handleSearchChargingStationDialog(true)"
        />
      </q-card-section>

      <q-card-actions align="center">
        <q-btn label="확인" color="primary" unelevated @click="closeDialog()" />
        <q-btn label="취소" outline color="black" @click="closeDialog()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <search-charging-station-dialog
    :isOpenDialog="isOpenSearchChargingStationDialog"
    @close:dialog="handleSearchChargingStationDialog(false)"
  ></search-charging-station-dialog>
</template>

<script setup>
import { ref } from "vue";
import SearchChargingStationDialog from "components/SearchChargingStationDialog";

const props = defineProps({
  isOpenDialog: Boolean,
});

const emit = defineEmits(["close:dialog"]);

const closeDialog = () => {
  emit("close:dialog");
};

const isOpenSearchChargingStationDialog = ref(false);
const handleSearchChargingStationDialog = (status) => {
  isOpenSearchChargingStationDialog.value = status;
};
</script>

<style scoped></style>
