<script setup>
import { ref } from "vue";

const inputText = ref("");
const updateInput = (e) => {
  const updatedText = e.target.value;
  inputText.value = updatedText;
};
</script>

<template>
  <!-- 사용자 이벤트에 의해 실행된 뷰 메서드 함수의 첫번째 인자에는 해당 이벤트가 들어옴 -->
  <input v-bind:value="inputText" v-on:input="updateInput" />
  {{ inputText }}
</template>

<style scoped></style>
