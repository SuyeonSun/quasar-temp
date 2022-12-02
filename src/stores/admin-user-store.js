import { defineStore } from 'pinia';
import axios from 'axios'

export const useAdminUserStore = defineStore('adminUserStore', {
  state: () => {

    return  {
      adminUserRightsStatus: {
        "dashBoard": {
          "read": null, "update": null, "delete": null, "write": null
        },
        "evStation": {
          "read": null, "update": null, "delete": null, "write": null
        },
        "evCharger": {
          "read": null, "update": null, "delete": null, "write": null
        },
        "chargingHistory": {
          "read": null, "update": null, "delete": null, "write": null
        },
        "onlineUser": {
          "read": null, "update": null, "delete": null, "write": null
        },
        "adminUser": {
          "read": null, "update": null, "delete": null, "write": null
        }
      }
    }
  },

  actions: {
    async getAdminUserRightsStatus() {
      try {
        const response = await axios.get('/data/admin-user-rights-status.json')
        this.adminUserRightsStatus = response.data
      } catch (error) {
        console.log('error')
      }
    }
  },
});
