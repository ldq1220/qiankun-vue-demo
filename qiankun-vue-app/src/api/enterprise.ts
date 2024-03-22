import request from '@/utils/request'

enum API {
    ADMIN_COMPANYS_URL = '/admin/companys', // get:获取公司分页列表  post:创建公司 patch:修改公司
    ADMIN_COMPANYS_COUNT_URL = '/admin/company/count', // 获取公司总数
    ADMIN_COMPANYS_APP_ALL_RUL = '/admin/companys/', // 获取所有应用及公司已购买的应用
    ADMIN_COMPANY_APP_ADD_OR_UPDATE = '/admin/companys/', // 新增或更新公司应用
    ADMIN_USER_LIST_URL = '/admin/user/list', // 搜索用户列表（最多返回五个）
}

// 获取公司分页列表
export const reqAdminCompanys = (params: any) => request.get(API.ADMIN_COMPANYS_URL + '?' + params)

// 获取公司总数
export const reqAdminCompanysCount = (params: any) => request.get(API.ADMIN_COMPANYS_COUNT_URL + '?' + params)

// 创建公司
export const reqAdminCompanysCreate = (data: any) => request.post(API.ADMIN_COMPANYS_URL, data)

// 修改公司
export const reqAdminCompanysUpdate = (id: number, data: any) => request.patch(API.ADMIN_COMPANYS_URL + '/' + id, data)

// 获取所有应用及公司已购买的应用
export const reqAdminCompanysAppAll = (id: number) => request.get(API.ADMIN_COMPANYS_APP_ALL_RUL + id + '/app/all')

// 新增或更新公司应用
export const reqAdminCompanyAppAddOrUpdate = (id: number, data: any) => request.patch(API.ADMIN_COMPANY_APP_ADD_OR_UPDATE + id + '/app', data)

// 搜索用户列表（最多返回五个）
export const reqAdminUserList = (params: any) => request.get(API.ADMIN_USER_LIST_URL + '?' + params)
