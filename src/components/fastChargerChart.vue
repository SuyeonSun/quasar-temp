<template>
  <div id="chart" style="width: 400px; height: 230px"></div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useChargingTimeStore } from "stores/charging-time-store";
import * as d3 from "d3";

const chargingTimeStore = useChargingTimeStore();

const props = defineProps({
  fastChargerChargingTimeChartInfo: Object,
});

const data = ref([
  { order: 1, label: "Ev", value: undefined },
  { order: 3, label: "Max", value: undefined },
  { order: 2, label: "Average", value: undefined },
]);

const width = 400;
const height = 230; //this is the double because are showing just the half of the pie
const radius = Math.min(width, height) / 2;
const color = ["#00adff", "#f4f4f4", "#dbdbdb"];

watch(
  () => chargingTimeStore.chargingTimeChartInfo.fastCharger,
  (value) => {
    // set data의 average // set data의 max
    if (value[0].value < value[2].value) {
      data.value[2].value = value[2].value - value[0].value;
      data.value[1].value =
        value[1].value - (value[0].value + (value[2].value - value[0].value));
    } else {
      data.value[2].value = 0;
      data.value[1].value = value[1].value - value[0].value;
    }
    // set data의 ev
    data.value[0].value = value[0].value;

    const vis = d3
      .select("#chart")
      .append("svg") //create the SVG element inside the <body>
      .data([data.value]) //associate our data with the document
      .attr("width", width) //set the width and height of our visualization (these will be attributes of the <svg> tag
      .attr("height", height)
      // svg:g
      .append("svg:g") //make a group to hold our pie chart
      .attr("transform", "translate(" + width / 3 + "," + (height - 20) + ")");

    const arc = d3
      .arc() //this will create <path> elements for us using arc data
      .innerRadius(80)
      .outerRadius(radius - 10); // full height semi pie

    // TODO: 수정 필요
    const pie = d3
      .pie() //this will create arc data for us given a list of values
      .startAngle(-90 * (Math.PI / 180))
      .endAngle(90 * (Math.PI / 180))
      // .sort(null) //No! we don't want to order it by size
      .sort(function (a, b) {
        return a.order - b.order;
      })
      .value(function (d) {
        const ev = value[0].value;
        const average = value[2].value;

        if (ev < average) {
          if (d.label === "Average") {
            return average - ev;
          } else {
            return d.value;
          }
        } else {
          if (d.label === "Average") {
            return 0;
          } else {
            return d.value;
          }
        }
      });
    //we must tell it out to access the value of each element in our data array

    const arcs = vis
      .selectAll("g.slice") //this selects all <g> elements with class slice (there aren't any yet)
      .data(pie) //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
      .enter() //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
      .append("svg:g") //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
      .attr("class", "slice") //allow us to style things in the slices (like text)
      .attr("id", function (d, i) {
        return "text" + i;
      });

    arcs
      .append("svg:path")
      .attr("fill", function (d, i) {
        console.log(d, i);
        return color[i];
      }) //set the color for each slice to be chosen from the color function defined above
      .attr("d", arc); //this creates the actual SVG path using the associated data (pie) with the arc drawing function

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
      .attr("transform", "translate(" + radius + ", 0)")
      .text(function (d, i) {
        if (d.data.label === "Max") return value[1].value + "MIN";
      });

    arcs
      .append("rect")
      .attr("x", radius - 3)
      .attr("y", -(radius - 13))
      .attr("width", 56)
      .attr("height", 20)
      .attr("fill", "#f4f4f4");

    arcs
      .append("svg:text")
      .attr("x", radius)
      .attr("y", -(radius - 30))
      .attr("class", "labels") //add a label to each slice
      .attr("fill", "black")
      .attr("font-size", "17")
      .attr("style", "width: 100px; height: 100px")
      .text(function (d, i) {
        if (d.data.label === "Average") return value[2].value + "MIN";
      });
  }
);
</script>

<style scoped></style>
