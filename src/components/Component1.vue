<script setup>
import {ref, onMounted, watch} from 'vue';
import {useAdminUserStore} from "stores/admin-user-store";
import {convertBoolToNumber, convertNumberToBool} from "src/helper/enum_convert-helper";
import {AdminUserRightsStatus} from "src/data/admin-user-rights-status";

const adminUserStore = useAdminUserStore()

onMounted(() => {
  adminUserStore.getAdminUserRightsStatus()
})
const val = ref(true)

// true false
const dashBoard = ref({
  read: null,
  update: null,
  delete: null,
  write: null
})

watch(() =>
  adminUserStore.adminUserDashBoardRights // 1 // 2
, (value) => {
        dashBoard.value.read = convertNumberToBool(AdminUserRightsStatus, value.read) // 함수 return 값
        dashBoard.value.update = convertNumberToBool(AdminUserRightsStatus, value.update)
        dashBoard.value.delete = convertNumberToBool(AdminUserRightsStatus, value.delete)
        dashBoard.value.write = convertNumberToBool(AdminUserRightsStatus, value.write)
    })

// watch(() => dashBoard.value, (value) => {
//   console.log('======', value)
// }, {
//   deep: true
// })

const onSubmit = () => {
  const paylaod = {
    adminUserDashBoardRights: {
    "read": convertBoolToNumber(AdminUserRightsStatus, dashBoard.value.read),
      "update": convertBoolToNumber(AdminUserRightsStatus, dashBoard.value.update),
      "delete": convertBoolToNumber(AdminUserRightsStatus, dashBoard.value.delete),
      "write": convertBoolToNumber(AdminUserRightsStatus, dashBoard.value.write),
    }}
}
</script>

<template>
  <div style="width: 600px">
  <table style="width: 100%;">
    <tr>
      <td colspan="2" class="text-center" style="background-color:#FAF9Fb">메뉴</td>
      <td class="text-center" style="background-color:#FAF9Fb">보기 권한</td>
      <td class="text-center" style="background-color:#FAF9Fb">수정 권한</td>
      <td class="text-center" style="background-color:#FAF9Fb">삭제 권한</td>
      <td class="text-center" style="background-color:#FAF9Fb">쓰기 권한 권한</td>
    </tr>

    <tr>
      <td rowspan="2">충전인프라 관리</td>
      <td>충전소 관리</td>
      <td class="text-center"><q-checkbox v-model="dashBoard.read"/></td>
      <td class="text-center"><q-checkbox v-model="dashBoard.update"/></td>
      <td class="text-center"><q-checkbox v-model="dashBoard.delete"/></td>
      <td class="text-center"><q-checkbox v-model="dashBoard.write"/></td>
    </tr>

    <tr>
      <td>충전기 관리</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td colspan="2">충전 내역</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td rowspan="2">회원 목록</td>
      <td>온라인 회원 목록</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td>오프라인 회원 목록</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td rowspan="3">시스템 설정</td>
      <td>공지사항</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td>관리자 계정 관리</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>

    <tr>
      <td>소속 그룹 관리</td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
      <td class="text-center"><q-checkbox v-model="val"/></td>
    </tr>
  </table>
    <q-btn label="저장" color="primary" unelevated @click="onSubmit"/>
  </div>
</template>

<style scoped lang="scss">
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
