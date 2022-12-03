<script setup>
import {useAdminUserStore} from "stores/admin-user-store";
import AdminUserDialog from "components/AdminUserDialog";

const adminUserStore = useAdminUserStore();

const handleAdminUserDialog = (status) => {
  adminUserStore.setIsOpenAdminUserDialog(status)
}
</script>

<template>
  <q-page class="column justify-center items-center">
    <q-btn label="개별 권한 설정" flat color="primary" @click="handleAdminUserDialog(true)"/>
    <admin-user-dialog></admin-user-dialog>
  </q-page>
</template>
