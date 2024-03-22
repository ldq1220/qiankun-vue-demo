<template>
    <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
    // 设置主题色
    const el = document.documentElement
    el.style.setProperty('--el-color-primary', '#646cff')
})
</script>

<style scoped lang="scss"></style>
