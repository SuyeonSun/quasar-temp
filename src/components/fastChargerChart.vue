<template>
  <div id="chart" style="width: 400px; height: 230px"></div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useChargingTimeStore } from "stores/charging-time-store";

const chargingTimeStore = useChargingTimeStore();

const props = defineProps({
  dataFromServer: Object,
});

const data = ref([
  { order: 1, label: "Ev", value: undefined },
  { order: 3, label: "Max", value: undefined },
  { order: 2, label: "Average", value: undefined },
]);

const dataFromServer = ref();
watch(
  () => props.dataFromServer,
  (value) => {
    dataFromServer.value = value;

    // set data의 average
    if (dataFromServer.value[0].value < dataFromServer.value[2].value) {
      data.value[2].value =
        dataFromServer.value[2].value - dataFromServer.value[0].value;
      data.value[1].value =
        dataFromServer.value[1].value -
        (dataFromServer.value[0].value +
          (dataFromServer.value[2].value - dataFromServer.value[0].value));
      // } else if (dataFromServer.value[0].value >= dataFromServer.value[2].value) {
    } else {
      data.value[2].value = 0;
      data.value[1].value =
        dataFromServer.value[1].value - dataFromServer.value[0].value;
    }

    // set data의 ev
    data.value[0].value = dataFromServer.value[0].value;
  }
);

const width = 400;
const height = 230;
const radius = Math.min(width, height) / 2;
</script>

<style scoped></style>
