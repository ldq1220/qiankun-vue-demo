<template>
    <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import axios from 'axios'

onMounted(() => {
    // 设置主题色
    const el = document.documentElement
    el.style.setProperty('--el-color-primary', '#646cff')

    getData()
})

const getData = async () => {
    const res = await axios.get('https://picsum.photos/200/300')
    console.log('主应用axios请求=======', res)
}
</script>

<style scoped lang="scss"></style>
