<template>
  <div class="parent">
    <div class="relative">relative</div>
    <div class="fixed">fixed</div>
    <div class="absolute">absolute</div>
  </div>
</template>

<script setup></script>

<style scoped>
.parent {
  background-color: #31ccec;
  width: 300px;
  height: 300px;
}

div.relative {
  position: relative;
  left: 30px;
  width: 100px;
  height: 100px;
  background-color: red;
}

div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background-color: blue;
}

div.absolute {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: yellow;
}
</style>
