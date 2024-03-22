// 引入全局样式
import '@/styles/index.scss'
import './assets/iconfont/iconfont.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'
import globalComponentsPlugin from '@/utils/globalComponentsPlugin'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/router/permission'
// svg
import 'virtual:svg-icons-register'
import { registerMicroApps } from 'qiankun'
import { start } from 'qiankun'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus, { locale })
app.use(router)
app.use(createPinia())
app.use(globalComponentsPlugin)

app.mount('#app')

const apps = [
    {
        name: 'vue-app', // 子应用的名称
        entry: '//localhost:9999', // 默认会加载这个路径下的html，解析里面的js
        activeRule: '/vue-app', // 匹配的路由
        container: '#vue-app', // 加载的容器
        props: {
            message: '我是主应用传递的 message',
        },
    },
]

// 2. 注册子应用
registerMicroApps(apps, {
    beforeLoad: [async (app) => console.log('before load', app.name)],
    beforeMount: [async (app) => console.log('before mount', app.name)],
    afterMount: [async (app) => console.log('after mount', app.name)],
})

start()
