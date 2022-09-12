<template>
  <div>2. async/await 예시 1: open 개발자 도구</div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  testFunc();
});

async function greet() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hello");
    }, 1000);
  });
}

async function testFunc() {
  const result = await greet(); // resolved 될 때까지 대기
  console.log(result);
}

// console.log(greet()); // Promise{<fullfilled>: 'hello'}
</script>

<style scoped></style>
