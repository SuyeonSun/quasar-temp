<template>
  <fast-charger-chart
    :dataFromServer="chargingTimeChartInfo.fastCharger"
  ></fast-charger-chart>
</template>

<script setup>
import { useChargingTimeStore } from "stores/charging-time-store";
import { computed, onMounted } from "vue";
import FastChargerChart from "components/fastChargerChart";

const chargingTimeStore = useChargingTimeStore();

onMounted(async () => {
  await chargingTimeStore.getChargingTimeChartInfo();
});

const chargingTimeChartInfo = computed(
  () => chargingTimeStore.chargingTimeChartInfo
);
</script>

<style scoped></style>
