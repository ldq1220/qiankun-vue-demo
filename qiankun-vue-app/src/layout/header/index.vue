<template>
    <div class="header_box flex">
        <div class="left flex">
            <i class="iconfont icon-fold-right" @click="menuCollapseStore.changeIsCollapse" v-if="menuCollapseStore.isCollapse"></i>
            <i class="iconfont icon-fold-left" @click="menuCollapseStore.changeIsCollapse" v-else></i>

            <breadCrumb :breadcrumbs="breadcrumbs"></breadCrumb>
        </div>

        <div class="right flex">
            <el-button size="small" icon="FullScreen" circle @click="fullScreen" style="margin-right: 20px"></el-button>

            <el-dropdown>
                <div class="user flex">
                    <img src="@/assets/images/header.png" />

                    <span>admin</span>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import breadCrumb from '../breadcrumb/index.vue'
import usemenuCollapseStore from '@/store/menuCollapse'
import useBreadCrumbStore from '@/store/breadCrumb'

const menuCollapseStore = usemenuCollapseStore()
const breadCrumbStore = useBreadCrumbStore()

const route = useRoute()
const router = useRouter()

// 面包屑
const breadcrumbs: any = ref([])
watch(
    () => route.path,
    () => {
        breadcrumbs.value = []
        const matched = route.matched
        matched.forEach((item: any) => {
            if (item.name != 'layout') {
                breadcrumbs.value.push({
                    path: item.path,
                    name: item.name,
                })
            }
        })
        breadCrumbStore.breadCrumbMenu = breadcrumbs.value
    },
    { immediate: true },
)

// 控制全屏按钮
const fullScreen = () => {
    // 通过 fullscreenElement 获取当前是否为全屏模式
    let full = document.fullscreenElement
    if (!full) {
        // 利用dom  文档根节点的方法 requestFullscreen 实现全屏模式
        document.documentElement.requestFullscreen()
    } else {
        // 退出全屏
        document.exitFullscreen()
    }
}

// 退出
const logout = () => {
    router.push('/login')
}
</script>

<style scoped lang="scss">
.header_box {
    padding: 10px 0;
    .left {
        i {
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            color: $base-theme-color;
            margin-right: 20px;
        }
    }
    .right {
        .user {
            img,
            .el-avatar {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                margin-right: 8px;
            }
        }
    }
}
</style>
