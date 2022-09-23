<script setup>
import { copyToClipboard } from "quasar";

const copyLink = () => {
  copyToClipboard("https://www.google.com/")
    .then(() => {
      console.log("===== success");
      // create Notify
    })
    .catch(() => {
      console.log("===== error");
      // create Notify
    });
};
</script>

<template>
  <div>
    <q-btn color="black" label="Copy Link" @click="copyLink" />
  </div>
</template>

<style scoped></style>
