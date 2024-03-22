import { ref } from 'vue'
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', () => {
    const userInfo: any = ref({})
    const accessToken = ref('')

    return {
        accessToken,
        userInfo,
    }
})

export default useUserStore
