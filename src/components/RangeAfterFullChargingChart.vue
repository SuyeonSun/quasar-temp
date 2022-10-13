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

// const props = defineProps({
//   score: Number,
// });

// onMounted(() => {
//   chartData.value.datasets[0].data[0] = props.score;
//   chartData.value.datasets[1].data[0] = 100 - props.score;
// });

const chartData = ref({
  labels: ["Average", "Selected Car"],
  datasets: [
    {
      data: [50, 50],
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
  },
};
</script>
