import { fileURLToPath, URL } from 'node:url'
import topLevelAwait from 'vite-plugin-top-level-await'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import proxy from './src/config/proxy'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
    // base: '/vue-app', // 和基座中配置的activeRule一致
    plugins: [
        vue(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]',
        }),
        topLevelAwait({
            promiseExportName: '__tla',
            promiseImportName: (i) => `__tla_${i}`,
        }),
        qiankun('vue-app', {
            // 配置qiankun插件
            useDevMode: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: '@import "./src/styles/variable.scss";',
            },
        },
    },
    server: {
        host: '0.0.0.0', // 暴露内网ip
        port: 9999,
        open: true,
        proxy,
        core: true,
        origin: 'http://localhost:9999',
    },
})
