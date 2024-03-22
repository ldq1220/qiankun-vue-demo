// 引入全局样式
import '@/styles/index.scss'
import './assets/iconfont/iconfont.css'
import { App, createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import globalComponentsPlugin from '@/utils/globalComponentsPlugin'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/router/permission'
// svg
import 'virtual:svg-icons-register'

import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import { createRouter, createWebHistory } from 'vue-router'
import { constantRoute, asnycRoute } from './router/routes'

let router = null
let instance: any = null
let history: any = null
function render(props: any) {
    const { container } = props
    history = createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/vue-app' : '/')
    router = createRouter({
        history,
        routes: [...constantRoute, ...asnycRoute],
    })

    instance = createApp(App)
    instance.use(router)
    instance.use(ElementPlus, { locale })
    instance.use(router)
    instance.use(createPinia())
    instance.use(globalComponentsPlugin)
    instance.mount(container ? container.querySelector('#app_demo') : document.getElementById('app_demo'))
    if (qiankunWindow.__POWERED_BY_QIANKUN__) {
        console.log('我正在作为子应用运行')
    }
}

// some code
renderWithQiankun({
    mount(props: any) {
        console.log('viteapp mount')
        render(props)
    },
    bootstrap() {
        console.log('bootstrap')
    },
    unmount() {
        console.log('vite被卸载了')
        instance.unmount()
        instance._container.innerHTML = ''
        history.destroy() // 不卸载  router 会导致其他应用路由失败
        router = null
        instance = null
    },
    update: function (props: QiankunProps): void | Promise<void> {
        throw new Error('Function not implemented.')
    },
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render()
}

// const app = createApp(App)
// if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
//     for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//         app.component(key, component)
//     }

//     app.use(ElementPlus, { locale })
//     app.use(router)
//     app.use(createPinia())
//     app.use(globalComponentsPlugin)
//     app.mount('#app_demo')
// } else {
//     renderWithQiankun({
//         // 子应用挂载
//         mount(props) {
//             app.mount(props.container?.querySelector('#app_demo') as any)
//             for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//                 app.component(key, component)
//             }
//             app.use(ElementPlus, { locale })
//             app.use(router)
//             app.use(createPinia())
//             app.use(globalComponentsPlugin)
//             // app.mount('#app_demo')
//         },
//         // 只有子应用第一次加载会触发
//         bootstrap() {
//             console.log('vue app bootstrap')
//         },
//         // 更新
//         update() {
//             console.log('vue app update')
//         },
//         // 卸载
//         unmount() {
//             console.log('vue app unmount-------------')
//             app?.unmount()
//         },
//     })
// }

// const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }

// app.use(ElementPlus, { locale })
// app.use(router)
// app.use(createPinia())
// app.use(globalComponentsPlugin)

// app.mount('#app')
