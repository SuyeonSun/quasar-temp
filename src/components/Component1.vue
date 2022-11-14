<template>
  <q-btn color="primary">button</q-btn>
  {{color}}
</template>

<script setup>
import {getCssVar} from 'quasar'
import {computed, onMounted, ref} from "vue";

const color = ref()

onMounted(() => {
  console.log('======', computed(() => {return getCssVar('primary')}).value)
})

</script>

<style scoped lang="scss">
//div {
//  color: $red-1;
//}
</style>