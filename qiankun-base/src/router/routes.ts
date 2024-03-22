import Layout from '@/layout/index.vue'

//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
    {
        path: '/',
        redirect: '/login',
        meta: {
            hidden: true,
            title: '',
            icon: '',
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            hidden: true,
            title: '登录页',
            icon: '',
        },
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404/index.vue'),
        meta: {
            hidden: true,
            title: '404',
            icon: '',
        },
    },
    // {
    //     path: '/:pathMatch(.*)*',
    //     redirect: '/404',
    //     name: 'Any',
    //     meta: {
    //         title: '任意路由',
    //         hidden: true,
    //         icon: 'DataLine',
    //     },
    // },
]

export const asnycRoute = [
    // 布局
    {
        path: '/layout',
        name: 'layout',
        component: Layout,
        meta: {
            hidden: true,
            title: '布局',
            icon: '',
            fatherHidden: true,
        },
        children: [
            // 机试题
            {
                path: '/test',
                name: '机试题',
                component: () => import('@/views/test/index.vue'),
                meta: {
                    hidden: false,
                    title: '机试题',
                    icon: 'icon-workbench',
                },
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    hidden: false,
                    title: 'about',
                    icon: 'icon-workbench',
                },
            },
            {
                path: '/vue-app:pathMatch(.*)',
                name: '/vue-app',
                component: () => import('@/views/test/index.vue'),
                meta: {
                    hidden: true,
                    title: '/vue-app',
                    icon: 'icon-workbench',
                },
            },
        ],
    },
]

//任意路由
// export const anyRoute = {
//     path: '/:pathMatch(.*)*',
//     // path: '/404',
//     redirect: '/404',
//     name: 'Any',
//     meta: {
//         title: '任意路由',
//         hidden: true,
//         icon: 'DataLine',
//     },
// }
