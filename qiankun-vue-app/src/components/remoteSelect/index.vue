<template>
    <!-- 远程搜索组件 -->
    <el-select v-model="remoteValue" filterable remote reserve-keyword :placeholder="props.placeholder" :remote-method="remoteMethod" @change="handleChange" :loading="loading" style="width: 240px">
        <el-option v-for="item in optionsData" :key="item.value" :label="item.label" :value="item.value">
            <div class="option_item flex1">
                <el-avatar :size="30" :src="item.avatarUrl" style="margin-right: 10px" />
                {{ item.name }} - {{ item.phone }}
            </div>
        </el-option>
    </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const remoteValue: any = defineModel('remoteValue', { type: String, default: '' })

const props = defineProps({
    placeholder: {
        type: String,
        default: '请输入姓名或手机号',
    },
    remoteData: {
        type: Array,
        default: [],
    },
    options: {
        type: Object,
        default: {
            label: 'name',
            value: 'id',
        },
    },
})

const $emit = defineEmits(['handleRemoteSearch', 'handleChange'])

const optionsData: any = ref([])
const loading = ref(false)

const remoteMethod = (query: string) => {
    if (query) {
        loading.value = true

        $emit('handleRemoteSearch', query)
        setTimeout(() => {
            optionsData.value = props.remoteData.map((item: any) => {
                return {
                    ...item,
                    value: item[props.options.value],
                    label: item[props.options.label],
                }
            })
            loading.value = false
        }, 200)
    } else {
        optionsData.value = []
    }
}

const handleChange = (id: number) => {
    $emit('handleChange', id)
}
</script>

<style scoped lang="scss"></style>
