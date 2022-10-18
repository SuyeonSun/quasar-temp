<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    chart-id="bar-chart"
    dataset-id-key="label"
    :height="20"
  />
  {{ props.score }}
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

const props = defineProps({
  score: Number,
});

onMounted(() => {
  chartData.value.datasets[0].data[0] = props.score;
  chartData.value.datasets[1].data[0] = 100 - props.score;
});

const labels = "";
const chartData = ref({
  labels: [labels],
  datasets: [
    { data: [], backgroundColor: "#00d392" },
    { data: [], backgroundColor: "#dbdbdb" },
  ],
});

const chartOptions = {
  indexAxis: "y",
  responsive: true,
  // maintainAspectRatio: true,
  maxBarThickness: 20,
  scales: {
    x: {
      stacked: true,
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      display: false,
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
