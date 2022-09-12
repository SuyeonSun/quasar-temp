<template>
  <div>2. async/await 예시 2: open 개발자 도구</div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  logItems();
});

function fetchItems() {
  return new Promise(function (resolve, reject) {
    const items = [1, 2, 3];
    resolve(items);
  });
}

async function logItems() {
  const resultItems = await fetchItems();
  console.log(resultItems);
}
</script>

<style scoped></style>
