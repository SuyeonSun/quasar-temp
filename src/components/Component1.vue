<template>
  <div class="q-mb-md">
    <div>1.quasar</div>
    <q-select
      outlined
      v-model="selected1"
      :options="options"
      label="select what you want"
      class="my-class"
    />
  </div>

  <div class="q-mb-md">
    <div>2.vue</div>
    <select v-model="selected2">
      <option disabled value="">Please Select One</option>
      <option>{{ options[0] }}</option>
      <option>{{ options[1] }}</option>
    </select>
    You've selected: {{ selected2 }}
  </div>

  <div class="q-mb-md">
    <div>2.vue</div>
    <select v-model="selected3">
      <option v-for="option in options2" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    You've selected: {{ selected3 }}
  </div>
</template>

<script setup>
import { ref } from "vue";

const options = ["Google", "Facebook", "Twitter", "Apple"];
const options2 = [
  {
    text: "One",
    value: "A",
  },
  {
    text: "Two",
    value: "B",
  },
  {
    text: "Three",
    value: "C",
  },
];
const selected1 = ref("");
const selected2 = ref(options[0]);
const selected3 = ref("A");
</script>

<style scoped lang="scss">
.my-class {
  width: 300px;
}
</style>
