<template>
  <Radar :chart-data="chartData" :chart-options="chartOptions"></Radar>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Radar } from "vue-chartjs";
import { Chart, registerables } from "chart.js";
import { useEvDetailStore } from "stores/ev-detail-store";
import { storeToRefs } from "pinia";
Chart.register(...registerables);

const store = useEvDetailStore();

const { evAverageComparisonGraphInfo } = storeToRefs(store);

onMounted(async () => {
  await store.getEvAverageComparisonGraphInfo();

  chartData.value.datasets[0].data = evAverageComparisonGraphInfo.value.average;
  chartData.value.datasets[1].data =
    evAverageComparisonGraphInfo.value.selectedVehicle;
});

const chartData = ref({
  labels: ["PRICE", "SALES", "SAFETY", "CHARGING TIME", "RANGE"],
  datasets: [
    {
      label: "Average",
      data: [],
      fill: true,
      backgroundColor: "#a8a8a8",
      borderColor: "#a8a8a8",
      pointBackgroundColor: "#a8a8a8",
      pointBorderColor: "#a8a8a8",
      pointHoverBackgroundColor: "#a8a8a8",
      pointHoverBorderColor: "#a8a8a8",
    },
    {
      label: "Selected Vehicle",
      data: [],
      fill: true,
      backgroundColor: "#00d392",
      borderColor: "#00d392",
      pointBackgroundColor: "#00d392",
      pointBorderColor: "#00d392",
      pointHoverBackgroundColor: "#00d392",
      pointHoverBorderColor: "#00d392",
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      align: "end",
    },
  },
  scales: {
    r: {
      grid: {
        display: true,
      },
      ticks: {
        display: false,
      },
    },
  },
});
</script>
