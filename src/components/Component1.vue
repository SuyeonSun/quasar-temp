<template>
  <div class="q-pa-md">
    <q-input
      rounded
      outlined
      v-model="searchValue"
      type="text"
      placeholder="Search for the EV you'd like to know!"
      @keyup="updateSearchResult"
      style="width: 300px"
    >
      <template v-slot:append>
        <q-icon name="search" @click="handleClick" />
      </template>
    </q-input>
    <!--    <button @click="handleClick">검색</button>-->
    <ul>
      <!-- 검색 결과 -->
      <li>{{ searchResult }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const searchValue = ref("");
const dataInServer = ["a", "ab", "abc", "d", "e", "f", "g"];
const searchResult = ref("");

watch(
  () => searchResult.value,
  (value) => {
    searchResult.value = value;
  }
);

const searchServer = () => {
  // 실제 구현 시, 서버에 searchValue 값 요청해서 결과 값 스토어 저장
  if (searchValue.value === "") {
    searchResult.value = "";
  }
  dataInServer.forEach((v) => {
    if (v === searchValue.value) {
      searchResult.value = v;
      console.log("=====", v);
    }
  });
};

// 0.7초 후 입력 값이 없으면, 서버에 요청
const updateSearchResult = () => {
  setTimeout(searchServer, 700);
};

// 검색 버튼 클릭 시, 서버에 요청
const handleClick = () => {
  searchServer();
};
</script>

<style scoped></style>
