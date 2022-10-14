<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :height="270"
  ></Pie>
</template>

<script setup>
import { Pie } from "vue-chartjs";
import { Chart, registerables } from "chart.js";
import { useGlobalOverviewStore } from "stores/global-overview-store";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
Chart.register(...registerables);

const store = useGlobalOverviewStore();

const { top5CountryGraphInfo } = storeToRefs(store);

const colors = ref([]);

onMounted(async () => {
  await store.getTop5CountryGraphInfo();
  chartData.value.labels = top5CountryGraphInfo.value.countries;
  chartData.value.datasets[0].data = top5CountryGraphInfo.value.data;
  calculateBackgroundColor(top5CountryGraphInfo);
  chartData.value.datasets[0].backgroundColor = colors.value;
});

const chartData = ref({
  labels: [], // 서버에서 받아올 데이터
  datasets: [
    {
      label: "My First Dataset",
      data: [], // 서버에서 받아올 데이터
      backgroundColor: [],
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    tooltip: {
      enabled: false,
    },
  },
};

const calculateBackgroundColor = (Info) => {
  Info.value.data.map((data) => {
    0 <= data < 100 && colors.value.push("#006647");
    100 <= data < 500 && colors.value.push("#00996a");
    500 <= data < 1000 && colors.value.push("#00d392");
    1000 <= data < 5000 && colors.value.push("#00e5ad");
    5000 <= data < 10000 && colors.value.push("#00ffae");
    10000 <= data < 50000 && colors.value.push("#66ffcf");
    50000 <= data < 100000 && colors.value.push("#bdffe7");
    100000 <= data < 500000 && colors.value.push("#ccffef");
  });
};
</script>
