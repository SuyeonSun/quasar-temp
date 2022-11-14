<template>
  <q-btn :color="buttonColor">버튼</q-btn>
  {{$q.screen.lt.sm}} <!-- 변함-->
  {{buttonColor}}
</template>

<script setup>
import {useQuasar} from 'quasar'
import {computed, onMounted, ref} from 'vue'

const $q = useQuasar()

// const buttonColor = computed(() => {
//   return $q.screen.lt.sm ? 'primary' : 'secondary'
// })

const buttonColor = ref($q.screen.lt.sm ?  'primary' :  'secondary')
</script>

<style scoped></style>
