import request from '@/utils/request'

enum API {
    ALL_APPS = '/admin/app/sys/list', // 获取所有应用列表
}

// 获取所有应用列表
export const reqAllApps = () => request.get(API.ALL_APPS)
