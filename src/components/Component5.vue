<template></template>

<script setup>
import * as d3 from "d3";

const dummyData = [
  { id: "d1", value: 10, region: "USA" },
  { id: "d2", value: 11, region: "India" },
  { id: "d3", value: 12, region: "China" },
  { id: "d4", value: 13, region: "Korea" },
];

const container = d3
  .select("div")
  .classed("container", true)
  .style("border", "1px solid red");

const bars = container.selectAll(".bar").data(dummyData).enter().append("div");
</script>

<style scoped></style>
