<template>
  <range-after-full-charging-chart
    label="Total Score"
    :value="safetyIndexScoreGraphInfo.totalScore"
  ></range-after-full-charging-chart>

  <ncap-rating label="EURO NCAP" :rating="5"></ncap-rating>
  <ncap-rating label="K-NCAP" :rating="3"></ncap-rating>
  <ncap-rating label="NHTSA NCAP" :rating="1"></ncap-rating>
</template>

<script setup>
import { onMounted } from "vue";
import { useEvDetailStore } from "stores/ev-detail-store";
import RangeAfterFullChargingChart from "components/RangeAfterFullChargingChart";
import { storeToRefs } from "pinia";
import NcapRating from "components/ncapRating";

const store = useEvDetailStore();

const { safetyIndexScoreGraphInfo } = storeToRefs(store);

onMounted(() => {
  store.getSafetyIndexScoreGraphInfo();
});
</script>
