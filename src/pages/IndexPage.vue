<script setup>
import {onMounted, ref} from "vue";
import {useStore} from "stores/store";
import {storeToRefs} from "pinia";

const store = useStore();
const {list1, list2} = storeToRefs(store)
const list3 = ref(undefined)

// 1번
onMounted(async() => {
  await store.timeOutFunc1();
  await store.timeOutFunc2();
})

// 2번
// 비동기
// onMounted(() => {
//   store.timeOutFunc1();
//   store.timeOutFunc2();
// })

// 3번
// onMounted(async() => {
//   await store.timeOutFunc1();
//   list3.value = 'list3 content'
// })
</script>

<template>
  <q-page class="column justify-center items-center">
    <div>{{list1}}</div>
    <div>{{list2}}</div>
    <div>{{list3}}</div>
  </q-page>
</template>
