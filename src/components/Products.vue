<script setup>
import axios from 'axios'
import { ref, watch, onMounted } from 'vue'
import { store } from './store'

const srcImg = ref('src/assets/img/')
const articles = ref([])

onMounted(() => {
    axios.get(`http://localhost:8080/api/products?userid=${store.userID}`)
        .then(response => {
            store.articles = response.data
            articles.value = store.articles
        })
})

// watch searchbar value, and filter if requiered
watch(() => store.inputData, () => {
    if (store.heart) {
        articles.value = store.articles.filter((article) =>
            article.name.toLowerCase().includes(store.inputData.toLowerCase()) && article.favori == 1)
    } else {
        articles.value = store.articles.filter((article) =>
            article.name.toLowerCase().includes(store.inputData.toLowerCase()))
    }
})

// watch if favorite filter is ON or not, and filter if requiered
watch(() => store.heart, () => {
    if (store.inputData == '') {
        articles.value = !store.heart ? store.articles
            : store.articles.filter((article) => article.favori == 1)
    } else {
        articles.value = !store.heart ? store.articles.filter((article) =>
            article.name.toLowerCase().includes(store.inputData.toLowerCase()))
            : store.articles.filter((article) =>
                article.name.toLowerCase().includes(store.inputData.toLowerCase()) && article.favori == 1)
    }
})

async function consume(article) {
    axios.get(`http://localhost:8080/api/product/consume?id=${article.id}&userid=${store.userID}`)
        .then(response => article.quantity = response.data.quantity)
}

// method qui permet d'ajouter/retirer un favori onclick
async function changeFavorite(article) {
    axios.get(`http://localhost:8080/api/product/favorite?productid=${article.id}&userid=${store.userID}`)
        .then(response => {
            article.favori = response.data.favori
        })
}

function pushItemInList(article) {
    store.list.push(article)
}

</script>

<template>
    <div id="container">
        <article v-for='article in articles' :key="article.id">
            <picture><img :src="srcImg + article.img" alt="">

                <!---------- IS FAVORITE ---------------------------------------------------------------->
                <img v-if="article.favori == 1" @click="changeFavorite(article)" class="favorite"
                    src="../assets/img/heart-solid-like-red.svg" alt="">

                <!---------- OR NOT ----------------------------------------------------------------------------->
                <img v-else @click="changeFavorite(article)" class="favorite" src="../assets/img/heart-solid-like.svg"
                    alt="">
                <!-- ----------------------------------------------------------------------------------------- -->

            </picture>
            <h3>{{ article.name }}</h3>
            <div>
                <p v-if="article.quantity > 0">{{ article.price }} $</p>
                <p v-else class="red">Rupture</p>
                <button class="button" v-if="article.quantity > 0"
                    @click="consume(article), store.increment(), pushItemInList(article)">Acheter</button>
            </div>
        </article>
    </div>
</template>

<style lang="scss" scoped>
article {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
    width: 140px;
    height: 140px;
    text-align: center;
    background: white;
    color: black;
    border-radius: 1em;
    gap: 0.5em;
    margin: 0 auto;

    picture {
        position: relative;
        max-height: 50%;
        overflow: hidden;

        img {
            width: 100%;
            border-radius: 1em 1em 0 0;
        }

        .favorite {
            position: absolute;
            width: 20px;
            top: 0.5em;
            right: 0.5em;
            cursor: pointer;
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
            background: green;
            color: white;
            padding: 0.5em;
            border-radius: 1em;
        }
    }
}

@media screen and (min-width: 375px) {
    article {
        width: 160px;
        height: 160px;
    }
}

@media screen and (min-width: 425px) {
    article {
        width: 180px;
        height: 180px;
    }
}

@media screen and (min-width: 768px) {
    article {
        width: 220px;
        height: 220px;
    }
}
</style>