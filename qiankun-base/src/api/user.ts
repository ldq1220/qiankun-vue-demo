import request from '@/utils/request'

// 定义请求地址字典
//项目用户相关的请求地址
enum API {
    USERLOGIN_URL = '/admin/user/login', // 账密登录
    GETUSERMINE_URL = '/admin/user/mine', // 获取用户个人信息
    REFRESHTOKEN_URL = '/admin/user/refresh-token', // 刷新accessToken
}

// 账密登录
export const reqUserLogin = (data: { email: string; password: string }) => request.post(API.USERLOGIN_URL, data)

// 获取用户个人信息
export const reqGetUserMine = () => request.get(API.GETUSERMINE_URL)

// 刷新accessToken
export const reqRegreshToken = () => request.post(API.REFRESHTOKEN_URL)
