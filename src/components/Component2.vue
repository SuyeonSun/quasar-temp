<template>
  <div class="q-pa-md">
    <input
      type="text"
      placeholder="Search for the EV you'd like to know!"
      @input="updateSearchResult"
    />
    <ul v-if="searchResult.length > 0">
      <li>{{ searchResult }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dataInServer = ["a", "b", "c", "d", "e", "f", "g"];
const searchResult = ref("");

const updateSearchResult = (e) => {
  if (e.target.value === "") {
    searchResult.value = "";
  }
  dataInServer.forEach((v) => {
    // 서버로 e.target.value 전송 후 받은 response 값 searchResult에 저장
    if (v === e.target.value) {
      searchResult.value = v;
      console.log("=====", v);
    }
  });
};
</script>

<style scoped></style>
