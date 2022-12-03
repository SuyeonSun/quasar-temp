<script setup>
import {useAdminUserStore} from "stores/admin-user-store";
import {storeToRefs} from "pinia";
import {onMounted, ref, watch} from 'vue';
import {convertIndexToValue, convertValueToIndex} from "src/helper/enum-convert-helper";
import {AdminUserPermissionData} from "src/common/data/admin-user-permission-data";

const adminUserStore = useAdminUserStore();
const {isOpenAdminUserDialog} = storeToRefs(adminUserStore)

onMounted(() => {
  adminUserStore.getAdminUserPermissionInfo()
})

const handleAdminUserDialog = () => {
  const payload = {
    evStation: {
      read: convertValueToIndex(AdminUserPermissionData, evStation.value.read),
      update: convertValueToIndex(AdminUserPermissionData, evStation.value.update),
      delete: convertValueToIndex(AdminUserPermissionData, evStation.value.delete),
      write: convertValueToIndex(AdminUserPermissionData, evStation.value.write),
    },
    evCharger: {
      read: convertValueToIndex(AdminUserPermissionData, evCharger.value.read),
      update: convertValueToIndex(AdminUserPermissionData, evCharger.value.update),
      delete: convertValueToIndex(AdminUserPermissionData, evCharger.value.delete),
      write: convertValueToIndex(AdminUserPermissionData, evCharger.value.write),
    },
    chargingHistory: {
      read: convertValueToIndex(AdminUserPermissionData, chargingHistory.value.read),
      update: convertValueToIndex(AdminUserPermissionData, chargingHistory.value.update),
      delete: convertValueToIndex(AdminUserPermissionData, chargingHistory.value.delete),
      write: convertValueToIndex(AdminUserPermissionData, chargingHistory.value.write),
    },
    onlineUser: {
      read: convertValueToIndex(AdminUserPermissionData, onlineUser.value.read),
      update: convertValueToIndex(AdminUserPermissionData, onlineUser.value.update),
      delete: convertValueToIndex(AdminUserPermissionData, onlineUser.value.delete),
      write: convertValueToIndex(AdminUserPermissionData, onlineUser.value.write),
    },
    adminUser: {
      read: convertValueToIndex(AdminUserPermissionData, adminUser.value.read),
      update: convertValueToIndex(AdminUserPermissionData, adminUser.value.update),
      delete: convertValueToIndex(AdminUserPermissionData, adminUser.value.delete),
      write: convertValueToIndex(AdminUserPermissionData, adminUser.value.write),
    },
  }

  console.log('====== payload', payload)
  adminUserStore.setIsOpenAdminUserDialog(false);
}

// true, false
const evStation = ref({
  read: null,
  update: null,
  delete: null,
  write: null
})
watch(() => adminUserStore.evStationPermission,
    (value) => {
      evStation.value.read = convertIndexToValue(AdminUserPermissionData, value.read)
      evStation.value.update = convertIndexToValue(AdminUserPermissionData, value.update)
      evStation.value.delete = convertIndexToValue(AdminUserPermissionData, value.delete)
      evStation.value.write = convertIndexToValue(AdminUserPermissionData, value.write)
})

const evCharger = ref({
  read: null,
  update: null,
  delete: null,
  write: null
})
watch(() => adminUserStore.evChargerPermission,
    (value) => {
      evCharger.value.read = convertIndexToValue(AdminUserPermissionData, value.read)
      evCharger.value.update = convertIndexToValue(AdminUserPermissionData, value.update)
      evCharger.value.delete = convertIndexToValue(AdminUserPermissionData, value.delete)
      evCharger.value.write = convertIndexToValue(AdminUserPermissionData, value.write)
    })

const chargingHistory = ref({
  read: null,
  update: null,
  delete: null,
  write: null
})
watch(() =>
    adminUserStore.chargingHistoryPermission,
    (value) => {
      chargingHistory.value.read = convertIndexToValue(AdminUserPermissionData, value.read)
      chargingHistory.value.update = convertIndexToValue(AdminUserPermissionData, value.update)
      chargingHistory.value.delete = convertIndexToValue(AdminUserPermissionData, value.delete)
      chargingHistory.value.write = convertIndexToValue(AdminUserPermissionData, value.write)
})

const onlineUser = ref({
  read: null,
  update: null,
  delete: null,
  write: null
})
watch(() =>
    adminUserStore.onlineUserPermission,
    (value) => {
      onlineUser.value.read = convertIndexToValue(AdminUserPermissionData, value.read)
      onlineUser.value.update = convertIndexToValue(AdminUserPermissionData, value.update)
      onlineUser.value.delete = convertIndexToValue(AdminUserPermissionData, value.delete)
      onlineUser.value.write = convertIndexToValue(AdminUserPermissionData, value.write)
})

