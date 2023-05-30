import { reactive, ref } from 'vue'

export const store = reactive({

    inputData: '',
    count: ref(0),
    increment() {
        this.count++
        console.log('Count gagne un niveau !')
    }
})