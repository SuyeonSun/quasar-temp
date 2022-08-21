<template>
  <q-dialog v-model="props.isOpenDialog">
    <q-card style="width: 600px; height: 500px">
      <q-card-section>
        <div class="text-h6">충전소 검색</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="취소" outline color="black" @click="closeDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
const props = defineProps({
  isOpenDialog: Boolean,
});
const emit = defineEmits(["close:dialog"]);

const closeDialog = () => {
  emit("close:dialog");
};
</script>

<style scoped></style>
