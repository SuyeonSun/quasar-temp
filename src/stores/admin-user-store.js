import {defineStore} from 'pinia';
import axios from 'axios';

export const useAdminUserStore = defineStore('adminUserStore', {
    state: () => {
        return {
            isOpenAdminUserDialog: false,
            permissionList:[],
        }
    },

    actions: {
        setIsOpenAdminUserDialog(payload) {
            this.isOpenAdminUserDialog = payload
        },

        async getAdminUserPermissionInfo() {
            try {
                const response = await axios.get('/data/admin-user-permission.json')
                this.permissionList = response.data.map((ele) => {
                    return {
                        ...ele,
                        // title: ele.type,
                        read: {permission: ele.read === 1, isDisable: ele.read === 3 },
                        update: {permission: ele.update === 1, isDisable: ele.update === 3 },
                        delete: {permission: ele.delete === 1, isDisable: ele.delete === 3 },
                        write: {permission: ele.write === 1, isDisable: ele.write === 3 },
                    }
                });
            } catch (error) {
                console.log('error')
            }
        },

        postAdminUserPermissionInfo(value) {
            const payload = value.map((ele) => {
                return {
                    ...ele,
                    read: ele.read.isDisable ? 3 : (ele.read.permission ? 1 : 2),
                    update: ele.update.isDisable ? 3 : (ele.update.permission ? 1 : 2),
                    delete: ele.delete.isDisable ? 3 : (ele.delete.permission ? 1 : 2),
                    write: ele.write.isDisable ? 3 : (ele.write.permission ? 1 : 2),
                }
            })
            console.log('==== payload', payload)
        }
    }
})