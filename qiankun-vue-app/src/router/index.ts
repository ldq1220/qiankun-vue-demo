import { createRouter, createWebHistory } from 'vue-router'
import { constantRoute, asnycRoute } from './routes'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const router = createRouter({
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/vue-app' : '/'),
    routes: [...constantRoute, ...asnycRoute],
    scrollBehavior() {
        return {
            top: 0,
        }
    },
})

export default router
