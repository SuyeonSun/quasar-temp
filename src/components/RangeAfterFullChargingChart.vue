<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    chart-id="bar-chart"
    dataset-id-key="label"
    :height="50"
  />
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { onMounted, ref } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

onMounted(() => {
  chartData.value.datasets[0].data[0] = 10;
  chartData.value.datasets[0].data[1] = 20;
});

const chartData = ref({
  labels: ["Average", "Selected Car"],
  datasets: [
    {
      data: [],
      backgroundColor: ["#dbdbdb", "#00d392"],
    },
  ],
});

const chartOptions = {
  indexAxis: "y",
  responsive: true,
  maxBarThickness: 20,
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      // display: false,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};
</script>
