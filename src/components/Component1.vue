<template>
  <q-btn @click="handleDarkMode">
    다크모드
  </q-btn>
</template>

<script setup>
import {useQuasar, Dark} from 'quasar'
import {onMounted} from "vue";

const $q = useQuasar()
// onMounted(() => {
//   console.log('===========', $q.dark.isActive)
// })

const handleDarkMode = () => {
  // $q.dark.set(!$q.dark.isActive)
  Dark.toggle()
}
</script>

<style scoped></style>
