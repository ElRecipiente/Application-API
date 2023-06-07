import { reactive, ref } from 'vue'

export const store = reactive({
    // message info
    message: ref(''),
    // stock userID after connexion
    userID: ref(null),
    // stock favorite info
    heart: ref(false),
    // liste des articles
    articles: ref([]),
    // liste des items
    list: ref([]),
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