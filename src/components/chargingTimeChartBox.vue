<template>
  <slow-charger
    :dataFromServer="chargingTimeChartInfo.fastCharger"
  ></slow-charger>
</template>

<script setup>
import { useChargingTimeStore } from "stores/charging-time-store";
import { computed, onMounted } from "vue";
import SlowCharger from "components/slowCharger.vue";

const chargingTimeStore = useChargingTimeStore();

onMounted(async () => {
  await chargingTimeStore.getChargingTimeChartInfo();
});

const chargingTimeChartInfo = computed(
  () => chargingTimeStore.chargingTimeChartInfo
);
</script>

<style scoped></style>
