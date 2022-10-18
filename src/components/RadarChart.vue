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

  chartData.value.datasets[0].data = [
    evAverageComparisonGraphInfo.value.average.price,
    evAverageComparisonGraphInfo.value.average.sales,
    evAverageComparisonGraphInfo.value.average.safety,
    evAverageComparisonGraphInfo.value.average.chargingTime,
    evAverageComparisonGraphInfo.value.average.range,
  ];
  chartData.value.datasets[1].data = [
    evAverageComparisonGraphInfo.value.selectedVehicle.price,
    evAverageComparisonGraphInfo.value.selectedVehicle.sales,
    evAverageComparisonGraphInfo.value.selectedVehicle.safety,
    evAverageComparisonGraphInfo.value.selectedVehicle.chargingTime,
    evAverageComparisonGraphInfo.value.selectedVehicle.range,
  ];
});

const chartData = ref({
  labels: ["PRICE", "SALES", "SAFETY", "CHARGING TIME", "RANGE"],
  datasets: [
    {
      label: "Average",
      data: [],
      fill: true,
      backgroundColor: "rgba(193, 193, 193, 0.5)",
      borderColor: "#dbdbdb",
      pointBackgroundColor: "rgba(193, 193, 193, 0.5)",
      pointBorderColor: "rgba(193, 193, 193, 0.5)",
      pointHoverBackgroundColor: "rgba(193, 193, 193, 0.5)",
      pointHoverBorderColor: "rgba(193, 193, 193, 0.5)",
    },
    {
      label: "Selected Vehicle",
      data: [],
      fill: true,
      backgroundColor: "rgba(0, 211, 146, 0.5)",
      borderColor: "#00d392",
      pointBackgroundColor: "rgba(0, 211, 146, 0.5)",
      pointBorderColor: "rgba(0, 211, 146, 0.5)",
      pointHoverBackgroundColor: "rgba(0, 211, 146, 0.5)",
      pointHoverBorderColor: "rgba(0, 211, 146, 0.5)",
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
