<script setup>
import {watch} from "vue";
import {useAdminUserStore} from "stores/example-store";
import {storeToRefs} from "pinia";

// const adminUserStore = useAdminUserStore();

const props = defineProps({
    modelValue : Boolean,
    isDisable : Boolean,
  index: Number,
  type:String,
  changeHandler: Function
})


// watch(() => props.modelValue, (value) => {
//   // adminUserStore.updatePermissionList(props.index, props.type, value)
//   props.changeHandler(props.index, props.type, value)
// })
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