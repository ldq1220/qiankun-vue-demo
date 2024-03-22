// 路由鉴权
import router from './index'
// 引入进度条插件
// @ts-ignore
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

// 全局前置守卫
router.beforeEach((_to, _from, next) => {
    next()
    nprogress.start() // 开始进度条
})

// 全局后置守卫
router.afterEach(() => {
    nprogress.done() // 关闭进度条
})
