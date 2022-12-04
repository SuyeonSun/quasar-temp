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

const temp = ref([]);

watch(() => permissionList.value, (newVal) => {
  // temp.value = newVal;
  temp.value = [...newVal]
  console.log('------', newVal)
}, {deep: true})

watch(() => temp.value, (newVal) => {
  temp.value = newVal;
}, {deep: true})


const onSubmit = () => {
  console.log('========>', temp.value)
}


const handleInitBtn = () => {
  console.log('=== handleInitBtn')
}

// watch(() => permissionList.value, (value) => {
//   console.log('=======', value)
// }, {deep: true})
</script>

<template>
  <q-dialog v-model="isOpenAdminUserDialog">
    <q-card class="q-pa-md" style="width: 800px">
      <q-btn label="초기화" color="black" outline @click="handleInitBtn" class="q-mb-sm float-right"/>

      {{ temp }}
      <table style="width: 100%;">
        <tr>
          <td class="text-center table-header">메뉴</td>
          <td class="text-center table-header">보기 권한</td>
          <td class="text-center table-header">수정 권한</td>
          <td class="text-center table-header">삭제 권한</td>
          <td class="text-center table-header">쓰기 권한</td>
        </tr>

        <tr v-for="menu in temp">
          <td>{{ menu.title }}</td>
          <td class="text-center">

            <q-checkbox
                v-model="menu.read.permission"
                :class="menu.read.isDisable
        && 'disabled-checkbox'"
                :disable="menu.read.isDisable"
            />

            <!--                    <AdminUserDialogCheckbox v-model="menu.read.permission" :is-disable="menu.read.isDisable" />-->
          </td>
          <td class="text-center">
            <q-checkbox
                v-model="menu.update.permission"
                :class="menu.update.isDisable
        && 'disabled-checkbox'"
                :disable="menu.update.isDisable"
            />
            <!--                    <AdminUserDialogCheckbox v-model="menu.update.permission" :is-disable="menu.update.isDisable"/>-->
          </td>
          <td class="text-center">
            <q-checkbox
                v-model="menu.delete.permission"
                :class="menu.delete.isDisable
        && 'disabled-checkbox'"
                :disable="menu.delete.isDisable"
            />
            <!--                    <AdminUserDialogCheckbox v-model="menu.delete.permission" :is-disable="menu.delete.isDisable"/>-->
          </td>
          <td class="text-center">
            <q-checkbox
                v-model="menu.write.permission"
                :class="menu.write.isDisable
        && 'disabled-checkbox'"
                :disable="menu.write.isDisable"
            />
            <!--                    <AdminUserDialogCheckbox v-model="menu.write.permission" :is-disable="menu.write.isDisable"/>-->
          </td>
        </tr>
        <!--        <tr v-for="(menu,idx) in permissionList">-->
        <!--          <td>{{ menu.title }}</td>-->
        <!--          <td class="text-center">-->
        <!--            <AdminUserDialogCheckbox-->
        <!--                v-model="menu.read.permission"-->
        <!--                :is-disable="menu.read.isDisable"-->
        <!--                :index="idx"-->
        <!--                type="read"-->
        <!--                :changeHandler="adminUserStore.updatePermissionList"-->
        <!--            />-->
        <!--          </td>-->
        <!--          <td class="text-center">-->
        <!--            <AdminUserDialogCheckbox-->
        <!--                v-model="menu.update.permission"-->
        <!--                :is-disable="menu.update.isDisable"-->
        <!--                :index="idx"-->
        <!--                type="update"-->
        <!--                :changeHandler="adminUserStore.updatePermissionList"-->
        <!--            />-->
        <!--          </td>-->
        <!--          <td class="text-center">-->
        <!--            <AdminUserDialogCheckbox-->
        <!--                v-model="menu.delete.permission"-->
        <!--                :is-disable="menu.delete.isDisable"-->
        <!--                :index="idx"-->
        <!--                type="delete"-->
        <!--                :changeHandler="adminUserStore.updatePermissionList"-->
        <!--            />-->
        <!--          </td>-->
        <!--          <td class="text-center">-->
        <!--            <AdminUserDialogCheckbox-->
        <!--                v-model="menu.write.permission"-->
        <!--                :is-disable="menu.write.isDisable"-->
        <!--                :index="idx"-->
        <!--                type="write"-->
        <!--                :changeHandler="adminUserStore.updatePermissionList"-->
        <!--            />-->
        <!--          </td>-->
        <!--        </tr>-->
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