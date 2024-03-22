<template>
    <div class="nav-breadcrumb">
        <el-breadcrumb separator="/">
            <template v-for="item in props.breadcrumbs" :key="item.name">
                <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
            </template>
        </el-breadcrumb>
    </div>
</template>
<script setup lang="ts">
const props: any = defineProps({
    breadcrumbs: {
        type: Array,
        default: () => [],
    },
})
</script>

<style scoped></style>
