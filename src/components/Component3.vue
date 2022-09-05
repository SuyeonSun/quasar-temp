<template>
  <div class="dashed-box">
    Dashed box
    <span class="gold-box">Gold box</span>
    <span class="green-box">Green box</span>
  </div>
</template>

<script setup></script>

<style scoped>
.dashed-box {
  position: relative;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}

.gold-box {
  position: absolute;
  background-color: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}

.green-box {
  position: absolute;
  z-index: 1; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
</style>
