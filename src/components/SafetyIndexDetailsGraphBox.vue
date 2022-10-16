<template>
  <div class="flex">
    <div v-for="(data, index) in safetyIndexDetailsGraphInfo">
      <safety-index-details-graph
        :title="data.title"
        :value="data.value"
        :color="
          (index === 0 && '#00d392') ||
          (index === 1 && '#ffc350') ||
          (index === 2 && '#6360ff') ||
          (index === 3 && '#ff4f8e')
        "
      ></safety-index-details-graph>
    </div>
  </div>
</template>

<script setup>
import SafetyIndexDetailsGraph from "components/SafetyIndexDetailsGraph";
import { onMounted } from "vue";
import { useSafetyIndexScoreStore } from "stores/safety-index-score-store";
import { storeToRefs } from "pinia";

const store = useSafetyIndexScoreStore();

const { safetyIndexDetailsGraphInfo } = storeToRefs(store);

onMounted(() => {
  store.getSafetyIndexDetailsGraphInfo();
});
</script>
