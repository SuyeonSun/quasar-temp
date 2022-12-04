<script setup>
import {useAdminUserStore} from "stores/admin-user-store";
import {storeToRefs} from "pinia";
import {onMounted, ref, watch} from 'vue';
import AdminUserDialogCheckbox from "components/AdminUserDialogCheckbox";

const adminUserStore = useAdminUserStore();
const {isOpenAdminUserDialog, permissionList} = storeToRefs(adminUserStore)

watch(() => isOpenAdminUserDialog.value, (value) => {
  value && adminUserStore.getAdminUserPermissionInfo()
})

const handleCancelBtn = () => {
  adminUserStore.setIsOpenAdminUserDialog(false);
}

const onSubmit = () => {
  adminUserStore.postAdminUserPermissionInfo(permissionList.value)
  adminUserStore.setIsOpenAdminUserDialog(false);
}

const handleInitBtn = () => {
  permissionList.value = permissionList.value.map((ele) => {
    return {
      ...ele,
      read: {permission: !ele.read.isDisable && true, isDisable: ele.read.isDisable},
      update: {permission: !ele.update.isDisable && true, isDisable: ele.update.isDisable},
      delete: {permission: !ele.delete.isDisable && true, isDisable: ele.delete.isDisable},
      write: {permission: !ele.write.isDisable && true, isDisable: ele.write.isDisable},
    }
  })
}
</script>

<template>
  <q-dialog v-model="isOpenAdminUserDialog">
    <q-card class="q-pa-md" style="width: 800px">
      <q-btn label="초기화" color="black" outline @click="handleInitBtn" class="q-mb-sm float-right"/>

      <table style="width: 100%;">
        <tr>
          <td colspan="2" class="text-center table-header">메뉴</td>
          <td class="text-center table-header">보기 권한</td>
          <td class="text-center table-header">수정 권한</td>
          <td class="text-center table-header">삭제 권한</td>
          <td class="text-center table-header">쓰기 권한</td>
        </tr>

        <tr v-for="menu in permissionList">
          <td v-if="menu.type === 'evStation'" rowspan="2">충전인프라 관리</td>
          <td v-if="menu.type === 'onlineUser'">회원 목록</td>
          <td v-if="menu.type === 'adminUser'">시스템 설정</td>
          <td :colspan="(menu.type === 'chargingHistory') && 2">{{ menu.type }}</td>

          <td class="text-center">
            <q-checkbox
                v-model="menu.read.permission"
                :class="menu.read.isDisable && 'disabled-checkbox'"
                :disable="menu.read.isDisable"
            />
          </td>
          <td class="text-center">
            <q-checkbox
                v-model="menu.update.permission"
                :class="menu.update.isDisable && 'disabled-checkbox'"
                :disable="menu.update.isDisable"
            />
          </td>
          <td class="text-center">
            <q-checkbox
                v-model="menu.delete.permission"
                :class="menu.delete.isDisable && 'disabled-checkbox'"
                :disable="menu.delete.isDisable"
            />
          </td>
          <td class="text-center">
            <q-checkbox
                v-model="menu.write.permission"
                :class="menu.write.isDisable && 'disabled-checkbox'"
                :disable="menu.write.isDisable"
            />
          </td>
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

.disabled-checkbox {
  :deep(.q-checkbox__bg) {
    background-color: lightgrey;
  }
}
</style>