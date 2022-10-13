<template>
  <Doughnut
    :chart-data="chartData"
    :chart-options="chartOptions"
    :height="180"
  ></Doughnut>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import { Chart, registerables } from "chart.js";
import { ref } from "vue";
Chart.register(...registerables);

const chartData = ref({
  labels: ["VueJs", "EmberJs", "ReactJs"],
  datasets: [
    {
      backgroundColor: ["#00d392", "#c1c1c1", "#dbdbdb"],
      borderColor: ["#00d392", "#c1c1c1", "#dbdbdb"],
      data: [7, 2, 1],
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  rotation: -90,
  circumference: 180,
};
</script>
