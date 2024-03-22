import { defineStore } from 'pinia'
import { ref } from 'vue'

const useBreadCrumbStore = defineStore('useBreadCrumbStore', () => {
    const breadCrumbMenu = ref([])

    return {
        breadCrumbMenu,
    }
})

export default useBreadCrumbStore
