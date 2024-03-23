<template>
    <h1 class="test">我是子应用about页面</h1>
    <el-dialog title="我是子应用about页面的dialog" v-model="visiabled" width="30%">
        <span>我是子应用about页面的dialog</span>
        <template #footer>
            <span>
                <el-button @click="visiabled = false">Cancel</el-button>
                <el-button type="primary" @click="visiabled = false">OK</el-button>
            </span>
        </template>
    </el-dialog>
    <el-button type="primary" size="default" @click="visiabled = true">弹窗</el-button>

    <h1>{{ accessToken }}</h1>
    <!-- <iframe src="https://element-plus.gitee.io/zh-CN/component/dialog.html" style="width: 100%; height: 200px"></iframe> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const visiabled = ref(false)
const accessToken = ref()

onMounted(() => {
    accessToken.value = localStorage.getItem('accessToken')
    getData()
})

const getData = async () => {
    const res = await axios.get('https://picsum.photos/200/300')
    console.log('子应用axios请求=======', res)
}
</script>

<style scoped lang="scss">
.test {
    font-size: 38px;
    margin: 30px 0;
}
</style>
