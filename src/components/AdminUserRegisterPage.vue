<script setup>
import {onMounted, ref} from "vue";
import {useAdminUserRegisterStore} from "stores/admin-user-register-store";
import {storeToRefs} from "pinia";
import {Form, Field} from 'vee-validate';

const adminUserRegisterStore = useAdminUserRegisterStore();

const {adminTypeList, optAndMGroupList} = storeToRefs(adminUserRegisterStore)

const searchBarForm = ref();
const isDisableAllCheckBox = ref(true)
const isDisableOperatingInstitution = ref(true);
const isDisableMemberGroup = ref(true)

onMounted(async () => {
  await adminUserRegisterStore.getAdminUserRegisterInfo()

  await optAndMGroupList.value.forEach((item) => {
    initialValues.value[`${item.label}OperatingInstitution`] = false
    initialValues.value[`${item.label}MemberGroup`] = undefined
  })
})

const initialValues = ref({
  allCheckbox: false,
  adminType: undefined
})

const handleSelectedAdminTypeValue = (selectedValue) => {
  optAndMGroupList.value.forEach((item) => {
    searchBarForm.value.setFieldValue(`${item.label}MemberGroup`, undefined);
  })

  if ( selectedValue.value === 1 || selectedValue.value === 2 || selectedValue.value === 5 ) {
    searchBarForm.value.setFieldValue('allCheckbox', true);
    isDisableAllCheckBox.value = false
    isDisableOperatingInstitution.value = false
    isDisableMemberGroup.value = false
    optAndMGroupList.value.forEach((item) => {
      searchBarForm.value.setFieldValue(`${item.label}OperatingInstitution`, true);
      searchBarForm.value.setFieldValue(`${item.label}MemberGroup`, [{label: "전체", value: "ALL"}]);
      (item.memberGroup[0].value !== 'ALL') && item.memberGroup.unshift({label: '전체', value: 'ALL'})
    })

  } else {
    if (selectedValue.value === 4) {
      searchBarForm.value.setFieldValue('allCheckbox', false);
      isDisableAllCheckBox.value = true
      isDisableOperatingInstitution.value = false
      isDisableMemberGroup.value = false
      optAndMGroupList.value.forEach((item) => {
        searchBarForm.value.setFieldValue(`${item.label}OperatingInstitution`, false);
        (item.memberGroup[0].value === 'ALL') && item.memberGroup.shift({label: '전체', value: 'ALL'})
      })
    } else {
      searchBarForm.value.setFieldValue('allCheckbox', true);
      isDisableAllCheckBox.value = false;
      isDisableOperatingInstitution.value = false
      isDisableMemberGroup.value = false
      optAndMGroupList.value.forEach((item) => {
        searchBarForm.value.setFieldValue(`${item.label}OperatingInstitution`, true);
        searchBarForm.value.setFieldValue(`${item.label}MemberGroup`, [{label: "전체", value: "ALL"}]);
        (item.memberGroup[0].value !== 'ALL') && item.memberGroup.unshift({label: '전체', value: 'ALL'})
      })
    }
  }
}

const handleSelectedAllCheckboxValue = (selectedValue) => {
  optAndMGroupList.value.forEach((item) => {
    searchBarForm.value.setFieldValue(`${item.label}OperatingInstitution`, selectedValue);
  })
}

const handleSelectedOperatingInstitutionValue = (selectedValue, selectedItem, selectedAdminType) => {
  if (selectedAdminType.value === 1 || selectedAdminType.value === 2 || selectedAdminType.value === 5) {
    searchBarForm.value.setFieldValue('allCheckbox', false);
  } else {
    optAndMGroupList.value.forEach((item) => {
      (item.value !== selectedItem.value) && searchBarForm.value.setFieldValue(`${item.label}OperatingInstitution`, false);
    })
  }
}

const handleSelectedMemberGroupValue = (selectedValue) => {
  const allIndex = selectedValue.findIndex((obj) => obj.value === 'ALL');
  if (0 === allIndex && 1 !== selectedValue.length) {
    selectedValue.splice(allIndex, 1);
  }
  else if (allIndex > 0 || 0 === selectedValue.length) {
    selectedValue.splice(0, selectedValue.length-1);
  }
}
</script>

<template>
  <div style="width: 900px">
    <Form @submit="" :initial-values="initialValues" ref="searchBarForm" v-slot="{values}">
        <q-btn label="등록완료" type="submit" unelevated color="primary"/>

      <div class="row items-center">
        <div>관리자 타입</div>
        <div>
          <Field name="adminType" v-slot="{value, field}">
            <q-select :model-value="value" v-bind="field" outlined dense :options="adminTypeList" @update:model-value="handleSelectedAdminTypeValue">
              <template v-slot:selected>
                <div v-if="value">
                  {{ value.label }}
                </div>
                <div v-if="!value">
                  타입을 선택해 주세요.
                </div>
              </template>
            </q-select>
          </Field>
        </div>
      </div>

      <div class="row items-center">
        <div>운영기관</div>
        <div>
          <div class="row items-center">
            <Field name="allCheckbox" v-slot="{value, field}">
              <q-checkbox :model-value="value" v-bind="field" @update:model-value="handleSelectedAllCheckboxValue" :disable="isDisableAllCheckBox"/>
            </Field>
            <div>전체</div>
          </div>
        </div>
      </div>

      <div class="row items-center">
        <div></div>
        <div>
          <div class="row items-center">
            <div>
              <div v-for="item in optAndMGroupList">
                <div class="row items-center">
                  <Field :name="`${item.label}OperatingInstitution`" v-slot="{value, field}">
                    <q-checkbox :model-value="value" v-bind="field" :disable="isDisableOperatingInstitution" @update:model-value="handleSelectedOperatingInstitutionValue(value, item, values.adminType)"/>
                  </Field>
                  <div>{{ item.label }}</div>

                  <Field :name="`${item.label}MemberGroup`" v-slot="{value, field}">
                    <div v-if="values.adminType?.value === 4">
                      <q-select :model-value="value" v-bind="field" outlined dense :options="item.memberGroup" :disable="isDisableMemberGroup" @update:model-value="handleSelectedMemberGroupValue">
                        <template v-slot:selected>
                          <div v-if="value">
                            {{ value.label }}
                          </div>
                          <div v-if="!value" class="text-grey-8">
                            소속그룹을 선택해 주세요
                          </div>
                        </template>
                      </q-select>
                    </div>
                    <div v-else>
                      <q-select :model-value="value" v-bind="field" outlined dense :options="item.memberGroup" multiple :disable="isDisableMemberGroup" @update:model-value="handleSelectedMemberGroupValue">
                        <template v-slot:selected>
                          <div v-if="value">
                            {{ value[0]?.label }}
                          </div>
                          <div v-if="value?.length >= 2">
                            외 {{value.length - 1}}
                          </div>
                          <div v-if="!value || 0 === value.length " class="text-grey-8">
                            소속그룹을 선택해 주세요
                          </div>
                        </template>
                      </q-select>
                    </div>
                  </Field>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<style scoped>

</style>