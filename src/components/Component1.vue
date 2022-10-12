<template>
  <div class="outerMap">
    <div class="map">
      <svg width="800" height="450"></svg>
    </div>
  </div>
</template>

<script setup>
import * as d3 from "d3";
import { onMounted, ref } from "vue";
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
    //  geoOrthographic
    // geoMercator
    .geoMercator()
    .scale(100) // 800 x 450 화면에 나타날 지도 크기 비율
    .translate([width / 2, height / 1.45]) // move the center of the canvas
    .rotate([100, 0]);

  // Define color scale
  // threshold scale : domain, range
  const colorScale = d3
    .scaleThreshold()
    .domain([100, 500, 1000, 5000, 10000, 50000, 100000])
    .range([
      "#ccffef",
      "#b3ffe7",
      "#66ffcf",
      "#00ffae",
      "#00e59d",
      "#00d392",
      "#00996a",
      "#006647",
    ]); // 원래 코드: d3.schemeOrRd[7]

  // add tooltip
  const tooltip = d3
    .select(".outerMap")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  // mouseOver
  const population = ref(undefined);
  const month = ref(undefined);
  const mouseOver = function (d) {
    const region = d3.select(this)._groups[0][0].__data__.properties.name;
    worldPopulation.value.map((x) => {
      if (x.name === region) {
        population.value = x.population;
        month.value = x.month;
      }
    });

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
      .text(
        "국가: " + region + "인구: " + population.value + "월: " + month.value
      );
  };

  const mouseLeave = function () {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "transparent");
    tooltip.transition().duration(300).style("opacity", 0);
  };

  const click = function () {
    const region = d3.select(this)._groups[0][0].__data__.properties.name;
    console.log(">>>", region);
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
      worldPopulation.value.map((x) => {
        if (x.name === d.properties.name) {
          d.total = x.population;
        }
      });
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
    .on("mouseleave", mouseLeave)
    .on("click", click);

  // Legend
  // const x = d3.scaleLinear().domain([2.6, 75.1]).range([600, 860]);
  // const legend = svg.append("g").attr("id", "legend");
  // const legend_entry = legend
  //   .selectAll("g.legend")
  //   .data(
  //     colorScale.range().map(function (d) {
  //       d = colorScale.invertExtent(d);
  //       if (d[0] === null) d[0] = x.domain()[0];
  //       if (d[1] === null) d[1] = x.domain()[1];
  //       return d;
  //     })
  //   )
  //   .enter()
  //   .append("g")
  //   .attr("class", "legend_entry");
  //
  // const ls_w = 20;
  // const ls_h = 20;
  //
  // legend_entry
  //   .append("rect")
  //   .attr("x", 20)
  //   .attr("y", function (d, i) {
  //     return height - i * ls_h - 2 * ls_h;
  //   })
  //   .attr("width", ls_w)
  //   .attr("height", ls_h)
  //   .style("fill", function (d) {
  //     return colorScale(d[0]);
  //   })
  //   .style("opacity", 0.8);
  //
  // legend_entry
  //   .append("text")
  //   .attr("x", 50)
  //   .attr("y", function (d, i) {
  //     return height - i * ls_h - ls_h - 6;
  //   })
  //   .text(function (d, i) {
  //     return d[0] + " m - " + d[1] + " m";
  //   });
  //
  // legend
  //   .append("text")
  //   .attr("x", 15)
  //   .attr("y", 250)
  //   .text("Population (Million)");
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
