<template>
  <div>3.</div>
  {{ storedData }}
  <div class="row q-gutter-xs">
    <q-btn outlined color="black" label="Preview" style="width: 100px" />
    <q-btn
      outlined
      color="black"
      label="Next"
      style="width: 100px"
      @click="handleNextBtn"
    />
  </div>
</template>

<script setup>
import { useFinalStore } from "stores/useFinalStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useFinalStore();

const { storedData, flag, count } = storeToRefs(store);

onMounted(() => {
  store.getData(count.value, flag);
});

const handleNextBtn = () => {};
</script>

<style scoped></style>
