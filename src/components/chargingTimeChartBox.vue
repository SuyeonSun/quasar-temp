<template>
  <fast-charger-chart></fast-charger-chart>
</template>

<script setup>
import { useChargingTimeStore } from "stores/charging-time-store";
import { computed, onMounted } from "vue";
import FastChargerChart from "components/fastChargerChart";

const chargingTimeStore = useChargingTimeStore();

onMounted(async () => {
  await chargingTimeStore.getChargingTimeChartInfo();
});
</script>

<style scoped></style>
