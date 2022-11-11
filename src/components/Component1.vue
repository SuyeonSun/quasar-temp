<template>
  <div style="background-color: #f2c037" class="fullscreen">
    <!-- v-if: Dom 생성 x -->
    <div
      v-if="isIf"
      style="background-color: red; height: 100px; width: 100px"
    ></div>

    <!-- v-show: display: none -->
    <div
      v-show="isShow"
      style="background-color: #31ccec; height: 200px; width: 200px"
    ></div>

    <!-- visibility: hidden: 공간은 남아 있음 -->
    <div
      style="
        background-color: orangered;
        height: 100px;
        width: 100px;
        visibility: hidden;
      "
    ></div>

    <!-- visibility: collapse -->
    <div
      style="
        background-color: orangered;
        height: 100px;
        width: 100px;
        visibility: collapse;
      "
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isIf = ref(false);
const isShow = ref(false);
</script>

<style scoped></style>
