<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <div>{{ props.label }}</div>
      <q-rating
        v-model="props.rating"
        size="3.5em"
        readonly
        color="grey"
        :color-selected="['yellow']"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: Number,
  label: String,
});
</script>

<style scoped></style>
