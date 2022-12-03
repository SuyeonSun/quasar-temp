import {defineStore} from 'pinia';
import axios from 'axios';

export const useAdminUserStore = defineStore('adminUserStore', {
    state: () => {
        return {
            isOpenAdminUserDialog: false,

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
                this.evStationPermission = response.data.evStation;
                this.evChargerPermission = response.data.evCharger;
                this.chargingHistoryPermission = response.data.chargingHistory;
                this.onlineUserPermission = response.data.onlineUser;
                this.adminUserPermission = response.data.adminUser;
            } catch (error) {
                console.log('error')
            }
        }
    }
})