const adminUser = ref({
  read: null,
  update: null,
  delete: null,
  write: null
})
watch(() =>
    adminUserStore.adminUserPermission,
    (value) => {
      adminUser.value.read = convertIndexToValue(AdminUserPermissionData, value.read)
      adminUser.value.update = convertIndexToValue(AdminUserPermissionData, value.update)
      adminUser.value.delete = convertIndexToValue(AdminUserPermissionData, value.delete)
      adminUser.value.write = convertIndexToValue(AdminUserPermissionData, value.write)
})
</script>

<template>
  <q-dialog v-model="isOpenAdminUserDialog">
    <q-card class="q-pa-md" style="width: 800px">
      <table style="width: 100%;">
        <tr>
          <td colspan="2" class="text-center table-header">메뉴</td>
          <td class="text-center table-header">보기 권한</td>
          <td class="text-center table-header">수정 권한</td>
          <td class="text-center table-header">삭제 권한</td>
          <td class="text-center table-header">쓰기 권한</td>
        </tr>

        <tr>
          <td rowspan="2">충전인프라 관리</td>
          <td>충전소 관리</td>
          <td class="text-center"><q-checkbox v-model="evStation.read" :disable="adminUserStore.evStationPermission.read === null && true"/></td>
          <td class="text-center"><q-checkbox v-model="evStation.update" :disable="adminUserStore.evStationPermission.update === null && true"/></td>
          <td class="text-center"><q-checkbox v-model="evStation.delete" :disable="adminUserStore.evStationPermission.delete === null && true"/></td>
          <td class="text-center"><q-checkbox v-model="evStation.write" :disable="adminUserStore.evStationPermission.write === null && true"/></td>
        </tr>

        <tr>
          <td>충전기 관리</td>
          <td class="text-center"><q-checkbox v-model="evCharger.read" :disable="adminUserStore.evChargerPermission.read === null && true"/></td>
          <td class="text-center"><q-checkbox v-model="evCharger.update" :disable="adminUserStore.evChargerPermission.update === null && true"/></td>
          <td class="text-center"><q-checkbox v-model="evCharger.delete" :disable="adminUserStore.evChargerPermission.delete === null && true"/></td>
          <td class="text-center"><q-checkbox v-model="evCharger.write" :disable="adminUserStore.evChargerPermission.write === null && true"/></td>
        </tr>

        <tr>
          <td colspan="2">충전 내역</td>
          <td class="text-center"><q-checkbox v-model="chargingHistory.read" :disable="adminUserStore.chargingHistoryPermission.read === null && true" /></td>
          <td class="text-center"><q-checkbox v-model="chargingHistory.update" :disable="adminUserStore.chargingHistoryPermission.update === null && true" /></td>
          <td class="text-center"><q-checkbox v-model="chargingHistory.delete" :disable="adminUserStore.chargingHistoryPermission.delete === null && true" /></td>
          <td class="text-center"><q-checkbox v-model="chargingHistory.write" :disable="adminUserStore.chargingHistoryPermission.write === null && true" /></td>
        </tr>

        <tr>
          <td>회원 목록</td>
          <td>온라인 회원 목록</td>
          <td class="text-center"><q-checkbox v-model="onlineUser.read" :disable="adminUserStore.onlineUserPermission.read === null && true" /></td>
          <td class="text-center"><q-checkbox v-model="onlineUser.update" :disable="adminUserStore.onlineUserPermission.update === null && true" /></td>
          <td class="text-center"><q-checkbox v-model="onlineUser.delete" :disable="adminUserStore.onlineUserPermission.delete === null && true" /></td>
          <td class="text-center"><q-checkbox v-model="onlineUser.write" :disable="adminUserStore.onlineUserPermission.write === null && true" /></td>
        </tr>

        <tr>
          <td rowspan="2">시스템 설정</td>
        </tr>

        <tr>
          <td>관리자 계정 관리</td>
          <td class="text-center"><q-checkbox v-model="adminUser.read" :disable="adminUserStore.adminUserPermission.read === null && true" /></td>
          <td class="text-center"><q-checkbox v-model="adminUser.update" :disable="adminUserStore.adminUserPermission.update === null && true" /></td>
          <td class="text-center"><q-checkbox v-model="adminUser.delete" :disable="adminUserStore.adminUserPermission.delete === null && true" /></td>
          <td class="text-center"><q-checkbox v-model="adminUser.write" :disable="adminUserStore.adminUserPermission.write === null && true" /></td>
        </tr>
      </table>

      <div class="q-mt-sm row justify-center">
        <q-btn label="저장" unelevated color="primary" @click="handleAdminUserDialog" class="q-mr-sm"/>
        <q-btn label="취소" color="primary" outline @click="adminUserStore.setIsOpenAdminUserDialog(false)"/>
      </div>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

.table-header {
  background-color: rgba(0, 173, 255, 0.18);
}
</style>