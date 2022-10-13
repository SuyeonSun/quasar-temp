<template>
  {{ props.info.ranking }}
  {{ props.info.status }}
  {{ props.info.image }}
  {{ props.info.oem }}
  {{ props.info.model }}
  <eviq-pick10-chart :score="props.info.score"></eviq-pick10-chart>
</template>

<script setup>
import EviqPick10Chart from "components/EviqPick10Chart";

const props = defineProps({
  info: {
    ranking: Number,
    status: String,
    image: String,
    oem: String,
    model: String,
    score: String,
  },
});
</script>

<style scoped></style>
