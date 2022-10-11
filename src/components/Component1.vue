<template>
  <div class="outerMap">
    <div class="map">
      <svg width="800" height="450"></svg>
    </div>
  </div>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted } from "vue";
import { useStore } from "stores/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { worldPopulation } = storeToRefs(store);

onMounted(async () => {
  const svg = d3.select("svg");
  const width = svg.attr("width"); // 800
  const height = svg.attr("height"); // 450
  const path = d3.geoPath(); // generator

  const worldMap = await require("./world.json"); // get worldPopulation from server
  // Load external data and boot
  await store.getWorldPopulation(); // const worldPopulation = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv";

  let centered; // TODO

  const projection = d3
    .geoMercator()
    .scale(130) // 800 x 450 화면에 나타날 지도 크기 비율
    .translate([width / 2, height / 2]); // 지도 위치

  // Define color scale
  // threshold scale : domain, range
  const colorScale = d3
    .scaleThreshold()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000]) // threshold scale 및 화면에 표시될 수치
    .range([
      "#006647",
      "#00996a",
      "#00d392",
      "#00e59d",
      "#00ffae",
      "#66ffcf",
      "#b3ffe7",
    ]); // 원래 코드: d3.schemeOrRd[7]

  // add tooltip
  const tooltip = d3
    .select(".outerMap")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // mouseOver
  const mouseOver = function (d) {
    d3.select(this)
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "white");
    tooltip
      .style("left", event.pageX + 15 + "px")
      .style("top", event.pageY - 28 + "px")
      .transition()
      .duration(400)
      .style("opacity", 1)
      .text(":");
  };

  const mouseLeave = function () {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "transparent");
  };

  // Draw the map
  const world = svg.append("g").attr("class", "world");
  world
    .selectAll("path")
    .data(worldMap.features)
    .enter()
    .append("path")
    .attr("d", d3.geoPath().projection(projection))
    .attr("data-name", function (d) {
      return d.properties.name;
    })
    .attr("fill", function (d) {
      for (let key in worldPopulation.value) {
        if (key === d.properties.name) {
          d.total = worldPopulation.value[key];
        }
      }
      return colorScale(d.total);
    })
    // add a class, styling and mouseover/mouseleave and click functions
    .style("stroke", "transparent")
    .attr("class", function (d) {
      return "Country";
    })
    .attr("id", function (d) {
      return d.id;
    })
    .style("opacity", 1)
    .on("mouseover", mouseOver)
    .on("mouseleave", mouseLeave);
});
</script>

<style>
.map {
  padding: 20px;
  background-color: #ffffff;
  /*border: 1px solid #4D8DC4;*/
  /*box-shadow: 1px 1px 15px #000000;*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

div.tooltip {
  position: absolute;
  padding: 7px;
  font-size: 0.8em;
  pointer-events: none;
  background: #fff;
  border: 1px solid black;
  /*border-radius: 4px;*/
  /*box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);*/
}

.background {
  fill: transparent;
  pointer-events: none; /* 필수 */
}

.world {
  transform-origin: center;
  cursor: pointer; /* 필수 */
}
</style>
