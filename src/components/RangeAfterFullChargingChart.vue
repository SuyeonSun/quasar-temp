<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    chart-id="bar-chart"
    dataset-id-key="label"
    :height="20"
    :plugins="[ChartDataLabels]"
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
import { ref, watch } from "vue";
import ChartDataLabels from "chartjs-plugin-datalabels";
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
  chargingValue: Number,
});

watch(
  () => props.chargingValue,
  (value) => {
    chartData.value.datasets[0].data[0] = props.chargingValue;
    chartData.value.datasets[1].data[0] = 100 - props.chargingValue;
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
    // datalabels
    datalabels: {
      formatter: function (value, context) {
        return value + " km";
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
