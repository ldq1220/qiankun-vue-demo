import { defineStore } from 'pinia'
import { ref, nextTick } from 'vue'

const usemenuCollapseStore = defineStore('usemenuCollapseStore', () => {
    const isCollapse = ref(false)

    const changeIsCollapse = () => {
        nextTick(() => {
            isCollapse.value = !isCollapse.value
        })
    }

    return {
        isCollapse,
        changeIsCollapse,
    }
})

export default usemenuCollapseStore
