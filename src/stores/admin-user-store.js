import {defineStore} from 'pinia';
import axios from 'axios';

export const useAdminUserStore = defineStore('adminUserStore', {
    state: () => {
        return {
            isOpenAdminUserDialog: false,


            permissionList:[
            ],

            // vs

            evStationPermission: {},
            evChargerPermission: {},
            chargingHistoryPermission: {},
            onlineUserPermission: {},
            adminUserPermission: {},
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
                    const menu = [

                    ]

                    return {
                        ...ele,
                        // ele.type === '*' 이면 ''
                        title: ele.type,
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

        async getAdminUserPermissionInfo2() {
            try {
                const response = await axios.get('/data/data-backup.json')
                this.evStationPermission = response.data[0];
                this.evChargerPermission = response.data[1];
                this.chargingHistoryPermission = response.data[2];
                this.onlineUserPermission = response.data[3];
                this.adminUserPermission = response.data[4];
            } catch (error) {
                console.log('error')
            }
        },

        updatePermissionList(idx, type, value){
            this.permissionList[idx][type].permission = value
        }
    }
})