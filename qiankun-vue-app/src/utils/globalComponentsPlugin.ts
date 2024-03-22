import AdIcon from '@/components/svgIcon/index.vue'

const GlobalComponentsPlugin = {
    install(app: any) {
        // 批量注册全局组件
        app.component('ad-svg', AdIcon)
    },
}

export default GlobalComponentsPlugin
