<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :plugins="[ChartDataLabels]"
    :height="30"
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
import { onMounted, ref, watch } from "vue";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useRouter } from "vue-router";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const props = defineProps({
  label: String,
  value: Number,
});

watch(
  () => props.value,
  (value) => {
    // 1500을 100%로 취급하여 %로 계산
    // 1500, 1300, 1100과 같은 홀수는 vue-chartjs에서 정확한 비율을 계산하지 못함
    chartData.value.datasets[0].data[0] = (value * 100) / 1500;
    chartData.value.datasets[1].data[0] =
      100 - chartData.value.datasets[0].data[0];
  }
);

const labels = "";
const chartData = ref({
  labels: [labels],
  datasets: [
    { data: [], backgroundColor: "#00d392" },
    {
      data: [],
      backgroundColor: "#dbdbdb",
      // remove second dataset's label
      datalabels: {
        labels: {
          title: null,
        },
      },
    },
  ],
});

const chartOptions = {
  title: {
    display: true,
    text: "Ice Cream Truck",
    position: "bottom",
  },

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
      //
      position: "nearest",
      //

      enabled: true, // TODO: false
    },
    // datalabels
    datalabels: {
      formatter: function (value, context) {
        return props.value + " km";

        // TODO: router에 따라 return 값 변경
        // const $router = useRouter();
        // $router.currentRoute.value
        // if currentRoute가 main이면 return average + props.value + km
        // if currentRoute가 detail이면 return props.value + km
      },
      anchor: "end",
      align: "start",
      color: "black",
      labels: {
        title: {
          font: {
            weight: "bold",
          },
        },
      },
    },
  },
};
</script>

<style scoped></style>
