<template>
  <div class="q-mb-md">
    <div class="text-orange">6. quasar filter</div>
    <q-select
      filled
      use-input
      input-debounce="0"
      v-model="model"
      :options="stringOptions"
      style="width: 300px"
      @filter="filterFunc"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const options = ref(stringOptions);
const model = ref(stringOptions[0]);

const filterFunc = (val, update) => {
  if (val === "") {
    update(() => {
      options.value = stringOptions;
    });
  }
};
</script>

<style scoped></style>
