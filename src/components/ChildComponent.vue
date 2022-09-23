<template>
  <div style="background-color: yellow">
    <div>I'm child component.</div>
    <q-btn @click="submit()">submit</q-btn>
  </div>
</template>

<script setup>
const emits = defineEmits(["submit-form"]);

const submit = () => {
  // values
  emits("submit-form", "hello");
};
</script>

<style scoped></style>
