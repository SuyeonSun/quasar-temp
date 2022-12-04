<script setup>
import {useAdminUserStore} from "stores/admin-user-store";
import {storeToRefs} from "pinia";
import {onMounted, ref, watch} from 'vue';
import {convertIndexToValue, convertValueToIndex} from "src/helper/enum-convert-helper";
import {AdminUserPermissionData} from "src/common/data/admin-user-permission-data";

const adminUserStore = useAdminUserStore();
const {isOpenAdminUserDialog} = storeToRefs(adminUserStore)

watch(() => isOpenAdminUserDialog.value, (value) => {
  value && adminUserStore.getAdminUserPermissionInfo()
})

const onSubmit = () => {
  const payload = {
    evStation: {
      read: evStation.value.read.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, evStation.value.read.permission),
      update: evStation.value.update.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, evStation.value.update.permission, evStation.value.update.isDisable),
      delete: evStation.value.delete.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, evStation.value.delete.permission, evStation.value.delete.isDisable),
      write: evStation.value.write.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, evStation.value.write.permission, evStation.value.write.isDisable),
    },

    evCharger: {
      read: evCharger.value.read.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, evCharger.value.read.permission),
      update: evCharger.value.update.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, evCharger.value.update.permission, evStation.value.update.isDisable),
      delete: evCharger.value.delete.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, evCharger.value.delete.permission, evStation.value.delete.isDisable),
      write: evCharger.value.write.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, evCharger.value.write.permission, evStation.value.write.isDisable),
    },

    chargingHistory: {
      read: chargingHistory.value.read.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, chargingHistory.value.read.permission),
      update: chargingHistory.value.update.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, chargingHistory.value.update.permission, evStation.value.update.isDisable),
      delete: chargingHistory.value.delete.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, chargingHistory.value.delete.permission, evStation.value.delete.isDisable),
      write: chargingHistory.value.write.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, chargingHistory.value.write.permission, evStation.value.write.isDisable),
    },

    onlineUser: {
      read: onlineUser.value.read.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, onlineUser.value.read.permission),
      update: onlineUser.value.update.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, onlineUser.value.update.permission, evStation.value.update.isDisable),
      delete: onlineUser.value.delete.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, onlineUser.value.delete.permission, evStation.value.delete.isDisable),
      write: onlineUser.value.write.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, onlineUser.value.write.permission, evStation.value.write.isDisable),
    },

    adminUser: {
      read: adminUser.value.read.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, adminUser.value.read.permission),
      update: adminUser.value.update.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, adminUser.value.update.permission, evStation.value.update.isDisable),
      delete: adminUser.value.delete.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, adminUser.value.delete.permission, evStation.value.delete.isDisable),
      write: adminUser.value.write.isDisable ? 3 : convertValueToIndex(AdminUserPermissionData, adminUser.value.write.permission, evStation.value.write.isDisable),
    },
  }
  console.log('========= payload', payload)

  adminUserStore.setIsOpenAdminUserDialog(false);
}

const evStation = ref({
  read: {permission: null, isDisable: false},
  update: {permission: null, isDisable: false},
  delete: {permission: null, isDisable: false},
  write: {permission: null, isDisable: false}
})
watch(() => adminUserStore.evStationPermission,
    (value) => {
      evStation.value.read.permission = convertIndexToValue(AdminUserPermissionData, value.read)
      value.read === 3 && (evStation.value.read.isDisable = true);
      evStation.value.update.permission = convertIndexToValue(AdminUserPermissionData, value.update)
      value.update === 3 && (evStation.value.update.isDisable = true);
      evStation.value.delete.permission = convertIndexToValue(AdminUserPermissionData, value.delete)
      value.delete === 3 && (evStation.value.delete.isDisable = true);
      evStation.value.write.permission = convertIndexToValue(AdminUserPermissionData, value.write)
      value.write === 3 && (evStation.value.write.isDisable = true);
    }, {deep: true})

const evCharger = ref({
  read: {permission: null, isDisable: false},
  update: {permission: null, isDisable: false},
  delete: {permission: null, isDisable: false},
  write: {permission: null, isDisable: false}
})
watch(() => adminUserStore.evChargerPermission,
    (value) => {
      evCharger.value.read.permission = convertIndexToValue(AdminUserPermissionData, value.read)
      value.read === 3 && (evCharger.value.read.isDisable = true);
      evCharger.value.update.permission = convertIndexToValue(AdminUserPermissionData, value.update)
      value.update === 3 && (evCharger.value.update.isDisable = true);
      evCharger.value.delete.permission = convertIndexToValue(AdminUserPermissionData, value.delete)
      value.delete === 3 && (evCharger.value.delete.isDisable = true);
      evCharger.value.write.permission = convertIndexToValue(AdminUserPermissionData, value.write)
      value.write === 3 && (evCharger.value.write.isDisable = true);
    })

const chargingHistory = ref({
  read: {permission: null, isDisable: false},
  update: {permission: null, isDisable: false},
  delete: {permission: null, isDisable: false},
  write: {permission: null, isDisable: false}
})
watch(() => adminUserStore.chargingHistoryPermission,
    (value) => {
      chargingHistory.value.read.permission = convertIndexToValue(AdminUserPermissionData, value.read)
      value.read === 3 && (chargingHistory.value.read.isDisable = true);
      chargingHistory.value.update.permission = convertIndexToValue(AdminUserPermissionData, value.update)
      value.update === 3 && (chargingHistory.value.update.isDisable = true);
      chargingHistory.value.delete.permission = convertIndexToValue(AdminUserPermissionData, value.delete)
      value.delete === 3 && (chargingHistory.value.delete.isDisable = true);
      chargingHistory.value.write.permission = convertIndexToValue(AdminUserPermissionData, value.write)
      value.write === 3 && (chargingHistory.value.write.isDisable = true);
    })

