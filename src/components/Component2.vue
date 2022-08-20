<template>
  <div class="q-mb-md">
    <div class="text-orange">3.quasar icon</div>
    <q-select
      outlined
      v-model="selected1"
      :options="options"
      label="select what you want"
      class="my-class"
    >
      <template v-slot:prepend>
        <q-icon name="apple" />
      </template>
    </q-select>
  </div>

  <div class="q-mb-md">
    <div class="text-orange">4. vue clear</div>
    <select v-model="selected2">
      <option v-for="option in options">{{ option }}</option>
    </select>
    <button @click="clear">x</button>

    {{ selected2 }}
  </div>

  <div class="q-mb-md">
    <div class="text-orange">5. quasar clear, counter, max-length</div>
    <q-select
      v-model="selected3"
      :options="options"
      class="my-class"
      bg-color="purple"
      label="label"
      color="lime-11"
      filled
    >
      <template v-slot:append>
        <q-icon
          v-if="selected3 !== ''"
          name="close"
          @click.stop.prevent="selected3 = ''"
          class="cursor-pointer"
        ></q-icon>
      </template>
    </q-select>
  </div>

  <div class="q-mb-md"></div>
</template>

<script setup>
import { ref } from "vue";

const options = ["Google", "Facebook", "Twitter", "Apple"];

const selected1 = ref("");
const selected2 = ref("Google");
const selected3 = ref("Google");

const clear = () => {
  selected2.value = options[0];
};
</script>

<style scoped lang="scss">
.my-class {
  width: 300px;
}
</style>
