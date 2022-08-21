<template>
  <q-dialog v-model="props.isOpenDialog">
    <q-card style="width: 500px; height: 700px">
      <q-card-section>
        <div class="text-h6">충전기 정보 등록</div>
      </q-card-section>

      <q-card-section>
        <Form @submit="onSubmit">
          <q-btn
            label="충전소 검색"
            outline
            color="primary"
            @click="handleSearchChargingStationDialog(true)"
          />

          <div v-for="n in 9" :key="n" class="row items-center">
            <div class="col-3">
              <span>입력란</span>
              <span class="text-red">*</span>
            </div>
            <Field :name="n + ' name'" v-slot="{ value, field }">
              <q-input :model-value="value" v-bind="field" outlined dense />
            </Field>
          </div>

          <q-btn label="확인" color="primary" unelevated type="submit" />
          <q-btn label="취소" outline color="black" @click="closeDialog()" />
        </Form>
      </q-card-section>
    </q-card>
  </q-dialog>
  <search-charging-station-dialog
    :isOpenDialog="isOpenSearchChargingStationDialog"
    @close:SearchChargingStationDialog="
      handleSearchChargingStationDialog(false)
    "
  ></search-charging-station-dialog>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field } from "vee-validate";

import SearchChargingStationDialog from "components/SearchChargingStationDialog";

const props = defineProps({
  isOpenDialog: Boolean,
});

const emit = defineEmits(["close:AddChargeBoxDialog"]);

const closeDialog = () => {
  emit("close:AddChargeBoxDialog");
};

const isOpenSearchChargingStationDialog = ref(false);
const handleSearchChargingStationDialog = (status) => {
  isOpenSearchChargingStationDialog.value = status;
};

const onSubmit = (values) => {
  console.log("===", values);
};
</script>

<style scoped></style>
