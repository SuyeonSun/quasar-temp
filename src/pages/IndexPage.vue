<script setup>
import EviqPick10Box from "components/EviqPick10Box";
import { useMainPageStore } from "stores/main-page-store";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import RadarChart from "components/RadarChart";
import ChargingTimeGraph from "components/ChargingTimeGraph";
import ComparisonOfSales from "components/ComparisonOfSales";
import SalesByCountryGraph from "components/SalesByCountryGraph";
import SafetyIndexDetailsGraphBox from "components/SafetyIndexDetailsGraphBox";
import RangeAfterFullChargingChartBox from "components/RangeAfterFullChargingChartBox";
import SafetyIndexScoreBox from "components/SafetyIndexScoreBox";

const store = useMainPageStore();
const { eviqPickChartInfoList } = storeToRefs(store);

onMounted(() => {
  store.getEviqPickChartInfoList();
});
</script>

<template>
  <q-page class="q-pa-xl">
    <div style="border: 1px solid black">
      <div class="text-bold">EVIQ's Pick 10</div>
      <div v-for="info in eviqPickChartInfoList">
        <eviq-pick10-box :info="info"></eviq-pick10-box>
      </div>
    </div>

    <div class="q-mt-lg" style="border: 1px solid black">
      <div class="text-bold">Range After Full Charging Chart</div>
      <range-after-full-charging-chart-box></range-after-full-charging-chart-box>
    </div>

    <div class="q-mt-lg" style="border: 1px solid black">
      <div class="text-bold">Radar Chart</div>
      <radar-chart></radar-chart>
    </div>

    <div class="q-mt-lg" style="border: 1px solid black">
      <div class="text-bold">ChargingTimeGraph</div>
      <charging-time-graph></charging-time-graph>
    </div>

    <div class="q-mt-lg" style="border: 1px solid black">
      <div class="text-bold">Comparison of Sales</div>
      <comparison-of-sales></comparison-of-sales>
    </div>

    <div class="q-mt-lg" style="border: 1px solid black">
      <div class="text-bold">Sales By Country Graph</div>
      <sales-by-country-graph></sales-by-country-graph>
    </div>

    <div class="q-mt-lg" style="border: 1px solid black">
      <div class="text-bold">Safety Index Details Graph</div>
      <safety-index-details-graph-box></safety-index-details-graph-box>
    </div>

    <div class="q-mt-lg" style="border: 1px solid black">
      <div class="text-bold">Safety Index Score Graph</div>
      <safety-index-score-box></safety-index-score-box>
    </div>
  </q-page>
</template>
