<template>
  <q-dialog v-model="isOpenFirstDialog">
    <q-card style="width: 300px; height: 800px">
      <q-card-section>
        <div class="text-h6">충전소 검색</div>
      </q-card-section>
      <q-card-section>
        <Form>
          <q-btn
            label="충전소 검색"
            outline
            color="primary"
            @click="handleSecondDialog"
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
          <q-btn label="취소" outline color="black" @click="closeFirstDialog" />
        </Form>
      </q-card-section>
    </q-card>
  </q-dialog>
  <second-dialog></second-dialog>
</template>

<script setup>
import { useExampleStore } from "stores/example-store";
import { storeToRefs } from "pinia";
import { Form, Field } from "vee-validate";
import SecondDialog from "components/SecondDialog";

const exampleStore = useExampleStore();
const { isOpenFirstDialog } = storeToRefs(exampleStore);
const closeFirstDialog = () => {
  exampleStore.handleDialogStatus("isOpenFirstDialog", false);
};
const handleSecondDialog = () => {
  exampleStore.handleDialogStatus("isOpenSecondDialog", true);
  closeFirstDialog();
};
</script>

<style scoped></style>
