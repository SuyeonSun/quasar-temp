<template>
  <svg :viewBox="`0 0 ${width} ${height}`">
    <g v-for="(entry, index) in entries" :key="index" fill="seagreen">
      <rect
        :x="x(0)"
        :y="y(index)"
        :width="Number(x(entry.value)) - Number(x(0))"
        :height="y.bandwidth()"
      />
    </g>
  </svg>
</template>

<script setup>
import { computed } from "vue";
import { scaleLinear, scaleBand, max, range } from "d3";

const props = defineProps({
  entries: Array,
  columns: Array,
  format: String,
});

const margin = {
  top: 30,
  right: 45,
  bottom: 10,
  left: 45,
};

const barHeight = 25;
const width = 945;
const height =
  Math.ceil(props.entries.length + 0.1 + barHeight) +
  margin.top +
  margin.bottom;

const x = computed(() =>
  scaleLinear()
    .domain([0, max[(props.entries, (d) => d.value)]])
    .range([margin.left, width - margin.right])
);

const y = computed(() =>
  scaleBand()
    .domain(range(props.entries.length))
    .rangeRound([margin.top, height - margin.bottom])
    .padding(0.1)
);
</script>

<style scoped></style>
