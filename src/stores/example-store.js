import { defineStore } from 'pinia';
import axios from 'axios'

export const useAdminUserStore = defineStore('adminUserStore', {
  state: () => {

    return  {
      adminUserDashBoardRights: {
        "read": null, "update": null, "delete": null, "write": null
      },
      adminUserEvStationRights: {
        "read": null, "update": null, "delete": null, "write": null
      },
      adminUserEvChargerRights: {
        "read": null, "update": null, "delete": null, "write": null
      },
      adminUserChargingHistoryRights: {
        "read": null, "update": null, "delete": null, "write": null
      },
      adminUserOnlineUserRights: {
        "read": null, "update": null, "delete": null, "write": null
      },
      adminUserAdminUserRights: {
        "read": null, "update": null, "delete": null, "write": null
      }
    }
  },

  actions: {
    async getAdminUserRightsStatus() {
      try {
        const response = await axios.get('/data/admin-user-rights-status.json')
        this.adminUserDashBoardRights = response.data.dashBoard
        this.adminUserEvStationRights = response.data.evStation
        this.adminUserEvChargerRights = response.data.evCharger
        this.adminUserChargingHistoryRights = response.data.chargingHistory
        this.adminUserOnlineUserRights = response.data.onlineUser
        this.adminUserAdminUserRights = response.data.adminUser
      } catch (error) {
        console.log('error')
      }
    },

    updateAdminUserDashBoardRights(payload) {
      this.adminUserDashBoardRights = payload
    }
  },
});
