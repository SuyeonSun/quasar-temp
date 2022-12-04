<script setup>
import {watch} from "vue";

const props = defineProps({
    modelValue : Boolean,
    isDisable : Boolean,
}
)

</script>


<template>
  <q-checkbox
      v-model="modelValue"
      :class="isDisable
        && 'disabled-checkbox'"
      :disable="isDisable"
  />
</template>


<style scoped lang="scss">
.disabled-checkbox {
:deep(.q-checkbox__bg) {
  background-color: lightgrey;
}
}
</style>