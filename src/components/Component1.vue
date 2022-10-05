<template>
  <vueper-slides
    class="no-shadow ex--center-mode"
    :visible-slides="3"
    slide-multiple
    :gap="3"
    :slide-ratio="1 / 4"
    :dragging-distance="200"
  >
    <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" />
  </vueper-slides>
</template>

<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
</script>

<style scoped>
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}
</style>
