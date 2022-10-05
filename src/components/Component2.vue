<template>
  <svg ref="lineRef"></svg>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted, ref } from "vue";

const data = ref([90, 72, 75, 25, 10, 92]);
const lineRef = ref(null);

onMounted(() => {
  const svg = d3.select(lineRef.value).attr("width", 500).attr("height", 300);
  svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "#76BF8A")
    .attr("stroke-width", 3)
    .attr("d", line.value);
});

const line = ref(
  d3
    .line()
    .x((d, i) => xScale(i))
    .y((d) => yScale(d))
);

const xScale = ref(
  d3
    .scaleLinear()
    .range([20, 480])
    .domain(d3.extent(data.value, (d, i) => i))
);

const yScale = ref(d3.scaleLinear().range([280, 20]).domain([0, 100]));
</script>
