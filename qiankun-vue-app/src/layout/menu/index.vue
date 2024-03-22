<template>
    <template v-for="item in menuList" :key="item.path">
        <template v-if="(item.children && item.children.length == 0) || !item.children">
            <el-menu-item :index="item.path" v-if="!item.meta.hidden">
                <icon :name="item.meta.icon" />
                <span>{{ item.meta.title }}</span>
            </el-menu-item>
        </template>

        <template v-if="item.children && item.children.length >= 1 && item.meta.fatherHidden">
            <Menu :menuList="item.children"></Menu>
        </template>

        <template v-if="item.children && item.children.length >= 1">
            <el-sub-menu :index="item.path" v-if="!item.meta.hidden">
                <template #title>
                    <icon :name="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                </template>
                <Menu :menuList="item.children"></Menu>
            </el-sub-menu>
        </template>
    </template>
</template>

<script setup lang="ts">
import icon from '@/components/icon/index.vue'
defineProps(['menuList'])
</script>

<!-- 注意：必须开启这个 要不然在组件内部调用自己 递归不生效 -->
<script lang="ts">
export default {
    name: 'Menu',
}
</script>

<style lang="scss">
/*隐藏文字*/
.el-menu--collapse .el-sub-menu__title span {
    display: none;
}
/*隐藏 > */
.el-menu--collapse .el-sub-menu__title .el-sub-menu__icon-arrow {
    display: none;
}
</style>

<style scoped lang="scss">
// :deep(.el-menu) {
//     height: 600px;
// }
.icon-svg {
    margin-right: 4px;
}
.el-menu-item.is-active svg {
    color: var(--el-menu-active-color) !important;
}
</style>
