<template>
  <q-card class="fullscreen q-pa-xl" style="background-color: #f0f3f5">
    <div flat class="row items-center col-12 bg-white q-pa-xs">
      <div class="col-11 row">
        <div v-for="(field, index) in fieldList" class="row items-center col-6">
          <div class="col-3 text-center">{{ field }}</div>
          <Field v-if="field !== '-'" name="chargeBoxId" v-slot="{ value, field }">
            <q-input
                class="q-pa-xs col-9"
                dense
                outlined
                :model-value="value"
                v-bind="field"
                placeholder="충전기 ID를 입력해 주세요"
            />
          </Field>
        </div>
      </div>

      <div class="col row justify-center">
        <q-btn label="검색" style="background-color: #00adff; color: white" flat/>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { Field, Form } from 'vee-validate';

const fieldList = ['충전기 ID', '운영 기관', '충전소 이름', '-']
</script>

<style scoped lang="scss">
table,
td,
th {
  border: 1px solid #aaaaaa;
  border-collapse: collapse;
}
</style>

<!--<script setup lang="ts">-->
<!--import { Field, Form } from 'vee-validate';-->
<!--import { onMounted, onUnmounted, ref } from 'vue';-->
<!--import { storeToRefs } from 'pinia';-->
<!--import { useEvChargerStore } from 'stores/charging-infra/ev-charger/list/ev-charger-store';-->
<!--import { removeAllOptionInList } from 'src/common/helpers/select-option-helper';-->
<!--import { useOperatingInstitutionStore } from 'stores/operating-institution/operating-institution-store';-->

<!--const store = useEvChargerStore();-->

<!--const { searchFilter, evChargerListPagination } = storeToRefs(store);-->

<!--const operatingInstitutionStore = useOperatingInstitutionStore();-->

<!--const { operatingInstitutionList } = storeToRefs(operatingInstitutionStore);-->

<!--const initialOperatingInstitutionOptions = [operatingInstitutionList?.value[0]];-->

<!--const initialValues = ref({-->
<!--  evStationName: undefined,-->
<!--  operatingInstitution: initialOperatingInstitutionOptions,-->
<!--  chargeBoxId: undefined,-->
<!--});-->

<!--onMounted(async () => {-->
<!--  // await operatingInstitutionStore.getOperatingInstitutionList();-->
<!--  initialValues.value.operatingInstitution = initialOperatingInstitutionOptions;-->
<!--});-->

<!--onUnmounted(() => {-->
<!--  store.clearSearchFilter();-->
<!--});-->

<!--const onSubmit = (submittedValue: any) => {-->
<!--  const oiList = submittedValue.operatingInstitution.map(-->
<!--      (obj: any) => obj.value-->
<!--  );-->

<!--  const payload: any = {-->
<!--    evStationName: submittedValue.evStationName,-->
<!--    chargeBoxId: submittedValue.chargeBoxId,-->
<!--    operatingInstitutionList:-->
<!--        oiList[0] === 'ALL'-->
<!--            ? operatingInstitutionList.value-->
<!--                .filter((obj: any) => obj.value !== 'ALL')-->
<!--                .map((obj: any) => obj.value)-->
<!--            : oiList,-->
<!--    operatingStatus: searchFilter?.value?.operatingStatus,-->
<!--  };-->
<!--  store.setSearchFilter(payload);-->
<!--  store.searchEvChargerList(payload, evChargerListPagination?.value);-->
<!--};-->

<!--const searchBarForm = ref();-->

