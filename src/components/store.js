import { reactive } from 'vue'

export const store = reactive({
    // info message
    message: '',
    // stock userID after connexion
    userID: null,
    // stock favorite info
    heart: false,
    // list of articles
    articles: [],
    // list of items
    list: [],
    // method to set favorite state
    toggleHeart() {
        this.heart = !this.heart
    },
    // stock input value
    inputData: '',
    // stock count of product buying
    count: 0,
    increment() {
        this.count++
        console.log('Count gagne un niveau !')
    }
})