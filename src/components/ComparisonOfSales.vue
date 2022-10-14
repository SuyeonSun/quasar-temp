<template>
  <Line :chart-data="chartData" :chart-options="chartOptions"></Line>
</template>

<script setup>
import { Line } from "vue-chartjs";
import { Chart, registerables } from "chart.js";
import { onMounted, ref } from "vue";
import { useGlobalOverviewStore } from "stores/global-overview-store";
import { storeToRefs } from "pinia";
Chart.register(...registerables);

const store = useGlobalOverviewStore();

const { comparisonOfSalesGraphInfo, country } = storeToRefs(store);

onMounted(async () => {
  await store.getComparisonOfSalesGraphInfo();
  chartData.value.labels = comparisonOfSalesGraphInfo.value.labels;
  chartData.value.datasets[0].data = comparisonOfSalesGraphInfo.value.worldwide;
  chartData.value.datasets[1].data = comparisonOfSalesGraphInfo.value.country;

  chartData.value.datasets[1].label = country.value;
});

const chartData = ref({
  labels: [], // TODO: 서버에서 받아올 데이터
  datasets: [
    {
      label: "WORLDWIDE",
      data: [], // TODO: 서버에서 받아올 데이터
      fill: false,
      borderColor: "#8e8e8e", // TODO: 그래프 수치에 따른 color bar 색상 적용
      borderWidth: 3,
      // tension: 0.1,
    },
    {
      label: "", // TODO: 스토어에서 받아올 데이터
      data: [], // TODO: 서버에서 받아올 데이터
      fill: false,
      borderColor: "#00d392", // TODO: 그래프 수치에 따른 color bar 색상 적용
      // tension: 0.1,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
});
</script>
