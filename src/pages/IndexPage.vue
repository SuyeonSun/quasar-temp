<script setup>
import EviqPick10Box from "components/EviqPick10Box";
import { useMainPageStore } from "stores/main-page-store";
import { onMounted } from "vue";
import { storeToRefs } from "pinia/dist/pinia";
import RangeAfterFullChargingChart from "components/RangeAfterFullChargingChart";

const store = useMainPageStore();
const { eviqPickChartInfoList } = storeToRefs(store);

onMounted(() => {
  store.getEviqPickChartInfoList();
});
</script>

<template>
  <q-page class="q-pa-xl">
    <div class="text-bold">EVIQ's Pick 10</div>
    <div v-for="info in eviqPickChartInfoList" class="bg-blue-1">
      <eviq-pick10-box :info="info"></eviq-pick10-box>
    </div>

    <div class="bg-yellow-1 q-mt-lg">
      <div class="text-bold">Range After Full Charging Chart</div>
      <range-after-full-charging-chart></range-after-full-charging-chart>
    </div>
  </q-page>
</template>
