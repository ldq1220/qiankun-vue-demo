<template>
    <div class="common-layout">
        <el-container>
            <el-aside :width="!menuCollapseStore.isCollapse ? '200px' : '65px'">
                <div class="menu_title flex">
                    <ad-svg name="logo" size="32" color="#646cff"></ad-svg>
                    <div class="name" v-show="!menuCollapseStore.isCollapse">
                        <span>vue子应用</span>
                    </div>
                </div>
                <el-scrollbar class="scrollbar" height="calc(100vh - 100px)">
                    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" :collapse="menuCollapseStore.isCollapse" router>
                        <Menu :menuList="menuList"></Menu>
                    </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-container>
                <el-header><Header></Header></el-header>
                <el-main><Main></Main></el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Menu from './menu/index.vue'
import Header from './header/index.vue'
import Main from './main/index.vue'
import { constantRoute, asnycRoute } from '@/router/routes'
import usemenuCollapseStore from '@/store/menuCollapse'
import { useRoute } from 'vue-router'
const route = useRoute()

const menuCollapseStore = usemenuCollapseStore()
const menuList: any = ref([...constantRoute, ...asnycRoute])

const defaultActive = computed(() => {
    return route.path
})
</script>

<style lang="scss" scoped>
:deep(.el-aside) {
    transition: all 0.5s;
}
:deep(.el-header) {
    border-bottom: 2px solid #ececec;
}
.scrollbar {
    height: auto;
}

.menu_title {
    width: 100%;
    padding: 20px;
    color: $base-theme-color;
    font-size: 18px;
    font-weight: bold;
}
.el-menu-vertical-demo {
    flex: 1;
}
</style>
