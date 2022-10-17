<template>
  <range-after-full-charging-chart
    label="Average"
    :value="rangeAfterFullChargingGraphInfo.average"
  ></range-after-full-charging-chart>
  <range-after-full-charging-chart
    label="Selected Car"
    :value="rangeAfterFullChargingGraphInfo.selectedCar"
  ></range-after-full-charging-chart>
</template>

<script setup>
import { useEvDetailStore } from "stores/ev-detail-store";
import { storeToRefs } from "pinia";
import RangeAfterFullChargingChart from "components/RangeAfterFullChargingChart";
import { onMounted } from "vue";

const store = useEvDetailStore();

const { rangeAfterFullChargingGraphInfo } = storeToRefs(store);

onMounted(() => {
  store.getRangeAfterFullChargingGraphInfo();
});
</script>
