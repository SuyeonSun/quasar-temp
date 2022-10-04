<template>
  <!--  <q-input-->
  <!--    :model-value="debounceValue"-->
  <!--    @keyup="debounceMethod"-->
  <!--    debounce="700"-->
  <!--    rounded-->
  <!--    outlined-->
  <!--    dense-->
  <!--  />-->
  <q-input
    :model-value="debounceValue"
    @update:model-value="debounceMethod"
    debounce="700"
    rounded
    outlined
    dense
  />
</template>

<script setup>
// yarn loadash 설치하여 debounce 적용
// 방법 2. quasar debounce 적용 // import {debounce} from "quasar";
import { debounce } from "lodash";
const debounceValue = undefined;

// const debounceMethod = debounce((e) => {
//   console.log("send this input value to server", e.target.value);
// }, 700);

const debounceMethod = (value) => {
  console.log("send this input value to server", value);
};
</script>
