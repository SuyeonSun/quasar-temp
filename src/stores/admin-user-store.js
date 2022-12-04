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
                // 추후 다른 파일로 분리
                const menu = [
                    {value: 'evStation', label: '충전소 관리'},
                    {value: 'evCharger', label: '충전기 관리'},
                    {value: 'chargingHistory', label: '충전 내역'},
                    {value: 'onlineUser', label: '온라인 회원 목록'},
                    {value: 'adminUser', label: '관리자 계정 관리'},
                ]
                this.permissionList = response.data.map((ele) => {
                    return {
                        ...ele,
                        title: menu.find((data) => data.value === ele.type)?.label,
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
                    type: ele.type,
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