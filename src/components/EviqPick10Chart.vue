<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    chart-id="bar-chart"
    dataset-id-key="label"
    :width="400"
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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
const labels = "";
const chartData = {
  labels: [labels],
  datasets: [
    { data: [80], backgroundColor: "#00d392" },
    { data: [20], backgroundColor: "#dbdbdb" }, // 100 - data
  ],
};

const chartOptions = {
  indexAxis: "y",
  responsive: true,
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
