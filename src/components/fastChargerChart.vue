<template>
  <div
    id="chart"
    style="display: flex; align-items: center; justify-content: center"
  ></div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useChargingTimeStore } from "stores/charging-time-store";
import * as d3 from "d3";

const chargingTimeStore = useChargingTimeStore();

const chartData = ref([
  { order: 1, label: "Ev", value: undefined },
  { order: 3, label: "Max", value: undefined },
  { order: 2, label: "Average", value: undefined },
]);

const extraWidth = 90;
const radius = 100;
const width = radius * 2 + extraWidth;
const height = radius;

const color = ["#00adff", "#f4f4f4", "#dbdbdb"];

watch(
  () => chargingTimeStore.chargingTimeChartInfo.fastCharger,
  (value) => {
    // set data의 average // set data의 max
    if (value[0].value < value[2].value) {
      chartData.value[2].value = value[2].value - value[0].value;
      chartData.value[1].value =
        value[1].value - (value[0].value + (value[2].value - value[0].value));
    } else {
      chartData.value[2].value = 0;
      chartData.value[1].value = value[1].value - value[0].value;
    }
    // set data의 ev
    chartData.value[0].value = value[0].value;

    const vis = d3
      .select("#chart")
      .append("svg")
      .data([chartData.value])
      .attr("width", width)
      .attr("height", height)
      .append("svg:g")
      .attr("transform", "translate(" + radius + "," + radius + ")");

    const arc = d3
      .arc()
      .innerRadius(radius - radius / 3)
      .outerRadius(radius);

    const pie = d3
      .pie()
      .startAngle(-90 * (Math.PI / 180))
      .endAngle(90 * (Math.PI / 180))
      .sort(null)
      .sort(function (a, b) {
        return a.order - b.order;
      })
      .value(function (d) {
        return d.value;
        // console.log(d);
        //
        // const ev = value[0].value;
        // const average = value[2].value;
        //
        // if (ev < average) {
        //   if (d.label === "Average") {
        //     return average - ev;
        //   } else {
        //     return d.value;
        //   }
        // } else {
        //   if (d.label === "Average") {
        //     return 0;
        //   } else {
        //     return d.value;
        //   }
        // }
      });

    const arcs = vis
      .selectAll("g.slice")
      .data(pie)
      .enter()
      .append("svg:g")
      .attr("class", "slice")
      .attr("id", function (d, i) {
        return "text" + i;
      });

    arcs
      .append("svg:path")
      .attr("fill", function (d, i) {
        return color[i];
      })
      .attr("d", arc);

    // TODO: 가운데 텍스트
    arcs
      .append("svg:text")
      .attr("text-anchor", "middle")
      .attr("font-size", "2em")
      .attr("fill", "#282828")
      .attr("x", -20)
      .attr("y", -10)
      .text(function (d) {
        if (d.data.label === "Ev") {
          return d.data.value;
        }
      });
    // TODO: icon
    arcs
      .append("image")
      .attr("xlink:href", "icons/ic_bolt_28@3x.png")
      .attr("x", -20)
      .attr("y", -77)
      .attr("width", 40)
      .attr("height", 40);

    // TODO: 가운데 텍스트
    arcs
      .append("svg:text")
      .attr("text-anchor", "middle")
      .attr("font-size", "23px")
      .attr("fill", "#282828")
      .attr("x", 20)
      .attr("y", -10)
      .text(function (d) {
        if (d.data.label === "Ev") {
          return "MIN";
        }
      });

    // TODO: Max 텍스트
    arcs
      .append("svg:text")
      .attr("class", "labels") //add a label to each slice
      .attr("fill", "black")
      .attr("font-size", "17")
      .attr("text-anchor", "end")
      .attr("x", radius + extraWidth - 10)
      .attr("y", -1)
      .text(function (d, i) {
        if (d.data.label === "Max") return value[1].value + "MIN";
      });

    arcs
      .append("rect")
      .attr("x", radius + 25)
      .attr("y", -radius)
      .attr("text-anchor", "end")
      .attr("width", 60)
      .attr("height", 30)
      .attr("fill", "#f4f4f4");

    arcs
      .append("svg:text")
      .attr("class", "labels") //add a label to each slice
      .attr("fill", "black")
      .attr("font-size", "17")
      .attr("text-anchor", "end")
      .attr("x", radius + extraWidth - 10)
      .attr("y", -radius + 20)
      .text(function (d, i) {
        if (d.data.label === "Average") return value[2].value + "MIN";
      });
  }
);
</script>

<style scoped></style>
