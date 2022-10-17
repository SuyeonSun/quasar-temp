<template></template>

<script setup>
import * as d3 from "d3";
import { onMounted, ref } from "vue";

const props = defineProps({
  title: String,
  value: Number,
  color: String,
});

const data = ref([
  { value: undefined, color: undefined },
  { value: undefined, color: "#dbdbdb" },
]);

const width = 200;
const height = 200;
const radius = 100;

onMounted(() => {
  data.value[0].value = props.value;
  data.value[1].value = 100 - props.value;
  data.value[0].color = props.color;

  const centerValue = props.value + "%";

  drawGraph(centerValue);
});

const drawGraph = (centerValue) => {
  const arc = d3
    .arc()
    .outerRadius(radius - 30) // 링의 두께 조절
    .innerRadius(100);

  const pie = d3
    .pie()
    .sort(null)
    .value(function (d) {
      return d.value;
    });

  const svg = d3
    .select("div")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  const g = svg.selectAll(".arc").data(pie(data.value)).enter().append("g");

  g.append("path")
    .attr("d", arc)
    .style("fill", function (d, i) {
      return d.data.color;
    });

  g.append("text")
    .attr("text-anchor", "middle")
    .attr("font-size", "4em")
    .attr("y", 20)
    .text(centerValue);
};
</script>