const onlineUser = ref({
  read: {permission: null, isDisable: false},
  update: {permission: null, isDisable: false},
  delete: {permission: null, isDisable: false},
  write: {permission: null, isDisable: false}
})
watch(() => adminUserStore.onlineUserPermission,
    (value) => {
      onlineUser.value.read.permission = convertIndexToValue(AdminUserPermissionData, value.read)
      value.read === 3 && (onlineUser.value.read.isDisable = true);
      onlineUser.value.update.permission = convertIndexToValue(AdminUserPermissionData, value.update)
      value.update === 3 && (onlineUser.value.update.isDisable = true);
      onlineUser.value.delete.permission = convertIndexToValue(AdminUserPermissionData, value.delete)
      value.delete === 3 && (onlineUser.value.delete.isDisable = true);
      onlineUser.value.write.permission = convertIndexToValue(AdminUserPermissionData, value.write)
      value.write === 3 && (onlineUser.value.write.isDisable = true);
    })

const adminUser = ref({
  read: {permission: null, isDisable: false},
  update: {permission: null, isDisable: false},
  delete: {permission: null, isDisable: false},
  write: {permission: null, isDisable: false}
})
watch(() => adminUserStore.adminUserPermission,
    (value) => {
      adminUser.value.read.permission = convertIndexToValue(AdminUserPermissionData, value.read)
      value.read === 3 && (adminUser.value.read.isDisable = true);
      adminUser.value.update.permission = convertIndexToValue(AdminUserPermissionData, value.update)
      value.update === 3 && (adminUser.value.update.isDisable = true);
      adminUser.value.delete.permission = convertIndexToValue(AdminUserPermissionData, value.delete)
      value.delete === 3 && (adminUser.value.delete.isDisable = true);
      adminUser.value.write.permission = convertIndexToValue(AdminUserPermissionData, value.write)
      value.write === 3 && (adminUser.value.write.isDisable = true);
    })

const handleCancelBtn = () => {
  adminUserStore.setIsOpenAdminUserDialog(false);
}
</script>

<template>
  <q-dialog v-model="isOpenAdminUserDialog">
    <q-card class="q-pa-md" style="width: 800px">
      <!-- 초기화 버튼 클릭 시 2 -> 1로 변경 -->
      <q-btn label="초기화" color="black" outline @click="" class="q-mb-sm float-right"/>

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
          <td class="text-center"><q-checkbox v-model="evStation.read.permission" :disable="evStation.read.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="evStation.update.permission" :disable="evStation.update.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="evStation.delete.permission" :disable="evStation.delete.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="evStation.write.permission" :disable="evStation.write.isDisable"/></td>
        </tr>

        <tr>
          <td>충전기 관리</td>
          <td class="text-center"><q-checkbox v-model="evCharger.read.permission" :disable="evCharger.read.isDisable" /></td>
          <td class="text-center"><q-checkbox v-model="evCharger.update.permission" :disable="evCharger.update.isDisable" /></td>
          <td class="text-center"><q-checkbox v-model="evCharger.delete.permission" :disable="evCharger.delete.isDisable" /></td>
          <td class="text-center"><q-checkbox v-model="evCharger.write.permission" :disable="evCharger.write.isDisable" /></td>
        </tr>

        <tr>
          <td colspan="2">충전 내역</td>
          <td class="text-center"><q-checkbox v-model="chargingHistory.read.permission" :disable="chargingHistory.read.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="chargingHistory.update.permission" :disable="chargingHistory.update.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="chargingHistory.delete.permission" :disable="chargingHistory.delete.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="chargingHistory.write.permission" :disable="chargingHistory.write.isDisable"/></td>
        </tr>

        <tr>
          <td>회원 목록</td>
          <td>온라인 회원 목록</td>
          <td class="text-center"><q-checkbox v-model="onlineUser.read.permission" :disable="onlineUser.read.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="onlineUser.update.permission" :disable="onlineUser.update.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="onlineUser.delete.permission" :disable="onlineUser.delete.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="onlineUser.write.permission" :disable="onlineUser.write.isDisable"/></td>
        </tr>

        <tr>
          <td rowspan="2">시스템 설정</td>
        </tr>

        <tr>
          <td>관리자 계정 관리</td>
          <td class="text-center"><q-checkbox v-model="adminUser.read.permission" :disable="adminUser.read.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="adminUser.update.permission" :disable="adminUser.update.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="adminUser.delete.permission" :disable="adminUser.delete.isDisable"/></td>
          <td class="text-center"><q-checkbox v-model="adminUser.write.permission" :disable="adminUser.write.isDisable"/></td>
        </tr>
      </table>

      <div class="q-mt-sm row justify-center">
        <q-btn label="저장" unelevated color="primary" @click="onSubmit" class="q-mr-sm"/>
        <q-btn label="취소" color="primary" outline @click="handleCancelBtn"/>
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