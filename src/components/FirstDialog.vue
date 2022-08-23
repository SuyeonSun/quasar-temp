<template>
  <q-dialog v-model="isOpenFirstDialog">
    <q-card style="width: 300px; height: 800px">
      <q-card-section>
        <div class="text-h6">충전소 검색</div>
      </q-card-section>
      <q-card-section>
        <Form :initial-values="initialValues" v-slot="{ values, resetForm }">
          <q-btn
            label="충전소 검색"
            outline
            color="primary"
            @click="handleSecondDialog(values)"
          />

          <div class="row items-center">
            <div class="col-3">
              <span>입력란1</span>
              <span class="text-red">*</span>
            </div>
            <Field name="input1" v-slot="{ value, field }">
              <q-input :model-value="value" v-bind="field" outlined dense />
            </Field>
          </div>

          <div class="row items-center">
            <div class="col-3">
              <span>입력란2</span>
              <span class="text-red">*</span>
            </div>
            <Field name="input2" v-slot="{ value, field }">
              <q-input :model-value="value" v-bind="field" outlined dense />
            </Field>
          </div>

          <q-btn
            label="취소"
            outline
            color="black"
            @click="
              [
                resetForm({ values: initialValues }),
                initValues(),
                closeFirstDialog(),
              ]
            "
          />
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
import { watch } from "vue";

const exampleStore = useExampleStore();
const { isOpenFirstDialog, inputValues } = storeToRefs(exampleStore);
const closeFirstDialog = () => {
  exampleStore.handleDialogStatus("isOpenFirstDialog", false);
};
const handleSecondDialog = (values) => {
  exampleStore.handleDialogStatus("isOpenSecondDialog", true);
  closeFirstDialog();
  inputValues.input1 = values.input1;
  inputValues.input2 = values.input2;
};

const initialValues = {
  input1: undefined,
  input2: undefined,
};

watch(isOpenFirstDialog, (value) => {
  if (true === value) {
    initialValues.input1 = inputValues.input1;
    initialValues.input2 = inputValues.input2;
    console.log("========= input", initialValues.input1);
    console.log("========= store", inputValues.input1);
  }
});

const initValues = () => {
  exampleStore.initState();
};
</script>

<style scoped></style>
