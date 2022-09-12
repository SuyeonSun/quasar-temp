<template>
  <div>1. Promise 예시: open 개발자 도구</div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  arriveAtSchool();
  testFunc();
});

const arriveAtSchool = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const status = true; // false
      if (status === true) {
        resolve("학교에 도착했습니다.");
      } else {
        reject("에러!");
      }
    }, 2000);
  })
    .then((res) => {
      console.log("resolve =>", res);
    })
    .catch((error) => {
      console.log("error =>", error);
    });
};

const testFunc = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const status = true;
      if (status === true) {
        resolve("성공");
      } else {
        reject("실패");
      }
    }, 1000);
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped></style>
