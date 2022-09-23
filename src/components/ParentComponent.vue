<template>
  <div style="background-color: skyblue" class="q-pa-md">
    <div>I'm parent component.</div>
    <child-component @submit-form="setPagination"></child-component>
  </div>
</template>

<script setup>
import ChildComponent from "components/ChildComponent";

const setPagination = (value) => {
  console.log("==== did something", value); // 값만 받아서 store 처리
};

// 이벤트 리스너
// 이벤트 핸들러
</script>

<style scoped></style>
