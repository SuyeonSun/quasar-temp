<template>
  <div class="fullscreen q-pa-xl" style="background-color: #f0f3f5">
    <Form ref="searchBarForm">
      <table>
        <tr>
          <th style="width: 20%">
            <div class="q-pa-sm">충전기 ID</div>
          </th>
          <td style="width: 30%">
            <Field name="chargeBoxId" v-slot="{ value, field }">
              <q-input
                  class="q-pa-xs"
                  dense
                  outlined
                  :model-value="value"
                  v-bind="field"
                  placeholder="충전기 ID를 입력해 주세요"
              />
            </Field>
          </td>
          <th style="width: 20%">
            <div class="q-pa-sm">운영기관</div>
          </th>
          <td style="width: 30%">
            <Field name="operatingInstitution" v-slot="{ value, field }">
              <q-select
                  dense
                  outlined
                  multiple
                  :model-value="value"
                  v-bind="field"
                  class="q-pa-xs"
              >
                <template v-slot:selected>
                  <div v-if="value">
                    <q-badge
                        v-if="value[0]"
                        color="blue-2"
                        class="text-black q-pa-sm q-mr-xs"
                        style="font-size: 14px"
                    >
                      {{ value[0].label }}
                    </q-badge>
                    <q-badge
                        v-if="value.length >= 2"
                        color="blue-2"
                        class="text-black q-pa-sm"
                        style="font-size: 14px"
                    >
                      + {{ value.length - 1 }}
                    </q-badge>
                  </div>
                </template>
              </q-select>
            </Field>
          </td>
          <td rowspan="2" class="q-pa-sm" style="width: 20%; min-width: 75px">
            <q-btn type="submit" label="검색" color="primary" />
          </td>
        </tr>
        <tr>
          <th style="width: 20%">
            <div class="q-pa-sm">충전소 이름</div>
          </th>
          <td style="width: 30%">
            <Field name="evStationName" v-slot="{ value, field }">
              <q-input
                  dense
                  outlined
                  :model-value="value"
                  v-bind="field"
                  placeholder="충전소 이름을 입력해 주세요"
                  class="q-pa-xs"
              />
            </Field>
          </td>
          <td class="q-pa-sm">-</td>
          <td></td>
        </tr>
      </table>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form } from 'vee-validate';
</script>

<style scoped lang="scss">
table,
td,
th {
  border: 1px solid #aaaaaa;
  border-collapse: collapse;
}
</style>
