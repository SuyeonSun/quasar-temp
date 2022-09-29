<template>
  <div>1.</div>
  <div>컴포넌트에 저장하는 데이터: {{ cardData }}</div>
  <div>서버에서 받아온 데이터: {{ storedData }}</div>
  <div class="row q-gutter-xs">
    <q-btn
      outlined
      color="black"
      label="Preview"
      style="width: 100px"
      @click="handlePrevBtn"
      :disable="cardData && cardData[0] === 1"
    />
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
import { onMounted, ref } from "vue";
import { useOneButtonStore } from "stores/useOneButtonStore";
import { storeToRefs } from "pinia";

const store = useOneButtonStore();

const { storedData, count } = storeToRefs(store);

const flag = ref(3); // 처음 초기 값

const cardData = ref();

onMounted(() => {
  store.getData(count.value); // state count 값 4개
  cardData.value = storedData.value.slice();
});

const handleNextBtn = async () => {
  await store.setCount();
  await store.getData(count.value);
  cardData.value = storedData.value.slice(flag.value - 1, flag.value + 3);
  flag.value = storedData.value.length - 1;
};

const handlePrevBtn = () => {
  cardData.value = storedData.value.slice(flag.value - 5, flag.value - 1);
  flag.value -= 2;
};
</script>

<style scoped></style>
