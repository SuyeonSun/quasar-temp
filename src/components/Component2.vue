<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      padding
      arrows
      height="300px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/quasar.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/cat.jpg"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/linux-avatar.png"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/material.png"
          />
          <q-img
            class="rounded-borders col-4 full-height"
            src="https://cdn.quasar.dev/img/donuts.png"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
</script>

<style scoped></style>
