import { reactive, ref } from 'vue'

export const store = reactive({
    // stock userID after connexion
    userID: 3,
    // stock favorite info
    heart: ref(false),
    // stock input value
    inputData: ref(''),
    // stock count of product buying
    count: ref(0),
    increment() {
        this.count++
        console.log('Count gagne un niveau !')
    }
})