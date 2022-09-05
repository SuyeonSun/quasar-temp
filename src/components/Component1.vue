<template>
  <div>Check the console</div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router/dist/vue-router";
import { onMounted } from "vue";

const $route = useRoute();
const $router = useRouter();

onMounted(() => {
  console.log("=====> $route", $route);
  console.log("=====> $router", $router);
});
</script>

<style scoped></style>
