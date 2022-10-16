<template>
  <Doughnut
    :chart-data="chartData"
    :chart-options="chartOptions"
    :height="200"
    :width="200"
  ></Doughnut>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import { Chart, registerables } from "chart.js";
// import chartjsPluginDoughnutlabel from "chartjs-plugin-doughnutlabel";
import { onMounted, ref } from "vue";
Chart.register(...registerables); // chartjsPluginDoughnutlabel

const props = defineProps({
  title: String,
  value: Number,
  color: String,
});

onMounted(() => {
  chartData.value.datasets[0].data[0] = props.value;
  chartData.value.datasets[0].data[1] = 100 - props.value;
  chartData.value.datasets[0].backgroundColor = [props.color, "#dbdbdb"];
  chartData.value.datasets[0].borderColor = [props.color, "#dbdbdb"];
});

const chartData = ref({
  datasets: [
    {
      backgroundColor: [],
      borderColor: [],
      data: [],
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  cutoutPercentage: 10,
});
</script>
