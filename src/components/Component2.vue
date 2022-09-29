<template>
  <div>서버에서 받아온 데이터: {{ storedData }}</div>
  <div class="row q-gutter-xs">
    <q-btn
      outlined
      color="black"
      label="Preview"
      style="width: 100px"
      @click="handlePrev"
      :disable="storedData && storedData[0] === 1"
    />
    <q-btn
      outlined
      color="black"
      label="Next"
      style="width: 100px"
      @click="handleNext"
    />
  </div>
</template>

<script setup>
import { useBothButtonStore } from "stores/useBothButtonStore";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

const store = useBothButtonStore();

const { storedData } = storeToRefs(store);

onMounted(() => {
  store.getData();
});

const handleNext = () => {
  store.addFlag();
  store.getData();
};

const handlePrev = () => {
  store.subFlag();
  store.getData();
};
</script>

<style scoped></style>
