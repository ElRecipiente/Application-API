<script setup>
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import { store } from './store'

onMounted(() => {
    axios.get('http://localhost:8080/api/products')
        .then(response => articles.value = response.data)
})

watch(() => store.inputData, async () => {
    axios.get('http://localhost:8080/api/products')
        .then(response => articles.value = response.data.filter((article) => article.name.toLowerCase().includes(store.inputData)))
})

async function consume(article) {

    let userid = store.userID;

    axios.get(`http://localhost:8080/api/product/consume?id=${article.id}&userid=${userid}`)
        .then(response => {

            console.log(response)
            article.quantity = response.data.quantity

        })
}

const srcImg = ref('src/assets/img/')
const articles = ref([])

</script>

<template>
    <article v-for='article in articles' :key="article.id">
        <picture><img :src="srcImg + article.img" alt=""></picture>
        <h3>{{ article.name }}</h3>
        <div>
            <p v-if="article.quantity > 0">{{ article.price }} $</p>
            <p v-else class="red">Rupture</p>
            <button class="button" v-if="article.quantity > 0" @click="consume(article), store.increment()">Acheter</button>
        </div>
    </article>
</template>

<style lang="scss" scoped>
article {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    width: 150px;
    height: 150px;
    text-align: center;
    background: white;
    color: black;
    border-radius: 1em;
    gap: 1em;

    picture {
        max-height: 50%;
        overflow: hidden;

        img {
            width: 100%;
            border-radius: 1em 1em 0 0;
        }
    }

    h3 {
        width: 100%;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;

        .button {
            text-decoration: none;
            border: none;
            background: #181a3dde;
            color: white;
            padding: 0.5em;
            border-radius: 1em;
        }
    }
}
</style>