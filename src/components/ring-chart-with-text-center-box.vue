<template>
  <ring-chart-with-text-center-graph
    title="Adult Occupant"
    :value="adultOccupantValue"
    color="#00d392"
  ></ring-chart-with-text-center-graph>

  <ring-chart-with-text-center-graph
    title="Vulnerable Road Users"
    :value="vulnerableRoadUsersValue"
    color="#ffc350"
  ></ring-chart-with-text-center-graph>
</template>

<script setup>
import RingChartWithTextCenterGraph from "./ringChartWithTextCenterGraph";

const adultOccupantValue = 99;
const vulnerableRoadUsersValue = 88;
</script>

<style scoped></style>