<!--const handleSelectedValue = (array: Array<any>) => {-->
<!--  let allIndex = array.findIndex((obj: any) => obj.value === 'ALL');-->

<!--  if (allIndex === 0) {-->
<!--    array.splice(allIndex, 1);-->
<!--  } else if (allIndex > 0 || array.length === 0) {-->
<!--    searchBarForm.value.setFieldValue(-->
<!--        'operatingInstitution',-->
<!--        initialOperatingInstitutionOptions-->
<!--    );-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <q-card flat style="width: 900px">-->
<!--    <Form-->
<!--        :initial-values="initialValues"-->
<!--        @submit="onSubmit"-->
<!--        ref="searchBarForm"-->
<!--        class="row"-->
<!--    >-->
<!--      <div class="col-11">-->
<!--        <div class="row">-->
<!--          &lt;!&ndash; TODO &ndash;&gt;-->
<!--          <div class="row items-center col-6" style="">-->
<!--            <div class="col-4">-->
<!--              <div class="q-pa-sm text-center">충전기 ID</div>-->
<!--            </div>-->
<!--            <div class="col-8">-->
<!--              <Field name="chargeBoxId" v-slot="{ value, field }">-->
<!--                <q-input-->
<!--                    class="q-pa-xs"-->
<!--                    dense-->
<!--                    outlined-->
<!--                    :model-value="value"-->
<!--                    v-bind="field"-->
<!--                    placeholder="충전기 ID를 입력해 주세요"-->
<!--                />-->
<!--              </Field>-->
<!--            </div>-->
<!--          </div>-->

<!--          &lt;!&ndash; TODO &ndash;&gt;-->
<!--          <div class="row items-center col-6" style="">-->
<!--            <div class="col-4">-->
<!--              <div class="q-pa-sm text-center">운영기관</div>-->
<!--            </div>-->
<!--            <div class="col-8">-->
<!--              <Field name="operatingInstitution" v-slot="{ value, field }">-->
<!--                <q-select-->
<!--                    dense-->
<!--                    outlined-->
<!--                    multiple-->
<!--                    :model-value="value"-->
<!--                    v-bind="field"-->
<!--                    :options="operatingInstitutionList"-->
<!--                    @update:model-value="handleSelectedValue"-->
<!--                    class="q-pa-xs"-->
<!--                >-->
<!--                  <template v-slot:selected>-->
<!--                    <div v-if="value">-->
<!--                      <q-badge-->
<!--                          v-if="value[0]"-->
<!--                          color="blue-2"-->
<!--                          class="text-black q-pa-sm q-mr-xs"-->
<!--                          style="font-size: 14px"-->
<!--                      >-->
<!--                        {{ value[0].label }}-->
<!--                      </q-badge>-->
<!--                      <q-badge-->
<!--                          v-if="value.length >= 2"-->
<!--                          color="blue-2"-->
<!--                          class="text-black q-pa-sm"-->
<!--                          style="font-size: 14px"-->
<!--                      >-->
<!--                        + {{ value.length - 1 }}-->
<!--                      </q-badge>-->
<!--                    </div>-->
<!--                  </template>-->
<!--                </q-select>-->
<!--              </Field>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="row">-->
<!--          &lt;!&ndash; TODO &ndash;&gt;-->
<!--          <div class="row items-center col-6" style="">-->
<!--            <div class="col-4">-->
<!--              <div class="q-pa-sm text-center">충전소 이름</div>-->
<!--            </div>-->
<!--            <div class="col-8">-->
<!--              <Field name="evStationName" v-slot="{ value, field }">-->
<!--                <q-input-->
<!--                    dense-->
<!--                    outlined-->
<!--                    :model-value="value"-->
<!--                    v-bind="field"-->
<!--                    placeholder="충전소 이름을 입력해 주세요"-->
<!--                    class="q-pa-xs"-->
<!--                />-->
<!--              </Field>-->
<!--            </div>-->
<!--          </div>-->

<!--          &lt;!&ndash; TODO &ndash;&gt;-->
<!--          <div class="row items-center col-6" style="">-->
<!--            <div class="col-4">-->
<!--              <div class="q-pa-sm text-center">-</div>-->
<!--            </div>-->
<!--            <div class="col-8"></div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; TODO &ndash;&gt;-->
<!--      <div class="q-pa-sm row items-center justify-center col-1">-->
<!--        <q-btn-->
<!--            flat-->
<!--            type="submit"-->
<!--            label="검색"-->
<!--            style="background-color: #00adff; color: white"-->
<!--        />-->
<!--      </div>-->
<!--    </Form>-->
<!--  </q-card>-->
<!--</template>-->

<!--<style scoped lang="scss">-->
<!--table,-->
<!--td,-->
<!--th {-->
<!--  //border: 1px solid #aaaaaa;-->
<!--  border-collapse: collapse;-->
<!--  background-color: white;-->
<!--}-->

<!--.select-box {-->
<!--  width: 150px;-->
<!--}-->
<!--</style>-->
