<template>
  <div>
    <q-btn color="black" label="Copy Link" @click="copyLink" />
  </div>
</template>

<script setup>
import { copyToClipboard, Notify } from "quasar";

const copyLink = () => {
  copyToClipboard("https://www.google.com/")
    .then(() => {
      console.log("===== success");
      // create Notify
      Notify.create({
        message: "Copied to clipboard",
        color: "grey",
        position: "top",
      });
    })
    .catch(() => {
      console.log("===== error");
      // create Notify
    });
};
</script>
