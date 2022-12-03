<script setup>
import {ref, onMounted, watch} from 'vue';
import {useAdminUserStore} from "stores/example-store";
import {convertBoolToNumber, convertNumberToBool} from "src/helper/example";
import {Example} from "src/data/example";

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
        dashBoard.value.read = convertNumberToBool(Example, value.read) // 함수 return 값
        dashBoard.value.update = convertNumberToBool(Example, value.update)
        dashBoard.value.delete = convertNumberToBool(Example, value.delete)
        dashBoard.value.write = convertNumberToBool(Example, value.write)
    })

// watch(() => dashBoard.value, (value) => {
//   console.log('======', value)
// }, {
//   deep: true
// })

const onSubmit = () => {
  const paylaod = {
    adminUserDashBoardRights: {
    "read": convertBoolToNumber(Example, dashBoard.value.read),
      "update": convertBoolToNumber(Example, dashBoard.value.update),
      "delete": convertBoolToNumber(Example, dashBoard.value.delete),
      "write": convertBoolToNumber(Example, dashBoard.value.write),
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
      <td class="text-center"><q-checkbox v-model="dashBoard.read" :disable="adminUserStore.adminUserDashBoardRights.read === 3 && true" :class="adminUserStore.adminUserDashBoardRights.read === 3 && 'bg-grey'"/></td>
      <td class="text-center"><q-checkbox v-model="dashBoard.update" :disable="adminUserStore.adminUserDashBoardRights.update === 3 && true" :class="adminUserStore.adminUserDashBoardRights.read === 3 && 'bg-grey'"/></td>
      <td class="text-center"><q-checkbox v-model="dashBoard.delete" :disable="adminUserStore.adminUserDashBoardRights.delete === 3 && true" :class="adminUserStore.adminUserDashBoardRights.read === 3 && 'bg-grey'"/></td>
      <td class="text-center"><q-checkbox v-model="dashBoard.write" :disable="adminUserStore.adminUserDashBoardRights.write === 3 && true" :class="adminUserStore.adminUserDashBoardRights.read === 3 && 'bg-grey'"/></td>
    </tr>

    <tr>
      <td>충전기 관리</td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
    </tr>

    <tr>
      <td colspan="2">충전 내역</td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
    </tr>

    <tr>
      <td rowspan="2">회원 목록</td>
      <td>온라인 회원 목록</td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
    </tr>

    <tr>
      <td>오프라인 회원 목록</td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
    </tr>

    <tr>
      <td rowspan="3">시스템 설정</td>
      <td>공지사항</td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
    </tr>

    <tr>
      <td>관리자 계정 관리</td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
    </tr>

    <tr>
      <td>소속 그룹 관리</td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
      <td class="text-center"><q-checkbox/></td>
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

//:deep(.q-checkbox__svg.testCheckBox) {
//  background-color: red;
//}
</style>
