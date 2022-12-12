import { defineStore } from 'pinia';
import axios from 'axios'

export const useAdminUserRegisterStore = defineStore('adminUserRegisterStore', {
  state: () => {
    const adminTypeList = [];
    const optAndMGroupList = [];
    return {
      adminTypeList,
      optAndMGroupList,
    }
  },

  actions: {
    async getAdminUserRegisterInfo() {
      try {
        const response = await axios.get('/data/admin-user-register-info.json')
        this.adminTypeList = response.data.adminTypeList;
        this.optAndMGroupList = response.data.optAndMGroup;
      } catch (error) {
        console.log('error', error)
      }
    }
  },
});
