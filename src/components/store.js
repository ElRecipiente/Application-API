import { reactive, ref } from 'vue'

export const store = reactive({
    // stock userID after connexion
    userID: ref(1),
    // stock favorite info
    heart: ref(false),
    articles: ref([]),
    toggleHeart() {
        this.heart = !this.heart
    },
    // stock input value
    inputData: ref(''),
    // stock count of product buying
    count: ref(0),
    increment() {
        this.count++
        console.log('Count gagne un niveau !')
    }
})